import { Component, node } from 'vidom';
import { AnimationGroup } from 'vidom-animation-group';
import { getAnimationEndEvent } from './utils';

export default class CssAnimationGroup extends Component {
    onInit() {
        this._onAppear = this._onAppear.bind(this);
        this._onEnter = this._onEnter.bind(this);
        this._onLeave = this._onLeave.bind(this);
    }

    onRender({ appear, enter, leave }, children) {
        return node(AnimationGroup)
            .attrs({
                onAppear : appear && this._onAppear,
                onEnter : enter && this._onEnter,
                onLeave : leave && this._onLeave
            })
            .children(children);
    }

    _onAppear(domNode, onAppeared) {
        return buildAnimation(domNode, this.getAttrs().appear, false, onAppeared);
    }

    _onEnter(domNode, onEntered) {
        return buildAnimation(domNode, this.getAttrs().enter, false, onEntered);
    }

    _onLeave(domNode, onLeft) {
        return buildAnimation(domNode, this.getAttrs().leave, true, onLeft);
    }
}

function buildAnimation(domNode, animationClass, keepClass, cb) {
    const { classList } = domNode,
        animationEndEvent = getAnimationEndEvent('animation');

    classList.add(animationClass);

    const onAnimationEnd = e => {
        if(e.target === domNode) {
            domNode.removeEventListener(animationEndEvent, onAnimationEnd);
            if(!keepClass) {
                classList.remove(animationClass);
            }
            cb();
        }
    };

    domNode.addEventListener(animationEndEvent, onAnimationEnd, false);

    return () => {
        classList.remove(animationClass);

        domNode.removeEventListener(animationEndEvent, onAnimationEnd);
    };
}
