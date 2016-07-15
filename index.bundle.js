/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/example/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vidom = __webpack_require__(1);

	var _src = __webpack_require__(3);

	var __vnode__ = __webpack_require__(1).node,
	    __vnormalizer__ = __webpack_require__(1).normalizeChildren;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PLAYGROUND_MARGIN = 30,
	    PLAYGROUND_SIZE = 300;

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    App.prototype.onInitialStateRequest = function onInitialStateRequest() {
	        return {
	            circles: Array.apply(null, { length: 10 }).map(function (_) {
	                return generateCircle();
	            })
	        };
	    };

	    App.prototype.onInit = function onInit() {
	        this._onPlaygroundClick = this._onPlaygroundClick.bind(this);
	    };

	    App.prototype.onRender = function onRender() {
	        var _this2 = this;

	        return __vnode__('div').attrs({
	            'class': 'app'
	        }).children([__vnode__('h1').attrs({
	            'class': 'app__title'
	        }).children('CSSTransitionGroup example'), __vnode__('div').attrs({
	            'class': 'app__info'
	        }).children([__vnode__('span').children('Click on circle to remove it.'), __vnode__('br'), __vnode__('span').children('Click anywhere else to create a new circle.')]), __vnode__('div').attrs({
	            'class': 'app__playground',
	            'style': { width: PLAYGROUND_SIZE + 'px', height: PLAYGROUND_SIZE + 'px' },
	            'onClick': this._onPlaygroundClick
	        }).children(__vnode__(_src.CSSTransitionGroup).attrs({
	            'appearFrom': 'circle_appear-from',
	            'appearTo': 'circle_appear-to',
	            'enterFrom': 'circle_enter-from',
	            'enterTo': 'circle_enter-to',
	            'leaveFrom': 'circle_leave-from',
	            'leaveTo': 'circle_leave-to'
	        }).children(__vnormalizer__(this.getState().circles.map(function (_ref) {
	            var key = _ref.key;
	            var style = _ref.style;
	            return __vnode__('div').key(key).attrs({
	                'class': 'circle',
	                'style': style,
	                'title': 'remove me',
	                'onClick': function (e) {
	                    return _this2._onClick(e, key);
	                }
	            });
	        })))), __vnode__('div').attrs({
	            'class': 'app__link'
	        }).children(__vnode__('a').attrs({
	            'href': '//github.com/dfilatov/vidom-css-animation-group/tree/master/example',
	            'target': '_blank'
	        }).children('Source code'))]);
	    };

	    App.prototype._onPlaygroundClick = function _onPlaygroundClick(_ref2) {
	        var nativeEvent = _ref2.nativeEvent;

	        this.setState({
	            circles: [].concat(this.getState().circles, [generateCircle(nativeEvent.layerX, nativeEvent.layerY)])
	        });
	    };

	    App.prototype._onClick = function _onClick(e, key) {
	        e.stopPropagation();
	        this.setState({ circles: this.getState().circles.filter(function (circle) {
	                return key !== circle.key;
	            }) });
	    };

	    return App;
	}(_vidom.Component);

	var nextKey = 1;

	function generateKey() {
	    return nextKey++;
	}

	function generateCircle(left, top) {
	    return { key: generateKey(), style: generateStyle(left, top) };
	}

	function generateStyle() {
	    var left = arguments.length <= 0 || arguments[0] === undefined ? generateCoord(PLAYGROUND_SIZE) : arguments[0];
	    var top = arguments.length <= 1 || arguments[1] === undefined ? generateCoord(PLAYGROUND_SIZE) : arguments[1];

	    return {
	        left: left + 'px',
	        top: top + 'px',
	        background: 'rgb(' + generateColor() + ',' + generateColor() + ',' + generateColor() + ')'
	    };
	}

	function generateCoord(max) {
	    return Math.floor(Math.random() * (max - 2 * PLAYGROUND_MARGIN)) + PLAYGROUND_MARGIN;
	}

	function generateColor() {
	    return Math.floor(Math.random() * 255);
	}

	(0, _vidom.mountToDom)(document.getElementById('root'), __vnode__(App));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var escapeAttr = function (str) {
	    return (str + '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
	};

	var isInArray = function (arr, item) {
	    var len = arr.length;
	    var i = 0;

	    while (i < len) {
	        if (arr[i++] == item) {
	            return true;
	        }
	    }

	    return false;
	};

	var DASHERIZE_RE = /([^A-Z]+)([A-Z])/g;

	var dasherize = function (str) {
	    return str.replace(DASHERIZE_RE, '$1-$2').toLowerCase();
	};

	var noOp = function () {};

	var globalConsole = typeof console == 'undefined' ? null : console;
	var consoleWrapper = {};
	var PREFIXES = {
	    log: '',
	    info: '',
	    warn: 'Warning!',
	    error: 'Error!'
	};
	['log', 'info', 'warn', 'error'].forEach(function (name) {
	    consoleWrapper[name] = globalConsole ? globalConsole[name] ? function (arg1, arg2, arg3, arg4, arg5) {
	        // IE9: console methods aren't functions
	        var arg0 = PREFIXES[name];
	        switch (arguments.length) {
	            case 1:
	                globalConsole[name](arg0, arg1);
	                break;

	            case 2:
	                globalConsole[name](arg0, arg1, arg2);
	                break;

	            case 3:
	                globalConsole[name](arg0, arg1, arg2, arg3);
	                break;

	            case 4:
	                globalConsole[name](arg0, arg1, arg2, arg3, arg4);
	                break;

	            case 5:
	                globalConsole[name](arg0, arg1, arg2, arg3, arg4, arg5);
	                break;
	        }
	    } : function () {
	        globalConsole.log.apply(globalConsole, arguments);
	    } : noOp;
	});

	var IS_DEBUG = typeof process === 'undefined' || process.env.NODE_ENV !== 'production';

	function setAttr(node, name, val) {
	    if (name === 'type' && node.tagName === 'INPUT') {
	        var value = node.value; // value will be lost in IE if type is changed
	        node.setAttribute(name, '' + val);
	        node.value = value;
	    } else {
	        node.setAttribute(ATTR_NAMES[name] || name, '' + val);
	    }
	}

	function setBooleanAttr(node, name, val) {
	    if (val) {
	        setAttr(node, name, val);
	    } else {
	        removeAttr$1(node, name);
	    }
	}

	function setProp(node, name, val) {
	    node[name] = val;
	}

	function setObjProp(node, name, val) {
	    if (IS_DEBUG) {
	        var typeOfVal = typeof val;
	        if (typeOfVal !== 'object') {
	            consoleWrapper.error('"' + name + '" attribute expects an object as a value, not a ' + typeOfVal);
	            return;
	        }
	    }

	    var prop = node[name];
	    for (var i in val) {
	        prop[i] = val[i] == null ? '' : val[i];
	    }
	}

	function setPropWithCheck(node, name, val) {
	    if (name === 'value' && node.tagName === 'SELECT') {
	        setSelectValue(node, val);
	    } else {
	        node[name] !== val && (node[name] = val);
	    }
	}

	function removeAttr$1(node, name) {
	    node.removeAttribute(ATTR_NAMES[name] || name);
	}

	function removeProp(node, name) {
	    if (name === 'style') {
	        node[name].cssText = '';
	    } else if (name === 'value' && node.tagName === 'SELECT') {
	        removeSelectValue(node);
	    } else {
	        node[name] = getDefaultPropVal(node.tagName, name);
	    }
	}

	function setSelectValue(node, value) {
	    var isMultiple = Array.isArray(value),
	        options = node.options,
	        len = options.length;

	    var i = 0,
	        optionNode = void 0;

	    while (i < len) {
	        optionNode = options[i++];
	        optionNode.selected = value != null && (isMultiple ? isInArray(value, optionNode.value) : optionNode.value == value);
	    }
	}

	function removeSelectValue(node) {
	    var options = node.options,
	        len = options.length;

	    var i = 0;

	    while (i < len) {
	        options[i++].selected = false;
	    }
	}

	function attrToString(name, value) {
	    return (ATTR_NAMES[name] || name) + '="' + escapeAttr(value) + '"';
	}

	function booleanAttrToString(name, value) {
	    return value ? name : '';
	}

	function stylePropToString(name, value) {
	    var styles = '';

	    for (var i in value) {
	        value[i] != null && (styles += dasherize(i) + ':' + value[i] + ';');
	    }

	    return styles ? name + '="' + styles + '"' : styles;
	}

	var defaultPropVals = {};
	function getDefaultPropVal(tag, attrName) {
	    var tagAttrs = defaultPropVals[tag] || (defaultPropVals[tag] = {});
	    return attrName in tagAttrs ? tagAttrs[attrName] : tagAttrs[attrName] = document.createElement(tag)[attrName];
	}

	var ATTR_NAMES = {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv',
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset',
	    tabIndex: 'tabindex'
	};
	var DEFAULT_ATTR_CFG = {
	    set: setAttr,
	    remove: removeAttr$1,
	    toString: attrToString
	};
	var BOOLEAN_ATTR_CFG = {
	    set: setBooleanAttr,
	    remove: removeAttr$1,
	    toString: booleanAttrToString
	};
	var DEFAULT_PROP_CFG = {
	    set: setProp,
	    remove: removeProp,
	    toString: attrToString
	};
	var BOOLEAN_PROP_CFG = {
	    set: setProp,
	    remove: removeProp,
	    toString: booleanAttrToString
	};
	var attrsCfg = {
	    checked: BOOLEAN_PROP_CFG,
	    controls: DEFAULT_PROP_CFG,
	    disabled: BOOLEAN_ATTR_CFG,
	    id: DEFAULT_PROP_CFG,
	    ismap: BOOLEAN_ATTR_CFG,
	    loop: DEFAULT_PROP_CFG,
	    multiple: BOOLEAN_PROP_CFG,
	    muted: DEFAULT_PROP_CFG,
	    open: BOOLEAN_ATTR_CFG,
	    readOnly: BOOLEAN_PROP_CFG,
	    selected: BOOLEAN_PROP_CFG,
	    srcDoc: DEFAULT_PROP_CFG,
	    style: {
	        set: setObjProp,
	        remove: removeProp,
	        toString: stylePropToString
	    },
	    value: {
	        set: setPropWithCheck,
	        remove: removeProp,
	        toString: attrToString
	    }
	};
	function domAttrs(attrName) {
	    return attrsCfg[attrName] || DEFAULT_ATTR_CFG;
	}

	function append(parent, child) {
	    if (Array.isArray(parent)) {
	        insertBefore(child, parent[1]);
	    } else if (Array.isArray(child)) {
	        var currentChild = child[0],
	            nextChild = void 0;
	        var lastChild = child[1];

	        while (currentChild !== lastChild) {
	            nextChild = currentChild.nextSibling;
	            parent.appendChild(currentChild);
	            currentChild = nextChild;
	        }

	        parent.appendChild(lastChild);
	    } else {
	        parent.appendChild(child);
	    }
	}

	function remove(child) {
	    if (Array.isArray(child)) {
	        var currentChild = child[0],
	            nextChild = void 0;
	        var lastChild = child[1],
	            parent = lastChild.parentNode;

	        while (currentChild !== lastChild) {
	            nextChild = currentChild.nextSibling;
	            parent.removeChild(currentChild);
	            currentChild = nextChild;
	        }

	        parent.removeChild(lastChild);
	    } else {
	        child.parentNode.removeChild(child);
	    }
	}

	function insertBefore(child, beforeChild) {
	    Array.isArray(beforeChild) && (beforeChild = beforeChild[0]);

	    if (Array.isArray(child)) {
	        var currentChild = child[0],
	            nextChild = void 0;
	        var lastChild = child[1],
	            parent = lastChild.parentNode;

	        while (currentChild !== lastChild) {
	            nextChild = currentChild.nextSibling;
	            parent.insertBefore(currentChild, beforeChild);
	            currentChild = nextChild;
	        }

	        parent.insertBefore(lastChild, beforeChild);
	    } else {
	        beforeChild.parentNode.insertBefore(child, beforeChild);
	    }
	}

	function move(child, toChild, after) {
	    if (after) {
	        Array.isArray(toChild) && (toChild = toChild[1]);
	        var nextSibling = toChild.nextSibling;

	        nextSibling ? insertBefore(child, nextSibling) : append(toChild.parentNode, child);
	    } else {
	        insertBefore(child, toChild);
	    }
	}

	function replace$1(old, replacement) {
	    if (Array.isArray(old)) {
	        insertBefore(replacement, old);
	        remove(old);
	    } else {
	        old.parentNode.replaceChild(replacement, old);
	    }
	}

	function removeChildren$1(from) {
	    if (Array.isArray(from)) {
	        var currentChild = from[0].nextSibling,
	            nextChild = void 0;
	        var lastChild = from[1],
	            parent = lastChild.parentNode;

	        while (currentChild !== lastChild) {
	            nextChild = currentChild.nextSibling;
	            parent.removeChild(currentChild);
	            currentChild = nextChild;
	        }
	    } else {
	        from.textContent = '';
	    }
	}

	var domOps = {
	    append: append,
	    remove: remove,
	    insertBefore: insertBefore,
	    move: move,
	    replace: replace$1,
	    removeChildren: removeChildren$1
	};

	var DEFAULT_NS_URI = 'http://www.w3.org/1999/xhtml';

	function getNs(domNode) {
	    return Array.isArray(domNode) ? getParentNs(domNode) : domNode.namespaceURI === DEFAULT_NS_URI ? null : domNode.namespaceURI;
	}

	function getParentNs(domNode) {
	    return getNs((Array.isArray(domNode) ? domNode[domNode.length - 1] : domNode).parentNode);
	}

	function isEventSupported(type) {
	    var eventProp = 'on' + type;

	    if (eventProp in document) {
	        return true;
	    }

	    var domNode = document.createElement('div');

	    domNode.setAttribute(eventProp, 'return;');
	    if (typeof domNode[eventProp] === 'function') {
	        return true;
	    }

	    return type === 'wheel' && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true && document.implementation.hasFeature('Events.wheel', '3.0');
	}

	function SyntheticEvent(type, nativeEvent) {
	    this.type = type;
	    this.target = nativeEvent.target;
	    this.nativeEvent = nativeEvent;

	    this._isPropagationStopped = false;
	    this._isDefaultPrevented = false;
	    this._isSeized = false;
	}

	SyntheticEvent.prototype = {
	    stopPropagation: function () {
	        this._isPropagationStopped = true;

	        var nativeEvent = this.nativeEvent;
	        nativeEvent.stopPropagation ? nativeEvent.stopPropagation() : nativeEvent.cancelBubble = true;
	    },
	    isPropagationStopped: function () {
	        return this._isPropagationStopped;
	    },
	    preventDefault: function () {
	        this._isDefaultPrevented = true;

	        var nativeEvent = this.nativeEvent;
	        nativeEvent.preventDefault ? nativeEvent.preventDefault() : nativeEvent.returnValue = false;
	    },
	    isDefaultPrevented: function () {
	        return this._isDefaultPrevented;
	    },
	    persist: function () {
	        this._isPersisted = true;
	    }
	};

	var eventsPool = {};

	function createSyntheticEvent(type, nativeEvent) {
	    var pooledEvent = eventsPool[type];

	    if (pooledEvent && !pooledEvent._isPersisted) {
	        pooledEvent.target = nativeEvent.target;
	        pooledEvent.nativeEvent = nativeEvent;
	        pooledEvent._isPropagationStopped = false;
	        pooledEvent._isDefaultPrevented = false;

	        return pooledEvent;
	    }

	    return eventsPool[type] = new SyntheticEvent(type, nativeEvent);
	}

	var ID_PROP = '__vidom__id__';
	var counter = 1;

	function getDomNodeId(node, onlyGet) {
	    return node[ID_PROP] || (onlyGet ? null : node[ID_PROP] = counter++);
	}

	var SimpleMap = void 0;

	if (typeof Map === 'undefined') {
	    SimpleMap = function () {
	        this._storage = {};
	    };

	    SimpleMap.prototype = {
	        has: function (key) {
	            return key in this._storage;
	        },
	        get: function (key) {
	            return this._storage[key];
	        },
	        set: function (key, value) {
	            this._storage[key] = value;
	            return this;
	        },
	        delete: function (key) {
	            return delete this._storage[key];
	        },
	        forEach: function (callback, thisArg) {
	            var storage = this._storage;

	            for (var key in storage) {
	                callback.call(thisArg, storage[key], key, this);
	            }
	        }
	    };
	} else {
	    SimpleMap = Map;
	}

	var SimpleMap$1 = SimpleMap;

	var BUBBLEABLE_NATIVE_EVENTS = ['blur', 'change', 'click', 'contextmenu', 'copy', 'cut', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'focus', 'input', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'paste', 'submit', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'wheel'];
	var NON_BUBBLEABLE_NATIVE_EVENTS = ['canplay', 'canplaythrough', 'complete', 'durationchange', 'emptied', 'ended', 'error', 'load', 'loadeddata', 'loadedmetadata', 'loadstart', 'mouseenter', 'mouseleave', 'pause', 'play', 'playing', 'progress', 'ratechange', 'scroll', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
	var listenersStorage = new SimpleMap$1();
	var eventsCfg = {};
	function globalEventListener(e, type) {
	    type || (type = e.type);

	    var cfg = eventsCfg[type];

	    var target = e.target,
	        listenersCount = cfg.listenersCounter,
	        listeners = void 0,
	        listener = void 0,
	        listenersToInvoke = void 0,
	        domNodeId = void 0;

	    while (listenersCount > 0 && target && target !== document) {
	        if (domNodeId = getDomNodeId(target, true)) {
	            listeners = listenersStorage.get(domNodeId);
	            if (listeners && (listener = listeners[type])) {
	                if (listenersToInvoke) {
	                    listenersToInvoke.push(listener);
	                } else {
	                    listenersToInvoke = [listener];
	                }
	                --listenersCount;
	            }
	        }

	        target = target.parentNode;
	    }

	    if (listenersToInvoke) {
	        var event = createSyntheticEvent(type, e),
	            len = listenersToInvoke.length;

	        var i = 0;

	        while (i < len) {
	            listenersToInvoke[i++](event);
	            if (event.isPropagationStopped()) {
	                break;
	            }
	        }
	    }
	}

	function eventListener(e) {
	    listenersStorage.get(getDomNodeId(e.target))[e.type](createSyntheticEvent(e.type, e));
	}

	if (typeof document !== 'undefined') {
	    (function () {
	        var focusEvents = {
	            focus: 'focusin',
	            blur: 'focusout'
	        };

	        var i = 0,
	            type = void 0;

	        while (i < BUBBLEABLE_NATIVE_EVENTS.length) {
	            type = BUBBLEABLE_NATIVE_EVENTS[i++];
	            eventsCfg[type] = {
	                type: type,
	                bubbles: true,
	                listenersCounter: 0,
	                set: false,
	                setup: focusEvents[type] ? isEventSupported(focusEvents[type]) ? function () {
	                    var type = this.type;
	                    document.addEventListener(focusEvents[type], function (e) {
	                        globalEventListener(e, type);
	                    });
	                } : function () {
	                    document.addEventListener(this.type, globalEventListener, true);
	                } : null
	            };
	        }

	        i = 0;
	        while (i < NON_BUBBLEABLE_NATIVE_EVENTS.length) {
	            eventsCfg[NON_BUBBLEABLE_NATIVE_EVENTS[i++]] = {
	                type: type,
	                bubbles: false,
	                set: false
	            };
	        }
	    })();
	}

	function addListener(domNode, type, listener) {
	    var cfg = eventsCfg[type];
	    if (cfg) {
	        if (!cfg.set) {
	            cfg.setup ? cfg.setup() : cfg.bubbles && document.addEventListener(type, globalEventListener, false);
	            cfg.set = true;
	        }

	        var domNodeId = getDomNodeId(domNode);
	        var listeners = listenersStorage.get(domNodeId);

	        if (!listeners) {
	            listenersStorage.set(domNodeId, listeners = {});
	        }

	        if (!listeners[type]) {
	            cfg.bubbles ? ++cfg.listenersCounter : domNode.addEventListener(type, eventListener, false);
	        }

	        listeners[type] = listener;
	    }
	}

	function removeListener(domNode, type) {
	    var domNodeId = getDomNodeId(domNode, true);

	    if (domNodeId) {
	        var listeners = listenersStorage.get(domNodeId);

	        if (listeners && listeners[type]) {
	            listeners[type] = null;

	            var cfg = eventsCfg[type];

	            if (cfg) {
	                cfg.bubbles ? --cfg.listenersCounter : domNode.removeEventListener(type, eventListener);
	            }
	        }
	    }
	}

	function removeListeners(domNode) {
	    var domNodeId = getDomNodeId(domNode, true);

	    if (domNodeId) {
	        var listeners = listenersStorage.get(domNodeId);

	        if (listeners) {
	            listenersStorage.delete(domNodeId);
	            for (var _type in listeners) {
	                removeListener(domNode, _type);
	            }
	        }
	    }
	}

	var ATTRS_TO_EVENTS = {
	    onBlur: 'blur',
	    onCanPlay: 'canplay',
	    onCanPlayThrough: 'canplaythrough',
	    onChange: 'change',
	    onClick: 'click',
	    onComplete: 'complete',
	    onContextMenu: 'contextmenu',
	    onCopy: 'copy',
	    onCut: 'cut',
	    onDblClick: 'dblclick',
	    onDrag: 'drag',
	    onDragEnd: 'dragend',
	    onDragEnter: 'dragenter',
	    onDragLeave: 'dragleave',
	    onDragOver: 'dragover',
	    onDragStart: 'dragstart',
	    onDrop: 'drop',
	    onDurationChange: 'durationchange',
	    onEmptied: 'emptied',
	    onEnded: 'ended',
	    onError: 'error',
	    onFocus: 'focus',
	    onInput: 'input',
	    onKeyDown: 'keydown',
	    onKeyPress: 'keypress',
	    onKeyUp: 'keyup',
	    onLoad: 'load',
	    onLoadedData: 'loadeddata',
	    onLoadedMetadata: 'loadedmetadata',
	    onLoadStart: 'loadstart',
	    onMouseDown: 'mousedown',
	    onMouseEnter: 'mouseenter',
	    onMouseLeave: 'mouseleave',
	    onMouseMove: 'mousemove',
	    onMouseOut: 'mouseout',
	    onMouseOver: 'mouseover',
	    onMouseUp: 'mouseup',
	    onPaste: 'paste',
	    onPause: 'pause',
	    onPlay: 'play',
	    onPlaying: 'playing',
	    onProgress: 'progress',
	    onRateChange: 'ratechange',
	    onScroll: 'scroll',
	    onSeeked: 'seeked',
	    onSeeking: 'seeking',
	    onStalled: 'stalled',
	    onSubmit: 'submit',
	    onSuspend: 'suspend',
	    onTimeUpdate: 'timeupdate',
	    onTouchCancel: 'touchcancel',
	    onTouchEnd: 'touchend',
	    onTouchMove: 'touchmove',
	    onTouchStart: 'touchstart',
	    onVolumeChange: 'volumechange',
	    onWaiting: 'waiting',
	    onWheel: 'wheel'
	};

	function appendChild(parentNode, childNode) {
	    var parentDomNode = parentNode.getDomNode();

	    domOps.append(parentDomNode, childNode.renderToDom(getNs(parentDomNode)));
	    childNode.mount();
	}

	function insertChild(childNode, beforeChildNode) {
	    var beforeChildDomNode = beforeChildNode.getDomNode();

	    domOps.insertBefore(childNode.renderToDom(getParentNs(beforeChildDomNode)), beforeChildDomNode);
	    childNode.mount();
	}

	function removeChild(childNode) {
	    var childDomNode = childNode.getDomNode();

	    childNode.unmount();
	    domOps.remove(childDomNode);
	}

	function moveChild(childNode, toChildNode, after) {
	    var activeDomNode = document.activeElement;

	    domOps.move(childNode.getDomNode(), toChildNode.getDomNode(), after);

	    if (document.activeElement !== activeDomNode) {
	        activeDomNode.focus();
	    }
	}

	function removeChildren(parentNode) {
	    var parentDomNode = parentNode.getDomNode(),
	        childNodes = parentNode._children,
	        len = childNodes.length;

	    var j = 0;

	    while (j < len) {
	        childNodes[j++].unmount();
	    }

	    domOps.removeChildren(parentDomNode);
	}

	function replace(oldNode, newNode) {
	    var oldDomNode = oldNode.getDomNode();

	    oldNode.unmount();
	    domOps.replace(oldDomNode, newNode.renderToDom(getParentNs(oldDomNode)));
	    newNode.mount();
	}

	function updateAttr(node, attrName, attrVal) {
	    var domNode = node.getDomNode();

	    ATTRS_TO_EVENTS[attrName] ? addListener(domNode, ATTRS_TO_EVENTS[attrName], attrVal) : domAttrs(attrName).set(domNode, attrName, attrVal);
	}

	function removeAttr(node, attrName) {
	    var domNode = node.getDomNode();

	    ATTRS_TO_EVENTS[attrName] ? removeListener(domNode, ATTRS_TO_EVENTS[attrName]) : domAttrs(attrName).remove(domNode, attrName);
	}

	function updateText(node, text, escape) {
	    var domNode = node.getDomNode();

	    if (escape) {
	        var firstChild = domNode.firstChild;

	        firstChild ? firstChild.nodeValue = text : domNode.textContent = text;
	    } else {
	        domNode.innerHTML = text;
	    }
	}

	function removeText(parentNode) {
	    parentNode.getDomNode().textContent = '';
	}

	var patchOps = {
	    appendChild: appendChild,
	    insertChild: insertChild,
	    removeChild: removeChild,
	    moveChild: moveChild,
	    removeChildren: removeChildren,
	    replace: replace,
	    updateAttr: updateAttr,
	    removeAttr: removeAttr,
	    updateText: updateText,
	    removeText: removeText
	};

	function checkReuse(node, name) {
	    if (node.getDomNode()) {
	        console.error("You're trying to reuse the same node \"" + name + "\" more than once.");
	    }
	}

	function checkChildren(children) {
	    var keys = {},
	        len = children.length;

	    var i = 0,
	        child = void 0;

	    while (i < len) {
	        child = children[i++];

	        if (typeof child !== 'object') {
	            consoleWrapper.error('You mustn\'t use simple child in case of multiple children.');
	        } else if (child._key != null) {
	            if (child._key in keys) {
	                consoleWrapper.error('Childrens\' keys must be unique across the children. Found duplicate of "' + child._key + '" key.');
	            } else {
	                keys[child._key] = true;
	            }
	        }
	    }
	}

	function patchChildren(nodeA, nodeB) {
	    var childrenA = nodeA._children,
	        childrenB = nodeB._children,
	        childrenALen = childrenA.length,
	        childrenBLen = childrenB.length;

	    if (childrenALen === 1 && childrenBLen === 1) {
	        childrenA[0].patch(childrenB[0]);
	        return;
	    }

	    var leftIdxA = 0,
	        rightIdxA = childrenALen - 1,
	        leftChildA = childrenA[leftIdxA],
	        leftChildAKey = leftChildA._key,
	        rightChildA = childrenA[rightIdxA],
	        rightChildAKey = rightChildA._key,
	        leftIdxB = 0,
	        rightIdxB = childrenBLen - 1,
	        leftChildB = childrenB[leftIdxB],
	        leftChildBKey = leftChildB._key,
	        rightChildB = childrenB[rightIdxB],
	        rightChildBKey = rightChildB._key,
	        updateLeftIdxA = false,
	        updateRightIdxA = false,
	        updateLeftIdxB = false,
	        updateRightIdxB = false,
	        childrenAIndicesToSkip = {},
	        childrenAKeys = void 0,
	        foundAChildIdx = void 0,
	        foundAChild = void 0;

	    while (leftIdxA <= rightIdxA && leftIdxB <= rightIdxB) {
	        if (childrenAIndicesToSkip[leftIdxA]) {
	            updateLeftIdxA = true;
	        } else if (childrenAIndicesToSkip[rightIdxA]) {
	            updateRightIdxA = true;
	        } else if (leftChildAKey === leftChildBKey) {
	            leftChildA.patch(leftChildB);
	            updateLeftIdxA = true;
	            updateLeftIdxB = true;
	        } else if (rightChildAKey === rightChildBKey) {
	            rightChildA.patch(rightChildB);
	            updateRightIdxA = true;
	            updateRightIdxB = true;
	        } else if (leftChildAKey != null && leftChildAKey === rightChildBKey) {
	            patchOps.moveChild(leftChildA, rightChildA, true);
	            leftChildA.patch(rightChildB);
	            updateLeftIdxA = true;
	            updateRightIdxB = true;
	        } else if (rightChildAKey != null && rightChildAKey === leftChildBKey) {
	            patchOps.moveChild(rightChildA, leftChildA, false);
	            rightChildA.patch(leftChildB);
	            updateRightIdxA = true;
	            updateLeftIdxB = true;
	        } else if (leftChildAKey != null && leftChildBKey == null) {
	            patchOps.insertChild(leftChildB, leftChildA);
	            updateLeftIdxB = true;
	        } else if (leftChildAKey == null && leftChildBKey != null) {
	            patchOps.removeChild(leftChildA);
	            updateLeftIdxA = true;
	        } else {
	            childrenAKeys || (childrenAKeys = buildKeys(childrenA, leftIdxA, rightIdxA));
	            if ((foundAChildIdx = childrenAKeys[leftChildBKey]) == null) {
	                patchOps.insertChild(leftChildB, leftChildA);
	            } else {
	                foundAChild = childrenA[foundAChildIdx];
	                childrenAIndicesToSkip[foundAChildIdx] = true;
	                patchOps.moveChild(foundAChild, leftChildA, false);
	                foundAChild.patch(leftChildB);
	            }
	            updateLeftIdxB = true;
	        }

	        if (updateLeftIdxA) {
	            updateLeftIdxA = false;
	            if (++leftIdxA <= rightIdxA) {
	                leftChildA = childrenA[leftIdxA];
	                leftChildAKey = leftChildA._key;
	            }
	        }

	        if (updateRightIdxA) {
	            updateRightIdxA = false;
	            if (--rightIdxA >= leftIdxA) {
	                rightChildA = childrenA[rightIdxA];
	                rightChildAKey = rightChildA._key;
	            }
	        }

	        if (updateLeftIdxB) {
	            updateLeftIdxB = false;
	            if (++leftIdxB <= rightIdxB) {
	                leftChildB = childrenB[leftIdxB];
	                leftChildBKey = leftChildB._key;
	            }
	        }

	        if (updateRightIdxB) {
	            updateRightIdxB = false;
	            if (--rightIdxB >= leftIdxB) {
	                rightChildB = childrenB[rightIdxB];
	                rightChildBKey = rightChildB._key;
	            }
	        }
	    }

	    while (leftIdxA <= rightIdxA) {
	        if (!childrenAIndicesToSkip[leftIdxA]) {
	            patchOps.removeChild(childrenA[leftIdxA]);
	        }
	        ++leftIdxA;
	    }

	    while (leftIdxB <= rightIdxB) {
	        rightIdxB < childrenBLen - 1 ? patchOps.insertChild(childrenB[leftIdxB], childrenB[rightIdxB + 1]) : patchOps.appendChild(nodeB, childrenB[leftIdxB]);
	        ++leftIdxB;
	    }
	};

	function buildKeys(children, idxFrom, idxTo) {
	    var res = {},
	        child = void 0;

	    while (idxFrom < idxTo) {
	        child = children[idxFrom];
	        child._key != null && (res[child._key] = idxFrom);
	        ++idxFrom;
	    }

	    return res;
	}

	var escapeHtml = function (str) {
	    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};

	var emptyObj = {};

	var ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;

	var isTrident = ua.indexOf('Trident') > -1;
	var isEdge = ua.indexOf('Edge') > -1;

	var elementProtos = {};

	function createElement(tag, ns) {
	    var baseElement = void 0;

	    if (ns) {
	        var key = ns + ':' + tag;

	        baseElement = elementProtos[key] || (elementProtos[key] = document.createElementNS(ns, tag));
	    } else {
	        baseElement = elementProtos[tag] || (elementProtos[tag] = tag === '!' ? document.createComment('') : document.createElement(tag));
	    }

	    return baseElement.cloneNode();
	}

	var TOP_LEVEL_NS_TAGS = {
	    'http://www.w3.org/2000/svg': 'svg',
	    'http://www.w3.org/1998/Math/MathML': 'math'
	};

	var helperDomNode = void 0;

	function createElementByHtml(html, tag, ns) {
	    helperDomNode || (helperDomNode = document.createElement('div'));

	    if (!ns || !TOP_LEVEL_NS_TAGS[ns] || TOP_LEVEL_NS_TAGS[ns] === tag) {
	        helperDomNode.innerHTML = html;
	        return helperDomNode.removeChild(helperDomNode.firstChild);
	    }

	    var topLevelTag = TOP_LEVEL_NS_TAGS[ns];
	    helperDomNode.innerHTML = '<' + topLevelTag + ' xmlns="' + ns + '">' + html + '</' + topLevelTag + '>';
	    return helperDomNode.removeChild(helperDomNode.firstChild).firstChild;
	}

	var NODE_TYPE_TOP = 1;
	var NODE_TYPE_TAG = 2;
	var NODE_TYPE_FRAGMENT = 3;
	var NODE_TYPE_COMPONENT = 4;
	var NODE_TYPE_FUNCTION_COMPONENT = 5;

	var SHORT_TAGS = {
	    area: true,
	    base: true,
	    br: true,
	    col: true,
	    command: true,
	    embed: true,
	    hr: true,
	    img: true,
	    input: true,
	    keygen: true,
	    link: true,
	    menuitem: true,
	    meta: true,
	    param: true,
	    source: true,
	    track: true,
	    wbr: true
	};
	var USE_DOM_STRINGS = isTrident || isEdge;
	function TagNode(tag) {
	    this.type = NODE_TYPE_TAG;
	    this._tag = tag;
	    this._domNode = null;
	    this._key = null;
	    this._ns = null;
	    this._attrs = null;
	    this._children = null;
	    this._escapeChildren = true;
	    this._ctx = emptyObj;
	}

	TagNode.prototype = {
	    getDomNode: function () {
	        return this._domNode;
	    },
	    key: function (key) {
	        this._key = key;
	        return this;
	    },
	    ns: function (ns) {
	        this._ns = ns;
	        return this;
	    },
	    attrs: function (attrs) {
	        this._attrs = attrs;

	        if (IS_DEBUG) {
	            checkAttrs(attrs);
	        }

	        return this;
	    },
	    children: function (children) {
	        if (IS_DEBUG) {
	            if (this._children !== null) {
	                consoleWrapper.warn('You\'re trying to set children or html more than once or pass both children and html.');
	            }
	        }

	        this._children = processChildren(children);
	        return this;
	    },
	    ctx: function (ctx) {
	        if (ctx !== emptyObj) {
	            this._ctx = ctx;

	            var children = this._children;

	            if (children && typeof children !== 'string') {
	                var len = children.length;
	                var i = 0;

	                while (i < len) {
	                    children[i++].ctx(ctx);
	                }
	            }
	        }

	        return this;
	    },
	    html: function (html) {
	        if (IS_DEBUG) {
	            if (this._children !== null) {
	                consoleWrapper.warn('You\'re trying to set children or html more than once or pass both children and html.');
	            }
	        }

	        this._children = html;
	        this._escapeChildren = false;
	        return this;
	    },
	    renderToDom: function (parentNs) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._tag);
	        }

	        var ns = this._ns || parentNs,
	            children = this._children;

	        if (USE_DOM_STRINGS && children && typeof children !== 'string') {
	            var _domNode = createElementByHtml(this.renderToString(), this._tag, ns);
	            this.adoptDom([_domNode], 0);
	            return _domNode;
	        }

	        var domNode = this._domNode = createElement(this._tag, ns),
	            attrs = this._attrs;

	        if (children) {
	            if (typeof children === 'string') {
	                this._escapeChildren ? domNode.textContent = children : domNode.innerHTML = children;
	            } else {
	                var i = 0;
	                var len = children.length;

	                while (i < len) {
	                    domNode.appendChild(children[i++].renderToDom(ns));
	                }
	            }
	        }

	        if (attrs) {
	            var name = void 0,
	                value = void 0;
	            for (name in attrs) {
	                if ((value = attrs[name]) != null) {
	                    if (ATTRS_TO_EVENTS[name]) {
	                        addListener(domNode, ATTRS_TO_EVENTS[name], value);
	                    } else {
	                        domAttrs(name).set(domNode, name, value);
	                    }
	                }
	            }
	        }

	        return domNode;
	    },
	    renderToString: function () {
	        var tag = this._tag;

	        if (tag === '!') {
	            return '<!---->';
	        }

	        var ns = this._ns,
	            attrs = this._attrs;
	        var children = this._children,
	            res = '<' + tag;

	        if (ns) {
	            res += ' xmlns="' + ns + '"';
	        }

	        if (attrs) {
	            var name = void 0,
	                value = void 0,
	                attrHtml = void 0;
	            for (name in attrs) {
	                value = attrs[name];

	                if (value != null) {
	                    if (name === 'value') {
	                        switch (tag) {
	                            case 'textarea':
	                                children = value;
	                                continue;

	                            case 'select':
	                                this.ctx({ value: value, multiple: attrs.multiple });
	                                continue;

	                            case 'option':
	                                if (this._ctx.multiple ? isInArray(this._ctx.value, value) : this._ctx.value === value) {
	                                    res += ' ' + domAttrs('selected').toString('selected', true);
	                                }
	                        }
	                    }

	                    if (!ATTRS_TO_EVENTS[name] && (attrHtml = domAttrs(name).toString(name, value))) {
	                        res += ' ' + attrHtml;
	                    }
	                }
	            }
	        }

	        if (SHORT_TAGS[tag]) {
	            res += '/>';
	        } else {
	            res += '>';

	            if (children) {
	                if (typeof children === 'string') {
	                    res += this._escapeChildren ? escapeHtml(children) : children;
	                } else {
	                    var i = 0;
	                    var len = children.length;

	                    while (i < len) {
	                        res += children[i++].renderToString();
	                    }
	                }
	            }

	            res += '</' + tag + '>';
	        }

	        return res;
	    },
	    adoptDom: function (domNodes, domIdx) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._tag);
	        }

	        var domNode = this._domNode = domNodes[domIdx],
	            attrs = this._attrs,
	            children = this._children;

	        if (attrs) {
	            var name = void 0,
	                value = void 0;
	            for (name in attrs) {
	                if ((value = attrs[name]) != null && ATTRS_TO_EVENTS[name]) {
	                    addListener(domNode, ATTRS_TO_EVENTS[name], value);
	                }
	            }
	        }

	        if (children && typeof children !== 'string') {
	            var i = 0;
	            var len = children.length;

	            if (len) {
	                var domChildren = domNode.childNodes;
	                var domChildIdx = 0;

	                while (i < len) {
	                    domChildIdx = children[i++].adoptDom(domChildren, domChildIdx);
	                }
	            }
	        }

	        return domIdx + 1;
	    },
	    mount: function () {
	        var children = this._children;

	        if (children && typeof children !== 'string') {
	            var i = 0;
	            var len = children.length;

	            while (i < len) {
	                children[i++].mount();
	            }
	        }
	    },
	    unmount: function () {
	        var children = this._children;

	        if (children && typeof children !== 'string') {
	            var i = 0;
	            var len = children.length;

	            while (i < len) {
	                children[i++].unmount();
	            }
	        }

	        removeListeners(this._domNode);

	        this._domNode = null;
	    },
	    patch: function (node) {
	        if (this === node) {
	            return;
	        }

	        switch (node.type) {
	            case NODE_TYPE_TAG:
	                if (this._tag !== node._tag || this._ns !== node._ns) {
	                    patchOps.replace(this, node);
	                } else {
	                    node._domNode = this._domNode;
	                    this._patchChildren(node);
	                    this._patchAttrs(node);
	                }
	                break;

	            case NODE_TYPE_COMPONENT:
	                var instance = node._getInstance();

	                this.patch(instance.getRootNode());
	                instance.mount();
	                break;

	            case NODE_TYPE_FUNCTION_COMPONENT:
	                this.patch(node._getRootNode());
	                break;

	            default:
	                patchOps.replace(this, node);
	        }
	    },
	    _patchChildren: function (node) {
	        var childrenA = this._children,
	            childrenB = node._children;

	        if (childrenA === childrenB) {
	            return;
	        }

	        var isChildrenAText = typeof childrenA === 'string',
	            isChildrenBText = typeof childrenB === 'string';

	        if (isChildrenBText) {
	            if (isChildrenAText) {
	                patchOps.updateText(this, childrenB, node._escapeChildren);
	                return;
	            }

	            childrenA && childrenA.length && patchOps.removeChildren(this);
	            childrenB && patchOps.updateText(this, childrenB, node._escapeChildren);

	            return;
	        }

	        if (!childrenB || !childrenB.length) {
	            if (childrenA) {
	                isChildrenAText ? patchOps.removeText(this) : childrenA.length && patchOps.removeChildren(this);
	            }

	            return;
	        }

	        if (isChildrenAText && childrenA) {
	            patchOps.removeText(this);
	        }

	        if (isChildrenAText || !childrenA || !childrenA.length) {
	            var childrenBLen = childrenB.length;
	            var iB = 0;

	            while (iB < childrenBLen) {
	                patchOps.appendChild(node, childrenB[iB++]);
	            }

	            return;
	        }

	        patchChildren(this, node);
	    },
	    _patchAttrs: function (node) {
	        var attrsA = this._attrs,
	            attrsB = node._attrs;

	        if (attrsA === attrsB) {
	            return;
	        }

	        var attrName = void 0,
	            attrAVal = void 0,
	            attrBVal = void 0,
	            isAttrAValArray = void 0,
	            isAttrBValArray = void 0;

	        if (attrsB) {
	            for (attrName in attrsB) {
	                attrBVal = attrsB[attrName];
	                if (!attrsA || (attrAVal = attrsA[attrName]) == null) {
	                    if (attrBVal != null) {
	                        patchOps.updateAttr(this, attrName, attrBVal);
	                    }
	                } else if (attrBVal == null) {
	                    patchOps.removeAttr(this, attrName);
	                } else if (typeof attrBVal === 'object' && typeof attrAVal === 'object') {
	                    isAttrBValArray = Array.isArray(attrBVal);
	                    isAttrAValArray = Array.isArray(attrAVal);
	                    if (isAttrBValArray || isAttrAValArray) {
	                        if (isAttrBValArray && isAttrAValArray) {
	                            this._patchAttrArr(attrName, attrAVal, attrBVal);
	                        } else {
	                            patchOps.updateAttr(this, attrName, attrBVal);
	                        }
	                    } else {
	                        this._patchAttrObj(attrName, attrAVal, attrBVal);
	                    }
	                } else if (attrAVal !== attrBVal) {
	                    patchOps.updateAttr(this, attrName, attrBVal);
	                }
	            }
	        }

	        if (attrsA) {
	            for (attrName in attrsA) {
	                if ((!attrsB || !(attrName in attrsB)) && (attrAVal = attrsA[attrName]) != null) {
	                    patchOps.removeAttr(this, attrName);
	                }
	            }
	        }
	    },
	    _patchAttrArr: function (attrName, arrA, arrB) {
	        if (arrA === arrB) {
	            return;
	        }

	        var lenA = arrA.length;
	        var hasDiff = false;

	        if (lenA === arrB.length) {
	            var i = 0;
	            while (!hasDiff && i < lenA) {
	                if (arrA[i] != arrB[i]) {
	                    hasDiff = true;
	                }
	                ++i;
	            }
	        } else {
	            hasDiff = true;
	        }

	        hasDiff && patchOps.updateAttr(this, attrName, arrB);
	    },
	    _patchAttrObj: function (attrName, objA, objB) {
	        if (objA === objB) {
	            return;
	        }

	        var hasDiff = false,
	            diffObj = {};

	        for (var i in objB) {
	            if (objA[i] != objB[i]) {
	                hasDiff = true;
	                diffObj[i] = objB[i];
	            }
	        }

	        for (var _i in objA) {
	            if (objA[_i] != null && !(_i in objB)) {
	                hasDiff = true;
	                diffObj[_i] = null;
	            }
	        }

	        hasDiff && patchOps.updateAttr(this, attrName, diffObj);
	    }
	};

	function processChildren(children) {
	    if (children == null) {
	        return null;
	    }

	    var typeOfChildren = typeof children;

	    if (typeOfChildren === 'object') {
	        var res = Array.isArray(children) ? children : [children];

	        if (IS_DEBUG) {
	            checkChildren(res);
	        }

	        return res;
	    }

	    return typeOfChildren === 'string' ? children : children.toString();
	}

	function checkAttrs(attrs) {
	    for (var name in attrs) {
	        if (name.substr(0, 2) === 'on' && !ATTRS_TO_EVENTS[name]) {
	            consoleWrapper.error('You\'re trying to add unsupported event listener "' + name + '".');
	        }
	    }
	}

	function ComponentNode(component) {
	    this.type = NODE_TYPE_COMPONENT;
	    this._component = component;
	    this._key = null;
	    this._attrs = null;
	    this._instance = null;
	    this._children = null;
	    this._ctx = emptyObj;
	}

	ComponentNode.prototype = {
	    getDomNode: function () {
	        return this._instance && this._instance.getDomNode();
	    },
	    key: function (key) {
	        this._key = key;
	        return this;
	    },
	    attrs: function (attrs) {
	        this._attrs = attrs;
	        return this;
	    },
	    children: function (children) {
	        this._children = children;
	        return this;
	    },
	    ctx: function (ctx) {
	        this._ctx = ctx;
	        return this;
	    },
	    renderToDom: function (parentNs) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._component.name || 'Anonymous');
	        }

	        return this._getInstance().renderToDom(parentNs);
	    },
	    renderToString: function () {
	        return this._getInstance().renderToString();
	    },
	    adoptDom: function (domNode, domIdx) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._component.name || 'Anonymous');
	        }

	        return this._getInstance().adoptDom(domNode, domIdx);
	    },
	    mount: function () {
	        this._instance.getRootNode().mount();
	        this._instance.mount();
	    },
	    unmount: function () {
	        if (this._instance) {
	            this._instance.getRootNode().unmount();
	            this._instance.unmount();
	            this._instance = null;
	        }
	    },
	    patch: function (node) {
	        if (this === node) {
	            return;
	        }

	        var instance = this._getInstance();

	        if (this.type === node.type) {
	            if (this._component === node._component) {
	                instance.patch(node._attrs, node._children, node._ctx);
	                node._instance = instance;
	            } else {
	                instance.unmount();
	                var newInstance = node._getInstance();
	                instance.getRootNode().patch(newInstance.getRootNode());
	                newInstance.mount();
	            }
	        } else {
	            instance.unmount();
	            instance.getRootNode().patch(node);
	        }
	    },
	    _getInstance: function () {
	        return this._instance || (this._instance = new this._component(this._attrs, this._children, this._ctx));
	    }
	};

	function FunctionComponentNode(component) {
	    this.type = NODE_TYPE_FUNCTION_COMPONENT;
	    this._component = component;
	    this._key = null;
	    this._attrs = emptyObj;
	    this._rootNode = null;
	    this._children = null;
	    this._ctx = emptyObj;
	}

	FunctionComponentNode.prototype = {
	    getDomNode: function () {
	        return this._rootNode && this._rootNode.getDomNode();
	    },
	    key: function (key) {
	        this._key = key;
	        return this;
	    },
	    attrs: function (attrs) {
	        this._attrs = attrs;
	        return this;
	    },
	    children: function (children) {
	        this._children = children;
	        return this;
	    },
	    ctx: function (ctx) {
	        this._ctx = ctx;
	        return this;
	    },
	    renderToDom: function (parentNs) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._component.name || 'Anonymous');
	        }

	        return this._getRootNode().renderToDom(parentNs);
	    },
	    renderToString: function () {
	        return this._getRootNode().renderToString();
	    },
	    adoptDom: function (domNode, domIdx) {
	        if (IS_DEBUG) {
	            checkReuse(this, this._component.name || 'Anonymous');
	        }

	        return this._getRootNode().adoptDom(domNode, domIdx);
	    },
	    mount: function () {
	        this._getRootNode().mount();
	    },
	    unmount: function () {
	        if (this._rootNode) {
	            this._rootNode.unmount();
	            this._rootNode = null;
	        }
	    },
	    patch: function (node) {
	        if (this === node) {
	            return;
	        }

	        this._getRootNode().patch(this.type === node.type ? node._getRootNode() : node);
	    },
	    _getRootNode: function () {
	        if (this._rootNode) {
	            return this._rootNode;
	        }

	        var rootNode = this._component(this._attrs, this._children, this._ctx) || createNode('!');

	        if (IS_DEBUG) {
	            if (typeof rootNode !== 'object' || Array.isArray(rootNode)) {
	                console.error('Function component must return a single node object on the top level');
	            }
	        }

	        rootNode.ctx(this._ctx);

	        return this._rootNode = rootNode;
	    }
	};

	function FragmentNode() {
	    this.type = NODE_TYPE_FRAGMENT;
	    this._domNode = null;
	    this._key = null;
	    this._children = null;
	    this._ctx = emptyObj;
	}

	FragmentNode.prototype = {
	    getDomNode: function () {
	        return this._domNode;
	    },
	    key: function (key) {
	        this._key = key;
	        return this;
	    },
	    children: function (children) {
	        if (IS_DEBUG) {
	            if (this._children !== null) {
	                consoleWrapper.warn('You\'re trying to set children to fragment more than once.');
	            }
	        }

	        this._children = processChildren$1(children);
	        return this;
	    },
	    ctx: function (ctx) {
	        if (ctx !== emptyObj) {
	            this._ctx = ctx;

	            var children = this._children;

	            if (children) {
	                var len = children.length;
	                var i = 0;

	                while (i < len) {
	                    children[i++].ctx(ctx);
	                }
	            }
	        }

	        return this;
	    },
	    renderToDom: function (parentNs) {
	        if (IS_DEBUG) {
	            checkReuse(this, 'fragment');
	        }

	        var children = this._children,
	            domNode = [createElement('!'), createElement('!')],
	            domFragment = document.createDocumentFragment();

	        domFragment.appendChild(domNode[0]);

	        if (children) {
	            var len = children.length;
	            var i = 0;

	            while (i < len) {
	                domFragment.appendChild(children[i++].renderToDom(parentNs));
	            }
	        }

	        domFragment.appendChild(domNode[1]);

	        this._domNode = domNode;

	        return domFragment;
	    },
	    renderToString: function () {
	        var children = this._children;
	        var res = '<!---->';

	        if (children) {
	            var i = children.length - 1;

	            while (i >= 0) {
	                res = children[i--].renderToString() + res;
	            }
	        }

	        return '<!---->' + res;
	    },
	    adoptDom: function (domNodes, domIdx) {
	        if (IS_DEBUG) {
	            checkReuse(this, 'fragment');
	        }

	        var domNode = [domNodes[domIdx++]],
	            children = this._children;

	        if (children) {
	            var len = children.length;
	            var i = 0;

	            while (i < len) {
	                domIdx = children[i++].adoptDom(domNodes, domIdx);
	            }
	        }

	        domNode.push(domNodes[domIdx]);

	        this._domNode = domNode;

	        return domIdx + 1;
	    },
	    mount: function () {
	        var children = this._children;

	        if (children) {
	            var i = 0;
	            var len = children.length;

	            while (i < len) {
	                children[i++].mount();
	            }
	        }
	    },
	    unmount: function () {
	        var children = this._children;

	        if (children) {
	            var len = children.length;
	            var i = 0;

	            while (i < len) {
	                children[i++].unmount();
	            }
	        }
	    },
	    patch: function (node) {
	        if (this === node) {
	            return;
	        }

	        switch (node.type) {
	            case NODE_TYPE_FRAGMENT:
	                node._domNode = this._domNode;
	                this._patchChildren(node);
	                break;

	            case NODE_TYPE_COMPONENT:
	                var instance = node._getInstance();

	                this.patch(instance.getRootNode());
	                instance.mount();
	                break;

	            case NODE_TYPE_FUNCTION_COMPONENT:
	                this.patch(node._getRootNode());
	                break;

	            default:
	                patchOps.replace(this, node);
	        }
	    },
	    _patchChildren: function (node) {
	        var childrenA = this._children,
	            childrenB = node._children;

	        if (childrenA === childrenB) {
	            return;
	        }

	        if (!childrenB || !childrenB.length) {
	            if (childrenA && childrenA.length) {
	                patchOps.removeChildren(this);
	            }

	            return;
	        }

	        if (!childrenA || !childrenA.length) {
	            var childrenBLen = childrenB.length;
	            var iB = 0;

	            while (iB < childrenBLen) {
	                patchOps.appendChild(node, childrenB[iB++]);
	            }

	            return;
	        }

	        patchChildren(this, node);
	    }
	};

	function processChildren$1(children) {
	    if (children == null) {
	        return null;
	    }

	    var res = Array.isArray(children) ? children : [children];

	    if (IS_DEBUG) {
	        checkChildren(res);
	    }

	    return res;
	}

	var raf = typeof window !== 'undefined' && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) || function (callback) {
	    setTimeout(callback, 1000 / 60);
	};

	var batch = [];

	function applyBatch() {
	    var i = 0;

	    while (i < batch.length) {
	        batch[i++]();
	    }

	    batch = [];
	}

	var rafBatch = function (fn) {
	    batch.push(fn) === 1 && raf(applyBatch);
	};

	function Emitter() {
	    this._listeners = {};
	}

	Emitter.prototype = {
	    on: function (event, fn) {
	        var fnCtx = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	        (this._listeners[event] || (this._listeners[event] = [])).push({ fn: fn, fnCtx: fnCtx });

	        return this;
	    },
	    off: function (event, fn) {
	        var fnCtx = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	        var eventListeners = this._listeners[event];

	        if (eventListeners) {
	            var i = 0,
	                eventListener = void 0;

	            while (i < eventListeners.length) {
	                eventListener = eventListeners[i];
	                if (eventListener.fn === fn && eventListener.fnCtx === fnCtx) {
	                    eventListeners.splice(i, 1);
	                    break;
	                }

	                i++;
	            }
	        }

	        return this;
	    },
	    emit: function (event) {
	        var eventListeners = this._listeners[event];

	        if (eventListeners) {
	            var i = 0;

	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            while (i < eventListeners.length) {
	                var _eventListeners = eventListeners[i++];
	                var fn = _eventListeners.fn;
	                var fnCtx = _eventListeners.fnCtx;

	                fn.call.apply(fn, [fnCtx].concat(args));
	            }
	        }

	        return this;
	    }
	};

	function TopNode(childNode, ns) {
	    this.type = NODE_TYPE_TOP;
	    this._childNode = childNode;
	    this._ns = ns;
	}

	TopNode.prototype = {
	    getDomNode: function () {
	        return this._childNode.getDomNode();
	    },
	    renderToDom: function () {
	        return this._childNode.renderToDom(this._ns);
	    },
	    adoptDom: function (domNode) {
	        this._childNode.adoptDom(domNode, 0);
	    },
	    patch: function (node) {
	        this._childNode.patch(node._childNode);
	    },
	    mount: function () {
	        this._childNode.mount();
	    },
	    unmount: function () {
	        this._childNode.unmount();
	    }
	};

	var mountedNodes = new SimpleMap$1();
	var counter$1 = 0;

	function mount(domNode, node, cb, cbCtx, syncMode) {
	    var domNodeId = getDomNodeId(domNode),
	        mounted = mountedNodes.get(domNodeId),
	        mountId = void 0;

	    if (mounted && mounted.tree) {
	        mountId = ++mounted.id;
	        var patchFn = function () {
	            mounted = mountedNodes.get(domNodeId);
	            if (mounted && mounted.id === mountId) {
	                var prevTree = mounted.tree,
	                    newTree = new TopNode(node, prevTree._ns);

	                prevTree.patch(newTree);
	                mounted.tree = newTree;

	                callCb(cb, cbCtx);
	                if (IS_DEBUG) {
	                    hook.emit('replace', prevTree, newTree);
	                }
	            }
	        };

	        syncMode ? patchFn() : rafBatch(patchFn);
	    } else {
	        mountedNodes.set(domNodeId, mounted = { tree: null, id: mountId = ++counter$1 });

	        if (domNode.children.length) {
	            var tree = mounted.tree = new TopNode(node, getNs(domNode));

	            tree.adoptDom(collectTopDomChildren(domNode));
	            tree.mount();
	            callCb(cb, cbCtx);
	            if (IS_DEBUG) {
	                hook.emit('mount', tree);
	            }
	        } else {
	            var renderFn = function () {
	                var mounted = mountedNodes.get(domNodeId);

	                if (mounted && mounted.id === mountId) {
	                    var _tree = mounted.tree = new TopNode(node, getNs(domNode));

	                    domOps.append(domNode, _tree.renderToDom());
	                    _tree.mount();
	                    callCb(cb, cbCtx);
	                    if (IS_DEBUG) {
	                        hook.emit('mount', _tree);
	                    }
	                }
	            };

	            syncMode ? renderFn() : rafBatch(renderFn);
	        }
	    }
	}

	function unmount(domNode, cb, cbCtx, syncMode) {
	    var domNodeId = getDomNodeId(domNode);
	    var mounted = mountedNodes.get(domNodeId);

	    if (mounted) {
	        (function () {
	            var mountId = ++mounted.id,
	                unmountFn = function () {
	                mounted = mountedNodes.get(domNodeId);
	                if (mounted && mounted.id === mountId) {
	                    mountedNodes.delete(domNodeId);
	                    var tree = mounted.tree;

	                    if (tree) {
	                        var treeDomNode = tree.getDomNode();

	                        tree.unmount();
	                        domOps.remove(treeDomNode);
	                    }

	                    callCb(cb, cbCtx);
	                    if (IS_DEBUG) {
	                        tree && hook.emit('unmount', tree);
	                    }
	                }
	            };

	            mounted.tree ? syncMode ? unmountFn() : rafBatch(unmountFn) : syncMode || callCb(cb, cbCtx);
	        })();
	    } else if (!syncMode) {
	        callCb(cb, cbCtx);
	    }
	}

	function callCb(cb, cbCtx) {
	    cb && cb.call(cbCtx || this);
	}

	function collectTopDomChildren(node) {
	    var children = node.childNodes,
	        len = children.length,
	        res = [];
	    var i = 0,
	        nodeType = void 0;

	    while (i < len) {
	        nodeType = children[i].nodeType;

	        if (nodeType === Node.ELEMENT_NODE || nodeType === Node.COMMENT_NODE) {
	            res.push(children[i]);
	        }

	        i++;
	    }

	    return res;
	}

	function mountToDom(domNode, tree, cb, cbCtx) {
	    mount(domNode, tree, cb, cbCtx, false);
	}

	function mountToDomSync(domNode, tree) {
	    mount(domNode, tree, null, null, true);
	}

	function unmountFromDom(domNode, cb, cbCtx) {
	    unmount(domNode, cb, cbCtx, false);
	}

	function unmountFromDomSync(domNode) {
	    unmount(domNode, null, null, true);
	}

	function getMountedRootNodes() {
	    var res = [];

	    mountedNodes.forEach(function (_ref) {
	        var tree = _ref.tree;

	        if (tree) {
	            res.push(tree);
	        }
	    });

	    return res;
	}

	var hook = new Emitter();

	hook.getRootNodes = getMountedRootNodes;

	if (IS_DEBUG) {
	    if (typeof window !== 'undefined') {
	        window['__vidom__hook__'] = hook;
	    }
	}

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target;
	};

	function mountComponent() {
	    this._isMounted = true;
	    this.onMount(this._attrs);
	}

	function unmountComponent() {
	    this._isMounted = false;
	    this._domRefs = null;
	    this.onUnmount();
	}

	function patchComponent(attrs, children, ctx) {
	    attrs = this._buildAttrs(attrs);

	    var prevRootNode = this._rootNode,
	        prevAttrs = this._attrs,
	        prevChildren = this._children;

	    if (prevAttrs !== attrs || prevChildren !== children) {
	        this._attrs = attrs;
	        if (this.isMounted()) {
	            var isUpdating = this._isUpdating;
	            this._isUpdating = true;
	            this.onAttrsReceive(attrs, prevAttrs, children, prevChildren);
	            this._isUpdating = isUpdating;
	        }
	    }

	    this._children = children;
	    this._ctx = ctx;

	    if (this._isUpdating) {
	        return;
	    }

	    var shouldUpdate = this.shouldUpdate(attrs, prevAttrs, children, prevChildren);

	    if (IS_DEBUG) {
	        var shouldUpdateResType = typeof shouldUpdate;
	        if (shouldUpdateResType !== 'boolean') {
	            consoleWrapper.warn('Component#shouldUpdate() should return boolean instead of ' + shouldUpdateResType);
	        }
	    }

	    if (shouldUpdate) {
	        this._rootNode = this.render();
	        prevRootNode.patch(this._rootNode);
	        this.isMounted() && this.onUpdate(attrs, prevAttrs, children, prevChildren);
	    }
	}

	function shouldComponentUpdate() {
	    return true;
	}

	function renderComponentToDom(parentNs) {
	    return this._rootNode.renderToDom(parentNs);
	}

	function renderComponentToString() {
	    return this._rootNode.renderToString();
	}

	function adoptComponentDom(domNode, domIdx) {
	    return this._rootNode.adoptDom(domNode, domIdx);
	}

	function getComponentDomNode() {
	    return this._rootNode.getDomNode();
	}

	function getComponentAttrs() {
	    return this._attrs;
	}

	function requestChildContext() {
	    return emptyObj;
	}

	function requestInitialComponentState() {
	    return emptyObj;
	}

	function setComponentState(state) {
	    this._prevState = this._state;
	    this._state = _extends({}, this._state, state);

	    this.update(updateComponentPrevState);
	}

	function updateComponentPrevState() {
	    this._prevState = this._state;
	}

	function getComponentState() {
	    return this._state;
	}

	function getComponentPrevState() {
	    return this._prevState;
	}

	function renderComponent() {
	    this._domRefs = {};

	    var rootNode = this.onRender(this._attrs, this._children) || createNode('!');

	    if (IS_DEBUG) {
	        if (typeof rootNode !== 'object' || Array.isArray(rootNode)) {
	            consoleWrapper.error('Component#onRender must return a single node object on the top level');
	        }
	    }

	    var childCtx = this.onChildContextRequest(this._attrs);

	    rootNode.ctx(childCtx === emptyObj ? this._ctx : this._ctx === emptyObj ? childCtx : _extends({}, this._ctx, childCtx));

	    return rootNode;
	}

	function updateComponent(cb, cbCtx) {
	    var _this = this;

	    if (this._isUpdating) {
	        cb && rafBatch(function () {
	            return cb.call(cbCtx || _this);
	        });
	    } else {
	        this._isUpdating = true;
	        rafBatch(function () {
	            if (_this.isMounted()) {
	                _this._isUpdating = false;
	                var prevRootNode = _this._rootNode;
	                _this.patch(_this._attrs, _this._children, _this._ctx);
	                cb && cb.call(cbCtx || _this);
	                if (IS_DEBUG) {
	                    hook.emit('replace', prevRootNode, _this._rootNode);
	                }
	            }
	        });
	    }
	}

	function getComponentRootNode() {
	    return this._rootNode;
	}

	function isComponentMounted() {
	    return this._isMounted;
	}

	function setComponentDomRef(ref, node) {
	    return this._domRefs[ref] = node;
	}

	function getComponentDomRef(ref) {
	    return this._domRefs[ref] ? this._domRefs[ref].getDomNode() : null;
	}

	function getComponentContext() {
	    return this._ctx;
	}

	function getComponentDefaultAttrs() {
	    return emptyObj;
	}

	function buildComponentAttrs(attrs) {
	    if (this._attrs && attrs === this._attrs) {
	        return attrs;
	    }

	    var cons = this.constructor,
	        defaultAttrs = cons._defaultAttrs || (cons._defaultAttrs = cons.getDefaultAttrs());

	    if (!attrs) {
	        return defaultAttrs;
	    }

	    if (defaultAttrs === emptyObj) {
	        return attrs;
	    }

	    var res = {};

	    for (var i in defaultAttrs) {
	        res[i] = defaultAttrs[i];
	    }

	    for (var _i in attrs) {
	        res[_i] = attrs[_i];
	    }

	    return res;
	}

	function createComponent(props, staticProps) {
	    var res = function (attrs, children, ctx) {
	        this._attrs = this._buildAttrs(attrs);
	        this._children = children;
	        this._ctx = ctx;
	        this._domRefs = null;
	        this._isMounted = false;
	        this._isUpdating = false;
	        this._state = this.onInitialStateRequest(this._attrs, children);
	        this._prevState = this._state;
	        this.onInit(this._attrs, children);
	        this._rootNode = this.render();
	    },
	        ptp = {
	        constructor: res,
	        onInitialStateRequest: requestInitialComponentState,
	        onInit: noOp,
	        mount: mountComponent,
	        unmount: unmountComponent,
	        onMount: noOp,
	        onUnmount: noOp,
	        onAttrsReceive: noOp,
	        shouldUpdate: shouldComponentUpdate,
	        onUpdate: noOp,
	        isMounted: isComponentMounted,
	        getState: getComponentState,
	        getPrevState: getComponentPrevState,
	        setState: setComponentState,
	        renderToDom: renderComponentToDom,
	        renderToString: renderComponentToString,
	        adoptDom: adoptComponentDom,
	        getDomNode: getComponentDomNode,
	        getRootNode: getComponentRootNode,
	        render: renderComponent,
	        onRender: noOp,
	        update: updateComponent,
	        patch: patchComponent,
	        getDomRef: getComponentDomRef,
	        setDomRef: setComponentDomRef,
	        getAttrs: getComponentAttrs,
	        onChildContextRequest: requestChildContext,
	        getContext: getComponentContext,
	        _buildAttrs: buildComponentAttrs
	    };

	    for (var i in props) {
	        ptp[i] = props[i];
	    }

	    res.prototype = ptp;

	    res.getDefaultAttrs = getComponentDefaultAttrs;

	    for (var _i2 in staticProps) {
	        res[_i2] = staticProps[_i2];
	    }

	    res['__vidom__component__'] = true;

	    return res;
	}

	var Input = createComponent({
	    onInit: function () {
	        var _this = this;

	        this.onInput = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onInput && attrs.onInput(e);
	            attrs.onChange && attrs.onChange(e);

	            applyBatch();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (typeof attrs.value !== 'undefined' && control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };

	        this.onClick = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onClick && attrs.onClick(e);
	            attrs.onChange && attrs.onChange(e);

	            applyBatch();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (typeof attrs.checked !== 'undefined' && control.checked !== attrs.checked) {
	                    control.checked = attrs.checked;
	                }
	            }
	        };
	    },
	    onRender: function (attrs) {
	        var controlAttrs = void 0;

	        if (attrs.type === 'file') {
	            controlAttrs = attrs;
	        } else {
	            controlAttrs = _extends({}, attrs, { onChange: null });

	            if (attrs.type === 'checkbox' || attrs.type === 'radio') {
	                controlAttrs.onClick = this.onClick;
	            } else {
	                controlAttrs.onInput = this.onInput;
	            }
	        }

	        return this.setDomRef('control', new TagNode('input').attrs(controlAttrs));
	    }
	});

	var Textarea = createComponent({
	    onInit: function () {
	        var _this = this;

	        this.onInput = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onInput && attrs.onInput(e);
	            attrs.onChange && attrs.onChange(e);

	            applyBatch();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (typeof attrs.value !== 'undefined' && control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };
	    },
	    onRender: function (attrs) {
	        var controlAttrs = _extends({}, attrs, {
	            onInput: this.onInput,
	            onChange: null
	        });

	        return this.setDomRef('control', new TagNode('textarea').attrs(controlAttrs));
	    }
	});

	var Select = createComponent({
	    onInit: function () {
	        var _this = this;

	        this.onChange = function (e) {
	            var attrs = _this.getAttrs();

	            attrs.onChange && attrs.onChange(e);

	            applyBatch();

	            if (_this.isMounted()) {
	                // attrs could be changed during applyBatch()
	                attrs = _this.getAttrs();
	                var control = _this.getDomRef('control');
	                if (typeof attrs.value !== 'undefined' && control.value !== attrs.value) {
	                    control.value = attrs.value;
	                }
	            }
	        };
	    },
	    onRender: function (attrs, children) {
	        var controlAttrs = _extends({}, attrs, {
	            onChange: this.onChange
	        });

	        return this.setDomRef('control', new TagNode('select').attrs(controlAttrs).children(children));
	    }
	});

	var WRAPPER_COMPONENTS = {
	    input: Input,
	    textarea: Textarea,
	    select: Select
	};

	function createNode(type) {
	    switch (typeof type) {
	        case 'string':
	            return type === 'fragment' ? new FragmentNode() : WRAPPER_COMPONENTS[type] ? new ComponentNode(WRAPPER_COMPONENTS[type]) : new TagNode(type);

	        case 'function':
	            return type.__vidom__component__ ? new ComponentNode(type) : new FunctionComponentNode(type);

	        default:
	            if (IS_DEBUG) {
	                consoleWrapper.error('Unsupported type of node');
	            }
	    }
	}

	var renderToString = function (tree) {
	    return tree.renderToString();
	};

	function normalizeChildren(children) {
	    if (children == null) {
	        return null;
	    }

	    var typeOfChildren = typeof children;
	    if (typeOfChildren !== 'object') {
	        return typeOfChildren === 'string' ? children || null : '' + children;
	    }

	    if (!Array.isArray(children)) {
	        return children;
	    }

	    if (!children.length) {
	        return null;
	    }

	    var res = children,
	        i = 0,
	        len = children.length,
	        allSkipped = true,
	        child = void 0,
	        isChildObject = void 0;

	    while (i < len) {
	        child = normalizeChildren(children[i]);
	        if (child === null) {
	            if (res !== null) {
	                if (allSkipped) {
	                    res = null;
	                } else if (res === children) {
	                    res = children.slice(0, i);
	                }
	            }
	        } else {
	            if (res === null) {
	                res = child;
	            } else if (Array.isArray(child)) {
	                res = allSkipped ? child : (res === children ? res.slice(0, i) : Array.isArray(res) ? res : [res]).concat(child);
	            } else {
	                isChildObject = typeof child === 'object';

	                if (isChildObject && children[i] === child) {
	                    if (res !== children) {
	                        res = join(res, child);
	                    }
	                } else {
	                    if (res === children) {
	                        if (allSkipped && isChildObject) {
	                            res = child;
	                            allSkipped = false;
	                            ++i;
	                            continue;
	                        }

	                        res = res.slice(0, i);
	                    }

	                    res = join(res, child);
	                }
	            }

	            allSkipped = false;
	        }

	        ++i;
	    }

	    return res;
	}

	function toNode(obj) {
	    return typeof obj === 'object' ? obj : createNode('span').children(obj);
	}

	function join(objA, objB) {
	    if (Array.isArray(objA)) {
	        objA.push(toNode(objB));
	        return objA;
	    }

	    return [toNode(objA), toNode(objB)];
	}

	function normalizeChildren$1(children) {
	    var res = normalizeChildren(children);

	    if (res !== null && typeof res === 'object' && !Array.isArray(res)) {
	        res = [res];
	    }

	    return res;
	}

	var Component = createComponent();

	if (IS_DEBUG) {
	    consoleWrapper.info('You\'re using dev version of Vidom');
	}

	exports.node = createNode;
	exports.createComponent = createComponent;
	exports.renderToString = renderToString;
	exports.normalizeChildren = normalizeChildren$1;
	exports.IS_DEBUG = IS_DEBUG;
	exports.console = consoleWrapper;
	exports.Component = Component;
	exports.mountToDom = mountToDom;
	exports.mountToDomSync = mountToDomSync;
	exports.unmountFromDom = unmountFromDom;
	exports.unmountFromDomSync = unmountFromDomSync;
	exports.getMountedRootNodes = getMountedRootNodes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.CSSTransitionGroup = exports.CSSAnimationGroup = undefined;

	var _CSSAnimationGroup = __webpack_require__(4);

	var _CSSAnimationGroup2 = _interopRequireDefault(_CSSAnimationGroup);

	var _CSSTransitionGroup = __webpack_require__(7);

	var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CSSAnimationGroup = _CSSAnimationGroup2.default;
	exports.CSSTransitionGroup = _CSSTransitionGroup2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vidom = __webpack_require__(1);

	var _vidomAnimationGroup = __webpack_require__(5);

	var _utils = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CSSAnimationGroup = function (_Component) {
	    _inherits(CSSAnimationGroup, _Component);

	    function CSSAnimationGroup() {
	        _classCallCheck(this, CSSAnimationGroup);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    CSSAnimationGroup.prototype.onInit = function onInit() {
	        this._onAppear = this._onAppear.bind(this);
	        this._onEnter = this._onEnter.bind(this);
	        this._onLeave = this._onLeave.bind(this);
	    };

	    CSSAnimationGroup.prototype.onRender = function onRender(_ref, children) {
	        var appear = _ref.appear;
	        var enter = _ref.enter;
	        var leave = _ref.leave;

	        return (0, _vidom.node)(_vidomAnimationGroup.AnimationGroup).attrs({
	            onAppear: appear && this._onAppear,
	            onEnter: enter && this._onEnter,
	            onLeave: leave && this._onLeave
	        }).children(children);
	    };

	    CSSAnimationGroup.prototype._onAppear = function _onAppear(domNode, onAppeared) {
	        return buildAnimation(domNode, this.getAttrs().appear, false, onAppeared);
	    };

	    CSSAnimationGroup.prototype._onEnter = function _onEnter(domNode, onEntered) {
	        return buildAnimation(domNode, this.getAttrs().enter, false, onEntered);
	    };

	    CSSAnimationGroup.prototype._onLeave = function _onLeave(domNode, onLeft) {
	        return buildAnimation(domNode, this.getAttrs().leave, true, onLeft);
	    };

	    return CSSAnimationGroup;
	}(_vidom.Component);

	exports.default = CSSAnimationGroup;


	function buildAnimation(domNode, animationClass, keepClass, cb) {
	    var classList = domNode.classList;
	    var animationEndEvent = (0, _utils.getAnimationEndEvent)('animation');

	    classList.add(animationClass);

	    var onAnimationEnd = function (e) {
	        if (e.target === domNode) {
	            domNode.removeEventListener(animationEndEvent, onAnimationEnd);
	            if (!keepClass) {
	                classList.remove(animationClass);
	            }
	            cb();
	        }
	    };

	    domNode.addEventListener(animationEndEvent, onAnimationEnd, false);

	    return function () {
	        classList.remove(animationClass);

	        domNode.removeEventListener(animationEndEvent, onAnimationEnd);
	    };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var vidom = __webpack_require__(1);

	function childrenToArray(children) {
	    return children ? Array.isArray(children) ? children : [children] : [];
	}

	function checkChildrenKeys(children) {
	    children.forEach(function (child) {
	        if (child._key == null) {
	            vidom.console.error('You must specify a key for each child of AnimationGroup.');
	        }
	    });
	}

	function collectChildrenKeys(children) {
	    return children.reduce(function (res, child) {
	        res[child._key] = child;
	        return res;
	    }, {});
	}

	function mergeChildren(currentChildren, nextChildren, nextKeys) {
	    if (!currentChildren.length) {
	        return nextChildren;
	    }

	    if (!nextChildren.length) {
	        return currentChildren;
	    }

	    var nextChildrenPending = {};
	    var pendingChildren = [];

	    currentChildren.forEach(function (child) {
	        if (nextKeys[child._key]) {
	            if (pendingChildren.length) {
	                nextChildrenPending[child._key] = pendingChildren;
	                pendingChildren = [];
	            }
	        } else {
	            pendingChildren.push(child);
	        }
	    });

	    return nextChildren.reduce(function (res, child) {
	        if (nextChildrenPending[child._key]) {
	            res = res.concat(nextChildrenPending[child._key]);
	        }

	        res.push(child);

	        return res;
	    }, []).concat(pendingChildren);
	}

	var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	};

	var inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	            value: subClass,
	            enumerable: false,
	            writable: true,
	            configurable: true
	        }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var AnimationGroup = function (_Component) {
	    inherits(AnimationGroup, _Component);

	    function AnimationGroup() {
	        classCallCheck(this, AnimationGroup);
	        return possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    AnimationGroup.prototype.onInit = function onInit() {
	        this._appearingKeys = {};
	        this._enteringKeys = {};
	        this._leavingKeys = {};
	        this._keysToEnter = null;
	        this._keysToLeave = null;
	    };

	    AnimationGroup.prototype.onInitialStateRequest = function onInitialStateRequest(_, children) {
	        children = childrenToArray(children);

	        if (vidom.IS_DEBUG) {
	            checkChildrenKeys(children);
	        }

	        return { children: children };
	    };

	    AnimationGroup.prototype.onRender = function onRender() {
	        return vidom.node('fragment').children(this.getState().children);
	    };

	    AnimationGroup.prototype.onMount = function onMount(_ref) {
	        var _this2 = this;

	        var onAppear = _ref.onAppear;

	        if (onAppear) {
	            this.getState().children.forEach(function (child) {
	                var key = child._key;

	                _this2._appearingKeys[key] = onAppear(child.getDomNode(), function () {
	                    _this2._onAppeared(key);
	                }) || noop;
	            });
	        }
	    };

	    AnimationGroup.prototype.onAttrsReceive = function onAttrsReceive(nextAttrs, prevAttrs, nextChildren) {
	        var _this3 = this;

	        nextChildren = childrenToArray(nextChildren);

	        if (vidom.IS_DEBUG) {
	            checkChildrenKeys(nextChildren);
	        }

	        var _getState = this.getState();

	        var children = _getState.children;
	        var nextKeys = collectChildrenKeys(nextChildren);
	        var currentKeys = collectChildrenKeys(children);

	        children.forEach(function (child) {
	            var key = child._key;

	            if (!nextKeys[key] && !_this3._leavingKeys[key]) {
	                (_this3._keysToLeave || (_this3._keysToLeave = {}))[key] = true;
	            }
	        });

	        nextChildren.forEach(function (child) {
	            var key = child._key;

	            if (!currentKeys[key] || _this3._leavingKeys[key]) {
	                (_this3._keysToEnter || (_this3._keysToEnter = {}))[key] = true;
	            }
	        });

	        this.setState({ children: mergeChildren(children, nextChildren, nextKeys) });
	    };

	    AnimationGroup.prototype.onUpdate = function onUpdate(attrs) {
	        var _this4 = this;

	        if (!this._keysToEnter && !this._keysToLeave) {
	            return;
	        }

	        this.getState().children.forEach(function (child) {
	            var key = child._key;

	            if (_this4._keysToEnter && _this4._keysToEnter[key]) {
	                if (_this4._leavingKeys[key]) {
	                    _this4._leavingKeys[key]();
	                    delete _this4._leavingKeys[key];
	                }

	                if (attrs.onEnter) {
	                    _this4._enteringKeys[key] = attrs.onEnter && attrs.onEnter(child.getDomNode(), function () {
	                        _this4._onEntered(key);
	                    }) || noop;
	                }
	            } else if (_this4._keysToLeave && _this4._keysToLeave[key]) {
	                if (_this4._appearingKeys[key]) {
	                    _this4._appearingKeys[key]();
	                    delete _this4._appearingKeys[key];
	                } else if (_this4._enteringKeys[key]) {
	                    _this4._enteringKeys[key]();
	                    delete _this4._enteringKeys[key];
	                }

	                if (attrs.onLeave) {
	                    _this4._leavingKeys[key] = attrs.onLeave(child.getDomNode(), function () {
	                        _this4._onLeft(key);
	                    }) || noop;
	                } else {
	                    _this4._removeChildByKey(key);
	                }
	            }
	        });

	        this._keysToEnter = null;
	        this._keysToLeave = null;
	    };

	    AnimationGroup.prototype._onAppeared = function _onAppeared(key) {
	        delete this._appearingKeys[key];
	    };

	    AnimationGroup.prototype._onEntered = function _onEntered(key) {
	        delete this._enteringKeys[key];
	    };

	    AnimationGroup.prototype._onLeft = function _onLeft(key) {
	        if (this._leavingKeys[key]) {
	            delete this._leavingKeys[key];
	            this._removeChildByKey(key);
	        }
	    };

	    AnimationGroup.prototype._removeChildByKey = function _removeChildByKey(key) {
	        this.setState({ children: this.getState().children.filter(function (child) {
	                return child._key !== key;
	            }) });
	    };

	    return AnimationGroup;
	}(vidom.Component);

	function noop() {}

	exports.AnimationGroup = AnimationGroup;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getAnimationEndEvent = getAnimationEndEvent;
	var ANIMATION_END_EVENTS_CONFIG = {
	    transition: {
	        eventClass: 'TransitionEvent',
	        defaultEvent: 'transitionend',
	        styleToEvents: {
	            transition: 'transitionend',
	            OTransition: 'otransitionend',
	            MozTransition: 'mozTransitionEnd',
	            WebkitTransition: 'webkitTransitionEnd'
	        }
	    },
	    animation: {
	        eventClass: 'AnimationEvent',
	        defaultEvent: 'animationend',
	        styleToEvents: {
	            animation: 'animationend',
	            OAnimation: 'oanimationend',
	            MozAnimation: 'mozAnimationEnd',
	            WebkitAnimation: 'webkitAnimationEnd'
	        }
	    }
	},
	    endEvents = {};

	var requestAnimationFrame = exports.requestAnimationFrame = typeof window !== 'undefined' && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) || function (callback) {
	    return setTimeout(callback, 1000 / 60);
	};

	var cancelAnimationFrame = exports.cancelAnimationFrame = typeof window !== 'undefined' && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame) || clearTimeout;

	function getAnimationEndEvent(type) {
	    if (endEvents[type]) {
	        return endEvents[type];
	    }

	    var config = ANIMATION_END_EVENTS_CONFIG[type];

	    if (!(config.eventClass in window)) {
	        delete config.styleToEvents[type];
	    }

	    var style = document.body.style;
	    var mapping = config.styleToEvents;

	    for (var i in mapping) {
	        if (typeof style[i] !== 'undefined') {
	            return endEvents[type] = mapping[i];
	        }
	    }

	    return endEvents[type] = config.defaultEvent;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vidom = __webpack_require__(1);

	var _vidomAnimationGroup = __webpack_require__(5);

	var _utils = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CSSTransitionGroup = function (_Component) {
	    _inherits(CSSTransitionGroup, _Component);

	    function CSSTransitionGroup() {
	        _classCallCheck(this, CSSTransitionGroup);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    CSSTransitionGroup.prototype.onInit = function onInit() {
	        this._onAppear = this._onAppear.bind(this);
	        this._onEnter = this._onEnter.bind(this);
	        this._onLeave = this._onLeave.bind(this);
	    };

	    CSSTransitionGroup.prototype.onRender = function onRender(_ref, children) {
	        var appearFrom = _ref.appearFrom;
	        var appearTo = _ref.appearTo;
	        var enterFrom = _ref.enterFrom;
	        var enterTo = _ref.enterTo;
	        var leaveFrom = _ref.leaveFrom;
	        var leaveTo = _ref.leaveTo;

	        if (_vidom.IS_DEBUG) {
	            if (!appearFrom !== !appearTo) {
	                _vidom.console.error('You must provide both "appearFrom" and "appearTo" class names.');
	            }

	            if (!enterFrom !== !enterTo) {
	                _vidom.console.error('You must provide both "enterFrom" and "enterTo" class names.');
	            }

	            if (!leaveFrom !== !leaveTo) {
	                _vidom.console.error('You must provide both "leaveFrom" and "leaveTo" class names.');
	            }
	        }

	        return (0, _vidom.node)(_vidomAnimationGroup.AnimationGroup).attrs({
	            onAppear: appearFrom && this._onAppear,
	            onEnter: enterFrom && this._onEnter,
	            onLeave: leaveFrom && this._onLeave
	        }).children(children);
	    };

	    CSSTransitionGroup.prototype._onAppear = function _onAppear(domNode, onAppeared) {
	        var _getAttrs = this.getAttrs();

	        var appearFrom = _getAttrs.appearFrom;
	        var appearTo = _getAttrs.appearTo;


	        return buildAnimation(domNode, appearFrom, appearTo, false, onAppeared);
	    };

	    CSSTransitionGroup.prototype._onEnter = function _onEnter(domNode, onEntered) {
	        var _getAttrs2 = this.getAttrs();

	        var enterFrom = _getAttrs2.enterFrom;
	        var enterTo = _getAttrs2.enterTo;


	        return buildAnimation(domNode, enterFrom, enterTo, false, onEntered);
	    };

	    CSSTransitionGroup.prototype._onLeave = function _onLeave(domNode, onLeft) {
	        var _getAttrs3 = this.getAttrs();

	        var leaveFrom = _getAttrs3.leaveFrom;
	        var leaveTo = _getAttrs3.leaveTo;


	        return buildAnimation(domNode, leaveFrom, leaveTo, true, onLeft);
	    };

	    return CSSTransitionGroup;
	}(_vidom.Component);

	exports.default = CSSTransitionGroup;


	function buildAnimation(domNode, classFrom, classTo, keepClassTo, cb) {
	    var classList = domNode.classList;
	    var transitionEndEvent = (0, _utils.getAnimationEndEvent)('transition');

	    classList.add(classFrom);

	    var onTransitionEnd = function (e) {
	        if (e.target === domNode) {
	            domNode.removeEventListener(transitionEndEvent, onTransitionEnd);
	            classList.remove(classFrom);
	            if (!keepClassTo) {
	                classList.remove(classTo);
	            }
	            cb();
	        }
	    };
	    var timer = (0, _utils.requestAnimationFrame)(function () {
	        timer = null;
	        domNode.addEventListener(transitionEndEvent, onTransitionEnd, false);
	        classList.add(classTo);
	    });

	    return function () {
	        if (timer !== null) {
	            (0, _utils.cancelAnimationFrame)(timer);
	        }

	        classList.remove(classFrom);
	        classList.remove(classTo);

	        domNode.removeEventListener(transitionEndEvent, onTransitionEnd);
	    };
	}

/***/ }
/******/ ]);