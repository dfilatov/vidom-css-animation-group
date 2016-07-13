import { Component, node, IS_DEBUG, console } from 'vidom';
import { AnimationGroup } from 'vidom-animation-group';
import { requestAnimationFrame, cancelAnimationFrame, getAnimationEndEvent } from './utils';

export default class CSSTransitionGroup extends Component {
    onInit() {
        this._onAppear = this._onAppear.bind(this);
        this._onEnter = this._onEnter.bind(this);
        this._onLeave = this._onLeave.bind(this);
    }

    onRender({ appearFrom, appearTo, enterFrom, enterTo, leaveFrom, leaveTo }, children) {
        if(IS_DEBUG) {
            if(!appearFrom !== !appearTo) {
                console.error('You must provide both "appearFrom" and "appearTo" class names.')
            }

            if(!enterFrom !== !enterTo) {
                console.error('You must provide both "enterFrom" and "enterTo" class names.')
            }

            if(!leaveFrom !== !leaveTo) {
                console.error('You must provide both "leaveFrom" and "leaveTo" class names.')
            }
        }

        return node(AnimationGroup)
            .attrs({
                onAppear : appearFrom && this._onAppear,
                onEnter : enterFrom && this._onEnter,
                onLeave : leaveFrom && this._onLeave
            })
            .children(children);
    }

    _onAppear(domNode, onAppeared) {
        const { appearFrom, appearTo } = this.getAttrs();

        return buildAnimation(domNode, appearFrom, appearTo, false, onAppeared);
    }

    _onEnter(domNode, onEntered) {
        const { enterFrom, enterTo } = this.getAttrs();

        return buildAnimation(domNode, enterFrom, enterTo, false, onEntered);
    }

    _onLeave(domNode, onLeft) {
        const { leaveFrom, leaveTo } = this.getAttrs();

        return buildAnimation(domNode, leaveFrom, leaveTo, true, onLeft);
    }
}

function buildAnimation(domNode, classFrom, classTo, keepClassTo, cb) {
    const { classList } = domNode,
        transitionEndEvent = getAnimationEndEvent('transition');

    classList.add(classFrom);

    const onTransitionEnd = e => {
        if(e.target === domNode) {
            domNode.removeEventListener(transitionEndEvent, onTransitionEnd);
            classList.remove(classFrom);
            if(!keepClassTo) {
                classList.remove(classTo);
            }
            cb();
        }
    };
    let timer = requestAnimationFrame(() => {
        timer = null;
        domNode.addEventListener(transitionEndEvent, onTransitionEnd, false);
        classList.add(classTo);
    });

    return () => {
        if(timer !== null) {
            cancelAnimationFrame(timer);
        }

        classList.remove(classFrom);
        classList.remove(classTo);

        domNode.removeEventListener(transitionEndEvent, onTransitionEnd);
    };
}
