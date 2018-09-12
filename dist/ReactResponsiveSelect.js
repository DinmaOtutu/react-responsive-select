module.exports = (function(e) {
  var t = {};
  function n(l) {
    if (t[l]) return t[l].exports;
    var r = (t[l] = { i: l, l: !1, exports: {} });
    return e[l].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, l) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if ((n.r(l), Object.defineProperty(l, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var r in e)
          n.d(
            l,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return l;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 50))
  );
})([
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.INITIALISE = 'INITIALISE'),
      (t.UPDATE_VIA_PROPS = 'UPDATE_VIA_PROPS'),
      (t.SET_IS_DRAGGING = 'SET_IS_DRAGGING'),
      (t.SET_OPTIONS_PANEL_OPEN = 'SET_OPTIONS_PANEL_OPEN'),
      (t.SET_OPTIONS_PANEL_CLOSED = 'SET_OPTIONS_PANEL_CLOSED'),
      (t.SET_SINGLESELECT_OPTIONS = 'SET_SINGLESELECT_OPTIONS'),
      (t.SET_MULTISELECT_OPTIONS = 'SET_MULTISELECT_OPTIONS'),
      (t.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION = 'SET_OPTIONS_PANEL_CLOSED_NO_SELECTION'),
      (t.SET_OPTIONS_PANEL_CLOSED_ONBLUR = 'SET_OPTIONS_PANEL_CLOSED_ONBLUR'),
      (t.SET_NEXT_SELECTED_INDEX = 'SET_NEXT_SELECTED_INDEX'),
      (t.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC = 'SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC');
  },
  function(e, t, n) {
    e.exports = n(38)();
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = n(39);
    Object.defineProperty(t, 'ReactResponsiveSelectProps', {
      enumerable: !0,
      get: function() {
        return l.ReactResponsiveSelectProps;
      },
    });
    var r = n(36);
    Object.defineProperty(t, 'MultiSelectProps', {
      enumerable: !0,
      get: function() {
        return r.MultiSelectProps;
      },
    });
    var o = n(35);
    Object.defineProperty(t, 'MultiSelectOptionProps', {
      enumerable: !0,
      get: function() {
        return o.MultiSelectOptionProps;
      },
    });
    var i = n(34);
    Object.defineProperty(t, 'SingleSelectProps', {
      enumerable: !0,
      get: function() {
        return i.SingleSelectProps;
      },
    });
    var a = n(33);
    Object.defineProperty(t, 'SingleSelectOptionProps', {
      enumerable: !0,
      get: function() {
        return a.SingleSelectOptionProps;
      },
    });
  },
  function(e, t) {
    e.exports = require('singleline');
  },
  function(e, t) {
    e.exports = require('lodash.isequal');
  },
  function(e, t) {
    e.exports = require('react');
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      r = function e(t, n, l) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
          var o = Object.getPrototypeOf(t);
          return null === o ? void 0 : e(o, n, l);
        }
        if ('value' in r) return r.value;
        var i = r.get;
        return void 0 !== i ? i.call(l) : void 0;
      },
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(11));
    t.default = function(e) {
      return (function(t) {
        function n() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(n, e),
          l(n, [
            {
              key: 'scrollIntoView',
              value: function() {
                var e = this.props,
                  t = e.scrollIntoViewElementSelector,
                  n = e.scrollIntoViewScrollPaneRef,
                  l = e.isDragging;
                (this.scrollPaneDOM = this.scrollPaneDOM || n.current),
                  (this.elementDOM = this.elementDOM || this.optionRef.current);
                var r = (0, o.default)(this.elementDOM, t);
                if ((!0 === l && (this.dontScrollIntoView = !0), !this.dontScrollIntoView && r)) {
                  var i = this.scrollPaneDOM.getBoundingClientRect().top,
                    a = this.scrollPaneDOM.getBoundingClientRect().bottom,
                    u = this.elementDOM.getBoundingClientRect().top;
                  this.elementDOM.getBoundingClientRect().bottom > a &&
                    (this.scrollPaneDOM.scrollTop += this.elementDOM.getBoundingClientRect().height),
                    u < i && (this.scrollPaneDOM.scrollTop -= this.elementDOM.getBoundingClientRect().height),
                    0 === this.props.index && (this.scrollPaneDOM.scrollTop = 0);
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                return (
                  r(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'componentDidUpdate', this) &&
                    r(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'componentDidUpdate', this).call(
                      this,
                    ),
                  this.scrollIntoView()
                );
              },
            },
            {
              key: 'render',
              value: function() {
                return r(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), 'render', this).call(this);
              },
            },
          ]),
          n
        );
      })();
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e) {
      var t = e.noSelectionLabel,
        n = e.name,
        r = e.options,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (!t) {
        var i = -1 === o ? 0 : o;
        return l({ name: n }, r[i]);
      }
      return o > -1 ? l({ name: n }, r[o]) : { name: n, text: t, value: 'null' };
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        multiselect: !1,
        name: void 0,
        options: [],
        isDragging: !1,
        isOptionsPanelOpen: !1,
        altered: !1,
        singleSelectInitialIndex: 0,
        singleSelectSelectedIndex: 0,
        singleSelectSelectedOption: {},
        nextPotentialSelectionIndex: 0,
        multiSelectInitialSelectedIndexes: [0],
        multiSelectSelectedOptions: { options: [] },
        multiSelectSelectedIndexes: [],
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          o = e.type,
          i = t.isOptionsPanelOpen;
        if (t.disabled) return;
        n.updateState({ type: r.SET_NEXT_SELECTED_INDEX, optionIndex: (0, l.default)(o, t) }),
          !1 === i && n.updateState({ type: r.SET_OPTIONS_PANEL_OPEN });
      });
    var l = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(42)),
      r = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
    t.default = function(e) {
      var t = e.event,
        n = e.state,
        r = e.props,
        o = e.ReactResponsiveSelectClassRef,
        i = n.multiselect,
        a = n.isOptionsPanelOpen,
        u = n.nextPotentialSelectionIndex,
        s = n.disabled,
        c = n.options;
      if (!s) {
        var d = parseFloat(t.target.getAttribute('data-key'));
        (c[d] && !0 === c[d].disabled) ||
          (i
            ? o.updateState({ type: l.SET_MULTISELECT_OPTIONS, optionIndex: u })
            : o.updateState({ type: l.SET_SINGLESELECT_OPTIONS, optionIndex: u }),
          a ? t.stopPropagation() : r.onSubmit());
      }
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return (
          String(e.className)
            .split(' ')
            .indexOf(t) > -1
        );
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.event,
          n = e.state,
          o = e.ReactResponsiveSelectClassRef,
          i = n.multiselect,
          a = n.isOptionsPanelOpen,
          u = n.isDragging,
          s = n.disabled,
          c = n.options;
        if (s) return;
        if (!1 === u) {
          if ((t.preventDefault(), t && (0, l.default)(t.target, 'rrs__options'))) return;
          var d = parseFloat(t.target.getAttribute('data-key'));
          if (c[d] && !0 === c[d].disabled) return;
          if ((0, l.default)(t.target, 'rrs__option'))
            return void o.updateState({
              type: i ? r.SET_MULTISELECT_OPTIONS : r.SET_SINGLESELECT_OPTIONS,
              optionIndex: d,
            });
          o.updateState({ type: a ? r.SET_OPTIONS_PANEL_CLOSED : r.SET_OPTIONS_PANEL_OPEN }, function() {
            !1 === o.state.isOptionsPanelOpen && o.focusButton();
          });
        }
      });
    var l = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(11)),
      r = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.singleSelectBroadcastChange = t.multiSelectBroadcastChange = void 0);
    var l = o(n(47)),
      r = o(n(46));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.multiSelectBroadcastChange = l.default), (t.singleSelectBroadcastChange = r.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
    t.default = function(e) {
      var t = e.event,
        n = e.state,
        r = e.ReactResponsiveSelectClassRef,
        o = n.options;
      if (!n.disabled) {
        var i = o
          .map(function(e) {
            return e.text.toLowerCase().charAt(0);
          })
          .indexOf(t.key);
        i > -1 && r.updateState({ type: l.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC, optionIndex: i });
      }
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      r = n(5),
      o = u(r),
      i = u(n(3)),
      a = n(2);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.optionRef = o.default.createRef()), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, r.Component),
        l(t, [
          {
            key: 'componentDidUpdate',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.isOptionsPanelOpen;
              t === e.nextPotentialSelectionIndex && n && this.optionRef.current.focus();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.nextPotentialSelectionIndex,
                l = e.option,
                r = e.singleSelectSelectedIndex;
              return o.default.createElement(
                'li',
                {
                  role: 'menuitem',
                  tabIndex: '-1',
                  'aria-disabled': l.disabled ? 'true' : 'false',
                  'data-key': t,
                  index: t,
                  ref: this.optionRef,
                  className: (0, i.default)(
                    '\n          rrs__option\n          ' +
                      (r === t ? 'rrs__option--selected' : '') +
                      '\n          ' +
                      (n === t ? 'rrs__option--next-selection' : '') +
                      '\n          ' +
                      (!0 === l.disabled ? 'rrs__option--disabled' : '') +
                      '\n        ',
                  ),
                },
                l.markup || l.text,
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = s), (s.propTypes = a.SingleSelectOptionProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      r = n(5),
      o = s(r),
      i = s(n(3)),
      a = n(2),
      u = s(n(15));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, s(n(6)).default)(u.default),
      d = (function(e) {
        function t() {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var e = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.optionsButton = o.default.createRef()), (e.optionsContainer = o.default.createRef()), e;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(t, r.Component),
          l(t, [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this.props,
                  n = t.singleSelectSelectedIndex,
                  l = t.isOptionsPanelOpen,
                  r = t.nextPotentialSelectionIndex;
                !l && e.isOptionsPanelOpen && e.singleSelectSelectedIndex !== n && this.optionsButton.current.focus(),
                  l && -1 === r && this.optionsButton.current.focus();
              },
            },
            {
              key: 'getCustomLabel',
              value: function() {
                var e = this.props,
                  t = e.prefix,
                  n = e.name,
                  l = e.singleSelectSelectedOption,
                  r = e.caretIcon,
                  i = e.customLabelText;
                return o.default.createElement(
                  'div',
                  { className: 'rrs__label' },
                  o.default.createElement(
                    'span',
                    {
                      'aria-label': (t ? t + ' ' : '') + l.text + ' selected',
                      className: 'rrs__label__text',
                      id: 'rrs-' + n + '-label',
                    },
                    i,
                  ),
                  r && r,
                );
              },
            },
            {
              key: 'getDefaultLabel',
              value: function() {
                var e = this.props,
                  t = e.prefix,
                  n = e.singleSelectSelectedOption,
                  l = e.name,
                  r = e.caretIcon,
                  i = e.singleSelectSelectedIndex,
                  a = e.noSelectionLabel;
                return -1 === i
                  ? o.default.createElement(
                      'div',
                      { className: 'rrs__label' },
                      o.default.createElement(
                        'span',
                        { 'aria-label': a, className: 'rrs__label__text', id: 'rrs-' + l + '-label' },
                        t && o.default.createElement('span', null, t),
                        a,
                      ),
                      r && r,
                    )
                  : o.default.createElement(
                      'div',
                      { className: 'rrs__label' },
                      o.default.createElement(
                        'span',
                        {
                          'aria-label': (t ? t + ' ' : '') + n.text + ' selected',
                          className: 'rrs__label__text',
                          id: 'rrs-' + l + '-label',
                        },
                        t && o.default.createElement('span', null, t),
                        n.text ? n.text : o.default.createElement('div', null, ' '),
                      ),
                      r && r,
                    );
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.customLabelText,
                  l = t.disabled,
                  r = t.isOptionsPanelOpen,
                  a = t.isDragging,
                  u = t.name,
                  s = t.nextPotentialSelectionIndex,
                  d = t.options,
                  f = t.singleSelectSelectedIndex,
                  p = t.singleSelectSelectedOption;
                return o.default.createElement(
                  'div',
                  null,
                  o.default.createElement(
                    'div',
                    {
                      role: 'button',
                      tabIndex: '0',
                      'aria-disabled': l,
                      'aria-haspopup': 'true',
                      'aria-expanded': r,
                      'aria-controls': 'rrs-' + u + '-menu',
                      ref: this.optionsButton,
                      className: (0, i.default)(
                        '\n            rrs__button\n            ' +
                          (!0 === l ? 'rrs__button--disabled' : '') +
                          '\n          ',
                      ),
                    },
                    n && this.getCustomLabel(),
                    !n && this.getDefaultLabel(),
                    u && o.default.createElement('input', { type: 'hidden', name: u, value: p.value }),
                  ),
                  o.default.createElement(
                    'ul',
                    {
                      id: 'rrs-' + u + '-menu',
                      'aria-labelledby': 'rrs-' + u + '-label',
                      role: 'menu',
                      className: 'rrs__options',
                      ref: this.optionsContainer,
                    },
                    d.length > 0 &&
                      d.map(function(t, n) {
                        return o.default.createElement(c, {
                          scrollIntoViewScrollPaneRef: e.optionsContainer,
                          scrollIntoViewElementSelector: 'rrs__option--next-selection',
                          key: n,
                          index: n,
                          isDragging: a,
                          isOptionsPanelOpen: r,
                          option: t,
                          singleSelectSelectedIndex: f,
                          nextPotentialSelectionIndex: s,
                        });
                      }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })();
    (t.default = d), (d.propTypes = a.SingleSelectProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      r = n(5),
      o = u(r),
      i = u(n(3)),
      a = n(2);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.optionRef = o.default.createRef()), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, r.Component),
        l(t, [
          {
            key: 'componentDidUpdate',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.isOptionsPanelOpen;
              t === e.nextPotentialSelectionIndex && n && this.optionRef.current.focus();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.index,
                n = e.multiSelectSelectedIndexes,
                l = e.nextPotentialSelectionIndex,
                r = e.option,
                a = n.some(function(e) {
                  return e === t;
                });
              return o.default.createElement(
                'li',
                {
                  role: 'checkbox',
                  tabIndex: '-1',
                  'aria-checked': a,
                  'aria-label': r.text,
                  'aria-live': 'assertive',
                  'aria-disabled': r.disabled ? 'true' : 'false',
                  'data-key': t,
                  index: t,
                  ref: this.optionRef,
                  className: (0, i.default)(
                    '\n          rrs__option\n          ' +
                      (a ? 'rrs__option--selected' : '') +
                      '\n          ' +
                      (l === t ? 'rrs__option--next-selection' : '') +
                      '\n          ' +
                      (!0 === r.disabled ? 'rrs__option--disabled' : '') +
                      '\n        ',
                  ),
                },
                r.markup || r.text,
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = s), (s.propTypes = a.MultiSelectOptionProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      r = n(5),
      o = c(r),
      i = c(n(3)),
      a = c(n(4)),
      u = n(2),
      s = c(n(17));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (0, c(n(6)).default)(s.default),
      f = (function(e) {
        function t() {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var e = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.optionsButton = o.default.createRef()), (e.optionsContainer = o.default.createRef()), e;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(t, r.Component),
          l(t, [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                this.props.isOptionsPanelOpen ||
                  !e.isOptionsPanelOpen ||
                  (0, a.default)(e.multiSelectSelectedIndexes, this.props.multiSelectSelectedIndexes) ||
                  this.optionsButton.current.focus();
              },
            },
            {
              key: 'getAriaLabel',
              value: function() {
                var e = this.props,
                  t = e.multiSelectSelectedOptions,
                  n = e.prefix,
                  l = t.options.length;
                return (0, i.default)(
                  '\n      Checkbox group ' +
                    (n ? n + ' ' : '') +
                    ' has\n      ' +
                    l +
                    ' item' +
                    (1 === l ? '' : 's') +
                    ' selected.\n      Selected option' +
                    (1 === l ? '' : 's') +
                    ' ' +
                    (1 === l ? 'is' : 'are') +
                    '\n      ' +
                    t.options
                      .map(function(e) {
                        return e.text;
                      })
                      .join(' and ') +
                    '\n    ',
                );
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.caretIcon,
                  l = t.customLabelText,
                  r = t.disabled,
                  a = t.isDragging,
                  u = t.isOptionsPanelOpen,
                  s = t.multiSelectSelectedIndexes,
                  c = t.multiSelectSelectedOptions,
                  f = t.name,
                  p = t.options,
                  S = t.nextPotentialSelectionIndex,
                  _ = t.prefix;
                return o.default.createElement(
                  'div',
                  null,
                  o.default.createElement(
                    'div',
                    {
                      role: 'button',
                      tabIndex: '0',
                      'aria-disabled': r,
                      'aria-haspopup': 'true',
                      'aria-expanded': u,
                      'aria-controls': 'rrs-' + f + '-menu',
                      ref: this.optionsButton,
                      className: (0, i.default)(
                        '\n            rrs__button\n            ' +
                          (!0 === r ? 'rrs__button--disabled' : '') +
                          '\n          ',
                      ),
                    },
                    l &&
                      o.default.createElement(
                        'div',
                        { className: 'rrs__label' },
                        o.default.createElement(
                          'span',
                          {
                            'aria-label': this.getAriaLabel(),
                            className: 'rrs__label__text',
                            id: 'rrs-' + f + '-label',
                          },
                          l,
                        ),
                        n && n,
                      ),
                    !l &&
                      o.default.createElement(
                        'div',
                        { className: 'rrs__label' },
                        o.default.createElement(
                          'span',
                          {
                            'aria-label': this.getAriaLabel(),
                            className: 'rrs__label__text',
                            id: 'rrs-' + f + '-label',
                          },
                          o.default.createElement(
                            'span',
                            { className: 'rrs__multiselect-label' },
                            o.default.createElement(
                              'span',
                              { className: 'rrs__multiselect-label__text' },
                              (_ ? _ + ' ' : '') +
                                '\n                  ' +
                                (c.options.length > 0 ? c.options[0].text : ''),
                            ),
                            c.options.length > 1 &&
                              o.default.createElement(
                                'span',
                                { className: 'rrs__multiselect-label__badge' },
                                '+ ' + (c.options.length - 1),
                              ),
                          ),
                        ),
                        n && n,
                      ),
                    f &&
                      o.default.createElement('input', {
                        type: 'hidden',
                        name: f,
                        value: [
                          c.options.map(function(e) {
                            return e.value;
                          }),
                        ].join(','),
                      }),
                  ),
                  o.default.createElement(
                    'ul',
                    {
                      id: 'rrs-' + f + '-menu',
                      'aria-labelledby': 'rrs-' + f + '-label',
                      role: 'menu',
                      className: 'rrs__options',
                      ref: this.optionsContainer,
                    },
                    p.length > 0 &&
                      p.map(function(t, n) {
                        return o.default.createElement(d, {
                          scrollIntoViewScrollPaneRef: e.optionsContainer,
                          scrollIntoViewElementSelector: 'rrs__option--next-selection',
                          key: n,
                          index: n,
                          option: t,
                          isDragging: a,
                          isOptionsPanelOpen: u,
                          multiSelectSelectedIndexes: s,
                          nextPotentialSelectionIndex: S,
                        });
                      }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })();
    (t.default = f), (f.propTypes = u.MultiSelectProps);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e) {
      return l({}, e, {
        multiSelectSelectedIndexes: [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(r.default.multiSelectSelectedIndexes),
        ),
        multiSelectSelectedOptions: l({}, r.default.multiSelectSelectedOptions),
      });
    };
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(8));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return l({}, e, {
        multiSelectSelectedIndexes: [0],
        multiSelectSelectedOptions: { options: [l({ name: e.name }, e.options[0])] },
        nextPotentialSelectionIndex: 0,
        singleSelectSelectedOption: (0, r.default)(e, t),
      });
    };
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(7));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    (t.isAltered = o),
      (t.default = function(e) {
        return l({}, e, { altered: o(e) });
      });
    var r = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    function o(e) {
      return e.multiselect
        ? !(0, r.default)(e.multiSelectInitialSelectedIndexes, e.multiSelectSelectedIndexes)
        : e.singleSelectSelectedIndex !== e.singleSelectInitialIndex;
    }
  },
  function(e, t, n) {
    'use strict';
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return {
          options: [].concat(
            l(e.multiSelectSelectedOptions.options.slice(0, t)),
            l(e.multiSelectSelectedOptions.options.slice(t + 1)),
          ),
        };
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e, t) {
      return {
        options: [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(e.multiSelectSelectedOptions.options),
          [l({ name: e.name }, e.options[t])],
        ),
      };
    };
  },
  function(e, t, n) {
    'use strict';
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return [].concat(l(e.multiSelectSelectedIndexes.slice(0, t)), l(e.multiSelectSelectedIndexes.slice(t + 1)));
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        return [].concat(
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(e.multiSelectSelectedIndexes),
          [t],
        );
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e) {
      var t = e.options,
        n = e.name,
        r = e.selectedValues,
        o = e.noSelectionLabel;
      if (!o)
        return r
          ? t
              .filter(function(e) {
                return r.some(function(t) {
                  return t === e.value;
                });
              })
              .map(function(e) {
                return l({ name: n }, e);
              })
          : [l({ name: n }, t[0])];
      return r && r.length > 0
        ? t
            .filter(function(e) {
              return r.some(function(t) {
                return t === e.value;
              });
            })
            .map(function(e) {
              return l({ name: n }, e);
            })
        : [{ name: n, text: o, value: 'null' }];
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments[2],
          l = e
            .map(function(e, n) {
              return t.some(function(t) {
                return e.value === t;
              })
                ? n
                : void 0;
            })
            .filter(function(e) {
              return void 0 !== e;
            }),
          r = n ? [] : [0];
        return l.length ? l : r;
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.options,
          n = e.selectedValue,
          l = e.noSelectionLabel,
          r = t
            .map(function(e) {
              return e.value;
            })
            .indexOf(n);
        return r > -1 || l ? r : 0;
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.resetMultiSelectState = t.getSingleSelectSelectedOption = t.getInitialOption = t.mergeIsAlteredState = t.removeMultiSelectOption = t.addMultiSelectOption = t.removeMultiSelectIndex = t.addMultiSelectIndex = t.getMultiSelectInitialSelectedOptions = t.getMultiSelectSelectedValueIndexes = t.getSelectedValueIndex = void 0);
    var l = S(n(28)),
      r = S(n(27)),
      o = S(n(26)),
      i = S(n(25)),
      a = S(n(24)),
      u = S(n(23)),
      s = S(n(22)),
      c = S(n(21)),
      d = S(n(20)),
      f = S(n(7)),
      p = S(n(19));
    function S(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.getSelectedValueIndex = l.default),
      (t.getMultiSelectSelectedValueIndexes = r.default),
      (t.getMultiSelectInitialSelectedOptions = o.default),
      (t.addMultiSelectIndex = i.default),
      (t.removeMultiSelectIndex = a.default),
      (t.addMultiSelectOption = u.default),
      (t.removeMultiSelectOption = s.default),
      (t.mergeIsAlteredState = c.default),
      (t.getInitialOption = d.default),
      (t.getSingleSelectSelectedOption = f.default),
      (t.resetMultiSelectState = p.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
        }
        return e;
      };
    t.default = function(e, t) {
      switch (t.type) {
        case r.UPDATE_VIA_PROPS:
        case r.INITIALISE:
          var n = (0, o.getSelectedValueIndex)(t.value),
            i = (0, o.getMultiSelectSelectedValueIndexes)(
              t.value.options,
              t.value.selectedValues,
              t.value.noSelectionLabel,
            );
          return l({}, e, {
            multiselect: t.value.multiselect || !1,
            noSelectionLabel: t.value.noSelectionLabel,
            name: t.value.name,
            options: t.value.options,
            altered: t.value.altered || !1,
            disabled: t.value.disabled || !1,
            singleSelectInitialIndex: n,
            singleSelectSelectedIndex: n,
            singleSelectSelectedOption: (0, o.getSingleSelectSelectedOption)(t.value, n),
            nextPotentialSelectionIndex: e.nextPotentialSelectionIndex ? e.nextPotentialSelectionIndex : n,
            multiSelectInitialSelectedIndexes: i,
            multiSelectSelectedIndexes: i,
            multiSelectSelectedOptions: { options: (0, o.getMultiSelectInitialSelectedOptions)(t.value, i) },
          });
        case r.SET_IS_DRAGGING:
          return l({}, e, { isDragging: t.value });
        case r.SET_OPTIONS_PANEL_OPEN:
          var a = l({}, e, {
            isOptionsPanelOpen: !0,
            nextPotentialSelectionIndex: e.multiselect
              ? e.multiSelectSelectedIndexes.length
                ? e.multiSelectSelectedIndexes[0]
                : 0
              : e.nextPotentialSelectionIndex,
            singleSelectSelectedOption: (0, o.getSingleSelectSelectedOption)(e, e.nextPotentialSelectionIndex),
          });
          return (0, o.mergeIsAlteredState)(a);
        case r.SET_OPTIONS_PANEL_CLOSED:
          var u = l({}, e, {
            isOptionsPanelOpen: !1,
            singleSelectSelectedIndex: e.nextPotentialSelectionIndex,
            singleSelectSelectedOption: (0, o.getSingleSelectSelectedOption)(e, e.nextPotentialSelectionIndex),
          });
          return (0, o.mergeIsAlteredState)(u);
        case r.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:
        case r.SET_OPTIONS_PANEL_CLOSED_ONBLUR:
          return l({}, e, { isOptionsPanelOpen: !1 });
        case r.SET_NEXT_SELECTED_INDEX:
          return l({}, e, { nextPotentialSelectionIndex: t.optionIndex });
        case r.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC:
          return l({}, e, { isOptionsPanelOpen: !0, nextPotentialSelectionIndex: t.optionIndex });
        case r.SET_SINGLESELECT_OPTIONS:
          var s = l({}, e, {
            nextPotentialSelectionIndex: t.optionIndex,
            singleSelectSelectedIndex: t.optionIndex,
            isOptionsPanelOpen: !1,
            singleSelectSelectedOption: (0, o.getSingleSelectSelectedOption)(e, t.optionIndex),
          });
          return (0, o.mergeIsAlteredState)(s);
        case r.SET_MULTISELECT_OPTIONS:
          if (!e.noSelectionLabel) {
            var c = 0 === e.multiSelectSelectedIndexes[0] && 1 === e.multiSelectSelectedIndexes.length,
              d = e.multiSelectSelectedIndexes.length > 0 && !c && 0 === t.optionIndex,
              f = c && 0 !== t.optionIndex;
            if (d) {
              var p = (0, o.getInitialOption)(e);
              return (0, o.mergeIsAlteredState)(p);
            }
            f && (e = (0, o.resetMultiSelectState)(e));
          }
          e.noSelectionLabel &&
            e.multiSelectSelectedOptions.options[0].text === e.noSelectionLabel &&
            (e.multiSelectSelectedOptions.options = []);
          var S = e.multiSelectSelectedIndexes.indexOf(t.optionIndex),
            _ = l({}, e, {
              nextPotentialSelectionIndex: t.optionIndex,
              multiSelectSelectedIndexes:
                -1 === S ? (0, o.addMultiSelectIndex)(e, t.optionIndex) : (0, o.removeMultiSelectIndex)(e, S),
              multiSelectSelectedOptions:
                -1 === S ? (0, o.addMultiSelectOption)(e, t.optionIndex) : (0, o.removeMultiSelectOption)(e, S),
            });
          if (0 === _.multiSelectSelectedOptions.options.length)
            if (e.noSelectionLabel) {
              var O = (0, o.getMultiSelectSelectedValueIndexes)(e.options, e.selectedValues);
              _ = l({}, _, {
                nextPotentialSelectionIndex: -1,
                multiSelectSelectedOptions: { options: (0, o.getMultiSelectInitialSelectedOptions)(e, O) },
              });
            } else _ = (0, o.getInitialOption)(e);
          return (0, o.mergeIsAlteredState)(_);
        default:
          return e;
      }
    };
    var r = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      o = n(29);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.props,
          l = n.multiselect,
          r = n.customLabelRenderer,
          o = t.multiSelectSelectedOptions,
          i = t.singleSelectSelectedOption;
        return !!r && r(l ? o : i);
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    'function' == typeof Symbol && Symbol.iterator;
    t.default = function(e, t, n) {
      0;
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.SingleSelectOptionProps = void 0);
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.SingleSelectOptionProps = {
      index: l.default.number.isRequired,
      isOptionsPanelOpen: l.default.bool.isRequired,
      nextPotentialSelectionIndex: l.default.number,
      option: l.default.shape({
        text: l.default.string.isRequired,
        value: l.default.string.isRequired,
        markup: l.default.element,
        disabled: l.default.bool,
      }).isRequired,
      singleSelectSelectedIndex: l.default.number,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.SingleSelectProps = void 0);
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.SingleSelectProps = {
      altered: l.default.bool,
      caretIcon: l.default.oneOfType([l.default.string, l.default.element]),
      customLabelText: l.default.oneOfType([l.default.string, l.default.bool, l.default.element]),
      disabled: l.default.bool,
      singleSelectInitialIndex: l.default.number,
      singleSelectSelectedIndex: l.default.number,
      singleSelectSelectedOption: l.default.shape({ text: l.default.string, value: l.default.string }),
      isDragging: l.default.bool,
      isOptionsPanelOpen: l.default.bool,
      name: l.default.string,
      nextPotentialSelectionIndex: l.default.number,
      onSubmit: l.default.func,
      options: l.default.arrayOf(
        l.default.shape({ text: l.default.string.isRequired, value: l.default.string.isRequired }),
      ).isRequired,
      prefix: l.default.string,
      noSelectionLabel: l.default.string,
      selectedValue: l.default.string,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.MultiSelectOptionProps = void 0);
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.MultiSelectOptionProps = {
      index: l.default.number.isRequired,
      isOptionsPanelOpen: l.default.bool.isRequired,
      multiSelectSelectedIndexes: l.default.arrayOf(l.default.number),
      nextPotentialSelectionIndex: l.default.number,
      option: l.default.shape({
        text: l.default.string.isRequired,
        value: l.default.string.isRequired,
        markup: l.default.element,
        disabled: l.default.bool,
      }).isRequired,
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.MultiSelectProps = void 0);
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.MultiSelectProps = {
      altered: l.default.bool,
      caretIcon: l.default.oneOfType([l.default.string, l.default.element]),
      customLabelText: l.default.oneOfType([l.default.string, l.default.bool, l.default.element]),
      disabled: l.default.bool,
      multiSelectInitialSelectedIndexes: l.default.arrayOf(l.default.number),
      multiSelectSelectedIndexes: l.default.arrayOf(l.default.number),
      multiSelectSelectedOptions: l.default.shape({
        altered: l.default.bool,
        options: l.default.arrayOf(
          l.default.shape({
            name: l.default.string,
            text: l.default.string,
            value: l.default.string,
            markup: l.default.object,
          }),
        ),
      }),
      isDragging: l.default.bool,
      isOptionsPanelOpen: l.default.bool,
      name: l.default.string,
      nextPotentialSelectionIndex: l.default.number,
      onSubmit: l.default.func,
      options: l.default.arrayOf(
        l.default.shape({ text: l.default.string.isRequired, value: l.default.string.isRequired }),
      ).isRequired,
      prefix: l.default.string,
    };
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t, n) {
    'use strict';
    var l = n(37);
    function r() {}
    e.exports = function() {
      function e(e, t, n, r, o, i) {
        if (i !== l) {
          var a = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          );
          throw ((a.name = 'Invariant Violation'), a);
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      };
      return (n.checkPropTypes = r), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.ReactResponsiveSelectProps = void 0);
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1));
    t.ReactResponsiveSelectProps = {
      caretIcon: l.default.oneOfType([l.default.string, l.default.element]),
      customLabelRenderer: l.default.func,
      disabled: l.default.bool,
      multiselect: l.default.bool,
      name: l.default.string.isRequired,
      onChange: l.default.func,
      options: l.default.arrayOf(
        l.default.shape({ text: l.default.string.isRequired, value: l.default.string.isRequired }),
      ).isRequired,
      onSubmit: l.default.func,
      prefix: l.default.string,
      selectedValue: l.default.string,
      noSelectionLabel: l.default.string,
      selectedValues: l.default.arrayOf(l.default.string.isRequired),
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef;
        if (t.disabled) return;
        n.updateState({ type: l.SET_IS_DRAGGING, value: !1 });
      });
    var l = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          r = t.isDragging;
        if (t.disabled) return;
        r || n.updateState({ type: l.SET_IS_DRAGGING, value: !0 });
      });
    var l = (function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(0));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        var n = t.isOptionsPanelOpen,
          l = t.nextPotentialSelectionIndex,
          r = t.options;
        switch (e) {
          case 'increment':
            return !1 === n ? l : l === r.length - 1 ? 0 : l + 1;
          case 'decrement':
            return !1 === n ? l : 0 === l ? r.length - 1 : l - 1;
          default:
            return 0;
        }
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e, t) {
        e.forEach(function(e) {
          e === t.keyCode && t.preventDefault();
        });
      });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = { TAB: 9, ENTER: 13, SPACE: 32, ESCAPE: 27, UP: 38, DOWN: 40 });
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.event,
          n = e.state,
          c = e.props,
          d = e.ReactResponsiveSelectClassRef,
          f = n.multiselect,
          p = n.isOptionsPanelOpen;
        if (n.disabled) return;
        (0, o.default)([l.default.ENTER, l.default.SPACE, l.default.ESCAPE, l.default.UP, l.default.DOWN], t),
          /^[a-z0-9]+$/.test(t.key) && (0, i.default)({ event: t, ReactResponsiveSelectClassRef: d, state: n });
        switch (t.keyCode) {
          case l.default.TAB:
            p &&
              (t.preventDefault(),
              f &&
                d.updateState({ type: r.SET_OPTIONS_PANEL_CLOSED }, function() {
                  return d.focusButton();
                }));
            break;
          case l.default.ENTER:
            (0, a.default)({ event: t, state: n, props: c, ReactResponsiveSelectClassRef: d });
            break;
          case l.default.SPACE:
            p
              ? (0, u.default)({ event: t, state: n, ReactResponsiveSelectClassRef: d })
              : d.updateState({ type: r.SET_OPTIONS_PANEL_OPEN });
            break;
          case l.default.ESCAPE:
            d.updateState({ type: r.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION }, function() {
              return d.focusButton();
            });
            break;
          case l.default.UP:
            (0, s.default)({ state: n, ReactResponsiveSelectClassRef: d, type: 'decrement' });
            break;
          case l.default.DOWN:
            (0, s.default)({ state: n, ReactResponsiveSelectClassRef: d, type: 'increment' });
        }
      });
    var l = c(n(44)),
      r = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      o = c(n(43)),
      i = c(n(14)),
      a = c(n(10)),
      u = c(n(12)),
      s = c(n(9));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    t.default = function(e, t, n, r) {
      r && (!(0, l.default)(e, t) && r({ name: t.name, text: t.text, value: t.value, altered: n }));
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(4));
    t.default = function(e, t, n, r) {
      r &&
        (!(0, l.default)(e, t) &&
          r({
            options: t.map(function(e) {
              return { name: e.name, text: e.text, value: e.value };
            }),
            altered: n,
          }));
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e.state,
          n = e.ReactResponsiveSelectClassRef,
          o = e.props,
          i = t.isOptionsPanelOpen,
          a = t.disabled,
          u = t.altered,
          s = t.singleSelectSelectedOption,
          c = t.multiSelectSelectedOptions,
          d = o.onBlur,
          f = o.multiselect;
        if (a) return;
        var p = n.selectBox && !n.selectBox.contains(document.activeElement);
        i && p && n.updateState({ type: l.SET_OPTIONS_PANEL_CLOSED_ONBLUR });
        p &&
          d &&
          (f
            ? (0, r.multiSelectBroadcastChange)(void 0, c.options, u, d)
            : (0, r.singleSelectBroadcastChange)(void 0, s, u, d));
      });
    var l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      r = n(13);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.handleTouchStart = t.handleTouchMove = t.handleKeyUpOrDownPressed = t.handleKeyEvent = t.handleEnterPressed = t.handleClick = t.handleBlur = t.handleAlphaNumerical = void 0);
    var l = d(n(14)),
      r = d(n(48)),
      o = d(n(12)),
      i = d(n(10)),
      a = d(n(45)),
      u = d(n(9)),
      s = d(n(41)),
      c = d(n(40));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.handleAlphaNumerical = l.default),
      (t.handleBlur = r.default),
      (t.handleClick = o.default),
      (t.handleEnterPressed = i.default),
      (t.handleKeyEvent = a.default),
      (t.handleKeyUpOrDownPressed = u.default),
      (t.handleTouchMove = s.default),
      (t.handleTouchStart = c.default);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        },
      r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var l = t[n];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              'value' in l && (l.writable = !0),
              Object.defineProperty(e, l.key, l);
          }
        }
        return function(t, n, l) {
          return n && e(t.prototype, n), l && e(t, l), t;
        };
      })(),
      o = n(5),
      i = m(o),
      a = m(n(4)),
      u = m(n(3)),
      s = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(0)),
      c = n(49),
      d = n(13),
      f = n(2),
      p = m(n(32)),
      S = m(n(31)),
      _ = m(n(8)),
      O = m(n(30)),
      v = m(n(18)),
      b = m(n(16));
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var y = (function(e) {
      function t() {
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e.state = _.default), (e.reducer = O.default), e;
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, o.Component),
        r(t, [
          {
            key: 'componentDidMount',
            value: function() {
              var e = this.props,
                t = e.options,
                n = e.noSelectionLabel,
                l = e.selectedValue,
                r = e.selectedValues,
                o = e.name,
                i = e.multiselect,
                a = e.disabled,
                u = e.altered;
              this.updateState({
                type: s.INITIALISE,
                value: {
                  options: t,
                  noSelectionLabel: n,
                  selectedValue: l,
                  selectedValues: r,
                  name: o,
                  multiselect: i,
                  disabled: a,
                  altered: u,
                },
              });
            },
          },
          {
            key: 'componentWillReceiveProps',
            value: function(e) {
              (0, a.default)(e, this.props) ||
                this.updateState({ type: s.UPDATE_VIA_PROPS, value: l({}, this.props, e) });
            },
          },
          {
            key: 'componentDidUpdate',
            value: function(e, t) {
              var n = this.state,
                l = n.singleSelectInitialIndex,
                r = n.singleSelectSelectedOption,
                o = n.multiSelectSelectedOptions,
                i = n.multiselect,
                u = n.altered,
                s = n.multiSelectInitialSelectedIndexes,
                c = this.props,
                f = c.onChange,
                p = c.selectedValue,
                S = c.selectedValues;
              return (
                p !== l &&
                !(0, a.default)(S, s) &&
                (i
                  ? (0, d.multiSelectBroadcastChange)(t.multiSelectSelectedOptions.options, o.options, u, f)
                  : (0, d.singleSelectBroadcastChange)(t.singleSelectSelectedOption, r, u, f),
                !0)
              );
            },
          },
          {
            key: 'updateState',
            value: function(e, t) {
              var n = this.reducer(this.state, e);
              this.setState(n, function() {
                return t && t();
              }),
                (0, p.default)(this.props.name, e, n);
            },
          },
          {
            key: 'focusButton',
            value: function() {
              this.selectBox.querySelector('.rrs__button').focus();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this,
                t = this.props,
                n = t.prefix,
                l = t.caretIcon,
                r = t.disabled,
                o = this.state,
                a = o.altered,
                s = o.singleSelectInitialIndex,
                d = o.isOptionsPanelOpen,
                f = o.isDragging,
                p = o.noSelectionLabel,
                _ = o.multiSelectInitialSelectedIndexes,
                O = o.multiSelectSelectedIndexes,
                m = o.multiSelectSelectedOptions,
                y = o.name,
                P = o.nextPotentialSelectionIndex,
                g = o.options,
                h = o.singleSelectSelectedIndex,
                I = o.singleSelectSelectedOption,
                x = o.multiselect,
                E = (0, S.default)({ state: this.state, props: this.props });
              return i.default.createElement(
                'div',
                {
                  className: (0, u.default)(
                    '\n          rrs\n          ' +
                      (!0 === d ? 'rrs--options-visible' : '') +
                      '\n          ' +
                      (a ? 'rrs--has-changed' : '') +
                      '\n        ',
                  ),
                  ref: function(t) {
                    e.selectBox = t;
                  },
                  tabIndex: '-1',
                  onKeyDown: function(t) {
                    return (0, c.handleKeyEvent)({
                      event: t,
                      ReactResponsiveSelectClassRef: e,
                      state: e.state,
                      props: e.props,
                    });
                  },
                  onTouchStart: function() {
                    return (0, c.handleTouchStart)({ ReactResponsiveSelectClassRef: e, state: e.state });
                  },
                  onTouchMove: function() {
                    return (0, c.handleTouchMove)({ ReactResponsiveSelectClassRef: e, state: e.state });
                  },
                  onTouchEnd: function(t) {
                    return (0, c.handleClick)({ event: t, ReactResponsiveSelectClassRef: e, state: e.state });
                  },
                  onMouseDown: function(t) {
                    return (0, c.handleClick)({ event: t, ReactResponsiveSelectClassRef: e, state: e.state });
                  },
                  onBlur: function() {
                    return (0, c.handleBlur)({ ReactResponsiveSelectClassRef: e, state: e.state, props: e.props });
                  },
                },
                x
                  ? i.default.createElement(v.default, {
                      noSelectionLabel: p,
                      disabled: r,
                      altered: a,
                      isDragging: f,
                      caretIcon: l,
                      customLabelText: E,
                      prefix: n,
                      name: y,
                      multiSelectInitialSelectedIndexes: _,
                      multiSelectSelectedOptions: m,
                      multiSelectSelectedIndexes: O,
                      nextPotentialSelectionIndex: P,
                      isOptionsPanelOpen: d,
                      options: g,
                    })
                  : i.default.createElement(b.default, {
                      noSelectionLabel: p,
                      disabled: r,
                      altered: a,
                      isDragging: f,
                      singleSelectInitialIndex: s,
                      caretIcon: l,
                      prefix: n,
                      name: y,
                      customLabelText: E,
                      singleSelectSelectedOption: I,
                      singleSelectSelectedIndex: h,
                      nextPotentialSelectionIndex: P,
                      isOptionsPanelOpen: d,
                      options: g,
                    }),
              );
            },
          },
        ]),
        t
      );
    })();
    (t.default = y), (y.propTypes = f.ReactResponsiveSelectProps);
  },
]);
