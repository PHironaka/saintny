(function(window) {
    'use strict';
    window.Agegate = function(options) {
        var defaults = {
            cookie: 'popup_agreed',
    body: '<p>SIGN UP.</p><p> Be alerted first when product is available.</p> <p> AND GET 15% OFF YOUR FIRST ORDER.</p><form action="https://saintnewyork.us20.list-manage.com/subscribe/post?u=8a4e8fbe2eed96465571d0532&amp;id=8a4036a2e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>    <div id="mc_embed_signup_scroll">  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_592248922d9a311651cb3ce8e_0d2d096314" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form>'
,
            cancelUrl: '/',
            expires: 7,
            success: function() {},
            fail: function() {}
        }
        options = options !== undefined ? options : {};
        this.setOptions(options, defaults);
        if (this.checkCookie(this.options.cookie)) return;
        this.createPopup();
        this.setEventHandlers();
        this.freezeScrolling();
        return this
    }
    Agegate.prototype = {
        createPopup: function() {
            this.container = document.createElement('div');
            this.container.innerHTML = ['<div class="popup-backdrop" style="z-index: 1000; position: fixed; top: 0; right: 0; left: 0; bottom: 0; background-color: #000; opacity: 0.48; overflow-x: hidden; overflow-y: auto;"></div>', '<div class="popup-modal" style="z-index: 1001; position: fixed; top: 0; right: 0; left: 0; bottom: 0; padding: 10px;">', '<div class="popup-container">', '<div class="popup-body">', this.options.body, '</div>', '<div class="popup-actions">', '</div>', '</div>', '</div>'].join('');
            document.body.insertBefore(this.container, document.body.firstChild);
            this.agreeBtn = this.container.querySelector('.popup-agree');
            this.cancelBtn = this.container.querySelector('.popup-cancel')
        },
        destroyPopup: function() {
            this.container.parentNode.removeChild(this.container);
            this.allowScrolling()
        },
        successHandler: function() {
            this.setCookie();
            this.destroyPopup();
            this.options.success()
        },
        failHandler: function() {
            this.options.fail();
            window.location.href = this.options.cancelUrl
        },
        setOptions: function(options, defaults) {
            this.options = Object.assign(defaults, options, {
                defaults: defaults
            })
        },
        checkCookie: function(cookie) {
            return Cookies.get(cookie)
        },
        setCookie: function() {
            Cookies.set(this.options.cookie, !0, {
                expires: this.options.expires
            })
        },
        setEventHandlers: function() {
            this.agreeBtn.addEventListener('click', this.successHandler.bind(this), !1);
            this.cancelBtn.addEventListener('click', this.failHandler.bind(this), !1)
        },
        freezeScrolling: function() {
            document.body.style.overflowY = 'hidden'
        },
        allowScrolling: function() {
            document.body.style.overflowY = 'auto'
        }
    }
    if (typeof Object.assign != 'function') {
        Object.defineProperty(Object, 'assign', {
            value: function assign(target, varArgs) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object')
                }
                var to = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];
                    if (nextSource != null) {
                        for (var nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
                return to
            },
            writable: !0,
            configurable: !0
        })
    };
    (function(factory) {
        var registeredInModuleLoader = !1;
        if (typeof define === 'function' && define.amd) {
            define(factory);
            registeredInModuleLoader = !0
        }
        if (typeof exports === 'object') {
            module.exports = factory();
            registeredInModuleLoader = !0
        }
        if (!registeredInModuleLoader) {
            var OldCookies = window.Cookies;
            var api = window.Cookies = factory();
            api.noConflict = function() {
                window.Cookies = OldCookies;
                return api
            }
        }
    }(function() {
        function extend() {
            var i = 0;
            var result = {};
            for (; i < arguments.length; i++) {
                var attributes = arguments[i];
                for (var key in attributes) {
                    result[key] = attributes[key]
                }
            }
            return result
        }

        function init(converter) {
            function api(key, value, attributes) {
                var result;
                if (typeof document === 'undefined') {
                    return
                }
                if (arguments.length > 1) {
                    attributes = extend({
                        path: '/'
                    }, api.defaults, attributes);
                    if (typeof attributes.expires === 'number') {
                        var expires = new Date();
                        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                        attributes.expires = expires
                    }
                    attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
                    try {
                        result = JSON.stringify(value);
                        if (/^[\{\[]/.test(result)) {
                            value = result
                        }
                    } catch (e) {}
                    if (!converter.write) {
                        value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
                    } else {
                        value = converter.write(value, key)
                    }
                    key = encodeURIComponent(String(key));
                    key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    key = key.replace(/[\(\)]/g, escape);
                    var stringifiedAttributes = '';
                    for (var attributeName in attributes) {
                        if (!attributes[attributeName]) {
                            continue
                        }
                        stringifiedAttributes += '; ' + attributeName;
                        if (attributes[attributeName] === !0) {
                            continue
                        }
                        stringifiedAttributes += '=' + attributes[attributeName]
                    }
                    return (document.cookie = key + '=' + value + stringifiedAttributes)
                }
                if (!key) {
                    result = {}
                }
                var cookies = document.cookie ? document.cookie.split('; ') : [];
                var rdecode = /(%[0-9A-Z]{2})+/g;
                var i = 0;
                for (; i < cookies.length; i++) {
                    var parts = cookies[i].split('=');
                    var cookie = parts.slice(1).join('=');
                    if (cookie.charAt(0) === '"') {
                        cookie = cookie.slice(1, -1)
                    }
                    try {
                        var name = parts[0].replace(rdecode, decodeURIComponent);
                        cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                        if (this.json) {
                            try {
                                cookie = JSON.parse(cookie)
                            } catch (e) {}
                        }
                        if (key === name) {
                            result = cookie;
                            break
                        }
                        if (!key) {
                            result[name] = cookie
                        }
                    } catch (e) {}
                }
                return result
            }
            api.set = api;
            api.get = function(key) {
                return api.call(api, key)
            };
            api.getJSON = function() {
                return api.apply({
                    json: !0
                }, [].slice.call(arguments))
            };
            api.defaults = {};
            api.remove = function(key, attributes) {
                api(key, '', extend(attributes, {
                    expires: -1
                }))
            };
            api.withConverter = init;
            return api
        }
        return init(function() {})
    }))
}(window))

(function(window) {
    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        new Agegate({
            cancelUrl: 'https://google.com' // This is where your user will be taken if they do not agree to the popup
        });
    })
}(window));