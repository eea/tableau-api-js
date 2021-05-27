"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! tableau-2.6.0 */
!function () {
  /*! BEGIN MscorlibSlim */
  var e = {};
  !function (e) {
    "use strict";

    var t,
        i,
        n,
        r,
        a = {
      __assemblies: {}
    };
    a.initAssembly = function (e, t, i) {
      i = i || {}, e.name = t, e.toString = function () {
        return this.name;
      }, e.__types = {}, e.getResourceNames = function () {
        return Object.keys(i);
      }, e.getResourceDataBase64 = function (e) {
        return i[e] || null;
      }, e.getResourceData = function (e) {
        var t = i[e];
        return t ? a.dec64(t) : null;
      }, a.__assemblies[t] = e;
    }, a.initAssembly(a, "mscorlib"), a.getAssemblies = function () {
      return Object.keys(a.__assemblies).map(function (e) {
        return a.__assemblies[e];
      });
    }, a.isNullOrUndefined = function (e) {
      return null == e;
    }, a.isValue = function (e) {
      return null != e;
    }, a.referenceEquals = function (e, t) {
      return a.isValue(e) ? e === t : !a.isValue(t);
    }, a.mkdict = function () {
      for (var e = 1 !== arguments.length ? arguments : arguments[0], t = {}, i = 0; i < e.length; i += 2) {
        t[e[i]] = e[i + 1];
      }

      return t;
    }, a.clone = function (e, t) {
      return t ? e.$clone(t) : t;
    }, a.coalesce = function (e, t) {
      return a.isValue(e) ? e : t;
    }, a.isDate = function (e) {
      return "[object Date]" === Object.prototype.toString.call(e);
    }, a.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }, a.isTypedArrayType = function (e) {
      return ["Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray"].indexOf(a.getTypeFullName(e)) >= 0;
    }, a.isArrayOrTypedArray = function (e) {
      return a.isArray(e) || a.isTypedArrayType(a.getInstanceType(e));
    }, a.equals = function (e, t) {
      if (!a.isValue(e)) throw new H("Object is null");
      return e !== a && "function" == typeof e.equals ? e.equals(t) : a.isDate(e) && a.isDate(t) ? e.valueOf() === t.valueOf() : "function" == typeof e && "function" == typeof t ? a.delegateEquals(e, t) : !(!a.isNullOrUndefined(e) || !a.isNullOrUndefined(t)) || e === t;
    }, a.compare = function (e, t) {
      if (a.isValue(e)) return "number" == typeof e || "string" == typeof e || "boolean" == typeof e ? a.isValue(t) ? e < t ? -1 : e > t ? 1 : 0 : 1 : a.isDate(e) ? a.isValue(t) ? a.compare(e.valueOf(), t.valueOf()) : 1 : e.compareTo(t);
      throw new H("Object is null");
    }, a.equalsT = function (e, t) {
      if (a.isValue(e)) return "number" == typeof e || "string" == typeof e || "boolean" == typeof e ? e === t : a.isDate(e) ? e.valueOf() === t.valueOf() : e.equalsT(t);
      throw new H("Object is null");
    }, a.staticEquals = function (e, t) {
      return a.isValue(e) ? !!a.isValue(t) && a.equals(e, t) : !a.isValue(t);
    }, a.shallowCopy = function () {
      try {
        Object.getOwnPropertyDescriptor({
          a: 0
        }, "a").value;
        return !0;
      } catch (e) {
        return !1;
      }
    }() ? function (e, t) {
      for (var i = Object.keys(e), n = 0, r = i.length; n < r; n++) {
        Object.defineProperty(t, i[n], Object.getOwnPropertyDescriptor(e, i[n]));
      }
    } : function (e, t) {
      for (var i = Object.keys(e), n = 0, r = i.length; n < r; n++) {
        t[i[n]] = e[i[n]];
      }
    }, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.Element || (window.Element = function () {}, window.Element.isInstanceOfType = function (e) {
      return e && void 0 === e.constructor && "string" == typeof e.tagName;
    }), window.Element.__typeName = "Element", a.parseXml = function (e) {
      return new DOMParser().parseFromString(e, "text/xml");
    }), a.clearKeys = function (e) {
      for (var t in e) {
        e.hasOwnProperty(t) && delete e[t];
      }
    }, a.keyExists = function (e, t) {
      return void 0 !== e[t];
    }, Object.keys || (Object.keys = (t = Object.prototype.hasOwnProperty, i = !{
      toString: null
    }.propertyIsEnumerable("toString"), r = (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (e) {
      if ("object" != _typeof(e) && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
      var a,
          s,
          o = [];

      for (a in e) {
        t.call(e, a) && o.push(a);
      }

      if (i) for (s = 0; s < r; s++) {
        t.call(e, n[s]) && o.push(n[s]);
      }
      return o;
    })), a.getKeyCount = function (e) {
      return Object.keys(e).length;
    }, a.__genericCache = {}, a._makeGenericTypeName = function (e, t) {
      for (var i = a.getTypeFullName(e), n = 0; n < t.length; n++) {
        i += (0 === n ? "[" : ",") + "[" + a.getTypeFullName(t[n]) + "]";
      }

      return i += "]";
    }, a.makeGenericType = function (e, t) {
      var i = a._makeGenericTypeName(e, t);

      return a.__genericCache[a._makeQName(i, e.__assembly)] || e.apply(null, t);
    }, a._registerGenericInstance = function (e, t, i, n, r, s) {
      i || (i = function i() {});

      var o = a._makeGenericTypeName(e, t);

      return a.__genericCache[a._makeQName(o, e.__assembly)] = i, i.__typeName = o, i.__assembly = e.__assembly, i.__genericTypeDefinition = e, i.__typeArguments = t, r && a.shallowCopy(r, i), s(i), n && a.shallowCopy(n, i.prototype), i;
    }, a.registerGenericClassInstance = function (e, t, i, n, r, s, o) {
      return a._registerGenericInstance(e, t, i, n, r, function (e) {
        a.initClass(e, s ? s() : null, o ? o() : null);
      });
    }, a.registerGenericStructInstance = function (e, t, i, n, r, s) {
      return a._registerGenericInstance(e, t, i, n, r, function (e) {
        a.initStruct(e, s ? s() : null);
      });
    }, a.registerGenericInterfaceInstance = function (e, t, i, n) {
      return a._registerGenericInstance(e, t, null, i, null, function (e) {
        a.initInterface(e, i, n ? n() : null);
      });
    }, a.isGenericTypeDefinition = function (e) {
      return e.__isGenericTypeDefinition || !1;
    }, a.getGenericTypeDefinition = function (e) {
      return e.__genericTypeDefinition || null;
    }, a.getGenericParameterCount = function (e) {
      return e.__typeArgumentCount || 0;
    }, a.getGenericArguments = function (e) {
      return e.__typeArguments || null;
    }, a.__anonymousCache = {}, a.anonymousType = function () {
      var e = Array.prototype.slice.call(arguments),
          t = "Anonymous<" + e.map(function (e) {
        return e[1] + ":" + a.getTypeFullName(e[0]);
      }).join(",") + ">",
          i = a.__anonymousCache[t];

      if (!i) {
        (i = new Function(e.map(function (e) {
          return e[1];
        }).join(","), e.map(function (e) {
          return "this." + e[1] + "=" + e[1] + ";";
        }).join(""))).__typeName = t;
        var n = e.map(function (e) {
          return {
            name: e[1],
            typeDef: i,
            type: 16,
            returnType: e[0],
            getter: {
              name: "get_" + e[1],
              typeDef: i,
              params: [],
              returnType: e[0],
              fget: e[1]
            }
          };
        });
        n.push({
          name: ".ctor",
          typeDef: i,
          type: 1,
          params: e.map(function (e) {
            return e[0];
          })
        }), i.__metadata = {
          members: n
        }, a.__anonymousCache[t] = i;
      }

      return i;
    }, a.setMetadata = function (e, t) {
      if (t.members) for (var i = 0; i < t.members.length; i++) {
        var n = t.members[i];
        n.typeDef = e, n.adder && (n.adder.typeDef = e), n.remover && (n.remover.typeDef = e), n.getter && (n.getter.typeDef = e), n.setter && (n.setter.typeDef = e);
      }
      e.__metadata = t, t.variance && (e.isAssignableFrom = function (e) {
        var t = function t(e, _t) {
          if (_t.__genericTypeDefinition === e.__genericTypeDefinition && _t.__typeArguments.length === e.__typeArguments.length) {
            for (var i = 0; i < e.__typeArguments.length; i++) {
              var n = e.__metadata.variance[i],
                  r = e.__typeArguments[i],
                  s = _t.__typeArguments[i];

              switch (n) {
                case 1:
                  if (!a.isAssignableFrom(r, s)) return !1;
                  break;

                case 2:
                  if (!a.isAssignableFrom(s, r)) return !1;
                  break;

                default:
                  if (s !== r) return !1;
              }
            }

            return !0;
          }

          return !1;
        };

        if (e.__interface && t(this, e)) return !0;

        for (var i = a.getInterfaces(e), n = 0; n < i.length; n++) {
          if (i[n] === this || t(this, i[n])) return !0;
        }

        return !1;
      });
    }, a.setMetadata = function (e, t) {}, a.mkType = function (e, t, i, n, r) {
      return i || (i = function i() {}), i.__assembly = e, i.__typeName = t, e && (e.__types[t] = i), n && (i.__members = n), r && a.shallowCopy(r, i), i;
    }, a.mkEnum = function (e, t, i, n) {
      var r = a.mkType(e, t);
      return a.shallowCopy(i, r.prototype), r.__enum = !0, r.getDefaultValue = r.createInstance = function () {
        return n ? null : 0;
      }, r.isInstanceOfType = function (e) {
        return _typeof(e) == (n ? "string" : "number");
      }, r;
    }, a.initClass = function (e, t, i) {
      if (e.__class = !0, t && t !== Object) {
        var n = function n() {};

        n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
      }

      e.__members && (a.shallowCopy(e.__members, e.prototype), delete e.__members), i && (e.__interfaces = i);
    }, a.initStruct = function (e, t) {
      a.initClass(e, null, t), e.__class = !1, e.getDefaultValue = e.getDefaultValue || e.createInstance || function () {
        return new e();
      };
    }, a.initGenericClass = function (e, t) {
      e.__class = !0, e.__typeArgumentCount = t, e.__isGenericTypeDefinition = !0;
    }, a.initGenericStruct = function (e, t) {
      a.initGenericClass(e, t), e.__class = !1;
    }, a.initInterface = function (e, t, i) {
      e.__interface = !0, i && (e.__interfaces = i), a.shallowCopy(t, e.prototype), e.isAssignableFrom = function (e) {
        return a.contains(a.getInterfaces(e), this);
      };
    }, a.initGenericInterface = function (e, t) {
      e.__interface = !0, e.__typeArgumentCount = t, e.__isGenericTypeDefinition = !0;
    }, a.getBaseType = function (e) {
      if (e === Object || e.__interface) return null;
      if (Object.getPrototypeOf) return Object.getPrototypeOf(e.prototype).constructor;
      var t = e.prototype;

      if (Object.prototype.hasOwnProperty.call(t, "constructor")) {
        var i = t.constructor;

        try {
          return delete t.constructor, t.constructor;
        } finally {
          t.constructor = i;
        }
      }

      return t.constructor;
    }, a.getTypeFullName = function (e) {
      return e.__typeName || e.name || (e.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || "Object";
    }, a._makeQName = function (e, t) {
      return e + (t ? ", " + t.name : "");
    }, a.getTypeQName = function (e) {
      return a._makeQName(a.getTypeFullName(e), e.__assembly);
    }, a.getTypeName = function (e) {
      var t = a.getTypeFullName(e),
          i = t.indexOf("["),
          n = t.lastIndexOf(".", i >= 0 ? i : t.length);
      return n > 0 ? t.substr(n + 1) : t;
    }, a.getTypeNamespace = function (e) {
      var t = a.getTypeFullName(e),
          i = t.indexOf("["),
          n = t.lastIndexOf(".", i >= 0 ? i : t.length);
      return n > 0 ? t.substr(0, n) : "";
    }, a.getTypeAssembly = function (e) {
      return a.contains([Date, Number, Boolean, String, Function, Array], e) ? a : e.__assembly || null;
    }, a._getAssemblyType = function (e, t) {
      if (e.__types) return e.__types[t] || null;

      for (var i = t.split("."), n = 0; n < i.length; n++) {
        if (e = e[i[n]], !a.isValue(e)) return null;
      }

      return "function" != typeof e ? null : e;
    }, a.getAssemblyTypes = function (e) {
      var t = [];
      if (e.__types) for (var i in e.__types) {
        e.__types.hasOwnProperty(i) && t.push(e.__types[i]);
      } else {
        var n = function n(e, i) {
          for (var r in e) {
            e.hasOwnProperty(r) && n(e[r], r);
          }

          "function" == typeof e && a.isUpper(i.charCodeAt(0)) && t.push(e);
        };

        n(e, "");
      }
      return t;
    }, a.createAssemblyInstance = function (e, t) {
      var i = a.getType(t, e);
      return i ? a.createInstance(i) : null;
    }, a.getInterfaces = function (e) {
      return e.__interfaces ? e.__interfaces : e === Date || e === Number ? [l, o, s] : e === Boolean || e === String ? [l, o] : e === Array || a.isTypedArrayType(e) ? [h, m, $, d, v] : [];
    }, a.isInstanceOfType = function (e, t) {
      return !a.isNullOrUndefined(e) && ("function" == typeof t.isInstanceOfType ? t.isInstanceOfType(e) : a.isAssignableFrom(t, a.getInstanceType(e)));
    }, a.isAssignableFrom = function (e, t) {
      return e === t || "function" == typeof e.isAssignableFrom && e.isAssignableFrom(t) || t.prototype instanceof e;
    }, a.isClass = function (e) {
      return !0 === e.__class || e === Array || e === Function || e === RegExp || e === String || e === Error || e === Object;
    }, a.isEnum = function (e) {
      return !!e.__enum;
    }, a.isFlags = function (e) {
      return e.__metadata && e.__metadata.enumFlags || !1;
    }, a.isInterface = function (e) {
      return !!e.__interface;
    }, a.safeCast = function (e, t) {
      return !0 === t ? e : !1 === t ? null : a.isInstanceOfType(e, t) ? e : null;
    }, a.cast = function (e, t) {
      if (null == e) return e;
      if (!0 === t || !1 !== t && a.isInstanceOfType(e, t)) return e;
      throw new U("Cannot cast object to type " + a.getTypeFullName(t));
    }, a.getInstanceType = function (e) {
      if (!a.isValue(e)) throw new H("Cannot get type of null");

      try {
        return e.constructor;
      } catch (e) {
        return Object;
      }
    }, a._getType = function (t, i, n) {
      var r,
          s,
          o = !n,
          l = (n = n || /[[,\]]/g).lastIndex,
          u = n.exec(t),
          c = [];
      if (u) switch (r = t.substring(l, u.index), u[0]) {
        case "[":
          if ("[" !== t[u.index + 1]) return null;

          for (;;) {
            if (n.exec(t), !(s = a._getType(t, e, n))) return null;
            if (c.push(s), "]" === (u = n.exec(t))[0]) break;
            if ("," !== u[0]) return null;
          }

          if ((u = n.exec(t)) && "," === u[0] && (n.exec(t), !(i = a.__assemblies[(n.lastIndex > 0 ? t.substring(u.index + 1, n.lastIndex - 1) : t.substring(u.index + 1)).trim()]))) return null;
          break;

        case "]":
          break;

        case ",":
          if (n.exec(t), !(i = a.__assemblies[(n.lastIndex > 0 ? t.substring(u.index + 1, n.lastIndex - 1) : t.substring(u.index + 1)).trim()])) return null;
          break;
      } else r = t.substring(l);
      return o && n.lastIndex ? null : (s = a._getAssemblyType(i, r.trim()), c.length ? a.makeGenericType(s, c) : s);
    }, a.getType = function (t, i) {
      return t ? a._getType(t, i || e) : null;
    }, a.getDefaultValue = function (e) {
      return "function" == typeof e.getDefaultValue ? e.getDefaultValue() : e !== Boolean && (e === Date ? new Date(0) : e === Number ? 0 : null);
    }, a.createInstance = function (e) {
      return "function" == typeof e.createInstance ? e.createInstance() : e !== Boolean && (e === Date ? new Date(0) : e === Number ? 0 : e === String ? "" : new e());
    };
    var s = a.IFormattable = a.mkType(a, "ss.IFormattable");
    a.initInterface(s, {
      format: null
    });
    var o = a.IComparable = a.mkType(a, "ss.IComparable");
    a.initInterface(o, {
      compareTo: null
    });
    var l = a.IEquatable = a.mkType(a, "ss.IEquatable");
    a.initInterface(l, {
      equalsT: null
    }), a.isNullOrEmptyString = function (e) {
      return !e || !e.length;
    }, String.prototype.trim || (String.prototype.trim = function () {
      return a.trimStartString(a.trimEndString(this));
    }), a.trimEndString = function (e, t) {
      return e.replace(t ? new RegExp("[" + String.fromCharCode.apply(null, t) + "]+$") : /\s*$/, "");
    }, a.trimStartString = function (e, t) {
      return e.replace(t ? new RegExp("^[" + String.fromCharCode.apply(null, t) + "]+") : /^\s*/, "");
    }, a.trimString = function (e, t) {
      return a.trimStartString(a.trimEndString(e, t), t);
    }, a.arrayClone = function (e) {
      return 1 === e.length ? [e[0]] : Array.apply(null, e);
    }, Array.prototype.map || (Array.prototype.map = function (e, t) {
      for (var i = this.length, n = new Array(i), r = 0; r < i; r++) {
        r in this && (n[r] = e.call(t, this[r], r, this));
      }

      return n;
    }), Array.prototype.some || (Array.prototype.some = function (e, t) {
      for (var i = this.length, n = 0; n < i; n++) {
        if (n in this && e.call(t, this[n], n, this)) return !0;
      }

      return !1;
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
      var i, n;
      if (null == this) throw new TypeError(" this is null or not defined");
      var r = Object(this),
          a = r.length >>> 0;
      if ("function" != typeof e) throw new TypeError(e + " is not a function");

      for (arguments.length > 1 && (i = t), n = 0; n < a;) {
        var s;
        n in r && (s = r[n], e.call(i, s, n, r)), n++;
      }
    }), Array.prototype.filter || (Array.prototype.filter = function (e) {
      if (null == this) throw new TypeError();
      var t = Object(this),
          i = t.length >>> 0;
      if ("function" != typeof e) throw new TypeError();

      for (var n = [], r = arguments.length >= 2 ? arguments[1] : void 0, a = 0; a < i; a++) {
        if (a in t) {
          var s = t[a];
          e.call(r, s, a, t) && n.push(s);
        }
      }

      return n;
    }), a._delegateContains = function (e, t, i) {
      for (var n = 0; n < e.length; n += 2) {
        if (e[n] === t && e[n + 1] === i) return !0;
      }

      return !1;
    }, a._mkdel = function (e) {
      var t = function t() {
        if (2 === e.length) return e[1].apply(e[0], arguments);

        for (var t = a.arrayClone(e), i = 0; i < t.length; i += 2) {
          a._delegateContains(e, t[i], t[i + 1]) && t[i + 1].apply(t[i], arguments);
        }

        return null;
      };

      return t._targets = e, t;
    }, a.mkdel = function (e, t) {
      return e ? ("string" == typeof t && (t = e[t]), a._mkdel([e, t])) : t;
    }, a.delegateCombine = function (e, t) {
      if (!e) return t._targets ? t : a.mkdel(null, t);
      if (!t) return e._targets ? e : a.mkdel(null, e);
      var i = e._targets ? e._targets : [null, e],
          n = t._targets ? t._targets : [null, t];
      return a._mkdel(i.concat(n));
    }, a.delegateRemove = function (e, t) {
      if (!e || e === t) return null;
      var i = e._targets;
      if (!t || !i) return e;
      var n,
          r = null;
      t._targets ? (r = t._targets[0], n = t._targets[1]) : n = t;

      for (var s = 0; s < i.length; s += 2) {
        if (i[s] === r && i[s + 1] === n) {
          if (2 === i.length) return null;
          var o = a.arrayClone(i);
          return o.splice(s, 2), a._mkdel(o);
        }
      }

      return e;
    }, a.delegateEquals = function (e, t) {
      if (e === t) return !0;
      if (!e._targets && !t._targets) return !1;
      var i = e._targets || [null, e],
          n = t._targets || [null, t];
      if (i.length !== n.length) return !1;

      for (var r = 0; r < i.length; r++) {
        if (i[r] !== n[r]) return !1;
      }

      return !0;
    };
    var u = a.Enum = a.mkType(a, "ss.Enum", {});
    a.initClass(u), u.getValues = function (e) {
      var t = [],
          i = e.prototype;

      for (var n in i) {
        i.hasOwnProperty(n) && t.push(i[n]);
      }

      return t;
    };
    var c = a.IEnumerator = a.mkType(a, "ss.IEnumerator");
    a.initInterface(c, {
      current: null,
      moveNext: null,
      reset: null
    }, [I]);
    var h = a.IEnumerable = a.mkType(a, "ss.IEnumerable");
    a.initInterface(h, {
      getEnumerator: null
    }), a.getEnumerator = function (e) {
      return e.getEnumerator ? e.getEnumerator() : new w(e);
    };
    var m = a.ICollection = a.mkType(a, "ss.ICollection");
    a.initInterface(m, {
      get_count: null,
      add: null,
      clear: null,
      remove: null,
      contains: null
    }, [h]), a.count = function (e) {
      return e.get_count ? e.get_count() : e.length;
    }, a.add = function (e, t) {
      if (e.add) e.add(t);else {
        if (!a.isArray(e)) throw new V();
        e.push(t);
      }
    }, a.clear = function (e) {
      if (e.clear) e.clear();else {
        if (!a.isArray(e)) throw new V();
        e.length = 0;
      }
    }, a.remove = function (e, t) {
      if (e.remove) return e.remove(t);

      if (a.isArray(e)) {
        var i = a.indexOf(e, t);
        return i >= 0 && (e.splice(i, 1), !0);
      }

      throw new V();
    }, a.contains = function (e, t) {
      return e.contains ? e.contains(t) : a.indexOf(e, t) >= 0;
    };
    var d = a.IReadOnlyCollection = a.mkType(a, "ss.IReadOnlyCollection");
    a.initInterface(d, {
      get_count: null,
      contains: null
    }, [h]);
    var p = a.IEqualityComparer = a.mkType(a, "ss.IEqualityComparer");
    a.initInterface(p, {
      areEqual: null,
      getObjectHashCode: null
    });
    var f = a.IComparer = a.mkType(a, "ss.IComparer");
    a.initInterface(f, {
      compare: null
    }), a.unbox = function (e) {
      if (!a.isValue(e)) throw new M("Nullable object must have a value.");
      return e;
    };
    var g = a.Nullable$1 = a.mkType(a, "ss.Nullable$1", function (e) {
      return a.registerGenericClassInstance(g, [e], null, {}, {
        isInstanceOfType: function isInstanceOfType(t) {
          return a.isInstanceOfType(t, e);
        }
      });
    }, null, {
      eq: function eq(e, t) {
        return a.isValue(e) ? e === t : !a.isValue(t);
      },
      ne: function ne(e, t) {
        return a.isValue(e) ? e !== t : a.isValue(t);
      },
      le: function le(e, t) {
        return a.isValue(e) && a.isValue(t) && e <= t;
      },
      ge: function ge(e, t) {
        return a.isValue(e) && a.isValue(t) && e >= t;
      },
      lt: function lt(e, t) {
        return a.isValue(e) && a.isValue(t) && e < t;
      },
      gt: function gt(e, t) {
        return a.isValue(e) && a.isValue(t) && e > t;
      },
      sub: function sub(e, t) {
        return a.isValue(e) && a.isValue(t) ? e - t : null;
      },
      add: function add(e, t) {
        return a.isValue(e) && a.isValue(t) ? e + t : null;
      },
      mod: function mod(e, t) {
        return a.isValue(e) && a.isValue(t) ? e % t : null;
      },
      div: function div(e, t) {
        return a.isValue(e) && a.isValue(t) ? e / t : null;
      },
      mul: function mul(e, t) {
        return a.isValue(e) && a.isValue(t) ? e * t : null;
      },
      band: function band(e, t) {
        return a.isValue(e) && a.isValue(t) ? e & t : null;
      },
      bor: function bor(e, t) {
        return a.isValue(e) && a.isValue(t) ? e | t : null;
      },
      bxor: function bxor(e, t) {
        return a.isValue(e) && a.isValue(t) ? e ^ t : null;
      },
      shl: function shl(e, t) {
        return a.isValue(e) && a.isValue(t) ? e << t : null;
      },
      srs: function srs(e, t) {
        return a.isValue(e) && a.isValue(t) ? e >> t : null;
      },
      sru: function sru(e, t) {
        return a.isValue(e) && a.isValue(t) ? e >>> t : null;
      },
      and: function and(e, t) {
        return !0 === e && !0 === t || !1 !== e && !1 !== t && null;
      },
      or: function or(e, t) {
        return !0 === e || !0 === t || (!1 !== e || !1 !== t) && null;
      },
      xor: function xor(e, t) {
        return a.isValue(e) && a.isValue(t) ? !!(e ^ t) : null;
      },
      not: function not(e) {
        return a.isValue(e) ? !e : null;
      },
      neg: function neg(e) {
        return a.isValue(e) ? -e : null;
      },
      pos: function pos(e) {
        return a.isValue(e) ? +e : null;
      },
      cpl: function cpl(e) {
        return a.isValue(e) ? ~e : null;
      },
      lift1: function lift1(e, t) {
        return a.isValue(t) ? e(t) : null;
      },
      lift2: function lift2(e, t, i) {
        return a.isValue(t) && a.isValue(i) ? e(t, i) : null;
      },
      liftcmp: function liftcmp(e, t, i) {
        return !(!a.isValue(t) || !a.isValue(i)) && e(t, i);
      },
      lifteq: function lifteq(e, t, i) {
        var n = a.isValue(t),
            r = a.isValue(i);
        return !n && !r || n && r && e(t, i);
      },
      liftne: function liftne(e, t, i) {
        var n = a.isValue(t);
        return n !== a.isValue(i) || n && e(t, i);
      }
    });
    a.initGenericClass(g, 1);
    var $ = a.IList = a.mkType(a, "ss.IList");
    a.initInterface($, {
      get_item: null,
      set_item: null,
      indexOf: null,
      insert: null,
      removeAt: null
    }, [m, h]), a.getItem = function (e, t) {
      return e.get_item ? e.get_item(t) : e[t];
    }, a.setItem = function (e, t, i) {
      e.set_item ? e.set_item(t, i) : e[t] = i;
    }, a.indexOf = function (e, t) {
      if (t && "function" == typeof t.equals || "function" != typeof e.indexOf) {
        if (a.isArrayOrTypedArray(e)) {
          for (var i = 0; i < e.length; i++) {
            if (a.staticEquals(e[i], t)) return i;
          }

          return -1;
        }

        return e.indexOf(t);
      }

      return e.indexOf(t);
    }, a.insert = function (e, t, i) {
      if (e.insert) e.insert(t, i);else {
        if (!a.isArray(e)) throw new V();
        e.splice(t, 0, i);
      }
    }, a.removeAt = function (e, t) {
      if (e.removeAt) e.removeAt(t);else {
        if (!a.isArray(e)) throw new V();
        e.splice(t, 1);
      }
    };
    var v = a.IReadOnlyList = a.mkType(a, "ss.IReadOnlyList");
    a.initInterface(v, {
      get_item: null
    }, [d, h]);

    var y = function y(e, t, i) {
      var n = a[e] = a.mkType(a, "ss." + e, function () {}, null, {
        isInstanceOfType: function isInstanceOfType(e) {
          return "number" == typeof e && Math.round(e, 0) === e && e >= t && e <= i;
        },
        createInstance: function createInstance() {
          return 0;
        }
      });
      return a.initStruct(n, [l, o, s]), n;
    };

    y("Byte", 0, 255), y("SByte", -128, 127), y("Int16", -32768, 32767), y("UInt16", 0, 65535), y("Int32", -2147483648, 2147483647), y("UInt32", 0, 4294967295), y("Int64", -0x8000000000000000, 0x8000000000000000), y("UInt64", 0, 0x10000000000000000), y("Char", 0, 65535);
    a.sxb = function (e) {
      return e | (128 & e ? 4294967040 : 0);
    }, a.sxs = function (e) {
      return e | (32768 & e ? 4294901760 : 0);
    }, a.clip8 = function (e) {
      return a.isValue(e) ? a.sxb(255 & e) : null;
    }, a.clipu8 = function (e) {
      return a.isValue(e) ? 255 & e : null;
    }, a.clip16 = function (e) {
      return a.isValue(e) ? a.sxs(65535 & e) : null;
    }, a.clipu16 = function (e) {
      return a.isValue(e) ? 65535 & e : null;
    }, a.clip32 = function (e) {
      return a.isValue(e) ? 0 | e : null;
    }, a.clipu32 = function (e) {
      return a.isValue(e) ? e >>> 0 : null;
    }, a.clip64 = function (e) {
      return a.isValue(e) ? 4294967296 * (0 | Math.floor(e / 4294967296)) + (e >>> 0) : null;
    }, a.clipu64 = function (e) {
      return a.isValue(e) ? 4294967296 * (Math.floor(e / 4294967296) >>> 0) + (e >>> 0) : null;
    }, a.ck = function (e, t) {
      if (a.isValue(e) && !t.isInstanceOfType(e)) throw new P();
      return e;
    }, a.trunc = function (e) {
      return a.isValue(e) ? e > 0 ? Math.floor(e) : Math.ceil(e) : null;
    }, a.idiv = function (e, t) {
      if (!a.isValue(e) || !a.isValue(t)) return null;
      if (!t) throw new z();
      return a.trunc(e / t);
    }, a.imod = function (e, t) {
      if (!a.isValue(e) || !a.isValue(t)) return null;
      if (!t) throw new z();
      return e % t;
    };

    var _ = a.JsDate = a.mkType(a, "ss.JsDate", function () {}, null, {
      createInstance: function createInstance() {
        return new Date();
      },
      isInstanceOfType: function isInstanceOfType(e) {
        return e instanceof Date;
      }
    });

    a.initClass(_, null, [l, o]);
    var w = a.ArrayEnumerator = a.mkType(a, "ss.ArrayEnumerator", function (e) {
      this._array = e, this._index = -1;
    }, {
      moveNext: function moveNext() {
        return this._index++, this._index < this._array.length;
      },
      reset: function reset() {
        this._index = -1;
      },
      current: function current() {
        if (this._index < 0 || this._index >= this._array.length) throw "Invalid operation";
        return this._array[this._index];
      },
      dispose: function dispose() {}
    });
    a.initClass(w, null, [c, I]);
    var b = a.ObjectEnumerator = a.mkType(a, "ss.ObjectEnumerator", function (e) {
      this._keys = Object.keys(e), this._index = -1, this._object = e;
    }, {
      moveNext: function moveNext() {
        return this._index++, this._index < this._keys.length;
      },
      reset: function reset() {
        this._index = -1;
      },
      current: function current() {
        if (this._index < 0 || this._index >= this._keys.length) throw new M("Invalid operation");
        var e = this._keys[this._index];
        return {
          key: e,
          value: this._object[e]
        };
      },
      dispose: function dispose() {}
    });
    a.initClass(b, null, [c, I]);
    var S = a.EqualityComparer = a.mkType(a, "ss.EqualityComparer", function () {}, {
      areEqual: function areEqual(e, t) {
        return a.staticEquals(e, t);
      },
      getObjectHashCode: function getObjectHashCode(e) {
        return a.isValue(e) ? a.getHashCode(e) : 0;
      }
    });
    a.initClass(S, null, [p]), S.def = new S();
    var C = a.Comparer = a.mkType(a, "ss.Comparer", function (e) {
      this.f = e;
    }, {
      compare: function compare(e, t) {
        return this.f(e, t);
      }
    });
    a.initClass(C, null, [f]), C.def = new C(function (e, t) {
      return a.isValue(e) ? a.isValue(t) ? a.compare(e, t) : 1 : a.isValue(t) ? -1 : 0;
    });
    var I = a.IDisposable = a.mkType(a, "ss.IDisposable");
    a.initInterface(I, {
      dispose: null
    });
    var T = a.StringBuilder = a.mkType(a, "ss.StringBuilder", function (e) {
      this._parts = a.isValue(e) && "" !== e ? [e] : [], this.length = a.isValue(e) ? e.length : 0;
    }, {
      append: function append(e) {
        if (a.isValue(e)) {
          var t = e.toString();
          a.add(this._parts, t), this.length += t.length;
        }

        return this;
      },
      appendChar: function appendChar(e) {
        return this.append(String.fromCharCode(e));
      },
      appendLine: function appendLine(e) {
        return this.append(e), this.append("\r\n"), this;
      },
      appendLineChar: function appendLineChar(e) {
        return this.appendLine(String.fromCharCode(e));
      },
      clear: function clear() {
        this._parts = [], this.length = 0;
      },
      toString: function toString() {
        return this._parts.join("");
      }
    });
    a.initClass(T);
    var E = a.EventArgs = a.mkType(a, "ss.EventArgs", function () {});
    a.initClass(E), E.Empty = new E();
    var k = a.Exception = a.mkType(a, "ss.Exception", function (e, t) {
      this._message = e || "An error occurred.", this._innerException = t || null, this._error = new Error();
    }, {
      get_message: function get_message() {
        return this._message;
      },
      get_innerException: function get_innerException() {
        return this._innerException;
      },
      get_stack: function get_stack() {
        return this._error.stack;
      },
      toString: function toString() {
        var e = this._message,
            t = this;
        return a.isNullOrEmptyString(e) && (e = a.isValue(a.getInstanceType(t)) && a.isValue(a.getTypeFullName(a.getInstanceType(t))) ? a.getTypeFullName(a.getInstanceType(t)) : "[object Exception]"), e;
      }
    }, {
      wrap: function wrap(e) {
        return a.isInstanceOfType(e, k) ? e : e instanceof TypeError ? new H(e.message, new N(e)) : e instanceof RangeError ? new D(null, e.message, new N(e)) : e instanceof Error ? new N(e) : new k(e.toString());
      }
    });
    a.initClass(k);
    var A = a.NotImplementedException = a.mkType(a, "ss.NotImplementedException", function (e, t) {
      k.call(this, e || "The method or operation is not implemented.", t);
    });
    a.initClass(A, k);
    var V = a.NotSupportedException = a.mkType(a, "ss.NotSupportedException", function (e, t) {
      k.call(this, e || "Specified method is not supported.", t);
    });
    a.initClass(V, k);
    var N = a.JsErrorException = a.mkType(a, "ss.JsErrorException", function (e, t, i) {
      k.call(this, t || e.message, i), this.error = e;
    }, {
      get_stack: function get_stack() {
        return this.error.stack;
      }
    });
    a.initClass(N, k);
    var O = a.ArgumentException = a.mkType(a, "ss.ArgumentException", function (e, t, i) {
      k.call(this, e || "Value does not fall within the expected range.", i), this.paramName = t || null;
    });
    a.initClass(O, k);
    var F = a.ArgumentNullException = a.mkType(a, "ss.ArgumentNullException", function (e, t, i) {
      t || (t = "Value cannot be null.", e && (t += "\nParameter name: " + e)), O.call(this, t, e, i);
    });
    a.initClass(F, O);
    var D = a.ArgumentOutOfRangeException = a.mkType(a, "ss.ArgumentOutOfRangeException", function (e, t, i, n) {
      t || (t = "Value is out of range.", e && (t += "\nParameter name: " + e)), O.call(this, t, e, i), this.actualValue = n || null;
    });
    a.initClass(D, O);
    var R = a.FormatException = a.mkType(a, "ss.FormatException", function (e, t) {
      k.call(this, e || "Invalid format.", t);
    });
    a.initClass(R, k);
    var x = a.ArithmeticException = a.mkType(a, "ss.ArithmeticException", function (e, t) {
      k.call(this, e || "Overflow or underflow in the arithmetic operation.", t);
    });
    a.initClass(x, k);
    var P = a.OverflowException = a.mkType(a, "ss.OverflowException", function (e, t) {
      x.call(this, e || "Arithmetic operation resulted in an overflow.", t);
    });
    a.initClass(P, x);
    var z = a.DivideByZeroException = a.mkType(a, "ss.DivideByZeroException", function (e, t) {
      x.call(this, e || "Division by 0.", t);
    });
    a.initClass(z, x);
    var U = a.InvalidCastException = a.mkType(a, "ss.InvalidCastException", function (e, t) {
      k.call(this, e || "The cast is not valid.", t);
    });
    a.initClass(U, k);
    var M = a.InvalidOperationException = a.mkType(a, "ss.InvalidOperationException", function (e, t) {
      k.call(this, e || "Operation is not valid due to the current state of the object.", t);
    });
    a.initClass(M, k);
    var H = a.NullReferenceException = a.mkType(a, "ss.NullReferenceException", function (e, t) {
      k.call(this, e || "Object is null.", t);
    });
    a.initClass(H, k);
    var L = a.KeyNotFoundException = a.mkType(a, "ss.KeyNotFoundException", function (e, t) {
      k.call(this, e || "Key not found.", t);
    });
    a.initClass(L, k);
    var j = a.AmbiguousMatchException = a.mkType(a, "ss.AmbiguousMatchException", function (e, t) {
      k.call(this, e || "Ambiguous match.", t);
    });
    a.initClass(j, k), e.ss = a;
  }(e);
  var t = e.ss;
  /*! BEGIN CoreSlim */

  !function () {
    var i = {};
    e.tab = e.tab || {}, t.initAssembly(i, "tabcoreslim");
    var n = e.tab.BaseLogAppender = t.mkType(i, "tab.BaseLogAppender", function () {
      this.$filters = null, this.$filters = [];
    }, {
      clearFilters: function clearFilters() {
        t.clear(this.$filters);
      },
      addFilter: function addFilter(e) {
        this.$filters.push(e);
      },
      removeFilter: function removeFilter(e) {
        t.remove(this.$filters, e);
      },
      log: function log(e, t, i, n) {
        for (var r = 0; r < this.$filters.length; r++) {
          if ((0, this.$filters[r])(e, t)) return void this.logInternal(e, t, i, n);
        }
      },
      logInternal: null,
      formatMessage: function formatMessage(e, i) {
        if (t.isNullOrUndefined(i) || 0 === i.length) return e;

        for (var n = new t.StringBuilder(), r = 0, a = !1, s = 0; s < e.length; s++) {
          var o = e.charCodeAt(s);
          if (37 === o) a ? (n.append("%"), a = !1) : a = !0;else {
            if (a) switch (o) {
              case 98:
              case 115:
              case 100:
              case 110:
              case 111:
                n.append(i.length > r ? i[r] : ""), r++;
                break;
            } else n.appendChar(o);
            a = !1;
          }
        }

        return n.toString();
      }
    }),
        r = e.tab.ConsoleLogAppender = t.mkType(i, "tab.ConsoleLogAppender", function () {
      this.$levelMethods = null, n.call(this);
    }, {
      logInternal: function logInternal(e, t, i, n) {
        if ("object" == _typeof(window.console)) {
          i = e.get_name() + ": " + i;
          var r = [],
              a = r.concat(i);
          r = a.concat.apply(a, n);

          try {
            Function.prototype.apply.call(this.$getConsoleMethod(t), window.console, r);
          } catch (e) {}
        }
      },
      $getConsoleMethod: function $getConsoleMethod(e) {
        var i = window.self.console;
        t.isNullOrUndefined(this.$levelMethods) && (this.$levelMethods = {}, this.$levelMethods[1..toString()] = i.log, this.$levelMethods[4..toString()] = i.error, this.$levelMethods[2..toString()] = i.info, this.$levelMethods[3..toString()] = i.warn);
        var n = this.$levelMethods[e.toString()];
        return t.isNullOrUndefined(n) && (n = i.log), n;
      }
    }),
        a = e.tab.CookieHelper = t.mkType(i, "tab.CookieHelper", null, null, {
      getValueForCookie: function getValueForCookie(e) {
        var i = s.getCookie().match(new RegExp("(?:^|;) ?" + e + "=([^;]*)(?:;|$)"));
        return t.isNullOrUndefined(i) || i.length < 2 ? null : i[1];
      },
      setCookie: function setCookie(e, i, n, r) {
        var a = e + "=" + i + ";path=" + n + ";";
        t.staticEquals(r, null) || (a += "expires=" + r.toUTCString()), s.setCookie(a);
      },
      deleteCookie: function deleteCookie(e, t) {
        var i = new Date(0);
        s.setCookie(e + "=;path=" + t + ";expires=" + i.toUTCString());
      }
    }),
        s = e.tab.DocumentHelper = t.mkType(i, "tab.DocumentHelper", null, null, {
      get_documentClientWidth: function get_documentClientWidth() {
        return document.documentElement.clientWidth;
      },
      get_documentClientHeight: function get_documentClientHeight() {
        return document.documentElement.clientHeight;
      },
      getCookie: function getCookie() {
        return document.cookie;
      },
      setCookie: function setCookie(e) {
        document.cookie = e;
      }
    }),
        o = e.tab.EscapingUtil = t.mkType(i, "tab.EscapingUtil", null, null, {
      escapeHtml: function escapeHtml(e) {
        var i = t.coalesce(e, "");
        return i = (i = (i = (i = (i = (i = i.replace(new RegExp("&", "g"), "&amp;")).replace(new RegExp("<", "g"), "&lt;")).replace(new RegExp(">", "g"), "&gt;")).replace(new RegExp('"', "g"), "&quot;")).replace(new RegExp("'", "g"), "&#39;")).replace(new RegExp("/", "g"), "&#47;"), new RegExp("^ +$").test(i) && (i = i.replace(new RegExp(" ", "g"), "&nbsp;")), i;
      }
    }),
        l = e.tab.Log = t.mkType(i, "tab.Log", function () {}, null, {
      get: function get(e) {
        return c.lazyGetLogger(t.getInstanceType(e));
      },
      get$1: function get$1(e) {
        return c.lazyGetLogger(e);
      }
    }),
        u = e.tab.LogAppenderInstance = t.mkType(i, "tab.LogAppenderInstance", function (e) {
      this.$appenderFactoryFunc = null, this.$1$InstanceField = null, this.$appenderFactoryFunc = e;
    }, {
      get_instance: function get_instance() {
        return this.$1$InstanceField;
      },
      set_instance: function set_instance(e) {
        this.$1$InstanceField = e;
      },
      enableLogging: function enableLogging(e) {
        t.isNullOrUndefined(this.get_instance()) ? (this.set_instance(this.$appenderFactoryFunc()), c.addAppender(this.get_instance())) : c.hasAppender(this.get_instance()) || c.addAppender(this.get_instance()), this.get_instance().addFilter(t.coalesce(e, function (e, t) {
          return !0;
        }));
      },
      disableLogging: function disableLogging() {
        t.isNullOrUndefined(this.get_instance()) || (c.removeAppender(this.get_instance()), this.set_instance(null));
      }
    }),
        c = e.tab.Logger = t.mkType(i, "tab.Logger", function (e) {
      this.$name = null, this.$name = e;
    }, {
      get_name: function get_name() {
        return this.$name;
      },
      debug: function debug(e, t) {
        this.$logInternal(1, e, t);
      },
      info: function info(e, t) {
        this.$logInternal(2, e, t);
      },
      warn: function warn(e, t) {
        this.$logInternal(3, e, t);
      },
      error: function error(e, t) {
        this.$logInternal(4, e, t);
      },
      log: function log(e, t, i) {
        this.$logInternal(e, t, i);
      },
      $logInternal: function $logInternal(e, t, i) {
        try {
          for (var n = 0; n < c.$appenders.length; n++) {
            c.$appenders[n].log(this, e, t, i);
          }
        } catch (e) {}
      }
    }, {
      get_globalLog: function get_globalLog() {
        return c.global;
      },
      clearFilters: function clearFilters() {
        for (var e = 0; e < c.$appenders.length; e++) {
          c.$appenders[e].clearFilters();
        }

        c.$filters.splice(0, c.$filters.length);
      },
      filterByLogger: function filterByLogger(e, i) {
        i = i || 0, c.$addFilter(function (n, r) {
          return t.referenceEquals(n, e) && r >= i;
        });
      },
      filterByType: function filterByType(e, i) {
        i = i || 0, c.$addFilter(function (n, r) {
          return r >= i && t.referenceEquals(n.get_name(), t.getTypeName(e));
        });
      },
      filterByName: function filterByName(e, i) {
        i = i || 0;
        var n = new RegExp(e, "i");
        c.$addFilter(function (e, r) {
          return r >= i && t.isValue(e.get_name().match(n));
        });
      },
      clearAppenders: function clearAppenders() {
        c.$appenders.splice(0, c.$filters.length);
      },
      hasAppender: function hasAppender(e) {
        return c.$appenders.indexOf(e) > -1;
      },
      addAppender: function addAppender(e) {
        for (var t = 0; t < c.$filters.length; t++) {
          var i = c.$filters[t];
          e.addFilter(i);
        }

        c.$appenders.push(e);
      },
      removeAppender: function removeAppender(e) {
        var t = c.$appenders.indexOf(e);
        t > -1 && c.$appenders.splice(t, 1);
      },
      lazyGetLogger: function lazyGetLogger(e) {
        var i = e._logger;
        return t.isNullOrUndefined(i) && (i = c.getLogger(e, null), e._logger = i), i;
      },
      getLogger: function getLogger(e, i) {
        var n = c.getLoggerWithName(t.getTypeName(e));
        return t.isValue(i) && c.filterByLogger(n, t.unbox(i)), n;
      },
      getLoggerWithName: function getLoggerWithName(e) {
        return new c(e);
      },
      $setupUrlFilters: function $setupUrlFilters() {
        var e = m.getUriQueryParameters(window.self.location.search);

        if (t.keyExists(e, c.$logQueryParam)) {
          c.clearFilters();
          var i = e[c.$logQueryParam];
          0 === i.length && c.filterByName(".*", 0);

          for (var n = 0; n < i.length; n++) {
            var r = i[n].split(String.fromCharCode(58)),
                a = 1;

            if (r.length > 0 && t.isValue(r[1])) {
              var s = r[1].toLowerCase(),
                  o = c.loggerLevelNames.indexOf(s);
              o >= 0 && (a = o);
            }

            c.filterByName(r[0], a);
          }
        }
      },
      $addFilter: function $addFilter(e) {
        c.$filters.push(e);

        for (var t = 0; t < c.$appenders.length; t++) {
          c.$appenders[t].addFilter(e);
        }
      }
    }),
        h = (e.tab.LoggerLevel = t.mkEnum(i, "tab.LoggerLevel", {
      all: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4,
      off: 5
    }), e.tab.ScriptEx = t.mkType(i, "tab.ScriptEx")),
        m = e.tab.UriExtensions = t.mkType(i, "tab.UriExtensions", null, null, {
      getUriQueryParameters: function getUriQueryParameters(e) {
        var i = {};
        if (t.isNullOrUndefined(e)) return i;
        var n = e.indexOf("?");
        if (n < 0) return i;
        var r = e.substr(n + 1),
            a = r.indexOf("#");
        if (a >= 0 && (r = r.substr(0, a)), t.isNullOrEmptyString(r)) return i;

        for (var s = r.split("&"), o = 0; o < s.length; o++) {
          var l,
              u = s[o].split("="),
              c = decodeURIComponent(u[0]);
          t.keyExists(i, c) ? l = i[c] : (l = [], i[c] = l), u.length > 1 && l.push(decodeURIComponent(u[1]));
        }

        return i;
      }
    }),
        d = e.tab.WindowHelper = t.mkType(i, "tab.WindowHelper", function (e) {
      this.$window = null, this.$window = e;
    }, {
      get_pageXOffset: function get_pageXOffset() {
        return d.$pageXOffsetFunc(this.$window);
      },
      get_pageYOffset: function get_pageYOffset() {
        return d.$pageYOffsetFunc(this.$window);
      },
      get_clientWidth: function get_clientWidth() {
        return d.$clientWidthFunc(this.$window);
      },
      get_clientHeight: function get_clientHeight() {
        return d.$clientHeightFunc(this.$window);
      },
      get_innerWidth: function get_innerWidth() {
        return d.$innerWidthFunc(this.$window);
      },
      get_outerWidth: function get_outerWidth() {
        return d.$outerWidthFunc(this.$window);
      },
      get_innerHeight: function get_innerHeight() {
        return d.$innerHeightFunc(this.$window);
      },
      get_outerHeight: function get_outerHeight() {
        return d.$outerHeightFunc(this.$window);
      },
      get_screenLeft: function get_screenLeft() {
        return d.$screenLeftFunc(this.$window);
      },
      get_screenTop: function get_screenTop() {
        return d.$screenTopFunc(this.$window);
      },
      isQuirksMode: function isQuirksMode() {
        return "BackCompat" === document.compatMode;
      }
    }, {
      get_windowSelf: function get_windowSelf() {
        return window.self;
      },
      get_windowParent: function get_windowParent() {
        return window.parent;
      },
      get_selection: function get_selection() {
        return "function" == typeof window.getSelection ? window.getSelection() : "function" == typeof document.getSelection ? document.getSelection() : null;
      },
      close: function close(e) {
        e.close();
      },
      getOpener: function getOpener(e) {
        return e.opener;
      },
      getLocation: function getLocation(e) {
        return e.location;
      },
      getPathAndSearch: function getPathAndSearch(e) {
        return e.location.pathname + e.location.search;
      },
      setLocationHref: function setLocationHref(e, t) {
        e.location.href = t;
      },
      locationReplace: function locationReplace(e, t) {
        e.location.replace(t);
      },
      open: function open(e, t, i) {
        return window.open(e, t, i);
      },
      reload: function reload(e, t) {
        e.location.reload(t);
      },
      requestAnimationFrame: function requestAnimationFrame(e) {
        return d.$requestAnimationFrameFunc(e);
      },
      cancelAnimationFrame: function cancelAnimationFrame(e) {
        t.isValue(e) && d.$cancelAnimationFrameFunc(e);
      },
      setTimeout: function setTimeout(e, t) {
        return window.setTimeout(e, t);
      },
      setInterval: function setInterval(e, t) {
        return window.setInterval(e, t);
      },
      addListener: function addListener(e, t, i) {
        "addEventListener" in e ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i);
      },
      removeListener: function removeListener(e, t, i) {
        "removeEventListener" in e ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i);
      },
      $setDefaultRequestAnimationFrameImpl: function $setDefaultRequestAnimationFrameImpl() {
        var e = 0;

        d.$requestAnimationFrameFunc = function (t) {
          var i = new Date().getTime(),
              n = Math.max(0, 16 - (i - e));
          return e = i + n, window.setTimeout(t, n);
        };
      },
      clearSelection: function clearSelection() {
        var e = d.get_selection();
        t.isValue(e) && ("function" == typeof e.removeAllRanges ? e.removeAllRanges() : "function" == typeof e.empty && e.empty());
      }
    });
    t.initClass(n), t.initClass(r, n), t.initClass(a), t.initClass(s), t.initClass(o), t.initClass(l), t.initClass(u), t.initClass(c), t.initClass(h), t.initClass(m), t.initClass(d), c.global = c.getLoggerWithName("global"), c.loggerLevelNames = [], c.$logQueryParam = ":log", c.$appenders = [], c.$filters = [], c.$nullLog = new c(""), c.$setupUrlFilters(), c.loggerLevelNames[0] = "all", c.loggerLevelNames[1] = "debug", c.loggerLevelNames[2] = "info", c.loggerLevelNames[3] = "warn", c.loggerLevelNames[4] = "error", c.loggerLevelNames[5] = "off", r.globalAppender = new u(function () {
      return new r();
    }), r.globalAppender.enableLogging(function (e, t) {
      return t >= 2;
    }), function () {
      d.blank = "_blank", d.$innerWidthFunc = null, d.$innerHeightFunc = null, d.$clientWidthFunc = null, d.$clientHeightFunc = null, d.$pageXOffsetFunc = null, d.$pageYOffsetFunc = null, d.$screenLeftFunc = null, d.$screenTopFunc = null, d.$outerWidthFunc = null, d.$outerHeightFunc = null, d.$requestAnimationFrameFunc = null, d.$cancelAnimationFrameFunc = null, "innerWidth" in window ? d.$innerWidthFunc = function (e) {
        return e.innerWidth;
      } : d.$innerWidthFunc = function (e) {
        return e.document.documentElement.offsetWidth;
      }, "outerWidth" in window ? d.$outerWidthFunc = function (e) {
        return e.outerWidth;
      } : d.$outerWidthFunc = d.$innerWidthFunc, "innerHeight" in window ? d.$innerHeightFunc = function (e) {
        return e.innerHeight;
      } : d.$innerHeightFunc = function (e) {
        return e.document.documentElement.offsetHeight;
      }, "outerHeight" in window ? d.$outerHeightFunc = function (e) {
        return e.outerHeight;
      } : d.$outerHeightFunc = d.$innerHeightFunc, "clientWidth" in window ? d.$clientWidthFunc = function (e) {
        return e.clientWidth;
      } : d.$clientWidthFunc = function (e) {
        return e.document.documentElement.clientWidth;
      }, "clientHeight" in window ? d.$clientHeightFunc = function (e) {
        return e.clientHeight;
      } : d.$clientHeightFunc = function (e) {
        return e.document.documentElement.clientHeight;
      }, t.isValue(window.self.pageXOffset) ? d.$pageXOffsetFunc = function (e) {
        return e.pageXOffset;
      } : d.$pageXOffsetFunc = function (e) {
        return e.document.documentElement.scrollLeft;
      }, t.isValue(window.self.pageYOffset) ? d.$pageYOffsetFunc = function (e) {
        return e.pageYOffset;
      } : d.$pageYOffsetFunc = function (e) {
        return e.document.documentElement.scrollTop;
      }, "screenLeft" in window ? d.$screenLeftFunc = function (e) {
        return t.unbox(t.cast(e.screenLeft, t.Int32));
      } : d.$screenLeftFunc = function (e) {
        return e.screenX;
      }, "screenTop" in window ? d.$screenTopFunc = function (e) {
        return t.unbox(t.cast(e.screenTop, t.Int32));
      } : d.$screenTopFunc = function (e) {
        return e.screenY;
      };
      var e = "requestAnimationFrame",
          i = "cancelAnimationFrame",
          n = ["ms", "moz", "webkit", "o"],
          r = null,
          a = null;
      e in window && (r = e), i in window && (a = i);

      for (var s = 0; s < n.length && (t.isNullOrUndefined(r) || t.isNullOrUndefined(a)); ++s) {
        var o = n[s],
            l = o + "RequestAnimationFrame";
        t.isNullOrUndefined(r) && l in window && (r = l), t.isNullOrUndefined(a) && ((l = o + "CancelAnimationFrame") in window && (a = l), (l = o + "CancelRequestAnimationFrame") in window && (a = l));
      }

      t.isValue(r) ? d.$requestAnimationFrameFunc = function (e) {
        return window[r](e);
      } : d.$setDefaultRequestAnimationFrameImpl(), t.isValue(a) ? d.$cancelAnimationFrameFunc = function (e) {
        window[a](e);
      } : d.$cancelAnimationFrameFunc = window.clearTimeout;
    }();
  }();
  var i = e.tab;
  e.tableauSoftware = e.tableauSoftware || {},
  /*! BEGIN ApiShared */
  function () {
    var n = {};
    e.tab = e.tab || {}, e.tableauSoftware = e.tableauSoftware || {}, t.initAssembly(n, "vqlapishared");

    var r = e.tab._ApiCommand = t.mkType(n, "tab._ApiCommand", function (e, t, i, n) {
      this.$1$NameField = null, this.$1$HostIdField = null, this.$1$CommandIdField = null, this.$1$ParametersField = null, this.set_name(e), this.set_commandId(t), this.set_hostId(i), this.set_parameters(n);
    }, {
      get_name: function get_name() {
        return this.$1$NameField;
      },
      set_name: function set_name(e) {
        this.$1$NameField = e;
      },
      get_hostId: function get_hostId() {
        return this.$1$HostIdField;
      },
      set_hostId: function set_hostId(e) {
        this.$1$HostIdField = e;
      },
      get_commandId: function get_commandId() {
        return this.$1$CommandIdField;
      },
      set_commandId: function set_commandId(e) {
        this.$1$CommandIdField = e;
      },
      get_parameters: function get_parameters() {
        return this.$1$ParametersField;
      },
      set_parameters: function set_parameters(e) {
        this.$1$ParametersField = e;
      },
      get_isApiCommandName: function get_isApiCommandName() {
        return 0 === this.get_rawName().indexOf("api.", 0);
      },
      get_rawName: function get_rawName() {
        return this.get_name().toString();
      },
      serialize: function serialize() {
        var e = [];
        e.push(this.get_name()), e.push(this.get_commandId()), e.push(this.get_hostId()), t.isValue(this.get_parameters()) && e.push(this.get_parameters());
        var i = e.join(",");
        return r.lastRequestMessage = i, i;
      }
    }, {
      generateNextCommandId: function generateNextCommandId() {
        var e = "cmd" + r.$nextCommandId;
        return r.$nextCommandId++, e;
      },
      parse: function parse(e) {
        var i,
            n,
            a = e.indexOf(String.fromCharCode(44));
        if (a < 0) return i = t.cast(e, String), new r(i, null, null, null);
        i = t.cast(e.substr(0, a), String);
        var s,
            o = e.substr(a + 1);
        if ((a = o.indexOf(String.fromCharCode(44))) < 0) return new r(i, n = o, null, null);
        n = o.substr(0, a);
        var l = o.substr(a + 1);
        if ((a = l.indexOf(String.fromCharCode(44))) < 0) return new r(i, n, s = l, null);
        s = l.substr(0, a);
        var u = l.substr(a + 1);
        return r.lastResponseMessage = e, "api.GetClientInfoCommand" === i && (r.lastClientInfoResponseMessage = e), new r(i, n, s, u);
      }
    }),
        a = e.tab._ApiObjectRegistry = t.mkType(n, "tab._ApiObjectRegistry", null, null, {
      registerApiMessageRouter: function registerApiMessageRouter(e) {
        return a.$registerType(Object).call(null, e);
      },
      getApiMessageRouter: function getApiMessageRouter() {
        return a.$getSingleton(Object).call(null);
      },
      disposeApiMessageRouter: function disposeApiMessageRouter() {
        a.$clearSingletonInstance(Object).call(null);
      },
      $registerType: function $registerType(e) {
        return function (i) {
          var n = window._ApiObjectRegistryGlobalState.creationRegistry,
              r = t.getTypeFullName(e),
              a = n[r];
          return n[r] = i, a;
        };
      },
      $createType: function $createType(e) {
        return function () {
          var i = t.getTypeFullName(e),
              n = window._ApiObjectRegistryGlobalState.creationRegistry[i];
          if (t.isNullOrUndefined(n)) throw g.createInternalError("No creation function has been registered for interface type '" + i + "'.");
          return n();
        };
      },
      $getSingleton: function $getSingleton(e) {
        return function () {
          var i = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry,
              n = t.getTypeFullName(e),
              r = t.cast(i[n], e);
          return t.isNullOrUndefined(r) && (r = a.$createType(e).call(null), i[n] = r), r;
        };
      },
      $clearSingletonInstance: function $clearSingletonInstance(e) {
        return function () {
          var i = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry,
              n = t.getTypeFullName(e),
              r = t.cast(i[n], e);
          return delete i[n], r;
        };
      }
    }),
        s = e.tab._ApiServerNotification = t.mkType(n, "tab._ApiServerNotification", function (e, t, i) {
      this.$workbookName = null, this.$worksheetName = null, this.$data = null, this.$workbookName = e, this.$worksheetName = t, this.$data = i;
    }, {
      get_workbookName: function get_workbookName() {
        return this.$workbookName;
      },
      get_worksheetName: function get_worksheetName() {
        return this.$worksheetName;
      },
      get_data: function get_data() {
        return this.$data;
      },
      serialize: function serialize() {
        var e = {};
        return e["api.workbookName"] = this.$workbookName, e["api.worksheetName"] = this.$worksheetName, e["api.commandData"] = this.$data, JSON.stringify(e);
      }
    }, {
      deserialize: function deserialize(e) {
        var i = JSON.parse(e),
            n = t.cast(i["api.workbookName"], String),
            r = t.cast(i["api.worksheetName"], String),
            a = i["api.commandData"];
        return new s(n, r, a);
      }
    }),
        o = e.tab._ApiServerResultParser = t.mkType(n, "tab._ApiServerResultParser", function (e) {
      this.$commandResult = null, this.$commandData = null;
      var i = JSON.parse(e);
      this.$commandResult = t.cast(i["api.commandResult"], String), this.$commandData = i["api.commandData"];
    }, {
      get_result: function get_result() {
        return this.$commandResult;
      },
      get_data: function get_data() {
        return this.$commandData;
      }
    }),
        l = e.tab._CollectionImpl = t.mkType(n, "tab._CollectionImpl", function () {
      this.$items = [], this.$itemMap = {};
    }, {
      get__length: function get__length() {
        return this.$items.length;
      },
      get__rawArray: function get__rawArray() {
        return this.$items;
      },
      get_item: function get_item(e) {
        return this.$items[e];
      },
      _get: function _get(e) {
        var i = this.$ensureValidKey(e);
        if (t.isValue(this.$itemMap[i])) return this.$itemMap[i];
      },
      _has: function _has(e) {
        return t.isValue(this._get(e));
      },
      _add: function _add(e, t) {
        this.$verifyKeyAndItemParameters(e, t);
        var i = this.$ensureValidKey(e);
        this.$items.push(t), this.$itemMap[i] = t;
      },
      _addToFirst: function _addToFirst(e, t) {
        this.$verifyKeyAndItemParameters(e, t);
        var i = this.$ensureValidKey(e);
        this.$items.unshift(t), this.$itemMap[i] = t;
      },
      _remove: function _remove(e) {
        var i = this.$ensureValidKey(e);

        if (t.isValue(this.$itemMap[i])) {
          var n = this.$itemMap[i];
          delete this.$itemMap[i];

          for (var r = 0; r < this.$items.length; r++) {
            if (t.referenceEquals(this.$items[r], n)) {
              this.$items.splice(r, 1);
              break;
            }
          }
        }
      },
      _toApiCollection: function _toApiCollection() {
        var e = this.$items.concat();
        return e.get = t.mkdel(this, function (e) {
          return this._get(e);
        }), e.has = t.mkdel(this, function (e) {
          return this._has(e);
        }), e;
      },
      $verifyUniqueKeyParameter: function $verifyUniqueKeyParameter(e) {
        if ($.isNullOrEmpty(e)) throw new t.Exception("Null key");
        if (this._has(e)) throw new t.Exception("Duplicate key '" + e + "'");
      },
      $verifyKeyAndItemParameters: function $verifyKeyAndItemParameters(e, i) {
        if (this.$verifyUniqueKeyParameter(e), t.isNullOrUndefined(i)) throw new t.Exception("Null item");
      },
      $ensureValidKey: function $ensureValidKey(e) {
        return "_" + e;
      }
    }),
        u = e.tab._ColumnImpl = t.mkType(n, "tab._ColumnImpl", function (e, i, n, r) {
      this.$fieldName = null, this.$dataType = null, this.$isReferenced = !1, this.$index = 0, d.verifyString(e, "Column Field Name"), this.$fieldName = e, this.$dataType = i, this.$isReferenced = t.coalesce(n, !1), this.$index = r;
    }, {
      get_fieldName: function get_fieldName() {
        return this.$fieldName;
      },
      get_dataType: function get_dataType() {
        return this.$dataType;
      },
      get_isReferenced: function get_isReferenced() {
        return this.$isReferenced;
      },
      get_index: function get_index() {
        return this.$index;
      }
    }),
        c = e.tab._DataTableImpl = t.mkType(n, "tab._DataTableImpl", function (e, t, i, n) {
      this.$name = null, this.$rows = null, this.$totalRowCount = 0, this.$columns = null, this.$isSummaryData = !1, this.$rows = e, this.$totalRowCount = i, this.$columns = n, this.$isSummaryData = t, this.$name = t ? "Summary Data Table" : "Underlying Data Table";
    }, {
      get_name: function get_name() {
        return this.$name;
      },
      get_rows: function get_rows() {
        return this.$rows;
      },
      get_columns: function get_columns() {
        return this.$columns;
      },
      get_totalRowCount: function get_totalRowCount() {
        return this.$totalRowCount;
      },
      get_isSummaryData: function get_isSummaryData() {
        return this.$isSummaryData;
      }
    }),
        h = e.tab._DeferredImpl = t.mkType(n, "tab._DeferredImpl", function () {
      this.$promise = null, this.$thenFunc = null, this.$listeners = [], this.$resolveFunc = null, this.$promise = new p(t.mkdel(this, this.then)), this.$thenFunc = t.mkdel(this, this.$preResolutionThen), this.$resolveFunc = t.mkdel(this, this.$transitionToFulfilled);
    }, {
      get_promise: function get_promise() {
        return this.$promise;
      },
      all: function all(e) {
        var t = new h(),
            i = e.length,
            n = i,
            r = [];
        if (0 === i) return t.resolve(r), t.get_promise();

        for (var a = function a(e, i) {
          v.$coerceToTrustedPromise(e).then(function (e) {
            return r[i] = e, 0 === --n && t.resolve(r), null;
          }, function (e) {
            return t.reject(e), null;
          });
        }, s = 0; s < i; s++) {
          a(e[s], s);
        }

        return t.get_promise();
      },
      then: function then(e, t) {
        return this.$thenFunc(e, t);
      },
      resolve: function resolve(e) {
        return this.$resolveFunc(e);
      },
      reject: function reject(e) {
        return this.$resolveFunc(v.$rejected(e));
      },
      $preResolutionThen: function $preResolutionThen(e, i) {
        var n = new h();
        return this.$listeners.push(function (r) {
          r.then(e, i).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject));
        }), n.get_promise();
      },
      $transitionToFulfilled: function $transitionToFulfilled(e) {
        var t = v.$coerceToTrustedPromise(e);
        this.$thenFunc = t.then, this.$resolveFunc = v.$coerceToTrustedPromise;

        for (var i = 0; i < this.$listeners.length; i++) {
          (0, this.$listeners[i])(t);
        }

        return this.$listeners = null, t;
      }
    }),
        m = e.tab._jQueryShim = t.mkType(n, "tab._jQueryShim", null, null, {
      isFunction: function isFunction(e) {
        return t.referenceEquals(m.type(e), m.$functionType);
      },
      isArray: function isArray(e) {
        return t.isValue(Array.isArray) ? t.unbox(t.cast(Array.isArray(e), Boolean)) : t.referenceEquals(m.type(e), m.$arrayType);
      },
      type: function type(e) {
        return t.isNullOrUndefined(e) ? String(e) : m.$class2type[t.cast(m.$toString.call(e), String)] || m.$objectType;
      },
      trim: function trim(e) {
        return t.isValue(m.$trim) ? t.isNullOrUndefined(e) ? "" : t.cast(m.$trim.call(e), String) : t.isNullOrUndefined(e) ? "" : e.toString().replace(m.$trimLeft, "").replace(m.$trimRight, "");
      },
      parseJSON: function parseJSON(e) {
        if ("string" != typeof e || t.isNullOrUndefined(e)) return null;
        if (e = m.trim(e), t.isValue(JSON) && t.isValue(JSON.parse)) return JSON.parse(e);
        if (m.$rvalidchars.test(e.replace(m.$rvalidescape, "@").replace(m.$rvalidtokens, "]").replace(m.$rvalidbraces, ""))) return new Function("return " + e)();
        throw new t.Exception("Invalid JSON: " + e);
      }
    }),
        d = e.tab._Param = t.mkType(n, "tab._Param", null, null, {
      verifyString: function verifyString(e, i) {
        if (t.isNullOrUndefined(e) || 0 === e.length) throw g.createInternalStringArgumentException(i);
      },
      verifyValue: function verifyValue(e, i) {
        if (t.isNullOrUndefined(e)) throw g.createInternalNullArgumentException(i);
      }
    }),
        p = e.tab._PromiseImpl = t.mkType(n, "tab._PromiseImpl", function (e) {
      this.then = null, this.then = e;
    }, {
      always: function always(e) {
        return t.cast(this.then(e, t.cast(e, Function)), p);
      },
      otherwise: function otherwise(e) {
        return t.cast(this.then(null, e), p);
      }
    }),
        f = e.tab._Rect = t.mkType(n, "tab._Rect", function (e, t, i, n) {
      this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.left = e, this.top = t, this.width = i, this.height = n;
    }, {
      intersect: function intersect(e) {
        var t = Math.max(this.left, e.left),
            i = Math.max(this.top, e.top),
            n = Math.min(this.left + this.width, e.left + e.width),
            r = Math.min(this.top + this.height, e.top + e.height);
        return n <= t || r <= i ? new f(0, 0, 0, 0) : new f(t, i, n - t, r - i);
      }
    }),
        g = e.tab._TableauException = t.mkType(n, "tab._TableauException", null, null, {
      create: function create(e, i) {
        var n = new t.Exception(i);
        return n.tableauSoftwareErrorCode = e, n;
      },
      createInternalError: function createInternalError(e) {
        return t.isValue(e) ? g.create("internalError", "Internal error. Please contact Tableau support with the following information: " + e) : g.create("internalError", "Internal error. Please contact Tableau support");
      },
      createInternalNullArgumentException: function createInternalNullArgumentException(e) {
        return g.createInternalError("Null/undefined argument '" + e + "'.");
      },
      createInternalStringArgumentException: function createInternalStringArgumentException(e) {
        return g.createInternalError("Invalid string argument '" + e + "'.");
      },
      createServerError: function createServerError(e) {
        return g.create("serverError", e);
      },
      createNotActiveSheet: function createNotActiveSheet() {
        return g.create("notActiveSheet", "Operation not allowed on non-active sheet");
      },
      createInvalidCustomViewName: function createInvalidCustomViewName(e) {
        return g.create("invalidCustomViewName", "Invalid custom view name: " + e);
      },
      createInvalidParameter: function createInvalidParameter(e) {
        return g.create("invalidParameter", "Invalid parameter: " + e);
      },
      createInvalidFilterFieldNameOrValue: function createInvalidFilterFieldNameOrValue(e) {
        return g.create("invalidFilterFieldNameOrValue", "Invalid filter field name or value: " + e);
      },
      createInvalidDateParameter: function createInvalidDateParameter(e) {
        return g.create("invalidDateParameter", "Invalid date parameter: " + e);
      },
      createNullOrEmptyParameter: function createNullOrEmptyParameter(e) {
        return g.create("nullOrEmptyParameter", "Parameter cannot be null or empty: " + e);
      },
      createMissingMaxSize: function createMissingMaxSize() {
        return g.create("missingMaxSize", "Missing maxSize for SheetSizeBehavior.ATMOST");
      },
      createMissingMinSize: function createMissingMinSize() {
        return g.create("missingMinSize", "Missing minSize for SheetSizeBehavior.ATLEAST");
      },
      createMissingMinMaxSize: function createMissingMinMaxSize() {
        return g.create("missingMinMaxSize", "Missing minSize or maxSize for SheetSizeBehavior.RANGE");
      },
      createInvalidRangeSize: function createInvalidRangeSize() {
        return g.create("invalidSize", "Missing minSize or maxSize for SheetSizeBehavior.RANGE");
      },
      createInvalidSizeValue: function createInvalidSizeValue() {
        return g.create("invalidSize", "Size value cannot be less than zero");
      },
      createInvalidSheetSizeParam: function createInvalidSheetSizeParam() {
        return g.create("invalidSize", "Invalid sheet size parameter");
      },
      createSizeConflictForExactly: function createSizeConflictForExactly() {
        return g.create("invalidSize", "Conflicting size values for SheetSizeBehavior.EXACTLY");
      },
      createInvalidSizeBehaviorOnWorksheet: function createInvalidSizeBehaviorOnWorksheet() {
        return g.create("invalidSizeBehaviorOnWorksheet", "Only SheetSizeBehavior.AUTOMATIC is allowed on Worksheets");
      },
      createNoUrlForHiddenWorksheet: function createNoUrlForHiddenWorksheet() {
        return g.create("noUrlForHiddenWorksheet", "Hidden worksheets do not have a URL.");
      },
      createInvalidAggregationFieldName: function createInvalidAggregationFieldName(e) {
        return g.create("invalidAggregationFieldName", "Invalid aggregation type for field '" + e + "'");
      },
      createInvalidToolbarButtonName: function createInvalidToolbarButtonName(e) {
        return g.create("invalidToolbarButtonName", "Invalid toolbar button name: '" + e + "'");
      },
      createIndexOutOfRange: function createIndexOutOfRange(e) {
        return g.create("indexOutOfRange", "Index '" + e + "' is out of range.");
      },
      createUnsupportedEventName: function createUnsupportedEventName(e) {
        return g.create("unsupportedEventName", "Unsupported event '" + e + "'.");
      },
      createBrowserNotCapable: function createBrowserNotCapable() {
        return g.create("browserNotCapable", "This browser is incapable of supporting the Tableau JavaScript API.");
      }
    }),
        $ = e.tab._Utility = t.mkType(n, "tab._Utility", null, null, {
      isNullOrEmpty: function isNullOrEmpty(e) {
        return t.isNullOrUndefined(e) || (e.length || 0) <= 0;
      },
      isString: function isString(e) {
        return "string" == typeof e;
      },
      isNumber: function isNumber(e) {
        return "number" == typeof e;
      },
      isDate: function isDate(e) {
        return !("object" != _typeof(e) || !t.isInstanceOfType(e, t.JsDate)) || "[object Date]" === Object.prototype.toString.call(e) && !isNaN(t.cast(e, t.JsDate).getTime());
      },
      isDateValid: function isDateValid(e) {
        return !isNaN(e.getTime());
      },
      indexOf: function indexOf(e, i, n) {
        if (t.isValue(Array.prototype.indexOf)) return t.unbox(t.cast(e.indexOf(i, n), t.Int32));
        n = n || 0;
        var r = e.length;
        if (r > 0) for (var a = n; a < r; a++) {
          if (t.referenceEquals(e[a], i)) return a;
        }
        return -1;
      },
      contains: function contains(e, t, i) {
        return $.indexOf(e, t, i) >= 0;
      },
      getTopmostWindow: function getTopmostWindow() {
        for (var e = window.self; t.isValue(e.parent) && !t.referenceEquals(e.parent, e);) {
          e = e.parent;
        }

        return e;
      },
      toInt: function toInt(e) {
        if ($.isNumber(e)) return t.trunc(e);
        var i = parseInt(e.toString(), 10);
        return isNaN(i) ? 0 : i;
      },
      hasClass: function hasClass(e, i) {
        var n = new RegExp("[\\n\\t\\r]", "g");
        return t.isValue(e) && (" " + e.className + " ").replace(n, " ").indexOf(" " + i + " ") > -1;
      },
      findParentWithClassName: function findParentWithClassName(e, i, n) {
        var r = t.isValue(e) ? t.cast(e.parentNode, HTMLElement) : null;

        for (n = n || document.body; t.isValue(r);) {
          if ($.hasClass(r, i)) return r;
          r = t.referenceEquals(r, n) ? null : t.cast(r.parentNode, HTMLElement);
        }

        return r;
      },
      hasJsonParse: function hasJsonParse() {
        return !(!t.isValue(JSON) || !t.isValue(JSON.parse));
      },
      hasWindowPostMessage: function hasWindowPostMessage() {
        return !!t.isValue(window.postMessage);
      },
      isPostMessageSynchronous: function isPostMessageSynchronous() {
        if ($.isIE()) {
          var e = new RegExp("(msie) ([\\w.]+)").exec(window.navigator.userAgent.toLowerCase())[2] || "0";
          return parseInt(e, 10) <= 8;
        }

        return !1;
      },
      hasDocumentAttachEvent: function hasDocumentAttachEvent() {
        return !!t.isValue(document.attachEvent);
      },
      hasWindowAddEventListener: function hasWindowAddEventListener() {
        return !!t.isValue(window.addEventListener);
      },
      isElementOfTag: function isElementOfTag(e, i) {
        return t.isValue(e) && 1 === e.nodeType && t.referenceEquals(e.tagName.toLowerCase(), i.toLowerCase());
      },
      elementToString: function elementToString(e) {
        var i = new t.StringBuilder();

        if (i.append(e.tagName.toLowerCase()), $.isNullOrEmpty(e.id) || i.append("#").append(e.id), !$.isNullOrEmpty(e.className)) {
          var n = e.className.split(" ");
          i.append(".").append(n.join("."));
        }

        return i.toString();
      },
      tableauGCS: function tableauGCS(e) {
        return "function" == typeof window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
      },
      isIE: function isIE() {
        return !!(window.navigator.userAgent.indexOf("MSIE") > -1 && t.isNullOrUndefined(window.opera));
      },
      isSafari: function isSafari() {
        var e = window.navigator.userAgent,
            t = e.indexOf("Chrome") >= 0;
        return e.indexOf("Safari") >= 0 && !t;
      },
      mobileDetect: function mobileDetect() {
        var e = window.navigator.userAgent;
        return -1 !== e.indexOf("iPad") || -1 !== e.indexOf("Android") || -1 !== e.indexOf("AppleWebKit") && -1 !== e.indexOf("Mobile");
      },
      visibleContentRectInDocumentCoordinates: function visibleContentRectInDocumentCoordinates(e) {
        for (var i = $.contentRectInDocumentCoordinates(e), n = e.parentElement; t.isValue(n) && t.isValue(n.parentElement); n = n.parentElement) {
          var r = $.$getComputedStyle(n).overflow;
          "auto" !== r && "scroll" !== r && "hidden" !== r || (i = i.intersect($.contentRectInDocumentCoordinates(n)));
        }

        var a = $.$getViewportRect();
        return i.intersect(a);
      },
      getVisualViewportRect: function getVisualViewportRect(e) {
        var i = e.visualViewport;
        return t.isValue(i) ? new f(t.trunc(i.pageLeft), t.trunc(i.pageTop), t.trunc(i.width), t.trunc(i.height)) : null;
      },
      $getViewportRect: function $getViewportRect() {
        var e = $.getVisualViewportRect(window.self);
        if (t.isValue(e)) return e;
        var n = $.contentRectInDocumentCoordinates(document.documentElement),
            r = new i.WindowHelper(window.self);
        return r.isQuirksMode() && (n.height = document.body.clientHeight - n.left, n.width = document.body.clientWidth - n.top), n.left += r.get_pageXOffset(), n.top += r.get_pageYOffset(), n;
      },
      contentRectInDocumentCoordinates: function contentRectInDocumentCoordinates(e) {
        var t = $.getBoundingClientRect(e),
            n = $.$getComputedStyle(e),
            r = $.toInt(n.paddingLeft),
            a = $.toInt(n.paddingTop),
            s = $.toInt(n.borderLeftWidth),
            o = $.toInt(n.borderTopWidth),
            l = $.computeContentSize(e),
            u = new i.WindowHelper(window.self),
            c = t.left + r + s + u.get_pageXOffset(),
            h = t.top + a + o + u.get_pageYOffset();
        return new f(c, h, l.width, l.height);
      },
      getBoundingClientRect: function getBoundingClientRect(e) {
        var i = e.getBoundingClientRect(),
            n = t.trunc(i.top),
            r = t.trunc(i.left),
            a = t.trunc(i.right),
            s = t.trunc(i.bottom);
        return new f(r, n, a - r, s - n);
      },
      convertRawValue: function convertRawValue(e, i) {
        if (t.isNullOrUndefined(e)) return null;

        switch (i) {
          case "bool":
            return e;

          case "date":
          case "number":
            return t.isNullOrUndefined(e) ? Number.NaN : e;

          default:
          case "string":
            return e;
        }
      },
      getDataValue: function getDataValue(e) {
        return t.isNullOrUndefined(e) ? N.$ctor(null, null, null) : N.$ctor($.convertRawValue(e.value, e.type), e.formattedValue, e.aliasedValue);
      },
      serializeDateForServer: function serializeDateForServer(e) {
        var i = "";
        t.isValue(e) && $.isDate(e) && (i = e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1) + "-" + e.getUTCDate() + " " + e.getUTCHours() + ":" + e.getUTCMinutes() + ":" + e.getUTCSeconds());
        return i;
      },
      computeContentSize: function computeContentSize(e) {
        var t = $.$getComputedStyle(e),
            i = parseFloat(t.paddingLeft),
            n = parseFloat(t.paddingTop),
            r = parseFloat(t.paddingRight),
            a = parseFloat(t.paddingBottom),
            s = e.clientWidth - Math.round(i + r),
            o = e.clientHeight - Math.round(n + a);
        return j.$ctor(s, o);
      },
      $getComputedStyle: function $getComputedStyle(e) {
        return "function" == typeof window.getComputedStyle ? t.isValue(e.ownerDocument.defaultView.opener) ? e.ownerDocument.defaultView.getComputedStyle(e) : window.getComputedStyle(e) : t.isValue(e.currentStyle) ? e.currentStyle : e.style;
      },
      roundVizSizeInPixels: function roundVizSizeInPixels(e) {
        if (t.isNullOrUndefined(e) || -1 === e.indexOf("px")) return e;
        var i = parseFloat(e.split("px")[0]);
        return Math.round(i) + "px";
      },
      noResultPromiseHelper: function noResultPromiseHelper(e, n, r) {
        var a = new i._Deferred(),
            s = new (t.makeGenericType(E, [Object]))(e, 1, function (e) {
          a.resolve();
        }, function (e, t) {
          a.reject(g.createServerError(t));
        });
        return r.sendCommand(Object).call(r, n, s), a.get_promise();
      },
      clone: function clone(e) {
        return function (e) {
          return JSON.parse(JSON.stringify(e));
        };
      }
    }),
        v = t.mkType(n, "tab.$DeferredUtil", null, null, {
      $coerceToTrustedPromise: function $coerceToTrustedPromise(e) {
        var i;
        if (e instanceof tableauSoftware.Promise) i = t.cast(e, p);else if (t.isValue(e) && "function" == typeof e.valueOf && (e = e.valueOf()), v.$isPromise(e)) {
          var n = new h();
          t.cast(e, p).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject)), i = n.get_promise();
        } else i = v.$resolved(e);
        return i;
      },
      $reject: function $reject(e) {
        return v.$coerceToTrustedPromise(e).then(function (e) {
          return v.$rejected(t.cast(e, t.Exception));
        }, null);
      },
      $resolved: function $resolved(e) {
        return new p(function (i, n) {
          try {
            return v.$coerceToTrustedPromise(t.isValue(i) ? i(e) : e);
          } catch (e) {
            var r = t.Exception.wrap(e);
            return v.$rejected(r);
          }
        });
      },
      $rejected: function $rejected(e) {
        return new p(function (i, n) {
          try {
            return t.isValue(n) ? v.$coerceToTrustedPromise(n(e)) : v.$rejected(e);
          } catch (e) {
            var r = t.Exception.wrap(e);
            return v.$rejected(r);
          }
        });
      },
      $isPromise: function $isPromise(e) {
        return t.isValue(e) && "function" == typeof e.then;
      }
    }),
        y = t.mkType(n, "tab.$DoNothingCrossDomainHandler", function () {
      this.$hostId = null, this.$1$StateReadyForQueryField = null;
    }, {
      add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateCombine(this.$1$StateReadyForQueryField, e);
      },
      remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateRemove(this.$1$StateReadyForQueryField, e);
      },
      get_iframe: function get_iframe() {
        return null;
      },
      get_hostId: function get_hostId() {
        return this.$hostId;
      },
      set_hostId: function set_hostId(e) {
        this.$hostId = e;
      },
      get_$serverRoot: function get_$serverRoot() {
        return "*";
      },
      handleEventNotification: function handleEventNotification(e, t) {},
      $silenceTheCompilerWarning: function $silenceTheCompilerWarning() {
        this.$1$StateReadyForQueryField(null);
      }
    }),
        _ = (e.tab.ApiDashboardObjectType = t.mkEnum(n, "tab.ApiDashboardObjectType", {
      blank: "blank",
      worksheet: "worksheet",
      quickFilter: "quickFilter",
      parameterControl: "parameterControl",
      pageFilter: "pageFilter",
      legend: "legend",
      title: "title",
      text: "text",
      image: "image",
      webPage: "webPage",
      addIn: "addIn"
    }, !0), e.tab.ApiDateRangeType = t.mkEnum(n, "tab.ApiDateRangeType", {
      last: "last",
      lastn: "lastn",
      next: "next",
      nextn: "nextn",
      curr: "curr",
      todate: "todate"
    }, !0)),
        w = (e.tab.ApiDeviceType = t.mkEnum(n, "tab.ApiDeviceType", {
      default: "default",
      desktop: "desktop",
      tablet: "tablet",
      phone: "phone"
    }, !0), e.tab.ApiEnumConverter = t.mkType(n, "tab.ApiEnumConverter", null, null, {
      convertDashboardObjectType: function convertDashboardObjectType(e) {
        switch (e) {
          case "blank":
            return "blank";

          case "image":
            return "image";

          case "legend":
            return "legend";

          case "pageFilter":
            return "pageFilter";

          case "parameterControl":
            return "parameterControl";

          case "quickFilter":
            return "quickFilter";

          case "text":
            return "text";

          case "title":
            return "title";

          case "webPage":
            return "webPage";

          case "worksheet":
            return "worksheet";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainDashboardObjectType: " + e);
        }
      },
      convertDateRange: function convertDateRange(e) {
        switch (e) {
          case "curr":
            return "curr";

          case "last":
            return "last";

          case "lastn":
            return "lastn";

          case "next":
            return "next";

          case "nextn":
            return "nextn";

          case "todate":
            return "todate";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainDateRangeType: " + e);
        }
      },
      convertFieldAggregation: function convertFieldAggregation(e) {
        switch (e) {
          case "ATTR":
            return "ATTR";

          case "AVG":
            return "AVG";

          case "COLLECT":
            return "COLLECT";

          case "COUNT":
            return "COUNT";

          case "COUNTD":
            return "COUNTD";

          case "DAY":
            return "DAY";

          case "END":
            return "END";

          case "HOUR":
            return "HOUR";

          case "INOUT":
            return "INOUT";

          case "KURTOSIS":
            return "KURTOSIS";

          case "MAX":
            return "MAX";

          case "MDY":
            return "MDY";

          case "MEDIAN":
            return "MEDIAN";

          case "MIN":
            return "MIN";

          case "MINUTE":
            return "MINUTE";

          case "MONTH":
            return "MONTH";

          case "MONTHYEAR":
            return "MONTHYEAR";

          case "NONE":
            return "NONE";

          case "PERCENTILE":
            return "PERCENTILE";

          case "QUART1":
            return "QUART1";

          case "QUART3":
            return "QUART3";

          case "QTR":
            return "QTR";

          case "SECOND":
            return "SECOND";

          case "SKEWNESS":
            return "SKEWNESS";

          case "STDEV":
            return "STDEV";

          case "STDEVP":
            return "STDEVP";

          case "SUM":
            return "SUM";

          case "SUM_XSQR":
            return "SUM_XSQR";

          case "TRUNC_DAY":
            return "TRUNC_DAY";

          case "TRUNC_HOUR":
            return "TRUNC_HOUR";

          case "TRUNC_MINUTE":
            return "TRUNC_MINUTE";

          case "TRUNC_MONTH":
            return "TRUNC_MONTH";

          case "TRUNC_QTR":
            return "TRUNC_QTR";

          case "TRUNC_SECOND":
            return "TRUNC_SECOND";

          case "TRUNC_WEEK":
            return "TRUNC_WEEK";

          case "TRUNC_YEAR":
            return "TRUNC_YEAR";

          case "USER":
            return "USER";

          case "VAR":
            return "VAR";

          case "VARP":
            return "VARP";

          case "WEEK":
            return "WEEK";

          case "WEEKDAY":
            return "WEEKDAY";

          case "YEAR":
            return "YEAR";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainFieldAggregationType: " + e);
        }
      },
      convertFieldRole: function convertFieldRole(e) {
        switch (e) {
          case "dimension":
            return "dimension";

          case "measure":
            return "measure";

          case "unknown":
            return "unknown";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainFieldRoleType: " + e);
        }
      },
      convertFilterType: function convertFilterType(e) {
        switch (e) {
          case "categorical":
            return "categorical";

          case "hierarchical":
            return "hierarchical";

          case "quantitative":
            return "quantitative";

          case "relativedate":
            return "relativedate";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainFilterType: " + e);
        }
      },
      convertParameterAllowableValuesType: function convertParameterAllowableValuesType(e) {
        switch (e) {
          case "all":
            return "all";

          case "list":
            return "list";

          case "range":
            return "range";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainParameterAllowableValuesType: " + e);
        }
      },
      convertParameterDataType: function convertParameterDataType(e) {
        switch (e) {
          case "boolean":
            return "boolean";

          case "date":
            return "date";

          case "datetime":
            return "datetime";

          case "float":
            return "float";

          case "integer":
            return "integer";

          case "string":
            return "string";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainParameterDataType: " + e);
        }
      },
      convertPeriodType: function convertPeriodType(e) {
        switch (e) {
          case "year":
            return "year";

          case "quarter":
            return "quarter";

          case "month":
            return "month";

          case "week":
            return "week";

          case "day":
            return "day";

          case "hour":
            return "hour";

          case "minute":
            return "minute";

          case "second":
            return "second";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainPeriodType: " + e);
        }
      },
      convertSheetType: function convertSheetType(e) {
        switch (e) {
          case "worksheet":
            return "worksheet";

          case "dashboard":
            return "dashboard";

          case "story":
            return "story";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainSheetType: " + e);
        }
      },
      convertDataType: function convertDataType(e) {
        switch (e) {
          case "boolean":
            return "boolean";

          case "date":
            return "date";

          case "datetime":
            return "datetime";

          case "float":
            return "float";

          case "integer":
            return "integer";

          case "string":
            return "string";

          default:
            throw g.createInternalError("Unknown ApiCrossDomainParameterDataType: " + e);
        }
      }
    })),
        b = (e.tab.ApiErrorCode = t.mkEnum(n, "tab.ApiErrorCode", {
      internalError: "internalError",
      serverError: "serverError",
      invalidAggregationFieldName: "invalidAggregationFieldName",
      invalidToolbarButtonName: "invalidToolbarButtonName",
      invalidParameter: "invalidParameter",
      invalidUrl: "invalidUrl",
      staleDataReference: "staleDataReference",
      vizAlreadyInManager: "vizAlreadyInManager",
      noUrlOrParentElementNotFound: "noUrlOrParentElementNotFound",
      invalidFilterFieldName: "invalidFilterFieldName",
      invalidFilterFieldValue: "invalidFilterFieldValue",
      invalidFilterFieldNameOrValue: "invalidFilterFieldNameOrValue",
      filterCannotBePerformed: "filterCannotBePerformed",
      notActiveSheet: "notActiveSheet",
      invalidCustomViewName: "invalidCustomViewName",
      missingRangeNForRelativeDateFilters: "missingRangeNForRelativeDateFilters",
      missingMaxSize: "missingMaxSize",
      missingMinSize: "missingMinSize",
      missingMinMaxSize: "missingMinMaxSize",
      invalidSize: "invalidSize",
      invalidSizeBehaviorOnWorksheet: "invalidSizeBehaviorOnWorksheet",
      sheetNotInWorkbook: "sheetNotInWorkbook",
      indexOutOfRange: "indexOutOfRange",
      downloadWorkbookNotAllowed: "downloadWorkbookNotAllowed",
      nullOrEmptyParameter: "nullOrEmptyParameter",
      browserNotCapable: "browserNotCapable",
      unsupportedEventName: "unsupportedEventName",
      invalidDateParameter: "invalidDateParameter",
      invalidSelectionFieldName: "invalidSelectionFieldName",
      invalidSelectionValue: "invalidSelectionValue",
      invalidSelectionDate: "invalidSelectionDate",
      noUrlForHiddenWorksheet: "noUrlForHiddenWorksheet",
      maxVizResizeAttempts: "maxVizResizeAttempts"
    }, !0), e.tab.ApiFieldAggregationType = t.mkEnum(n, "tab.ApiFieldAggregationType", {
      SUM: "SUM",
      AVG: "AVG",
      MIN: "MIN",
      MAX: "MAX",
      STDEV: "STDEV",
      STDEVP: "STDEVP",
      VAR: "VAR",
      VARP: "VARP",
      COUNT: "COUNT",
      COUNTD: "COUNTD",
      MEDIAN: "MEDIAN",
      ATTR: "ATTR",
      NONE: "NONE",
      PERCENTILE: "PERCENTILE",
      YEAR: "YEAR",
      QTR: "QTR",
      MONTH: "MONTH",
      DAY: "DAY",
      HOUR: "HOUR",
      MINUTE: "MINUTE",
      SECOND: "SECOND",
      WEEK: "WEEK",
      WEEKDAY: "WEEKDAY",
      MONTHYEAR: "MONTHYEAR",
      MDY: "MDY",
      END: "END",
      TRUNC_YEAR: "TRUNC_YEAR",
      TRUNC_QTR: "TRUNC_QTR",
      TRUNC_MONTH: "TRUNC_MONTH",
      TRUNC_WEEK: "TRUNC_WEEK",
      TRUNC_DAY: "TRUNC_DAY",
      TRUNC_HOUR: "TRUNC_HOUR",
      TRUNC_MINUTE: "TRUNC_MINUTE",
      TRUNC_SECOND: "TRUNC_SECOND",
      QUART1: "QUART1",
      QUART3: "QUART3",
      SKEWNESS: "SKEWNESS",
      KURTOSIS: "KURTOSIS",
      INOUT: "INOUT",
      SUM_XSQR: "SUM_XSQR",
      USER: "USER",
      COLLECT: "COLLECT"
    }, !0), e.tab.ApiFieldRoleType = t.mkEnum(n, "tab.ApiFieldRoleType", {
      dimension: "dimension",
      measure: "measure",
      unknown: "unknown"
    }, !0), e.tab.ApiFilterType = t.mkEnum(n, "tab.ApiFilterType", {
      categorical: "categorical",
      quantitative: "quantitative",
      hierarchical: "hierarchical",
      relativedate: "relativedate"
    }, !0), e.tab.ApiFilterUpdateType = t.mkEnum(n, "tab.ApiFilterUpdateType", {
      all: "all",
      replace: "replace",
      add: "add",
      remove: "remove"
    }, !0)),
        S = e.tab.ApiMessageHandler = t.mkType(n, "tab.ApiMessageHandler", function () {}, {
      handleEventNotification: function handleEventNotification(e, i) {
        throw new t.NotImplementedException();
      }
    }),
        C = e.tab.ApiMessagingOptions = t.mkType(n, "tab.ApiMessagingOptions", function (e, t) {
      this.$router = null, this.$handler = null, d.verifyValue(e, "router"), this.$router = e, this.$handler = t;
    }, {
      get_handler: function get_handler() {
        return this.$handler;
      },
      get_router: function get_router() {
        return this.$router;
      },
      sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$router.sendCommand(e).call(this.$router, this.$handler, t, i);
        };
      },
      dispose: function dispose() {
        this.$router.unregisterHandler(this.$handler);
      }
    }),
        I = e.tab.ApiNullOption = t.mkEnum(n, "tab.ApiNullOption", {
      nullValues: "nullValues",
      nonNullValues: "nonNullValues",
      allValues: "allValues"
    }, !0),
        T = (e.tab.ApiParameterAllowableValuesType = t.mkEnum(n, "tab.ApiParameterAllowableValuesType", {
      all: "all",
      list: "list",
      range: "range"
    }, !0), e.tab.ApiParameterDataType = t.mkEnum(n, "tab.ApiParameterDataType", {
      float: "float",
      integer: "integer",
      string: "string",
      boolean: "boolean",
      date: "date",
      datetime: "datetime"
    }, !0), e.tab.ApiPeriodType = t.mkEnum(n, "tab.ApiPeriodType", {
      year: "year",
      quarter: "quarter",
      month: "month",
      week: "week",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second"
    }, !0)),
        E = (e.tab.ApiSelectionUpdateType = t.mkEnum(n, "tab.ApiSelectionUpdateType", {
      replace: "replace",
      add: "add",
      remove: "remove"
    }, !0), e.tab.ApiSheetSizeBehavior = t.mkEnum(n, "tab.ApiSheetSizeBehavior", {
      automatic: "automatic",
      exactly: "exactly",
      range: "range",
      atleast: "atleast",
      atmost: "atmost"
    }, !0), e.tab.ApiSheetType = t.mkEnum(n, "tab.ApiSheetType", {
      worksheet: "worksheet",
      dashboard: "dashboard",
      story: "story"
    }, !0), e.tab.ApiTableauEventName = t.mkEnum(n, "tab.ApiTableauEventName", {
      customviewload: "customviewload",
      customviewremove: "customviewremove",
      customviewsave: "customviewsave",
      customviewsetdefault: "customviewsetdefault",
      filterchange: "filterchange",
      firstinteractive: "firstinteractive",
      firstvizsizeknown: "firstvizsizeknown",
      marksselection: "marksselection",
      markshighlight: "markshighlight",
      parametervaluechange: "parametervaluechange",
      storypointswitch: "storypointswitch",
      tabswitch: "tabswitch",
      toolbarstatechange: "toolbarstatechange",
      urlaction: "urlaction",
      vizresize: "vizresize"
    }, !0), e.tab.ApiToolbarButtonName = t.mkEnum(n, "tab.ApiToolbarButtonName", {
      redo: "redo",
      undo: "undo"
    }, !0), e.tab.ApiToolbarPosition = t.mkEnum(n, "tab.ApiToolbarPosition", {
      top: "top",
      bottom: "bottom"
    }, !0), e.tab.CommandReturnHandler$1 = t.mkType(n, "tab.CommandReturnHandler$1", function (e) {
      return t.registerGenericClassInstance(E, [e], function (e, t, i, n) {
        this.$commandName = null, this.$successCallbackTiming = 0, this.$successCallback = null, this.$errorCallback = null, this.$commandName = e, this.$successCallback = i, this.$successCallbackTiming = t, this.$errorCallback = n;
      }, {
        get_commandName: function get_commandName() {
          return this.$commandName;
        },
        get_successCallback: function get_successCallback() {
          return this.$successCallback;
        },
        get_successCallbackTiming: function get_successCallbackTiming() {
          return this.$successCallbackTiming;
        },
        get_errorCallback: function get_errorCallback() {
          return this.$errorCallback;
        }
      });
    }));

    t.initGenericClass(E, 1);
    var k,
        A,
        V = e.tab.CrossDomainMessager = t.mkType(n, "tab.CrossDomainMessager", function (e) {
      if (this.$nextHandlerId = 0, this.$handlers = {}, this.$commandCallbacks = {}, this.$commandReturnAfterStateReadyQueues = {}, this.$legacyHandler = null, this.$legacyHandler = e, $.hasWindowAddEventListener()) window.addEventListener("message", t.mkdel(this, this.$handleCrossDomainMessage), !1);else if ($.hasDocumentAttachEvent()) {
        var i = t.mkdel(this, this.$handleCrossDomainMessage);
        document.attachEvent("onmessage", i), window.attachEvent("onmessage", i);
      } else window.onmessage = t.mkdel(this, this.$handleCrossDomainMessage);
      this.$nextHandlerId = 0;
    }, {
      registerHandler: function registerHandler(e) {
        var i = "host" + this.$nextHandlerId;
        if (t.isValue(e.get_hostId()) || t.isValue(this.$handlers[e.get_hostId()])) throw g.createInternalError("Host '" + e.get_hostId() + "' is already registered.");
        this.$nextHandlerId++, e.set_hostId(i), this.$handlers[i] = e, e.add_stateReadyForQuery(t.mkdel(this, this.$handleStateReadyForQuery));
      },
      unregisterHandler: function unregisterHandler(e) {
        (t.isValue(e.get_hostId()) || t.isValue(this.$handlers[e.get_hostId()])) && (delete this.$handlers[e.get_hostId()], e.remove_stateReadyForQuery(t.mkdel(this, this.$handleStateReadyForQuery)));
      },
      sendCommand: function sendCommand(e) {
        return function (e, i, n) {
          var a = e.get_iframe(),
              s = e.get_hostId();

          if ($.hasWindowPostMessage() && !t.isNullOrUndefined(a) && !t.isNullOrUndefined(a.contentWindow)) {
            var o = r.generateNextCommandId(),
                l = this.$commandCallbacks[s];
            t.isNullOrUndefined(l) && (l = {}, this.$commandCallbacks[s] = l), l[o] = n;
            var u = n.get_commandName(),
                c = null;
            t.isValue(i) && (c = JSON.stringify(i));
            var h = new r(u, o, s, c).serialize();
            $.isPostMessageSynchronous() ? window.setTimeout(function () {
              a.contentWindow.postMessage(h, "*");
            }, 0) : a.contentWindow.postMessage(h, "*");
          }
        };
      },
      $handleStateReadyForQuery: function $handleStateReadyForQuery(e) {
        var i = this.$commandReturnAfterStateReadyQueues[e.get_hostId()];
        if (!$.isNullOrEmpty(i)) for (; i.length > 0;) {
          var n = i.pop();
          t.isValue(n) && n();
        }
      },
      $handleCrossDomainMessage: function $handleCrossDomainMessage(e) {
        var i = t.cast(e, MessageEvent);

        if (!t.isNullOrUndefined(i.data)) {
          var n = r.parse(i.data.toString()),
              a = n.get_hostId(),
              s = this.$handlers[a];
          if (!t.isNullOrUndefined(s) && t.referenceEquals(s.get_hostId(), n.get_hostId()) || (s = this.$findHostIdByDomComparison(i)), n.get_isApiCommandName()) {
            if (t.referenceEquals(n.get_commandId(), r.crossDomainEventNotificationId)) {
              if (s.handleEventNotification(n.get_name(), n.get_parameters()), "api.FirstVizSizeKnownEvent" === n.get_name()) {
                var o = new P("tableau.bootstrap", []);
                i.source.postMessage(o.serialize(), "*");
              }
            } else this.$handleCrossDomainResponse(n);
          } else if (!t.isNullOrUndefined(this.$legacyHandler)) {
            var l = P.parse(i.data.toString());
            this.$legacyHandler(l, s);
          }
        }
      },
      $handleCrossDomainResponse: function $handleCrossDomainResponse(e) {
        var i = this.$commandCallbacks[e.get_hostId()],
            n = t.isValue(i) ? i[e.get_commandId()] : null;

        if (!t.isNullOrUndefined(n) && (delete i[e.get_commandId()], e.get_name() === n.get_commandName())) {
          var r = new o(e.get_parameters()),
              a = r.get_data();
          if ("api.success" === r.get_result()) switch (n.get_successCallbackTiming()) {
            case 0:
              t.isValue(n.get_successCallback()) && n.get_successCallback()(a);
              break;

            case 1:
              var s = this.$commandReturnAfterStateReadyQueues[e.get_hostId()];
              t.isNullOrUndefined(s) && (s = [], this.$commandReturnAfterStateReadyQueues[e.get_hostId()] = s), s.push(function () {
                t.isValue(n.get_successCallback()) && n.get_successCallback()(a);
              });
              break;

            default:
              throw g.createInternalError("Unknown timing value: " + n.get_successCallbackTiming());
          } else if (t.isValue(n.get_errorCallback())) {
            var l = "api.remotefailed" === r.get_result(),
                u = t.isValue(a) ? a.toString() : "";
            n.get_errorCallback()(l, u);
          }
        }
      },
      $findHostIdByDomComparison: function $findHostIdByDomComparison(e) {
        var i = new t.ObjectEnumerator(this.$handlers);

        try {
          for (; i.moveNext();) {
            var n = i.current();
            if (this.$handlers.hasOwnProperty(n.key) && t.referenceEquals(n.value.get_iframe().contentWindow, e.source)) return n.value;
          }
        } finally {
          i.dispose();
        }

        return new y();
      }
    }),
        N = (e.tab.DataType = t.mkEnum(n, "tab.DataType", {
      float: "float",
      integer: "integer",
      string: "string",
      boolean: "boolean",
      date: "date",
      datetime: "datetime"
    }, !0), e.tab.DataValue = t.mkType(n, "tab.DataValue", null, null, {
      $ctor: function $ctor(e, t, i) {
        var n = new Object();
        return n.value = null, n.formattedValue = null, n.value = e, $.isNullOrEmpty(i) ? n.formattedValue = t : n.formattedValue = i, n;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    })),
        O = e.tab.FilterCommandsBuilder = t.mkType(n, "tab.FilterCommandsBuilder", function () {}, {
      buildApplyFiltersCommandParams: function buildApplyFiltersCommandParams(e, i, n, r) {
        if ($.isNullOrEmpty(e)) throw g.createNullOrEmptyParameter("fieldName");
        n = U.normalizeEnum(b).call(null, n, "updateType");
        var a = [];
        if (m.isArray(i)) for (var s = 0; s < i.length; s++) {
          a.push(i[s].toString());
        } else t.isValue(i) && a.push(i.toString());
        var o = {};
        return o["api.fieldCaption"] = e, o["api.filterUpdateType"] = n, o["api.exclude"] = !(!t.isValue(r) || !r.isExcludeMode), "all" !== n && (o["api.filterCategoricalValues"] = a), o;
      },
      buildRangeFilterCommandParams: function buildRangeFilterCommandParams(e, i) {
        if ($.isNullOrEmpty(e)) throw g.createNullOrEmptyParameter("fieldName");
        if (t.isNullOrUndefined(i)) throw g.createNullOrEmptyParameter("filterOptions");
        var n = {};
        if (n["api.fieldCaption"] = e, t.isValue(i.min)) if ($.isDate(i.min)) {
          var r = t.cast(i.min, t.JsDate);
          if (!$.isDateValid(r)) throw g.createInvalidDateParameter("filterOptions.min");
          n["api.filterRangeMin"] = $.serializeDateForServer(r);
        } else n["api.filterRangeMin"] = i.min;
        if (t.isValue(i.max)) if ($.isDate(i.max)) {
          var a = t.cast(i.max, t.JsDate);
          if (!$.isDateValid(a)) throw g.createInvalidDateParameter("filterOptions.max");
          n["api.filterRangeMax"] = $.serializeDateForServer(a);
        } else n["api.filterRangeMax"] = i.max;
        return t.isValue(i.nullOption) && (n["api.filterRangeNullOption"] = i.nullOption), n;
      },
      buildRelativeDateFilterCommandParams: function buildRelativeDateFilterCommandParams(e, i) {
        if ($.isNullOrEmpty(e)) throw g.createInvalidParameter("fieldName");
        if (t.isNullOrUndefined(i)) throw g.createInvalidParameter("filterOptions");
        var n = {};

        if (n["api.fieldCaption"] = e, t.isValue(i)) {
          if (n["api.filterPeriodType"] = i.periodType, n["api.filterDateRangeType"] = i.rangeType, "lastn" === i.rangeType || "nextn" === i.rangeType) {
            if (t.isNullOrUndefined(i.rangeN)) throw g.create("missingRangeNForRelativeDateFilters", "Missing rangeN field for a relative date filter of LASTN or NEXTN.");
            n["api.filterDateRange"] = i.rangeN;
          }

          t.isValue(i.anchorDate) && (n["api.filterDateArchorValue"] = $.serializeDateForServer(i.anchorDate));
        }

        return n;
      },
      buildHierarchicalFilterCommandParams: function buildHierarchicalFilterCommandParams(e, i, n, r) {
        if ($.isNullOrEmpty(e)) throw g.createNullOrEmptyParameter("fieldName");
        n = U.normalizeEnum(b).call(null, n, "updateType");
        var a = null,
            s = null;

        if (m.isArray(i)) {
          a = [];

          for (var o = i, l = 0; l < o.length; l++) {
            a.push(o[l].toString());
          }
        } else if ($.isString(i)) (a = []).push(i.toString());else if (t.isValue(i) && t.isValue(i.levels)) {
          var u = i.levels;
          if (s = [], m.isArray(u)) for (var c = u, h = 0; h < c.length; h++) {
            s.push(c[h].toString());
          } else s.push(u.toString());
        } else if (t.isValue(i)) throw g.createInvalidParameter("values");

        var d = {};
        return d["api.fieldCaption"] = e, d["api.filterUpdateType"] = n, d["api.exclude"] = !(!t.isValue(r) || !r.isExcludeMode), t.isValue(a) && (d["api.filterHierarchicalValues"] = JSON.stringify(a)), t.isValue(s) && (d["api.filterHierarchicalLevels"] = JSON.stringify(s)), d;
      },
      buildClearFilterCommandsParam: function buildClearFilterCommandsParam(e) {
        if ($.isNullOrEmpty(e)) throw g.createNullOrEmptyParameter("fieldName");
        var t = {};
        return t["api.fieldCaption"] = e, t;
      },
      filterCommandError: function filterCommandError(e) {
        var i = e;

        if (t.isValue(i) && t.isValue(i.errorCode)) {
          var n = t.isValue(i.additionalInformation) ? i.additionalInformation.toString() : "";

          switch (i.errorCode) {
            case "invalidFilterFieldName":
              return g.create("invalidFilterFieldName", n);

            case "invalidFilterFieldValue":
              return g.create("invalidFilterFieldValue", n);

            case "invalidAggregationFieldName":
              return g.createInvalidAggregationFieldName(n);

            default:
              return g.createServerError(n);
          }
        }

        return null;
      },
      normalizeRangeFilterOption: function normalizeRangeFilterOption(e) {
        if (t.isNullOrUndefined(e)) throw g.createNullOrEmptyParameter("filterOptions");
        if (t.isNullOrUndefined(e.min) && t.isNullOrUndefined(e.max) && t.isNullOrUndefined(e.nullOption)) throw g.create("invalidParameter", "At least one of filterOptions.min or filterOptions.max or filterOptions.nullOption must be specified.");
        var i = new Object();
        return t.isValue(e.min) && (i.min = e.min), t.isValue(e.max) && (i.max = e.max), t.isValue(e.nullOption) && (i.nullOption = U.normalizeEnum(I).call(null, e.nullOption, "filterOptions.nullOption")), i;
      },
      normalizeRelativeDateFilterOptions: function normalizeRelativeDateFilterOptions(e) {
        if (t.isNullOrUndefined(e)) throw g.createNullOrEmptyParameter("filterOptions");
        var i = new Object();

        if (i.rangeType = U.normalizeEnum(_).call(null, e.rangeType, "filterOptions.rangeType"), i.periodType = U.normalizeEnum(T).call(null, e.periodType, "filterOptions.periodType"), "lastn" === i.rangeType || "nextn" === i.rangeType) {
          if (t.isNullOrUndefined(e.rangeN)) throw g.create("missingRangeNForRelativeDateFilters", "Missing rangeN field for a relative date filter of LASTN or NEXTN.");
          i.rangeN = $.toInt(e.rangeN);
        }

        if (t.isValue(e.anchorDate)) {
          if (!$.isDate(e.anchorDate) || !$.isDateValid(e.anchorDate)) throw g.createInvalidDateParameter("filterOptions.anchorDate");
          i.anchorDate = e.anchorDate;
        }

        return i;
      },
      createFilterCommandReturnHandler: function createFilterCommandReturnHandler(e, i, n) {
        return new (t.makeGenericType(E, [Object]))(e, 0, t.mkdel(this, function (e) {
          var r = this.filterCommandError(e);
          t.isNullOrUndefined(r) ? n.resolve(i) : n.reject(r);
        }), function (e, t) {
          if (e) n.reject(g.createInvalidFilterFieldNameOrValue(i));else {
            var r = g.create("filterCannotBePerformed", t);
            n.reject(r);
          }
        });
      }
    }),
        F = e.tab.GetDataCommandsBuilder = t.mkType(n, "tab.GetDataCommandsBuilder", function () {}, {
      getSummaryDataCommandParams: function getSummaryDataCommandParams(e) {
        var i = {};
        return e = e || new Object(), i["api.ignoreAliases"] = t.coalesce(e.ignoreAliases, !1), i["api.ignoreSelection"] = t.coalesce(e.ignoreSelection, !1), i["api.maxRows"] = t.coalesce(e.maxRows, 0), i;
      },
      getUnderlyingDataCommandParams: function getUnderlyingDataCommandParams(e) {
        var i = {};
        return e = e || new Object(), i["api.ignoreAliases"] = t.coalesce(e.ignoreAliases, !1), i["api.ignoreSelection"] = t.coalesce(e.ignoreSelection, !1), i["api.includeAllColumns"] = t.coalesce(e.includeAllColumns, !1), i["api.maxRows"] = t.coalesce(e.maxRows, 0), i;
      },
      getUnderlyingTablesCommandParams: function getUnderlyingTablesCommandParams() {
        return {};
      },
      getUnderlyingTableDataCommandParams: function getUnderlyingTableDataCommandParams(e, i) {
        var n = {};
        return i = i || new Object(), n["api.ignoreAliases"] = t.coalesce(i.ignoreAliases, !1), n["api.ignoreSelection"] = t.coalesce(i.ignoreSelection, !1), n["api.includeAllColumns"] = t.coalesce(i.includeAllColumns, !1), n["api.maxRows"] = t.coalesce(i.maxRows, 0), n["api.tableId"] = t.coalesce(e, ""), n;
      },
      getSummaryDataResponseHandler: function getSummaryDataResponseHandler(e) {
        return new (t.makeGenericType(E, [Object]))("api.GetSummaryTableCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.processGetDataPresModel(i);
          e.resolve(n);
        }), function (t, i) {
          e.reject(g.createServerError(i));
        });
      },
      getUnderlyingDataResponseHandler: function getUnderlyingDataResponseHandler(e) {
        return new (t.makeGenericType(E, [Object]))("api.GetUnderlyingTableCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.processGetDataPresModel(i);
          e.resolve(n);
        }), function (t, i) {
          e.reject(g.createServerError(i));
        });
      },
      processGetDataPresModel: function processGetDataPresModel(e) {
        var t = this.$processUnderlyingTable(e.dataTable),
            i = this.$processUnderlyingColumns(e.headers),
            n = new c(t, e.isSummary, t.length, i);
        return new G(n);
      },
      $processUnderlyingTable: function $processUnderlyingTable(e) {
        for (var t = [], i = 0; i < e.length; i++) {
          for (var n = e[i], r = [], a = 0; a < n.length; a++) {
            var s = n[a];
            r.push($.getDataValue(s));
          }

          t.push(r);
        }

        return t;
      },
      $processUnderlyingColumns: function $processUnderlyingColumns(e) {
        for (var t = [], i = 0; i < e.length; i++) {
          var n = e[i],
              r = new u(n.fieldName, w.convertDataType(n.dataType), n.isReferenced, n.index);
          t.push(new W(r));
        }

        return t;
      },
      $appendErrorMessageIfNeededThenLog: function $appendErrorMessageIfNeededThenLog(e, i) {
        var n = i;

        if (!e) {
          var r = new t.StringBuilder(i);
          r.append("\nPossible reasons:"), r.append("\nCalling newer version of API against an older version of Tableau Server"), n = r.toString();
        }

        return n;
      },
      getUnderlyingTablesResponseHandler: function getUnderlyingTablesResponseHandler(e) {
        return new (t.makeGenericType(E, [Object]))("api.GetUnderlyingTablesCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.$processGetLogicalTablesPresModel(i);
          e.resolve(n._toApiCollection());
        }), t.mkdel(this, function (t, i) {
          e.reject(g.createServerError(this.$appendErrorMessageIfNeededThenLog(t, i)));
        }));
      },
      $processGetLogicalTablesPresModel: function $processGetLogicalTablesPresModel(e) {
        for (var t = new i._Collection(), n = 0; n < e.logicalTables.length; n++) {
          var r = e.logicalTables[n];

          t._add(r.tableId, new B(r.tableId, r.caption));
        }

        return t;
      },
      getUnderlyingTableDataResponseHandler: function getUnderlyingTableDataResponseHandler(e) {
        return new (t.makeGenericType(E, [Object]))("api.GetUnderlyingTableDataCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.processGetDataPresModel(i);
          e.resolve(n);
        }), t.mkdel(this, function (t, i) {
          e.reject(g.createServerError(this.$appendErrorMessageIfNeededThenLog(t, i)));
        }));
      }
    }),
        D = e.tab.HostedApiMessageHandler = t.mkType(n, "tab.HostedApiMessageHandler", function () {
      this.$2$StateReadyForQueryField = null, S.call(this);
    }, {
      add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$2$StateReadyForQueryField = t.delegateCombine(this.$2$StateReadyForQueryField, e);
      },
      remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$2$StateReadyForQueryField = t.delegateRemove(this.$2$StateReadyForQueryField, e);
      },
      get_hostId: function get_hostId() {
        return null;
      },
      set_hostId: function set_hostId(e) {},
      get_iframe: function get_iframe() {
        return null;
      }
    }),
        R = e.tab.HostedApiMessageRouter = t.mkType(n, "tab.HostedApiMessageRouter", function () {
      this.$crossDomainMessager = null, this.$crossDomainMessager = new V(null);
    }, {
      registerHandler: function registerHandler(e) {
        this.$crossDomainMessager.registerHandler(e);
      },
      unregisterHandler: function unregisterHandler(e) {
        this.$crossDomainMessager.unregisterHandler(e);
      },
      sendCommand: function sendCommand(e) {
        return function (t, i, n) {
          this.$crossDomainMessager.sendCommand(e).call(this.$crossDomainMessager, t, i, n);
        };
      }
    }),
        x = e.tab.MarkImpl = t.mkType(n, "tab.MarkImpl", function (e) {
      if (this.$clonedPairs = null, this.$collection = new i._Collection(), this.$tupleId = 0, m.isArray(e)) for (var n = e, r = 0; r < n.length; r++) {
        var a = n[r];
        if (!t.isValue(a.fieldName)) throw g.createInvalidParameter("pair.fieldName");
        if (!t.isValue(a.value)) throw g.createInvalidParameter("pair.value");
        var s = new Q(a.fieldName, a.value);

        this.$collection._add(s.fieldName, s);
      } else this.$tupleId = e;
    }, {
      get_pairs: function get_pairs() {
        return this.$collection;
      },
      get_tupleId: function get_tupleId() {
        return this.$tupleId;
      },
      get_$clonedPairs: function get_$clonedPairs() {
        return t.isNullOrUndefined(this.$clonedPairs) && (this.$clonedPairs = this.$collection._toApiCollection()), this.$clonedPairs;
      },
      $addPair: function $addPair(e) {
        this.$collection._add(e.fieldName, e);
      }
    }, {
      processActiveMarks: function processActiveMarks(e) {
        var n = new i._Collection();
        if (t.isNullOrUndefined(e) || $.isNullOrEmpty(e.marks)) return n;

        for (var r = 0; r < e.marks.length; r++) {
          var a = e.marks[r],
              s = a.tupleId,
              o = new q(s);

          n._add(s.toString(), o);

          for (var l = 0; l < a.pairs.length; l++) {
            var u = a.pairs[l],
                c = $.convertRawValue(u.value, u.valueDataType),
                h = new Q(u.fieldName, c);
            h.formattedValue = u.formattedValue, o.impl.get_pairs()._has(h.fieldName) || o.impl.$addPair(h);
          }
        }

        return n;
      }
    }),
        P = e.tab.NonApiCommand = t.mkType(n, "tab.NonApiCommand", function (e, t) {
      this.$parameters = null, this.$1$NameField = null, this.set_name(e), this.$parameters = t;
    }, {
      get_name: function get_name() {
        return this.$1$NameField;
      },
      set_name: function set_name(e) {
        this.$1$NameField = e;
      },
      get_parameters: function get_parameters() {
        return this.$parameters;
      },
      serialize: function serialize() {
        var e = [];
        return e.push(this.get_name().toString()), (e = e.concat.apply(e, this.$parameters)).join(",");
      }
    }, {
      parse: function parse(e) {
        var i = e.split(String.fromCharCode(44)),
            n = t.cast(i[0], String),
            r = i.slice(1);
        return new P(n, r);
      }
    }),
        z = e.tab.Point = t.mkType(n, "tab.Point", null, null, {
      $ctor: function $ctor(e, t) {
        var i = new Object();
        return i.x = 0, i.y = 0, i.x = e, i.y = t, i;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        U = e.tab.PublicEnums = t.mkType(n, "tab.PublicEnums", null, null, {
      tryNormalizeEnum: function tryNormalizeEnum(e) {
        return function (i, n) {
          if (t.isValue(i)) for (var r = i.toString().toUpperCase(), a = t.Enum.getValues(e), s = 0; s < a.length; s++) {
            var o = t.cast(a[s], String),
                l = o.toUpperCase();
            if (t.referenceEquals(r, l)) return n.$ = o, !0;
          }
          return n.$ = t.getDefaultValue(e), !1;
        };
      },
      normalizeEnum: function normalizeEnum(e) {
        return function (t, i) {
          var n = {};
          if (!U.tryNormalizeEnum(e).call(null, t, n)) throw g.createInvalidParameter(i);
          return n.$;
        };
      },
      isValidEnum: function isValidEnum(e) {
        return function (t) {
          return U.tryNormalizeEnum(e).call(null, t, {});
        };
      }
    }),
        M = e.tab.SharedUtils = t.mkType(n, "tab.SharedUtils", function () {}, {
      addVisualIdForWorksheet: function addVisualIdForWorksheet(e, i, n) {
        e["api.worksheetName"] = i, t.isValue(n) && (e["api.dashboardName"] = n);
      }
    }),
        H = e.tab.SheetSize = t.mkType(n, "tab.SheetSize", null, null, {
      $ctor: function $ctor(e, i, n) {
        var r = new Object();
        return r.behavior = null, r.minSize = null, r.maxSize = null, r.behavior = t.coalesce(e, "automatic"), t.isValue(i) ? r.minSize = i : delete r.minSize, t.isValue(n) ? r.maxSize = n : delete r.maxSize, r;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        L = e.tab.SheetSizeFactory = t.mkType(n, "tab.SheetSizeFactory", null, null, {
      createAutomatic: function createAutomatic() {
        return H.$ctor("automatic", null, null);
      },
      fromSizeConstraints: function fromSizeConstraints(e) {
        var t = e.minHeight,
            i = e.minWidth,
            n = e.maxHeight,
            r = e.maxWidth,
            a = "automatic",
            s = null,
            o = null;
        return 0 === t && 0 === i ? 0 === n && 0 === r || (a = "atmost", o = j.$ctor(r, n)) : 0 === n && 0 === r ? (a = "atleast", s = j.$ctor(i, t)) : n === t && r === i && i > 0 ? (a = "exactly", s = j.$ctor(i, t), o = j.$ctor(i, t)) : (a = "range", 0 === i && 0 === r && (r = 2147483647), s = j.$ctor(i, t), o = j.$ctor(r, n)), H.$ctor(a, s, o);
      }
    }),
        j = e.tab.Size = t.mkType(n, "tab.Size", null, null, {
      $ctor: function $ctor(e, t) {
        var i = new Object();
        return i.width = 0, i.height = 0, i.width = e, i.height = t, i;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        W = e.tableauSoftware.Column = t.mkType(n, "tableauSoftware.Column", function (e) {
      this.$impl = null, this.$impl = e;
    }, {
      getFieldName: function getFieldName() {
        return this.$impl.get_fieldName();
      },
      getDataType: function getDataType() {
        return this.$impl.get_dataType();
      },
      getIsReferenced: function getIsReferenced() {
        return this.$impl.get_isReferenced();
      },
      getIndex: function getIndex() {
        return this.$impl.get_index();
      }
    }),
        G = e.tableauSoftware.DataTable = t.mkType(n, "tableauSoftware.DataTable", function (e) {
      this.$impl = null, this.$impl = e;
    }, {
      getName: function getName() {
        return this.$impl.get_name();
      },
      getData: function getData() {
        return this.$impl.get_rows();
      },
      getColumns: function getColumns() {
        return this.$impl.get_columns();
      },
      getTotalRowCount: function getTotalRowCount() {
        return this.$impl.get_totalRowCount();
      },
      getIsSummaryData: function getIsSummaryData() {
        return this.$impl.get_isSummaryData();
      }
    }),
        B = e.tableauSoftware.LogicalTable = t.mkType(n, "tableauSoftware.LogicalTable", function (e, t) {
      this.$tableId = null, this.$caption = null, this.$tableId = e, this.$caption = t;
    }, {
      getTableId: function getTableId() {
        return this.$tableId;
      },
      getCaption: function getCaption() {
        return this.$caption;
      }
    }),
        q = e.tableauSoftware.Mark = t.mkType(n, "tableauSoftware.Mark", function (e) {
      this.impl = null, this.impl = new x(e);
    }, {
      getPairs: function getPairs() {
        return this.impl.get_$clonedPairs();
      }
    }),
        Q = e.tableauSoftware.Pair = t.mkType(n, "tableauSoftware.Pair", function (e, i) {
      this.fieldName = null, this.value = null, this.formattedValue = null, this.fieldName = e, this.value = i, this.formattedValue = t.isValue(i) ? i.toString() : "";
    });
    t.initClass(r), t.initClass(a), t.initClass(s), t.initClass(o), t.initClass(l), t.initClass(u), t.initClass(c), t.initClass(h), t.initClass(m), t.initClass(d), t.initClass(p), t.initClass(f), t.initClass(g), t.initClass($), t.initClass(v), t.initClass(y), t.initClass(w), t.initClass(S), t.initClass(C), t.initClass(V), t.initClass(N, Object), t.initClass(O), t.initClass(F), t.initClass(D, S), t.initClass(R), t.initClass(x), t.initClass(P), t.initClass(z, Object), t.initClass(U), t.initClass(M), t.initClass(H, Object), t.initClass(L), t.initClass(j, Object), t.initClass(W), t.initClass(G), t.initClass(B), t.initClass(q), t.initClass(Q), r.crossDomainEventNotificationId = "xdomainSourceId", r.lastRequestMessage = null, r.lastResponseMessage = null, r.lastClientInfoResponseMessage = null, r.$nextCommandId = 0, k = window._ApiObjectRegistryGlobalState, t.isNullOrUndefined(k) && (k = new Object()), window._ApiObjectRegistryGlobalState = k, window._ApiObjectRegistryGlobalState.creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry || {}, window._ApiObjectRegistryGlobalState.singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry || {}, m.$arrayType = "array", m.$booleanType = "boolean", m.$dateType = "date", m.$functionType = "function", m.$numberType = "number", m.$objectType = "object", m.$regExpType = "regexp", m.$stringType = "string", m.$class2type = t.mkdict(["[object Boolean]", m.$booleanType, "[object Number]", m.$numberType, "[object String]", m.$stringType, "[object Function]", m.$functionType, "[object Array]", m.$arrayType, "[object Date]", m.$dateType, "[object RegExp]", m.$regExpType, "[object Object]", m.$objectType]), m.$trim = t.cast(String.prototype.trim, Function), m.$toString = t.cast(Object.prototype.toString, Function), m.$trimLeft = new RegExp("^[\\s\\xA0]+"), m.$trimRight = new RegExp("[\\s\\xA0]+$"), m.$rvalidchars = new RegExp("^[\\],:{}\\s]*$"), m.$rvalidescape = new RegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), m.$rvalidtokens = new RegExp('"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), m.$rvalidbraces = new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), (A = e.tableauSoftware).DeviceType = {
      DEFAULT: "default",
      DESKTOP: "desktop",
      TABLET: "tablet",
      PHONE: "phone"
    }, A.DashboardObjectType = {
      BLANK: "blank",
      WORKSHEET: "worksheet",
      QUICK_FILTER: "quickFilter",
      PARAMETER_CONTROL: "parameterControl",
      PAGE_FILTER: "pageFilter",
      LEGEND: "legend",
      TITLE: "title",
      TEXT: "text",
      IMAGE: "image",
      WEB_PAGE: "webPage",
      ADDIN: "addIn"
    }, A.DataType = {
      FLOAT: "float",
      INTEGER: "integer",
      STRING: "string",
      BOOLEAN: "boolean",
      DATE: "date",
      DATETIME: "datetime"
    }, A.DateRangeType = {
      LAST: "last",
      LASTN: "lastn",
      NEXT: "next",
      NEXTN: "nextn",
      CURR: "curr",
      TODATE: "todate"
    }, A.ErrorCode = {
      INTERNAL_ERROR: "internalError",
      SERVER_ERROR: "serverError",
      INVALID_AGGREGATION_FIELD_NAME: "invalidAggregationFieldName",
      INVALID_TOOLBAR_BUTTON_NAME: "invalidToolbarButtonName",
      INVALID_PARAMETER: "invalidParameter",
      INVALID_URL: "invalidUrl",
      STALE_DATA_REFERENCE: "staleDataReference",
      VIZ_ALREADY_IN_MANAGER: "vizAlreadyInManager",
      NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: "noUrlOrParentElementNotFound",
      INVALID_FILTER_FIELDNAME: "invalidFilterFieldName",
      INVALID_FILTER_FIELDVALUE: "invalidFilterFieldValue",
      INVALID_FILTER_FIELDNAME_OR_VALUE: "invalidFilterFieldNameOrValue",
      FILTER_CANNOT_BE_PERFORMED: "filterCannotBePerformed",
      NOT_ACTIVE_SHEET: "notActiveSheet",
      INVALID_CUSTOM_VIEW_NAME: "invalidCustomViewName",
      MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: "missingRangeNForRelativeDateFilters",
      MISSING_MAX_SIZE: "missingMaxSize",
      MISSING_MIN_SIZE: "missingMinSize",
      MISSING_MINMAX_SIZE: "missingMinMaxSize",
      INVALID_SIZE: "invalidSize",
      INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: "invalidSizeBehaviorOnWorksheet",
      SHEET_NOT_IN_WORKBOOK: "sheetNotInWorkbook",
      INDEX_OUT_OF_RANGE: "indexOutOfRange",
      DOWNLOAD_WORKBOOK_NOT_ALLOWED: "downloadWorkbookNotAllowed",
      NULL_OR_EMPTY_PARAMETER: "nullOrEmptyParameter",
      BROWSER_NOT_CAPABLE: "browserNotCapable",
      UNSUPPORTED_EVENT_NAME: "unsupportedEventName",
      INVALID_DATE_PARAMETER: "invalidDateParameter",
      INVALID_SELECTION_FIELDNAME: "invalidSelectionFieldName",
      INVALID_SELECTION_VALUE: "invalidSelectionValue",
      INVALID_SELECTION_DATE: "invalidSelectionDate",
      NO_URL_FOR_HIDDEN_WORKSHEET: "noUrlForHiddenWorksheet",
      MAX_VIZ_RESIZE_ATTEMPTS: "maxVizResizeAttempts"
    }, A.FieldAggregationType = {
      SUM: "SUM",
      AVG: "AVG",
      MIN: "MIN",
      MAX: "MAX",
      STDEV: "STDEV",
      STDEVP: "STDEVP",
      VAR: "VAR",
      VARP: "VARP",
      COUNT: "COUNT",
      COUNTD: "COUNTD",
      MEDIAN: "MEDIAN",
      ATTR: "ATTR",
      NONE: "NONE",
      PERCENTILE: "PERCENTILE",
      YEAR: "YEAR",
      QTR: "QTR",
      MONTH: "MONTH",
      DAY: "DAY",
      HOUR: "HOUR",
      MINUTE: "MINUTE",
      SECOND: "SECOND",
      WEEK: "WEEK",
      WEEKDAY: "WEEKDAY",
      MONTHYEAR: "MONTHYEAR",
      MDY: "MDY",
      END: "END",
      TRUNC_YEAR: "TRUNC_YEAR",
      TRUNC_QTR: "TRUNC_QTR",
      TRUNC_MONTH: "TRUNC_MONTH",
      TRUNC_WEEK: "TRUNC_WEEK",
      TRUNC_DAY: "TRUNC_DAY",
      TRUNC_HOUR: "TRUNC_HOUR",
      TRUNC_MINUTE: "TRUNC_MINUTE",
      TRUNC_SECOND: "TRUNC_SECOND",
      QUART1: "QUART1",
      QUART3: "QUART3",
      SKEWNESS: "SKEWNESS",
      KURTOSIS: "KURTOSIS",
      INOUT: "INOUT",
      SUM_XSQR: "SUM_XSQR",
      USER: "USER",
      COLLECT: "COLLECT"
    }, A.FieldRoleType = {
      DIMENSION: "dimension",
      MEASURE: "measure",
      UNKNOWN: "unknown"
    }, A.FilterUpdateType = {
      ALL: "all",
      REPLACE: "replace",
      ADD: "add",
      REMOVE: "remove"
    }, A.FilterType = {
      CATEGORICAL: "categorical",
      QUANTITATIVE: "quantitative",
      HIERARCHICAL: "hierarchical",
      RELATIVEDATE: "relativedate"
    }, A.NullOption = {
      NULL_VALUES: "nullValues",
      NON_NULL_VALUES: "nonNullValues",
      ALL_VALUES: "allValues"
    }, A.ParameterAllowableValuesType = {
      ALL: "all",
      LIST: "list",
      RANGE: "range"
    }, A.ParameterDataType = {
      FLOAT: "float",
      INTEGER: "integer",
      STRING: "string",
      BOOLEAN: "boolean",
      DATE: "date",
      DATETIME: "datetime"
    }, A.PeriodType = {
      YEAR: "year",
      QUARTER: "quarter",
      MONTH: "month",
      WEEK: "week",
      DAY: "day",
      HOUR: "hour",
      MINUTE: "minute",
      SECOND: "second"
    }, A.SelectionUpdateType = {
      REPLACE: "replace",
      ADD: "add",
      REMOVE: "remove"
    }, A.SheetSizeBehavior = {
      AUTOMATIC: "automatic",
      EXACTLY: "exactly",
      RANGE: "range",
      ATLEAST: "atleast",
      ATMOST: "atmost"
    }, A.SheetType = {
      WORKSHEET: "worksheet",
      DASHBOARD: "dashboard",
      STORY: "story"
    }, A.TableauEventName = {
      CUSTOM_VIEW_LOAD: "customviewload",
      CUSTOM_VIEW_REMOVE: "customviewremove",
      CUSTOM_VIEW_SAVE: "customviewsave",
      CUSTOM_VIEW_SET_DEFAULT: "customviewsetdefault",
      FILTER_CHANGE: "filterchange",
      FIRST_INTERACTIVE: "firstinteractive",
      FIRST_VIZ_SIZE_KNOWN: "firstvizsizeknown",
      MARKS_SELECTION: "marksselection",
      MARKS_HIGHLIGHT: "markshighlight",
      PARAMETER_VALUE_CHANGE: "parametervaluechange",
      STORY_POINT_SWITCH: "storypointswitch",
      TAB_SWITCH: "tabswitch",
      TOOLBAR_STATE_CHANGE: "toolbarstatechange",
      URL_ACTION: "urlaction",
      VIZ_RESIZE: "vizresize"
    }, A.ToolbarPosition = {
      TOP: "top",
      BOTTOM: "bottom"
    }, A.ToolbarButtonName = {
      REDO: "redo",
      UNDO: "undo"
    };
  }(),
  /*! API */
  function () {
    "use strict";

    var n = {};
    e.tab = e.tab || {}, e.tableauSoftware = e.tableauSoftware || {}, t.initAssembly(n, "Tableau.JavaScript.Vql.Api");

    var r = e.tab._ApiBootstrap = t.mkType(n, "tab._ApiBootstrap", null, null, {
      initialize: function initialize() {
        i._ApiObjectRegistry.registerApiMessageRouter(function () {
          return new N();
        });
      }
    }),
        a = t.mkType(n, "tab._CustomViewImpl", function (e, t, i) {
      this.$customView = null, this.$presModel = null, this.$workbookImpl = null, this.$messagingOptions = null, this.$name = null, this.$ownerName = null, this.$url = null, this.$isPublic = !1, this.$isDefault = !1, this.$isStale = !1, this.$workbookImpl = e, this.$name = t, this.$messagingOptions = i, this.$isPublic = !1, this.$isDefault = !1, this.$isStale = !1;
    }, {
      get_$customView: function get_$customView() {
        return t.isNullOrUndefined(this.$customView) && (this.$customView = new B(this)), this.$customView;
      },
      get_$workbook: function get_$workbook() {
        return this.$workbookImpl.get_workbook();
      },
      get_$url: function get_$url() {
        return this.$url;
      },
      get_$name: function get_$name() {
        return this.$name;
      },
      set_$name: function set_$name(e) {
        if (this.$isStale) throw i._TableauException.create("staleDataReference", "Stale data");
        this.$name = e;
      },
      get_$ownerName: function get_$ownerName() {
        return this.$ownerName;
      },
      get_$advertised: function get_$advertised() {
        return this.$isPublic;
      },
      set_$advertised: function set_$advertised(e) {
        if (this.$isStale) throw i._TableauException.create("staleDataReference", "Stale data");
        this.$isPublic = e;
      },
      get_$isDefault: function get_$isDefault() {
        return this.$isDefault;
      },
      $saveAsync: function $saveAsync() {
        if (this.$isStale || t.isNullOrUndefined(this.$presModel)) throw i._TableauException.create("staleDataReference", "Stale data");
        this.$presModel.isPublic = this.$isPublic, this.$presModel.name = this.$name;
        var e = new i._Deferred(),
            n = {};
        n["api.customViewParam"] = this.$presModel;
        var r = a.$createCustomViewCommandReturnHandler("api.UpdateCustomViewCommand", e, t.mkdel(this, function (t) {
          a._processCustomViewUpdate(this.$workbookImpl, this.$messagingOptions, t, !0), e.resolve(this.get_$customView());
        }));
        return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, n, r), e.get_promise();
      },
      $removeAsync: function $removeAsync() {
        var e = new i._Deferred(),
            n = {};
        n["api.customViewParam"] = this.$presModel;
        var r = a.$createCustomViewCommandReturnHandler("api.RemoveCustomViewCommand", e, t.mkdel(this, function (t) {
          this.$isStale = !0, a._processCustomViews(this.$workbookImpl, this.$messagingOptions, t), e.resolve(this.get_$customView());
        }));
        return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, n, r), e.get_promise();
      },
      _showAsync: function _showAsync() {
        if (this.$isStale || t.isNullOrUndefined(this.$presModel)) throw i._TableauException.create("staleDataReference", "Stale data");
        return a._showCustomViewAsync(this.$workbookImpl, this.$messagingOptions, this.$presModel);
      }
    }, {
      _getAsync: function _getAsync(e) {
        var t = new i._Deferred();
        return t.resolve(e.get__customViewImpl().get_$customView()), t.get_promise();
      },
      _createNew: function _createNew(e, i, n, r) {
        var s = new a(e, n.name, i);
        return s.$isPublic = n.isPublic, s.$url = n.url, s.$ownerName = n.owner.friendlyName, s.$isDefault = t.isValue(r) && t.unbox(r) === n.id, s.$presModel = n, s;
      },
      _saveNewAsync: function _saveNewAsync(e, n, r) {
        var s = new i._Deferred(),
            o = {};
        o["api.customViewName"] = r;
        var l = a.$createCustomViewCommandReturnHandler("api.SaveNewCustomViewCommand", s, function (i) {
          a._processCustomViewUpdate(e, n, i, !0);

          var r = null;
          t.isValue(e.get_$updatedCustomViews()) && (r = e.get_$updatedCustomViews().get_item(0)), s.resolve(r);
        });
        return n.sendCommand(Object).call(n, o, l), s.get_promise();
      },
      _showCustomViewAsync: function _showCustomViewAsync(e, n, r) {
        var s = new i._Deferred(),
            o = {};
        t.isValue(r) && (o["api.customViewParam"] = r);
        var l = a.$createCustomViewCommandReturnHandler("api.ShowCustomViewCommand", s, function (t) {
          var i = e.get_activeCustomView();
          s.resolve(i);
        });
        return n.sendCommand(Object).call(n, o, l), s.get_promise();
      },
      _makeCurrentCustomViewDefaultAsync: function _makeCurrentCustomViewDefaultAsync(e, t) {
        var n = new i._Deferred(),
            r = a.$createCustomViewCommandReturnHandler("api.MakeCurrentCustomViewDefaultCommand", n, function (t) {
          var i = e.get_activeCustomView();
          n.resolve(i);
        });
        return t.sendCommand(Object).call(t, {}, r), n.get_promise();
      },
      _getCustomViewsAsync: function _getCustomViewsAsync(e, n) {
        var r = new i._Deferred(),
            s = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.FetchCustomViewsCommand", 0, function (t) {
          a._processCustomViews(e, n, t), r.resolve(e.get_$customViews()._toApiCollection());
        }, function (e, t) {
          r.reject(i._TableauException.create("serverError", t));
        });
        return n.sendCommand(Object).call(n, null, s), r.get_promise();
      },
      _processCustomViews: function _processCustomViews(e, t, i) {
        a._processCustomViewUpdate(e, t, i, !1);
      },
      _processCustomViewUpdate: function _processCustomViewUpdate(e, n, r, s) {
        if (e.set_$currentCustomView(null), e.set_$removedCustomViews(e.get_$customViews()), e.set_$customViews(new i._Collection()), s && (e.set_$updatedCustomViews(new i._Collection()), t.isValue(r.newView) && a.$processOneCustomViewUpdate(e, n, r, r.newView, s)), t.isValue(r.customViews)) for (var o = 0; o < r.customViews.length; o++) {
          var l = r.customViews[o];
          a.$processOneCustomViewUpdate(e, n, r, l, s);
        }
      },
      $processOneCustomViewUpdate: function $processOneCustomViewUpdate(e, i, n, r, s) {
        var o = null,
            l = null;
        t.isValue(n.currentView) && (o = n.currentView.name, l = n.currentView.owner.friendlyName);

        var u = n.defaultCustomViewId,
            c = a._createNew(e, i, r, u),
            h = c.get_$name();

        e.get_$customViews()._has(h) && (h += "/" + r.owner), e.get_$customViews()._add(h, c.get_$customView()), e.get_$removedCustomViews()._has(h) ? e.get_$removedCustomViews()._remove(h) : s && !e.get_$updatedCustomViews()._has(h) && e.get_$updatedCustomViews()._add(h, c.get_$customView()), t.isValue(o) && t.referenceEquals(c.get_$name(), o) && t.referenceEquals(c.get_$ownerName(), l) && e.set_$currentCustomView(c.get_$customView());
      },
      $createCustomViewCommandReturnHandler: function $createCustomViewCommandReturnHandler(e, n, r) {
        return new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))(e, 0, r, function (e, t) {
          n.reject(i._TableauException.create("serverError", t));
        });
      }
    }),
        s = e.tab._DashboardImpl = t.mkType(n, "tab._DashboardImpl", function (e, t, n) {
      this.$dashboard = null, this.$worksheets = new i._Collection(), this.$dashboardObjects = new i._Collection(), l.call(this, e, t, n);
    }, {
      get_sheet: function get_sheet() {
        return this.get_dashboard();
      },
      get_dashboard: function get_dashboard() {
        return t.isNullOrUndefined(this.$dashboard) && (this.$dashboard = new q(this)), this.$dashboard;
      },
      get_worksheets: function get_worksheets() {
        return this.$worksheets;
      },
      get_objects: function get_objects() {
        return this.$dashboardObjects;
      },
      $addObjects: function $addObjects(e, n) {
        this.$dashboardObjects = new i._Collection(), this.$worksheets = new i._Collection();

        for (var r = 0; r < e.length; r++) {
          var a = e[r],
              s = null;

          if ("worksheet" === e[r].objectType) {
            var o = a.name;
            if (t.isNullOrUndefined(o)) continue;
            var l = this.$worksheets.get__length(),
                c = i.SheetSizeFactory.createAutomatic(),
                h = n(o),
                m = t.isNullOrUndefined(h),
                d = m ? "" : h.getUrl(),
                p = u.$ctor(o, "worksheet", l, c, this.get_workbook(), d, !1, m, a.zoneId),
                f = new $(p, this.get_workbookImpl(), this.get_messagingOptions(), this);
            s = f.get_worksheet(), this.$worksheets._add(o, f.get_worksheet());
          }

          var g = new Q(a, this.get_dashboard(), s);

          this.$dashboardObjects._add(r.toString(), g);
        }
      }
    }),
        o = e.tab._DataSourceImpl = t.mkType(n, "tab._DataSourceImpl", function (e, t) {
      this.$name = null, this.$fields = new i._Collection(), this.$isPrimary = !1, this.$dataSource = null, i._Param.verifyString(e, "name"), this.$name = e, this.$isPrimary = t;
    }, {
      get_dataSource: function get_dataSource() {
        return t.isNullOrUndefined(this.$dataSource) && (this.$dataSource = new J(this)), this.$dataSource;
      },
      get_name: function get_name() {
        return this.$name;
      },
      get_fields: function get_fields() {
        return this.$fields;
      },
      get_isPrimary: function get_isPrimary() {
        return this.$isPrimary;
      },
      addField: function addField(e) {
        this.$fields._add(e.getName(), e);
      }
    }, {
      processDataSource: function processDataSource(e) {
        for (var n = new o(e.name, e.isPrimary), r = t.coalesce(e.fields, []), a = 0; a < r.length; a++) {
          var s = r[a],
              l = i.ApiEnumConverter.convertFieldRole(s.role),
              u = i.ApiEnumConverter.convertFieldAggregation(s.aggregation),
              c = new K(n.get_dataSource(), s.name, l, u);
          n.addField(c);
        }

        return n;
      },
      processDataSourcesForWorksheet: function processDataSourcesForWorksheet(e) {
        for (var n = new i._Collection(), r = null, a = 0; a < e.dataSources.length; a++) {
          var s = e.dataSources[a],
              l = o.processDataSource(s);
          s.isPrimary ? r = l : n._add(s.name, l.get_dataSource());
        }

        return t.isValue(r) && n._addToFirst(r.get_name(), r.get_dataSource()), n;
      }
    }),
        l = e.tab._SheetImpl = t.mkType(n, "tab._SheetImpl", function (e, t, n) {
      this.$name = null, this.$index = 0, this.$isActive = !1, this.$isHidden = !1, this.$sheetType = null, this.$size = null, this.$url = null, this.$workbookImpl = null, this.$messagingOptions = null, this.$parentStoryPointImpl = null, this.$zoneId = 0, i._Param.verifyValue(e, "sheetInfoImpl"), i._Param.verifyValue(t, "workbookImpl"), i._Param.verifyValue(n, "messagingOptions"), this.$name = e.name, this.$index = e.index, this.$isActive = e.isActive, this.$isHidden = e.isHidden, this.$sheetType = e.sheetType, this.$size = e.size, this.$url = e.url, this.$workbookImpl = t, this.$messagingOptions = n, this.$zoneId = e.zoneId;
    }, {
      get_sheet: null,
      get_name: function get_name() {
        return this.$name;
      },
      get_index: function get_index() {
        return this.$index;
      },
      get_workbookImpl: function get_workbookImpl() {
        return this.$workbookImpl;
      },
      get_workbook: function get_workbook() {
        return this.$workbookImpl.get_workbook();
      },
      get_url: function get_url() {
        if (this.$isHidden) throw i._TableauException.createNoUrlForHiddenWorksheet();
        return this.$url;
      },
      get_size: function get_size() {
        return this.$size;
      },
      get_isHidden: function get_isHidden() {
        return this.$isHidden;
      },
      get_isActive: function get_isActive() {
        return this.$isActive;
      },
      set_isActive: function set_isActive(e) {
        this.$isActive = e;
      },
      get_isDashboard: function get_isDashboard() {
        return "dashboard" === this.$sheetType;
      },
      get_isStory: function get_isStory() {
        return "story" === this.$sheetType;
      },
      get_sheetType: function get_sheetType() {
        return this.$sheetType;
      },
      get_parentStoryPoint: function get_parentStoryPoint() {
        return t.isValue(this.$parentStoryPointImpl) ? this.$parentStoryPointImpl.get_storyPoint() : null;
      },
      get_parentStoryPointImpl: function get_parentStoryPointImpl() {
        return this.$parentStoryPointImpl;
      },
      set_parentStoryPointImpl: function set_parentStoryPointImpl(e) {
        if ("story" === this.$sheetType) throw i._TableauException.createInternalError("A story cannot be a child of another story.");
        this.$parentStoryPointImpl = e;
      },
      get_zoneId: function get_zoneId() {
        return this.$zoneId;
      },
      get_messagingOptions: function get_messagingOptions() {
        return this.$messagingOptions;
      },
      changeSizeAsync: function changeSizeAsync(e) {
        if (e = l.$normalizeSheetSize(e), "worksheet" === this.$sheetType && "automatic" !== e.behavior) throw i._TableauException.createInvalidSizeBehaviorOnWorksheet();
        var n = new i._Deferred();
        if (this.$size.behavior === e.behavior && "automatic" === e.behavior) return n.resolve(e), n.get_promise();
        var r = this.$processSheetSize(e),
            a = {};
        a["api.setSheetSizeName"] = this.$name, a["api.minWidth"] = r["api.minWidth"], a["api.minHeight"] = r["api.minHeight"], a["api.maxWidth"] = r["api.maxWidth"], a["api.maxHeight"] = r["api.maxHeight"];
        var s = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.SetSheetSizeCommand", 0, t.mkdel(this, function (e) {
          this.get_workbookImpl()._update(t.mkdel(this, function () {
            var e = this.get_workbookImpl().get_publishedSheets()._get(this.get_name()).getSize();

            n.resolve(e);
          }));
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, a, s), n.get_promise();
      },
      sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      },
      $processSheetSize: function $processSheetSize(e) {
        var n = null;
        if (t.isNullOrUndefined(e) || t.isNullOrUndefined(e.behavior) || "automatic" !== e.behavior && t.isNullOrUndefined(e.minSize) && t.isNullOrUndefined(e.maxSize)) throw i._TableauException.createInvalidSheetSizeParam();
        var r = 0,
            a = 0,
            s = 0,
            o = 0,
            l = {
          "api.minWidth": 0,
          "api.minHeight": 0,
          "api.maxWidth": 0,
          "api.maxHeight": 0
        };
        if ("automatic" === e.behavior) n = i.SheetSize.$ctor("automatic", void 0, void 0);else if ("atmost" === e.behavior) {
          if (t.isNullOrUndefined(e.maxSize) || t.isNullOrUndefined(e.maxSize.width) || t.isNullOrUndefined(e.maxSize.height)) throw i._TableauException.createMissingMaxSize();
          if (e.maxSize.width < 0 || e.maxSize.height < 0) throw i._TableauException.createInvalidSizeValue();
          l["api.maxWidth"] = e.maxSize.width, l["api.maxHeight"] = e.maxSize.height, n = i.SheetSize.$ctor("atmost", void 0, e.maxSize);
        } else if ("atleast" === e.behavior) {
          if (t.isNullOrUndefined(e.minSize) || t.isNullOrUndefined(e.minSize.width) || t.isNullOrUndefined(e.minSize.height)) throw i._TableauException.createMissingMinSize();
          if (e.minSize.width < 0 || e.minSize.height < 0) throw i._TableauException.createInvalidSizeValue();
          l["api.minWidth"] = e.minSize.width, l["api.minHeight"] = e.minSize.height, n = i.SheetSize.$ctor("atleast", e.minSize, void 0);
        } else if ("range" === e.behavior) {
          if (t.isNullOrUndefined(e.minSize) || t.isNullOrUndefined(e.maxSize) || t.isNullOrUndefined(e.minSize.width) || t.isNullOrUndefined(e.maxSize.width) || t.isNullOrUndefined(e.minSize.height) || t.isNullOrUndefined(e.maxSize.height)) throw i._TableauException.createMissingMinMaxSize();
          if (e.minSize.width < 0 || e.minSize.height < 0 || e.maxSize.width < 0 || e.maxSize.height < 0 || e.minSize.width > e.maxSize.width || e.minSize.height > e.maxSize.height) throw i._TableauException.createInvalidRangeSize();
          l["api.minWidth"] = e.minSize.width, l["api.minHeight"] = e.minSize.height, l["api.maxWidth"] = e.maxSize.width, l["api.maxHeight"] = e.maxSize.height, n = i.SheetSize.$ctor("range", e.minSize, e.maxSize);
        } else if ("exactly" === e.behavior) {
          if (t.isValue(e.minSize) && t.isValue(e.maxSize) && t.isValue(e.minSize.width) && t.isValue(e.maxSize.width) && t.isValue(e.minSize.height) && t.isValue(e.maxSize.height)) {
            if (r = e.minSize.width, a = e.minSize.height, s = e.maxSize.width, o = e.maxSize.height, r !== s || a !== o) throw i._TableauException.createSizeConflictForExactly();
          } else t.isValue(e.minSize) && t.isValue(e.minSize.width) && t.isValue(e.minSize.height) ? (s = r = e.minSize.width, o = a = e.minSize.height) : t.isValue(e.maxSize) && t.isValue(e.maxSize.width) && t.isValue(e.maxSize.height) && (r = s = e.maxSize.width, a = o = e.maxSize.height);

          l["api.minWidth"] = r, l["api.minHeight"] = a, l["api.maxWidth"] = s, l["api.maxHeight"] = o, n = i.SheetSize.$ctor("exactly", i.Size.$ctor(r, a), i.Size.$ctor(s, o));
        }
        return this.$size = n, l;
      }
    }, {
      $convertValueToIntIfValid: function $convertValueToIntIfValid(e) {
        return t.isValue(e) ? i._Utility.toInt(e) : e;
      },
      $normalizeSheetSize: function $normalizeSheetSize(e) {
        var n = i.PublicEnums.normalizeEnum(i.ApiSheetSizeBehavior).call(null, e.behavior, "size.behavior"),
            r = e.minSize;
        t.isValue(r) && (r = i.Size.$ctor(l.$convertValueToIntIfValid(e.minSize.width), l.$convertValueToIntIfValid(e.minSize.height)));
        var a = e.maxSize;
        return t.isValue(a) && (a = i.Size.$ctor(l.$convertValueToIntIfValid(e.maxSize.width), l.$convertValueToIntIfValid(e.maxSize.height))), i.SheetSize.$ctor(n, r, a);
      }
    }),
        u = e.tab._SheetInfoImpl = t.mkType(n, "tab._SheetInfoImpl", null, null, {
      $ctor: function $ctor(e, t, i, n, r, a, s, o, l) {
        var u = new Object();
        return u.name = null, u.index = 0, u.workbook = null, u.url = null, u.isHidden = !1, u.sheetType = null, u.zoneId = 0, u.size = null, u.isActive = !1, u.name = e, u.sheetType = t, u.index = i, u.size = n, u.workbook = r, u.url = a, u.isActive = s, u.isHidden = o, u.zoneId = l, u;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        c = e.tab._StoryImpl = t.mkType(n, "tab._StoryImpl", function (e, t, n, r, a) {
      this.$activeStoryPointImpl = null, this.$findSheetFunc = null, this.$story = null, this.$storyPointsInfo = null, this.$2$ActiveStoryPointChangeField = null, l.call(this, e, t, n), i._Param.verifyValue(r, "storyPm"), i._Param.verifyValue(a, "findSheetFunc"), this.$findSheetFunc = a, this.update(r);
    }, {
      add_activeStoryPointChange: function add_activeStoryPointChange(e) {
        this.$2$ActiveStoryPointChangeField = t.delegateCombine(this.$2$ActiveStoryPointChangeField, e);
      },
      remove_activeStoryPointChange: function remove_activeStoryPointChange(e) {
        this.$2$ActiveStoryPointChangeField = t.delegateRemove(this.$2$ActiveStoryPointChangeField, e);
      },
      get_activeStoryPointImpl: function get_activeStoryPointImpl() {
        return this.$activeStoryPointImpl;
      },
      get_sheet: function get_sheet() {
        return this.get_story();
      },
      get_story: function get_story() {
        return t.isNullOrUndefined(this.$story) && (this.$story = new re(this)), this.$story;
      },
      get_storyPointsInfo: function get_storyPointsInfo() {
        return this.$storyPointsInfo;
      },
      update: function update(e) {
        var i = null,
            n = null;
        this.$storyPointsInfo = this.$storyPointsInfo || new Array(e.storyPoints.length);

        for (var r = 0; r < e.storyPoints.length; r++) {
          var a = e.storyPoints[r],
              s = a.caption,
              o = r === e.activeStoryPointIndex,
              l = m.$ctor(s, r, a.storyPointId, o, a.isUpdated, this);
          if (t.isNullOrUndefined(this.$storyPointsInfo[r])) this.$storyPointsInfo[r] = new se(l);else if (this.$storyPointsInfo[r]._impl.storyPointId === l.storyPointId) {
            var u = this.$storyPointsInfo[r]._impl;
            u.caption = l.caption, u.index = l.index, u.isActive = o, u.isUpdated = l.isUpdated;
          } else this.$storyPointsInfo[r] = new se(l);
          o && (i = a.containedSheetInfo, n = l);
        }

        var c = this.$storyPointsInfo.length - e.storyPoints.length;
        this.$storyPointsInfo.splice(e.storyPoints.length, c);
        var d = t.isNullOrUndefined(this.$activeStoryPointImpl) || this.$activeStoryPointImpl.get_storyPointId() !== n.storyPointId;
        t.isValue(this.$activeStoryPointImpl) && d && this.$activeStoryPointImpl.set_isActive(!1);
        var p = this.$activeStoryPointImpl;

        if (d) {
          var f = h.createContainedSheet(i, this.get_workbookImpl(), this.get_messagingOptions(), this.$findSheetFunc);
          this.$activeStoryPointImpl = new h(n, f);
        } else this.$activeStoryPointImpl.set_isActive(n.isActive), this.$activeStoryPointImpl.set_isUpdated(n.isUpdated);

        d && t.isValue(p) && this.$raiseActiveStoryPointChange(this.$storyPointsInfo[p.get_index()], this.$activeStoryPointImpl.get_storyPoint());
      },
      activatePreviousStoryPointAsync: function activatePreviousStoryPointAsync() {
        return this.$activatePreviousNextStoryPointAsync("api.ActivatePreviousStoryPoint");
      },
      activateNextStoryPointAsync: function activateNextStoryPointAsync() {
        return this.$activatePreviousNextStoryPointAsync("api.ActivateNextStoryPoint");
      },
      activateStoryPointAsync: function activateStoryPointAsync(e) {
        var n = new i._Deferred();
        if (e < 0 || e >= this.$storyPointsInfo.length) throw i._TableauException.createIndexOutOfRange(e);
        var r = {};
        r["api.storyPointIndex"] = e;
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.ActivateStoryPoint", 0, t.mkdel(this, function (e) {
          this.$updateActiveState(e), n.resolve(this.$activeStoryPointImpl.get_storyPoint());
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, r, a), n.get_promise();
      },
      revertStoryPointAsync: function revertStoryPointAsync(e) {
        if ((e = e || this.$activeStoryPointImpl.get_index()) < 0 || e >= this.$storyPointsInfo.length) throw i._TableauException.createIndexOutOfRange(e);
        var n = new i._Deferred(),
            r = {};
        r["api.storyPointIndex"] = e;
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.RevertStoryPoint", 0, t.mkdel(this, function (t) {
          this.$updateStoryPointInfo(e, t), n.resolve(this.$storyPointsInfo[e]);
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, r, a), n.get_promise();
      },
      $activatePreviousNextStoryPointAsync: function $activatePreviousNextStoryPointAsync(e) {
        if ("api.ActivatePreviousStoryPoint" !== e && "api.ActivateNextStoryPoint" !== e) throw i._TableauException.createInternalError("commandName '" + e + "' is invalid.");
        var n = new i._Deferred(),
            r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))(e, 0, t.mkdel(this, function (e) {
          this.$updateActiveState(e), n.resolve(this.$activeStoryPointImpl.get_storyPoint());
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, {}, r), n.get_promise();
      },
      $updateStoryPointInfo: function $updateStoryPointInfo(e, t) {
        var n = this.$storyPointsInfo[e]._impl;
        if (n.storyPointId !== t.storyPointId) throw i._TableauException.createInternalError("We should not be updating a story point where the IDs don't match. Existing storyPointID=" + n.storyPointId + ", newStoryPointID=" + t.storyPointId);
        n.caption = t.caption, n.isUpdated = t.isUpdated, t.storyPointId === this.$activeStoryPointImpl.get_storyPointId() && this.$activeStoryPointImpl.set_isUpdated(t.isUpdated);
      },
      $updateActiveState: function $updateActiveState(e) {
        var t = this.$activeStoryPointImpl,
            i = e.index;

        if (t.get_index() !== i) {
          var n = this.$storyPointsInfo[t.get_index()],
              r = this.$storyPointsInfo[i]._impl,
              a = h.createContainedSheet(e.containedSheetInfo, this.get_workbookImpl(), this.get_messagingOptions(), this.$findSheetFunc);
          r.isActive = !0, this.$activeStoryPointImpl = new h(r, a), t.set_isActive(!1), n._impl.isActive = !1, this.$raiseActiveStoryPointChange(n, this.$activeStoryPointImpl.get_storyPoint());
        }
      },
      $raiseActiveStoryPointChange: function $raiseActiveStoryPointChange(e, i) {
        t.staticEquals(this.$2$ActiveStoryPointChangeField, null) || this.$2$ActiveStoryPointChangeField(e, i);
      }
    }),
        h = e.tab._StoryPointImpl = t.mkType(n, "tab._StoryPointImpl", function (e, i) {
      if (this.$caption = null, this.$index = 0, this.$isActive = !1, this.$isUpdated = !1, this.$containedSheetImpl = null, this.$parentStoryImpl = null, this.$storyPoint = null, this.$storyPointId = 0, this.$isActive = e.isActive, this.$isUpdated = e.isUpdated, this.$caption = e.caption, this.$index = e.index, this.$parentStoryImpl = e.parentStoryImpl, this.$storyPointId = e.storyPointId, this.$containedSheetImpl = i, t.isValue(i) && (this.$containedSheetImpl.set_parentStoryPointImpl(this), "dashboard" === i.get_sheetType())) for (var n = t.cast(this.$containedSheetImpl, s), r = 0; r < n.get_worksheets().get__length(); r++) {
        n.get_worksheets().get_item(r)._impl.set_parentStoryPointImpl(this);
      }
    }, {
      get_caption: function get_caption() {
        return this.$caption;
      },
      get_containedSheetImpl: function get_containedSheetImpl() {
        return this.$containedSheetImpl;
      },
      get_index: function get_index() {
        return this.$index;
      },
      get_isActive: function get_isActive() {
        return this.$isActive;
      },
      set_isActive: function set_isActive(e) {
        this.$isActive = e;
      },
      get_isUpdated: function get_isUpdated() {
        return this.$isUpdated;
      },
      set_isUpdated: function set_isUpdated(e) {
        this.$isUpdated = e;
      },
      get_parentStoryImpl: function get_parentStoryImpl() {
        return this.$parentStoryImpl;
      },
      get_storyPoint: function get_storyPoint() {
        return t.isNullOrUndefined(this.$storyPoint) && (this.$storyPoint = new ae(this)), this.$storyPoint;
      },
      get_storyPointId: function get_storyPointId() {
        return this.$storyPointId;
      },
      $toInfoImpl: function $toInfoImpl() {
        return m.$ctor(this.$caption, this.$index, this.$storyPointId, this.$isActive, this.$isUpdated, this.$parentStoryImpl);
      }
    }, {
      createContainedSheet: function createContainedSheet(e, n, r, a) {
        if (t.isNullOrUndefined(e) || t.isNullOrUndefined(e.name)) return null;
        var o = i.ApiEnumConverter.convertSheetType(e.sheetType),
            l = i.SheetSizeFactory.createAutomatic(),
            c = a(e.name),
            h = t.isNullOrUndefined(c),
            m = h ? "" : c.getUrl(),
            d = u.$ctor(e.name, o, -1, l, n.get_workbook(), m, !1, h, e.zoneId);

        if ("worksheet" === e.sheetType) {
          return new $(d, n, r, null);
        }

        if ("dashboard" === e.sheetType) {
          var p = new s(d, n, r),
              f = g.$createDashboardZones(e.dashboardZones);
          return p.$addObjects(f, a), p;
        }

        throw "story" === e.sheetType ? i._TableauException.createInternalError("Cannot have a story embedded within another story.") : i._TableauException.createInternalError("Unknown sheet type '" + e.sheetType + "'");
      }
    }),
        m = e.tab._StoryPointInfoImpl = t.mkType(n, "tab._StoryPointInfoImpl", null, null, {
      $ctor: function $ctor(e, t, i, n, r, a) {
        var s = new Object();
        return s.storyPointId = 0, s.parentStoryImpl = null, s.caption = null, s.index = 0, s.isActive = !1, s.isUpdated = !1, s.caption = e, s.index = t, s.storyPointId = i, s.isActive = n, s.isUpdated = r, s.parentStoryImpl = a, s;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        d = e.tab._ToolbarStateImpl = t.mkType(n, "tab._ToolbarStateImpl", function (e, t) {
      this.$toolbarState = null, this.$vizImpl = null, this.$toolbarStatePresModel = null, this.$vizImpl = e, this.$toolbarStatePresModel = t;
    }, {
      get_toolbarState: function get_toolbarState() {
        return t.isNullOrUndefined(this.$toolbarState) && (this.$toolbarState = new oe(this)), this.$toolbarState;
      },
      get_viz: function get_viz() {
        return this.$vizImpl.get_$viz();
      },
      isButtonEnabled: function isButtonEnabled(e) {
        switch (e) {
          case "redo":
            return this.$toolbarStatePresModel.canRedo;

          case "undo":
            return this.$toolbarStatePresModel.canUndo;

          default:
            throw i._TableauException.createInvalidToolbarButtonName(e);
        }
      }
    }),
        p = t.mkType(n, "tab._VizManagerImpl", null, null, {
      get_$clonedVizs: function get_$clonedVizs() {
        return p.$vizs.concat();
      },
      $registerViz: function $registerViz(e) {
        p.$verifyVizNotAlreadyParented(e), p.$vizs.push(e);
      },
      $unregisterViz: function $unregisterViz(e) {
        for (var i = 0, n = p.$vizs.length; i < n; i++) {
          if (t.referenceEquals(p.$vizs[i], e)) {
            p.$vizs.splice(i, 1);
            break;
          }
        }
      },
      $sendVisibleRects: function $sendVisibleRects() {
        for (var e = 0, t = p.$vizs.length; e < t; e++) {
          p.$vizs[e]._impl.$sendVisibleRect();
        }
      },
      $verifyVizNotAlreadyParented: function $verifyVizNotAlreadyParented(e) {
        for (var n = e.getParentElement(), r = 0, a = p.$vizs.length; r < a; r++) {
          if (t.referenceEquals(p.$vizs[r].getParentElement(), n)) {
            var s = "Another viz is already present in element '" + i._Utility.elementToString(n) + "'.";
            throw i._TableauException.create("vizAlreadyInManager", s);
          }
        }
      }
    }),
        f = e.tab._VizParameters = t.mkType(n, "tab._VizParameters", function (e, n, r) {
      if (this.name = "", this.host_url = null, this.tabs = !1, this.toolbar = !1, this.toolBarPosition = null, this.device = null, this.hostId = null, this.width = null, this.height = null, this.parentElement = null, this.userSuppliedParameters = null, this.staticImageUrl = null, this.fixedSize = !1, this.displayStaticImage = !1, this.$urlFromApi = null, this.$createOptions = null, this.$disableUrlActionsPopups = !1, t.isNullOrUndefined(e) || t.isNullOrUndefined(n)) throw i._TableauException.create("noUrlOrParentElementNotFound", "URL is empty or Parent element not found");
      t.isNullOrUndefined(r) && ((r = new Object()).hideTabs = !1, r.hideToolbar = !1, r.onFirstInteractive = null), t.isValue(r.height) || t.isValue(r.width) ? (this.fixedSize = !0, i._Utility.isNumber(r.height) && (r.height = r.height.toString() + "px"), i._Utility.isNumber(r.width) && (r.width = r.width.toString() + "px"), this.height = t.isValue(r.height) ? i._Utility.roundVizSizeInPixels(r.height.toString()) : null, this.width = t.isValue(r.width) ? i._Utility.roundVizSizeInPixels(r.width.toString()) : null) : this.fixedSize = !1, this.displayStaticImage = r.displayStaticImage || !1, this.staticImageUrl = r.staticImageUrl || "", this.tabs = !r.hideTabs, this.toolbar = !r.hideToolbar, this.device = r.device, this.parentElement = e, this.$createOptions = r, this.toolBarPosition = r.toolbarPosition, this.$disableUrlActionsPopups = !0 === r.disableUrlActionsPopups;
      var a = n.split("?");
      this.$urlFromApi = a[0], 2 === a.length ? this.userSuppliedParameters = a[1] : this.userSuppliedParameters = "";
      var s = new RegExp(".*?[^/:]/", "").exec(this.$urlFromApi);
      if (t.isNullOrUndefined(s) || -1 === s[0].toLowerCase().indexOf("http://") && -1 === s[0].toLowerCase().indexOf("https://")) throw i._TableauException.create("invalidUrl", "Invalid url");
      this.host_url = s[0].toLowerCase(), this.name = this.$urlFromApi.replace(s[0], ""), this.name = this.name.replace("views/", "");
    }, {
      get_url: function get_url() {
        return this.$constructUrl();
      },
      get_baseUrl: function get_baseUrl() {
        return this.$urlFromApi;
      },
      $constructUrl: function $constructUrl() {
        var e = [];
        e.push(this.get_baseUrl()), e.push("?"), this.userSuppliedParameters.length > 0 && (e.push(this.userSuppliedParameters), e.push("&")), !this.fixedSize && !(-1 !== this.userSuppliedParameters.indexOf(":size=")) && this.parentElement.clientWidth * this.parentElement.clientHeight > 0 && (e.push(":size="), e.push(this.parentElement.clientWidth + "," + this.parentElement.clientHeight), e.push("&")), -1 === this.userSuppliedParameters.indexOf(":embed=y") && e.push(":embed=y"), e.push("&:showVizHome=n"), e.push("&:jsdebug=y"), this.fixedSize || e.push("&:bootstrapWhenNotified=y"), this.tabs || e.push("&:tabs=n"), this.displayStaticImage && e.push("&:display_static_image=y"), this.$disableUrlActionsPopups && e.push("&:disableUrlActionsPopups=y"), this.toolbar ? t.isNullOrUndefined(this.toolBarPosition) || (e.push("&:toolbar="), e.push(this.toolBarPosition.toString())) : e.push("&:toolbar=n"), t.isValue(this.device) && (e.push("&:device="), e.push(this.device.toString()));
        var i = this.$createOptions,
            n = new t.ObjectEnumerator(i);

        try {
          for (; n.moveNext();) {
            var r = n.current();
            "embed" !== r.key && "height" !== r.key && "width" !== r.key && "device" !== r.key && "autoSize" !== r.key && "hideTabs" !== r.key && "hideToolbar" !== r.key && "onFirstInteractive" !== r.key && "onFirstVizSizeKnown" !== r.key && "toolbarPosition" !== r.key && "instanceIdToClone" !== r.key && "navType" !== r.key && "display_static_image" !== r.key && "disableUrlActionsPopups" !== r.key && (e.push("&"), e.push(encodeURIComponent(r.key)), e.push("="), e.push(encodeURIComponent(r.value.toString())));
          }
        } finally {
          n.dispose();
        }

        return e.push("&:apiID=" + this.hostId), e.push("#"), t.isValue(this.$createOptions.instanceIdToClone) && e.push(this.$createOptions.instanceIdToClone + "&"), t.isValue(this.$createOptions.navType) && this.$createOptions.navType.length > 0 ? (e.push("navType=" + this.$createOptions.navType.toString() + "&"), e.push("navSrc=" + "Opt".toString())) : (e.push("navType=" + window.performance.navigation.type.toString() + "&"), e.push("navSrc=" + "Parse".toString())), e.join("");
      }
    }),
        g = e.tab._WorkbookImpl = t.mkType(n, "tab._WorkbookImpl", function (e, t, n) {
      this.$workbook = null, this.$vizImpl = null, this.$name = null, this.$activeSheetImpl = null, this.$activatingHiddenSheetImpl = null, this.$publishedSheetsInfo = new i._Collection(), this.$isDownloadAllowed = !1, this.$messagingOptions = null, this.$currentCustomView = null, this.$customViews = new i._Collection(), this.$updatedCustomViews = new i._Collection(), this.$removedCustomViews = new i._Collection(), this.$parameters = null, this.$lastChangedParameterImpl = null, this.$vizImpl = e, this.$messagingOptions = t, this.$getClientInfo(n);
    }, {
      get_workbook: function get_workbook() {
        return t.isNullOrUndefined(this.$workbook) && (this.$workbook = new he(this)), this.$workbook;
      },
      get_viz: function get_viz() {
        return this.$vizImpl.get_$viz();
      },
      get_publishedSheets: function get_publishedSheets() {
        return this.$publishedSheetsInfo;
      },
      get_name: function get_name() {
        return this.$name;
      },
      get_activeSheetImpl: function get_activeSheetImpl() {
        return this.$activeSheetImpl;
      },
      get_activeCustomView: function get_activeCustomView() {
        return this.$currentCustomView;
      },
      get_isDownloadAllowed: function get_isDownloadAllowed() {
        return this.$isDownloadAllowed;
      },
      $findActiveSheetOrSheetWithinActiveDashboard: function $findActiveSheetOrSheetWithinActiveDashboard(e) {
        if (t.isNullOrUndefined(this.$activeSheetImpl)) return null;
        var i = g.$extractSheetName(e);
        if (t.isNullOrUndefined(i)) return null;
        if (t.referenceEquals(i, this.$activeSheetImpl.get_name())) return this.$activeSheetImpl;

        if (this.$activeSheetImpl.get_isDashboard()) {
          var n = t.cast(this.$activeSheetImpl, s).get_worksheets()._get(i);

          if (t.isValue(n)) return n._impl;
        }

        return null;
      },
      _setActiveSheetAsync: function _setActiveSheetAsync(e) {
        if (i._Utility.isNumber(e)) {
          var n = e;
          if (n < this.$publishedSheetsInfo.get__length() && n >= 0) return this.$activateSheetWithInfoAsync(this.$publishedSheetsInfo.get_item(n).$impl);
          throw i._TableauException.createIndexOutOfRange(n);
        }

        var r = g.$extractSheetName(e),
            a = this.$publishedSheetsInfo._get(r);

        if (t.isValue(a)) return this.$activateSheetWithInfoAsync(a.$impl);

        if (this.$activeSheetImpl.get_isDashboard()) {
          var o = t.cast(this.$activeSheetImpl, s).get_worksheets()._get(r);

          if (t.isValue(o)) {
            this.$activatingHiddenSheetImpl = null;
            var l = "";
            return o.getIsHidden() ? this.$activatingHiddenSheetImpl = o._impl : l = o._impl.get_url(), this.$activateSheetInternalAsync(o._impl.get_name(), l);
          }
        }

        throw i._TableauException.create("sheetNotInWorkbook", "Sheet is not found in Workbook");
      },
      _revertAllAsync: function _revertAllAsync() {
        var e = new i._Deferred(),
            n = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.RevertAllCommand", 1, function (t) {
          e.resolve();
        }, function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.$sendCommand(Object).call(this, null, n), e.get_promise();
      },
      _update: function _update(e) {
        this.$getClientInfo(e);
      },
      $activateSheetWithInfoAsync: function $activateSheetWithInfoAsync(e) {
        return this.$activateSheetInternalAsync(e.name, e.url);
      },
      $activateSheetInternalAsync: function $activateSheetInternalAsync(e, n) {
        var r = new i._Deferred();
        if (t.isValue(this.$activeSheetImpl) && t.referenceEquals(e, this.$activeSheetImpl.get_name())) return r.resolve(this.$activeSheetImpl.get_sheet()), r.get_promise();
        var a = {};
        a["api.switchToSheetName"] = e, a["api.switchToRepositoryUrl"] = n, a["api.oldRepositoryUrl"] = this.$activeSheetImpl.get_url();
        var s = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.SwitchActiveSheetCommand", 0, t.mkdel(this, function (e) {
          this.$vizImpl.$workbookTabSwitchHandler = t.mkdel(this, function () {
            this.$vizImpl.$workbookTabSwitchHandler = null, r.resolve(this.$activeSheetImpl.get_sheet());
          });
        }), function (e, t) {
          r.reject(i._TableauException.createServerError(t));
        });
        return this.$sendCommand(Object).call(this, a, s), r.get_promise();
      },
      _updateActiveSheetAsync: function _updateActiveSheetAsync() {
        var e = new i._Deferred(),
            n = {};
        n["api.switchToSheetName"] = this.$activeSheetImpl.get_name(), n["api.switchToRepositoryUrl"] = this.$activeSheetImpl.get_url(), n["api.oldRepositoryUrl"] = this.$activeSheetImpl.get_url();
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.UpdateActiveSheetCommand", 0, t.mkdel(this, function (t) {
          e.resolve(this.$activeSheetImpl.get_sheet());
        }), function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.$sendCommand(Object).call(this, n, r), e.get_promise();
      },
      $sendCommand: function $sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      },
      $getClientInfo: function $getClientInfo(e) {
        var n = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.GetClientInfoCommand", 0, t.mkdel(this, function (i) {
          this.$processInfo(i), t.isValue(e) && e();
        }), null);
        this.$sendCommand(Object).call(this, null, n);
      },
      $processInfo: function $processInfo(e) {
        this.$name = e.workbookName, this.$isDownloadAllowed = e.isDownloadAllowed, this.$vizImpl.$setAreAutomaticUpdatesPaused(!e.isAutoUpdate), this.$vizImpl.set_instanceId(e.instanceId), this.$createSheetsInfo(e), this.$initializeActiveSheet(e);
      },
      $initializeActiveSheet: function $initializeActiveSheet(e) {
        var n = e.currentSheetName,
            r = this.$publishedSheetsInfo._get(n);

        if (t.isNullOrUndefined(r) && t.isNullOrUndefined(this.$activatingHiddenSheetImpl)) throw i._TableauException.createInternalError("The active sheet was not specified in baseSheets");

        if (!t.isValue(this.$activeSheetImpl) || !t.referenceEquals(this.$activeSheetImpl.get_name(), n)) {
          if (t.isValue(this.$activeSheetImpl)) {
            this.$activeSheetImpl.set_isActive(!1);

            var a = this.$publishedSheetsInfo._get(this.$activeSheetImpl.get_name());

            if (t.isValue(a) && (a.$impl.isActive = !1), "story" === this.$activeSheetImpl.get_sheetType()) t.cast(this.$activeSheetImpl, c).remove_activeStoryPointChange(t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch));
          }

          if (t.isValue(this.$activatingHiddenSheetImpl)) {
            var o = u.$ctor(this.$activatingHiddenSheetImpl.get_name(), "worksheet", -1, this.$activatingHiddenSheetImpl.get_size(), this.get_workbook(), "", !0, !0, l.noZoneId);
            this.$activatingHiddenSheetImpl = null, this.$activeSheetImpl = new $(o, this, this.$messagingOptions, null);
          } else {
            for (var h = null, m = 0, d = e.publishedSheets.length; m < d; m++) {
              if (t.referenceEquals(e.publishedSheets[m].name, n)) {
                h = e.publishedSheets[m];
                break;
              }
            }

            if (t.isNullOrUndefined(h)) throw i._TableauException.createInternalError("No base sheet was found corresponding to the active sheet.");
            var p = t.mkdel(this, function (e) {
              return this.$publishedSheetsInfo._get(e);
            });

            if ("dashboard" === h.sheetType) {
              var f = new s(r.$impl, this, this.$messagingOptions);
              this.$activeSheetImpl = f;
              var v = g.$createDashboardZones(e.dashboardZones);
              f.$addObjects(v, p);
            } else if ("story" === h.sheetType) {
              var y = new c(r.$impl, this, this.$messagingOptions, e.story, p);
              this.$activeSheetImpl = y, y.add_activeStoryPointChange(t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch));
            } else this.$activeSheetImpl = new $(r.$impl, this, this.$messagingOptions, null);

            r.$impl.isActive = !0;
          }

          this.$activeSheetImpl.set_isActive(!0);
        }
      },
      $createSheetsInfo: function $createSheetsInfo(e) {
        var n = e.publishedSheets;
        if (!t.isNullOrUndefined(n)) for (var r = 0; r < n.length; r++) {
          var a = n[r],
              s = a.name,
              o = this.$publishedSheetsInfo._get(s),
              c = g.$createSheetSize(a);

          if (t.isNullOrUndefined(o)) {
            var h = t.referenceEquals(s, e.currentSheetName),
                m = i.ApiEnumConverter.convertSheetType(a.sheetType),
                d = u.$ctor(s, m, r, c, this.get_workbook(), a.repositoryUrl, h, !1, l.noZoneId);
            o = new ne(d), this.$publishedSheetsInfo._add(s, o);
          } else o.$impl.size = c;
        }
      },
      get_$customViews: function get_$customViews() {
        return this.$customViews;
      },
      set_$customViews: function set_$customViews(e) {
        this.$customViews = e;
      },
      get_$updatedCustomViews: function get_$updatedCustomViews() {
        return this.$updatedCustomViews;
      },
      set_$updatedCustomViews: function set_$updatedCustomViews(e) {
        this.$updatedCustomViews = e;
      },
      get_$removedCustomViews: function get_$removedCustomViews() {
        return this.$removedCustomViews;
      },
      set_$removedCustomViews: function set_$removedCustomViews(e) {
        this.$removedCustomViews = e;
      },
      get_$currentCustomView: function get_$currentCustomView() {
        return this.$currentCustomView;
      },
      set_$currentCustomView: function set_$currentCustomView(e) {
        this.$currentCustomView = e;
      },
      $getCustomViewsAsync: function $getCustomViewsAsync() {
        return a._getCustomViewsAsync(this, this.$messagingOptions);
      },
      $showCustomViewAsync: function $showCustomViewAsync(e) {
        if (t.isNullOrUndefined(e) || i._Utility.isNullOrEmpty(e)) return a._showCustomViewAsync(this, this.$messagingOptions, null);

        var n = this.$customViews._get(e);

        if (t.isNullOrUndefined(n)) {
          var r = new i._Deferred();
          return r.reject(i._TableauException.createInvalidCustomViewName(e)), r.get_promise();
        }

        return n._impl._showAsync();
      },
      $removeCustomViewAsync: function $removeCustomViewAsync(e) {
        if (i._Utility.isNullOrEmpty(e)) throw i._TableauException.createNullOrEmptyParameter("customViewName");

        var n = this.$customViews._get(e);

        if (t.isNullOrUndefined(n)) {
          var r = new i._Deferred();
          return r.reject(i._TableauException.createInvalidCustomViewName(e)), r.get_promise();
        }

        return n._impl.$removeAsync();
      },
      $rememberCustomViewAsync: function $rememberCustomViewAsync(e) {
        if (i._Utility.isNullOrEmpty(e)) throw i._TableauException.createInvalidParameter("customViewName");
        return a._saveNewAsync(this, this.$messagingOptions, e);
      },
      $setActiveCustomViewAsDefaultAsync: function $setActiveCustomViewAsDefaultAsync() {
        return a._makeCurrentCustomViewDefaultAsync(this, this.$messagingOptions);
      },
      get_$lastChangedParameterImpl: function get_$lastChangedParameterImpl() {
        return this.$lastChangedParameterImpl;
      },
      set_$lastChangedParameterImpl: function set_$lastChangedParameterImpl(e) {
        this.$lastChangedParameterImpl = e;
      },
      get_$parameters: function get_$parameters() {
        return this.$parameters;
      },
      $getSingleParameterAsync: function $getSingleParameterAsync(e) {
        var n = new i._Deferred();
        if (t.isValue(this.$lastChangedParameterImpl)) return n.resolve(this.$lastChangedParameterImpl.get_$parameter()), n.get_promise();
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.FetchParametersCommand", 0, t.mkdel(this, function (t) {
          var i = g.$findAndCreateParameterImpl(e, t);
          this.$lastChangedParameterImpl = i, n.resolve(i.get_$parameter());
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.$sendCommand(Object).call(this, {}, r), n.get_promise();
      },
      $getParametersAsync: function $getParametersAsync() {
        var e = new i._Deferred(),
            n = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.FetchParametersCommand", 0, t.mkdel(this, function (t) {
          this.$parameters = g.$processParameters(t), e.resolve(this.get_$parameters()._toApiCollection());
        }), function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.$sendCommand(Object).call(this, {}, n), e.get_promise();
      },
      $changeParameterValueAsync: function $changeParameterValueAsync(e, n) {
        var r = new i._Deferred(),
            a = null;

        if (t.isValue(this.$parameters)) {
          if (t.isNullOrUndefined(this.$parameters._get(e))) return r.reject(i._TableauException.createInvalidParameter(e)), r.get_promise();
          if (a = this.$parameters._get(e)._impl, t.isNullOrUndefined(a)) return r.reject(i._TableauException.createInvalidParameter(e)), r.get_promise();
        }

        var s = {};

        if (s["api.setParameterName"] = t.isValue(this.$parameters) ? a.get_$name() : e, t.isValue(n) && i._Utility.isDate(n)) {
          var o = t.cast(n, t.JsDate),
              l = i._Utility.serializeDateForServer(o);

          s["api.setParameterValue"] = l;
        } else s["api.setParameterValue"] = t.isValue(n) ? n.toString() : null;

        this.$lastChangedParameterImpl = null;
        var u = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.SetParameterValueCommand", 0, t.mkdel(this, function (n) {
          if (t.isNullOrUndefined(n)) r.reject(i._TableauException.create("serverError", "server error"));else if (n.isValidPresModel) {
            var a = new C(n);
            this.$lastChangedParameterImpl = a, r.resolve(a.get_$parameter());
          } else r.reject(i._TableauException.createInvalidParameter(e));
        }), function (t, n) {
          r.reject(i._TableauException.createInvalidParameter(e));
        });
        return this.$sendCommand(Object).call(this, s, u), r.get_promise();
      }
    }, {
      $createDashboardZones: function $createDashboardZones(e) {
        e = t.coalesce(e, []);

        for (var n = [], r = 0; r < e.length; r++) {
          var a = e[r],
              s = i.ApiEnumConverter.convertDashboardObjectType(a.zoneType),
              o = i.Size.$ctor(a.width, a.height),
              l = i.Point.$ctor(a.x, a.y),
              u = {
            name: a.name,
            objectType: s,
            position: l,
            size: o,
            zoneId: a.zoneId
          };
          n.push(u);
        }

        return n;
      },
      $extractSheetName: function $extractSheetName(e) {
        if (t.isNullOrUndefined(e)) return null;
        if (i._Utility.isString(e)) return e;
        var n = t.safeCast(e, ie);
        if (t.isValue(n)) return n.getName();
        var r = t.safeCast(e, ne);
        return t.isValue(r) ? r.getName() : null;
      },
      $createSheetSize: function $createSheetSize(e) {
        return t.isNullOrUndefined(e) ? i.SheetSizeFactory.createAutomatic() : i.SheetSizeFactory.fromSizeConstraints(e.sizeConstraints);
      },
      $processParameters: function $processParameters(e) {
        for (var t = new i._Collection(), n = 0; n < e.parameters.length; n++) {
          var r = e.parameters[n],
              a = new C(r);

          t._add(a.get_$name(), a.get_$parameter());
        }

        return t;
      },
      $findAndCreateParameterImpl: function $findAndCreateParameterImpl(e, i) {
        for (var n = 0; n < i.parameters.length; n++) {
          var r = i.parameters[n];
          if (t.referenceEquals(r.name, e)) return new C(r);
        }

        return null;
      }
    }),
        $ = e.tab._WorksheetImpl = t.mkType(n, "tab._WorksheetImpl", function (e, t, n, r) {
      this.$worksheet = null, this.$parentDashboardImpl = null, this.$getDataCommandsBuilder = new i.GetDataCommandsBuilder(), this.$filterCommandsBuilder = new i.FilterCommandsBuilder(), this.$sharedUtils = new i.SharedUtils(), this.$filters = new i._Collection(), this.$selectedMarks = new i._Collection(), this.highlightedMarks = null, l.call(this, e, t, n), this.$parentDashboardImpl = r;
    }, {
      get_sheet: function get_sheet() {
        return this.get_worksheet();
      },
      get_worksheet: function get_worksheet() {
        return t.isNullOrUndefined(this.$worksheet) && (this.$worksheet = new me(this)), this.$worksheet;
      },
      get_parentDashboardImpl: function get_parentDashboardImpl() {
        return this.$parentDashboardImpl;
      },
      get_parentDashboard: function get_parentDashboard() {
        return t.isValue(this.$parentDashboardImpl) ? this.$parentDashboardImpl.get_dashboard() : null;
      },
      $getDataSourcesAsync: function $getDataSourcesAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            n = {};
        n["api.worksheetName"] = this.get_name();
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.GetDataSourcesCommand", 0, function (t) {
          var i = o.processDataSourcesForWorksheet(t);
          e.resolve(i._toApiCollection());
        }, function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.sendCommand(Object).call(this, n, r), e.get_promise();
      },
      $getDataSourceAsync: function $getDataSourceAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var n = new i._Deferred(),
            r = {};
        r["api.dataSourceName"] = e, r["api.worksheetName"] = this.get_name();
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.GetDataSourceCommand", 0, function (r) {
          var a = o.processDataSource(r);
          t.isValue(a) ? n.resolve(a.get_dataSource()) : n.reject(i._TableauException.createServerError("Data source '" + e + "' not found"));
        }, function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, r, a), n.get_promise();
      },
      $verifyActiveSheetOrEmbeddedInActiveDashboard: function $verifyActiveSheetOrEmbeddedInActiveDashboard() {
        var e = this.get_isActive(),
            n = t.isValue(this.$parentDashboardImpl) && this.$parentDashboardImpl.get_isActive(),
            r = t.isValue(this.get_parentStoryPointImpl()) && this.get_parentStoryPointImpl().get_parentStoryImpl().get_isActive();
        if (!e && !n && !r) throw i._TableauException.createNotActiveSheet();
      },
      $addVisualIdToCommand: function $addVisualIdToCommand(e) {
        if (t.isValue(this.get_parentStoryPointImpl())) {
          var i = {};
          i.worksheet = this.get_name(), i.dashboard = t.isValue(this.get_parentDashboardImpl()) ? this.$parentDashboardImpl.get_name() : this.get_name(), i.flipboardZoneId = this.get_parentStoryPointImpl().get_containedSheetImpl().get_zoneId(), i.storyboard = this.get_parentStoryPointImpl().get_parentStoryImpl().get_name(), i.storyPointId = this.get_parentStoryPointImpl().get_storyPointId(), e["api.visualId"] = i;
        } else {
          var n = t.isValue(this.get_parentDashboardImpl()) ? this.get_parentDashboardImpl().get_name() : null;
          this.$sharedUtils.addVisualIdForWorksheet(e, this.get_name(), n);
        }
      },
      get__filters: function get__filters() {
        return this.$filters;
      },
      set__filters: function set__filters(e) {
        this.$filters = e;
      },
      $getFilterAsync: function $getFilterAsync(e, n, r) {
        if (!i._Utility.isNullOrEmpty(e) && !i._Utility.isNullOrEmpty(n)) throw i._TableauException.createInternalError("Only fieldName OR fieldCaption is allowed, not both.");
        r = r || new Object();
        var a = new i._Deferred(),
            s = {};
        this.$addVisualIdToCommand(s), !i._Utility.isNullOrEmpty(n) && i._Utility.isNullOrEmpty(e) && (s["api.fieldCaption"] = n), i._Utility.isNullOrEmpty(e) || (s["api.fieldName"] = e), s["api.filterHierarchicalLevels"] = 0, s["api.ignoreDomain"] = r.ignoreDomain || !1, s["api.filterRelevantValuesOnly"] = !!t.isNullOrUndefined(r.relevantValuesOnly) || r.relevantValuesOnly;
        var o = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.GetOneFilterInfoCommand", 0, t.mkdel(this, function (e) {
          var i = $.$filterCommandError(e);

          if (t.isNullOrUndefined(i)) {
            var n = e,
                r = Y.$createFilter(this, n);
            a.resolve(r);
          } else a.reject(i);
        }), function (e, t) {
          a.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, s, o), a.get_promise();
      },
      $getFiltersAsync: function $getFiltersAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard(), e = e || new Object();
        var n = new i._Deferred(),
            r = {};
        this.$addVisualIdToCommand(r), r["api.ignoreDomain"] = e.ignoreDomain || !1, r["api.filterRelevantValuesOnly"] = !!t.isNullOrUndefined(e.relevantValuesOnly) || e.relevantValuesOnly;
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.GetFiltersListCommand", 0, t.mkdel(this, function (e) {
          this.set__filters(Y.processFiltersList(this, e)), n.resolve(this.get__filters()._toApiCollection());
        }), function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, r, a), n.get_promise();
      },
      $applyFilterAsync: function $applyFilterAsync(e, t, i, n) {
        return this.$applyFilterWithValuesInternalAsync(e, t, i, n);
      },
      $clearFilterAsync: function $clearFilterAsync(e) {
        return this.$clearFilterInternalAsync(e);
      },
      $applyRangeFilterAsync: function $applyRangeFilterAsync(e, t) {
        var i = this.$filterCommandsBuilder.normalizeRangeFilterOption(t);
        return this.$applyRangeFilterInternalAsync(e, i);
      },
      $applyRelativeDateFilterAsync: function $applyRelativeDateFilterAsync(e, t) {
        var i = this.$filterCommandsBuilder.normalizeRelativeDateFilterOptions(t);
        return this.$applyRelativeDateFilterInternalAsync(e, i);
      },
      $applyHierarchicalFilterAsync: function $applyHierarchicalFilterAsync(e, n, r, a) {
        if (t.isNullOrUndefined(n) && "all" !== r) throw i._TableauException.createInvalidParameter("values");
        return this.$applyHierarchicalFilterInternalAsync(e, n, r, a);
      },
      $clearFilterInternalAsync: function $clearFilterInternalAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var t = new i._Deferred(),
            n = this.$filterCommandsBuilder.buildClearFilterCommandsParam(e);
        this.$addVisualIdToCommand(n);
        var r = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ClearFilterCommand", e, t);
        return this.sendCommand(Object).call(this, n, r), t.get_promise();
      },
      $applyFilterWithValuesInternalAsync: function $applyFilterWithValuesInternalAsync(e, t, n, r) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var a = new i._Deferred(),
            s = this.$filterCommandsBuilder.buildApplyFiltersCommandParams(e, t, n, r);
        this.$addVisualIdToCommand(s);
        var o = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyCategoricalFilterCommand", e, a);
        return this.sendCommand(Object).call(this, s, o), a.get_promise();
      },
      $applyRangeFilterInternalAsync: function $applyRangeFilterInternalAsync(e, t) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var n = this.$filterCommandsBuilder.buildRangeFilterCommandParams(e, t);
        this.$addVisualIdToCommand(n);
        var r = new i._Deferred(),
            a = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyRangeFilterCommand", e, r);
        return this.sendCommand(Object).call(this, n, a), r.get_promise();
      },
      $applyRelativeDateFilterInternalAsync: function $applyRelativeDateFilterInternalAsync(e, t) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var n = this.$filterCommandsBuilder.buildRelativeDateFilterCommandParams(e, t);
        this.$addVisualIdToCommand(n);
        var r = new i._Deferred(),
            a = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyRelativeDateFilterCommand", e, r);
        return this.sendCommand(Object).call(this, n, a), r.get_promise();
      },
      $applyHierarchicalFilterInternalAsync: function $applyHierarchicalFilterInternalAsync(e, t, n, r) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var a = this.$filterCommandsBuilder.buildHierarchicalFilterCommandParams(e, t, n, r);
        this.$addVisualIdToCommand(a);
        var s = new i._Deferred(),
            o = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyHierarchicalFilterCommand", e, s);
        return this.sendCommand(Object).call(this, a, o), s.get_promise();
      },
      get_selectedMarks: function get_selectedMarks() {
        return this.$selectedMarks;
      },
      set_selectedMarks: function set_selectedMarks(e) {
        this.$selectedMarks = e;
      },
      $clearSelectedMarksAsync: function $clearSelectedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            n = {};
        this.$addVisualIdToCommand(n);
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.ClearSelectedMarksCommand", 0, function (t) {
          e.resolve();
        }, function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.sendCommand(Object).call(this, n, r), e.get_promise();
      },
      $selectMarksAsync: function $selectMarksAsync(e, n, r) {
        return this.$verifyActiveSheetOrEmbeddedInActiveDashboard(), t.isNullOrUndefined(e) && t.isNullOrUndefined(n) ? this.$clearSelectedMarksAsync() : i._Utility.isString(e) && (i._jQueryShim.isArray(n) || i._Utility.isString(n) || !i.PublicEnums.isValidEnum(i.ApiSelectionUpdateType).call(null, n)) ? this.$selectMarksWithFieldNameAndValueAsync(t.cast(e, String), n, r) : i._jQueryShim.isArray(e) ? this.$selectMarksWithMarksArrayAsync(e, t.cast(n, String)) : this.$selectMarksWithMultiDimOptionAsync(e, t.cast(n, String));
      },
      $getSelectedMarksAsync: function $getSelectedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            n = {};
        this.$addVisualIdToCommand(n);
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.FetchSelectedMarksCommand", 0, t.mkdel(this, function (t) {
          this.$selectedMarks = i.MarkImpl.processActiveMarks(t), e.resolve(this.$selectedMarks._toApiCollection());
        }), function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.sendCommand(Object).call(this, n, r), e.get_promise();
      },
      $selectMarksWithFieldNameAndValueAsync: function $selectMarksWithFieldNameAndValueAsync(e, t, i) {
        var n = [],
            r = [],
            a = [],
            s = [],
            o = [],
            l = [];
        return this.$parseMarksParam(n, r, a, s, o, l, e, t), this.$selectMarksWithValuesAsync(null, n, r, a, s, o, l, i);
      },
      $selectMarksWithMultiDimOptionAsync: function $selectMarksWithMultiDimOptionAsync(e, n) {
        var r = e,
            a = [],
            s = [],
            o = [],
            l = [],
            u = [],
            c = [],
            h = new t.ObjectEnumerator(r);

        try {
          for (; h.moveNext();) {
            var m = h.current();
            e.hasOwnProperty(m.key) && (i._jQueryShim.isFunction(r[m.key]) || this.$parseMarksParam(a, s, o, l, u, c, m.key, m.value));
          }
        } finally {
          h.dispose();
        }

        return this.$selectMarksWithValuesAsync(null, a, s, o, l, u, c, n);
      },
      $selectMarksWithMarksArrayAsync: function $selectMarksWithMarksArrayAsync(e, n) {
        for (var r = [], a = [], s = [], o = [], l = [], u = [], c = [], h = 0; h < e.length; h++) {
          var m = e[h];
          if (t.isValue(m.impl.get_tupleId()) && m.impl.get_tupleId() > 0) c.push(m.impl.get_tupleId());else for (var d = m.impl.get_pairs(), p = 0; p < d.get__length(); p++) {
            var f = d.get_item(p);
            f.hasOwnProperty("fieldName") && f.hasOwnProperty("value") && !i._jQueryShim.isFunction(f.fieldName) && !i._jQueryShim.isFunction(f.value) && this.$parseMarksParam(r, a, s, o, l, u, f.fieldName, f.value);
          }
        }

        return this.$selectMarksWithValuesAsync(c, r, a, s, o, l, u, n);
      },
      $parseMarksParam: function $parseMarksParam(e, n, r, a, s, o, l, u) {
        var c = u;
        if ($.$regexHierarchicalFieldName.test(l)) this.$addToParamLists(r, a, l, u);else if (t.isValue(c.min) || t.isValue(c.max)) {
          var h = new Object();
          if (t.isValue(c.min)) if (i._Utility.isDate(c.min)) {
            var m = t.cast(c.min, t.JsDate);
            if (!i._Utility.isDateValid(m)) throw i._TableauException.createInvalidDateParameter("options.min");
            h.min = i._Utility.serializeDateForServer(m);
          } else h.min = c.min;
          if (t.isValue(c.max)) if (i._Utility.isDate(c.max)) {
            var d = t.cast(c.max, t.JsDate);
            if (!i._Utility.isDateValid(d)) throw i._TableauException.createInvalidDateParameter("options.max");
            h.max = i._Utility.serializeDateForServer(d);
          } else h.max = c.max;

          if (t.isValue(c.nullOption)) {
            var p = i.PublicEnums.normalizeEnum(i.ApiNullOption).call(null, c.nullOption, "options.nullOption");
            h.nullOption = p;
          } else h.nullOption = "allValues";

          var f = JSON.stringify(h);
          this.$addToParamLists(s, o, l, f);
        } else this.$addToParamLists(e, n, l, u);
      },
      $addToParamLists: function $addToParamLists(e, n, r, a) {
        var s = [];
        if (i._jQueryShim.isArray(a)) for (var o = t.cast(a, Array), l = 0; l < o.length; l++) {
          s.push(o[l].toString());
        } else s.push(a.toString());
        n.push(s), e.push(r);
      },
      $selectMarksWithValuesAsync: function $selectMarksWithValuesAsync(e, n, r, a, s, o, l, u) {
        var c = {};

        if (this.$addVisualIdToCommand(c), u = i.PublicEnums.normalizeEnum(i.ApiSelectionUpdateType).call(null, u, "updateType"), c["api.filterUpdateType"] = u, i._Utility.isNullOrEmpty(e) || (c["api.tupleIds"] = JSON.stringify(e)), !i._Utility.isNullOrEmpty(n) && !i._Utility.isNullOrEmpty(r)) {
          c["api.categoricalFieldCaption"] = JSON.stringify(n);

          for (var h = [], m = 0; m < r.length; m++) {
            var d = JSON.stringify(r[m]);
            h.push(d);
          }

          c["api.categoricalMarkValues"] = JSON.stringify(h);
        }

        if (!i._Utility.isNullOrEmpty(a) && !i._Utility.isNullOrEmpty(s)) {
          c["api.hierarchicalFieldCaption"] = JSON.stringify(a);

          for (var p = [], f = 0; f < s.length; f++) {
            var g = JSON.stringify(s[f]);
            p.push(g);
          }

          c["api.hierarchicalMarkValues"] = JSON.stringify(p);
        }

        if (!i._Utility.isNullOrEmpty(o) && !i._Utility.isNullOrEmpty(l)) {
          c["api.rangeFieldCaption"] = JSON.stringify(o);

          for (var v = [], y = 0; y < l.length; y++) {
            var _ = JSON.stringify(l[y]);

            v.push(_);
          }

          c["api.rangeMarkValues"] = JSON.stringify(v);
        }

        if (i._Utility.isNullOrEmpty(c["api.tupleIds"]) && i._Utility.isNullOrEmpty(c["api.categoricalFieldCaption"]) && i._Utility.isNullOrEmpty(c["api.hierarchicalFieldCaption"]) && i._Utility.isNullOrEmpty(c["api.rangeFieldCaption"])) throw i._TableauException.createInvalidParameter("fieldNameOrFieldValuesMap");
        var w = new i._Deferred(),
            b = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.SelectMarksCommand", 0, function (e) {
          var i = $.$createSelectionCommandError(e);
          t.isNullOrUndefined(i) ? w.resolve() : w.reject(i);
        }, function (e, t) {
          w.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, c, b), w.get_promise();
      },
      $getSummaryDataAsync: function $getSummaryDataAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var t = new i._Deferred(),
            n = this.$getDataCommandsBuilder.getSummaryDataCommandParams(e);
        this.$addVisualIdToCommand(n);
        var r = this.$getDataCommandsBuilder.getSummaryDataResponseHandler(t);
        return this.sendCommand(Object).call(this, n, r), t.get_promise();
      },
      $getUnderlyingDataAsync: function $getUnderlyingDataAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var t = new i._Deferred(),
            n = this.$getDataCommandsBuilder.getUnderlyingDataCommandParams(e);
        this.$addVisualIdToCommand(n);
        var r = this.$getDataCommandsBuilder.getUnderlyingDataResponseHandler(t);
        return this.sendCommand(Object).call(this, n, r), t.get_promise();
      },
      $getUnderlyingTablesAsync: function $getUnderlyingTablesAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            t = this.$getDataCommandsBuilder.getUnderlyingTablesCommandParams();
        this.$addVisualIdToCommand(t);
        var n = this.$getDataCommandsBuilder.getUnderlyingTablesResponseHandler(e);
        return this.sendCommand(Object).call(this, t, n), e.get_promise();
      },
      $getUnderlyingTableDataAsync: function $getUnderlyingTableDataAsync(e, t) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var n = new i._Deferred(),
            r = this.$getDataCommandsBuilder.getUnderlyingTableDataCommandParams(e, t);
        this.$addVisualIdToCommand(r);
        var a = this.$getDataCommandsBuilder.getUnderlyingTableDataResponseHandler(n);
        return this.sendCommand(Object).call(this, r, a), n.get_promise();
      },
      $clearHighlightedMarksAsync: function $clearHighlightedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            n = {};
        this.$addVisualIdToCommand(n);
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.ClearHighlightedMarksCommand", 0, function (t) {
          e.resolve();
        }, function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.sendCommand(Object).call(this, n, r), e.get_promise();
      },
      $highlightMarksAsync: function $highlightMarksAsync(e, n) {
        i._Param.verifyString(e, "fieldName"), this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var r = new i._Deferred(),
            a = {};
        a["api.fieldCaption"] = e, a["api.ObjectTextIDs"] = n, this.$addVisualIdToCommand(a);
        var s = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.HighlightMarksCommand", 0, function (e) {
          r.resolve();
        }, function (e, t) {
          r.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, a, s), r.get_promise();
      },
      $highlightMarksByPatternMatchAsync: function $highlightMarksByPatternMatchAsync(e, n) {
        i._Param.verifyString(e, "fieldName"), i._Param.verifyString(n, "patternMatch"), this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var r = new i._Deferred(),
            a = {
          "api.filterUpdateType": "replace"
        };
        a["api.fieldCaption"] = e, a["api.Pattern"] = n, this.$addVisualIdToCommand(a);
        var s = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.HighlightMarksByPatternMatch", 0, function (e) {
          r.resolve();
        }, function (e, t) {
          r.reject(i._TableauException.createServerError(t));
        });
        return this.sendCommand(Object).call(this, a, s), r.get_promise();
      },
      $getHighlightedMarksAsync: function $getHighlightedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
        var e = new i._Deferred(),
            n = {};
        this.$addVisualIdToCommand(n);
        var r = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.FetchHighlightedMarksCommand", 0, t.mkdel(this, function (t) {
          this.highlightedMarks = i.MarkImpl.processActiveMarks(t), e.resolve(this.highlightedMarks._toApiCollection());
        }), function (t, n) {
          e.reject(i._TableauException.createServerError(n));
        });
        return this.sendCommand(Object).call(this, n, r), e.get_promise();
      }
    }, {
      $filterCommandError: function $filterCommandError(e) {
        var n = e;

        if (t.isValue(n) && t.isValue(n.errorCode)) {
          var r = t.isValue(n.additionalInformation) ? n.additionalInformation.toString() : "";

          switch (n.errorCode) {
            case "invalidFilterFieldName":
              return i._TableauException.create("invalidFilterFieldName", r);

            case "invalidFilterFieldValue":
              return i._TableauException.create("invalidFilterFieldValue", r);

            case "invalidAggregationFieldName":
              return i._TableauException.createInvalidAggregationFieldName(r);

            default:
              return i._TableauException.createServerError(r);
          }
        }

        return null;
      },
      $createSelectionCommandError: function $createSelectionCommandError(e) {
        var n = e;

        if (t.isValue(n) && t.isValue(n.errorCode)) {
          var r = t.isValue(n.additionalInformation) ? n.additionalInformation.toString() : "";

          switch (n.errorCode) {
            case "invalidSelectionFieldName":
              return i._TableauException.create("invalidSelectionFieldName", r);

            case "invalidSelectionValue":
              return i._TableauException.create("invalidSelectionValue", r);

            case "invalidSelectionDate":
              return i._TableauException.create("invalidSelectionDate", r);
          }
        }

        return null;
      }
    }),
        v = t.mkType(n, "tab.$CustomViewEventContext", function (e, t) {
      this.$customViewImpl = null, T.call(this, e, null), this.$customViewImpl = t;
    }, {
      get__customViewImpl: function get__customViewImpl() {
        return this.$customViewImpl;
      }
    }),
        y = t.mkType(n, "tab.$DashboardZoneInfo", null, null, {
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        _ = t.mkType(n, "tab.$FilterEventContext", function (e, t, i, n) {
      this.$fieldFieldName = null, this.$filterCaption = null, T.call(this, e, t), this.$fieldFieldName = i, this.$filterCaption = n;
    }, {
      get__filterFieldName: function get__filterFieldName() {
        return this.$fieldFieldName;
      },
      get_$filterCaption: function get_$filterCaption() {
        return this.$filterCaption;
      }
    }),
        w = t.mkType(n, "tab.$HighlightEventContext", function (e, t) {
      T.call(this, e, t);
    }),
        b = t.mkType(n, "tab.$MarksEventContext", function (e, t) {
      T.call(this, e, t);
    }),
        S = t.mkType(n, "tab.$ParameterEventContext", function (e, t) {
      this.$parameterName = null, T.call(this, e, null), this.$parameterName = t;
    }, {
      get__parameterName: function get__parameterName() {
        return this.$parameterName;
      }
    }),
        C = t.mkType(n, "tab.$ParameterImpl", function (e) {
      if (this.$parameter = null, this.$name = null, this.$currentValue = null, this.$dataType = null, this.$allowableValuesType = null, this.$allowableValues = null, this.$minValue = null, this.$maxValue = null, this.$stepSize = null, this.$dateStepPeriod = null, this.$name = e.name, this.$currentValue = i._Utility.getDataValue(e.currentValue), this.$dataType = i.ApiEnumConverter.convertParameterDataType(e.dataType), this.$allowableValuesType = i.ApiEnumConverter.convertParameterAllowableValuesType(e.allowableValuesType), t.isValue(e.allowableValues) && "list" === this.$allowableValuesType) {
        this.$allowableValues = [];

        for (var n = 0; n < e.allowableValues.length; n++) {
          var r = e.allowableValues[n];
          this.$allowableValues.push(i._Utility.getDataValue(r));
        }
      }

      "range" === this.$allowableValuesType && (this.$minValue = i._Utility.getDataValue(e.minValue), this.$maxValue = i._Utility.getDataValue(e.maxValue), this.$stepSize = e.stepSize, ("date" === this.$dataType || "datetime" === this.$dataType) && t.isValue(this.$stepSize) && t.isValue(e.dateStepPeriod) && (this.$dateStepPeriod = i.ApiEnumConverter.convertPeriodType(e.dateStepPeriod)));
    }, {
      get_$parameter: function get_$parameter() {
        return t.isNullOrUndefined(this.$parameter) && (this.$parameter = new Z(this)), this.$parameter;
      },
      get_$name: function get_$name() {
        return this.$name;
      },
      get_$currentValue: function get_$currentValue() {
        return this.$currentValue;
      },
      get_$dataType: function get_$dataType() {
        return this.$dataType;
      },
      get_$allowableValuesType: function get_$allowableValuesType() {
        return this.$allowableValuesType;
      },
      get_$allowableValues: function get_$allowableValues() {
        return this.$allowableValues;
      },
      get_$minValue: function get_$minValue() {
        return this.$minValue;
      },
      get_$maxValue: function get_$maxValue() {
        return this.$maxValue;
      },
      get_$stepSize: function get_$stepSize() {
        return this.$stepSize;
      },
      get_$dateStepPeriod: function get_$dateStepPeriod() {
        return this.$dateStepPeriod;
      }
    }),
        I = e.tab.CustomViewEvent = t.mkType(n, "tab.CustomViewEvent", function (e, t, i) {
      this.$context = null, P.call(this, e, t), this.$context = new v(t._impl.get__workbookImpl(), i);
    }, {
      getCustomViewAsync: function getCustomViewAsync() {
        var e = new i._Deferred(),
            n = null;
        return t.isValue(this.$context.get__customViewImpl()) && (n = this.$context.get__customViewImpl().get_$customView()), e.resolve(n), e.get_promise();
      }
    }),
        T = e.tab.EventContext = t.mkType(n, "tab.EventContext", function (e, t) {
      this.$workbookImpl = null, this.$worksheetImpl = null, this.$workbookImpl = e, this.$worksheetImpl = t;
    }, {
      get__workbookImpl: function get__workbookImpl() {
        return this.$workbookImpl;
      },
      get__worksheetImpl: function get__worksheetImpl() {
        return this.$worksheetImpl;
      }
    }),
        E = e.tab.FilterEvent = t.mkType(n, "tab.FilterEvent", function (e, t, i, n, r) {
      this.$filterCaption = null, this.$context = null, W.call(this, e, t, i), this.$filterCaption = r, this.$context = new _(t._impl.get__workbookImpl(), i, n, r);
    }, {
      getFieldName: function getFieldName() {
        return this.$filterCaption;
      },
      getFilterAsync: function getFilterAsync() {
        return this.$context.get__worksheetImpl().$getFilterAsync(this.$context.get__filterFieldName(), null, null);
      }
    }),
        k = e.tab.FirstVizSizeKnownEvent = t.mkType(n, "tab.FirstVizSizeKnownEvent", function (e, t, i) {
      this.$vizSize = null, P.call(this, e, t), this.$vizSize = i;
    }, {
      getVizSize: function getVizSize() {
        return this.$vizSize;
      }
    }),
        A = e.tab.HighlightEvent = t.mkType(n, "tab.HighlightEvent", function (e, t, i) {
      this.$context = null, W.call(this, e, t, i), this.$context = new w(t._impl.get__workbookImpl(), i);
    }, {
      getHighlightedMarksAsync: function getHighlightedMarksAsync() {
        return this.$context.get__worksheetImpl().$getHighlightedMarksAsync();
      }
    }),
        V = e.tab.IJsApiMessageHandler = t.mkType(n, "tab.IJsApiMessageHandler"),
        N = e.tab.JsApiMessageRouter = t.mkType(n, "tab.JsApiMessageRouter", function () {
      this.$customViewLoadCallbacks = {}, this.$crossDomainMessager = null;
      var e = t.mkdel(this, function (e, i) {
        this.$handleLegacyNotifications(e, t.cast(i, V));
      });
      this.$crossDomainMessager = new i.CrossDomainMessager(e);
    }, {
      registerHandler: function registerHandler(e) {
        this.$crossDomainMessager.registerHandler(e), e.add_customViewsListLoad(t.mkdel(this, this.$handleCustomViewsListLoad));
      },
      unregisterHandler: function unregisterHandler(e) {
        this.$crossDomainMessager.unregisterHandler(e), e.remove_customViewsListLoad(t.mkdel(this, this.$handleCustomViewsListLoad));
      },
      sendCommand: function sendCommand(e) {
        return function (i, n, r) {
          if (this.$crossDomainMessager.sendCommand(e).call(this.$crossDomainMessager, i, n, r), "api.ShowCustomViewCommand" === r.get_commandName()) {
            var a = this.$customViewLoadCallbacks[i.get_hostId()];
            t.isNullOrUndefined(a) && (a = [], this.$customViewLoadCallbacks[i.get_hostId()] = a), a.push(r);
          }
        };
      },
      $handleCustomViewsListLoad: function $handleCustomViewsListLoad(e) {
        var i = e.get_hostId(),
            n = this.$customViewLoadCallbacks[i];

        if (!t.isNullOrUndefined(n)) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r];
            t.staticEquals(a.get_successCallback(), null) || a.get_successCallback()(null);
          }

          delete this.$customViewLoadCallbacks[i];
        }
      },
      $handleLegacyNotifications: function $handleLegacyNotifications(e, i) {
        if ("layoutInfoReq" === e.get_name()) p.$sendVisibleRects();else if (t.isValue(i)) if ("tableau.completed" === e.get_name() || "completed" === e.get_name()) i.handleVizLoad();else if ("tableau.listening" === e.get_name()) i.handleVizListening();else if ("sf?" === e.get_name() && t.count(e.get_parameters()) > 0) {
          var n = t.getItem(e.get_parameters(), 0);
          i.sendScaleFactor(n);
        }
      }
    }),
        O = e.tab.JsApiMessagingOptions = t.mkType(n, "tab.JsApiMessagingOptions", function (e, t) {
      this.$router = null, this.$handler = null, i._Param.verifyValue(e, "router"), i._Param.verifyValue(t, "handler"), this.$router = e, this.$handler = t;
    }, {
      get_handler: function get_handler() {
        return this.$handler;
      },
      get_router: function get_router() {
        return this.$router;
      },
      sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$router.sendCommand(e).call(this.$router, this.$handler, t, i);
        };
      },
      dispose: function dispose() {
        this.$router.unregisterHandler(this.$handler);
      }
    }),
        F = e.tab.MarksEvent = t.mkType(n, "tab.MarksEvent", function (e, t, i) {
      this.$context = null, W.call(this, e, t, i), this.$context = new b(t._impl.get__workbookImpl(), i);
    }, {
      getMarksAsync: function getMarksAsync() {
        var e = this.$context.get__worksheetImpl();
        return t.isValue(e.get_selectedMarks()) ? new i._Deferred().resolve(e.get_selectedMarks()._toApiCollection()) : e.$getSelectedMarksAsync();
      }
    }),
        D = e.tab.ParameterEvent = t.mkType(n, "tab.ParameterEvent", function (e, t, i) {
      this.$context = null, P.call(this, e, t), this.$context = new S(t._impl.get__workbookImpl(), i);
    }, {
      getParameterName: function getParameterName() {
        return this.$context.get__parameterName();
      },
      getParameterAsync: function getParameterAsync() {
        return this.$context.get__workbookImpl().$getSingleParameterAsync(this.$context.get__parameterName());
      }
    }),
        R = e.tab.StoryPointInfoImplUtil = t.mkType(n, "tab.StoryPointInfoImplUtil", null, null, {
      clone: function clone(e) {
        return m.$ctor(e.caption, e.index, e.storyPointId, e.isActive, e.isUpdated, e.parentStoryImpl);
      }
    }),
        x = e.tab.StoryPointSwitchEvent = t.mkType(n, "tab.StoryPointSwitchEvent", function (e, t, i, n) {
      this.$oldStoryPointInfo = null, this.$newStoryPoint = null, P.call(this, e, t), this.$oldStoryPointInfo = i, this.$newStoryPoint = n;
    }, {
      getOldStoryPointInfo: function getOldStoryPointInfo() {
        return this.$oldStoryPointInfo;
      },
      getNewStoryPoint: function getNewStoryPoint() {
        return this.$newStoryPoint;
      }
    }),
        P = e.tab.TableauEvent = t.mkType(n, "tab.TableauEvent", function (e, t) {
      this.$viz = null, this.$eventName = null, this.$viz = t, this.$eventName = e;
    }, {
      getViz: function getViz() {
        return this.$viz;
      },
      getEventName: function getEventName() {
        return this.$eventName;
      }
    }),
        z = e.tab.TabSwitchEvent = t.mkType(n, "tab.TabSwitchEvent", function (e, t, i, n) {
      this.$oldName = null, this.$newName = null, P.call(this, e, t), this.$oldName = i, this.$newName = n;
    }, {
      getOldSheetName: function getOldSheetName() {
        return this.$oldName;
      },
      getNewSheetName: function getNewSheetName() {
        return this.$newName;
      }
    }),
        U = e.tab.ToolbarStateEvent = t.mkType(n, "tab.ToolbarStateEvent", function (e, t, i) {
      this.$toolbarStateImpl = null, P.call(this, e, t), this.$toolbarStateImpl = i;
    }, {
      getToolbarState: function getToolbarState() {
        return this.$toolbarStateImpl.get_toolbarState();
      }
    }),
        M = e.tab.UrlActionEvent = t.mkType(n, "tab.UrlActionEvent", function (e, t, i, n) {
      this.$url = null, this.$target = null, P.call(this, e, t), this.$url = i, this.$target = n;
    }, {
      getUrl: function getUrl() {
        return this.$url;
      },
      getTarget: function getTarget() {
        return this.$target;
      }
    }),
        H = e.tab.VizImpl = t.mkType(n, "tab.VizImpl", function (e, n, r, a, s) {
      if (this.$workbookTabSwitchHandler = null, this.$viz = null, this.$iframe = null, this.$staticImage = null, this.$parameters = null, this.$initialAvailableSize = null, this.$instanceId = null, this.$workbookImpl = null, this.$onFirstInteractiveCallback = null, this.$onFirstVizSizeKnownCallback = null, this.$onFirstInteractiveAlreadyCalled = !1, this.$areTabsHidden = !1, this.$isToolbarHidden = !1, this.$areAutomaticUpdatesPaused = !1, this.$messagingOptions = null, this.$vizSize = null, this.$windowResizeHandler = null, this.$initializingWorkbookImpl = !1, this.$1$CustomViewsListLoadField = null, this.$1$StateReadyForQueryField = null, this.$1$MarksSelectionField = null, this.$1$MarksHighlightField = null, this.$1$FilterChangeField = null, this.$1$ParameterValueChangeField = null, this.$1$CustomViewLoadField = null, this.$1$CustomViewSaveField = null, this.$1$CustomViewRemoveField = null, this.$1$CustomViewSetDefaultField = null, this.$1$TabSwitchField = null, this.$1$ToolbarStateChangeField = null, this.$1$StoryPointSwitchField = null, this.$1$VizResizeField = null, this.$1$UrlActionField = null, !i._Utility.hasWindowPostMessage() || !i._Utility.hasJsonParse()) throw i._TableauException.createBrowserNotCapable();
      this.$messagingOptions = new O(e, this), this.$viz = n, (t.isNullOrUndefined(r) || 1 !== r.nodeType) && (r = document.body), this.$parameters = new f(r, a, s), t.isValue(s) && (this.$onFirstInteractiveCallback = s.onFirstInteractive, this.$onFirstVizSizeKnownCallback = s.onFirstVizSizeKnown);
    }, {
      add_customViewsListLoad: function add_customViewsListLoad(e) {
        this.$1$CustomViewsListLoadField = t.delegateCombine(this.$1$CustomViewsListLoadField, e);
      },
      remove_customViewsListLoad: function remove_customViewsListLoad(e) {
        this.$1$CustomViewsListLoadField = t.delegateRemove(this.$1$CustomViewsListLoadField, e);
      },
      add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateCombine(this.$1$StateReadyForQueryField, e);
      },
      remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateRemove(this.$1$StateReadyForQueryField, e);
      },
      add_$marksSelection: function add_$marksSelection(e) {
        this.$1$MarksSelectionField = t.delegateCombine(this.$1$MarksSelectionField, e);
      },
      remove_$marksSelection: function remove_$marksSelection(e) {
        this.$1$MarksSelectionField = t.delegateRemove(this.$1$MarksSelectionField, e);
      },
      add_$marksHighlight: function add_$marksHighlight(e) {
        this.$1$MarksHighlightField = t.delegateCombine(this.$1$MarksHighlightField, e);
      },
      remove_$marksHighlight: function remove_$marksHighlight(e) {
        this.$1$MarksHighlightField = t.delegateRemove(this.$1$MarksHighlightField, e);
      },
      add_$filterChange: function add_$filterChange(e) {
        this.$1$FilterChangeField = t.delegateCombine(this.$1$FilterChangeField, e);
      },
      remove_$filterChange: function remove_$filterChange(e) {
        this.$1$FilterChangeField = t.delegateRemove(this.$1$FilterChangeField, e);
      },
      add_$parameterValueChange: function add_$parameterValueChange(e) {
        this.$1$ParameterValueChangeField = t.delegateCombine(this.$1$ParameterValueChangeField, e);
      },
      remove_$parameterValueChange: function remove_$parameterValueChange(e) {
        this.$1$ParameterValueChangeField = t.delegateRemove(this.$1$ParameterValueChangeField, e);
      },
      add_$customViewLoad: function add_$customViewLoad(e) {
        this.$1$CustomViewLoadField = t.delegateCombine(this.$1$CustomViewLoadField, e);
      },
      remove_$customViewLoad: function remove_$customViewLoad(e) {
        this.$1$CustomViewLoadField = t.delegateRemove(this.$1$CustomViewLoadField, e);
      },
      add_$customViewSave: function add_$customViewSave(e) {
        this.$1$CustomViewSaveField = t.delegateCombine(this.$1$CustomViewSaveField, e);
      },
      remove_$customViewSave: function remove_$customViewSave(e) {
        this.$1$CustomViewSaveField = t.delegateRemove(this.$1$CustomViewSaveField, e);
      },
      add_$customViewRemove: function add_$customViewRemove(e) {
        this.$1$CustomViewRemoveField = t.delegateCombine(this.$1$CustomViewRemoveField, e);
      },
      remove_$customViewRemove: function remove_$customViewRemove(e) {
        this.$1$CustomViewRemoveField = t.delegateRemove(this.$1$CustomViewRemoveField, e);
      },
      add_$customViewSetDefault: function add_$customViewSetDefault(e) {
        this.$1$CustomViewSetDefaultField = t.delegateCombine(this.$1$CustomViewSetDefaultField, e);
      },
      remove_$customViewSetDefault: function remove_$customViewSetDefault(e) {
        this.$1$CustomViewSetDefaultField = t.delegateRemove(this.$1$CustomViewSetDefaultField, e);
      },
      add_$tabSwitch: function add_$tabSwitch(e) {
        this.$1$TabSwitchField = t.delegateCombine(this.$1$TabSwitchField, e);
      },
      remove_$tabSwitch: function remove_$tabSwitch(e) {
        this.$1$TabSwitchField = t.delegateRemove(this.$1$TabSwitchField, e);
      },
      add_$toolbarStateChange: function add_$toolbarStateChange(e) {
        this.$1$ToolbarStateChangeField = t.delegateCombine(this.$1$ToolbarStateChangeField, e);
      },
      remove_$toolbarStateChange: function remove_$toolbarStateChange(e) {
        this.$1$ToolbarStateChangeField = t.delegateRemove(this.$1$ToolbarStateChangeField, e);
      },
      add_$storyPointSwitch: function add_$storyPointSwitch(e) {
        this.$1$StoryPointSwitchField = t.delegateCombine(this.$1$StoryPointSwitchField, e);
      },
      remove_$storyPointSwitch: function remove_$storyPointSwitch(e) {
        this.$1$StoryPointSwitchField = t.delegateRemove(this.$1$StoryPointSwitchField, e);
      },
      add_$vizResize: function add_$vizResize(e) {
        this.$1$VizResizeField = t.delegateCombine(this.$1$VizResizeField, e);
      },
      remove_$vizResize: function remove_$vizResize(e) {
        this.$1$VizResizeField = t.delegateRemove(this.$1$VizResizeField, e);
      },
      add_$urlAction: function add_$urlAction(e) {
        this.$1$UrlActionField = t.delegateCombine(this.$1$UrlActionField, e);
      },
      remove_$urlAction: function remove_$urlAction(e) {
        this.$1$UrlActionField = t.delegateRemove(this.$1$UrlActionField, e);
      },
      get_hostId: function get_hostId() {
        return this.$parameters.hostId;
      },
      set_hostId: function set_hostId(e) {
        this.$parameters.hostId = e;
      },
      get_iframe: function get_iframe() {
        return this.$iframe;
      },
      get_instanceId: function get_instanceId() {
        return this.$instanceId;
      },
      set_instanceId: function set_instanceId(e) {
        this.$instanceId = e;
      },
      get_$viz: function get_$viz() {
        return this.$viz;
      },
      get_$areTabsHidden: function get_$areTabsHidden() {
        return this.$areTabsHidden;
      },
      get_$isToolbarHidden: function get_$isToolbarHidden() {
        return this.$isToolbarHidden;
      },
      get_$isHidden: function get_$isHidden() {
        return "none" === this.$iframe.style.display;
      },
      get_$parentElement: function get_$parentElement() {
        return this.$parameters.parentElement;
      },
      get_$url: function get_$url() {
        return this.$parameters.get_baseUrl();
      },
      get_$workbook: function get_$workbook() {
        return this.$workbookImpl.get_workbook();
      },
      get__workbookImpl: function get__workbookImpl() {
        return this.$workbookImpl;
      },
      get_$areAutomaticUpdatesPaused: function get_$areAutomaticUpdatesPaused() {
        return this.$areAutomaticUpdatesPaused;
      },
      get_$vizSize: function get_$vizSize() {
        return this.$vizSize;
      },
      getCurrentUrlAsync: function getCurrentUrlAsync() {
        var e = new i._Deferred(),
            n = new (t.makeGenericType(i.CommandReturnHandler$1, [String]))("api.GetCurrentUrlCommand", 0, function (t) {
          e.resolve(t);
        }, function (t, n) {
          e.reject(i._TableauException.createInternalError(n));
        });
        return this._sendCommand(String).call(this, null, n), e.get_promise();
      },
      handleVizListening: function handleVizListening() {
        this.$enableVisibleRectCommunication();
      },
      handleVizLoad: function handleVizLoad() {
        t.isNullOrUndefined(this.$vizSize) && (this.$setFrameSize(this.$initialAvailableSize.width + "px", this.$initialAvailableSize.height + "px"), this.$show()), t.isValue(this.$staticImage) && (this.$staticImage.style.display = "none"), t.isNullOrUndefined(this.$workbookImpl) ? this.$workbookImpl = new g(this, this.$messagingOptions, t.mkdel(this, function () {
          this.$onWorkbookInteractive(null);
        })) : this.$initializingWorkbookImpl || this.$workbookImpl._update(t.mkdel(this, function () {
          this.$onWorkbookInteractive(null);
        })), this.sendScaleFactor("-1");
      },
      $calculateFrameSize: function $calculateFrameSize(e) {
        var t,
            n,
            r,
            a,
            s = this.$vizSize.chromeHeight,
            o = this.$vizSize.sheetSize,
            l = 0,
            u = 0;
        if ("exactly" === o.behavior) l = o.maxSize.width, u = o.maxSize.height + s;else switch (o.behavior) {
          case "range":
            t = o.minSize.width, n = o.maxSize.width, r = o.minSize.height + s, a = o.maxSize.height + s, l = Math.max(t, Math.min(n, e.width)), u = Math.max(r, Math.min(a, e.height));
            break;

          case "atleast":
            t = o.minSize.width, r = o.minSize.height + s, l = Math.max(t, e.width), u = Math.max(r, e.height);
            break;

          case "atmost":
            n = o.maxSize.width, a = o.maxSize.height + s, l = Math.min(n, e.width), u = Math.min(a, e.height);
            break;

          case "automatic":
            l = e.width, u = Math.max(e.height, s);
            break;

          default:
            throw i._TableauException.createInternalError("Unknown SheetSizeBehavior for viz: " + o.behavior.toString());
        }
        return i.Size.$ctor(l, u);
      },
      $getNewFrameSize: function $getNewFrameSize() {
        var e;
        return t.isValue(this.$initialAvailableSize) ? (e = this.$initialAvailableSize, this.$initialAvailableSize = null) : e = i._Utility.computeContentSize(this.get_$parentElement()), this.$raiseVizResizeEvent(e), this.$calculateFrameSize(e);
      },
      $refreshSize: function $refreshSize() {
        if (t.isValue(this.$vizSize)) {
          var e = this.$getNewFrameSize();

          if (e.height !== this.$vizSize.chromeHeight) {
            this.$setFrameSize(e.width + "px", e.height + "px");

            for (var n = 0; n < 10; n++) {
              var r = this.$getNewFrameSize();
              if (t.referenceEquals(JSON.stringify(e), JSON.stringify(r))) return;
              e = r, this.$setFrameSize(e.width + "px", e.height + "px");
            }

            throw i._TableauException.create("maxVizResizeAttempts", "Viz resize limit hit. The calculated iframe size did not stabilize after 10 resizes.");
          }
        }
      },
      handleEventNotification: function handleEventNotification(e, t) {
        var n = i._ApiServerNotification.deserialize(t);

        switch (e) {
          case "api.FirstVizSizeKnownEvent":
            this.$handleFirstVizSizeKnownEvent(n);
            break;

          case "api.VizInteractiveEvent":
            this.$handleVizInteractiveEvent(n);
            break;

          case "api.MarksSelectionChangedEvent":
            this.$handleMarksSelectionChangedEvent(n);
            break;

          case "api.MarksHighlightChangedEvent":
            this.$handleMarksHighlightChangedEvent(n);
            break;

          case "api.FilterChangedEvent":
            this.$handleFilterChangedEvent(n);
            break;

          case "api.ParameterChangedEvent":
            this.$handleParameterChangedEvent(n);
            break;

          case "api.CustomViewsListLoadedEvent":
            this.$handleCustomViewsListLoadedEvent(n);
            break;

          case "api.CustomViewUpdatedEvent":
            this.$handleCustomViewUpdatedEvent(n);
            break;

          case "api.CustomViewRemovedEvent":
            this.$handleCustomViewRemovedEvent();
            break;

          case "api.CustomViewSetDefaultEvent":
            this.$handleCustomViewSetDefaultEvent(n);
            break;

          case "api.TabSwitchEvent":
            this.$handleTabSwitchEvent(n);
            break;

          case "api.ToolbarStateChangedEvent":
            this.$handleToolbarStateChangeEvent(n);
            break;

          case "api.StorytellingStateChangedEvent":
            this.$handleStorytellingStateChangedEvent(n);
            break;

          case "api.UrlActionEvent":
            this.$handleUrlActionEvent(n);
            break;
        }
      },
      addEventListener: function addEventListener(e, n) {
        var r = {};
        if (!i.PublicEnums.tryNormalizeEnum(i.ApiTableauEventName).call(null, e, r)) throw i._TableauException.createUnsupportedEventName(e.toString());

        switch (r.$) {
          case "marksselection":
            this.add_$marksSelection(t.cast(n, Function));
            break;

          case "markshighlight":
            this.add_$marksHighlight(t.cast(n, Function));
            break;

          case "parametervaluechange":
            this.add_$parameterValueChange(t.cast(n, Function));
            break;

          case "filterchange":
            this.add_$filterChange(t.cast(n, Function));
            break;

          case "customviewload":
            this.add_$customViewLoad(t.cast(n, Function));
            break;

          case "customviewsave":
            this.add_$customViewSave(t.cast(n, Function));
            break;

          case "customviewremove":
            this.add_$customViewRemove(t.cast(n, Function));
            break;

          case "customviewsetdefault":
            this.add_$customViewSetDefault(t.cast(n, Function));
            break;

          case "tabswitch":
            this.add_$tabSwitch(t.cast(n, Function));
            break;

          case "storypointswitch":
            this.add_$storyPointSwitch(t.cast(n, Function));
            break;

          case "toolbarstatechange":
            this.add_$toolbarStateChange(t.cast(n, Function));
            break;

          case "vizresize":
            this.add_$vizResize(t.cast(n, Function));
            break;

          case "urlaction":
            this.add_$urlAction(t.cast(n, Function));
            break;
        }
      },
      removeEventListener: function removeEventListener(e, n) {
        var r = {};
        if (!i.PublicEnums.tryNormalizeEnum(i.ApiTableauEventName).call(null, e, r)) throw i._TableauException.createUnsupportedEventName(e.toString());

        switch (r.$) {
          case "marksselection":
            this.remove_$marksSelection(t.cast(n, Function));
            break;

          case "markshighlight":
            this.remove_$marksHighlight(t.cast(n, Function));
            break;

          case "parametervaluechange":
            this.remove_$parameterValueChange(t.cast(n, Function));
            break;

          case "filterchange":
            this.remove_$filterChange(t.cast(n, Function));
            break;

          case "customviewload":
            this.remove_$customViewLoad(t.cast(n, Function));
            break;

          case "customviewsave":
            this.remove_$customViewSave(t.cast(n, Function));
            break;

          case "customviewremove":
            this.remove_$customViewRemove(t.cast(n, Function));
            break;

          case "customviewsetdefault":
            this.remove_$customViewSetDefault(t.cast(n, Function));
            break;

          case "tabswitch":
            this.remove_$tabSwitch(t.cast(n, Function));
            break;

          case "toolbarstatechange":
            this.remove_$toolbarStateChange(t.cast(n, Function));
            break;

          case "storypointswitch":
            this.remove_$storyPointSwitch(t.cast(n, Function));
            break;

          case "vizresize":
            this.remove_$vizResize(t.cast(n, Function));
            break;

          case "urlaction":
            this.remove_$urlAction(t.cast(n, Function));
            break;
        }
      },
      $dispose: function $dispose() {
        t.isValue(this.$iframe) && (this.$iframe.parentNode.removeChild(this.$iframe), this.$iframe = null), p.$unregisterViz(this.$viz), this.$messagingOptions.get_router().unregisterHandler(this), this.$removeWindowResizeHandler();
      },
      $show: function $show() {
        this.$iframe.style.display = "block", this.$iframe.style.visibility = "visible";
      },
      $hide: function $hide() {
        this.$iframe.style.display = "none";
      },
      $makeInvisible: function $makeInvisible() {
        this.$iframe.style.visibility = "hidden";
      },
      $showExportImageDialog: function $showExportImageDialog() {
        this.$invokeCommand("showExportImageDialog");
      },
      $showExportDataDialog: function $showExportDataDialog(e) {
        var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e);
        this.$invokeCommand("showExportDataDialog", t);
      },
      $showExportCrossTabDialog: function $showExportCrossTabDialog(e) {
        var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e);
        this.$invokeCommand("showExportCrosstabDialog", t);
      },
      $showExportPDFDialog: function $showExportPDFDialog() {
        this.$invokeCommand("showExportPDFDialog");
      },
      $showExportPowerPointDialog: function $showExportPowerPointDialog() {
        this.$invokeCommand("showExportPowerPointDialog");
      },
      $exportCrossTabToExcel: function $exportCrossTabToExcel(e) {
        var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e);
        this.$invokeCommand("exportCrosstabToExcel", t);
      },
      $revertAllAsync: function $revertAllAsync() {
        return i._Utility.noResultPromiseHelper("api.RevertAllCommand", null, this.$messagingOptions);
      },
      $refreshDataAsync: function $refreshDataAsync() {
        return i._Utility.noResultPromiseHelper("api.RefreshDataCommand", null, this.$messagingOptions);
      },
      $showShareDialog: function $showShareDialog() {
        this.$invokeCommand("showShareDialog");
      },
      $showDownloadWorkbookDialog: function $showDownloadWorkbookDialog() {
        if (!this.get__workbookImpl().get_isDownloadAllowed()) throw i._TableauException.create("downloadWorkbookNotAllowed", "Download workbook is not allowed");
        this.$invokeCommand("showDownloadWorkbookDialog");
      },
      $pauseAutomaticUpdatesAsync: function $pauseAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("pauseAutomaticUpdates");
      },
      $resumeAutomaticUpdatesAsync: function $resumeAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("resumeAutomaticUpdates");
      },
      $toggleAutomaticUpdatesAsync: function $toggleAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("toggleAutomaticUpdates");
      },
      $setFrameSizeAndUpdate: function $setFrameSizeAndUpdate(e, n) {
        this.$raiseVizResizeEvent(i.Size.$ctor(-1, -1)), this.$setFrameSize(e, n), t.isValue(this.$workbookImpl) && this.$workbookImpl._updateActiveSheetAsync();
      },
      $setAreAutomaticUpdatesPaused: function $setAreAutomaticUpdatesPaused(e) {
        this.$areAutomaticUpdatesPaused = e;
      },
      $contentRootElement: function $contentRootElement() {
        return this.$parameters.parentElement;
      },
      $create: function $create() {
        try {
          p.$registerViz(this.$viz);
        } catch (i) {
          var e = t.Exception.wrap(i);
          throw this.$dispose(), e;
        }

        this.$parameters.fixedSize ? (this.$parameters.displayStaticImage && (this.$staticImage = this.$createStaticImageElement(this.$parameters.width, this.$parameters.height), this.$staticImage.style.display = "block"), this.$iframe = this.$createIframe(), this.$show()) : (this.$initialAvailableSize = i._Utility.computeContentSize(this.get_$parentElement()), 0 !== this.$initialAvailableSize.width && 0 !== this.$initialAvailableSize.height || (this.$initialAvailableSize = i.Size.$ctor(800, 600)), this.$iframe = this.$createIframe(), this.$makeInvisible(), this.$parameters.displayStaticImage && (this.$staticImage = this.$createStaticImageElement(this.$initialAvailableSize.width + "px", this.$initialAvailableSize.height + "px"), this.$staticImage.style.display = "block")), i._Utility.hasWindowPostMessage() || (i._Utility.isIE() ? this.$iframe.onreadystatechange = this.$getOnCheckForDoneDelegate() : this.$iframe.onload = this.$getOnCheckForDoneDelegate()), this.$isToolbarHidden = !this.$parameters.toolbar, this.$areTabsHidden = !this.$parameters.tabs, this.$messagingOptions.get_router().registerHandler(this), this.$iframe.src = this.$parameters.get_url();
      },
      $sendVisibleRect: function $sendVisibleRect() {
        try {
          if (!i._Utility.hasWindowPostMessage() || t.isNullOrUndefined(this.$iframe) || !t.isValue(this.$iframe.contentWindow)) return;
        } catch (e) {
          return;
        }

        var e = i._Utility.visibleContentRectInDocumentCoordinates(this.get_iframe()),
            n = i._Utility.contentRectInDocumentCoordinates(this.get_iframe()),
            r = new i.NonApiCommand("layoutInfoResp", [(e.left - n.left).toString(), (e.top - n.top).toString(), e.width.toString(), e.height.toString()]);

        this.$iframe.contentWindow.postMessage(r.serialize(), "*");
      },
      $enableVisibleRectCommunication: function $enableVisibleRectCommunication() {
        if (i._Utility.hasWindowPostMessage() && !t.isNullOrUndefined(this.$iframe) && t.isValue(this.$iframe.contentWindow)) {
          var e = new i.NonApiCommand("tableau.enableVisibleRectCommunication", []);
          this.$iframe.contentWindow.postMessage(e.serialize(), "*");
        }
      },
      $redoAsync: function $redoAsync() {
        return i._Utility.noResultPromiseHelper("api.Redo", null, this.$messagingOptions);
      },
      $undoAsync: function $undoAsync() {
        return i._Utility.noResultPromiseHelper("api.Undo", null, this.$messagingOptions);
      },
      sendScaleFactor: function sendScaleFactor(e) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            r = new i.NonApiCommand("sf", [e, n.toString(), 0 .toString(), 0 .toString()]);
        t.isValue(this.$iframe) && t.isValue(this.$iframe.contentWindow) && this.$iframe.contentWindow.postMessage(r.serialize(), "*");
      },
      _sendCommand: function _sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      },
      $raiseParameterValueChange: function $raiseParameterValueChange(e) {
        t.staticEquals(this.$1$ParameterValueChangeField, null) || this.$1$ParameterValueChangeField(new D("parametervaluechange", this.$viz, e));
      },
      $raiseCustomViewLoad: function $raiseCustomViewLoad(e) {
        this.get__workbookImpl()._update(t.mkdel(this, function () {
          t.staticEquals(this.$1$CustomViewLoadField, null) || this.$1$CustomViewLoadField(new I("customviewload", this.$viz, t.isValue(e) ? e._impl : null));
        }));
      },
      $raiseCustomViewSave: function $raiseCustomViewSave(e) {
        this.get__workbookImpl()._update(t.mkdel(this, function () {
          t.staticEquals(this.$1$CustomViewSaveField, null) || this.$1$CustomViewSaveField(new I("customviewsave", this.$viz, e._impl));
        }));
      },
      $raiseCustomViewRemove: function $raiseCustomViewRemove(e) {
        t.staticEquals(this.$1$CustomViewRemoveField, null) || this.$1$CustomViewRemoveField(new I("customviewremove", this.$viz, e._impl));
      },
      $raiseCustomViewSetDefault: function $raiseCustomViewSetDefault(e) {
        t.staticEquals(this.$1$CustomViewSetDefaultField, null) || this.$1$CustomViewSetDefaultField(new I("customviewsetdefault", this.$viz, e._impl));
      },
      $raiseTabSwitch: function $raiseTabSwitch(e, i) {
        t.staticEquals(this.$1$TabSwitchField, null) || this.$1$TabSwitchField(new z("tabswitch", this.$viz, e, i));
      },
      raiseStoryPointSwitch: function raiseStoryPointSwitch(e, i) {
        t.staticEquals(this.$1$StoryPointSwitchField, null) || this.$1$StoryPointSwitchField(new x("storypointswitch", this.$viz, e, i));
      },
      $raiseStateReadyForQuery: function $raiseStateReadyForQuery() {
        t.staticEquals(this.$1$StateReadyForQueryField, null) || this.$1$StateReadyForQueryField(this);
      },
      $raiseCustomViewsListLoad: function $raiseCustomViewsListLoad() {
        t.staticEquals(this.$1$CustomViewsListLoadField, null) || this.$1$CustomViewsListLoadField(this);
      },
      $raiseVizResizeEvent: function $raiseVizResizeEvent(e) {
        t.staticEquals(this.$1$VizResizeField, null) || this.$1$VizResizeField(new L("vizresize", this.$viz, e));
      },
      $raiseUrlAction: function $raiseUrlAction(e, i) {
        t.staticEquals(this.$1$UrlActionField, null) || this.$1$UrlActionField(new M("urlaction", this.$viz, e, i));
      },
      $setFrameSize: function $setFrameSize(e, t) {
        this.$parameters.width = e, this.$parameters.height = t, this.$iframe.style.width = this.$parameters.width, this.$iframe.style.height = this.$parameters.height;
      },
      $verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard: function $verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e) {
        if (t.isNullOrUndefined(e)) return null;
        var n = this.$workbookImpl.$findActiveSheetOrSheetWithinActiveDashboard(e);
        if (t.isNullOrUndefined(n)) throw i._TableauException.createNotActiveSheet();
        return n.get_name();
      },
      $invokeAutomaticUpdatesCommandAsync: function $invokeAutomaticUpdatesCommandAsync(e) {
        if ("pauseAutomaticUpdates" !== e && "resumeAutomaticUpdates" !== e && "toggleAutomaticUpdates" !== e) throw i._TableauException.createInternalError(null);
        var n = {};
        n["api.invokeCommandName"] = e;
        var r = new i._Deferred(),
            a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.InvokeCommandCommand", 0, t.mkdel(this, function (e) {
          t.isValue(e) && t.isValue(e.isAutoUpdate) && (this.$areAutomaticUpdatesPaused = !e.isAutoUpdate), r.resolve(this.$areAutomaticUpdatesPaused);
        }), function (e, t) {
          r.reject(i._TableauException.createServerError(t));
        });
        return this._sendCommand(Object).call(this, n, a), r.get_promise();
      },
      $invokeCommand: function $invokeCommand(e, n) {
        if ("showExportImageDialog" !== e && "showExportDataDialog" !== e && "showExportCrosstabDialog" !== e && "showExportPDFDialog" !== e && "showShareDialog" !== e && "showExportPowerPointDialog" !== e && "exportCrosstabToExcel" !== e && "showDownloadWorkbookDialog" !== e) throw i._TableauException.createInternalError(null);
        var r = {};
        r["api.invokeCommandName"] = e, t.isValue(n) && (r["api.invokeCommandParam"] = n);
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.InvokeCommandCommand", 0, null, null);

        this._sendCommand(Object).call(this, r, a);
      },
      $handleFirstVizSizeKnownEvent: function $handleFirstVizSizeKnownEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));
        this.$handleInitialVizSize(i);
      },
      $handleVizInteractiveEvent: function $handleVizInteractiveEvent(e) {
        t.isValue(this.$workbookImpl) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName()) ? this.$onWorkbookInteractive(null) : this.$raiseStateReadyForQuery();
      },
      $handleMarksSelectionChangedEvent: function $handleMarksSelectionChangedEvent(e) {
        if (!t.staticEquals(this.$1$MarksSelectionField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();
          if (n.get_isStory() && (n = t.cast(n, c).get_activeStoryPointImpl().get_containedSheetImpl()), t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, $);else if (n.get_isDashboard()) {
            i = t.cast(n, s).get_worksheets()._get(e.get_worksheetName())._impl;
          }
          t.isValue(i) && (i.set_selectedMarks(null), this.$1$MarksSelectionField(new F("marksselection", this.$viz, i)));
        }
      },
      $handleMarksHighlightChangedEvent: function $handleMarksHighlightChangedEvent(e) {
        if (!t.staticEquals(this.$1$MarksHighlightField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();
          if (n.get_isStory() && (n = t.cast(n, c).get_activeStoryPointImpl().get_containedSheetImpl()), t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, $);else if (n.get_isDashboard()) {
            i = t.cast(n, s).get_worksheets()._get(e.get_worksheetName())._impl;
          }
          t.isValue(i) && (i.highlightedMarks = null, this.$1$MarksHighlightField(new A("markshighlight", this.$viz, i)));
        }
      },
      $handleFilterChangedEvent: function $handleFilterChangedEvent(e) {
        if (!t.staticEquals(this.$1$FilterChangeField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();
          if (t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, $);else if (n.get_isDashboard()) {
            i = t.cast(n, s).get_worksheets()._get(e.get_worksheetName())._impl;
          } else if (n.get_isStory()) {
            var r = t.cast(n, c).get_activeStoryPointImpl().get_containedSheetImpl();
            if (r.get_isDashboard()) i = t.cast(r, s).get_worksheets()._get(e.get_worksheetName())._impl;else t.referenceEquals(r.get_name(), e.get_worksheetName()) && (i = t.cast(r, $));
          }

          if (t.isValue(i)) {
            var a = t.cast(JSON.parse(t.cast(e.get_data(), String)), Array),
                o = a[0],
                l = a[1];
            this.$1$FilterChangeField(new E("filterchange", this.$viz, i, o, l));
          }
        }
      },
      $handleParameterChangedEvent: function $handleParameterChangedEvent(e) {
        if (!t.staticEquals(this.$1$ParameterValueChangeField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          this.$workbookImpl.set_$lastChangedParameterImpl(null);
          var i = t.cast(e.get_data(), String);
          this.$raiseParameterValueChange(i);
        }
      },
      $handleCustomViewsListLoadedEvent: function $handleCustomViewsListLoadedEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String)),
            n = t.mkdel(this, function () {
          a._processCustomViews(this.$workbookImpl, this.$messagingOptions, i);
        }),
            r = t.mkdel(this, function () {
          this.$raiseCustomViewsListLoad(), t.staticEquals(this.$1$CustomViewLoadField, null) || i.customViewLoaded || this.$raiseCustomViewLoad(this.$workbookImpl.get_activeCustomView());
        });
        t.isNullOrUndefined(this.$workbookImpl) ? (this.$initializingWorkbookImpl = !0, this.$workbookImpl = new g(this, this.$messagingOptions, t.mkdel(this, function () {
          n(), this.$onWorkbookInteractive(r), this.$initializingWorkbookImpl = !1;
        }))) : (n(), this.$ensureCalledAfterFirstInteractive(r));
      },
      $handleCustomViewUpdatedEvent: function $handleCustomViewUpdatedEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));
        if (t.isNullOrUndefined(this.$workbookImpl) && (this.$workbookImpl = new g(this, this.$messagingOptions, null)), t.isValue(this.$workbookImpl) && a._processCustomViewUpdate(this.$workbookImpl, this.$messagingOptions, i, !0), !t.staticEquals(this.$1$CustomViewSaveField, null)) for (var n = this.$workbookImpl.get_$updatedCustomViews()._toApiCollection(), r = 0, s = n.length; r < s; r++) {
          this.$raiseCustomViewSave(n[r]);
        }
      },
      $handleCustomViewRemovedEvent: function $handleCustomViewRemovedEvent() {
        if (!t.staticEquals(this.$1$CustomViewRemoveField, null)) for (var e = this.$workbookImpl.get_$removedCustomViews()._toApiCollection(), i = 0, n = e.length; i < n; i++) {
          this.$raiseCustomViewRemove(e[i]);
        }
      },
      $handleCustomViewSetDefaultEvent: function $handleCustomViewSetDefaultEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));
        if (t.isValue(this.$workbookImpl) && a._processCustomViews(this.$workbookImpl, this.$messagingOptions, i), !t.staticEquals(this.$1$CustomViewSetDefaultField, null) && t.isValue(i.defaultCustomViewId)) for (var n = this.$workbookImpl.get_$customViews(), r = 0; r < n.get__length(); r++) {
          var s = n.get_item(r);

          if (s.getDefault()) {
            this.$raiseCustomViewSetDefault(s);
            break;
          }
        }
      },
      $handleTabSwitchEvent: function $handleTabSwitchEvent(e) {
        this.$workbookImpl._update(t.mkdel(this, function () {
          if (t.isValue(this.$workbookTabSwitchHandler) && this.$workbookTabSwitchHandler(), t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
            var i = e.get_worksheetName(),
                n = t.cast(e.get_data(), String);
            this.$raiseTabSwitch(i, n);
          }

          this.$onWorkbookInteractive(null);
        }));
      },
      $handleToolbarStateChangeEvent: function $handleToolbarStateChangeEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String)),
            n = new d(this, i);
        t.staticEquals(this.$1$ToolbarStateChangeField, null) || this.$1$ToolbarStateChangeField(new U("toolbarstatechange", this.$viz, n));
      },
      $handleStorytellingStateChangedEvent: function $handleStorytellingStateChangedEvent(e) {
        var i = t.cast(this.$workbookImpl.get_activeSheetImpl(), c);
        "story" === i.get_sheetType() && i.update(JSON.parse(t.cast(e.get_data(), String)));
      },
      $handleUrlActionEvent: function $handleUrlActionEvent(e) {
        if (!t.staticEquals(this.$1$UrlActionField, null)) {
          var i = JSON.parse(t.cast(e.get_data(), String));
          this.$raiseUrlAction(i.url, i.target);
        }
      },
      $onWorkbookInteractive: function $onWorkbookInteractive(e) {
        if (!this.$onFirstInteractiveAlreadyCalled) {
          var i = this.$onFirstInteractiveCallback;
          window.setTimeout(t.mkdel(this, function () {
            this.$onFirstInteractiveAlreadyCalled || (t.staticEquals(i, null) || i(new P("firstinteractive", this.$viz)), t.staticEquals(e, null) || e(), this.$onFirstInteractiveAlreadyCalled = !0);
          }), 0);
        }

        this.$raiseStateReadyForQuery();
      },
      $ensureCalledAfterFirstInteractive: function $ensureCalledAfterFirstInteractive(e) {
        var n = new Date(),
            r = null;
        (r = t.mkdel(this, function () {
          var t = new Date();
          if (this.$onFirstInteractiveAlreadyCalled) e();else {
            if (t - n > 3e5) throw i._TableauException.createInternalError("Timed out while waiting for the viz to become interactive");
            window.setTimeout(r, 10);
          }
        }))();
      },
      $checkForDone: function $checkForDone() {
        i._Utility.isIE() ? "complete" === this.$iframe.readyState && this.handleVizLoad() : this.handleVizLoad();
      },
      $onCheckForDone: function $onCheckForDone() {
        window.setTimeout(t.mkdel(this, this.$checkForDone), 3e3);
      },
      $createStaticImageElement: function $createStaticImageElement(e, i) {
        var n = document.createElement("div"),
            r = t.cast(n, t.isValue(n) && t.isInstanceOfType(n, Element) && "DIV" === n.tagName);
        return r.style.background = "transparent url('" + this.$parameters.staticImageUrl + "') no-repeat scroll 0 0", r.style.left = "8px", r.style.top = this.$parameters.tabs ? "31px" : "9px", r.style.position = "absolute", r.style.width = e, r.style.height = i, this.$contentRootElement().appendChild(r), r;
      },
      $createIframe: function $createIframe() {
        if (t.isNullOrUndefined(this.$contentRootElement())) return null;
        var e = document.createElement("IFrame"),
            n = t.cast(e, t.isValue(e) && t.isInstanceOfType(e, Element) && "IFRAME" === e.tagName);
        return n.frameBorder = "0", n.setAttribute("allowTransparency", "true"), n.setAttribute("allowFullScreen", "true"), n.setAttribute("title", this.$getLocalizedTitle()), n.marginHeight = "0", n.marginWidth = "0", n.style.display = "block", this.$parameters.fixedSize ? (n.style.width = this.$parameters.width, n.style.height = this.$parameters.height, n.setAttribute("scrolling", "no")) : (n.style.width = "1px", n.style.height = "1px", n.setAttribute("scrolling", "no")), i._Utility.isSafari() && n.addEventListener("mousewheel", t.mkdel(this, this.$onIframeMouseWheel), !1), this.$contentRootElement().appendChild(n), n;
      },
      $getLocalizedTitle: function $getLocalizedTitle() {
        var e = window.navigator.language;
        if ("zh-CN" === e) return "数据可视化";
        if ("zh-TW" === e) return "資料可視化";
        if ("en-GB" === e) return "Data Visualisation";

        switch (e.substr(0, 2)) {
          case "fr":
            return "Visualisation de données";

          case "es":
            return "Visualización de datos";

          case "it":
            return "Visualizzazione dati";

          case "pt":
            return "Visualização de dados";

          case "ja":
            return "データ ビジュアライゼーション";

          case "de":
            return "Datenvisualisierung";

          case "ko":
            return "데이터 비주얼리제이션";

          case "en":
          default:
            return "Data Visualization";
        }
      },
      $onIframeMouseWheel: function $onIframeMouseWheel(e) {},
      $getOnCheckForDoneDelegate: function $getOnCheckForDoneDelegate() {
        return t.mkdel(this, function (e) {
          this.$onCheckForDone();
        });
      },
      $handleInitialVizSize: function $handleInitialVizSize(e) {
        var n = i.SheetSizeFactory.fromSizeConstraints(e.sizeConstraints);
        this.$vizSize = j.$ctor(n, e.chromeHeight), t.isValue(this.$onFirstVizSizeKnownCallback) && this.$onFirstVizSizeKnownCallback(new k("firstvizsizeknown", this.$viz, this.$vizSize)), this.$parameters.fixedSize || (this.$refreshSize(), this.$addWindowResizeHandler(), this.$show());
      },
      $removeWindowResizeHandler: function $removeWindowResizeHandler() {
        t.isNullOrUndefined(this.$windowResizeHandler) || (i._Utility.hasWindowAddEventListener() ? window.removeEventListener("resize", this.$windowResizeHandler, !1) : window.self.detachEvent("onresize", this.$windowResizeHandler), this.$windowResizeHandler = null);
      },
      $addWindowResizeHandler: function $addWindowResizeHandler() {
        t.isValue(this.$windowResizeHandler) || (this.$windowResizeHandler = t.mkdel(this, function () {
          this.$refreshSize();
        }), i._Utility.hasWindowAddEventListener() ? window.addEventListener("resize", this.$windowResizeHandler, !1) : window.self.attachEvent("onresize", this.$windowResizeHandler));
      },
      switchToViz: function switchToViz(e) {
        var n = new i._Deferred(),
            r = {};
        r["api.invokeCommandParam"] = e;
        var a = new (t.makeGenericType(i.CommandReturnHandler$1, [Object]))("api.SwitchViz", 1, function (e) {
          n.resolve();
        }, function (e, t) {
          n.reject(i._TableauException.createServerError(t));
        });
        return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, r, a), n.get_promise();
      }
    }),
        L = e.tab.VizResizeEvent = t.mkType(n, "tab.VizResizeEvent", function (e, t, i) {
      this.$availableSize = null, P.call(this, e, t), this.$availableSize = i;
    }, {
      getAvailableSize: function getAvailableSize() {
        return this.$availableSize;
      }
    }),
        j = e.tab.VizSize = t.mkType(n, "tab.VizSize", null, null, {
      $ctor: function $ctor(e, t) {
        var i = new Object();
        return i.sheetSize = null, i.chromeHeight = 0, i.sheetSize = e, i.chromeHeight = t, i;
      },
      isInstanceOfType: function isInstanceOfType() {
        return !0;
      }
    }),
        W = e.tab.WorksheetEvent = t.mkType(n, "tab.WorksheetEvent", function (e, t, i) {
      this.$worksheetImpl = null, P.call(this, e, t), this.$worksheetImpl = i;
    }, {
      getWorksheet: function getWorksheet() {
        return this.$worksheetImpl.get_worksheet();
      }
    }),
        G = e.tableauSoftware.CategoricalFilter = t.mkType(n, "tableauSoftware.CategoricalFilter", function (e, t) {
      this.$isExclude = !1, this.$isAllSelected = !1, this.$appliedValues = null, Y.call(this, e, t), this.$initializeFromJson$1(t);
    }, {
      getIsExcludeMode: function getIsExcludeMode() {
        return this.$isExclude;
      },
      getIsAllSelected: function getIsAllSelected() {
        return this.$isAllSelected;
      },
      getAppliedValues: function getAppliedValues() {
        return this.$appliedValues;
      },
      _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      },
      $initializeFromJson$1: function $initializeFromJson$1(e) {
        if (this.$isExclude = e.isExclude, this.$isAllSelected = e.isAllSelected, t.isValue(e.appliedValues)) {
          this.$appliedValues = [];

          for (var n = 0; n < e.appliedValues.length; n++) {
            var r = e.appliedValues[n];
            this.$appliedValues.push(i._Utility.getDataValue(r));
          }
        }
      }
    }),
        B = e.tableauSoftware.CustomView = t.mkType(n, "tableauSoftware.CustomView", function (e) {
      this._impl = null, this._impl = e;
    }, {
      getWorkbook: function getWorkbook() {
        return this._impl.get_$workbook();
      },
      getUrl: function getUrl() {
        return this._impl.get_$url();
      },
      getName: function getName() {
        return this._impl.get_$name();
      },
      setName: function setName(e) {
        this._impl.set_$name(e);
      },
      getOwnerName: function getOwnerName() {
        return this._impl.get_$ownerName();
      },
      getAdvertised: function getAdvertised() {
        return this._impl.get_$advertised();
      },
      setAdvertised: function setAdvertised(e) {
        this._impl.set_$advertised(e);
      },
      getDefault: function getDefault() {
        return this._impl.get_$isDefault();
      },
      saveAsync: function saveAsync() {
        return this._impl.$saveAsync();
      }
    }),
        q = e.tableauSoftware.Dashboard = t.mkType(n, "tableauSoftware.Dashboard", function (e) {
      this._impl = null, ie.call(this, e);
    }, {
      getParentStoryPoint: function getParentStoryPoint() {
        return this._impl.get_parentStoryPoint();
      },
      getObjects: function getObjects() {
        return this._impl.get_objects()._toApiCollection();
      },
      getWorksheets: function getWorksheets() {
        return this._impl.get_worksheets()._toApiCollection();
      }
    }),
        Q = e.tableauSoftware.DashboardObject = t.mkType(n, "tableauSoftware.DashboardObject", function (e, n, r) {
      if (this.$zoneInfo = null, this.$dashboard = null, this.$worksheet = null, "worksheet" === e.objectType && t.isNullOrUndefined(r)) throw i._TableauException.createInternalError("worksheet parameter is required for WORKSHEET objects");
      if ("worksheet" !== e.objectType && t.isValue(r)) throw i._TableauException.createInternalError("worksheet parameter should be undefined for non-WORKSHEET objects");
      this.$zoneInfo = e, this.$dashboard = n, this.$worksheet = r;
    }, {
      getObjectType: function getObjectType() {
        return this.$zoneInfo.objectType;
      },
      getDashboard: function getDashboard() {
        return this.$dashboard;
      },
      getWorksheet: function getWorksheet() {
        return this.$worksheet;
      },
      getPosition: function getPosition() {
        return this.$zoneInfo.position;
      },
      getSize: function getSize() {
        return this.$zoneInfo.size;
      }
    }),
        J = e.tableauSoftware.DataSource = t.mkType(n, "tableauSoftware.DataSource", function (e) {
      this.$impl = null, this.$impl = e;
    }, {
      getName: function getName() {
        return this.$impl.get_name();
      },
      getFields: function getFields() {
        return this.$impl.get_fields()._toApiCollection();
      },
      getIsPrimary: function getIsPrimary() {
        return this.$impl.get_isPrimary();
      }
    }),
        K = e.tableauSoftware.Field = t.mkType(n, "tableauSoftware.Field", function (e, t, i, n) {
      this.$dataSource = null, this.$name = null, this.$fieldRoleType = null, this.$fieldAggrType = null, this.$dataSource = e, this.$name = t, this.$fieldRoleType = i, this.$fieldAggrType = n;
    }, {
      getDataSource: function getDataSource() {
        return this.$dataSource;
      },
      getName: function getName() {
        return this.$name;
      },
      getRole: function getRole() {
        return this.$fieldRoleType;
      },
      getAggregation: function getAggregation() {
        return this.$fieldAggrType;
      }
    }),
        Y = e.tableauSoftware.Filter = t.mkType(n, "tableauSoftware.Filter", function (e, t) {
      this.$worksheetImpl = null, this.$type = null, this.$caption = null, this.$field = null, this.$dataSourceName = null, this.$fieldRole = null, this.$fieldAggregation = null, this.$worksheetImpl = e, this.$initializeFromJson(t);
    }, {
      getFilterType: function getFilterType() {
        return this.$type;
      },
      getFieldName: function getFieldName() {
        return this.$caption;
      },
      getWorksheet: function getWorksheet() {
        return this.$worksheetImpl.get_worksheet();
      },
      getFieldAsync: function getFieldAsync() {
        var e = new i._Deferred();

        if (t.isNullOrUndefined(this.$field)) {
          var n = t.mkdel(this, function (t) {
            return this.$field = new K(t, this.$caption, this.$fieldRole, this.$fieldAggregation), e.resolve(this.$field), null;
          });
          this.$worksheetImpl.$getDataSourceAsync(this.$dataSourceName).then(n, function (t) {
            return e.reject(t), null;
          });
        } else window.setTimeout(t.mkdel(this, function () {
          e.resolve(this.$field);
        }), 0);

        return e.get_promise();
      },
      _update: function _update(e) {
        this.$initializeFromJson(e), this._updateFromJson(e);
      },
      _addFieldParams: function _addFieldParams(e) {},
      _updateFromJson: null,
      $initializeFromJson: function $initializeFromJson(e) {
        this.$caption = e.caption, this.$type = i.ApiEnumConverter.convertFilterType(e.filterType), this.$field = null, this.$dataSourceName = e.dataSourceName, this.$fieldRole = i.ApiEnumConverter.convertFieldRole(t.coalesce(e.fieldRole, "unknown")), this.$fieldAggregation = i.ApiEnumConverter.convertFieldAggregation(t.coalesce(e.fieldAggregation, "NONE"));
      }
    }, {
      $createFilter: function $createFilter(e, t) {
        switch (t.filterType) {
          case "categorical":
            return new G(e, t);

          case "relativedate":
            return new te(e, t);

          case "hierarchical":
            return new X(e, t);

          case "quantitative":
            return new ee(e, t);
        }

        return null;
      },
      processFiltersList: function processFiltersList(e, t) {
        for (var n = new i._Collection(), r = 0; r < t.filters.length; r++) {
          var a = t.filters[r];
          n._has(a.caption) || n._add(a.caption, a.caption);
        }

        for (var s = new i._Collection(), o = 0; o < t.filters.length; o++) {
          var l = t.filters[o],
              u = Y.$createFilter(e, l);

          if (s._has(l.caption)) {
            for (var c = l.caption.toString() + "_" + l.filterType.toString(), h = c, m = 1; n._has(h);) {
              h = c + "_" + m, m++;
            }

            s._add(h, u);
          } else s._add(l.caption, u);
        }

        return s;
      }
    }),
        X = e.tableauSoftware.HierarchicalFilter = t.mkType(n, "tableauSoftware.HierarchicalFilter", function (e, t) {
      this.$levels = 0, Y.call(this, e, t), this.$initializeFromJson$1(t);
    }, {
      _addFieldParams: function _addFieldParams(e) {
        e["api.filterHierarchicalLevels"] = this.$levels;
      },
      _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      },
      $initializeFromJson$1: function $initializeFromJson$1(e) {
        this.$levels = e.levels;
      }
    }),
        Z = e.tableauSoftware.Parameter = t.mkType(n, "tableauSoftware.Parameter", function (e) {
      this._impl = null, this._impl = e;
    }, {
      getName: function getName() {
        return this._impl.get_$name();
      },
      getCurrentValue: function getCurrentValue() {
        return this._impl.get_$currentValue();
      },
      getDataType: function getDataType() {
        return this._impl.get_$dataType();
      },
      getAllowableValuesType: function getAllowableValuesType() {
        return this._impl.get_$allowableValuesType();
      },
      getAllowableValues: function getAllowableValues() {
        return this._impl.get_$allowableValues();
      },
      getMinValue: function getMinValue() {
        return this._impl.get_$minValue();
      },
      getMaxValue: function getMaxValue() {
        return this._impl.get_$maxValue();
      },
      getStepSize: function getStepSize() {
        return this._impl.get_$stepSize();
      },
      getDateStepPeriod: function getDateStepPeriod() {
        return this._impl.get_$dateStepPeriod();
      }
    }),
        ee = e.tableauSoftware.QuantitativeFilter = t.mkType(n, "tableauSoftware.QuantitativeFilter", function (e, t) {
      this.$domainMin = null, this.$domainMax = null, this.$min = null, this.$max = null, this.$includeNullValues = !1, Y.call(this, e, t), this.$initializeFromJson$1(t);
    }, {
      getMin: function getMin() {
        return this.$min;
      },
      getMax: function getMax() {
        return this.$max;
      },
      getIncludeNullValues: function getIncludeNullValues() {
        return this.$includeNullValues;
      },
      getDomainMin: function getDomainMin() {
        return this.$domainMin;
      },
      getDomainMax: function getDomainMax() {
        return this.$domainMax;
      },
      _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      },
      $initializeFromJson$1: function $initializeFromJson$1(e) {
        this.$domainMin = i._Utility.getDataValue(e.domainMinValue), this.$domainMax = i._Utility.getDataValue(e.domainMaxValue), this.$min = i._Utility.getDataValue(e.minValue), this.$max = i._Utility.getDataValue(e.maxValue), this.$includeNullValues = e.includeNullValues;
      }
    }),
        te = e.tableauSoftware.RelativeDateFilter = t.mkType(n, "tableauSoftware.RelativeDateFilter", function (e, t) {
      this.$periodType = null, this.$rangeType = null, this.$rangeN = 0, Y.call(this, e, t), this.$initializeFromJson$1(t);
    }, {
      getPeriod: function getPeriod() {
        return this.$periodType;
      },
      getRange: function getRange() {
        return this.$rangeType;
      },
      getRangeN: function getRangeN() {
        return this.$rangeN;
      },
      _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      },
      $initializeFromJson$1: function $initializeFromJson$1(e) {
        t.isValue(e.periodType) && (this.$periodType = i.ApiEnumConverter.convertPeriodType(t.unbox(e.periodType))), t.isValue(e.rangeType) && (this.$rangeType = i.ApiEnumConverter.convertDateRange(t.unbox(e.rangeType))), t.isValue(e.rangeN) && (this.$rangeN = t.unbox(e.rangeN));
      }
    }),
        ie = e.tableauSoftware.Sheet = t.mkType(n, "tableauSoftware.Sheet", function (e) {
      this._impl = null, i._Param.verifyValue(e, "sheetImpl"), this._impl = e;
    }, {
      getName: function getName() {
        return this._impl.get_name();
      },
      getIndex: function getIndex() {
        return this._impl.get_index();
      },
      getWorkbook: function getWorkbook() {
        return this._impl.get_workbookImpl().get_workbook();
      },
      getSize: function getSize() {
        return this._impl.get_size();
      },
      getIsHidden: function getIsHidden() {
        return this._impl.get_isHidden();
      },
      getIsActive: function getIsActive() {
        return this._impl.get_isActive();
      },
      getSheetType: function getSheetType() {
        return this._impl.get_sheetType();
      },
      getUrl: function getUrl() {
        return this._impl.get_url();
      },
      changeSizeAsync: function changeSizeAsync(e) {
        return this._impl.changeSizeAsync(e);
      }
    }),
        ne = e.tableauSoftware.SheetInfo = t.mkType(n, "tableauSoftware.SheetInfo", function (e) {
      this.$impl = null, this.$impl = e;
    }, {
      getName: function getName() {
        return this.$impl.name;
      },
      getSheetType: function getSheetType() {
        return this.$impl.sheetType;
      },
      getSize: function getSize() {
        return this.$impl.size;
      },
      getIndex: function getIndex() {
        return this.$impl.index;
      },
      getUrl: function getUrl() {
        return this.$impl.url;
      },
      getIsActive: function getIsActive() {
        return this.$impl.isActive;
      },
      getIsHidden: function getIsHidden() {
        return this.$impl.isHidden;
      },
      getWorkbook: function getWorkbook() {
        return this.$impl.workbook;
      }
    }),
        re = e.tableauSoftware.Story = t.mkType(n, "tableauSoftware.Story", function (e) {
      this._impl = null, ie.call(this, e);
    }, {
      getActiveStoryPoint: function getActiveStoryPoint() {
        return this._impl.get_activeStoryPointImpl().get_storyPoint();
      },
      getStoryPointsInfo: function getStoryPointsInfo() {
        return this._impl.get_storyPointsInfo();
      },
      activatePreviousStoryPointAsync: function activatePreviousStoryPointAsync() {
        return this._impl.activatePreviousStoryPointAsync();
      },
      activateNextStoryPointAsync: function activateNextStoryPointAsync() {
        return this._impl.activateNextStoryPointAsync();
      },
      activateStoryPointAsync: function activateStoryPointAsync(e) {
        return this._impl.activateStoryPointAsync(e);
      },
      revertStoryPointAsync: function revertStoryPointAsync(e) {
        return this._impl.revertStoryPointAsync(e);
      }
    }),
        ae = e.tableauSoftware.StoryPoint = t.mkType(n, "tableauSoftware.StoryPoint", function (e) {
      this.$impl = null, this.$impl = e;
    }, {
      getCaption: function getCaption() {
        return this.$impl.get_caption();
      },
      getContainedSheet: function getContainedSheet() {
        return t.isValue(this.$impl.get_containedSheetImpl()) ? this.$impl.get_containedSheetImpl().get_sheet() : null;
      },
      getIndex: function getIndex() {
        return this.$impl.get_index();
      },
      getIsActive: function getIsActive() {
        return this.$impl.get_isActive();
      },
      getIsUpdated: function getIsUpdated() {
        return this.$impl.get_isUpdated();
      },
      getParentStory: function getParentStory() {
        return this.$impl.get_parentStoryImpl().get_story();
      }
    }),
        se = e.tableauSoftware.StoryPointInfo = t.mkType(n, "tableauSoftware.StoryPointInfo", function (e) {
      this._impl = null, this._impl = e;
    }, {
      getCaption: function getCaption() {
        return this._impl.caption;
      },
      getIndex: function getIndex() {
        return this._impl.index;
      },
      getIsActive: function getIsActive() {
        return this._impl.isActive;
      },
      getIsUpdated: function getIsUpdated() {
        return this._impl.isUpdated;
      },
      getParentStory: function getParentStory() {
        return this._impl.parentStoryImpl.get_story();
      }
    }),
        oe = e.tableauSoftware.ToolbarState = t.mkType(n, "tableauSoftware.ToolbarState", function (e) {
      this._impl = null, this._impl = e;
    }, {
      getViz: function getViz() {
        return this._impl.get_viz();
      },
      isButtonEnabled: function isButtonEnabled(e) {
        return this._impl.isButtonEnabled(e);
      }
    }),
        le = e.tableauSoftware.Version = t.mkType(n, "tableauSoftware.Version", function (e, i, n, r) {
      this.$major = 0, this.$minor = 0, this.$patch = 0, this.$metadata = null, this.$major = e, this.$minor = i, this.$patch = n, this.$metadata = t.coalesce(r, null);
    }, {
      getMajor: function getMajor() {
        return this.$major;
      },
      getMinor: function getMinor() {
        return this.$minor;
      },
      getPatch: function getPatch() {
        return this.$patch;
      },
      getMetadata: function getMetadata() {
        return this.$metadata;
      },
      toString: function toString() {
        var e = this.$major + "." + this.$minor + "." + this.$patch;
        return t.isValue(this.$metadata) && this.$metadata.length > 0 && (e += "-" + this.$metadata), e;
      }
    }, {
      getCurrent: function getCurrent() {
        return le.$currentVersion;
      }
    }),
        ue = e.tableauSoftware.Viz = t.mkType(n, "tableauSoftware.Viz", function (e, t, n) {
      this._impl = null;

      var r = i._ApiObjectRegistry.getApiMessageRouter();

      this._impl = new H(r, this, e, t, n), this._impl.$create();
    }, {
      getAreTabsHidden: function getAreTabsHidden() {
        return this._impl.get_$areTabsHidden();
      },
      getIsToolbarHidden: function getIsToolbarHidden() {
        return this._impl.get_$isToolbarHidden();
      },
      getIsHidden: function getIsHidden() {
        return this._impl.get_$isHidden();
      },
      getInstanceId: function getInstanceId() {
        return this._impl.get_instanceId();
      },
      getParentElement: function getParentElement() {
        return this._impl.get_$parentElement();
      },
      getUrl: function getUrl() {
        return this._impl.get_$url();
      },
      getVizSize: function getVizSize() {
        return this._impl.get_$vizSize();
      },
      getWorkbook: function getWorkbook() {
        return this._impl.get_$workbook();
      },
      getAreAutomaticUpdatesPaused: function getAreAutomaticUpdatesPaused() {
        return this._impl.get_$areAutomaticUpdatesPaused();
      },
      getCurrentUrlAsync: function getCurrentUrlAsync() {
        return this._impl.getCurrentUrlAsync();
      },
      addEventListener: function addEventListener(e, t) {
        this._impl.addEventListener(e, t);
      },
      removeEventListener: function removeEventListener(e, t) {
        this._impl.removeEventListener(e, t);
      },
      dispose: function dispose() {
        this._impl.$dispose();
      },
      switchToViz: function switchToViz(e) {
        return this._impl.switchToViz(e);
      },
      show: function show() {
        this._impl.$show();
      },
      hide: function hide() {
        this._impl.$hide();
      },
      showExportDataDialog: function showExportDataDialog(e) {
        this._impl.$showExportDataDialog(e);
      },
      showExportCrossTabDialog: function showExportCrossTabDialog(e) {
        this._impl.$showExportCrossTabDialog(e);
      },
      showExportImageDialog: function showExportImageDialog() {
        this._impl.$showExportImageDialog();
      },
      showExportPDFDialog: function showExportPDFDialog() {
        this._impl.$showExportPDFDialog();
      },
      showExportPowerPointDialog: function showExportPowerPointDialog() {
        this._impl.$showExportPowerPointDialog();
      },
      exportCrossTabToExcel: function exportCrossTabToExcel(e) {
        this._impl.$exportCrossTabToExcel(e);
      },
      revertAllAsync: function revertAllAsync() {
        return this._impl.$revertAllAsync();
      },
      refreshDataAsync: function refreshDataAsync() {
        return this._impl.$refreshDataAsync();
      },
      showShareDialog: function showShareDialog() {
        this._impl.$showShareDialog();
      },
      showDownloadWorkbookDialog: function showDownloadWorkbookDialog() {
        this._impl.$showDownloadWorkbookDialog();
      },
      pauseAutomaticUpdatesAsync: function pauseAutomaticUpdatesAsync() {
        return this._impl.$pauseAutomaticUpdatesAsync();
      },
      resumeAutomaticUpdatesAsync: function resumeAutomaticUpdatesAsync() {
        return this._impl.$resumeAutomaticUpdatesAsync();
      },
      toggleAutomaticUpdatesAsync: function toggleAutomaticUpdatesAsync() {
        return this._impl.$toggleAutomaticUpdatesAsync();
      },
      refreshSize: function refreshSize() {
        this._impl.$refreshSize();
      },
      setFrameSize: function setFrameSize(e, t) {
        var n = e,
            r = t;
        i._Utility.isNumber(e) && (n = e.toString() + "px"), i._Utility.isNumber(t) && (r = t.toString() + "px"), this._impl.$setFrameSizeAndUpdate(n, r);
      },
      redoAsync: function redoAsync() {
        return this._impl.$redoAsync();
      },
      undoAsync: function undoAsync() {
        return this._impl.$undoAsync();
      }
    }, {
      getLastRequestMessage: function getLastRequestMessage() {
        return i._ApiCommand.lastRequestMessage;
      },
      getLastResponseMessage: function getLastResponseMessage() {
        return i._ApiCommand.lastResponseMessage;
      },
      getLastClientInfoResponseMessage: function getLastClientInfoResponseMessage() {
        return i._ApiCommand.lastClientInfoResponseMessage;
      }
    }),
        ce = e.tableauSoftware.VizManager = t.mkType(n, "tableauSoftware.VizManager", null, null, {
      getVizs: function getVizs() {
        return p.get_$clonedVizs();
      }
    }),
        he = e.tableauSoftware.Workbook = t.mkType(n, "tableauSoftware.Workbook", function (e) {
      this.$workbookImpl = null, this.$workbookImpl = e;
    }, {
      getViz: function getViz() {
        return this.$workbookImpl.get_viz();
      },
      getPublishedSheetsInfo: function getPublishedSheetsInfo() {
        return this.$workbookImpl.get_publishedSheets()._toApiCollection();
      },
      getName: function getName() {
        return this.$workbookImpl.get_name();
      },
      getActiveSheet: function getActiveSheet() {
        return this.$workbookImpl.get_activeSheetImpl().get_sheet();
      },
      getActiveCustomView: function getActiveCustomView() {
        return this.$workbookImpl.get_activeCustomView();
      },
      activateSheetAsync: function activateSheetAsync(e) {
        return this.$workbookImpl._setActiveSheetAsync(e);
      },
      revertAllAsync: function revertAllAsync() {
        return this.$workbookImpl._revertAllAsync();
      },
      getCustomViewsAsync: function getCustomViewsAsync() {
        return this.$workbookImpl.$getCustomViewsAsync();
      },
      showCustomViewAsync: function showCustomViewAsync(e) {
        return this.$workbookImpl.$showCustomViewAsync(e);
      },
      removeCustomViewAsync: function removeCustomViewAsync(e) {
        return this.$workbookImpl.$removeCustomViewAsync(e);
      },
      rememberCustomViewAsync: function rememberCustomViewAsync(e) {
        return this.$workbookImpl.$rememberCustomViewAsync(e);
      },
      setActiveCustomViewAsDefaultAsync: function setActiveCustomViewAsDefaultAsync() {
        return this.$workbookImpl.$setActiveCustomViewAsDefaultAsync();
      },
      getParametersAsync: function getParametersAsync() {
        return this.$workbookImpl.$getParametersAsync();
      },
      changeParameterValueAsync: function changeParameterValueAsync(e, t) {
        return this.$workbookImpl.$changeParameterValueAsync(e, t);
      }
    }),
        me = e.tableauSoftware.Worksheet = t.mkType(n, "tableauSoftware.Worksheet", function (e) {
      this._impl = null, ie.call(this, e);
    }, {
      getParentDashboard: function getParentDashboard() {
        return this._impl.get_parentDashboard();
      },
      getParentStoryPoint: function getParentStoryPoint() {
        return this._impl.get_parentStoryPoint();
      },
      getDataSourcesAsync: function getDataSourcesAsync() {
        return this._impl.$getDataSourcesAsync();
      },
      getFilterAsync: function getFilterAsync(e, t) {
        return this._impl.$getFilterAsync(null, e, t);
      },
      getFiltersAsync: function getFiltersAsync(e) {
        return this._impl.$getFiltersAsync(e);
      },
      applyFilterAsync: function applyFilterAsync(e, t, i, n) {
        return this._impl.$applyFilterAsync(e, t, i, n);
      },
      clearFilterAsync: function clearFilterAsync(e) {
        return this._impl.$clearFilterAsync(e);
      },
      applyRangeFilterAsync: function applyRangeFilterAsync(e, t) {
        return this._impl.$applyRangeFilterAsync(e, t);
      },
      applyRelativeDateFilterAsync: function applyRelativeDateFilterAsync(e, t) {
        return this._impl.$applyRelativeDateFilterAsync(e, t);
      },
      applyHierarchicalFilterAsync: function applyHierarchicalFilterAsync(e, t, i, n) {
        return this._impl.$applyHierarchicalFilterAsync(e, t, i, n);
      },
      clearSelectedMarksAsync: function clearSelectedMarksAsync() {
        return this._impl.$clearSelectedMarksAsync();
      },
      selectMarksAsync: function selectMarksAsync(e, t, i) {
        return this._impl.$selectMarksAsync(e, t, i);
      },
      getSelectedMarksAsync: function getSelectedMarksAsync() {
        return this._impl.$getSelectedMarksAsync();
      },
      getSummaryDataAsync: function getSummaryDataAsync(e) {
        return this._impl.$getSummaryDataAsync(e);
      },
      getUnderlyingDataAsync: function getUnderlyingDataAsync(e) {
        return this._impl.$getUnderlyingDataAsync(e);
      },
      getUnderlyingTablesAsync: function getUnderlyingTablesAsync() {
        return this._impl.$getUnderlyingTablesAsync();
      },
      getUnderlyingTableDataAsync: function getUnderlyingTableDataAsync(e, t) {
        return this._impl.$getUnderlyingTableDataAsync(e, t);
      },
      clearHighlightedMarksAsync: function clearHighlightedMarksAsync() {
        return this._impl.$clearHighlightedMarksAsync();
      },
      highlightMarksAsync: function highlightMarksAsync(e, t) {
        return this._impl.$highlightMarksAsync(e, t);
      },
      highlightMarksByPatternMatchAsync: function highlightMarksByPatternMatchAsync(e, t) {
        return this._impl.$highlightMarksByPatternMatchAsync(e, t);
      },
      getHighlightedMarksAsync: function getHighlightedMarksAsync() {
        return this._impl.$getHighlightedMarksAsync();
      }
    });

    t.initClass(r), t.initClass(a), t.initClass(l), t.initClass(s, l), t.initClass(o), t.initClass(u, Object), t.initClass(c, l), t.initClass(h), t.initClass(m, Object), t.initClass(d), t.initClass(p), t.initClass(f), t.initClass(g), t.initClass($, l), t.initClass(T), t.initClass(v, T), t.initClass(y), t.initClass(_, T), t.initClass(w, T), t.initClass(b, T), t.initClass(S, T), t.initClass(C), t.initClass(P), t.initClass(I, P), t.initClass(W, P), t.initClass(E, W), t.initClass(k, P), t.initClass(A, W), t.initInterface(V, {
      add_customViewsListLoad: null,
      remove_customViewsListLoad: null,
      handleVizLoad: null,
      handleVizListening: null,
      sendScaleFactor: null
    }), t.initClass(N), t.initClass(O), t.initClass(F, W), t.initClass(D, P), t.initClass(R), t.initClass(x, P), t.initClass(z, P), t.initClass(U, P), t.initClass(M, P), t.initClass(H, null, [V]), t.initClass(L, P), t.initClass(j, Object), t.initClass(Y), t.initClass(G, Y), t.initClass(B), t.initClass(ie), t.initClass(q, ie), t.initClass(Q), t.initClass(J), t.initClass(K), t.initClass(X, Y), t.initClass(Z), t.initClass(ee, Y), t.initClass(te, Y), t.initClass(ne), t.initClass(re, ie), t.initClass(ae), t.initClass(se), t.initClass(oe), t.initClass(le), t.initClass(ue), t.initClass(ce), t.initClass(he), t.initClass(me, ie), p.$vizs = [], l.noZoneId = 4294967295, $.$regexHierarchicalFieldName = new RegExp("\\[[^\\]]+\\]\\.", "g"), le.$currentVersion = new le(2, 6, 0, "null");
  }(), window.tableau = window.tableauSoftware = e.tableauSoftware, tableauSoftware.Promise = i._PromiseImpl, i._Deferred = i._DeferredImpl, i._Collection = i._CollectionImpl, i._ApiBootstrap.initialize(), window.tableau._apiLoaded = !0;
}();