import { mountSync, unmount, node } from 'vidom';
import { AnimationGroup } from 'vidom-animation-group';
import { CssTransitionGroup } from '../../src';
import { requestAnimationFrame, getAnimationEndEvent } from '../../src/utils';
import simulate from 'simulate';
import sinon from 'sinon';

describe('CssTransitionGroup', () => {
    const attrs = {
            appearFrom : 'appear-from',
            appearTo : 'appear-to',
            enterFrom : 'enter-from',
            enterTo : 'enter-to',
            leaveFrom : 'leave-from',
            leaveTo : 'leave-to'
        },
        transitionEndEvent = getAnimationEndEvent('transition');
    let domNode;

    function hasClass(id, cls) {
        return document.getElementById(id).classList.contains(cls);
    }

    function addTransitionEndListener(id, fn) {
        requestAnimationFrame(() => {
            document.getElementById(id).addEventListener(transitionEndEvent, fn, false);
        });
    }

    function dispatchTransitionEndEvent(id) {
        simulate.event(document.getElementById(id), transitionEndEvent);
    }

    beforeEach(() => {
        document.body.appendChild(domNode = document.createElement('div'));
    });

    afterEach(() => {
        unmount(domNode);
        document.body.removeChild(domNode);
    });

    it('should add "appearFrom" class for each item', () => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'appear-from')).to.be.ok();
        expect(hasClass('id2', 'appear-from')).to.be.ok();
    });

    it('should add "appearTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'appear-to')).not.to.be.ok();
        expect(hasClass('id2', 'appear-to')).not.to.be.ok();

        requestAnimationFrame(() => {
            expect(hasClass('id1', 'appear-to')).to.be.ok();
            expect(hasClass('id2', 'appear-to')).to.be.ok();

            done();
        });
    });

    it('should remove "appearFrom" and "appearTo" classes, call callback on transition end', done => {
        sinon.spy(AnimationGroup.prototype, '_onAppeared');

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' })
                ]));

        addTransitionEndListener('id1', () => {
            expect(hasClass('id1', 'appear-from')).not.to.be.ok();
            expect(hasClass('id1', 'appear-to')).not.to.be.ok();
            expect(AnimationGroup.prototype._onAppeared.called).to.be.ok();

            AnimationGroup.prototype._onAppeared.restore();
            done();
        });

        setTimeout(() => {
            dispatchTransitionEndEvent('id1');
        }, 30);
    });

    it('should remove "appearFrom" and "appearTo" classes on stop', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' })
                ]));

        setTimeout(() => {
            mountSync(
                domNode,
                node(CssTransitionGroup)
                    .setAttrs(attrs));

            expect(hasClass('id1', 'appear-from')).not.to.be.ok();
            expect(hasClass('id1', 'appear-to')).not.to.be.ok();

            done();
        }, 30);
    });
    
    it('should add "enterFrom" class for each item', () => {
        mountSync(
            domNode,
            node(CssTransitionGroup));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'enter-from')).to.be.ok();
        expect(hasClass('id2', 'enter-from')).to.be.ok();
    });

    it('should add "enterTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'enter-to')).not.to.be.ok();
        expect(hasClass('id2', 'enter-to')).not.to.be.ok();

        requestAnimationFrame(() => {
            expect(hasClass('id1', 'enter-to')).to.be.ok();
            expect(hasClass('id2', 'enter-to')).to.be.ok();

            done();
        });
    });

    it('should remove "enterFrom" and "enterTo" classes, call callback on transition end', done => {
        sinon.spy(AnimationGroup.prototype, '_onEntered');

        mountSync(
            domNode,
            node(CssTransitionGroup));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs)
                .setChildren(node('div').setKey('a').setAttrs({ id : 'id1' })));

        addTransitionEndListener('id1', () => {
            expect(hasClass('id1', 'enter-from')).not.to.be.ok();
            expect(hasClass('id1', 'enter-to')).not.to.be.ok();
            expect(AnimationGroup.prototype._onEntered.called).to.be.ok();

            AnimationGroup.prototype._onEntered.restore();
            done();
        });

        setTimeout(() => {
            dispatchTransitionEndEvent('id1');
        }, 30);
    });
    
    it('should remove "enterFrom" and "enterTo" classes on stop', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren(node('div').setKey('a').setAttrs({ id : 'id1' })));

        setTimeout(() => {
            mountSync(
                domNode,
                node(CssTransitionGroup)
                    .setAttrs(attrs));

            expect(hasClass('id1', 'enter-from')).not.to.be.ok();
            expect(hasClass('id1', 'enter-to')).not.to.be.ok();

            done();
        }, 30);
    });

    it('should add "leaveFrom" class for each item', () => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs));

        expect(hasClass('id1', 'leave-from')).to.be.ok();
        expect(hasClass('id2', 'leave-from')).to.be.ok();
    });

    it('should add "leaveTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' }),
                    node('div').setKey('b').setAttrs({ id : 'id2' })
                ]));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs));

        expect(hasClass('id1', 'leave-to')).not.to.be.ok();
        expect(hasClass('id2', 'leave-to')).not.to.be.ok();

        requestAnimationFrame(() => {
            expect(hasClass('id1', 'leave-to')).to.be.ok();
            expect(hasClass('id2', 'leave-to')).to.be.ok();

            done();
        });
    });

    it('should remove "leaveFrom" and keep "leaveTo" classes, call callback on transition end', done => {
        sinon.spy(AnimationGroup.prototype, '_onLeft');

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' })
                ]));

        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setAttrs(attrs));

        addTransitionEndListener('id1', () => {
            expect(hasClass('id1', 'leave-from')).not.to.be.ok();
            expect(hasClass('id1', 'leave-to')).to.be.ok();
            expect(AnimationGroup.prototype._onLeft.called).to.be.ok();

            AnimationGroup.prototype._onLeft.restore();
            done();
        });

        setTimeout(() => {
            dispatchTransitionEndEvent('id1');
        }, 30);
    });

    it('should remove "leaveFrom" and "leaveTo" classes on stop', done => {
        mountSync(
            domNode,
            node(CssTransitionGroup)
                .setChildren([
                    node('div').setKey('a').setAttrs({ id : 'id1' })
                ]));

        mountSync(
            domNode,
            node(CssTransitionGroup));

        setTimeout(() => {
            mountSync(
                domNode,
                node(CssTransitionGroup)
                    .setChildren([
                        node('div').setKey('a').setAttrs({ id : 'id1' })
                    ]));

            expect(hasClass('id1', 'leave-from')).not.to.be.ok();
            expect(hasClass('id1', 'leave-to')).not.to.be.ok();

            done();
        }, 30);
    });
});
