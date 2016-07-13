const ANIMATION_END_EVENTS_CONFIG = {
        transition : {
            eventClass : 'TransitionEvent',
            defaultEvent : 'transitionend',
            styleToEvents : {
                transition : 'transitionend',
                OTransition : 'otransitionend',
                MozTransition : 'mozTransitionEnd',
                WebkitTransition : 'webkitTransitionEnd'
            }
        },
        animation : {
            eventClass : 'AnimationEvent',
            defaultEvent : 'animationend',
            styleToEvents : {
                animation : 'animationend',
                OAnimation : 'oanimationend',
                MozAnimation : 'mozAnimationEnd',
                WebkitAnimation : 'webkitAnimationEnd'
            }
        }
    },
    endEvents = {};

export const requestAnimationFrame = typeof window !== 'undefined' &&
    (window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame) ||
    (callback => {
        return setTimeout(callback, 1000 / 60);
    });

export const cancelAnimationFrame = typeof window !== 'undefined' &&
    (window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame) ||
    clearTimeout;

export function getAnimationEndEvent(type) {
    if(endEvents[type]) {
        return endEvents[type];
    }

    const config = ANIMATION_END_EVENTS_CONFIG[type];

    if(!(config.eventClass in window)) {
        delete config.styleToEvents[type];
    }

    const { style } = document.body,
        mapping = config.styleToEvents;

    for(let i in mapping) {
        if(typeof style[i] !== 'undefined') {
            return endEvents[type] = mapping[i];
        }
    }

    return endEvents[type] = config.defaultEvent;
}

