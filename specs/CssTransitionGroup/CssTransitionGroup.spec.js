import { mountSync, unmountSync, elem } from 'vidom';
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
        unmountSync(domNode);
        document.body.removeChild(domNode);
    });

    it('should add "appearFrom" class for each item', () => {
        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                attrs,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
                ]));

        expect(hasClass('id1', 'appear-from')).to.be.ok();
        expect(hasClass('id2', 'appear-from')).to.be.ok();
    });

    it('should add "appearTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                attrs,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
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
            elem(
                CssTransitionGroup,
                null,
                attrs,
                elem('div', 'a', { id : 'id1' })));

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
            elem(
                CssTransitionGroup,
                null,
                null,
                elem('div', 'a', { id : 'id1' })));

        setTimeout(() => {
            mountSync(
                domNode,
                elem(CssTransitionGroup, null, attrs));

            expect(hasClass('id1', 'appear-from')).not.to.be.ok();
            expect(hasClass('id1', 'appear-to')).not.to.be.ok();

            done();
        }, 30);
    });

    it('should add "enterFrom" class for each item', () => {
        mountSync(
            domNode,
            elem(CssTransitionGroup));

        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                attrs,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
                ]));

        expect(hasClass('id1', 'enter-from')).to.be.ok();
        expect(hasClass('id2', 'enter-from')).to.be.ok();
    });

    it('should add "enterTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            elem(CssTransitionGroup));

        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                attrs,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
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
            elem(CssTransitionGroup));

        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                attrs,
                elem('div', 'a', { id : 'id1' })));

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
            elem(CssTransitionGroup));

        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                null,
                elem('div', 'a', { id : 'id1' })));

        setTimeout(() => {
            mountSync(
                domNode,
                elem(CssTransitionGroup, null, attrs));

            expect(hasClass('id1', 'enter-from')).not.to.be.ok();
            expect(hasClass('id1', 'enter-to')).not.to.be.ok();

            done();
        }, 30);
    });

    it('should add "leaveFrom" class for each item', () => {
        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                null,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
                ]));

        mountSync(
            domNode,
            elem(CssTransitionGroup, null, attrs));

        expect(hasClass('id1', 'leave-from')).to.be.ok();
        expect(hasClass('id2', 'leave-from')).to.be.ok();
    });

    it('should add "leaveTo" class on next frame for each item', done => {
        mountSync(
            domNode,
            elem(
                CssTransitionGroup,
                null,
                null,
                [
                    elem('div', 'a', { id : 'id1' }),
                    elem('div', 'b', { id : 'id2' })
                ]));

        mountSync(
            domNode,
            elem(CssTransitionGroup, null, attrs));

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
            elem(
                CssTransitionGroup,
                null,
                null,
                elem('div', 'a', { id : 'id1' })));

        mountSync(
            domNode,
            elem(CssTransitionGroup, null, attrs));

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
            elem(
                CssTransitionGroup,
                null,
                null,
                elem('div', 'a', { id : 'id1' })));

        mountSync(
            domNode,
            elem(CssTransitionGroup));

        setTimeout(() => {
            mountSync(
                domNode,
                elem(
                    CssTransitionGroup,
                    null,
                    null,
                    elem('div', 'a', { id : 'id1' })));

            expect(hasClass('id1', 'leave-from')).not.to.be.ok();
            expect(hasClass('id1', 'leave-to')).not.to.be.ok();

            done();
        }, 30);
    });
});
