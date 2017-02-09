import { Component, node } from 'vidom';
import { AnimationGroup } from 'vidom-animation-group';
import { getAnimationEndEvent } from './utils';

export default class CssAnimationGroup extends Component {
    onInit() {
        this._onAppear = this._onAppear.bind(this);
        this._onEnter = this._onEnter.bind(this);
        this._onLeave = this._onLeave.bind(this);
    }

    onRender() {
        const { appear, enter, leave } = this.attrs;

        return node(AnimationGroup)
            .setAttrs({
                onAppear : appear && this._onAppear,
                onEnter : enter && this._onEnter,
                onLeave : leave && this._onLeave
            })
            .setChildren(this.children);
    }

    _onAppear(domNode, onAppeared) {
        return buildAnimation(domNode, this.attrs.appear, false, onAppeared);
    }

    _onEnter(domNode, onEntered) {
        return buildAnimation(domNode, this.attrs.enter, false, onEntered);
    }

    _onLeave(domNode, onLeft) {
        return buildAnimation(domNode, this.attrs.leave, true, onLeft);
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
