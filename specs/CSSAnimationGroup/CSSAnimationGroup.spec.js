import { mountToDomSync, unmountFromDomSync, node } from 'vidom';
import { AnimationGroup } from 'vidom-animation-group';
import { CSSAnimationGroup } from '../../src';
import { requestAnimationFrame, getAnimationEndEvent } from '../../src/utils';
import simulate from 'simulate';
import sinon from 'sinon';

describe('CSSAnimationGroup', () => {
    const attrs = {
            appear : 'appear',
            enter : 'enter',
            leave : 'leave'
        },
        animationEndEvent = getAnimationEndEvent('animation');
    let domNode;

    function hasClass(id, cls) {
        return document.getElementById(id).classList.contains(cls);
    }

    function addAnimationEndListener(id, fn) {
        requestAnimationFrame(() => {
            document.getElementById(id).addEventListener(animationEndEvent, fn, false);
        });
    }

    function dispatchAnimationEndEvent(id) {
        simulate.event(document.getElementById(id), animationEndEvent);
    }

    beforeEach(() => {
        document.body.appendChild(domNode = document.createElement('div'));
    });

    afterEach(() => {
        unmountFromDomSync(domNode);
        document.body.removeChild(domNode);
    });

    it('should add "appear" class for each item', () => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs)
                .children([
                    node('div').key('a').attrs({ id : 'id1' }),
                    node('div').key('b').attrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'appear')).to.be.ok();
        expect(hasClass('id2', 'appear')).to.be.ok();
    });

    it('should remove "appear" class, call callback on animation end', done => {
        sinon.spy(AnimationGroup.prototype, '_onAppeared');

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs)
                .children([
                    node('div').key('a').attrs({ id : 'id1' })
                ]));

        addAnimationEndListener('id1', () => {
            expect(hasClass('id1', 'appear')).not.to.be.ok();
            expect(AnimationGroup.prototype._onAppeared.called).to.be.ok();

            AnimationGroup.prototype._onAppeared.restore();
            done();
        });

        setTimeout(() => {
            dispatchAnimationEndEvent('id1');
        }, 30);
    });

    it('should remove "appear" classes on stop', done => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .children([
                    node('div').key('a').attrs({ id : 'id1' })
                ]));

        setTimeout(() => {
            mountToDomSync(
                domNode,
                node(CSSAnimationGroup)
                    .attrs(attrs));

            expect(hasClass('id1', 'appear')).not.to.be.ok();

            done();
        }, 30);
    });

    it('should add "enter" class for each item', () => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs)
                .children([
                    node('div').key('a').attrs({ id : 'id1' }),
                    node('div').key('b').attrs({ id : 'id2' })
                ]));

        expect(hasClass('id1', 'enter')).to.be.ok();
        expect(hasClass('id2', 'enter')).to.be.ok();
    });

    it('should remove "enter" class, call callback on animation end', done => {
        sinon.spy(AnimationGroup.prototype, '_onEntered');

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs)
                .children(node('div').key('a').attrs({ id : 'id1' })));

        addAnimationEndListener('id1', () => {
            expect(hasClass('id1', 'enter')).not.to.be.ok();
            expect(AnimationGroup.prototype._onEntered.called).to.be.ok();

            AnimationGroup.prototype._onEntered.restore();
            done();
        });

        setTimeout(() => {
            dispatchAnimationEndEvent('id1');
        }, 30);
    });

    it('should remove "enter" class on stop', done => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .children(node('div').key('a').attrs({ id : 'id1' })));

        setTimeout(() => {
            mountToDomSync(
                domNode,
                node(CSSAnimationGroup)
                    .attrs(attrs));

            expect(hasClass('id1', 'enter')).not.to.be.ok();

            done();
        }, 30);
    });

    it('should add "leave" class for each item', () => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .children([
                    node('div').key('a').attrs({ id : 'id1' }),
                    node('div').key('b').attrs({ id : 'id2' })
                ]));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs));

        expect(hasClass('id1', 'leave')).to.be.ok();
        expect(hasClass('id2', 'leave')).to.be.ok();
    });

    it('should not remove "leave" class, call callback on animation end', done => {
        sinon.spy(AnimationGroup.prototype, '_onLeft');

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .children([
                    node('div').key('a').attrs({ id : 'id1' })
                ]));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .attrs(attrs));

        addAnimationEndListener('id1', () => {
            expect(hasClass('id1', 'leave')).to.be.ok();
            expect(AnimationGroup.prototype._onLeft.called).to.be.ok();

            AnimationGroup.prototype._onLeft.restore();
            done();
        });

        setTimeout(() => {
            dispatchAnimationEndEvent('id1');
        }, 30);
    });

    it('should remove "leave" classes on stop', done => {
        mountToDomSync(
            domNode,
            node(CSSAnimationGroup)
                .children([
                    node('div').key('a').attrs({ id : 'id1' })
                ]));

        mountToDomSync(
            domNode,
            node(CSSAnimationGroup));

        setTimeout(() => {
            mountToDomSync(
                domNode,
                node(CSSAnimationGroup)
                    .children([
                        node('div').key('a').attrs({ id : 'id1' })
                    ]));

            expect(hasClass('id1', 'leavel')).not.to.be.ok();

            done();
        }, 30);
    });
});
