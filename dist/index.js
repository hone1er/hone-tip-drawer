"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js": function(exports2) {
        "use strict";
        var l = Symbol.for("react.element");
        var n = Symbol.for("react.portal");
        var p = Symbol.for("react.fragment");
        var q = Symbol.for("react.strict_mode");
        var r = Symbol.for("react.profiler");
        var t = Symbol.for("react.provider");
        var u = Symbol.for("react.context");
        var v = Symbol.for("react.forward_ref");
        var w = Symbol.for("react.suspense");
        var x = Symbol.for("react.memo");
        var y = Symbol.for("react.lazy");
        var z = Symbol.iterator;
        function A(a) {
            if (null === a || "object" !== (typeof a === "undefined" ? "undefined" : _type_of(a))) return null;
            a = z && a[z] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var B = {
            isMounted: function isMounted() {
                return false;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {}
        };
        var C = Object.assign;
        var D = {};
        function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        E.prototype.isReactComponent = {};
        E.prototype.setState = function(a, b) {
            if ("object" !== (typeof a === "undefined" ? "undefined" : _type_of(a)) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function F() {}
        F.prototype = E.prototype;
        function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        var H = G.prototype = new F();
        H.constructor = G;
        C(H, E.prototype);
        H.isPureReactComponent = true;
        var I = Array.isArray;
        var J = Object.prototype.hasOwnProperty;
        var K = {
            current: null
        };
        var L = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function M(a, b, e) {
            var d, c = {}, k = null, h = null;
            if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
            var g = arguments.length - 2;
            if (1 === g) c.children = e;
            else if (1 < g) {
                for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                c.children = f;
            }
            if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
            return {
                $$typeof: l,
                type: a,
                key: k,
                ref: h,
                props: c,
                _owner: K.current
            };
        }
        function N(a, b) {
            return {
                $$typeof: l,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        }
        function O(a) {
            return "object" === (typeof a === "undefined" ? "undefined" : _type_of(a)) && null !== a && a.$$typeof === l;
        }
        function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, function(a2) {
                return b[a2];
            });
        }
        var P = /\/+/g;
        function Q(a, b) {
            return "object" === (typeof a === "undefined" ? "undefined" : _type_of(a)) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }
        function R(a, b, e, d, c) {
            var k = typeof a === "undefined" ? "undefined" : _type_of(a);
            if ("undefined" === k || "boolean" === k) a = null;
            var h = false;
            if (null === a) h = true;
            else switch(k){
                case "string":
                case "number":
                    h = true;
                    break;
                case "object":
                    switch(a.$$typeof){
                        case l:
                        case n:
                            h = true;
                    }
            }
            if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
                return a2;
            })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
            h = 0;
            d = "" === d ? "." : d + ":";
            if (I(a)) for(var g = 0; g < a.length; g++){
                k = a[g];
                var f = d + Q(k, g);
                h += R(k, b, e, f, c);
            }
            else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
            else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
            return h;
        }
        function S(a, b, e) {
            if (null == a) return a;
            var d = [], c = 0;
            R(a, d, "", "", function(a2) {
                return b.call(e, a2, c++);
            });
            return d;
        }
        function T(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                b.then(function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
                }, function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
                });
                -1 === a._status && (a._status = 0, a._result = b);
            }
            if (1 === a._status) return a._result.default;
            throw a._result;
        }
        var U = {
            current: null
        };
        var V = {
            transition: null
        };
        var W = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: K
        };
        function X() {
            throw Error("act(...) is not supported in production builds of React.");
        }
        exports2.Children = {
            map: S,
            forEach: function forEach(a, b, e) {
                S(a, function() {
                    b.apply(this, arguments);
                }, e);
            },
            count: function count(a) {
                var b = 0;
                S(a, function() {
                    b++;
                });
                return b;
            },
            toArray: function toArray(a) {
                return S(a, function(a2) {
                    return a2;
                }) || [];
            },
            only: function only(a) {
                if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                return a;
            }
        };
        exports2.Component = E;
        exports2.Fragment = p;
        exports2.Profiler = r;
        exports2.PureComponent = G;
        exports2.StrictMode = q;
        exports2.Suspense = w;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
        exports2.act = X;
        exports2.cloneElement = function(a, b, e) {
            if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
            var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = K.current);
                void 0 !== b.key && (c = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) d.children = e;
            else if (1 < f) {
                g = Array(f);
                for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                d.children = g;
            }
            return {
                $$typeof: l,
                type: a.type,
                key: c,
                ref: k,
                props: d,
                _owner: h
            };
        };
        exports2.createContext = function(a) {
            a = {
                $$typeof: u,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            a.Provider = {
                $$typeof: t,
                _context: a
            };
            return a.Consumer = a;
        };
        exports2.createElement = M;
        exports2.createFactory = function(a) {
            var b = M.bind(null, a);
            b.type = a;
            return b;
        };
        exports2.createRef = function() {
            return {
                current: null
            };
        };
        exports2.forwardRef = function(a) {
            return {
                $$typeof: v,
                render: a
            };
        };
        exports2.isValidElement = O;
        exports2.lazy = function(a) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: T
            };
        };
        exports2.memo = function(a, b) {
            return {
                $$typeof: x,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        exports2.startTransition = function(a) {
            var b = V.transition;
            V.transition = {};
            try {
                a();
            } finally{
                V.transition = b;
            }
        };
        exports2.unstable_act = X;
        exports2.useCallback = function(a, b) {
            return U.current.useCallback(a, b);
        };
        exports2.useContext = function(a) {
            return U.current.useContext(a);
        };
        exports2.useDebugValue = function() {};
        exports2.useDeferredValue = function(a) {
            return U.current.useDeferredValue(a);
        };
        exports2.useEffect = function(a, b) {
            return U.current.useEffect(a, b);
        };
        exports2.useId = function() {
            return U.current.useId();
        };
        exports2.useImperativeHandle = function(a, b, e) {
            return U.current.useImperativeHandle(a, b, e);
        };
        exports2.useInsertionEffect = function(a, b) {
            return U.current.useInsertionEffect(a, b);
        };
        exports2.useLayoutEffect = function(a, b) {
            return U.current.useLayoutEffect(a, b);
        };
        exports2.useMemo = function(a, b) {
            return U.current.useMemo(a, b);
        };
        exports2.useReducer = function(a, b, e) {
            return U.current.useReducer(a, b, e);
        };
        exports2.useRef = function(a) {
            return U.current.useRef(a);
        };
        exports2.useState = function(a) {
            return U.current.useState(a);
        };
        exports2.useSyncExternalStore = function(a, b, e) {
            return U.current.useSyncExternalStore(a, b, e);
        };
        exports2.useTransition = function() {
            return U.current.useTransition();
        };
        exports2.version = "18.3.1";
    }
});
// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js": function(exports2, module2) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                }
                var ReactVersion = "18.3.1";
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable)) !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactCurrentDispatcher = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactCurrentBatchConfig = {
                    transition: null
                };
                var ReactCurrentActQueue = {
                    current: null,
                    // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                    isBatchingLegacy: false,
                    didScheduleLegacyUpdate: false
                };
                var ReactCurrentOwner = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactDebugCurrentFrame = {};
                var currentExtraStackFrame = null;
                function setExtraStackFrame(stack) {
                    {
                        currentExtraStackFrame = stack;
                    }
                }
                {
                    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    };
                    ReactDebugCurrentFrame.getCurrentStack = null;
                    ReactDebugCurrentFrame.getStackAddendum = function() {
                        var stack = "";
                        if (currentExtraStackFrame) {
                            stack += currentExtraStackFrame;
                        }
                        var impl = ReactDebugCurrentFrame.getCurrentStack;
                        if (impl) {
                            stack += impl() || "";
                        }
                        return stack;
                    };
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var ReactSharedInternals = {
                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                    ReactCurrentOwner: ReactCurrentOwner
                };
                {
                    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                }
                function warn(format) {
                    {
                        {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            printWarning("warn", format, args);
                        }
                    }
                }
                function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var didWarnStateUpdateForUnmountedComponent = {};
                function warnNoop(publicInstance, callerName) {
                    {
                        var _constructor = publicInstance.constructor;
                        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                        var warningKey = componentName + "." + callerName;
                        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                            return;
                        }
                        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                    }
                }
                var ReactNoopUpdateQueue = {
                    /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */ isMounted: function isMounted(publicInstance) {
                        return false;
                    },
                    /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */ enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                        warnNoop(publicInstance, "setState");
                    }
                };
                var assign = Object.assign;
                var emptyObject = {};
                {
                    Object.freeze(emptyObject);
                }
                function Component(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                Component.prototype.isReactComponent = {};
                Component.prototype.setState = function(partialState, callback) {
                    if ((typeof partialState === "undefined" ? "undefined" : _type_of(partialState)) !== "object" && typeof partialState !== "function" && partialState != null) {
                        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    }
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                {
                    var deprecatedAPIs = {
                        isMounted: [
                            "isMounted",
                            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                        ],
                        replaceState: [
                            "replaceState",
                            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                        ]
                    };
                    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                        Object.defineProperty(Component.prototype, methodName, {
                            get: function get() {
                                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                return void 0;
                            }
                        });
                    };
                    for(var fnName in deprecatedAPIs){
                        if (deprecatedAPIs.hasOwnProperty(fnName)) {
                            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                        }
                    }
                }
                function ComponentDummy() {}
                ComponentDummy.prototype = Component.prototype;
                function PureComponent(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
                pureComponentPrototype.constructor = PureComponent;
                assign(pureComponentPrototype, Component.prototype);
                pureComponentPrototype.isPureReactComponent = true;
                function createRef() {
                    var refObject = {
                        current: null
                    };
                    {
                        Object.seal(refObject);
                    }
                    return refObject;
                }
                var isArrayImpl = Array.isArray;
                function isArray(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    var warnAboutAccessingKey = function warnAboutAccessingKey() {
                        {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingKey.isReactWarning = true;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: true
                    });
                }
                function defineRefPropWarningGetter(props, displayName) {
                    var warnAboutAccessingRef = function warnAboutAccessingRef() {
                        {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, "ref", {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                }
                function warnIfStringRefCannotBeAutoConverted(config) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function createElement(type, config, children) {
                    var propName;
                    var props = {};
                    var key = null;
                    var ref = null;
                    var self = null;
                    var source = null;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            {
                                warnIfStringRefCannotBeAutoConverted(config);
                            }
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        self = config.__self === void 0 ? null : config.__self;
                        source = config.__source === void 0 ? null : config.__source;
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        {
                            if (Object.freeze) {
                                Object.freeze(childArray);
                            }
                        }
                        props.children = childArray;
                    }
                    if (type && type.defaultProps) {
                        var defaultProps = type.defaultProps;
                        for(propName in defaultProps){
                            if (props[propName] === void 0) {
                                props[propName] = defaultProps[propName];
                            }
                        }
                    }
                    {
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                    }
                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                }
                function cloneAndReplaceKey(oldElement, newKey) {
                    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                    return newElement;
                }
                function cloneElement(element, config, children) {
                    if (element === null || element === void 0) {
                        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                    }
                    var propName;
                    var props = assign({}, element.props);
                    var key = element.key;
                    var ref = element.ref;
                    var self = element._self;
                    var source = element._source;
                    var owner = element._owner;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            owner = ReactCurrentOwner.current;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        var defaultProps;
                        if (element.type && element.type.defaultProps) {
                            defaultProps = element.type.defaultProps;
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                if (config[propName] === void 0 && defaultProps !== void 0) {
                                    props[propName] = defaultProps[propName];
                                } else {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        props.children = childArray;
                    }
                    return ReactElement(element.type, key, ref, self, source, owner, props);
                }
                function isValidElement(object) {
                    return (typeof object === "undefined" ? "undefined" : _type_of(object)) === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                var SEPARATOR = ".";
                var SUBSEPARATOR = ":";
                function escape(key) {
                    var escapeRegex = /[=:]/g;
                    var escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    };
                    var escapedString = key.replace(escapeRegex, function(match) {
                        return escaperLookup[match];
                    });
                    return "$" + escapedString;
                }
                var didWarnAboutMaps = false;
                var userProvidedKeyEscapeRegex = /\/+/g;
                function escapeUserProvidedKey(text) {
                    return text.replace(userProvidedKeyEscapeRegex, "$&/");
                }
                function getElementKey(element, index) {
                    if ((typeof element === "undefined" ? "undefined" : _type_of(element)) === "object" && element !== null && element.key != null) {
                        {
                            checkKeyStringCoercion(element.key);
                        }
                        return escape("" + element.key);
                    }
                    return index.toString(36);
                }
                function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                    var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                    if (type === "undefined" || type === "boolean") {
                        children = null;
                    }
                    var invokeCallback = false;
                    if (children === null) {
                        invokeCallback = true;
                    } else {
                        switch(type){
                            case "string":
                            case "number":
                                invokeCallback = true;
                                break;
                            case "object":
                                switch(children.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                    case REACT_PORTAL_TYPE:
                                        invokeCallback = true;
                                }
                        }
                    }
                    if (invokeCallback) {
                        var _child = children;
                        var mappedChild = callback(_child);
                        var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                        if (isArray(mappedChild)) {
                            var escapedChildKey = "";
                            if (childKey != null) {
                                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                            }
                            mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                return c;
                            });
                        } else if (mappedChild != null) {
                            if (isValidElement(mappedChild)) {
                                {
                                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                        checkKeyStringCoercion(mappedChild.key);
                                    }
                                }
                                mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                                // traverseAllChildren used to do for objects as children
                                escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                // eslint-disable-next-line react-internal/safe-string-coercion
                                escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                            }
                            array.push(mappedChild);
                        }
                        return 1;
                    }
                    var child;
                    var nextName;
                    var subtreeCount = 0;
                    var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++){
                            child = children[i];
                            nextName = nextNamePrefix + getElementKey(child, i);
                            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                        }
                    } else {
                        var iteratorFn = getIteratorFn(children);
                        if (typeof iteratorFn === "function") {
                            var iterableChildren = children;
                            {
                                if (iteratorFn === iterableChildren.entries) {
                                    if (!didWarnAboutMaps) {
                                        warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                    }
                                    didWarnAboutMaps = true;
                                }
                            }
                            var iterator = iteratorFn.call(iterableChildren);
                            var step;
                            var ii = 0;
                            while(!(step = iterator.next()).done){
                                child = step.value;
                                nextName = nextNamePrefix + getElementKey(child, ii++);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else if (type === "object") {
                            var childrenString = String(children);
                            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                        }
                    }
                    return subtreeCount;
                }
                function mapChildren(children, func, context) {
                    if (children == null) {
                        return children;
                    }
                    var result = [];
                    var count = 0;
                    mapIntoArray(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    });
                    return result;
                }
                function countChildren(children) {
                    var n = 0;
                    mapChildren(children, function() {
                        n++;
                    });
                    return n;
                }
                function forEachChildren(children, forEachFunc, forEachContext) {
                    mapChildren(children, function() {
                        forEachFunc.apply(this, arguments);
                    }, forEachContext);
                }
                function toArray(children) {
                    return mapChildren(children, function(child) {
                        return child;
                    }) || [];
                }
                function onlyChild(children) {
                    if (!isValidElement(children)) {
                        throw new Error("React.Children.only expected to receive a single React element child.");
                    }
                    return children;
                }
                function createContext(defaultValue) {
                    var context = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        // As a workaround to support multiple concurrent renderers, we categorize
                        // some renderers as primary and others as secondary. We only expect
                        // there to be two concurrent renderers at most: React Native (primary) and
                        // Fabric (secondary); React DOM (primary) and React ART (secondary).
                        // Secondary renderers store their context values on separate fields.
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        // Used to track how many concurrent renderers this context currently
                        // supports within in a single renderer. Such as parallel server rendering.
                        _threadCount: 0,
                        // These are circular
                        Provider: null,
                        Consumer: null,
                        // Add these to use same hidden class in VM as ServerContext
                        _defaultValue: null,
                        _globalName: null
                    };
                    context.Provider = {
                        $$typeof: REACT_PROVIDER_TYPE,
                        _context: context
                    };
                    var hasWarnedAboutUsingNestedContextConsumers = false;
                    var hasWarnedAboutUsingConsumerProvider = false;
                    var hasWarnedAboutDisplayNameOnConsumer = false;
                    {
                        var Consumer = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            _context: context
                        };
                        Object.defineProperties(Consumer, {
                            Provider: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingConsumerProvider) {
                                        hasWarnedAboutUsingConsumerProvider = true;
                                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                    }
                                    return context.Provider;
                                },
                                set: function set(_Provider) {
                                    context.Provider = _Provider;
                                }
                            },
                            _currentValue: {
                                get: function get() {
                                    return context._currentValue;
                                },
                                set: function set(_currentValue) {
                                    context._currentValue = _currentValue;
                                }
                            },
                            _currentValue2: {
                                get: function get() {
                                    return context._currentValue2;
                                },
                                set: function set(_currentValue2) {
                                    context._currentValue2 = _currentValue2;
                                }
                            },
                            _threadCount: {
                                get: function get() {
                                    return context._threadCount;
                                },
                                set: function set(_threadCount) {
                                    context._threadCount = _threadCount;
                                }
                            },
                            Consumer: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                                        hasWarnedAboutUsingNestedContextConsumers = true;
                                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                    }
                                    return context.Consumer;
                                }
                            },
                            displayName: {
                                get: function get() {
                                    return context.displayName;
                                },
                                set: function set(displayName) {
                                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                        hasWarnedAboutDisplayNameOnConsumer = true;
                                    }
                                }
                            }
                        });
                        context.Consumer = Consumer;
                    }
                    {
                        context._currentRenderer = null;
                        context._currentRenderer2 = null;
                    }
                    return context;
                }
                var Uninitialized = -1;
                var Pending = 0;
                var Resolved = 1;
                var Rejected = 2;
                function lazyInitializer(payload) {
                    if (payload._status === Uninitialized) {
                        var ctor = payload._result;
                        var thenable = ctor();
                        thenable.then(function(moduleObject2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var resolved = payload;
                                resolved._status = Resolved;
                                resolved._result = moduleObject2;
                            }
                        }, function(error2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var rejected = payload;
                                rejected._status = Rejected;
                                rejected._result = error2;
                            }
                        });
                        if (payload._status === Uninitialized) {
                            var pending = payload;
                            pending._status = Pending;
                            pending._result = thenable;
                        }
                    }
                    if (payload._status === Resolved) {
                        var moduleObject = payload._result;
                        {
                            if (moduleObject === void 0) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                            }
                        }
                        {
                            if (!("default" in moduleObject)) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                            }
                        }
                        return moduleObject.default;
                    } else {
                        throw payload._result;
                    }
                }
                function lazy(ctor) {
                    var payload = {
                        // We use these fields to store the result.
                        _status: Uninitialized,
                        _result: ctor
                    };
                    var lazyType = {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: payload,
                        _init: lazyInitializer
                    };
                    {
                        var defaultProps;
                        var propTypes;
                        Object.defineProperties(lazyType, {
                            defaultProps: {
                                configurable: true,
                                get: function get() {
                                    return defaultProps;
                                },
                                set: function set(newDefaultProps) {
                                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    defaultProps = newDefaultProps;
                                    Object.defineProperty(lazyType, "defaultProps", {
                                        enumerable: true
                                    });
                                }
                            },
                            propTypes: {
                                configurable: true,
                                get: function get() {
                                    return propTypes;
                                },
                                set: function set(newPropTypes) {
                                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    propTypes = newPropTypes;
                                    Object.defineProperty(lazyType, "propTypes", {
                                        enumerable: true
                                    });
                                }
                            }
                        });
                    }
                    return lazyType;
                }
                function forwardRef5(render) {
                    {
                        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                            error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                        } else if (typeof render !== "function") {
                            error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _type_of(render));
                        } else {
                            if (render.length !== 0 && render.length !== 2) {
                                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                            }
                        }
                        if (render != null) {
                            if (render.defaultProps != null || render.propTypes != null) {
                                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                            }
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!render.name && !render.displayName) {
                                    render.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                }
                function memo(type, compare) {
                    {
                        if (!isValidElementType(type)) {
                            error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _type_of(type));
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: compare === void 0 ? null : compare
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!type.name && !type.displayName) {
                                    type.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                function resolveDispatcher() {
                    var dispatcher = ReactCurrentDispatcher.current;
                    {
                        if (dispatcher === null) {
                            error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                        }
                    }
                    return dispatcher;
                }
                function useContext(Context) {
                    var dispatcher = resolveDispatcher();
                    {
                        if (Context._context !== void 0) {
                            var realContext = Context._context;
                            if (realContext.Consumer === Context) {
                                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                            } else if (realContext.Provider === Context) {
                                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                            }
                        }
                    }
                    return dispatcher.useContext(Context);
                }
                function useState2(initialState) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useState(initialState);
                }
                function useReducer(reducer, initialArg, init) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useReducer(reducer, initialArg, init);
                }
                function useRef(initialValue) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useRef(initialValue);
                }
                function useEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useEffect(create, deps);
                }
                function useInsertionEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useInsertionEffect(create, deps);
                }
                function useLayoutEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useLayoutEffect(create, deps);
                }
                function useCallback(callback, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useCallback(callback, deps);
                }
                function useMemo(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useMemo(create, deps);
                }
                function useImperativeHandle(ref, create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useImperativeHandle(ref, create, deps);
                }
                function useDebugValue(value, formatterFn) {
                    {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDebugValue(value, formatterFn);
                    }
                }
                function useTransition() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useTransition();
                }
                function useDeferredValue(value) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useDeferredValue(value);
                }
                function useId() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useId();
                }
                function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                }
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher$1.current;
                        ReactCurrentDispatcher$1.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher$1.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component2) {
                    var prototype = Component2.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            setExtraStackFrame(stack);
                        } else {
                            setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function getDeclarationErrorAddendum() {
                    if (ReactCurrentOwner.current) {
                        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                        if (name) {
                            return "\n\nCheck the render method of `" + name + "`.";
                        }
                    }
                    return "";
                }
                function getSourceInfoErrorAddendum(source) {
                    if (source !== void 0) {
                        var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                        var lineNumber = source.lineNumber;
                        return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                    }
                    return "";
                }
                function getSourceInfoErrorAddendumForProps(elementProps) {
                    if (elementProps !== null && elementProps !== void 0) {
                        return getSourceInfoErrorAddendum(elementProps.__source);
                    }
                    return "";
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    var info = getDeclarationErrorAddendum();
                    if (!info) {
                        var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                        if (parentName) {
                            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                        }
                    }
                    return info;
                }
                function validateExplicitKey(element, parentType) {
                    if (!element._store || element._store.validated || element.key != null) {
                        return;
                    }
                    element._store.validated = true;
                    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                        return;
                    }
                    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                    var childOwner = "";
                    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                    }
                    {
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    if ((typeof node === "undefined" ? "undefined" : _type_of(node)) !== "object") {
                        return;
                    }
                    if (isArray(node)) {
                        for(var i = 0; i < node.length; i++){
                            var child = node[i];
                            if (isValidElement(child)) {
                                validateExplicitKey(child, parentType);
                            }
                        }
                    } else if (isValidElement(node)) {
                        if (node._store) {
                            node._store.validated = true;
                        }
                    } else if (node) {
                        var iteratorFn = getIteratorFn(node);
                        if (typeof iteratorFn === "function") {
                            if (iteratorFn !== node.entries) {
                                var iterator = iteratorFn.call(node);
                                var step;
                                while(!(step = iterator.next()).done){
                                    if (isValidElement(step.value)) {
                                        validateExplicitKey(step.value, parentType);
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                function createElementWithValidation(type, props, children) {
                    var validType = isValidElementType(type);
                    if (!validType) {
                        var info = "";
                        if (type === void 0 || (typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null && Object.keys(type).length === 0) {
                            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                        }
                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                        if (sourceInfo) {
                            info += sourceInfo;
                        } else {
                            info += getDeclarationErrorAddendum();
                        }
                        var typeString;
                        if (type === null) {
                            typeString = "null";
                        } else if (isArray(type)) {
                            typeString = "array";
                        } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                            info = " Did you accidentally export a JSX literal instead of a component?";
                        } else {
                            typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                        }
                        {
                            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                    }
                    var element = createElement.apply(this, arguments);
                    if (element == null) {
                        return element;
                    }
                    if (validType) {
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], type);
                        }
                    }
                    if (type === REACT_FRAGMENT_TYPE) {
                        validateFragmentProps(element);
                    } else {
                        validatePropTypes(element);
                    }
                    return element;
                }
                var didWarnAboutDeprecatedCreateFactory = false;
                function createFactoryWithValidation(type) {
                    var validatedFactory = createElementWithValidation.bind(null, type);
                    validatedFactory.type = type;
                    {
                        if (!didWarnAboutDeprecatedCreateFactory) {
                            didWarnAboutDeprecatedCreateFactory = true;
                            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                        }
                        Object.defineProperty(validatedFactory, "type", {
                            enumerable: false,
                            get: function get() {
                                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                Object.defineProperty(this, "type", {
                                    value: type
                                });
                                return type;
                            }
                        });
                    }
                    return validatedFactory;
                }
                function cloneElementWithValidation(element, props, children) {
                    var newElement = cloneElement.apply(this, arguments);
                    for(var i = 2; i < arguments.length; i++){
                        validateChildKeys(arguments[i], newElement.type);
                    }
                    validatePropTypes(newElement);
                    return newElement;
                }
                function startTransition(scope, options) {
                    var prevTransition = ReactCurrentBatchConfig.transition;
                    ReactCurrentBatchConfig.transition = {};
                    var currentTransition = ReactCurrentBatchConfig.transition;
                    {
                        ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                    }
                    try {
                        scope();
                    } finally{
                        ReactCurrentBatchConfig.transition = prevTransition;
                        {
                            if (prevTransition === null && currentTransition._updatedFibers) {
                                var updatedFibersCount = currentTransition._updatedFibers.size;
                                if (updatedFibersCount > 10) {
                                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                                }
                                currentTransition._updatedFibers.clear();
                            }
                        }
                    }
                }
                var didWarnAboutMessageChannel = false;
                var enqueueTaskImpl = null;
                function enqueueTask(task) {
                    if (enqueueTaskImpl === null) {
                        try {
                            var requireString = ("require" + Math.random()).slice(0, 7);
                            var nodeRequire = module2 && module2[requireString];
                            enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
                        } catch (_err) {
                            enqueueTaskImpl = function enqueueTaskImpl(callback) {
                                {
                                    if (didWarnAboutMessageChannel === false) {
                                        didWarnAboutMessageChannel = true;
                                        if (typeof MessageChannel === "undefined") {
                                            error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                                        }
                                    }
                                }
                                var channel = new MessageChannel();
                                channel.port1.onmessage = callback;
                                channel.port2.postMessage(void 0);
                            };
                        }
                    }
                    return enqueueTaskImpl(task);
                }
                var actScopeDepth = 0;
                var didWarnNoAwaitAct = false;
                function act(callback) {
                    {
                        var prevActScopeDepth = actScopeDepth;
                        actScopeDepth++;
                        if (ReactCurrentActQueue.current === null) {
                            ReactCurrentActQueue.current = [];
                        }
                        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                        var result;
                        try {
                            ReactCurrentActQueue.isBatchingLegacy = true;
                            result = callback();
                            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                var queue = ReactCurrentActQueue.current;
                                if (queue !== null) {
                                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                    flushActQueue(queue);
                                }
                            }
                        } catch (error2) {
                            popActScope(prevActScopeDepth);
                            throw error2;
                        } finally{
                            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                        }
                        if (result !== null && (typeof result === "undefined" ? "undefined" : _type_of(result)) === "object" && typeof result.then === "function") {
                            var thenableResult = result;
                            var wasAwaited = false;
                            var thenable = {
                                then: function then(resolve, reject) {
                                    wasAwaited = true;
                                    thenableResult.then(function(returnValue2) {
                                        popActScope(prevActScopeDepth);
                                        if (actScopeDepth === 0) {
                                            recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                        } else {
                                            resolve(returnValue2);
                                        }
                                    }, function(error2) {
                                        popActScope(prevActScopeDepth);
                                        reject(error2);
                                    });
                                }
                            };
                            {
                                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                    Promise.resolve().then(function() {}).then(function() {
                                        if (!wasAwaited) {
                                            didWarnNoAwaitAct = true;
                                            error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                                        }
                                    });
                                }
                            }
                            return thenable;
                        } else {
                            var returnValue = result;
                            popActScope(prevActScopeDepth);
                            if (actScopeDepth === 0) {
                                var _queue = ReactCurrentActQueue.current;
                                if (_queue !== null) {
                                    flushActQueue(_queue);
                                    ReactCurrentActQueue.current = null;
                                }
                                var _thenable = {
                                    then: function then(resolve, reject) {
                                        if (ReactCurrentActQueue.current === null) {
                                            ReactCurrentActQueue.current = [];
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        } else {
                                            resolve(returnValue);
                                        }
                                    }
                                };
                                return _thenable;
                            } else {
                                var _thenable2 = {
                                    then: function then(resolve, reject) {
                                        resolve(returnValue);
                                    }
                                };
                                return _thenable2;
                            }
                        }
                    }
                }
                function popActScope(prevActScopeDepth) {
                    {
                        if (prevActScopeDepth !== actScopeDepth - 1) {
                            error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                        }
                        actScopeDepth = prevActScopeDepth;
                    }
                }
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    {
                        var queue = ReactCurrentActQueue.current;
                        if (queue !== null) {
                            try {
                                flushActQueue(queue);
                                enqueueTask(function() {
                                    if (queue.length === 0) {
                                        ReactCurrentActQueue.current = null;
                                        resolve(returnValue);
                                    } else {
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    }
                                });
                            } catch (error2) {
                                reject(error2);
                            }
                        } else {
                            resolve(returnValue);
                        }
                    }
                }
                var isFlushing = false;
                function flushActQueue(queue) {
                    {
                        if (!isFlushing) {
                            isFlushing = true;
                            var i = 0;
                            try {
                                for(; i < queue.length; i++){
                                    var callback = queue[i];
                                    do {
                                        callback = callback(true);
                                    }while (callback !== null);
                                }
                                queue.length = 0;
                            } catch (error2) {
                                queue = queue.slice(i + 1);
                                throw error2;
                            } finally{
                                isFlushing = false;
                            }
                        }
                    }
                }
                var createElement$1 = createElementWithValidation;
                var cloneElement$1 = cloneElementWithValidation;
                var createFactory = createFactoryWithValidation;
                var Children = {
                    map: mapChildren,
                    forEach: forEachChildren,
                    count: countChildren,
                    toArray: toArray,
                    only: onlyChild
                };
                exports2.Children = Children;
                exports2.Component = Component;
                exports2.Fragment = REACT_FRAGMENT_TYPE;
                exports2.Profiler = REACT_PROFILER_TYPE;
                exports2.PureComponent = PureComponent;
                exports2.StrictMode = REACT_STRICT_MODE_TYPE;
                exports2.Suspense = REACT_SUSPENSE_TYPE;
                exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                exports2.act = act;
                exports2.cloneElement = cloneElement$1;
                exports2.createContext = createContext;
                exports2.createElement = createElement$1;
                exports2.createFactory = createFactory;
                exports2.createRef = createRef;
                exports2.forwardRef = forwardRef5;
                exports2.isValidElement = isValidElement;
                exports2.lazy = lazy;
                exports2.memo = memo;
                exports2.startTransition = startTransition;
                exports2.unstable_act = act;
                exports2.useCallback = useCallback;
                exports2.useContext = useContext;
                exports2.useDebugValue = useDebugValue;
                exports2.useDeferredValue = useDeferredValue;
                exports2.useEffect = useEffect;
                exports2.useId = useId;
                exports2.useImperativeHandle = useImperativeHandle;
                exports2.useInsertionEffect = useInsertionEffect;
                exports2.useLayoutEffect = useLayoutEffect;
                exports2.useMemo = useMemo;
                exports2.useReducer = useReducer;
                exports2.useRef = useRef;
                exports2.useState = useState2;
                exports2.useSyncExternalStore = useSyncExternalStore;
                exports2.useTransition = useTransition;
                exports2.version = ReactVersion;
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                }
            })();
        }
    }
});
// node_modules/react/index.js
var require_react = __commonJS({
    "node_modules/react/index.js": function(exports2, module2) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module2.exports = require_react_production_min();
        } else {
            module2.exports = require_react_development();
        }
    }
});
// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js": function(exports2) {
        "use strict";
        var f = require_react();
        var k = Symbol.for("react.element");
        var l = Symbol.for("react.fragment");
        var m = Object.prototype.hasOwnProperty;
        var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
        var p = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function q(c, a, g) {
            var b, d = {}, e = null, h = null;
            void 0 !== g && (e = "" + g);
            void 0 !== a.key && (e = "" + a.key);
            void 0 !== a.ref && (h = a.ref);
            for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
            if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
            return {
                $$typeof: k,
                type: c,
                key: e,
                ref: h,
                props: d,
                _owner: n.current
            };
        }
        exports2.Fragment = l;
        exports2.jsx = q;
        exports2.jsxs = q;
    }
});
// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js": function(exports2) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                var React6 = require_react();
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable)) !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var assign = Object.assign;
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher.current;
                        ReactCurrentDispatcher.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component) {
                    var prototype = Component.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                var isArrayImpl = Array.isArray;
                function isArray(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown;
                var specialPropRefWarningShown;
                var didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                }
                function warnIfStringRefCannotBeAutoConverted(config, self) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingKey = function warnAboutAccessingKey() {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    }
                }
                function defineRefPropWarningGetter(props, displayName) {
                    {
                        var warnAboutAccessingRef = function warnAboutAccessingRef() {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, "ref", {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    }
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function jsxDEV(type, config, maybeKey, source, self) {
                    {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        if (maybeKey !== void 0) {
                            {
                                checkKeyStringCoercion(maybeKey);
                            }
                            key = "" + maybeKey;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            warnIfStringRefCannotBeAutoConverted(config, self);
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for(propName in defaultProps){
                                if (props[propName] === void 0) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    }
                }
                var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function isValidElement(object) {
                    {
                        return (typeof object === "undefined" ? "undefined" : _type_of(object)) === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                }
                function getDeclarationErrorAddendum() {
                    {
                        if (ReactCurrentOwner$1.current) {
                            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                            if (name) {
                                return "\n\nCheck the render method of `" + name + "`.";
                            }
                        }
                        return "";
                    }
                }
                function getSourceInfoErrorAddendum(source) {
                    {
                        if (source !== void 0) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                            var lineNumber = source.lineNumber;
                            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                        }
                        return "";
                    }
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                            }
                        }
                        return info;
                    }
                }
                function validateExplicitKey(element, parentType) {
                    {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = "";
                        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                        }
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    {
                        if ((typeof node === "undefined" ? "undefined" : _type_of(node)) !== "object") {
                            return;
                        }
                        if (isArray(node)) {
                            for(var i = 0; i < node.length; i++){
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === "function") {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while(!(step = iterator.next()).done){
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                var didWarnAboutKeySpread = {};
                function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
                    {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = "";
                            if (type === void 0 || (typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendum(source);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = "null";
                            } else if (isArray(type)) {
                                typeString = "array";
                            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                                info = " Did you accidentally export a JSX literal instead of a component?";
                            } else {
                                typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                            }
                            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                        var element = jsxDEV(type, props, key, source, self);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            var children = props.children;
                            if (children !== void 0) {
                                if (isStaticChildren) {
                                    if (isArray(children)) {
                                        for(var i = 0; i < children.length; i++){
                                            validateChildKeys(children[i], type);
                                        }
                                        if (Object.freeze) {
                                            Object.freeze(children);
                                        }
                                    } else {
                                        error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                                    }
                                } else {
                                    validateChildKeys(children, type);
                                }
                            }
                        }
                        {
                            if (hasOwnProperty.call(props, "key")) {
                                var componentName = getComponentNameFromType(type);
                                var keys = Object.keys(props).filter(function(k) {
                                    return k !== "key";
                                });
                                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                                    var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                                    error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                                    didWarnAboutKeySpread[componentName + beforeExample] = true;
                                }
                            }
                        }
                        if (type === REACT_FRAGMENT_TYPE) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    }
                }
                function jsxWithValidationStatic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, true);
                    }
                }
                function jsxWithValidationDynamic(type, props, key) {
                    {
                        return jsxWithValidation(type, props, key, false);
                    }
                }
                var jsx10 = jsxWithValidationDynamic;
                var jsxs8 = jsxWithValidationStatic;
                exports2.Fragment = REACT_FRAGMENT_TYPE;
                exports2.jsx = jsx10;
                exports2.jsxs = jsxs8;
            })();
        }
    }
});
// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js": function(exports2, module2) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module2.exports = require_react_jsx_runtime_production_min();
        } else {
            module2.exports = require_react_jsx_runtime_development();
        }
    }
});
// src/index.ts
var src_exports = {};
__export(src_exports, {
    TipDrawer: function() {
        return TipDrawer;
    }
});
module.exports = __toCommonJS(src_exports);
// src/components/Tip.tsx
var import_react = __toESM(require_react());
var import_wagmi = require("wagmi");
// src/components/ui/drawer.tsx
var React = __toESM(require_react());
var import_vaul = require("vaul");
// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/ui/drawer.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Drawer = function(_param) {
    var _param_shouldScaleBackground = _param.shouldScaleBackground, shouldScaleBackground = _param_shouldScaleBackground === void 0 ? true : _param_shouldScaleBackground, props = _object_without_properties(_param, [
        "shouldScaleBackground"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Root, _object_spread({
        shouldScaleBackground: shouldScaleBackground
    }, props));
};
Drawer.displayName = "Drawer";
var DrawerTrigger = import_vaul.Drawer.Trigger;
var DrawerPortal = import_vaul.Drawer.Portal;
var DrawerClose = import_vaul.Drawer.Close;
var DrawerOverlay = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Overlay, _object_spread({
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props));
});
DrawerOverlay.displayName = import_vaul.Drawer.Overlay.displayName;
var DrawerContent = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_vaul.Drawer.Content, _object_spread_props(_object_spread({
                ref: ref,
                className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)
            }, props), {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
                    }),
                    children
                ]
            }))
        ]
    });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", _object_spread({
        className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props));
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", _object_spread({
        className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props));
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props));
});
DrawerTitle.displayName = import_vaul.Drawer.Title.displayName;
var DrawerDescription = React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
DrawerDescription.displayName = import_vaul.Drawer.Description.displayName;
// src/components/Tip.tsx
var import_viem = require("viem");
// src/components/ui/input.tsx
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Input = React2.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", _object_spread({
        type: type,
        className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// public/logos/polygon_logo.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function PolygonLogo() {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", {
        width: "360",
        height: "360",
        viewBox: "0 0 360 360",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", {
                width: "360",
                height: "360",
                rx: "180",
                fill: "#6C00F6"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
                d: "M218.804 99.5819L168.572 128.432V218.473L140.856 234.539L112.97 218.46V186.313L140.856 170.39L158.786 180.788V154.779L140.699 144.511L90.4795 173.687V231.399L140.869 260.418L191.088 231.399V141.371L218.974 125.291L246.846 141.371V173.374L218.974 189.597L200.887 179.107V204.986L218.804 215.319L269.519 186.47V128.432L218.804 99.5819Z",
                fill: "white"
            })
        ]
    });
}
// public/logos/optimism_logo.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function OptimismLogo() {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", {
        width: "500",
        height: "500",
        viewBox: "0 0 500 500",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", {
                cx: "250",
                cy: "250",
                r: "250",
                fill: "#FF0420"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                d: "M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",
                fill: "white"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                d: "M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",
                fill: "white"
            })
        ]
    });
}
// public/logos/base_logo.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function BaseLogo() {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
        width: "146",
        height: "146",
        viewBox: "0 0 146 146",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", {
                cx: "73",
                cy: "73",
                r: "73",
                fill: "#0052FF"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                d: "M73.323 123.729C101.617 123.729 124.553 100.832 124.553 72.5875C124.553 44.343 101.617 21.4463 73.323 21.4463C46.4795 21.4463 24.4581 42.0558 22.271 68.2887H89.9859V76.8864H22.271C24.4581 103.119 46.4795 123.729 73.323 123.729Z",
                fill: "white"
            })
        ]
    });
}
// public/logos/ethereum_logo.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function EthereumLogo() {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
        width: "500",
        height: "500",
        viewBox: "-120 -30 500 500",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", {
                children: "Ethereum"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("desc", {
                children: "Created with Sketch."
            }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("defs", {}),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("g", {
                id: "Page-1",
                stroke: "none",
                "stroke-width": "1",
                fill: "none",
                "fill-rule": "evenodd",
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                    id: "ethereum",
                    "fill-rule": "nonzero",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#343434",
                            points: "127.56 0 125.09 9.14 125.09 279.64 127.56 281.87 255.12 210.98"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#8C8C8C",
                            points: "127.56 0 0 210.98 127.56 281.87 127.56 150.86"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#3C3C3B",
                            points: "127.56 302.71 126.14 304.32 126.14 414.35 127.56 417 255.19 237.89"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#8C8C8C",
                            points: "127.56 417 127.56 302.71 0 237.89"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#141414",
                            points: "127.56 281.87 255.12 210.98 127.56 150.86"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", {
                            id: "Shape",
                            fill: "#393939",
                            points: "0 210.98 127.56 281.87 127.56 150.86"
                        })
                    ]
                })
            })
        ]
    });
}
// src/components/ui/select.tsx
var React3 = __toESM(require_react());
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectPrimitive.Trigger, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), {
        children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.Icon, {
                asChild: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronDown, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    }));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.ScrollUpButton, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronUp, {
            className: "h-4 w-4"
        })
    }));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.ScrollDownButton, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronDown, {
            className: "h-4 w-4"
        })
    }));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectPrimitive.Content, _object_spread_props(_object_spread({
            ref: ref,
            className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position
        }, props), {
            children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectScrollUpButton, {}),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.Viewport, {
                    className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectScrollDownButton, {})
            ]
        }))
    });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectPrimitive.Item, _object_spread_props(_object_spread({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.ItemIndicator, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.Check, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.ItemText, {
                children: children
            })
        ]
    }));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
// src/components/ui/button.tsx
var React4 = __toESM(require_react());
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React4.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/Tip.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var currencyMap = {
    1: [
        {
            name: "Wrapped Ethereum",
            symbol: "WETH",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        },
        {
            name: "Dai Stablecoin",
            symbol: "DAI",
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
        },
        {
            name: "USD Coin",
            symbol: "USDC",
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
            name: "Tether USD",
            symbol: "USDT",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        },
        {
            name: "Polygon",
            symbol: "MATIC",
            address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
        }
    ],
    137: [
        {
            name: "Wrapped Ethereum",
            symbol: "WETH",
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
        },
        {
            name: "Dai Stablecoin",
            symbol: "DAI",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
        },
        {
            name: "USD Coin",
            symbol: "USDC",
            address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
        },
        {
            name: "Wrapped Matic",
            symbol: "WMATIC",
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
        }
    ]
};
function TipDrawer(param) {
    var className = param.className;
    var _currencyMap_chainId;
    var _ref = _sliced_to_array((0, import_react.useState)(""), 2), amount = _ref[0], setAmount = _ref[1];
    var chainId = (0, import_wagmi.useChainId)();
    var sendTransaction = (0, import_wagmi.useSendTransaction)().sendTransaction;
    var writeContractAsync = (0, import_wagmi.useWriteContract)().writeContractAsync;
    var _ref1 = (0, import_wagmi.useSwitchChain)(), chains = _ref1.chains, switchChain = _ref1.switchChain;
    var _ref2 = _sliced_to_array((0, import_react.useState)(""), 2), selectedCurrencyAddress = _ref2[0], setSelectedCurrencyAddress = _ref2[1];
    var chainLogoMap = {
        137: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PolygonLogo, {}),
        10: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OptimismLogo, {}),
        8453: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BaseLogo, {}),
        1: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(EthereumLogo, {})
    };
    var chainColorMap = {
        137: "violet-600",
        10: "red-600",
        8453: "blue-600",
        1: "gray-600"
    };
    var handleTransferERC20 = function() {
        var _ref = _async_to_generator(function(address) {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            writeContractAsync({
                                address: address,
                                abi: import_viem.erc20Abi,
                                functionName: "transfer",
                                args: [
                                    process.env.NEXT_PUBLIC_TIP_ADDRESS,
                                    (0, import_viem.parseEther)(amount)
                                ]
                            }, {
                                onError: function(error) {
                                    alert(error.message);
                                },
                                onSuccess: function(hash) {
                                    alert("Thanks for the tip! \uD83D\uDE80 \n          Transaction hash: " + hash + "Check it out on Etherscan: https://etherscan.io/tx/" + hash);
                                }
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error(error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleTransferERC20(address) {
            return _ref.apply(this, arguments);
        };
    }();
    var handleSend = function() {
        var _ref = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                try {
                    sendTransaction({
                        to: process.env.NEXT_PUBLIC_TIP_ADDRESS,
                        value: (0, import_viem.parseEther)(amount)
                    });
                } catch (error) {
                    console.error(error);
                }
                return [
                    2
                ];
            });
        });
        return function handleSend() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Drawer, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DrawerTrigger, {
                asChild: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Button, {
                    size: "sm",
                    variant: "outline",
                    className: "flex items-center gap-2 ".concat(className),
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PointerIcon, {
                            className: "h-5 w-5"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", {
                            children: "Send Tip"
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DrawerContent, {
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                    className: "mx-auto w-full max-w-sm",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DrawerHeader, {
                            className: "space-y-4",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DrawerTitle, {
                                    children: "Send a tip!"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DrawerDescription, {
                                    children: [
                                        "Did this tool help you? Send a tip to show your appreciation!",
                                        " ",
                                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                                        "This tool was created by",
                                        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", {
                                            href: "https://hey.xyz/u/hone1er",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-blue-500",
                                            children: [
                                                " ",
                                                "@hone1er"
                                            ]
                                        }),
                                        "! Follow on hey.xyz or any Lens app for more updates. \u{1F680}"
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
                            className: "flex max-w-sm flex-col gap-6 p-4",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", {
                                    className: "text-lg font-semibold",
                                    children: "Select Chain"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: chains.map(function(chain) {
                                        return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, {
                                            onClick: function() {
                                                return switchChain({
                                                    chainId: chain.id
                                                });
                                            },
                                            size: "icon",
                                            className: "h-8 w-8 ".concat(chainId === chain.id ? "border  bg-gray-200 shadow-md shadow-".concat(chainColorMap[chain.id]) : "", " "),
                                            variant: chainId === chain.id ? "outline" : "secondary",
                                            children: chainLogoMap[chain.id]
                                        }, chain.id);
                                    })
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Select, {
                                    onValueChange: function(val) {
                                        return setSelectedCurrencyAddress(val);
                                    },
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectTrigger, {
                                            className: "w-[180px]",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectValue, {
                                                placeholder: "Currency"
                                            })
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectContent, {
                                            children: (_currencyMap_chainId = currencyMap[chainId]) === null || _currencyMap_chainId === void 0 ? void 0 : _currencyMap_chainId.map(function(currency) {
                                                return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SelectItem, {
                                                    value: currency.address,
                                                    children: [
                                                        currency.name,
                                                        " (",
                                                        currency.symbol,
                                                        ")"
                                                    ]
                                                }, currency.address);
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                            className: "p-4 pb-0",
                            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
                                className: "mt-3",
                                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Input, {
                                    placeholder: "Enter amount",
                                    value: amount,
                                    onChange: function(e) {
                                        return setAmount(e.target.value);
                                    },
                                    type: "number",
                                    min: "0",
                                    step: "0.01"
                                })
                            })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DrawerFooter, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, {
                                    onClick: function() {
                                        return handleTransferERC20(selectedCurrencyAddress);
                                    },
                                    children: "Send"
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DrawerClose, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, {
                                        variant: "outline",
                                        children: "Cancel"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function PointerIcon(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", _object_spread_props(_object_spread({}, props), {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                d: "M22 14a8 8 0 0 1-8 8"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", {
                d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
            })
        ]
    }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    TipDrawer: TipDrawer
}); /*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
