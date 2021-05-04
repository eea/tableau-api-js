"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! tableau-2.2.2 */
!function () {
  /*! BEGIN MscorlibSlim */
  var e = {};!function (e) {
    "use strict";
    var t,
        i,
        n,
        a,
        r = { __assemblies: {} };r.initAssembly = function (e, t, i) {
      i = i || {}, e.name = t, e.toString = function () {
        return this.name;
      }, e.__types = {}, e.getResourceNames = function () {
        return Object.keys(i);
      }, e.getResourceDataBase64 = function (e) {
        return i[e] || null;
      }, e.getResourceData = function (e) {
        var t = i[e];return t ? r.dec64(t) : null;
      }, r.__assemblies[t] = e;
    }, r.initAssembly(r, "mscorlib"), r.getAssemblies = function () {
      return Object.keys(r.__assemblies).map(function (e) {
        return r.__assemblies[e];
      });
    }, r.isNullOrUndefined = function (e) {
      return null == e;
    }, r.isValue = function (e) {
      return null != e;
    }, r.referenceEquals = function (e, t) {
      return r.isValue(e) ? e === t : !r.isValue(t);
    }, r.mkdict = function () {
      for (var e = 1 != arguments.length ? arguments : arguments[0], t = {}, i = 0; i < e.length; i += 2) {
        t[e[i]] = e[i + 1];
      }return t;
    }, r.clone = function (e, t) {
      return t ? e.$clone(t) : t;
    }, r.coalesce = function (e, t) {
      return r.isValue(e) ? e : t;
    }, r.isDate = function (e) {
      return "[object Date]" === Object.prototype.toString.call(e);
    }, r.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }, r.isTypedArrayType = function (e) {
      return ["Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray"].indexOf(r.getTypeFullName(e)) >= 0;
    }, r.isArrayOrTypedArray = function (e) {
      return r.isArray(e) || r.isTypedArrayType(r.getInstanceType(e));
    }, r.getHashCode = function (e) {
      if (r.isValue(e)) {
        if ("function" == typeof e.getHashCode) return e.getHashCode();if ("boolean" == typeof e) return e ? 1 : 0;if ("number" == typeof e) {
          var t = e.toExponential();return t = t.substr(0, t.indexOf("e")), 4294967295 & parseInt(t.replace(".", ""), 10);
        }if ("string" == typeof e) {
          for (var i = 0, n = 0; n < e.length; n++) {
            i = 31 * i + e.charCodeAt(n) & 4294967295;
          }return i;
        }return r.isDate(e) ? 4294967295 & e.valueOf() : r.defaultHashCode(e);
      }throw new M("Cannot get hash code of null");
    }, r.defaultHashCode = function (e) {
      return e.$__hashCode__ || (e.$__hashCode__ = 4294967296 * Math.random() | 0);
    }, r.equals = function (e, t) {
      if (!r.isValue(e)) throw new M("Object is null");return e !== r && "function" == typeof e.equals ? e.equals(t) : r.isDate(e) && r.isDate(t) ? e.valueOf() === t.valueOf() : "function" == typeof e && "function" == typeof t ? r.delegateEquals(e, t) : !(!r.isNullOrUndefined(e) || !r.isNullOrUndefined(t)) || e === t;
    }, r.compare = function (e, t) {
      if (r.isValue(e)) return "number" == typeof e || "string" == typeof e || "boolean" == typeof e ? e < t ? -1 : e > t ? 1 : 0 : r.isDate(e) ? r.compare(e.valueOf(), t.valueOf()) : e.compareTo(t);throw new M("Object is null");
    }, r.equalsT = function (e, t) {
      if (r.isValue(e)) return "number" == typeof e || "string" == typeof e || "boolean" == typeof e ? e === t : r.isDate(e) ? e.valueOf() === t.valueOf() : e.equalsT(t);throw new M("Object is null");
    }, r.staticEquals = function (e, t) {
      return r.isValue(e) ? !!r.isValue(t) && r.equals(e, t) : !r.isValue(t);
    }, r.shallowCopy = function (e, t) {
      for (var i = Object.keys(e), n = 0, a = i.length; n < a; n++) {
        var r = i[n];t[r] = e[r];
      }
    }, r.isLower = function (e) {
      var t = String.fromCharCode(e);return t === t.toLowerCase() && t !== t.toUpperCase();
    }, r.isUpper = function (e) {
      var t = String.fromCharCode(e);return t !== t.toLowerCase() && t === t.toUpperCase();
    }, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.Element || (window.Element = function () {}, window.Element.isInstanceOfType = function (e) {
      return e && void 0 === e.constructor && "string" == typeof e.tagName;
    }), window.Element.__typeName = "Element"), r.clearKeys = function (e) {
      for (var t in e) {
        e.hasOwnProperty(t) && delete e[t];
      }
    }, r.keyExists = function (e, t) {
      return void 0 !== e[t];
    }, Object.keys || (Object.keys = (t = Object.prototype.hasOwnProperty, i = !{ toString: null }.propertyIsEnumerable("toString"), a = (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (e) {
      if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");var r,
          s,
          o = [];for (r in e) {
        t.call(e, r) && o.push(r);
      }if (i) for (s = 0; s < a; s++) {
        t.call(e, n[s]) && o.push(n[s]);
      }return o;
    })), r.getKeyCount = function (e) {
      return Object.keys(e).length;
    }, r.__genericCache = {}, r._makeGenericTypeName = function (e, t) {
      for (var i = e.__typeName, n = 0; n < t.length; n++) {
        i += (0 === n ? "[" : ",") + "[" + r.getTypeQName(t[n]) + "]";
      }return i += "]";
    }, r.makeGenericType = function (e, t) {
      var i = r._makeGenericTypeName(e, t);return r.__genericCache[i] || e.apply(null, t);
    }, r.registerGenericClassInstance = function (e, t, i, n, a, s) {
      var o = r._makeGenericTypeName(t, i);r.__genericCache[o] = e, e.__typeName = o, e.__genericTypeDefinition = t, e.__typeArguments = i, r.initClass(e, t.__assembly, n, a(), s());
    }, r.registerGenericInterfaceInstance = function (e, t, i, n, a) {
      var s = r._makeGenericTypeName(t, i);r.__genericCache[s] = e, e.__typeName = s, e.__genericTypeDefinition = t, e.__typeArguments = i, r.initInterface(e, t.__assembly, n, a());
    }, r.isGenericTypeDefinition = function (e) {
      return e.__isGenericTypeDefinition || !1;
    }, r.getGenericTypeDefinition = function (e) {
      return e.__genericTypeDefinition || null;
    }, r.getGenericParameterCount = function (e) {
      return e.__typeArgumentCount || 0;
    }, r.getGenericArguments = function (e) {
      return e.__typeArguments || null;
    }, r.setMetadata = function (e, t) {
      if (t.members) for (var i = 0; i < t.members.length; i++) {
        var n = t.members[i];n.typeDef = e, n.adder && (n.adder.typeDef = e), n.remover && (n.remover.typeDef = e), n.getter && (n.getter.typeDef = e), n.setter && (n.setter.typeDef = e);
      }e.__metadata = t, t.variance && (e.isAssignableFrom = function (e) {
        var t = function t(e, _t) {
          if (_t.__genericTypeDefinition === e.__genericTypeDefinition && _t.__typeArguments.length == e.__typeArguments.length) {
            for (var i = 0; i < e.__typeArguments.length; i++) {
              var n = e.__metadata.variance[i],
                  a = e.__typeArguments[i],
                  s = _t.__typeArguments[i];switch (n) {case 1:
                  if (!r.isAssignableFrom(a, s)) return !1;break;case 2:
                  if (!r.isAssignableFrom(s, a)) return !1;break;default:
                  if (s !== a) return !1;}
            }return !0;
          }return !1;
        };if (e.__interface && t(this, e)) return !0;for (var i = r.getInterfaces(e), n = 0; n < i.length; n++) {
          if (i[n] === this || t(this, i[n])) return !0;
        }return !1;
      });
    }, r.setMetadata = function (e, t) {}, r.initClass = function (e, t, i, n, a) {
      if (e.__class = !0, e.__assembly = t, e.__typeArguments || (t.__types[e.__typeName] = e), n && n !== Object) {
        var s = function s() {};s.prototype = n.prototype, e.prototype = new s(), e.prototype.constructor = e;
      }r.shallowCopy(i, e.prototype), a && (e.__interfaces = a);
    }, r.initGenericClass = function (e, t, i) {
      e.__class = !0, e.__assembly = t, t.__types[e.__typeName] = e, e.__typeArgumentCount = i, e.__isGenericTypeDefinition = !0;
    }, r.initInterface = function (e, t, i, n) {
      e.__interface = !0, e.__assembly = t, e.__typeArguments || (t.__types[e.__typeName] = e), n && (e.__interfaces = n), r.shallowCopy(i, e.prototype), e.isAssignableFrom = function (e) {
        return r.contains(r.getInterfaces(e), this);
      };
    }, r.initGenericInterface = function (e, t, i) {
      e.__interface = !0, e.__assembly = t, t.__types[e.__typeName] = e, e.__typeArgumentCount = i, e.__isGenericTypeDefinition = !0;
    }, r.initEnum = function (e, t, i, n) {
      e.__enum = !0, e.__assembly = t, t.__types[e.__typeName] = e, r.shallowCopy(i, e.prototype), e.getDefaultValue = e.createInstance = function () {
        return n ? null : 0;
      }, e.isInstanceOfType = function (e) {
        return (typeof e === "undefined" ? "undefined" : _typeof(e)) == (n ? "string" : "number");
      };
    }, r.getBaseType = function (e) {
      if (e === Object || e.__interface) return null;if (Object.getPrototypeOf) return Object.getPrototypeOf(e.prototype).constructor;var t = e.prototype;if (Object.prototype.hasOwnProperty.call(t, "constructor")) try {
        var i = t.constructor;return delete t.constructor, t.constructor;
      } finally {
        t.constructor = i;
      }return t.constructor;
    }, r.getTypeFullName = function (e) {
      return e.__typeName || e.name || (e.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] || "Object";
    }, r.getTypeQName = function (e) {
      return r.getTypeFullName(e) + (e.__assembly ? ", " + e.__assembly.name : "");
    }, r.getTypeName = function (e) {
      var t = r.getTypeFullName(e),
          i = t.indexOf("["),
          n = t.lastIndexOf(".", i >= 0 ? i : t.length);return n > 0 ? t.substr(n + 1) : t;
    }, r.getTypeNamespace = function (e) {
      var t = r.getTypeFullName(e),
          i = t.indexOf("["),
          n = t.lastIndexOf(".", i >= 0 ? i : t.length);return n > 0 ? t.substr(0, n) : "";
    }, r.getTypeAssembly = function (e) {
      return r.contains([Date, Number, Boolean, String, Function, Array], e) ? r : e.__assembly || null;
    }, r._getAssemblyType = function (e, t) {
      if (e.__types) return e.__types[t] || null;for (var i = t.split("."), n = 0; n < i.length; n++) {
        if (e = e[i[n]], !r.isValue(e)) return null;
      }return "function" != typeof e ? null : e;
    }, r.getAssemblyTypes = function (e) {
      var t = [];if (e.__types) for (var i in e.__types) {
        e.__types.hasOwnProperty(i) && t.push(e.__types[i]);
      } else {
        var n = function n(e, i) {
          for (var a in e) {
            e.hasOwnProperty(a) && n(e[a], a);
          }"function" == typeof e && r.isUpper(i.charCodeAt(0)) && t.push(e);
        };n(e, "");
      }return t;
    }, r.createAssemblyInstance = function (e, t) {
      var i = r.getType(t, e);return i ? r.createInstance(i) : null;
    }, r.getInterfaces = function (e) {
      return e.__interfaces ? e.__interfaces : e === Date || e === Number ? [l, o, s] : e === Boolean || e === String ? [l, o] : e === Array || r.isTypedArrayType(e) ? [h, m, g] : [];
    }, r.isInstanceOfType = function (e, t) {
      return !r.isNullOrUndefined(e) && ("function" == typeof t.isInstanceOfType ? t.isInstanceOfType(e) : r.isAssignableFrom(t, r.getInstanceType(e)));
    }, r.isAssignableFrom = function (e, t) {
      return e === t || "function" == typeof e.isAssignableFrom && e.isAssignableFrom(t) || t.prototype instanceof e;
    }, r.isClass = function (e) {
      return 1 == e.__class || e === Array || e === Function || e === RegExp || e === String || e === Error || e === Object;
    }, r.isEnum = function (e) {
      return !!e.__enum;
    }, r.isFlags = function (e) {
      return e.__metadata && e.__metadata.enumFlags || !1;
    }, r.isInterface = function (e) {
      return !!e.__interface;
    }, r.safeCast = function (e, t) {
      return !0 === t ? e : !1 === t ? null : r.isInstanceOfType(e, t) ? e : null;
    }, r.cast = function (e, t) {
      if (null == e) return e;if (!0 === t || !1 !== t && r.isInstanceOfType(e, t)) return e;throw new P("Cannot cast object to type " + r.getTypeFullName(t));
    }, r.getInstanceType = function (e) {
      if (!r.isValue(e)) throw new M("Cannot get type of null");try {
        return e.constructor;
      } catch (e) {
        return Object;
      }
    }, r._getType = function (t, i, n) {
      var a,
          s = !n,
          o = (n = n || /[[,\]]/g).lastIndex,
          l = n.exec(t),
          u = [];if (l) switch (a = t.substring(o, l.index), l[0]) {case "[":
          if ("[" != t[l.index + 1]) return null;for (;;) {
            if (n.exec(t), !(c = r._getType(t, e, n))) return null;if (u.push(c), "]" === (l = n.exec(t))[0]) break;if ("," !== l[0]) return null;
          }if ((l = n.exec(t)) && "," === l[0] && (n.exec(t), !(i = r.__assemblies[(n.lastIndex > 0 ? t.substring(l.index + 1, n.lastIndex - 1) : t.substring(l.index + 1)).trim()]))) return null;break;case "]":
          break;case ",":
          if (n.exec(t), !(i = r.__assemblies[(n.lastIndex > 0 ? t.substring(l.index + 1, n.lastIndex - 1) : t.substring(l.index + 1)).trim()])) return null;break;} else a = t.substring(o);if (s && n.lastIndex) return null;var c = r._getAssemblyType(i, a.trim());return u.length ? r.makeGenericType(c, u) : c;
    }, r.getType = function (t, i) {
      return t ? r._getType(t, i || e) : null;
    }, r.getDefaultValue = function (e) {
      return "function" == typeof e.getDefaultValue ? e.getDefaultValue() : e !== Boolean && (e === Date ? new Date(0) : e === Number ? 0 : null);
    }, r.createInstance = function (e) {
      return "function" == typeof e.createInstance ? e.createInstance() : e !== Boolean && (e === Date ? new Date(0) : e === Number ? 0 : e === String ? "" : new e());
    };var s = function s() {};s.__typeName = "ss.IFormattable", r.IFormattable = s, r.initInterface(s, r, { format: null });var o = function o() {};o.__typeName = "ss.IComparable", r.IComparable = o, r.initInterface(o, r, { compareTo: null });var l = function l() {};l.__typeName = "ss.IEquatable", r.IEquatable = l, r.initInterface(l, r, { equalsT: null }), r.isNullOrEmptyString = function (e) {
      return !e || !e.length;
    }, String.prototype.trim || (String.prototype.trim = function () {
      return r.trimStartString(r.trimEndString(this));
    }), r.trimEndString = function (e, t) {
      return e.replace(t ? new RegExp("[" + String.fromCharCode.apply(null, t) + "]+$") : /\s*$/, "");
    }, r.trimStartString = function (e, t) {
      return e.replace(t ? new RegExp("^[" + String.fromCharCode.apply(null, t) + "]+") : /^\s*/, "");
    }, r.trimString = function (e, t) {
      return r.trimStartString(r.trimEndString(e, t), t);
    }, r.arrayClone = function (e) {
      return 1 === e.length ? [e[0]] : Array.apply(null, e);
    }, Array.prototype.map || (Array.prototype.map = function (e, t) {
      for (var i = this.length, n = new Array(i), a = 0; a < i; a++) {
        a in this && (n[a] = e.call(t, this[a], a, this));
      }return n;
    }), Array.prototype.some || (Array.prototype.some = function (e, t) {
      for (var i = this.length, n = 0; n < i; n++) {
        if (n in this && e.call(t, this[n], n, this)) return !0;
      }return !1;
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
      var i, n;if (null == this) throw new TypeError(" this is null or not defined");var a = Object(this),
          r = a.length >>> 0;if ("function" != typeof e) throw new TypeError(e + " is not a function");for (arguments.length > 1 && (i = t), n = 0; n < r;) {
        var s;n in a && (s = a[n], e.call(i, s, n, a)), n++;
      }
    }), Array.prototype.filter || (Array.prototype.filter = function (e) {
      if (null == this) throw new TypeError();var t = Object(this),
          i = t.length >>> 0;if ("function" != typeof e) throw new TypeError();for (var n = [], a = arguments.length >= 2 ? arguments[1] : void 0, r = 0; r < i; r++) {
        if (r in t) {
          var s = t[r];e.call(a, s, r, t) && n.push(s);
        }
      }return n;
    }), r._delegateContains = function (e, t, i) {
      for (var n = 0; n < e.length; n += 2) {
        if (e[n] === t && e[n + 1] === i) return !0;
      }return !1;
    }, r._mkdel = function (e) {
      var t = function t() {
        if (2 == e.length) return e[1].apply(e[0], arguments);for (var t = r.arrayClone(e), i = 0; i < t.length; i += 2) {
          r._delegateContains(e, t[i], t[i + 1]) && t[i + 1].apply(t[i], arguments);
        }return null;
      };return t._targets = e, t;
    }, r.mkdel = function (e, t) {
      return e ? r._mkdel([e, t]) : t;
    }, r.delegateCombine = function (e, t) {
      if (!e) return t._targets ? t : r.mkdel(null, t);if (!t) return e._targets ? e : r.mkdel(null, e);var i = e._targets ? e._targets : [null, e],
          n = t._targets ? t._targets : [null, t];return r._mkdel(i.concat(n));
    }, r.delegateRemove = function (e, t) {
      if (!e || e === t) return null;if (!t) return e;var i,
          n = e._targets,
          a = null;t._targets ? (a = t._targets[0], i = t._targets[1]) : i = t;for (var s = 0; s < n.length; s += 2) {
        if (n[s] === a && n[s + 1] === i) {
          if (2 == n.length) return null;var o = r.arrayClone(n);return o.splice(s, 2), r._mkdel(o);
        }
      }return e;
    }, r.delegateEquals = function (e, t) {
      if (e === t) return !0;if (!e._targets && !t._targets) return !1;var i = e._targets || [null, e],
          n = t._targets || [null, t];if (i.length != n.length) return !1;for (var a = 0; a < i.length; a++) {
        if (i[a] !== n[a]) return !1;
      }return !0;
    };var u = function u() {};u.__typeName = "ss.Enum", r.Enum = u, r.initClass(u, r, {}), u.getValues = function (e) {
      var t = [],
          i = e.prototype;for (var n in i) {
        i.hasOwnProperty(n) && t.push(i[n]);
      }return t;
    };var c = function c() {};c.__typeName = "ss.IEnumerator", r.IEnumerator = c, r.initInterface(c, r, { current: null, moveNext: null, reset: null }, [C]);var h = function h() {};h.__typeName = "ss.IEnumerable", r.IEnumerable = h, r.initInterface(h, r, { getEnumerator: null }), r.getEnumerator = function (e) {
      return e.getEnumerator ? e.getEnumerator() : new y(e);
    };var m = function m() {};m.__typeName = "ss.ICollection", r.ICollection = m, r.initInterface(m, r, { get_count: null, add: null, clear: null, contains: null, remove: null }), r.count = function (e) {
      return e.get_count ? e.get_count() : e.length;
    }, r.add = function (e, t) {
      if (e.add) e.add(t);else {
        if (!r.isArray(e)) throw new T();e.push(t);
      }
    }, r.clear = function (e) {
      if (e.clear) e.clear();else {
        if (!r.isArray(e)) throw new T();e.length = 0;
      }
    }, r.remove = function (e, t) {
      if (e.remove) return e.remove(t);if (r.isArray(e)) {
        var i = r.indexOf(e, t);return i >= 0 && (e.splice(i, 1), !0);
      }throw new T();
    }, r.contains = function (e, t) {
      return e.contains ? e.contains(t) : r.indexOf(e, t) >= 0;
    };var d = function d() {};d.__typeName = "ss.IEqualityComparer", r.IEqualityComparer = d, r.initInterface(d, r, { areEqual: null, getObjectHashCode: null });var p = function p() {};p.__typeName = "ss.IComparer", r.IComparer = p, r.initInterface(p, r, { compare: null }), r.unbox = function (e) {
      if (!r.isValue(e)) throw new U("Nullable object must have a value.");return e;
    };var f = function f(e) {
      var t = function t() {};return t.isInstanceOfType = function (t) {
        return r.isInstanceOfType(t, e);
      }, r.registerGenericClassInstance(t, f, [e], {}, function () {
        return null;
      }, function () {
        return [];
      }), t;
    };f.__typeName = "ss.Nullable$1", r.Nullable$1 = f, r.initGenericClass(f, r, 1), f.eq = function (e, t) {
      return r.isValue(e) ? e === t : !r.isValue(t);
    }, f.ne = function (e, t) {
      return r.isValue(e) ? e !== t : r.isValue(t);
    }, f.le = function (e, t) {
      return r.isValue(e) && r.isValue(t) && e <= t;
    }, f.ge = function (e, t) {
      return r.isValue(e) && r.isValue(t) && e >= t;
    }, f.lt = function (e, t) {
      return r.isValue(e) && r.isValue(t) && e < t;
    }, f.gt = function (e, t) {
      return r.isValue(e) && r.isValue(t) && e > t;
    }, f.sub = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e - t : null;
    }, f.add = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e + t : null;
    }, f.mod = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e % t : null;
    }, f.div = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e / t : null;
    }, f.mul = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e * t : null;
    }, f.band = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e & t : null;
    }, f.bor = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e | t : null;
    }, f.xor = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e ^ t : null;
    }, f.shl = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e << t : null;
    }, f.srs = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e >> t : null;
    }, f.sru = function (e, t) {
      return r.isValue(e) && r.isValue(t) ? e >>> t : null;
    }, f.and = function (e, t) {
      return !0 === e && !0 === t || !1 !== e && !1 !== t && null;
    }, f.or = function (e, t) {
      return !0 === e || !0 === t || (!1 !== e || !1 !== t) && null;
    }, f.not = function (e) {
      return r.isValue(e) ? !e : null;
    }, f.neg = function (e) {
      return r.isValue(e) ? -e : null;
    }, f.pos = function (e) {
      return r.isValue(e) ? +e : null;
    }, f.cpl = function (e) {
      return r.isValue(e) ? ~e : null;
    }, f.lift = function () {
      for (var e = 0; e < arguments.length; e++) {
        if (!r.isValue(arguments[e])) return null;
      }return arguments[0].apply(null, Array.prototype.slice.call(arguments, 1));
    };var g = function g() {};g.__typeName = "ss.IList", r.IList = g, r.initInterface(g, r, { get_item: null, set_item: null, indexOf: null, insert: null, removeAt: null }, [m, h]), r.getItem = function (e, t) {
      return e.get_item ? e.get_item(t) : e[t];
    }, r.setItem = function (e, t, i) {
      e.set_item ? e.set_item(t, i) : e[t] = i;
    }, r.indexOf = function (e, t) {
      if (t && "function" == typeof t.equals || "function" != typeof e.indexOf) {
        if (r.isArrayOrTypedArray(e)) {
          for (var i = 0; i < e.length; i++) {
            if (r.staticEquals(e[i], t)) return i;
          }return -1;
        }return e.indexOf(t);
      }return e.indexOf(t);
    }, r.insert = function (e, t, i) {
      if (e.insert) e.insert(t, i);else {
        if (!r.isArray(e)) throw new T();e.splice(t, 0, i);
      }
    }, r.removeAt = function (e, t) {
      if (e.removeAt) e.removeAt(t);else {
        if (!r.isArray(e)) throw new T();e.splice(t, 1);
      }
    };var $ = function $() {};$.__typeName = "ss.IDictionary", r.IDictionary = $, r.initInterface($, r, { get_item: null, set_item: null, get_keys: null, get_values: null, containsKey: null, add: null, remove: null, tryGetValue: null }, [h]);var _ = function _() {};_.__typeName = "ss.Int32", r.Int32 = _, r.initClass(_, r, {}, Object, [l, o, s]), _.__class = !1, _.isInstanceOfType = function (e) {
      return "number" == typeof e && isFinite(e) && Math.round(e, 0) == e;
    }, _.getDefaultValue = _.createInstance = function () {
      return 0;
    }, _.div = function (e, t) {
      if (!r.isValue(e) || !r.isValue(t)) return null;if (0 === t) throw new x();return _.trunc(e / t);
    }, _.trunc = function (e) {
      return r.isValue(e) ? e > 0 ? Math.floor(e) : Math.ceil(e) : null;
    }, _.tryParse = function (e, t, i, n) {
      if (t.$ = 0, !/^[+-]?[0-9]+$/.test(e)) return 0;var a = parseInt(e, 10);return !(a < i || a > n) && (t.$ = a, !0);
    };var v = function v() {};v.__typeName = "ss.JsDate", r.JsDate = v, r.initClass(v, r, {}, Object, [l, o]), v.createInstance = function () {
      return new Date();
    }, v.isInstanceOfType = function (e) {
      return e instanceof Date;
    };var y = function y(e) {
      this._array = e, this._index = -1;
    };y.__typeName = "ss.ArrayEnumerator", r.ArrayEnumerator = y, r.initClass(y, r, { moveNext: function moveNext() {
        return this._index++, this._index < this._array.length;
      }, reset: function reset() {
        this._index = -1;
      }, current: function current() {
        if (this._index < 0 || this._index >= this._array.length) throw "Invalid operation";return this._array[this._index];
      }, dispose: function dispose() {} }, null, [c, C]);var w = function w(e) {
      this._keys = Object.keys(e), this._index = -1, this._object = e;
    };w.__typeName = "ss.ObjectEnumerator", r.ObjectEnumerator = w, r.initClass(w, r, { moveNext: function moveNext() {
        return this._index++, this._index < this._keys.length;
      }, reset: function reset() {
        this._index = -1;
      }, current: function current() {
        if (this._index < 0 || this._index >= this._keys.length) throw new U("Invalid operation");var e = this._keys[this._index];return { key: e, value: this._object[e] };
      }, dispose: function dispose() {} }, null, [c, C]);var b = function b() {};b.__typeName = "ss.EqualityComparer", r.EqualityComparer = b, r.initClass(b, r, { areEqual: function areEqual(e, t) {
        return r.staticEquals(e, t);
      }, getObjectHashCode: function getObjectHashCode(e) {
        return r.isValue(e) ? r.getHashCode(e) : 0;
      } }, null, [d]), b.def = new b();var S = function S(e) {
      this.f = e;
    };S.__typeName = "ss.Comparer", r.Comparer = S, r.initClass(S, r, { compare: function compare(e, t) {
        return this.f(e, t);
      } }, null, [p]), S.def = new S(function (e, t) {
      return r.isValue(e) ? r.isValue(t) ? r.compare(e, t) : 1 : r.isValue(t) ? -1 : 0;
    });var C = function C() {};C.__typeName = "ss.IDisposable", r.IDisposable = C, r.initInterface(C, r, { dispose: null });var I = function I(e) {
      this._parts = r.isValue(e) && "" != e ? [e] : [], this.length = r.isValue(e) ? e.length : 0;
    };I.__typeName = "ss.StringBuilder", r.StringBuilder = I, r.initClass(I, r, { append: function append(e) {
        if (r.isValue(e)) {
          var t = e.toString();r.add(this._parts, t), this.length += t.length;
        }return this;
      }, appendChar: function appendChar(e) {
        return this.append(String.fromCharCode(e));
      }, appendLine: function appendLine(e) {
        return this.append(e), this.append("\r\n"), this;
      }, appendLineChar: function appendLineChar(e) {
        return this.appendLine(String.fromCharCode(e));
      }, clear: function clear() {
        this._parts = [], this.length = 0;
      }, toString: function toString() {
        return this._parts.join("");
      } });var E = function E() {};E.__typeName = "ss.EventArgs", r.EventArgs = E, r.initClass(E, r, {}), E.Empty = new E();var N = function N(e, t) {
      this._message = e || "An error occurred.", this._innerException = t || null, this._error = new Error();
    };N.__typeName = "ss.Exception", r.Exception = N, r.initClass(N, r, { get_message: function get_message() {
        return this._message;
      }, get_innerException: function get_innerException() {
        return this._innerException;
      }, get_stack: function get_stack() {
        return this._error.stack;
      }, toString: function toString() {
        var e = this._message,
            t = this;return r.isNullOrEmptyString(e) && (e = r.isValue(r.getInstanceType(t)) && r.isValue(r.getTypeFullName(r.getInstanceType(t))) ? r.getTypeFullName(r.getInstanceType(t)) : "[object Exception]"), e;
      } }), N.wrap = function (e) {
      return r.isInstanceOfType(e, N) ? e : e instanceof TypeError ? new M(e.message, new O(e)) : e instanceof RangeError ? new D(null, e.message, new O(e)) : e instanceof Error ? new O(e) : new N(e.toString());
    };var A = function A(e, t) {
      N.call(this, e || "The method or operation is not implemented.", t);
    };A.__typeName = "ss.NotImplementedException", r.NotImplementedException = A, r.initClass(A, r, {}, N);var T = function T(e, t) {
      N.call(this, e || "Specified method is not supported.", t);
    };T.__typeName = "ss.NotSupportedException", r.NotSupportedException = T, r.initClass(T, r, {}, N);var V = function V(e, t) {
      this.innerExceptions = r.isValue(t) ? r.arrayFromEnumerable(t) : [], N.call(this, e || "One or more errors occurred.", this.innerExceptions.length ? this.innerExceptions[0] : null);
    };V.__typeName = "ss.AggregateException", r.AggregateException = V, r.initClass(V, r, { flatten: function flatten() {
        for (var e = [], t = 0; t < this.innerExceptions.length; t++) {
          var i = this.innerExceptions[t];r.isInstanceOfType(i, V) ? e.push.apply(e, i.flatten().innerExceptions) : e.push(i);
        }return new V(this._message, e);
      } }, N);var k = function k(e, t, i) {
      N.call(this, t || (e.length && e[0] ? e[0].toString() : "An error occurred"), i), this.arguments = r.arrayClone(e);
    };k.__typeName = "ss.PromiseException", r.PromiseException = k, r.initClass(k, r, { get_arguments: function get_arguments() {
        return this._arguments;
      } }, N);var O = function O(e, t, i) {
      N.call(this, t || e.message, i), this.error = e;
    };O.__typeName = "ss.JsErrorException", r.JsErrorException = O, r.initClass(O, r, { get_stack: function get_stack() {
        return this.error.stack;
      } }, N);var F = function F(e, t, i) {
      N.call(this, e || "Value does not fall within the expected range.", i), this.paramName = t || null;
    };F.__typeName = "ss.ArgumentException", r.ArgumentException = F, r.initClass(F, r, {}, N);var R = function R(e, t, i) {
      t || (t = "Value cannot be null.", e && (t += "\nParameter name: " + e)), F.call(this, t, e, i);
    };R.__typeName = "ss.ArgumentNullException", r.ArgumentNullException = R, r.initClass(R, r, {}, F);var D = function D(e, t, i, n) {
      t || (t = "Value is out of range.", e && (t += "\nParameter name: " + e)), F.call(this, t, e, i), this.actualValue = n || null;
    };D.__typeName = "ss.ArgumentOutOfRangeException", r.ArgumentOutOfRangeException = D, r.initClass(D, r, {}, F);var z = function z(e, t) {
      N.call(this, e || "Invalid format.", t);
    };z.__typeName = "ss.FormatException", r.FormatException = z, r.initClass(z, r, {}, N);var x = function x(e, t) {
      N.call(this, e || "Division by 0.", t);
    };x.__typeName = "ss.DivideByZeroException", r.DivideByZeroException = x, r.initClass(x, r, {}, N);var P = function P(e, t) {
      N.call(this, e || "The cast is not valid.", t);
    };P.__typeName = "ss.InvalidCastException", r.InvalidCastException = P, r.initClass(P, r, {}, N);var U = function U(e, t) {
      N.call(this, e || "Operation is not valid due to the current state of the object.", t);
    };U.__typeName = "ss.InvalidOperationException", r.InvalidOperationException = U, r.initClass(U, r, {}, N);var M = function M(e, t) {
      N.call(this, e || "Object is null.", t);
    };M.__typeName = "ss.NullReferenceException", r.NullReferenceException = M, r.initClass(M, r, {}, N);var H = function H(e, t) {
      N.call(this, e || "Key not found.", t);
    };H.__typeName = "ss.KeyNotFoundException", r.KeyNotFoundException = H, r.initClass(H, r, {}, N);var L = function L(e, t) {
      N.call(this, e || "Ambiguous match.", t);
    };L.__typeName = "ss.AmbiguousMatchException", r.AmbiguousMatchException = L, r.initClass(L, r, {}, N);var j = function j(e, t) {
      this._getEnumerator = e, this._this = t;
    };j.__typeName = "ss.IteratorBlockEnumerable", r.IteratorBlockEnumerable = j, r.initClass(j, r, { getEnumerator: function getEnumerator() {
        return this._getEnumerator.call(this._this);
      } }, null, [h]);var W = function W(e, t, i, n) {
      this._moveNext = e, this._getCurrent = t, this._dispose = i, this._this = n;
    };W.__typeName = "ss.IteratorBlockEnumerator", r.IteratorBlockEnumerator = W, r.initClass(W, r, { moveNext: function moveNext() {
        try {
          return this._moveNext.call(this._this);
        } catch (e) {
          throw this._dispose && this._dispose.call(this._this), e;
        }
      }, current: function current() {
        return this._getCurrent.call(this._this);
      }, reset: function reset() {
        throw new T("Reset is not supported.");
      }, dispose: function dispose() {
        this._dispose && this._dispose.call(this._this);
      } }, null, [c, C]);var B = function B(e) {
      this._valueFactory = e, this.isValueCreated = !1;
    };B.__typeName = "ss.Lazy", r.Lazy = B, r.initClass(B, r, { value: function value() {
        return this.isValueCreated || (this._value = this._valueFactory(), delete this._valueFactory, this.isValueCreated = !0), this._value;
      } }), void 0 === e.HTMLElement && (e.HTMLElement = Element), void 0 === e.MessageEvent && (e.MessageEvent = Event), Date.now = Date.now || function () {
      return +new Date();
    }, e.ss = r;
  }(e);var t = e.ss,
      i = e.HTMLElement,
      n = e.MessageEvent;
  /*! BEGIN CoreSlim */
  !function () {
    var i = {};e.tab = e.tab || {}, t.initAssembly(i, "tabcoreslim");var n = function n() {
      this.$filters = null, this.$filters = [];
    };n.__typeName = "tab.BaseLogAppender", e.tab.BaseLogAppender = n;var a = function a() {
      this.$levelMethods = null, n.call(this);
    };a.__typeName = "tab.ConsoleLogAppender", e.tab.ConsoleLogAppender = a;var r = function r() {};r.__typeName = "tab.CookieHelper", r.getValueForCookie = function (e) {
      var i = s.getCookie().match(new RegExp("(?:^|;) ?" + e + "=([^;]*)(?:;|$)"));return t.isNullOrUndefined(i) || i.length < 2 ? null : i[1];
    }, r.setCookie = function (e, i, n, a) {
      var r = e + "=" + i + ";path=" + n + ";";t.staticEquals(a, null) || (r += "expires=" + a.toUTCString()), s.setCookie(r);
    }, r.deleteCookie = function (e, t) {
      var i = new Date(0);s.setCookie(e + "=;path=" + t + ";expires=" + i.toUTCString());
    }, e.tab.CookieHelper = r;var s = function s() {};s.__typeName = "tab.DocumentHelper", s.get_documentClientWidth = function () {
      return document.documentElement.clientWidth;
    }, s.get_documentClientHeight = function () {
      return document.documentElement.clientHeight;
    }, s.getCookie = function () {
      return document.cookie;
    }, s.setCookie = function (e) {
      document.cookie = e;
    }, e.tab.DocumentHelper = s;var o = function o() {};o.__typeName = "tab.EscapingUtil", o.escapeHtml = function (e) {
      var i = t.coalesce(e, "");return i = (i = (i = (i = (i = (i = i.replace(new RegExp("&", "g"), "&amp;")).replace(new RegExp("<", "g"), "&lt;")).replace(new RegExp(">", "g"), "&gt;")).replace(new RegExp('"', "g"), "&quot;")).replace(new RegExp("'", "g"), "&#39;")).replace(new RegExp("/", "g"), "&#47;"), new RegExp("^ +$").test(i) && (i = i.replace(new RegExp(" ", "g"), "&nbsp;")), i;
    }, e.tab.EscapingUtil = o;var l = function l() {};l.__typeName = "tab.LazyUtil", l.lazyInitStaticField = function (e, i, n) {
      var a = e[i];return t.isNullOrUndefined(a) && (a = n(), e[i] = a), a;
    }, e.tab.LazyUtil = l;var u = function u() {};u.__typeName = "tab.Log", u.get = function (e) {
      return h.lazyGetLogger(t.getInstanceType(e));
    }, u.get$1 = function (e) {
      return h.lazyGetLogger(e);
    }, e.tab.Log = u;var c = function c(e) {
      this.$appenderFactoryFunc = null, this.$1$InstanceField = null, this.$appenderFactoryFunc = e;
    };c.__typeName = "tab.LogAppenderInstance", e.tab.LogAppenderInstance = c;var h = function h(e) {
      this.$name = null, this.$name = e;
    };h.__typeName = "tab.Logger", h.get_globalLog = function () {
      return h.global;
    }, h.get_$appenders = function () {
      return l.lazyInitStaticField(h, "appenders", function () {
        return [];
      });
    }, h.get_$filters = function () {
      return l.lazyInitStaticField(h, "filters", function () {
        return [];
      });
    }, h.get_$nullLog = function () {
      return t.cast(l.lazyInitStaticField(h, "nullLog", function () {
        return new h("");
      }), h);
    }, h.clearFilters = function () {
      for (var e = h.get_$appenders(), t = 0; t < e.length; t++) {
        e[t].clearFilters();
      }h.get_$filters().splice(0, h.get_$filters().length);
    }, h.filterByLogger = function (e, i) {
      i = i || 0, h.$addFilter(function (n, a) {
        return t.referenceEquals(n, e) && a >= i;
      });
    }, h.filterByType = function (e, i) {
      i = i || 0, h.$addFilter(function (n, a) {
        return a >= i && t.referenceEquals(n.get_name(), t.getTypeName(e));
      });
    }, h.filterByName = function (e, i) {
      i = i || 0;var n = new RegExp(e, "i");h.$addFilter(function (e, a) {
        return a >= i && t.isValue(e.get_name().match(n));
      });
    }, h.clearAppenders = function () {
      h.get_$appenders().splice(0, h.get_$filters().length);
    }, h.hasAppender = function (e) {
      return h.get_$appenders().indexOf(e) > -1;
    }, h.addAppender = function (e) {
      for (var t = h.get_$filters(), i = 0; i < t.length; i++) {
        var n = t[i];e.addFilter(n);
      }h.get_$appenders().push(e);
    }, h.removeAppender = function (e) {
      var t = h.get_$appenders().indexOf(e);t > -1 && h.get_$appenders().splice(t, 1);
    }, h.lazyGetLogger = function (e) {
      return l.lazyInitStaticField(e, "_logger", function () {
        return h.getLogger(e, null);
      });
    }, h.getLogger = function (e, i) {
      var n = h.getLoggerWithName(t.getTypeName(e));return t.isValue(i) && h.filterByLogger(n, t.unbox(i)), n;
    }, h.getLoggerWithName = function (e) {
      return new h(e);
    }, h.$setupUrlFilters = function () {
      var e = p.getUriQueryParameters(window.self.location.search);if (t.keyExists(e, h.$logQueryParam)) {
        h.clearFilters();var i = e[h.$logQueryParam];0 === i.length && h.filterByName(".*", 0);for (var n = 0; n < i.length; n++) {
          var a = i[n].split(String.fromCharCode(58)),
              r = 1;if (a.length > 0 && t.isValue(a[1])) {
            var s = a[1].toLowerCase(),
                o = h.loggerLevelNames.indexOf(s);o >= 0 && (r = o);
          }h.filterByName(a[0], r);
        }
      }
    }, h.$addFilter = function (e) {
      h.get_$filters().push(e);for (var t = h.get_$appenders(), i = 0; i < t.length; i++) {
        t[i].addFilter(e);
      }
    }, e.tab.Logger = h;var m = function m() {};m.__typeName = "tab.LoggerLevel", e.tab.LoggerLevel = m;var d = function d() {};d.__typeName = "tab.ScriptEx", e.tab.ScriptEx = d;var p = function p() {};p.__typeName = "tab.UriExtensions", p.getUriQueryParameters = function (e) {
      var i = {};if (t.isNullOrUndefined(e)) return i;var n = e.indexOf("?");if (n < 0) return i;var a = e.substr(n + 1),
          r = a.indexOf("#");if (r >= 0 && (a = a.substr(0, r)), t.isNullOrEmptyString(a)) return i;for (var s = a.split("&"), o = 0; o < s.length; o++) {
        var l,
            u = s[o].split("="),
            c = decodeURIComponent(u[0]);t.keyExists(i, c) ? l = i[c] : (l = [], i[c] = l), u.length > 1 && l.push(decodeURIComponent(u[1]));
      }return i;
    }, e.tab.UriExtensions = p;var f = function f(e) {
      this.$window = null, this.$window = e;
    };f.__typeName = "tab.WindowHelper", f.get_windowSelf = function () {
      return window.self;
    }, f.get_windowParent = function () {
      return window.parent;
    }, f.get_selection = function () {
      return "function" == typeof window.getSelection ? window.getSelection() : "function" == typeof document.getSelection ? document.getSelection() : null;
    }, f.close = function (e) {
      e.close();
    }, f.getOpener = function (e) {
      return e.opener;
    }, f.getLocation = function (e) {
      return e.location;
    }, f.getPathAndSearch = function (e) {
      return e.location.pathname + e.location.search;
    }, f.setLocationHref = function (e, t) {
      e.location.href = t;
    }, f.locationReplace = function (e, t) {
      e.location.replace(t);
    }, f.open = function (e, t, i) {
      return window.open(e, t, i);
    }, f.reload = function (e, t) {
      e.location.reload(t);
    }, f.requestAnimationFrame = function (e) {
      return f.$requestAnimationFrameFunc(e);
    }, f.cancelAnimationFrame = function (e) {
      t.isValue(e) && f.$cancelAnimationFrameFunc(e);
    }, f.setTimeout = function (e, t) {
      return window.setTimeout(e, t);
    }, f.setInterval = function (e, t) {
      return window.setInterval(e, t);
    }, f.addListener = function (e, t, i) {
      "addEventListener" in e ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i);
    }, f.removeListener = function (e, t, i) {
      "removeEventListener" in e ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i);
    }, f.$setDefaultRequestAnimationFrameImpl = function () {
      var e = 0;f.$requestAnimationFrameFunc = function (t) {
        var i = new Date().getTime(),
            n = Math.max(0, 16 - (i - e));return e = i + n, window.setTimeout(t, n);
      };
    }, f.clearSelection = function () {
      var e = f.get_selection();t.isValue(e) && ("function" == typeof e.removeAllRanges ? e.removeAllRanges() : "function" == typeof e.empty && e.empty());
    }, e.tab.WindowHelper = f, t.initClass(n, i, { clearFilters: function clearFilters() {
        t.clear(this.$filters);
      }, addFilter: function addFilter(e) {
        this.$filters.push(e);
      }, removeFilter: function removeFilter(e) {
        t.remove(this.$filters, e);
      }, log: function log(e, t, i, n) {
        for (var a = 0; a < this.$filters.length; a++) {
          if ((0, this.$filters[a])(e, t)) return void this.logInternal(e, t, i, n);
        }
      }, logInternal: null, formatMessage: function formatMessage(e, i) {
        if (t.isNullOrUndefined(i) || 0 === i.length) return e;for (var n = new t.StringBuilder(), a = 0, r = !1, s = 0; s < e.length; s++) {
          var o = e.charCodeAt(s);if (37 === o) r ? (n.append("%"), r = !1) : r = !0;else {
            if (r) switch (o) {case 98:case 115:case 100:case 110:case 111:
                n.append(i.length > a ? i[a] : ""), a++;break;} else n.appendChar(o);r = !1;
          }
        }return n.toString();
      } }), t.initClass(a, i, { logInternal: function logInternal(e, t, i, n) {
        if ("object" == _typeof(window.console)) {
          i = e.get_name() + ": " + i;var a = [],
              r = a.concat(i);a = r.concat.apply(r, n);try {
            Function.prototype.apply.call(this.$getConsoleMethod(t), window.console, a);
          } catch (e) {}
        }
      }, $getConsoleMethod: function $getConsoleMethod(e) {
        var i = window.self.console;t.isNullOrUndefined(this.$levelMethods) && (this.$levelMethods = {}, this.$levelMethods[1..toString()] = i.log, this.$levelMethods[4..toString()] = i.error, this.$levelMethods[2..toString()] = i.info, this.$levelMethods[3..toString()] = i.warn);var n = this.$levelMethods[e.toString()];return t.isNullOrUndefined(n) && (n = i.log), n;
      } }, n), t.initClass(r, i, {}), t.initClass(s, i, {}), t.initClass(o, i, {}), t.initClass(l, i, {}), t.initClass(u, i, {}), t.initClass(c, i, { get_instance: function get_instance() {
        return this.$1$InstanceField;
      }, set_instance: function set_instance(e) {
        this.$1$InstanceField = e;
      }, enableLogging: function enableLogging(e) {
        t.isNullOrUndefined(this.get_instance()) ? (this.set_instance(this.$appenderFactoryFunc()), h.addAppender(this.get_instance())) : h.hasAppender(this.get_instance()) || h.addAppender(this.get_instance()), this.get_instance().addFilter(t.coalesce(e, function (e, t) {
          return !0;
        }));
      }, disableLogging: function disableLogging() {
        t.isNullOrUndefined(this.get_instance()) || (h.removeAppender(this.get_instance()), this.set_instance(null));
      } }), t.initClass(h, i, { get_name: function get_name() {
        return this.$name;
      }, debug: function debug(e, t) {
        this.$logInternal(1, e, t);
      }, info: function info(e, t) {
        this.$logInternal(2, e, t);
      }, warn: function warn(e, t) {
        this.$logInternal(3, e, t);
      }, error: function error(e, t) {
        this.$logInternal(4, e, t);
      }, log: function log(e, t, i) {
        this.$logInternal(e, t, i);
      }, $logInternal: function $logInternal(e, t, i) {
        try {
          for (var n = h.get_$appenders(), a = 0; a < n.length; a++) {
            n[a].log(this, e, t, i);
          }
        } catch (e) {}
      } }), t.initEnum(m, i, { all: 0, debug: 1, info: 2, warn: 3, error: 4, off: 5 }), t.initClass(d, i, {}), t.initClass(p, i, {}), t.initClass(f, i, { get_pageXOffset: function get_pageXOffset() {
        return f.$pageXOffsetFunc(this.$window);
      }, get_pageYOffset: function get_pageYOffset() {
        return f.$pageYOffsetFunc(this.$window);
      }, get_clientWidth: function get_clientWidth() {
        return f.$clientWidthFunc(this.$window);
      }, get_clientHeight: function get_clientHeight() {
        return f.$clientHeightFunc(this.$window);
      }, get_innerWidth: function get_innerWidth() {
        return f.$innerWidthFunc(this.$window);
      }, get_outerWidth: function get_outerWidth() {
        return f.$outerWidthFunc(this.$window);
      }, get_innerHeight: function get_innerHeight() {
        return f.$innerHeightFunc(this.$window);
      }, get_outerHeight: function get_outerHeight() {
        return f.$outerHeightFunc(this.$window);
      }, get_screenLeft: function get_screenLeft() {
        return f.$screenLeftFunc(this.$window);
      }, get_screenTop: function get_screenTop() {
        return f.$screenTopFunc(this.$window);
      }, isQuirksMode: function isQuirksMode() {
        return "BackCompat" === document.compatMode;
      } }), h.global = h.getLoggerWithName("global"), h.loggerLevelNames = [], h.$logQueryParam = ":log", h.$setupUrlFilters(), h.loggerLevelNames[0] = "all", h.loggerLevelNames[1] = "debug", h.loggerLevelNames[2] = "info", h.loggerLevelNames[3] = "warn", h.loggerLevelNames[4] = "error", h.loggerLevelNames[5] = "off", (a.globalAppender = new c(function () {
      return new a();
    })).enableLogging(function (e, t) {
      return t >= 2;
    }), function () {
      f.blank = "_blank", f.$innerWidthFunc = null, f.$innerHeightFunc = null, f.$clientWidthFunc = null, f.$clientHeightFunc = null, f.$pageXOffsetFunc = null, f.$pageYOffsetFunc = null, f.$screenLeftFunc = null, f.$screenTopFunc = null, f.$outerWidthFunc = null, f.$outerHeightFunc = null, f.$requestAnimationFrameFunc = null, f.$cancelAnimationFrameFunc = null, f.$innerWidthFunc = "innerWidth" in window ? function (e) {
        return e.innerWidth;
      } : function (e) {
        return e.document.documentElement.offsetWidth;
      }, f.$outerWidthFunc = "outerWidth" in window ? function (e) {
        return e.outerWidth;
      } : f.$innerWidthFunc, f.$innerHeightFunc = "innerHeight" in window ? function (e) {
        return e.innerHeight;
      } : function (e) {
        return e.document.documentElement.offsetHeight;
      }, f.$outerHeightFunc = "outerHeight" in window ? function (e) {
        return e.outerHeight;
      } : f.$innerHeightFunc, f.$clientWidthFunc = "clientWidth" in window ? function (e) {
        return e.clientWidth;
      } : function (e) {
        return e.document.documentElement.clientWidth;
      }, f.$clientHeightFunc = "clientHeight" in window ? function (e) {
        return e.clientHeight;
      } : function (e) {
        return e.document.documentElement.clientHeight;
      }, f.$pageXOffsetFunc = t.isValue(window.self.pageXOffset) ? function (e) {
        return e.pageXOffset;
      } : function (e) {
        return e.document.documentElement.scrollLeft;
      }, f.$pageYOffsetFunc = t.isValue(window.self.pageYOffset) ? function (e) {
        return e.pageYOffset;
      } : function (e) {
        return e.document.documentElement.scrollTop;
      }, f.$screenLeftFunc = "screenLeft" in window ? function (e) {
        return t.unbox(t.cast(e.screenLeft, t.Int32));
      } : function (e) {
        return e.screenX;
      }, f.$screenTopFunc = "screenTop" in window ? function (e) {
        return t.unbox(t.cast(e.screenTop, t.Int32));
      } : function (e) {
        return e.screenY;
      };var e = "requestAnimationFrame",
          i = "cancelAnimationFrame",
          n = ["ms", "moz", "webkit", "o"],
          a = null,
          r = null;e in window && (a = e), i in window && (r = i);for (var s = 0; s < n.length && (t.isNullOrUndefined(a) || t.isNullOrUndefined(r)); ++s) {
        var o = n[s],
            l = o + "RequestAnimationFrame";t.isNullOrUndefined(a) && l in window && (a = l), t.isNullOrUndefined(r) && ((l = o + "CancelAnimationFrame") in window && (r = l), (l = o + "CancelRequestAnimationFrame") in window && (r = l));
      }t.isValue(a) ? f.$requestAnimationFrameFunc = function (e) {
        return window[a](e);
      } : f.$setDefaultRequestAnimationFrameImpl(), f.$cancelAnimationFrameFunc = t.isValue(r) ? function (e) {
        window[r](e);
      } : window.clearTimeout;
    }();
  }();var a = e.tab;e.tableauSoftware = e.tableauSoftware || {},
  /*! BEGIN ApiShared */
  function () {
    var r = {};e.tab = e.tab || {}, e.tableauSoftware = e.tableauSoftware || {}, t.initAssembly(r, "vqlapishared");var s = function s() {};s.__typeName = "tab.$DeferredUtil", s.$coerceToTrustedPromise = function (e) {
      var i;if (e instanceof tableauSoftware.Promise) i = t.cast(e, _);else if (t.isValue(e) && "function" == typeof e.valueOf && (e = e.valueOf()), s.$isPromise(e)) {
        var n = new f();t.cast(e, _).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject)), i = n.get_promise();
      } else i = s.$resolved(e);return i;
    }, s.$reject = function (e) {
      return s.$coerceToTrustedPromise(e).then(function (e) {
        return s.$rejected(t.cast(e, t.Exception));
      }, null);
    }, s.$resolved = function (e) {
      return new _(function (i, n) {
        try {
          return s.$coerceToTrustedPromise(t.isValue(i) ? i(e) : e);
        } catch (e) {
          var a = t.Exception.wrap(e);return s.$rejected(a);
        }
      });
    }, s.$rejected = function (e) {
      return new _(function (i, n) {
        try {
          return t.isValue(n) ? s.$coerceToTrustedPromise(n(e)) : s.$rejected(e);
        } catch (e) {
          var a = t.Exception.wrap(e);return s.$rejected(a);
        }
      });
    }, s.$isPromise = function (e) {
      return t.isValue(e) && "function" == typeof e.then;
    };var o = function o() {
      this.$hostId = null, this.$1$StateReadyForQueryField = null;
    };o.__typeName = "tab.$DoNothingCrossDomainHandler";var l = function l(e, t, i, n) {
      this.$1$NameField = null, this.$1$HostIdField = null, this.$1$CommandIdField = null, this.$1$ParametersField = null, this.set_name(e), this.set_commandId(t), this.set_hostId(i), this.set_parameters(n);
    };l.__typeName = "tab._ApiCommand", l.generateNextCommandId = function () {
      var e = "cmd" + l.$nextCommandId;return l.$nextCommandId++, e;
    }, l.parse = function (e) {
      var i,
          n,
          a = e.indexOf(String.fromCharCode(44));if (a < 0) return i = t.cast(e, String), new l(i, null, null, null);i = t.cast(e.substr(0, a), String);var r,
          s = e.substr(a + 1);if ((a = s.indexOf(String.fromCharCode(44))) < 0) return new l(i, n = s, null, null);n = s.substr(0, a);var o = s.substr(a + 1);if ((a = o.indexOf(String.fromCharCode(44))) < 0) return new l(i, n, r = o, null);r = o.substr(0, a);var u = o.substr(a + 1);return l.lastResponseMessage = e, "api.GetClientInfoCommand" === i && (l.lastClientInfoResponseMessage = e), new l(i, n, r, u);
    }, e.tab._ApiCommand = l;var u = function u() {};u.__typeName = "tab._ApiObjectRegistry", u.registerApiMessageRouter = function (e) {
      return u.$registerType(Object).call(null, e);
    }, u.getApiMessageRouter = function () {
      return u.$getSingleton(Object).call(null);
    }, u.disposeApiMessageRouter = function () {
      u.$clearSingletonInstance(Object).call(null);
    }, u.$registerType = function (e) {
      return function (i) {
        var n = window._ApiObjectRegistryGlobalState.creationRegistry,
            a = t.getTypeFullName(e),
            r = n[a];return n[a] = i, r;
      };
    }, u.$createType = function (e) {
      return function () {
        var i = t.getTypeFullName(e),
            n = window._ApiObjectRegistryGlobalState.creationRegistry[i];if (t.isNullOrUndefined(n)) throw y.createInternalError("No creation function has been registered for interface type '" + i + "'.");return n();
      };
    }, u.$getSingleton = function (e) {
      return function () {
        var i = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry,
            n = t.getTypeFullName(e),
            a = t.cast(i[n], e);return t.isNullOrUndefined(a) && (a = u.$createType(e).call(null), i[n] = a), a;
      };
    }, u.$clearSingletonInstance = function (e) {
      return function () {
        var i = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry,
            n = t.getTypeFullName(e),
            a = t.cast(i[n], e);return delete i[n], a;
      };
    }, e.tab._ApiObjectRegistry = u;var c = function c(e, t, i) {
      this.$workbookName = null, this.$worksheetName = null, this.$data = null, this.$workbookName = e, this.$worksheetName = t, this.$data = i;
    };c.__typeName = "tab._ApiServerNotification", c.deserialize = function (e) {
      var i = JSON.parse(e),
          n = t.cast(i["api.workbookName"], String),
          a = t.cast(i["api.worksheetName"], String),
          r = i["api.commandData"];return new c(n, a, r);
    }, e.tab._ApiServerNotification = c;var h = function h(e) {
      this.$commandResult = null, this.$commandData = null;var i = JSON.parse(e);this.$commandResult = t.cast(i["api.commandResult"], String), this.$commandData = i["api.commandData"];
    };h.__typeName = "tab._ApiServerResultParser", e.tab._ApiServerResultParser = h;var m = function m() {
      this.$items = [], this.$itemMap = {};
    };m.__typeName = "tab._CollectionImpl", e.tab._CollectionImpl = m;var d = function d(e, i, n, a) {
      this.$fieldName = null, this.$dataType = null, this.$isReferenced = !1, this.$index = 0, $.verifyString(e, "Column Field Name"), this.$fieldName = e, this.$dataType = i, this.$isReferenced = t.coalesce(n, !1), this.$index = a;
    };d.__typeName = "tab._ColumnImpl", e.tab._ColumnImpl = d;var p = function p(e, t, i, n) {
      this.$name = null, this.$rows = null, this.$totalRowCount = 0, this.$columns = null, this.$isSummaryData = !1, this.$rows = e, this.$totalRowCount = i, this.$columns = n, this.$isSummaryData = t, this.$name = t ? "Summary Data Table" : "Underlying Data Table";
    };p.__typeName = "tab._DataTableImpl", e.tab._DataTableImpl = p;var f = function f() {
      this.$promise = null, this.$thenFunc = null, this.$listeners = [], this.$resolveFunc = null, this.$promise = new _(t.mkdel(this, this.then)), this.$thenFunc = t.mkdel(this, this.$preResolutionThen), this.$resolveFunc = t.mkdel(this, this.$transitionToFulfilled);
    };f.__typeName = "tab._DeferredImpl", e.tab._DeferredImpl = f;var g = function g() {};g.__typeName = "tab._jQueryShim", g.isFunction = function (e) {
      return t.referenceEquals(g.type(e), g.$functionType);
    }, g.isArray = function (e) {
      return t.isValue(Array.isArray) ? t.unbox(t.cast(Array.isArray(e), Boolean)) : t.referenceEquals(g.type(e), g.$arrayType);
    }, g.type = function (e) {
      return t.isNullOrUndefined(e) ? String(e) : g.$class2type[t.cast(g.$toString.call(e), String)] || g.$objectType;
    }, g.trim = function (e) {
      return t.isValue(g.$trim) ? t.isNullOrUndefined(e) ? "" : t.cast(g.$trim.call(e), String) : t.isNullOrUndefined(e) ? "" : e.toString().replace(g.$trimLeft, "").replace(g.$trimRight, "");
    }, g.parseJSON = function (e) {
      if ("string" != typeof e || t.isNullOrUndefined(e)) return null;if (e = g.trim(e), t.isValue(JSON) && t.isValue(JSON.parse)) return JSON.parse(e);if (g.$rvalidchars.test(e.replace(g.$rvalidescape, "@").replace(g.$rvalidtokens, "]").replace(g.$rvalidbraces, ""))) return new Function("return " + e)();throw new t.Exception("Invalid JSON: " + e);
    }, e.tab._jQueryShim = g;var $ = function $() {};$.__typeName = "tab._Param", $.verifyString = function (e, i) {
      if (t.isNullOrUndefined(e) || 0 === e.length) throw y.createInternalStringArgumentException(i);
    }, $.verifyValue = function (e, i) {
      if (t.isNullOrUndefined(e)) throw y.createInternalNullArgumentException(i);
    }, e.tab._Param = $;var _ = function _(e) {
      this.then = null, this.then = e;
    };_.__typeName = "tab._PromiseImpl", e.tab._PromiseImpl = _;var v = function v(e, t, i, n) {
      this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.left = e, this.top = t, this.width = i, this.height = n;
    };v.__typeName = "tab._Rect", e.tab._Rect = v;var y = function y() {};y.__typeName = "tab._TableauException", y.create = function (e, i) {
      var n = new t.Exception(i);return n.tableauSoftwareErrorCode = e, n;
    }, y.createInternalError = function (e) {
      return t.isValue(e) ? y.create("internalError", "Internal error. Please contact Tableau support with the following information: " + e) : y.create("internalError", "Internal error. Please contact Tableau support");
    }, y.createInternalNullArgumentException = function (e) {
      return y.createInternalError("Null/undefined argument '" + e + "'.");
    }, y.createInternalStringArgumentException = function (e) {
      return y.createInternalError("Invalid string argument '" + e + "'.");
    }, y.createServerError = function (e) {
      return y.create("serverError", e);
    }, y.createNotActiveSheet = function () {
      return y.create("notActiveSheet", "Operation not allowed on non-active sheet");
    }, y.createInvalidCustomViewName = function (e) {
      return y.create("invalidCustomViewName", "Invalid custom view name: " + e);
    }, y.createInvalidParameter = function (e) {
      return y.create("invalidParameter", "Invalid parameter: " + e);
    }, y.createInvalidFilterFieldNameOrValue = function (e) {
      return y.create("invalidFilterFieldNameOrValue", "Invalid filter field name or value: " + e);
    }, y.createInvalidDateParameter = function (e) {
      return y.create("invalidDateParameter", "Invalid date parameter: " + e);
    }, y.createNullOrEmptyParameter = function (e) {
      return y.create("nullOrEmptyParameter", "Parameter cannot be null or empty: " + e);
    }, y.createMissingMaxSize = function () {
      return y.create("missingMaxSize", "Missing maxSize for SheetSizeBehavior.ATMOST");
    }, y.createMissingMinSize = function () {
      return y.create("missingMinSize", "Missing minSize for SheetSizeBehavior.ATLEAST");
    }, y.createMissingMinMaxSize = function () {
      return y.create("missingMinMaxSize", "Missing minSize or maxSize for SheetSizeBehavior.RANGE");
    }, y.createInvalidRangeSize = function () {
      return y.create("invalidSize", "Missing minSize or maxSize for SheetSizeBehavior.RANGE");
    }, y.createInvalidSizeValue = function () {
      return y.create("invalidSize", "Size value cannot be less than zero");
    }, y.createInvalidSheetSizeParam = function () {
      return y.create("invalidSize", "Invalid sheet size parameter");
    }, y.createSizeConflictForExactly = function () {
      return y.create("invalidSize", "Conflicting size values for SheetSizeBehavior.EXACTLY");
    }, y.createInvalidSizeBehaviorOnWorksheet = function () {
      return y.create("invalidSizeBehaviorOnWorksheet", "Only SheetSizeBehavior.AUTOMATIC is allowed on Worksheets");
    }, y.createNoUrlForHiddenWorksheet = function () {
      return y.create("noUrlForHiddenWorksheet", "Hidden worksheets do not have a URL.");
    }, y.createInvalidAggregationFieldName = function (e) {
      return y.create("invalidAggregationFieldName", "Invalid aggregation type for field '" + e + "'");
    }, y.createInvalidToolbarButtonName = function (e) {
      return y.create("invalidToolbarButtonName", "Invalid toolbar button name: '" + e + "'");
    }, y.createIndexOutOfRange = function (e) {
      return y.create("indexOutOfRange", "Index '" + e + "' is out of range.");
    }, y.createUnsupportedEventName = function (e) {
      return y.create("unsupportedEventName", "Unsupported event '" + e + "'.");
    }, y.createBrowserNotCapable = function () {
      return y.create("browserNotCapable", "This browser is incapable of supporting the Tableau JavaScript API.");
    }, e.tab._TableauException = y;var w = function w() {};w.__typeName = "tab._Utility", w.isNullOrEmpty = function (e) {
      return t.isNullOrUndefined(e) || (e.length || 0) <= 0;
    }, w.isString = function (e) {
      return "string" == typeof e;
    }, w.isNumber = function (e) {
      return "number" == typeof e;
    }, w.isDate = function (e) {
      return !("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || !t.isInstanceOfType(e, t.JsDate)) || "[object Date]" === Object.prototype.toString.call(e) && !isNaN(t.cast(e, t.JsDate).getTime());
    }, w.isDateValid = function (e) {
      return !isNaN(e.getTime());
    }, w.indexOf = function (e, i, n) {
      if (t.isValue(Array.prototype.indexOf)) return t.unbox(t.cast(e.indexOf(i, n), t.Int32));n = n || 0;var a = e.length;if (a > 0) for (var r = n; r < a; r++) {
        if (t.referenceEquals(e[r], i)) return r;
      }return -1;
    }, w.contains = function (e, t, i) {
      return w.indexOf(e, t, i) >= 0;
    }, w.getTopmostWindow = function () {
      for (var e = window.self; t.isValue(e.parent) && !t.referenceEquals(e.parent, e);) {
        e = e.parent;
      }return e;
    }, w.toInt = function (e) {
      if (w.isNumber(e)) return t.Int32.trunc(e);var i = parseInt(e.toString(), 10);return isNaN(i) ? 0 : i;
    }, w.hasClass = function (e, i) {
      var n = new RegExp("[\\n\\t\\r]", "g");return t.isValue(e) && (" " + e.className + " ").replace(n, " ").indexOf(" " + i + " ") > -1;
    }, w.findParentWithClassName = function (e, n, a) {
      var r = t.isValue(e) ? t.cast(e.parentNode, i) : null;for (a = a || document.body; t.isValue(r);) {
        if (w.hasClass(r, n)) return r;r = t.referenceEquals(r, a) ? null : t.cast(r.parentNode, i);
      }return r;
    }, w.hasJsonParse = function () {
      return !(!t.isValue(JSON) || !t.isValue(JSON.parse));
    }, w.hasWindowPostMessage = function () {
      return !!t.isValue(window.postMessage);
    }, w.isPostMessageSynchronous = function () {
      if (w.isIE()) {
        var e = new RegExp("(msie) ([\\w.]+)").exec(window.navigator.userAgent.toLowerCase())[2] || "0";return parseInt(e, 10) <= 8;
      }return !1;
    }, w.hasDocumentAttachEvent = function () {
      return !!t.isValue(document.attachEvent);
    }, w.hasWindowAddEventListener = function () {
      return !!t.isValue(window.addEventListener);
    }, w.isElementOfTag = function (e, i) {
      return t.isValue(e) && 1 === e.nodeType && t.referenceEquals(e.tagName.toLowerCase(), i.toLowerCase());
    }, w.elementToString = function (e) {
      var i = new t.StringBuilder();if (i.append(e.tagName.toLowerCase()), w.isNullOrEmpty(e.id) || i.append("#").append(e.id), !w.isNullOrEmpty(e.className)) {
        var n = e.className.split(" ");i.append(".").append(n.join("."));
      }return i.toString();
    }, w.tableauGCS = function (e) {
      return "function" == typeof window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    }, w.isIE = function () {
      return !!(window.navigator.userAgent.indexOf("MSIE") > -1 && t.isNullOrUndefined(window.opera));
    }, w.isSafari = function () {
      var e = window.navigator.userAgent,
          t = e.indexOf("Chrome") >= 0;return e.indexOf("Safari") >= 0 && !t;
    }, w.mobileDetect = function () {
      var e = window.navigator.userAgent;return -1 !== e.indexOf("iPad") || -1 !== e.indexOf("Android") || -1 !== e.indexOf("AppleWebKit") && -1 !== e.indexOf("Mobile");
    }, w.visibleContentRectInDocumentCoordinates = function (e) {
      for (var i = w.contentRectInDocumentCoordinates(e), n = e.parentElement; t.isValue(n) && t.isValue(n.parentElement); n = n.parentElement) {
        var a = w.$getComputedStyle(n).overflow;"auto" !== a && "scroll" !== a && "hidden" !== a || (i = i.intersect(w.contentRectInDocumentCoordinates(n)));
      }var r = w.$getViewportRect();return i.intersect(r);
    }, w.getVisualViewportRect = function (e) {
      var i = e.visualViewport;return t.isValue(i) ? new v(t.Int32.trunc(i.pageLeft), t.Int32.trunc(i.pageTop), t.Int32.trunc(i.width), t.Int32.trunc(i.height)) : null;
    }, w.$getViewportRect = function () {
      var e = w.getVisualViewportRect(window.self);if (t.isValue(e)) return e;var i = w.contentRectInDocumentCoordinates(document.documentElement),
          n = new a.WindowHelper(window.self);return n.isQuirksMode() && (i.height = document.body.clientHeight - i.left, i.width = document.body.clientWidth - i.top), i.left += n.get_pageXOffset(), i.top += n.get_pageYOffset(), i;
    }, w.contentRectInDocumentCoordinates = function (e) {
      var t = w.getBoundingClientRect(e),
          i = w.$getComputedStyle(e),
          n = w.toInt(i.paddingLeft),
          r = w.toInt(i.paddingTop),
          s = w.toInt(i.borderLeftWidth),
          o = w.toInt(i.borderTopWidth),
          l = w.computeContentSize(e),
          u = new a.WindowHelper(window.self),
          c = t.left + n + s + u.get_pageXOffset(),
          h = t.top + r + o + u.get_pageYOffset();return new v(c, h, l.width, l.height);
    }, w.getBoundingClientRect = function (e) {
      var i = e.getBoundingClientRect(),
          n = t.Int32.trunc(i.top),
          a = t.Int32.trunc(i.left),
          r = t.Int32.trunc(i.right),
          s = t.Int32.trunc(i.bottom);return new v(a, n, r - a, s - n);
    }, w.convertRawValue = function (e, i) {
      if (t.isNullOrUndefined(e)) return null;switch (i) {case "bool":
          return e;case "date":case "number":
          return t.isNullOrUndefined(e) ? Number.NaN : e;default:case "string":
          return e;}
    }, w.getDataValue = function (e) {
      return t.isNullOrUndefined(e) ? q.$ctor(null, null, null) : q.$ctor(w.convertRawValue(e.value, e.type), e.formattedValue, e.aliasedValue);
    }, w.serializeDateForServer = function (e) {
      var i = "";t.isValue(e) && w.isDate(e) && (i = e.getUTCFullYear() + "-" + (e.getUTCMonth() + 1) + "-" + e.getUTCDate() + " " + e.getUTCHours() + ":" + e.getUTCMinutes() + ":" + e.getUTCSeconds());return i;
    }, w.computeContentSize = function (e) {
      var t = w.$getComputedStyle(e),
          i = parseFloat(t.paddingLeft),
          n = parseFloat(t.paddingTop),
          a = parseFloat(t.paddingRight),
          r = parseFloat(t.paddingBottom),
          s = e.clientWidth - Math.round(i + a),
          o = e.clientHeight - Math.round(n + r);return ae.$ctor(s, o);
    }, w.$getComputedStyle = function (e) {
      return "function" == typeof window.getComputedStyle ? t.isValue(e.ownerDocument.defaultView.opener) ? e.ownerDocument.defaultView.getComputedStyle(e) : window.getComputedStyle(e) : t.isValue(e.currentStyle) ? e.currentStyle : e.style;
    }, w.roundVizSizeInPixels = function (e) {
      if (t.isNullOrUndefined(e) || -1 === e.indexOf("px")) return e;var i = parseFloat(e.split("px")[0]);return Math.round(i) + "px";
    }, w.noResultPromiseHelper = function (e, i, n) {
      var r = new a._Deferred(),
          s = new (t.makeGenericType(j, [Object]))(e, 1, function (e) {
        r.resolve();
      }, function (e, t) {
        r.reject(y.createServerError(t));
      });return n.sendCommand(Object).call(n, i, s), r.get_promise();
    }, w.clone = function (e) {
      return function (e) {
        return JSON.parse(JSON.stringify(e));
      };
    }, e.tab._Utility = w;var b = function b() {};b.__typeName = "tab.ApiDashboardObjectType", e.tab.ApiDashboardObjectType = b;var S = function S() {};S.__typeName = "tab.ApiDateRangeType", e.tab.ApiDateRangeType = S;var C = function C() {};C.__typeName = "tab.ApiDeviceType", e.tab.ApiDeviceType = C;var I = function I() {};I.__typeName = "tab.ApiEnumConverter", I.convertDashboardObjectType = function (e) {
      switch (e) {case "blank":
          return "blank";case "image":
          return "image";case "legend":
          return "legend";case "pageFilter":
          return "pageFilter";case "parameterControl":
          return "parameterControl";case "quickFilter":
          return "quickFilter";case "text":
          return "text";case "title":
          return "title";case "webPage":
          return "webPage";case "worksheet":
          return "worksheet";default:
          throw y.createInternalError("Unknown ApiCrossDomainDashboardObjectType: " + e);}
    }, I.convertDateRange = function (e) {
      switch (e) {case "curr":
          return "curr";case "last":
          return "last";case "lastn":
          return "lastn";case "next":
          return "next";case "nextn":
          return "nextn";case "todate":
          return "todate";default:
          throw y.createInternalError("Unknown ApiCrossDomainDateRangeType: " + e);}
    }, I.convertFieldAggregation = function (e) {
      switch (e) {case "ATTR":
          return "ATTR";case "AVG":
          return "AVG";case "COUNT":
          return "COUNT";case "COUNTD":
          return "COUNTD";case "DAY":
          return "DAY";case "END":
          return "END";case "HOUR":
          return "HOUR";case "INOUT":
          return "INOUT";case "KURTOSIS":
          return "KURTOSIS";case "MAX":
          return "MAX";case "MDY":
          return "MDY";case "MEDIAN":
          return "MEDIAN";case "MIN":
          return "MIN";case "MINUTE":
          return "MINUTE";case "MONTH":
          return "MONTH";case "MONTHYEAR":
          return "MONTHYEAR";case "NONE":
          return "NONE";case "PERCENTILE":
          return "PERCENTILE";case "QUART1":
          return "QUART1";case "QUART3":
          return "QUART3";case "QTR":
          return "QTR";case "SECOND":
          return "SECOND";case "SKEWNESS":
          return "SKEWNESS";case "STDEV":
          return "STDEV";case "STDEVP":
          return "STDEVP";case "SUM":
          return "SUM";case "SUM_XSQR":
          return "SUM_XSQR";case "TRUNC_DAY":
          return "TRUNC_DAY";case "TRUNC_HOUR":
          return "TRUNC_HOUR";case "TRUNC_MINUTE":
          return "TRUNC_MINUTE";case "TRUNC_MONTH":
          return "TRUNC_MONTH";case "TRUNC_QTR":
          return "TRUNC_QTR";case "TRUNC_SECOND":
          return "TRUNC_SECOND";case "TRUNC_WEEK":
          return "TRUNC_WEEK";case "TRUNC_YEAR":
          return "TRUNC_YEAR";case "USER":
          return "USER";case "VAR":
          return "VAR";case "VARP":
          return "VARP";case "WEEK":
          return "WEEK";case "WEEKDAY":
          return "WEEKDAY";case "YEAR":
          return "YEAR";default:
          throw y.createInternalError("Unknown ApiCrossDomainFieldAggregationType: " + e);}
    }, I.convertFieldRole = function (e) {
      switch (e) {case "dimension":
          return "dimension";case "measure":
          return "measure";case "unknown":
          return "unknown";default:
          throw y.createInternalError("Unknown ApiCrossDomainFieldRoleType: " + e);}
    }, I.convertFilterType = function (e) {
      switch (e) {case "categorical":
          return "categorical";case "hierarchical":
          return "hierarchical";case "quantitative":
          return "quantitative";case "relativedate":
          return "relativedate";default:
          throw y.createInternalError("Unknown ApiCrossDomainFilterType: " + e);}
    }, I.convertParameterAllowableValuesType = function (e) {
      switch (e) {case "all":
          return "all";case "list":
          return "list";case "range":
          return "range";default:
          throw y.createInternalError("Unknown ApiCrossDomainParameterAllowableValuesType: " + e);}
    }, I.convertParameterDataType = function (e) {
      switch (e) {case "boolean":
          return "boolean";case "date":
          return "date";case "datetime":
          return "datetime";case "float":
          return "float";case "integer":
          return "integer";case "string":
          return "string";default:
          throw y.createInternalError("Unknown ApiCrossDomainParameterDataType: " + e);}
    }, I.convertPeriodType = function (e) {
      switch (e) {case "year":
          return "year";case "quarter":
          return "quarter";case "month":
          return "month";case "week":
          return "week";case "day":
          return "day";case "hour":
          return "hour";case "minute":
          return "minute";case "second":
          return "second";default:
          throw y.createInternalError("Unknown ApiCrossDomainPeriodType: " + e);}
    }, I.convertSheetType = function (e) {
      switch (e) {case "worksheet":
          return "worksheet";case "dashboard":
          return "dashboard";case "story":
          return "story";default:
          throw y.createInternalError("Unknown ApiCrossDomainSheetType: " + e);}
    }, I.convertDataType = function (e) {
      switch (e) {case "boolean":
          return "boolean";case "date":
          return "date";case "datetime":
          return "datetime";case "float":
          return "float";case "integer":
          return "integer";case "string":
          return "string";default:
          throw y.createInternalError("Unknown ApiCrossDomainParameterDataType: " + e);}
    }, e.tab.ApiEnumConverter = I;var E = function E() {};E.__typeName = "tab.ApiErrorCode", e.tab.ApiErrorCode = E;var N = function N() {};N.__typeName = "tab.ApiFieldAggregationType", e.tab.ApiFieldAggregationType = N;var A = function A() {};A.__typeName = "tab.ApiFieldRoleType", e.tab.ApiFieldRoleType = A;var T = function T() {};T.__typeName = "tab.ApiFilterType", e.tab.ApiFilterType = T;var V = function V() {};V.__typeName = "tab.ApiFilterUpdateType", e.tab.ApiFilterUpdateType = V;var k = function k() {};k.__typeName = "tab.ApiMessageHandler", e.tab.ApiMessageHandler = k;var O = function O(e, t) {
      this.$router = null, this.$handler = null, $.verifyValue(e, "router"), this.$router = e, this.$handler = t;
    };O.__typeName = "tab.ApiMessagingOptions", e.tab.ApiMessagingOptions = O;var F = function F() {};F.__typeName = "tab.ApiNullOption", e.tab.ApiNullOption = F;var R = function R() {};R.__typeName = "tab.ApiParameterAllowableValuesType", e.tab.ApiParameterAllowableValuesType = R;var D = function D() {};D.__typeName = "tab.ApiParameterDataType", e.tab.ApiParameterDataType = D;var z = function z() {};z.__typeName = "tab.ApiPeriodType", e.tab.ApiPeriodType = z;var x = function x() {};x.__typeName = "tab.ApiSelectionUpdateType", e.tab.ApiSelectionUpdateType = x;var P = function P() {};P.__typeName = "tab.ApiSheetSizeBehavior", e.tab.ApiSheetSizeBehavior = P;var U = function U() {};U.__typeName = "tab.ApiSheetType", e.tab.ApiSheetType = U;var M = function M() {};M.__typeName = "tab.ApiTableauEventName", e.tab.ApiTableauEventName = M;var H = function H() {};H.__typeName = "tab.ApiToolbarButtonName", e.tab.ApiToolbarButtonName = H;var L = function L() {};L.__typeName = "tab.ApiToolbarPosition", e.tab.ApiToolbarPosition = L;var j = function j(e) {
      var i = function i(e, t, _i, n) {
        this.$commandName = null, this.$successCallbackTiming = 0, this.$successCallback = null, this.$errorCallback = null, this.$commandName = e, this.$successCallback = _i, this.$successCallbackTiming = t, this.$errorCallback = n;
      };return t.registerGenericClassInstance(i, j, [e], { get_commandName: function get_commandName() {
          return this.$commandName;
        }, get_successCallback: function get_successCallback() {
          return this.$successCallback;
        }, get_successCallbackTiming: function get_successCallbackTiming() {
          return this.$successCallbackTiming;
        }, get_errorCallback: function get_errorCallback() {
          return this.$errorCallback;
        } }, function () {
        return null;
      }, function () {
        return [];
      }), i;
    };j.__typeName = "tab.CommandReturnHandler$1", t.initGenericClass(j, r, 1), e.tab.CommandReturnHandler$1 = j;var W = function W(e) {
      if (this.$nextHandlerId = 0, this.$handlers = {}, this.$commandCallbacks = {}, this.$commandReturnAfterStateReadyQueues = {}, this.$legacyHandler = null, this.$legacyHandler = e, w.hasWindowAddEventListener()) window.addEventListener("message", t.mkdel(this, this.$handleCrossDomainMessage), !1);else if (w.hasDocumentAttachEvent()) {
        var i = t.mkdel(this, this.$handleCrossDomainMessage);document.attachEvent("onmessage", i), window.attachEvent("onmessage", i);
      } else window.onmessage = t.mkdel(this, this.$handleCrossDomainMessage);this.$nextHandlerId = 0;
    };W.__typeName = "tab.CrossDomainMessager", e.tab.CrossDomainMessager = W;var B = function B() {};B.__typeName = "tab.DataType", e.tab.DataType = B;var q = function q() {};q.__typeName = "tab.DataValue", q.$ctor = function (e, t, i) {
      var n = new Object();return n.value = null, n.formattedValue = null, n.value = e, w.isNullOrEmpty(i) ? n.formattedValue = t : n.formattedValue = i, n;
    }, q.isInstanceOfType = function () {
      return !0;
    }, e.tab.DataValue = q;var G = function G() {};G.__typeName = "tab.FilterCommandsBuilder", e.tab.FilterCommandsBuilder = G;var Q = function Q() {};Q.__typeName = "tab.GetDataCommandsBuilder", e.tab.GetDataCommandsBuilder = Q;var J = function J() {
      this.$2$StateReadyForQueryField = null, k.call(this);
    };J.__typeName = "tab.HostedApiMessageHandler", e.tab.HostedApiMessageHandler = J;var K = function K() {
      this.$crossDomainMessager = null, this.$crossDomainMessager = new W(null);
    };K.__typeName = "tab.HostedApiMessageRouter", e.tab.HostedApiMessageRouter = K;var Y = function Y(e) {
      if (this.$clonedPairs = null, this.$collection = new a._Collection(), this.$tupleId = 0, g.isArray(e)) for (var i = e, n = 0; n < i.length; n++) {
        var r = i[n];if (!t.isValue(r.fieldName)) throw y.createInvalidParameter("pair.fieldName");if (!t.isValue(r.value)) throw y.createInvalidParameter("pair.value");var s = new ce(r.fieldName, r.value);this.$collection._add(s.fieldName, s);
      } else this.$tupleId = e;
    };Y.__typeName = "tab.MarkImpl", Y.processActiveMarks = function (e) {
      var i = new a._Collection();if (t.isNullOrUndefined(e) || w.isNullOrEmpty(e.marks)) return i;for (var n = 0; n < e.marks.length; n++) {
        var r = e.marks[n],
            s = r.tupleId,
            o = new oe(s);i._add(s.toString(), o);for (var l = 0; l < r.pairs.length; l++) {
          var u = r.pairs[l],
              c = w.convertRawValue(u.value, u.valueDataType),
              h = new ce(u.fieldName, c);h.formattedValue = u.formattedValue, o.impl.get_pairs()._has(h.fieldName) || o.impl.$addPair(h);
        }
      }return i;
    }, e.tab.MarkImpl = Y;var X = function X(e, t) {
      this.$parameters = null, this.$1$NameField = null, this.set_name(e), this.$parameters = t;
    };X.__typeName = "tab.NonApiCommand", X.parse = function (e) {
      var i = e.split(String.fromCharCode(44)),
          n = t.cast(i[0], String),
          a = i.slice(1);return new X(n, a);
    }, e.tab.NonApiCommand = X;var Z = function Z() {};Z.__typeName = "tab.Point", Z.$ctor = function (e, t) {
      var i = new Object();return i.x = 0, i.y = 0, i.x = e, i.y = t, i;
    }, Z.isInstanceOfType = function () {
      return !0;
    }, e.tab.Point = Z;var ee = function ee() {};ee.__typeName = "tab.PublicEnums", ee.tryNormalizeEnum = function (e) {
      return function (i, n) {
        if (t.isValue(i)) for (var a = i.toString().toUpperCase(), r = t.Enum.getValues(e), s = 0; s < r.length; s++) {
          var o = r[s],
              l = o.toUpperCase();if (t.referenceEquals(a, l)) return n.$ = o, !0;
        }return n.$ = t.getDefaultValue(e), !1;
      };
    }, ee.normalizeEnum = function (e) {
      return function (t, i) {
        var n = {};if (!ee.tryNormalizeEnum(e).call(null, t, n)) throw y.createInvalidParameter(i);return n.$;
      };
    }, ee.isValidEnum = function (e) {
      return function (t) {
        return ee.tryNormalizeEnum(e).call(null, t, {});
      };
    }, e.tab.PublicEnums = ee;var te = function te() {};te.__typeName = "tab.SharedUtils", e.tab.SharedUtils = te;var ie = function ie() {};ie.__typeName = "tab.SheetSize", ie.$ctor = function (e, i, n) {
      var a = new Object();return a.behavior = null, a.minSize = null, a.maxSize = null, a.behavior = t.coalesce(e, "automatic"), t.isValue(i) ? a.minSize = i : delete a.minSize, t.isValue(n) ? a.maxSize = n : delete a.maxSize, a;
    }, ie.isInstanceOfType = function () {
      return !0;
    }, e.tab.SheetSize = ie;var ne = function ne() {};ne.__typeName = "tab.SheetSizeFactory", ne.createAutomatic = function () {
      return ie.$ctor("automatic", null, null);
    }, ne.fromSizeConstraints = function (e) {
      var t = e.minHeight,
          i = e.minWidth,
          n = e.maxHeight,
          a = e.maxWidth,
          r = "automatic",
          s = null,
          o = null;return 0 === t && 0 === i ? 0 === n && 0 === a || (r = "atmost", o = ae.$ctor(a, n)) : 0 === n && 0 === a ? (r = "atleast", s = ae.$ctor(i, t)) : n === t && a === i && i > 0 ? (r = "exactly", s = ae.$ctor(i, t), o = ae.$ctor(i, t)) : (r = "range", 0 === i && 0 === a && (a = 2147483647), s = ae.$ctor(i, t), o = ae.$ctor(a, n)), ie.$ctor(r, s, o);
    }, e.tab.SheetSizeFactory = ne;var ae = function ae() {};ae.__typeName = "tab.Size", ae.$ctor = function (e, t) {
      var i = new Object();return i.width = 0, i.height = 0, i.width = e, i.height = t, i;
    }, ae.isInstanceOfType = function () {
      return !0;
    }, e.tab.Size = ae;var re = function re(e) {
      this.$impl = null, this.$impl = e;
    };re.__typeName = "tableauSoftware.Column", e.tableauSoftware.Column = re;var se = function se(e) {
      this.$impl = null, this.$impl = e;
    };se.__typeName = "tableauSoftware.DataTable", e.tableauSoftware.DataTable = se;var oe = function oe(e) {
      this.impl = null, this.impl = new Y(e);
    };oe.__typeName = "tableauSoftware.Mark", e.tableauSoftware.Mark = oe;var le,
        ue,
        ce = function ce(e, i) {
      this.fieldName = null, this.value = null, this.formattedValue = null, this.fieldName = e, this.value = i, this.formattedValue = t.isValue(i) ? i.toString() : "";
    };ce.__typeName = "tableauSoftware.Pair", e.tableauSoftware.Pair = ce, t.initClass(s, r, {}), t.initClass(o, r, { add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateCombine(this.$1$StateReadyForQueryField, e);
      }, remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateRemove(this.$1$StateReadyForQueryField, e);
      }, get_iframe: function get_iframe() {
        return null;
      }, get_hostId: function get_hostId() {
        return this.$hostId;
      }, set_hostId: function set_hostId(e) {
        this.$hostId = e;
      }, get_$serverRoot: function get_$serverRoot() {
        return "*";
      }, handleEventNotification: function handleEventNotification(e, t) {}, $silenceTheCompilerWarning: function $silenceTheCompilerWarning() {
        this.$1$StateReadyForQueryField(null);
      } }), t.initClass(l, r, { get_name: function get_name() {
        return this.$1$NameField;
      }, set_name: function set_name(e) {
        this.$1$NameField = e;
      }, get_hostId: function get_hostId() {
        return this.$1$HostIdField;
      }, set_hostId: function set_hostId(e) {
        this.$1$HostIdField = e;
      }, get_commandId: function get_commandId() {
        return this.$1$CommandIdField;
      }, set_commandId: function set_commandId(e) {
        this.$1$CommandIdField = e;
      }, get_parameters: function get_parameters() {
        return this.$1$ParametersField;
      }, set_parameters: function set_parameters(e) {
        this.$1$ParametersField = e;
      }, get_isApiCommandName: function get_isApiCommandName() {
        return 0 === this.get_rawName().indexOf("api.", 0);
      }, get_rawName: function get_rawName() {
        return this.get_name().toString();
      }, serialize: function serialize() {
        var e = [];e.push(this.get_name()), e.push(this.get_commandId()), e.push(this.get_hostId()), t.isValue(this.get_parameters()) && e.push(this.get_parameters());var i = e.join(",");return l.lastRequestMessage = i, i;
      } }), t.initClass(u, r, {}), t.initClass(c, r, { get_workbookName: function get_workbookName() {
        return this.$workbookName;
      }, get_worksheetName: function get_worksheetName() {
        return this.$worksheetName;
      }, get_data: function get_data() {
        return this.$data;
      }, serialize: function serialize() {
        var e = {};return e["api.workbookName"] = this.$workbookName, e["api.worksheetName"] = this.$worksheetName, e["api.commandData"] = this.$data, JSON.stringify(e);
      } }), t.initClass(h, r, { get_result: function get_result() {
        return this.$commandResult;
      }, get_data: function get_data() {
        return this.$commandData;
      } }), t.initClass(m, r, { get__length: function get__length() {
        return this.$items.length;
      }, get__rawArray: function get__rawArray() {
        return this.$items;
      }, get_item: function get_item(e) {
        return this.$items[e];
      }, _get: function _get(e) {
        var i = this.$ensureValidKey(e);if (t.isValue(this.$itemMap[i])) return this.$itemMap[i];
      }, _has: function _has(e) {
        return t.isValue(this._get(e));
      }, _add: function _add(e, t) {
        this.$verifyKeyAndItemParameters(e, t);var i = this.$ensureValidKey(e);this.$items.push(t), this.$itemMap[i] = t;
      }, _addToFirst: function _addToFirst(e, t) {
        this.$verifyKeyAndItemParameters(e, t);var i = this.$ensureValidKey(e);this.$items.unshift(t), this.$itemMap[i] = t;
      }, _remove: function _remove(e) {
        var i = this.$ensureValidKey(e);if (t.isValue(this.$itemMap[i])) {
          var n = this.$itemMap[i];delete this.$itemMap[i];for (var a = 0; a < this.$items.length; a++) {
            if (t.referenceEquals(this.$items[a], n)) {
              this.$items.splice(a, 1);break;
            }
          }
        }
      }, _toApiCollection: function _toApiCollection() {
        var e = this.$items.concat();return e.get = t.mkdel(this, function (e) {
          return this._get(e);
        }), e.has = t.mkdel(this, function (e) {
          return this._has(e);
        }), e;
      }, $verifyUniqueKeyParameter: function $verifyUniqueKeyParameter(e) {
        if (w.isNullOrEmpty(e)) throw new t.Exception("Null key");if (this._has(e)) throw new t.Exception("Duplicate key '" + e + "'");
      }, $verifyKeyAndItemParameters: function $verifyKeyAndItemParameters(e, i) {
        if (this.$verifyUniqueKeyParameter(e), t.isNullOrUndefined(i)) throw new t.Exception("Null item");
      }, $ensureValidKey: function $ensureValidKey(e) {
        return "_" + e;
      } }), t.initClass(d, r, { get_fieldName: function get_fieldName() {
        return this.$fieldName;
      }, get_dataType: function get_dataType() {
        return this.$dataType;
      }, get_isReferenced: function get_isReferenced() {
        return this.$isReferenced;
      }, get_index: function get_index() {
        return this.$index;
      } }), t.initClass(p, r, { get_name: function get_name() {
        return this.$name;
      }, get_rows: function get_rows() {
        return this.$rows;
      }, get_columns: function get_columns() {
        return this.$columns;
      }, get_totalRowCount: function get_totalRowCount() {
        return this.$totalRowCount;
      }, get_isSummaryData: function get_isSummaryData() {
        return this.$isSummaryData;
      } }), t.initClass(f, r, { get_promise: function get_promise() {
        return this.$promise;
      }, all: function all(e) {
        var t = new f(),
            i = e.length,
            n = i,
            a = [];if (0 === i) return t.resolve(a), t.get_promise();for (var r = function r(e, i) {
          s.$coerceToTrustedPromise(e).then(function (e) {
            return a[i] = e, 0 === --n && t.resolve(a), null;
          }, function (e) {
            return t.reject(e), null;
          });
        }, o = 0; o < i; o++) {
          r(e[o], o);
        }return t.get_promise();
      }, then: function then(e, t) {
        return this.$thenFunc(e, t);
      }, resolve: function resolve(e) {
        return this.$resolveFunc(e);
      }, reject: function reject(e) {
        return this.$resolveFunc(s.$rejected(e));
      }, $preResolutionThen: function $preResolutionThen(e, i) {
        var n = new f();return this.$listeners.push(function (a) {
          a.then(e, i).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject));
        }), n.get_promise();
      }, $transitionToFulfilled: function $transitionToFulfilled(e) {
        var t = s.$coerceToTrustedPromise(e);this.$thenFunc = t.then, this.$resolveFunc = s.$coerceToTrustedPromise;for (var i = 0; i < this.$listeners.length; i++) {
          (0, this.$listeners[i])(t);
        }return this.$listeners = null, t;
      } }), t.initClass(g, r, {}), t.initClass($, r, {}), t.initClass(_, r, { always: function always(e) {
        return t.cast(this.then(e, t.cast(e, Function)), _);
      }, otherwise: function otherwise(e) {
        return t.cast(this.then(null, e), _);
      } }), t.initClass(v, r, { intersect: function intersect(e) {
        var t = Math.max(this.left, e.left),
            i = Math.max(this.top, e.top),
            n = Math.min(this.left + this.width, e.left + e.width),
            a = Math.min(this.top + this.height, e.top + e.height);return n <= t || a <= i ? new v(0, 0, 0, 0) : new v(t, i, n - t, a - i);
      } }), t.initClass(y, r, {}), t.initClass(w, r, {}), t.initEnum(b, r, { blank: "blank", worksheet: "worksheet", quickFilter: "quickFilter", parameterControl: "parameterControl", pageFilter: "pageFilter", legend: "legend", title: "title", text: "text", image: "image", webPage: "webPage", addIn: "addIn" }, !0), t.initEnum(S, r, { last: "last", lastn: "lastn", next: "next", nextn: "nextn", curr: "curr", todate: "todate" }, !0), t.initEnum(C, r, { default: "default", desktop: "desktop", tablet: "tablet", phone: "phone" }, !0), t.initClass(I, r, {}), t.initEnum(E, r, { internalError: "internalError", serverError: "serverError", invalidAggregationFieldName: "invalidAggregationFieldName", invalidToolbarButtonName: "invalidToolbarButtonName", invalidParameter: "invalidParameter", invalidUrl: "invalidUrl", staleDataReference: "staleDataReference", vizAlreadyInManager: "vizAlreadyInManager", noUrlOrParentElementNotFound: "noUrlOrParentElementNotFound", invalidFilterFieldName: "invalidFilterFieldName", invalidFilterFieldValue: "invalidFilterFieldValue", invalidFilterFieldNameOrValue: "invalidFilterFieldNameOrValue", filterCannotBePerformed: "filterCannotBePerformed", notActiveSheet: "notActiveSheet", invalidCustomViewName: "invalidCustomViewName", missingRangeNForRelativeDateFilters: "missingRangeNForRelativeDateFilters", missingMaxSize: "missingMaxSize", missingMinSize: "missingMinSize", missingMinMaxSize: "missingMinMaxSize", invalidSize: "invalidSize", invalidSizeBehaviorOnWorksheet: "invalidSizeBehaviorOnWorksheet", sheetNotInWorkbook: "sheetNotInWorkbook", indexOutOfRange: "indexOutOfRange", downloadWorkbookNotAllowed: "downloadWorkbookNotAllowed", nullOrEmptyParameter: "nullOrEmptyParameter", browserNotCapable: "browserNotCapable", unsupportedEventName: "unsupportedEventName", invalidDateParameter: "invalidDateParameter", invalidSelectionFieldName: "invalidSelectionFieldName", invalidSelectionValue: "invalidSelectionValue", invalidSelectionDate: "invalidSelectionDate", noUrlForHiddenWorksheet: "noUrlForHiddenWorksheet", maxVizResizeAttempts: "maxVizResizeAttempts" }, !0), t.initEnum(N, r, { SUM: "SUM", AVG: "AVG", MIN: "MIN", MAX: "MAX", STDEV: "STDEV", STDEVP: "STDEVP", VAR: "VAR", VARP: "VARP", COUNT: "COUNT", COUNTD: "COUNTD", MEDIAN: "MEDIAN", ATTR: "ATTR", NONE: "NONE", PERCENTILE: "PERCENTILE", YEAR: "YEAR", QTR: "QTR", MONTH: "MONTH", DAY: "DAY", HOUR: "HOUR", MINUTE: "MINUTE", SECOND: "SECOND", WEEK: "WEEK", WEEKDAY: "WEEKDAY", MONTHYEAR: "MONTHYEAR", MDY: "MDY", END: "END", TRUNC_YEAR: "TRUNC_YEAR", TRUNC_QTR: "TRUNC_QTR", TRUNC_MONTH: "TRUNC_MONTH", TRUNC_WEEK: "TRUNC_WEEK", TRUNC_DAY: "TRUNC_DAY", TRUNC_HOUR: "TRUNC_HOUR", TRUNC_MINUTE: "TRUNC_MINUTE", TRUNC_SECOND: "TRUNC_SECOND", QUART1: "QUART1", QUART3: "QUART3", SKEWNESS: "SKEWNESS", KURTOSIS: "KURTOSIS", INOUT: "INOUT", SUM_XSQR: "SUM_XSQR", USER: "USER" }, !0), t.initEnum(A, r, { dimension: "dimension", measure: "measure", unknown: "unknown" }, !0), t.initEnum(T, r, { categorical: "categorical", quantitative: "quantitative", hierarchical: "hierarchical", relativedate: "relativedate" }, !0), t.initEnum(V, r, { all: "all", replace: "replace", add: "add", remove: "remove" }, !0), t.initClass(k, r, { handleEventNotification: function handleEventNotification(e, i) {
        throw new t.NotImplementedException();
      } }), t.initClass(O, r, { get_handler: function get_handler() {
        return this.$handler;
      }, get_router: function get_router() {
        return this.$router;
      }, sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$router.sendCommand(e).call(this.$router, this.$handler, t, i);
        };
      }, dispose: function dispose() {
        this.$router.unregisterHandler(this.$handler);
      } }), t.initEnum(F, r, { nullValues: "nullValues", nonNullValues: "nonNullValues", allValues: "allValues" }, !0), t.initEnum(R, r, { all: "all", list: "list", range: "range" }, !0), t.initEnum(D, r, { float: "float", integer: "integer", string: "string", boolean: "boolean", date: "date", datetime: "datetime" }, !0), t.initEnum(z, r, { year: "year", quarter: "quarter", month: "month", week: "week", day: "day", hour: "hour", minute: "minute", second: "second" }, !0), t.initEnum(x, r, { replace: "replace", add: "add", remove: "remove" }, !0), t.initEnum(P, r, { automatic: "automatic", exactly: "exactly", range: "range", atleast: "atleast", atmost: "atmost" }, !0), t.initEnum(U, r, { worksheet: "worksheet", dashboard: "dashboard", story: "story" }, !0), t.initEnum(M, r, { customviewload: "customviewload", customviewremove: "customviewremove", customviewsave: "customviewsave", customviewsetdefault: "customviewsetdefault", filterchange: "filterchange", firstinteractive: "firstinteractive", firstvizsizeknown: "firstvizsizeknown", marksselection: "marksselection", markshighlight: "markshighlight", parametervaluechange: "parametervaluechange", storypointswitch: "storypointswitch", tabswitch: "tabswitch", toolbarstatechange: "toolbarstatechange", vizresize: "vizresize" }, !0), t.initEnum(H, r, { redo: "redo", undo: "undo" }, !0), t.initEnum(L, r, { top: "top", bottom: "bottom" }, !0), t.initClass(W, r, { registerHandler: function registerHandler(e) {
        var i = "host" + this.$nextHandlerId;if (t.isValue(e.get_hostId()) || t.isValue(this.$handlers[e.get_hostId()])) throw y.createInternalError("Host '" + e.get_hostId() + "' is already registered.");this.$nextHandlerId++, e.set_hostId(i), this.$handlers[i] = e, e.add_stateReadyForQuery(t.mkdel(this, this.$handleStateReadyForQuery));
      }, unregisterHandler: function unregisterHandler(e) {
        (t.isValue(e.get_hostId()) || t.isValue(this.$handlers[e.get_hostId()])) && (delete this.$handlers[e.get_hostId()], e.remove_stateReadyForQuery(t.mkdel(this, this.$handleStateReadyForQuery)));
      }, sendCommand: function sendCommand(e) {
        return function (e, i, n) {
          var a = e.get_iframe(),
              r = e.get_hostId();if (w.hasWindowPostMessage() && !t.isNullOrUndefined(a) && !t.isNullOrUndefined(a.contentWindow)) {
            var s = l.generateNextCommandId(),
                o = this.$commandCallbacks[r];t.isNullOrUndefined(o) && (o = {}, this.$commandCallbacks[r] = o), o[s] = n;var u = n.get_commandName(),
                c = null;t.isValue(i) && (c = JSON.stringify(i));var h = new l(u, s, r, c).serialize();w.isPostMessageSynchronous() ? window.setTimeout(function () {
              a.contentWindow.postMessage(h, "*");
            }, 0) : a.contentWindow.postMessage(h, "*");
          }
        };
      }, $handleStateReadyForQuery: function $handleStateReadyForQuery(e) {
        var i = this.$commandReturnAfterStateReadyQueues[e.get_hostId()];if (!w.isNullOrEmpty(i)) for (; i.length > 0;) {
          var n = i.pop();t.isValue(n) && n();
        }
      }, $handleCrossDomainMessage: function $handleCrossDomainMessage(e) {
        var i = t.cast(e, n);if (!t.isNullOrUndefined(i.data)) {
          var a = l.parse(i.data.toString()),
              r = a.get_hostId(),
              s = this.$handlers[r];if (!t.isNullOrUndefined(s) && t.referenceEquals(s.get_hostId(), a.get_hostId()) || (s = this.$findHostIdByDomComparison(i)), a.get_isApiCommandName()) {
            if (t.referenceEquals(a.get_commandId(), l.crossDomainEventNotificationId)) {
              if (s.handleEventNotification(a.get_name(), a.get_parameters()), "api.FirstVizSizeKnownEvent" === a.get_name()) {
                var o = new X("tableau.bootstrap", []);i.source.postMessage(o.serialize(), "*");
              }
            } else this.$handleCrossDomainResponse(a);
          } else if (!t.isNullOrUndefined(this.$legacyHandler)) {
            var u = X.parse(i.data.toString());this.$legacyHandler(u, s);
          }
        }
      }, $handleCrossDomainResponse: function $handleCrossDomainResponse(e) {
        var i = this.$commandCallbacks[e.get_hostId()],
            n = t.isValue(i) ? i[e.get_commandId()] : null;if (!t.isNullOrUndefined(n) && (delete i[e.get_commandId()], e.get_name() === n.get_commandName())) {
          var a = new h(e.get_parameters()),
              r = a.get_data();if ("api.success" === a.get_result()) switch (n.get_successCallbackTiming()) {case 0:
              t.isValue(n.get_successCallback()) && n.get_successCallback()(r);break;case 1:
              var s = this.$commandReturnAfterStateReadyQueues[e.get_hostId()];t.isNullOrUndefined(s) && (s = [], this.$commandReturnAfterStateReadyQueues[e.get_hostId()] = s), s.push(function () {
                t.isValue(n.get_successCallback()) && n.get_successCallback()(r);
              });break;default:
              throw y.createInternalError("Unknown timing value: " + n.get_successCallbackTiming());} else if (t.isValue(n.get_errorCallback())) {
            var o = "api.remotefailed" === a.get_result(),
                l = t.isValue(r) ? r.toString() : "";n.get_errorCallback()(o, l);
          }
        }
      }, $findHostIdByDomComparison: function $findHostIdByDomComparison(e) {
        var i = new t.ObjectEnumerator(this.$handlers);try {
          for (; i.moveNext();) {
            var n = i.current();if (this.$handlers.hasOwnProperty(n.key) && t.referenceEquals(n.value.get_iframe().contentWindow, e.source)) return n.value;
          }
        } finally {
          i.dispose();
        }return new o();
      } }), t.initEnum(B, r, { float: "float", integer: "integer", string: "string", boolean: "boolean", date: "date", datetime: "datetime" }, !0), t.initClass(q, r, {}, Object), t.initClass(G, r, { buildApplyFiltersCommandParams: function buildApplyFiltersCommandParams(e, i, n, a) {
        if (w.isNullOrEmpty(e)) throw y.createNullOrEmptyParameter("fieldName");n = ee.normalizeEnum(V).call(null, n, "updateType");var r = [];if (g.isArray(i)) for (var s = 0; s < i.length; s++) {
          r.push(i[s].toString());
        } else t.isValue(i) && r.push(i.toString());var o = {};return o["api.fieldCaption"] = e, o["api.filterUpdateType"] = n, o["api.exclude"] = !(!t.isValue(a) || !a.isExcludeMode), "all" !== n && (o["api.filterCategoricalValues"] = r), o;
      }, buildRangeFilterCommandParams: function buildRangeFilterCommandParams(e, i) {
        if (w.isNullOrEmpty(e)) throw y.createNullOrEmptyParameter("fieldName");if (t.isNullOrUndefined(i)) throw y.createNullOrEmptyParameter("filterOptions");var n = {};if (n["api.fieldCaption"] = e, t.isValue(i.min)) if (w.isDate(i.min)) {
          var a = t.cast(i.min, t.JsDate);if (!w.isDateValid(a)) throw y.createInvalidDateParameter("filterOptions.min");n["api.filterRangeMin"] = w.serializeDateForServer(a);
        } else n["api.filterRangeMin"] = i.min;if (t.isValue(i.max)) if (w.isDate(i.max)) {
          var r = t.cast(i.max, t.JsDate);if (!w.isDateValid(r)) throw y.createInvalidDateParameter("filterOptions.max");n["api.filterRangeMax"] = w.serializeDateForServer(r);
        } else n["api.filterRangeMax"] = i.max;return t.isValue(i.nullOption) && (n["api.filterRangeNullOption"] = i.nullOption), n;
      }, buildRelativeDateFilterCommandParams: function buildRelativeDateFilterCommandParams(e, i) {
        if (w.isNullOrEmpty(e)) throw y.createInvalidParameter("fieldName");if (t.isNullOrUndefined(i)) throw y.createInvalidParameter("filterOptions");var n = {};if (n["api.fieldCaption"] = e, t.isValue(i)) {
          if (n["api.filterPeriodType"] = i.periodType, n["api.filterDateRangeType"] = i.rangeType, "lastn" === i.rangeType || "nextn" === i.rangeType) {
            if (t.isNullOrUndefined(i.rangeN)) throw y.create("missingRangeNForRelativeDateFilters", "Missing rangeN field for a relative date filter of LASTN or NEXTN.");n["api.filterDateRange"] = i.rangeN;
          }t.isValue(i.anchorDate) && (n["api.filterDateArchorValue"] = w.serializeDateForServer(i.anchorDate));
        }return n;
      }, buildHierarchicalFilterCommandParams: function buildHierarchicalFilterCommandParams(e, i, n, a) {
        if (w.isNullOrEmpty(e)) throw y.createNullOrEmptyParameter("fieldName");n = ee.normalizeEnum(V).call(null, n, "updateType");var r = null,
            s = null;if (g.isArray(i)) {
          r = [];for (var o = i, l = 0; l < o.length; l++) {
            r.push(o[l].toString());
          }
        } else if (w.isString(i)) (r = []).push(i.toString());else if (t.isValue(i) && t.isValue(i.levels)) {
          var u = i.levels;if (s = [], g.isArray(u)) for (var c = u, h = 0; h < c.length; h++) {
            s.push(c[h].toString());
          } else s.push(u.toString());
        } else if (t.isValue(i)) throw y.createInvalidParameter("values");var m = {};return m["api.fieldCaption"] = e, m["api.filterUpdateType"] = n, m["api.exclude"] = !(!t.isValue(a) || !a.isExcludeMode), t.isValue(r) && (m["api.filterHierarchicalValues"] = JSON.stringify(r)), t.isValue(s) && (m["api.filterHierarchicalLevels"] = JSON.stringify(s)), m;
      }, buildClearFilterCommandsParam: function buildClearFilterCommandsParam(e) {
        if (w.isNullOrEmpty(e)) throw y.createNullOrEmptyParameter("fieldName");var t = {};return t["api.fieldCaption"] = e, t;
      }, filterCommandError: function filterCommandError(e) {
        var i = e;if (t.isValue(i) && t.isValue(i.errorCode)) {
          var n = t.isValue(i.additionalInformation) ? i.additionalInformation.toString() : "";switch (i.errorCode) {case "invalidFilterFieldName":
              return y.create("invalidFilterFieldName", n);case "invalidFilterFieldValue":
              return y.create("invalidFilterFieldValue", n);case "invalidAggregationFieldName":
              return y.createInvalidAggregationFieldName(n);default:
              return y.createServerError(n);}
        }return null;
      }, normalizeRangeFilterOption: function normalizeRangeFilterOption(e) {
        if (t.isNullOrUndefined(e)) throw y.createNullOrEmptyParameter("filterOptions");if (t.isNullOrUndefined(e.min) && t.isNullOrUndefined(e.max)) throw y.create("invalidParameter", "At least one of filterOptions.min or filterOptions.max must be specified.");var i = new Object();return t.isValue(e.min) && (i.min = e.min), t.isValue(e.max) && (i.max = e.max), t.isValue(e.nullOption) && (i.nullOption = ee.normalizeEnum(F).call(null, e.nullOption, "filterOptions.nullOption")), i;
      }, normalizeRelativeDateFilterOptions: function normalizeRelativeDateFilterOptions(e) {
        if (t.isNullOrUndefined(e)) throw y.createNullOrEmptyParameter("filterOptions");var i = new Object();if (i.rangeType = ee.normalizeEnum(S).call(null, e.rangeType, "filterOptions.rangeType"), i.periodType = ee.normalizeEnum(z).call(null, e.periodType, "filterOptions.periodType"), "lastn" === i.rangeType || "nextn" === i.rangeType) {
          if (t.isNullOrUndefined(e.rangeN)) throw y.create("missingRangeNForRelativeDateFilters", "Missing rangeN field for a relative date filter of LASTN or NEXTN.");i.rangeN = w.toInt(e.rangeN);
        }if (t.isValue(e.anchorDate)) {
          if (!w.isDate(e.anchorDate) || !w.isDateValid(e.anchorDate)) throw y.createInvalidDateParameter("filterOptions.anchorDate");i.anchorDate = e.anchorDate;
        }return i;
      }, createFilterCommandReturnHandler: function createFilterCommandReturnHandler(e, i, n) {
        return new (t.makeGenericType(j, [Object]))(e, 0, t.mkdel(this, function (e) {
          var a = this.filterCommandError(e);t.isNullOrUndefined(a) ? n.resolve(i) : n.reject(a);
        }), function (e, t) {
          if (e) n.reject(y.createInvalidFilterFieldNameOrValue(i));else {
            var a = y.create("filterCannotBePerformed", t);n.reject(a);
          }
        });
      } }), t.initClass(Q, r, { getSummaryDataCommandParams: function getSummaryDataCommandParams(e) {
        var i = {};return e = e || new Object(), i["api.ignoreAliases"] = t.coalesce(e.ignoreAliases, !1), i["api.ignoreSelection"] = t.coalesce(e.ignoreSelection, !1), i["api.maxRows"] = t.coalesce(e.maxRows, 0), i;
      }, getUnderlyingDataCommandParams: function getUnderlyingDataCommandParams(e) {
        var i = {};return e = e || new Object(), i["api.ignoreAliases"] = t.coalesce(e.ignoreAliases, !1), i["api.ignoreSelection"] = t.coalesce(e.ignoreSelection, !1), i["api.includeAllColumns"] = t.coalesce(e.includeAllColumns, !1), i["api.maxRows"] = t.coalesce(e.maxRows, 0), i;
      }, getSummaryDataResponseHandler: function getSummaryDataResponseHandler(e) {
        return new (t.makeGenericType(j, [Object]))("api.GetSummaryTableCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.processGetDataPresModel(i);e.resolve(n);
        }), function (t, i) {
          e.reject(y.createServerError(i));
        });
      }, getUnderlyingDataResponseHandler: function getUnderlyingDataResponseHandler(e) {
        return new (t.makeGenericType(j, [Object]))("api.GetUnderlyingTableCommand", 0, t.mkdel(this, function (t) {
          var i = t,
              n = this.processGetDataPresModel(i);e.resolve(n);
        }), function (t, i) {
          e.reject(y.createServerError(i));
        });
      }, processGetDataPresModel: function processGetDataPresModel(e) {
        var t = this.$processUnderlyingTable(e.dataTable),
            i = this.$processUnderlyingColumns(e.headers),
            n = new p(t, e.isSummary, t.length, i);return new se(n);
      }, $processUnderlyingTable: function $processUnderlyingTable(e) {
        for (var t = [], i = 0; i < e.length; i++) {
          for (var n = e[i], a = [], r = 0; r < n.length; r++) {
            var s = n[r];a.push(w.getDataValue(s));
          }t.push(a);
        }return t;
      }, $processUnderlyingColumns: function $processUnderlyingColumns(e) {
        for (var t = [], i = 0; i < e.length; i++) {
          var n = e[i],
              a = new d(n.fieldName, I.convertDataType(n.dataType), n.isReferenced, n.index);t.push(new re(a));
        }return t;
      } }), t.initClass(J, r, { add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$2$StateReadyForQueryField = t.delegateCombine(this.$2$StateReadyForQueryField, e);
      }, remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$2$StateReadyForQueryField = t.delegateRemove(this.$2$StateReadyForQueryField, e);
      }, get_hostId: function get_hostId() {
        return null;
      }, set_hostId: function set_hostId(e) {}, get_iframe: function get_iframe() {
        return null;
      } }, k), t.initClass(K, r, { registerHandler: function registerHandler(e) {
        this.$crossDomainMessager.registerHandler(e);
      }, unregisterHandler: function unregisterHandler(e) {
        this.$crossDomainMessager.unregisterHandler(e);
      }, sendCommand: function sendCommand(e) {
        return function (t, i, n) {
          this.$crossDomainMessager.sendCommand(e).call(this.$crossDomainMessager, t, i, n);
        };
      } }), t.initClass(Y, r, { get_pairs: function get_pairs() {
        return this.$collection;
      }, get_tupleId: function get_tupleId() {
        return this.$tupleId;
      }, get_$clonedPairs: function get_$clonedPairs() {
        return t.isNullOrUndefined(this.$clonedPairs) && (this.$clonedPairs = this.$collection._toApiCollection()), this.$clonedPairs;
      }, $addPair: function $addPair(e) {
        this.$collection._add(e.fieldName, e);
      } }), t.initClass(X, r, { get_name: function get_name() {
        return this.$1$NameField;
      }, set_name: function set_name(e) {
        this.$1$NameField = e;
      }, get_parameters: function get_parameters() {
        return this.$parameters;
      }, serialize: function serialize() {
        var e = [];return e.push(this.get_name().toString()), (e = e.concat.apply(e, this.$parameters)).join(",");
      } }), t.initClass(Z, r, {}, Object), t.initClass(ee, r, {}), t.initClass(te, r, { addVisualIdForWorksheet: function addVisualIdForWorksheet(e, i, n) {
        e["api.worksheetName"] = i, t.isValue(n) && (e["api.dashboardName"] = n);
      } }), t.initClass(ie, r, {}, Object), t.initClass(ne, r, {}), t.initClass(ae, r, {}, Object), t.initClass(re, r, { getFieldName: function getFieldName() {
        return this.$impl.get_fieldName();
      }, getDataType: function getDataType() {
        return this.$impl.get_dataType();
      }, getIsReferenced: function getIsReferenced() {
        return this.$impl.get_isReferenced();
      }, getIndex: function getIndex() {
        return this.$impl.get_index();
      } }), t.initClass(se, r, { getName: function getName() {
        return this.$impl.get_name();
      }, getData: function getData() {
        return this.$impl.get_rows();
      }, getColumns: function getColumns() {
        return this.$impl.get_columns();
      }, getTotalRowCount: function getTotalRowCount() {
        return this.$impl.get_totalRowCount();
      }, getIsSummaryData: function getIsSummaryData() {
        return this.$impl.get_isSummaryData();
      } }), t.initClass(oe, r, { getPairs: function getPairs() {
        return this.impl.get_$clonedPairs();
      } }), t.initClass(ce, r, {}), l.crossDomainEventNotificationId = "xdomainSourceId", l.lastRequestMessage = null, l.lastResponseMessage = null, l.lastClientInfoResponseMessage = null, l.$nextCommandId = 0, le = window._ApiObjectRegistryGlobalState, t.isNullOrUndefined(le) && (le = new Object()), window._ApiObjectRegistryGlobalState = le, window._ApiObjectRegistryGlobalState.creationRegistry = window._ApiObjectRegistryGlobalState.creationRegistry || {}, window._ApiObjectRegistryGlobalState.singletonInstanceRegistry = window._ApiObjectRegistryGlobalState.singletonInstanceRegistry || {}, g.$arrayType = "array", g.$booleanType = "boolean", g.$dateType = "date", g.$functionType = "function", g.$numberType = "number", g.$objectType = "object", g.$regExpType = "regexp", g.$stringType = "string", g.$class2type = t.mkdict(["[object Boolean]", g.$booleanType, "[object Number]", g.$numberType, "[object String]", g.$stringType, "[object Function]", g.$functionType, "[object Array]", g.$arrayType, "[object Date]", g.$dateType, "[object RegExp]", g.$regExpType, "[object Object]", g.$objectType]), g.$trim = t.cast(String.prototype.trim, Function), g.$toString = t.cast(Object.prototype.toString, Function), g.$trimLeft = new RegExp("^[\\s\\xA0]+"), g.$trimRight = new RegExp("[\\s\\xA0]+$"), g.$rvalidchars = new RegExp("^[\\],:{}\\s]*$"), g.$rvalidescape = new RegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), g.$rvalidtokens = new RegExp('"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), g.$rvalidbraces = new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), (ue = e.tableauSoftware).DeviceType = { DEFAULT: "default", DESKTOP: "desktop", TABLET: "tablet", PHONE: "phone" }, ue.DashboardObjectType = { BLANK: "blank", WORKSHEET: "worksheet", QUICK_FILTER: "quickFilter", PARAMETER_CONTROL: "parameterControl", PAGE_FILTER: "pageFilter", LEGEND: "legend", TITLE: "title", TEXT: "text", IMAGE: "image", WEB_PAGE: "webPage", ADDIN: "addIn" }, ue.DataType = { FLOAT: "float", INTEGER: "integer", STRING: "string", BOOLEAN: "boolean", DATE: "date", DATETIME: "datetime" }, ue.DateRangeType = { LAST: "last", LASTN: "lastn", NEXT: "next", NEXTN: "nextn", CURR: "curr", TODATE: "todate" }, ue.ErrorCode = { INTERNAL_ERROR: "internalError", SERVER_ERROR: "serverError", INVALID_AGGREGATION_FIELD_NAME: "invalidAggregationFieldName", INVALID_TOOLBAR_BUTTON_NAME: "invalidToolbarButtonName", INVALID_PARAMETER: "invalidParameter", INVALID_URL: "invalidUrl", STALE_DATA_REFERENCE: "staleDataReference", VIZ_ALREADY_IN_MANAGER: "vizAlreadyInManager", NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: "noUrlOrParentElementNotFound", INVALID_FILTER_FIELDNAME: "invalidFilterFieldName", INVALID_FILTER_FIELDVALUE: "invalidFilterFieldValue", INVALID_FILTER_FIELDNAME_OR_VALUE: "invalidFilterFieldNameOrValue", FILTER_CANNOT_BE_PERFORMED: "filterCannotBePerformed", NOT_ACTIVE_SHEET: "notActiveSheet", INVALID_CUSTOM_VIEW_NAME: "invalidCustomViewName", MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: "missingRangeNForRelativeDateFilters", MISSING_MAX_SIZE: "missingMaxSize", MISSING_MIN_SIZE: "missingMinSize", MISSING_MINMAX_SIZE: "missingMinMaxSize", INVALID_SIZE: "invalidSize", INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: "invalidSizeBehaviorOnWorksheet", SHEET_NOT_IN_WORKBOOK: "sheetNotInWorkbook", INDEX_OUT_OF_RANGE: "indexOutOfRange", DOWNLOAD_WORKBOOK_NOT_ALLOWED: "downloadWorkbookNotAllowed", NULL_OR_EMPTY_PARAMETER: "nullOrEmptyParameter", BROWSER_NOT_CAPABLE: "browserNotCapable", UNSUPPORTED_EVENT_NAME: "unsupportedEventName", INVALID_DATE_PARAMETER: "invalidDateParameter", INVALID_SELECTION_FIELDNAME: "invalidSelectionFieldName", INVALID_SELECTION_VALUE: "invalidSelectionValue", INVALID_SELECTION_DATE: "invalidSelectionDate", NO_URL_FOR_HIDDEN_WORKSHEET: "noUrlForHiddenWorksheet", MAX_VIZ_RESIZE_ATTEMPTS: "maxVizResizeAttempts" }, ue.FieldAggregationType = { SUM: "SUM", AVG: "AVG", MIN: "MIN", MAX: "MAX", STDEV: "STDEV", STDEVP: "STDEVP", VAR: "VAR", VARP: "VARP", COUNT: "COUNT", COUNTD: "COUNTD", MEDIAN: "MEDIAN", ATTR: "ATTR", NONE: "NONE", PERCENTILE: "PERCENTILE", YEAR: "YEAR", QTR: "QTR", MONTH: "MONTH", DAY: "DAY", HOUR: "HOUR", MINUTE: "MINUTE", SECOND: "SECOND", WEEK: "WEEK", WEEKDAY: "WEEKDAY", MONTHYEAR: "MONTHYEAR", MDY: "MDY", END: "END", TRUNC_YEAR: "TRUNC_YEAR", TRUNC_QTR: "TRUNC_QTR", TRUNC_MONTH: "TRUNC_MONTH", TRUNC_WEEK: "TRUNC_WEEK", TRUNC_DAY: "TRUNC_DAY", TRUNC_HOUR: "TRUNC_HOUR", TRUNC_MINUTE: "TRUNC_MINUTE", TRUNC_SECOND: "TRUNC_SECOND", QUART1: "QUART1", QUART3: "QUART3", SKEWNESS: "SKEWNESS", KURTOSIS: "KURTOSIS", INOUT: "INOUT", SUM_XSQR: "SUM_XSQR", USER: "USER" }, ue.FieldRoleType = { DIMENSION: "dimension", MEASURE: "measure", UNKNOWN: "unknown" }, ue.FilterUpdateType = { ALL: "all", REPLACE: "replace", ADD: "add", REMOVE: "remove" }, ue.FilterType = { CATEGORICAL: "categorical", QUANTITATIVE: "quantitative", HIERARCHICAL: "hierarchical", RELATIVEDATE: "relativedate" }, ue.NullOption = { NULL_VALUES: "nullValues", NON_NULL_VALUES: "nonNullValues", ALL_VALUES: "allValues" }, ue.ParameterAllowableValuesType = { ALL: "all", LIST: "list", RANGE: "range" }, ue.ParameterDataType = { FLOAT: "float", INTEGER: "integer", STRING: "string", BOOLEAN: "boolean", DATE: "date", DATETIME: "datetime" }, ue.PeriodType = { YEAR: "year", QUARTER: "quarter", MONTH: "month", WEEK: "week", DAY: "day", HOUR: "hour", MINUTE: "minute", SECOND: "second" }, ue.SelectionUpdateType = { REPLACE: "replace", ADD: "add", REMOVE: "remove" }, ue.SheetSizeBehavior = { AUTOMATIC: "automatic", EXACTLY: "exactly", RANGE: "range", ATLEAST: "atleast", ATMOST: "atmost" }, ue.SheetType = { WORKSHEET: "worksheet", DASHBOARD: "dashboard", STORY: "story" }, ue.TableauEventName = { CUSTOM_VIEW_LOAD: "customviewload", CUSTOM_VIEW_REMOVE: "customviewremove", CUSTOM_VIEW_SAVE: "customviewsave", CUSTOM_VIEW_SET_DEFAULT: "customviewsetdefault", FILTER_CHANGE: "filterchange", FIRST_INTERACTIVE: "firstinteractive", FIRST_VIZ_SIZE_KNOWN: "firstvizsizeknown", MARKS_SELECTION: "marksselection", MARKS_HIGHLIGHT: "markshighlight", PARAMETER_VALUE_CHANGE: "parametervaluechange", STORY_POINT_SWITCH: "storypointswitch", TAB_SWITCH: "tabswitch", TOOLBAR_STATE_CHANGE: "toolbarstatechange", VIZ_RESIZE: "vizresize" }, ue.ToolbarPosition = { TOP: "top", BOTTOM: "bottom" }, ue.ToolbarButtonName = { REDO: "redo", UNDO: "undo" };
  }(),
  /*! API */
  function () {
    var i = {};e.tab = e.tab || {}, e.tableauSoftware = e.tableauSoftware || {}, t.initAssembly(i, "Tableau.JavaScript.Vql.Api");var n = function n(e, t) {
      this.$customViewImpl = null, E.call(this, e, null), this.$customViewImpl = t;
    };n.__typeName = "tab.$CustomViewEventContext";var r = function r() {};r.__typeName = "tab.$DashboardZoneInfo", r.isInstanceOfType = function () {
      return !0;
    };var s = function s(e, t, i, n) {
      this.$fieldFieldName = null, this.$filterCaption = null, E.call(this, e, t), this.$fieldFieldName = i, this.$filterCaption = n;
    };s.__typeName = "tab.$FilterEventContext";var o = function o(e, t) {
      E.call(this, e, t);
    };o.__typeName = "tab.$HighlightEventContext";var l = function l(e, t) {
      E.call(this, e, t);
    };l.__typeName = "tab.$MarksEventContext";var u = function u(e, t) {
      this.$parameterName = null, E.call(this, e, null), this.$parameterName = t;
    };u.__typeName = "tab.$ParameterEventContext";var c = function c(e) {
      if (this.$parameter = null, this.$name = null, this.$currentValue = null, this.$dataType = null, this.$allowableValuesType = null, this.$allowableValues = null, this.$minValue = null, this.$maxValue = null, this.$stepSize = null, this.$dateStepPeriod = null, this.$name = e.name, this.$currentValue = a._Utility.getDataValue(e.currentValue), this.$dataType = a.ApiEnumConverter.convertParameterDataType(e.dataType), this.$allowableValuesType = a.ApiEnumConverter.convertParameterAllowableValuesType(e.allowableValuesType), t.isValue(e.allowableValues) && "list" === this.$allowableValuesType) {
        this.$allowableValues = [];for (var i = 0; i < e.allowableValues.length; i++) {
          var n = e.allowableValues[i];this.$allowableValues.push(a._Utility.getDataValue(n));
        }
      }"range" === this.$allowableValuesType && (this.$minValue = a._Utility.getDataValue(e.minValue), this.$maxValue = a._Utility.getDataValue(e.maxValue), this.$stepSize = e.stepSize, ("date" === this.$dataType || "datetime" === this.$dataType) && t.isValue(this.$stepSize) && t.isValue(e.dateStepPeriod) && (this.$dateStepPeriod = a.ApiEnumConverter.convertPeriodType(e.dateStepPeriod)));
    };c.__typeName = "tab.$ParameterImpl";var h = function h() {};h.__typeName = "tab._ApiBootstrap", h.initialize = function () {
      a._ApiObjectRegistry.registerApiMessageRouter(function () {
        return new k();
      });
    }, e.tab._ApiBootstrap = h;var m = function m(e, t, i) {
      this.$customView = null, this.$presModel = null, this.$workbookImpl = null, this.$messagingOptions = null, this.$name = null, this.$ownerName = null, this.$url = null, this.$isPublic = !1, this.$isDefault = !1, this.$isStale = !1, this.$workbookImpl = e, this.$name = t, this.$messagingOptions = i, this.$isPublic = !1, this.$isDefault = !1, this.$isStale = !1;
    };m.__typeName = "tab._CustomViewImpl", m._getAsync = function (e) {
      var t = new a._Deferred();return t.resolve(e.get__customViewImpl().get_$customView()), t.get_promise();
    }, m._createNew = function (e, i, n, a) {
      var r = new m(e, n.name, i);return r.$isPublic = n.isPublic, r.$url = n.url, r.$ownerName = n.owner.friendlyName, r.$isDefault = t.isValue(a) && t.unbox(a) === n.id, r.$presModel = n, r;
    }, m._saveNewAsync = function (e, i, n) {
      var r = new a._Deferred(),
          s = {};s["api.customViewName"] = n;var o = m.$createCustomViewCommandReturnHandler("api.SaveNewCustomViewCommand", r, function (n) {
        m._processCustomViewUpdate(e, i, n, !0);var a = null;t.isValue(e.get_$updatedCustomViews()) && (a = e.get_$updatedCustomViews().get_item(0)), r.resolve(a);
      });return i.sendCommand(Object).call(i, s, o), r.get_promise();
    }, m._showCustomViewAsync = function (e, i, n) {
      var r = new a._Deferred(),
          s = {};t.isValue(n) && (s["api.customViewParam"] = n);var o = m.$createCustomViewCommandReturnHandler("api.ShowCustomViewCommand", r, function (t) {
        var i = e.get_activeCustomView();r.resolve(i);
      });return i.sendCommand(Object).call(i, s, o), r.get_promise();
    }, m._makeCurrentCustomViewDefaultAsync = function (e, t) {
      var i = new a._Deferred(),
          n = m.$createCustomViewCommandReturnHandler("api.MakeCurrentCustomViewDefaultCommand", i, function (t) {
        var n = e.get_activeCustomView();i.resolve(n);
      });return t.sendCommand(Object).call(t, {}, n), i.get_promise();
    }, m._getCustomViewsAsync = function (e, i) {
      var n = new a._Deferred(),
          r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.FetchCustomViewsCommand", 0, function (t) {
        m._processCustomViews(e, i, t), n.resolve(e.get_$customViews()._toApiCollection());
      }, function (e, t) {
        n.reject(a._TableauException.create("serverError", t));
      });return i.sendCommand(Object).call(i, null, r), n.get_promise();
    }, m._processCustomViews = function (e, t, i) {
      m._processCustomViewUpdate(e, t, i, !1);
    }, m._processCustomViewUpdate = function (e, i, n, r) {
      if (e.set_$currentCustomView(null), e.set_$removedCustomViews(e.get_$customViews()), e.set_$customViews(new a._Collection()), r && (e.set_$updatedCustomViews(new a._Collection()), t.isValue(n.newView) && m.$processOneCustomViewUpdate(e, i, n, n.newView, r)), t.isValue(n.customViews)) for (var s = 0; s < n.customViews.length; s++) {
        var o = n.customViews[s];m.$processOneCustomViewUpdate(e, i, n, o, r);
      }
    }, m.$processOneCustomViewUpdate = function (e, i, n, a, r) {
      var s = null,
          o = null;t.isValue(n.currentView) && (s = n.currentView.name, o = n.currentView.owner.friendlyName);var l = n.defaultCustomViewId,
          u = m._createNew(e, i, a, l),
          c = u.get_$name();e.get_$customViews()._has(c) && (c += "/" + a.owner), e.get_$customViews()._add(c, u.get_$customView()), e.get_$removedCustomViews()._has(c) ? e.get_$removedCustomViews()._remove(c) : r && !e.get_$updatedCustomViews()._has(c) && e.get_$updatedCustomViews()._add(c, u.get_$customView()), t.isValue(s) && t.referenceEquals(u.get_$name(), s) && t.referenceEquals(u.get_$ownerName(), o) && e.set_$currentCustomView(u.get_$customView());
    }, m.$createCustomViewCommandReturnHandler = function (e, i, n) {
      return new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))(e, 0, n, function (e, t) {
        i.reject(a._TableauException.create("serverError", t));
      });
    };var d = function d(e, t, i) {
      this.$dashboard = null, this.$worksheets = new a._Collection(), this.$dashboardObjects = new a._Collection(), f.call(this, e, t, i);
    };d.__typeName = "tab._DashboardImpl", e.tab._DashboardImpl = d;var p = function p(e, t) {
      this.$name = null, this.$fields = new a._Collection(), this.$isPrimary = !1, this.$dataSource = null, a._Param.verifyString(e, "name"), this.$name = e, this.$isPrimary = t;
    };p.__typeName = "tab._DataSourceImpl", p.processDataSource = function (e) {
      for (var i = new p(e.name, e.isPrimary), n = t.coalesce(e.fields, []), r = 0; r < n.length; r++) {
        var s = n[r],
            o = a.ApiEnumConverter.convertFieldRole(s.role),
            l = a.ApiEnumConverter.convertFieldAggregation(s.aggregation),
            u = new J(i.get_dataSource(), s.name, o, l);i.addField(u);
      }return i;
    }, p.processDataSourcesForWorksheet = function (e) {
      for (var i = new a._Collection(), n = null, r = 0; r < e.dataSources.length; r++) {
        var s = e.dataSources[r],
            o = p.processDataSource(s);s.isPrimary ? n = o : i._add(s.name, o.get_dataSource());
      }return t.isValue(n) && i._addToFirst(n.get_name(), n.get_dataSource()), i;
    }, e.tab._DataSourceImpl = p;var f = function f(e, t, i) {
      this.$name = null, this.$index = 0, this.$isActive = !1, this.$isHidden = !1, this.$sheetType = null, this.$size = null, this.$url = null, this.$workbookImpl = null, this.$messagingOptions = null, this.$parentStoryPointImpl = null, this.$zoneId = 0, a._Param.verifyValue(e, "sheetInfoImpl"), a._Param.verifyValue(t, "workbookImpl"), a._Param.verifyValue(i, "messagingOptions"), this.$name = e.name, this.$index = e.index, this.$isActive = e.isActive, this.$isHidden = e.isHidden, this.$sheetType = e.sheetType, this.$size = e.size, this.$url = e.url, this.$workbookImpl = t, this.$messagingOptions = i, this.$zoneId = e.zoneId;
    };f.__typeName = "tab._SheetImpl", f.$convertValueToIntIfValid = function (e) {
      return t.isValue(e) ? a._Utility.toInt(e) : e;
    }, f.$normalizeSheetSize = function (e) {
      var i = a.PublicEnums.normalizeEnum(a.ApiSheetSizeBehavior).call(null, e.behavior, "size.behavior"),
          n = e.minSize;t.isValue(n) && (n = a.Size.$ctor(f.$convertValueToIntIfValid(e.minSize.width), f.$convertValueToIntIfValid(e.minSize.height)));var r = e.maxSize;return t.isValue(r) && (r = a.Size.$ctor(f.$convertValueToIntIfValid(e.maxSize.width), f.$convertValueToIntIfValid(e.maxSize.height))), a.SheetSize.$ctor(i, n, r);
    }, e.tab._SheetImpl = f;var g = function g() {};g.__typeName = "tab._SheetInfoImpl", g.$ctor = function (e, t, i, n, a, r, s, o, l) {
      var u = new Object();return u.name = null, u.index = 0, u.workbook = null, u.url = null, u.isHidden = !1, u.sheetType = null, u.zoneId = 0, u.size = null, u.isActive = !1, u.name = e, u.sheetType = t, u.index = i, u.size = n, u.workbook = a, u.url = r, u.isActive = s, u.isHidden = o, u.zoneId = l, u;
    }, g.isInstanceOfType = function () {
      return !0;
    }, e.tab._SheetInfoImpl = g;var $ = function $(e, t, i, n, r) {
      this.$activeStoryPointImpl = null, this.$findSheetFunc = null, this.$story = null, this.$storyPointsInfo = null, this.$2$ActiveStoryPointChangeField = null, f.call(this, e, t, i), a._Param.verifyValue(n, "storyPm"), a._Param.verifyValue(r, "findSheetFunc"), this.$findSheetFunc = r, this.update(n);
    };$.__typeName = "tab._StoryImpl", e.tab._StoryImpl = $;var _ = function _(e, i) {
      if (this.$caption = null, this.$index = 0, this.$isActive = !1, this.$isUpdated = !1, this.$containedSheetImpl = null, this.$parentStoryImpl = null, this.$storyPoint = null, this.$storyPointId = 0, this.$isActive = e.isActive, this.$isUpdated = e.isUpdated, this.$caption = e.caption, this.$index = e.index, this.$parentStoryImpl = e.parentStoryImpl, this.$storyPointId = e.storyPointId, this.$containedSheetImpl = i, t.isValue(i) && (this.$containedSheetImpl.set_parentStoryPointImpl(this), "dashboard" === i.get_sheetType())) for (var n = t.cast(this.$containedSheetImpl, d), a = 0; a < n.get_worksheets().get__length(); a++) {
        n.get_worksheets().get_item(a)._impl.set_parentStoryPointImpl(this);
      }
    };_.__typeName = "tab._StoryPointImpl", _.createContainedSheet = function (e, i, n, r) {
      if (t.isNullOrUndefined(e) || t.isNullOrUndefined(e.name)) return null;var s = a.ApiEnumConverter.convertSheetType(e.sheetType),
          o = a.SheetSizeFactory.createAutomatic(),
          l = r(e.name),
          u = t.isNullOrUndefined(l),
          c = u ? "" : l.getUrl(),
          h = g.$ctor(e.name, s, -1, o, i.get_workbook(), c, !1, u, e.zoneId);if ("worksheet" === e.sheetType) {
        return new C(h, i, n, null);
      }if ("dashboard" === e.sheetType) {
        var m = new d(h, i, n),
            p = S.$createDashboardZones(e.dashboardZones);return m.$addObjects(p, r), m;
      }throw "story" === e.sheetType ? a._TableauException.createInternalError("Cannot have a story embedded within another story.") : a._TableauException.createInternalError("Unknown sheet type '" + e.sheetType + "'");
    }, e.tab._StoryPointImpl = _;var v = function v() {};v.__typeName = "tab._StoryPointInfoImpl", v.$ctor = function (e, t, i, n, a, r) {
      var s = new Object();return s.storyPointId = 0, s.parentStoryImpl = null, s.caption = null, s.index = 0, s.isActive = !1, s.isUpdated = !1, s.caption = e, s.index = t, s.storyPointId = i, s.isActive = n, s.isUpdated = a, s.parentStoryImpl = r, s;
    }, v.isInstanceOfType = function () {
      return !0;
    }, e.tab._StoryPointInfoImpl = v;var y = function y(e, t) {
      this.$toolbarState = null, this.$vizImpl = null, this.$toolbarStatePresModel = null, this.$vizImpl = e, this.$toolbarStatePresModel = t;
    };y.__typeName = "tab._ToolbarStateImpl", e.tab._ToolbarStateImpl = y;var w = function w() {};w.__typeName = "tab._VizManagerImpl", w.get_$clonedVizs = function () {
      return w.$vizs.concat();
    }, w.$registerViz = function (e) {
      w.$verifyVizNotAlreadyParented(e), w.$vizs.push(e);
    }, w.$unregisterViz = function (e) {
      for (var i = 0, n = w.$vizs.length; i < n; i++) {
        if (t.referenceEquals(w.$vizs[i], e)) {
          w.$vizs.splice(i, 1);break;
        }
      }
    }, w.$sendVisibleRects = function () {
      for (var e = 0, t = w.$vizs.length; e < t; e++) {
        w.$vizs[e]._impl.$sendVisibleRect();
      }
    }, w.$verifyVizNotAlreadyParented = function (e) {
      for (var i = e.getParentElement(), n = 0, r = w.$vizs.length; n < r; n++) {
        if (t.referenceEquals(w.$vizs[n].getParentElement(), i)) {
          var s = "Another viz is already present in element '" + a._Utility.elementToString(i) + "'.";throw a._TableauException.create("vizAlreadyInManager", s);
        }
      }
    };var b = function b(e, i, n) {
      if (this.name = "", this.host_url = null, this.tabs = !1, this.toolbar = !1, this.toolBarPosition = null, this.device = null, this.hostId = null, this.width = null, this.height = null, this.parentElement = null, this.userSuppliedParameters = null, this.staticImageUrl = null, this.fixedSize = !1, this.displayStaticImage = !1, this.iframeSizedToWindow = !1, this.$urlFromApi = null, this.$createOptions = null, t.isNullOrUndefined(e) || t.isNullOrUndefined(i)) throw a._TableauException.create("noUrlOrParentElementNotFound", "URL is empty or Parent element not found");t.isNullOrUndefined(n) && ((n = new Object()).hideTabs = !1, n.hideToolbar = !1, n.onFirstInteractive = null), t.isValue(n.height) || t.isValue(n.width) ? (this.fixedSize = !0, a._Utility.isNumber(n.height) && (n.height = n.height.toString() + "px"), a._Utility.isNumber(n.width) && (n.width = n.width.toString() + "px"), this.height = t.isValue(n.height) ? a._Utility.roundVizSizeInPixels(n.height.toString()) : null, this.width = t.isValue(n.width) ? a._Utility.roundVizSizeInPixels(n.width.toString()) : null) : this.fixedSize = !1, this.displayStaticImage = n.displayStaticImage || !1, this.staticImageUrl = n.staticImageUrl || "", this.tabs = !n.hideTabs, this.toolbar = !n.hideToolbar, this.device = n.device, this.iframeSizedToWindow = n.iframeSizedToWindow, this.parentElement = e, this.$createOptions = n, this.toolBarPosition = n.toolbarPosition;var r = i.split("?");this.$urlFromApi = r[0], 2 === r.length ? this.userSuppliedParameters = r[1] : this.userSuppliedParameters = "";var s = new RegExp(".*?[^/:]/", "").exec(this.$urlFromApi);if (t.isNullOrUndefined(s) || -1 === s[0].toLowerCase().indexOf("http://") && -1 === s[0].toLowerCase().indexOf("https://")) throw a._TableauException.create("invalidUrl", "Invalid url");this.host_url = s[0].toLowerCase(), this.name = this.$urlFromApi.replace(s[0], ""), this.name = this.name.replace("views/", "");
    };b.__typeName = "tab._VizParameters", e.tab._VizParameters = b;var S = function S(e, t, i) {
      this.$workbook = null, this.$vizImpl = null, this.$name = null, this.$activeSheetImpl = null, this.$activatingHiddenSheetImpl = null, this.$publishedSheetsInfo = new a._Collection(), this.$isDownloadAllowed = !1, this.$messagingOptions = null, this.$currentCustomView = null, this.$customViews = new a._Collection(), this.$updatedCustomViews = new a._Collection(), this.$removedCustomViews = new a._Collection(), this.$parameters = null, this.$lastChangedParameterImpl = null, this.$vizImpl = e, this.$messagingOptions = t, this.$getClientInfo(i);
    };S.__typeName = "tab._WorkbookImpl", S.$createDashboardZones = function (e) {
      e = t.coalesce(e, []);for (var i = [], n = 0; n < e.length; n++) {
        var r = e[n],
            s = a.ApiEnumConverter.convertDashboardObjectType(r.zoneType),
            o = a.Size.$ctor(r.width, r.height),
            l = a.Point.$ctor(r.x, r.y),
            u = { name: r.name, objectType: s, position: l, size: o, zoneId: r.zoneId };i.push(u);
      }return i;
    }, S.$extractSheetName = function (e) {
      if (t.isNullOrUndefined(e)) return null;if (a._Utility.isString(e)) return e;var i = t.safeCast(e, te);if (t.isValue(i)) return i.getName();var n = t.safeCast(e, ie);return t.isValue(n) ? n.getName() : null;
    }, S.$createSheetSize = function (e) {
      return t.isNullOrUndefined(e) ? a.SheetSizeFactory.createAutomatic() : a.SheetSizeFactory.fromSizeConstraints(e.sizeConstraints);
    }, S.$processParameters = function (e) {
      for (var t = new a._Collection(), i = 0; i < e.parameters.length; i++) {
        var n = e.parameters[i],
            r = new c(n);t._add(r.get_$name(), r.get_$parameter());
      }return t;
    }, S.$findAndCreateParameterImpl = function (e, i) {
      for (var n = 0; n < i.parameters.length; n++) {
        var a = i.parameters[n];if (t.referenceEquals(a.name, e)) return new c(a);
      }return null;
    }, e.tab._WorkbookImpl = S;var C = function C(e, t, i, n) {
      this.$worksheet = null, this.$parentDashboardImpl = null, this.$getDataCommandsBuilder = new a.GetDataCommandsBuilder(), this.$filterCommandsBuilder = new a.FilterCommandsBuilder(), this.$sharedUtils = new a.SharedUtils(), this.$filters = new a._Collection(), this.$selectedMarks = new a._Collection(), this.highlightedMarks = null, f.call(this, e, t, i), this.$parentDashboardImpl = n;
    };C.__typeName = "tab._WorksheetImpl", C.$filterCommandError = function (e) {
      var i = e;if (t.isValue(i) && t.isValue(i.errorCode)) {
        var n = t.isValue(i.additionalInformation) ? i.additionalInformation.toString() : "";switch (i.errorCode) {case "invalidFilterFieldName":
            return a._TableauException.create("invalidFilterFieldName", n);case "invalidFilterFieldValue":
            return a._TableauException.create("invalidFilterFieldValue", n);case "invalidAggregationFieldName":
            return a._TableauException.createInvalidAggregationFieldName(n);default:
            return a._TableauException.createServerError(n);}
      }return null;
    }, C.$createSelectionCommandError = function (e) {
      var i = e;if (t.isValue(i) && t.isValue(i.errorCode)) {
        var n = t.isValue(i.additionalInformation) ? i.additionalInformation.toString() : "";switch (i.errorCode) {case "invalidSelectionFieldName":
            return a._TableauException.create("invalidSelectionFieldName", n);case "invalidSelectionValue":
            return a._TableauException.create("invalidSelectionValue", n);case "invalidSelectionDate":
            return a._TableauException.create("invalidSelectionDate", n);}
      }return null;
    }, e.tab._WorksheetImpl = C;var I = function I(e, t, i) {
      this.$context = null, x.call(this, e, t), this.$context = new n(t._impl.get__workbookImpl(), i);
    };I.__typeName = "tab.CustomViewEvent", e.tab.CustomViewEvent = I;var E = function E(e, t) {
      this.$workbookImpl = null, this.$worksheetImpl = null, this.$workbookImpl = e, this.$worksheetImpl = t;
    };E.__typeName = "tab.EventContext", e.tab.EventContext = E;var N = function N(e, t, i, n, a) {
      this.$filterCaption = null, this.$context = null, j.call(this, e, t, i), this.$filterCaption = a, this.$context = new s(t._impl.get__workbookImpl(), i, n, a);
    };N.__typeName = "tab.FilterEvent", e.tab.FilterEvent = N;var A = function A(e, t, i) {
      this.$vizSize = null, x.call(this, e, t), this.$vizSize = i;
    };A.__typeName = "tab.FirstVizSizeKnownEvent", e.tab.FirstVizSizeKnownEvent = A;var T = function T(e, t, i) {
      this.$context = null, j.call(this, e, t, i), this.$context = new o(t._impl.get__workbookImpl(), i);
    };T.__typeName = "tab.HighlightEvent", e.tab.HighlightEvent = T;var V = function V() {};V.__typeName = "tab.IJsApiMessageHandler", e.tab.IJsApiMessageHandler = V;var k = function k() {
      this.$customViewLoadCallbacks = {}, this.$crossDomainMessager = null;var e = t.mkdel(this, function (e, i) {
        var n = t.safeCast(i, V);t.isValue(n) && this.$handleLegacyNotifications(e, n);
      });this.$crossDomainMessager = new a.CrossDomainMessager(e);
    };k.__typeName = "tab.JsApiMessageRouter", e.tab.JsApiMessageRouter = k;var O = function O(e, t) {
      this.$router = null, this.$handler = null, a._Param.verifyValue(e, "router"), a._Param.verifyValue(t, "handler"), this.$router = e, this.$handler = t;
    };O.__typeName = "tab.JsApiMessagingOptions", e.tab.JsApiMessagingOptions = O;var F = function F(e, t, i) {
      this.$context = null, j.call(this, e, t, i), this.$context = new l(t._impl.get__workbookImpl(), i);
    };F.__typeName = "tab.MarksEvent", e.tab.MarksEvent = F;var R = function R(e, t, i) {
      this.$context = null, x.call(this, e, t), this.$context = new u(t._impl.get__workbookImpl(), i);
    };R.__typeName = "tab.ParameterEvent", e.tab.ParameterEvent = R;var D = function D() {};D.__typeName = "tab.StoryPointInfoImplUtil", D.clone = function (e) {
      return v.$ctor(e.caption, e.index, e.storyPointId, e.isActive, e.isUpdated, e.parentStoryImpl);
    }, e.tab.StoryPointInfoImplUtil = D;var z = function z(e, t, i, n) {
      this.$oldStoryPointInfo = null, this.$newStoryPoint = null, x.call(this, e, t), this.$oldStoryPointInfo = i, this.$newStoryPoint = n;
    };z.__typeName = "tab.StoryPointSwitchEvent", e.tab.StoryPointSwitchEvent = z;var x = function x(e, t) {
      this.$viz = null, this.$eventName = null, this.$viz = t, this.$eventName = e;
    };x.__typeName = "tab.TableauEvent", e.tab.TableauEvent = x;var P = function P(e, t, i, n) {
      this.$oldName = null, this.$newName = null, x.call(this, e, t), this.$oldName = i, this.$newName = n;
    };P.__typeName = "tab.TabSwitchEvent", e.tab.TabSwitchEvent = P;var U = function U(e, t, i) {
      this.$toolbarStateImpl = null, x.call(this, e, t), this.$toolbarStateImpl = i;
    };U.__typeName = "tab.ToolbarStateEvent", e.tab.ToolbarStateEvent = U;var M = function M(e, i, n, r, s) {
      if (this.$workbookTabSwitchHandler = null, this.$viz = null, this.$iframe = null, this.$staticImage = null, this.$parameters = null, this.$initialAvailableSize = null, this.$instanceId = null, this.$workbookImpl = null, this.$onFirstInteractiveCallback = null, this.$onFirstVizSizeKnownCallback = null, this.$onFirstInteractiveAlreadyCalled = !1, this.$areTabsHidden = !1, this.$isToolbarHidden = !1, this.$areAutomaticUpdatesPaused = !1, this.$messagingOptions = null, this.$vizSize = null, this.$windowResizeHandler = null, this.$initializingWorkbookImpl = !1, this.$1$CustomViewsListLoadField = null, this.$1$StateReadyForQueryField = null, this.$1$MarksSelectionField = null, this.$1$MarksHighlightField = null, this.$1$FilterChangeField = null, this.$1$ParameterValueChangeField = null, this.$1$CustomViewLoadField = null, this.$1$CustomViewSaveField = null, this.$1$CustomViewRemoveField = null, this.$1$CustomViewSetDefaultField = null, this.$1$TabSwitchField = null, this.$1$ToolbarStateChangeField = null, this.$1$StoryPointSwitchField = null, this.$1$VizResizeField = null, !a._Utility.hasWindowPostMessage() || !a._Utility.hasJsonParse()) throw a._TableauException.createBrowserNotCapable();this.$messagingOptions = new O(e, this), this.$viz = i, (t.isNullOrUndefined(n) || 1 !== n.nodeType) && (n = document.body), this.$parameters = new b(n, r, s), t.isValue(s) && (this.$onFirstInteractiveCallback = s.onFirstInteractive, this.$onFirstVizSizeKnownCallback = s.onFirstVizSizeKnown);
    };M.__typeName = "tab.VizImpl", e.tab.VizImpl = M;var H = function H(e, t, i) {
      this.$availableSize = null, x.call(this, e, t), this.$availableSize = i;
    };H.__typeName = "tab.VizResizeEvent", e.tab.VizResizeEvent = H;var L = function L() {};L.__typeName = "tab.VizSize", L.$ctor = function (e, t) {
      var i = new Object();return i.sheetSize = null, i.chromeHeight = 0, i.sheetSize = e, i.chromeHeight = t, i;
    }, L.isInstanceOfType = function () {
      return !0;
    }, e.tab.VizSize = L;var j = function j(e, t, i) {
      this.$worksheetImpl = null, x.call(this, e, t), this.$worksheetImpl = i;
    };j.__typeName = "tab.WorksheetEvent", e.tab.WorksheetEvent = j;var W = function W(e, t) {
      this.$isExclude = !1, this.$appliedValues = null, K.call(this, e, t), this.$initializeFromJson$1(t);
    };W.__typeName = "tableauSoftware.CategoricalFilter", e.tableauSoftware.CategoricalFilter = W;var B = function B(e) {
      this._impl = null, this._impl = e;
    };B.__typeName = "tableauSoftware.CustomView", e.tableauSoftware.CustomView = B;var q = function q(e) {
      this._impl = null, te.call(this, e);
    };q.__typeName = "tableauSoftware.Dashboard", e.tableauSoftware.Dashboard = q;var G = function G(e, i, n) {
      if (this.$zoneInfo = null, this.$dashboard = null, this.$worksheet = null, "worksheet" === e.objectType && t.isNullOrUndefined(n)) throw a._TableauException.createInternalError("worksheet parameter is required for WORKSHEET objects");if ("worksheet" !== e.objectType && t.isValue(n)) throw a._TableauException.createInternalError("worksheet parameter should be undefined for non-WORKSHEET objects");this.$zoneInfo = e, this.$dashboard = i, this.$worksheet = n;
    };G.__typeName = "tableauSoftware.DashboardObject", e.tableauSoftware.DashboardObject = G;var Q = function Q(e) {
      this.$impl = null, this.$impl = e;
    };Q.__typeName = "tableauSoftware.DataSource", e.tableauSoftware.DataSource = Q;var J = function J(e, t, i, n) {
      this.$dataSource = null, this.$name = null, this.$fieldRoleType = null, this.$fieldAggrType = null, this.$dataSource = e, this.$name = t, this.$fieldRoleType = i, this.$fieldAggrType = n;
    };J.__typeName = "tableauSoftware.Field", e.tableauSoftware.Field = J;var K = function K(e, t) {
      this.$worksheetImpl = null, this.$type = null, this.$caption = null, this.$field = null, this.$dataSourceName = null, this.$fieldRole = null, this.$fieldAggregation = null, this.$worksheetImpl = e, this.$initializeFromJson(t);
    };K.__typeName = "tableauSoftware.Filter", K.$createFilter = function (e, t) {
      switch (t.filterType) {case "categorical":
          return new W(e, t);case "relativedate":
          return new ee(e, t);case "hierarchical":
          return new Y(e, t);case "quantitative":
          return new Z(e, t);}return null;
    }, K.processFiltersList = function (e, t) {
      for (var i = new a._Collection(), n = 0; n < t.filters.length; n++) {
        var r = t.filters[n];i._has(r.caption) || i._add(r.caption, r.caption);
      }for (var s = new a._Collection(), o = 0; o < t.filters.length; o++) {
        var l = t.filters[o],
            u = K.$createFilter(e, l);if (s._has(l.caption)) {
          for (var c = l.caption.toString() + "_" + l.filterType.toString(), h = c, m = 1; i._has(h);) {
            h = c + "_" + m, m++;
          }s._add(h, u);
        } else s._add(l.caption, u);
      }return s;
    }, e.tableauSoftware.Filter = K;var Y = function Y(e, t) {
      this.$levels = 0, K.call(this, e, t), this.$initializeFromJson$1(t);
    };Y.__typeName = "tableauSoftware.HierarchicalFilter", e.tableauSoftware.HierarchicalFilter = Y;var X = function X(e) {
      this._impl = null, this._impl = e;
    };X.__typeName = "tableauSoftware.Parameter", e.tableauSoftware.Parameter = X;var Z = function Z(e, t) {
      this.$domainMin = null, this.$domainMax = null, this.$min = null, this.$max = null, this.$includeNullValues = !1, K.call(this, e, t), this.$initializeFromJson$1(t);
    };Z.__typeName = "tableauSoftware.QuantitativeFilter", e.tableauSoftware.QuantitativeFilter = Z;var ee = function ee(e, t) {
      this.$periodType = null, this.$rangeType = null, this.$rangeN = 0, K.call(this, e, t), this.$initializeFromJson$1(t);
    };ee.__typeName = "tableauSoftware.RelativeDateFilter", e.tableauSoftware.RelativeDateFilter = ee;var te = function te(e) {
      this._impl = null, a._Param.verifyValue(e, "sheetImpl"), this._impl = e;
    };te.__typeName = "tableauSoftware.Sheet", e.tableauSoftware.Sheet = te;var ie = function ie(e) {
      this.$impl = null, this.$impl = e;
    };ie.__typeName = "tableauSoftware.SheetInfo", e.tableauSoftware.SheetInfo = ie;var ne = function ne(e) {
      this._impl = null, te.call(this, e);
    };ne.__typeName = "tableauSoftware.Story", e.tableauSoftware.Story = ne;var ae = function ae(e) {
      this.$impl = null, this.$impl = e;
    };ae.__typeName = "tableauSoftware.StoryPoint", e.tableauSoftware.StoryPoint = ae;var re = function re(e) {
      this._impl = null, this._impl = e;
    };re.__typeName = "tableauSoftware.StoryPointInfo", e.tableauSoftware.StoryPointInfo = re;var se = function se(e) {
      this._impl = null, this._impl = e;
    };se.__typeName = "tableauSoftware.ToolbarState", e.tableauSoftware.ToolbarState = se;var oe = function oe(e, i, n, a) {
      this.$major = 0, this.$minor = 0, this.$patch = 0, this.$metadata = null, this.$major = e, this.$minor = i, this.$patch = n, this.$metadata = t.coalesce(a, null);
    };oe.__typeName = "tableauSoftware.Version", oe.getCurrent = function () {
      return oe.$currentVersion;
    }, e.tableauSoftware.Version = oe;var le = function le(e, t, i) {
      this._impl = null;var n = a._ApiObjectRegistry.getApiMessageRouter();this._impl = new M(n, this, e, t, i), this._impl.$create();
    };le.__typeName = "tableauSoftware.Viz", le.getLastRequestMessage = function () {
      return a._ApiCommand.lastRequestMessage;
    }, le.getLastResponseMessage = function () {
      return a._ApiCommand.lastResponseMessage;
    }, le.getLastClientInfoResponseMessage = function () {
      return a._ApiCommand.lastClientInfoResponseMessage;
    }, e.tableauSoftware.Viz = le;var ue = function ue() {};ue.__typeName = "tableauSoftware.VizManager", ue.getVizs = function () {
      return w.get_$clonedVizs();
    }, e.tableauSoftware.VizManager = ue;var ce = function ce(e) {
      this.$workbookImpl = null, this.$workbookImpl = e;
    };ce.__typeName = "tableauSoftware.Workbook", e.tableauSoftware.Workbook = ce;var he = function he(e) {
      this._impl = null, te.call(this, e);
    };he.__typeName = "tableauSoftware.Worksheet", e.tableauSoftware.Worksheet = he, t.initClass(E, i, { get__workbookImpl: function get__workbookImpl() {
        return this.$workbookImpl;
      }, get__worksheetImpl: function get__worksheetImpl() {
        return this.$worksheetImpl;
      } }), t.initClass(n, i, { get__customViewImpl: function get__customViewImpl() {
        return this.$customViewImpl;
      } }, E), t.initClass(r, i, {}), t.initClass(s, i, { get__filterFieldName: function get__filterFieldName() {
        return this.$fieldFieldName;
      }, get_$filterCaption: function get_$filterCaption() {
        return this.$filterCaption;
      } }, E), t.initClass(o, i, {}, E), t.initClass(l, i, {}, E), t.initClass(u, i, { get__parameterName: function get__parameterName() {
        return this.$parameterName;
      } }, E), t.initClass(c, i, { get_$parameter: function get_$parameter() {
        return t.isNullOrUndefined(this.$parameter) && (this.$parameter = new X(this)), this.$parameter;
      }, get_$name: function get_$name() {
        return this.$name;
      }, get_$currentValue: function get_$currentValue() {
        return this.$currentValue;
      }, get_$dataType: function get_$dataType() {
        return this.$dataType;
      }, get_$allowableValuesType: function get_$allowableValuesType() {
        return this.$allowableValuesType;
      }, get_$allowableValues: function get_$allowableValues() {
        return this.$allowableValues;
      }, get_$minValue: function get_$minValue() {
        return this.$minValue;
      }, get_$maxValue: function get_$maxValue() {
        return this.$maxValue;
      }, get_$stepSize: function get_$stepSize() {
        return this.$stepSize;
      }, get_$dateStepPeriod: function get_$dateStepPeriod() {
        return this.$dateStepPeriod;
      } }), t.initClass(h, i, {}), t.initClass(m, i, { get_$customView: function get_$customView() {
        return t.isNullOrUndefined(this.$customView) && (this.$customView = new B(this)), this.$customView;
      }, get_$workbook: function get_$workbook() {
        return this.$workbookImpl.get_workbook();
      }, get_$url: function get_$url() {
        return this.$url;
      }, get_$name: function get_$name() {
        return this.$name;
      }, set_$name: function set_$name(e) {
        if (this.$isStale) throw a._TableauException.create("staleDataReference", "Stale data");this.$name = e;
      }, get_$ownerName: function get_$ownerName() {
        return this.$ownerName;
      }, get_$advertised: function get_$advertised() {
        return this.$isPublic;
      }, set_$advertised: function set_$advertised(e) {
        if (this.$isStale) throw a._TableauException.create("staleDataReference", "Stale data");this.$isPublic = e;
      }, get_$isDefault: function get_$isDefault() {
        return this.$isDefault;
      }, $saveAsync: function $saveAsync() {
        if (this.$isStale || t.isNullOrUndefined(this.$presModel)) throw a._TableauException.create("staleDataReference", "Stale data");this.$presModel.isPublic = this.$isPublic, this.$presModel.name = this.$name;var e = new a._Deferred(),
            i = {};i["api.customViewParam"] = this.$presModel;var n = m.$createCustomViewCommandReturnHandler("api.UpdateCustomViewCommand", e, t.mkdel(this, function (t) {
          m._processCustomViewUpdate(this.$workbookImpl, this.$messagingOptions, t, !0), e.resolve(this.get_$customView());
        }));return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, i, n), e.get_promise();
      }, $removeAsync: function $removeAsync() {
        var e = new a._Deferred(),
            i = {};i["api.customViewParam"] = this.$presModel;var n = m.$createCustomViewCommandReturnHandler("api.RemoveCustomViewCommand", e, t.mkdel(this, function (t) {
          this.$isStale = !0, m._processCustomViews(this.$workbookImpl, this.$messagingOptions, t), e.resolve(this.get_$customView());
        }));return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, i, n), e.get_promise();
      }, _showAsync: function _showAsync() {
        if (this.$isStale || t.isNullOrUndefined(this.$presModel)) throw a._TableauException.create("staleDataReference", "Stale data");return m._showCustomViewAsync(this.$workbookImpl, this.$messagingOptions, this.$presModel);
      } }), t.initClass(f, i, { get_sheet: null, get_name: function get_name() {
        return this.$name;
      }, get_index: function get_index() {
        return this.$index;
      }, get_workbookImpl: function get_workbookImpl() {
        return this.$workbookImpl;
      }, get_workbook: function get_workbook() {
        return this.$workbookImpl.get_workbook();
      }, get_url: function get_url() {
        if (this.$isHidden) throw a._TableauException.createNoUrlForHiddenWorksheet();return this.$url;
      }, get_size: function get_size() {
        return this.$size;
      }, get_isHidden: function get_isHidden() {
        return this.$isHidden;
      }, get_isActive: function get_isActive() {
        return this.$isActive;
      }, set_isActive: function set_isActive(e) {
        this.$isActive = e;
      }, get_isDashboard: function get_isDashboard() {
        return "dashboard" === this.$sheetType;
      }, get_isStory: function get_isStory() {
        return "story" === this.$sheetType;
      }, get_sheetType: function get_sheetType() {
        return this.$sheetType;
      }, get_parentStoryPoint: function get_parentStoryPoint() {
        return t.isValue(this.$parentStoryPointImpl) ? this.$parentStoryPointImpl.get_storyPoint() : null;
      }, get_parentStoryPointImpl: function get_parentStoryPointImpl() {
        return this.$parentStoryPointImpl;
      }, set_parentStoryPointImpl: function set_parentStoryPointImpl(e) {
        if ("story" === this.$sheetType) throw a._TableauException.createInternalError("A story cannot be a child of another story.");this.$parentStoryPointImpl = e;
      }, get_zoneId: function get_zoneId() {
        return this.$zoneId;
      }, get_messagingOptions: function get_messagingOptions() {
        return this.$messagingOptions;
      }, changeSizeAsync: function changeSizeAsync(e) {
        if (e = f.$normalizeSheetSize(e), "worksheet" === this.$sheetType && "automatic" !== e.behavior) throw a._TableauException.createInvalidSizeBehaviorOnWorksheet();var i = new a._Deferred();if (this.$size.behavior === e.behavior && "automatic" === e.behavior) return i.resolve(e), i.get_promise();var n = this.$processSheetSize(e),
            r = {};r["api.setSheetSizeName"] = this.$name, r["api.minWidth"] = n["api.minWidth"], r["api.minHeight"] = n["api.minHeight"], r["api.maxWidth"] = n["api.maxWidth"], r["api.maxHeight"] = n["api.maxHeight"];var s = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.SetSheetSizeCommand", 0, t.mkdel(this, function (e) {
          this.get_workbookImpl()._update(t.mkdel(this, function () {
            var e = this.get_workbookImpl().get_publishedSheets()._get(this.get_name()).getSize();i.resolve(e);
          }));
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, r, s), i.get_promise();
      }, sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      }, $processSheetSize: function $processSheetSize(e) {
        var i = null;if (t.isNullOrUndefined(e) || t.isNullOrUndefined(e.behavior) || "automatic" !== e.behavior && t.isNullOrUndefined(e.minSize) && t.isNullOrUndefined(e.maxSize)) throw a._TableauException.createInvalidSheetSizeParam();var n = 0,
            r = 0,
            s = 0,
            o = 0,
            l = { "api.minWidth": 0, "api.minHeight": 0, "api.maxWidth": 0, "api.maxHeight": 0 };if ("automatic" === e.behavior) i = a.SheetSize.$ctor("automatic", void 0, void 0);else if ("atmost" === e.behavior) {
          if (t.isNullOrUndefined(e.maxSize) || t.isNullOrUndefined(e.maxSize.width) || t.isNullOrUndefined(e.maxSize.height)) throw a._TableauException.createMissingMaxSize();if (e.maxSize.width < 0 || e.maxSize.height < 0) throw a._TableauException.createInvalidSizeValue();l["api.maxWidth"] = e.maxSize.width, l["api.maxHeight"] = e.maxSize.height, i = a.SheetSize.$ctor("atmost", void 0, e.maxSize);
        } else if ("atleast" === e.behavior) {
          if (t.isNullOrUndefined(e.minSize) || t.isNullOrUndefined(e.minSize.width) || t.isNullOrUndefined(e.minSize.height)) throw a._TableauException.createMissingMinSize();if (e.minSize.width < 0 || e.minSize.height < 0) throw a._TableauException.createInvalidSizeValue();l["api.minWidth"] = e.minSize.width, l["api.minHeight"] = e.minSize.height, i = a.SheetSize.$ctor("atleast", e.minSize, void 0);
        } else if ("range" === e.behavior) {
          if (t.isNullOrUndefined(e.minSize) || t.isNullOrUndefined(e.maxSize) || t.isNullOrUndefined(e.minSize.width) || t.isNullOrUndefined(e.maxSize.width) || t.isNullOrUndefined(e.minSize.height) || t.isNullOrUndefined(e.maxSize.height)) throw a._TableauException.createMissingMinMaxSize();if (e.minSize.width < 0 || e.minSize.height < 0 || e.maxSize.width < 0 || e.maxSize.height < 0 || e.minSize.width > e.maxSize.width || e.minSize.height > e.maxSize.height) throw a._TableauException.createInvalidRangeSize();l["api.minWidth"] = e.minSize.width, l["api.minHeight"] = e.minSize.height, l["api.maxWidth"] = e.maxSize.width, l["api.maxHeight"] = e.maxSize.height, i = a.SheetSize.$ctor("range", e.minSize, e.maxSize);
        } else if ("exactly" === e.behavior) {
          if (t.isValue(e.minSize) && t.isValue(e.maxSize) && t.isValue(e.minSize.width) && t.isValue(e.maxSize.width) && t.isValue(e.minSize.height) && t.isValue(e.maxSize.height)) {
            if (n = e.minSize.width, r = e.minSize.height, s = e.maxSize.width, o = e.maxSize.height, n !== s || r !== o) throw a._TableauException.createSizeConflictForExactly();
          } else t.isValue(e.minSize) && t.isValue(e.minSize.width) && t.isValue(e.minSize.height) ? (s = n = e.minSize.width, o = r = e.minSize.height) : t.isValue(e.maxSize) && t.isValue(e.maxSize.width) && t.isValue(e.maxSize.height) && (n = s = e.maxSize.width, r = o = e.maxSize.height);l["api.minWidth"] = n, l["api.minHeight"] = r, l["api.maxWidth"] = s, l["api.maxHeight"] = o, i = a.SheetSize.$ctor("exactly", a.Size.$ctor(n, r), a.Size.$ctor(s, o));
        }return this.$size = i, l;
      } }), t.initClass(d, i, { get_sheet: function get_sheet() {
        return this.get_dashboard();
      }, get_dashboard: function get_dashboard() {
        return t.isNullOrUndefined(this.$dashboard) && (this.$dashboard = new q(this)), this.$dashboard;
      }, get_worksheets: function get_worksheets() {
        return this.$worksheets;
      }, get_objects: function get_objects() {
        return this.$dashboardObjects;
      }, $addObjects: function $addObjects(e, i) {
        this.$dashboardObjects = new a._Collection(), this.$worksheets = new a._Collection();for (var n = 0; n < e.length; n++) {
          var r = e[n],
              s = null;if ("worksheet" === e[n].objectType) {
            var o = r.name;if (t.isNullOrUndefined(o)) continue;var l = this.$worksheets.get__length(),
                u = a.SheetSizeFactory.createAutomatic(),
                c = i(o),
                h = t.isNullOrUndefined(c),
                m = h ? "" : c.getUrl(),
                d = g.$ctor(o, "worksheet", l, u, this.get_workbook(), m, !1, h, r.zoneId),
                p = new C(d, this.get_workbookImpl(), this.get_messagingOptions(), this);s = p.get_worksheet(), this.$worksheets._add(o, p.get_worksheet());
          }var f = new G(r, this.get_dashboard(), s);this.$dashboardObjects._add(n.toString(), f);
        }
      } }, f), t.initClass(p, i, { get_dataSource: function get_dataSource() {
        return t.isNullOrUndefined(this.$dataSource) && (this.$dataSource = new Q(this)), this.$dataSource;
      }, get_name: function get_name() {
        return this.$name;
      }, get_fields: function get_fields() {
        return this.$fields;
      }, get_isPrimary: function get_isPrimary() {
        return this.$isPrimary;
      }, addField: function addField(e) {
        this.$fields._add(e.getName(), e);
      } }), t.initClass(g, i, {}, Object), t.initClass($, i, { add_activeStoryPointChange: function add_activeStoryPointChange(e) {
        this.$2$ActiveStoryPointChangeField = t.delegateCombine(this.$2$ActiveStoryPointChangeField, e);
      }, remove_activeStoryPointChange: function remove_activeStoryPointChange(e) {
        this.$2$ActiveStoryPointChangeField = t.delegateRemove(this.$2$ActiveStoryPointChangeField, e);
      }, get_activeStoryPointImpl: function get_activeStoryPointImpl() {
        return this.$activeStoryPointImpl;
      }, get_sheet: function get_sheet() {
        return this.get_story();
      }, get_story: function get_story() {
        return t.isNullOrUndefined(this.$story) && (this.$story = new ne(this)), this.$story;
      }, get_storyPointsInfo: function get_storyPointsInfo() {
        return this.$storyPointsInfo;
      }, update: function update(e) {
        var i = null,
            n = null;this.$storyPointsInfo = this.$storyPointsInfo || new Array(e.storyPoints.length);for (var a = 0; a < e.storyPoints.length; a++) {
          var r = e.storyPoints[a],
              s = r.caption,
              o = a === e.activeStoryPointIndex,
              l = v.$ctor(s, a, r.storyPointId, o, r.isUpdated, this);if (t.isNullOrUndefined(this.$storyPointsInfo[a])) this.$storyPointsInfo[a] = new re(l);else if (this.$storyPointsInfo[a]._impl.storyPointId === l.storyPointId) {
            var u = this.$storyPointsInfo[a]._impl;u.caption = l.caption, u.index = l.index, u.isActive = o, u.isUpdated = l.isUpdated;
          } else this.$storyPointsInfo[a] = new re(l);o && (i = r.containedSheetInfo, n = l);
        }var c = this.$storyPointsInfo.length - e.storyPoints.length;this.$storyPointsInfo.splice(e.storyPoints.length, c);var h = t.isNullOrUndefined(this.$activeStoryPointImpl) || this.$activeStoryPointImpl.get_storyPointId() !== n.storyPointId;t.isValue(this.$activeStoryPointImpl) && h && this.$activeStoryPointImpl.set_isActive(!1);var m = this.$activeStoryPointImpl;if (h) {
          var d = _.createContainedSheet(i, this.get_workbookImpl(), this.get_messagingOptions(), this.$findSheetFunc);this.$activeStoryPointImpl = new _(n, d);
        } else this.$activeStoryPointImpl.set_isActive(n.isActive), this.$activeStoryPointImpl.set_isUpdated(n.isUpdated);h && t.isValue(m) && this.$raiseActiveStoryPointChange(this.$storyPointsInfo[m.get_index()], this.$activeStoryPointImpl.get_storyPoint());
      }, activatePreviousStoryPointAsync: function activatePreviousStoryPointAsync() {
        return this.$activatePreviousNextStoryPointAsync("api.ActivatePreviousStoryPoint");
      }, activateNextStoryPointAsync: function activateNextStoryPointAsync() {
        return this.$activatePreviousNextStoryPointAsync("api.ActivateNextStoryPoint");
      }, activateStoryPointAsync: function activateStoryPointAsync(e) {
        var i = new a._Deferred();if (e < 0 || e >= this.$storyPointsInfo.length) throw a._TableauException.createIndexOutOfRange(e);var n = {};n["api.storyPointIndex"] = e;var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.ActivateStoryPoint", 0, t.mkdel(this, function (e) {
          this.$updateActiveState(e), i.resolve(this.$activeStoryPointImpl.get_storyPoint());
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, n, r), i.get_promise();
      }, revertStoryPointAsync: function revertStoryPointAsync(e) {
        if ((e = e || this.$activeStoryPointImpl.get_index()) < 0 || e >= this.$storyPointsInfo.length) throw a._TableauException.createIndexOutOfRange(e);var i = new a._Deferred(),
            n = {};n["api.storyPointIndex"] = e;var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.RevertStoryPoint", 0, t.mkdel(this, function (t) {
          this.$updateStoryPointInfo(e, t), i.resolve(this.$storyPointsInfo[e]);
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, n, r), i.get_promise();
      }, $activatePreviousNextStoryPointAsync: function $activatePreviousNextStoryPointAsync(e) {
        if ("api.ActivatePreviousStoryPoint" !== e && "api.ActivateNextStoryPoint" !== e) throw a._TableauException.createInternalError("commandName '" + e + "' is invalid.");var i = new a._Deferred(),
            n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))(e, 0, t.mkdel(this, function (e) {
          this.$updateActiveState(e), i.resolve(this.$activeStoryPointImpl.get_storyPoint());
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, {}, n), i.get_promise();
      }, $updateStoryPointInfo: function $updateStoryPointInfo(e, t) {
        var i = this.$storyPointsInfo[e]._impl;if (i.storyPointId !== t.storyPointId) throw a._TableauException.createInternalError("We should not be updating a story point where the IDs don't match. Existing storyPointID=" + i.storyPointId + ", newStoryPointID=" + t.storyPointId);i.caption = t.caption, i.isUpdated = t.isUpdated, t.storyPointId === this.$activeStoryPointImpl.get_storyPointId() && this.$activeStoryPointImpl.set_isUpdated(t.isUpdated);
      }, $updateActiveState: function $updateActiveState(e) {
        var t = this.$activeStoryPointImpl,
            i = e.index;if (t.get_index() !== i) {
          var n = this.$storyPointsInfo[t.get_index()],
              a = this.$storyPointsInfo[i]._impl,
              r = _.createContainedSheet(e.containedSheetInfo, this.get_workbookImpl(), this.get_messagingOptions(), this.$findSheetFunc);a.isActive = !0, this.$activeStoryPointImpl = new _(a, r), t.set_isActive(!1), n._impl.isActive = !1, this.$raiseActiveStoryPointChange(n, this.$activeStoryPointImpl.get_storyPoint());
        }
      }, $raiseActiveStoryPointChange: function $raiseActiveStoryPointChange(e, i) {
        t.staticEquals(this.$2$ActiveStoryPointChangeField, null) || this.$2$ActiveStoryPointChangeField(e, i);
      } }, f), t.initClass(_, i, { get_caption: function get_caption() {
        return this.$caption;
      }, get_containedSheetImpl: function get_containedSheetImpl() {
        return this.$containedSheetImpl;
      }, get_index: function get_index() {
        return this.$index;
      }, get_isActive: function get_isActive() {
        return this.$isActive;
      }, set_isActive: function set_isActive(e) {
        this.$isActive = e;
      }, get_isUpdated: function get_isUpdated() {
        return this.$isUpdated;
      }, set_isUpdated: function set_isUpdated(e) {
        this.$isUpdated = e;
      }, get_parentStoryImpl: function get_parentStoryImpl() {
        return this.$parentStoryImpl;
      }, get_storyPoint: function get_storyPoint() {
        return t.isNullOrUndefined(this.$storyPoint) && (this.$storyPoint = new ae(this)), this.$storyPoint;
      }, get_storyPointId: function get_storyPointId() {
        return this.$storyPointId;
      }, $toInfoImpl: function $toInfoImpl() {
        return v.$ctor(this.$caption, this.$index, this.$storyPointId, this.$isActive, this.$isUpdated, this.$parentStoryImpl);
      } }), t.initClass(v, i, {}, Object), t.initClass(y, i, { get_toolbarState: function get_toolbarState() {
        return t.isNullOrUndefined(this.$toolbarState) && (this.$toolbarState = new se(this)), this.$toolbarState;
      }, get_viz: function get_viz() {
        return this.$vizImpl.get_$viz();
      }, isButtonEnabled: function isButtonEnabled(e) {
        switch (e) {case "redo":
            return this.$toolbarStatePresModel.canRedo;case "undo":
            return this.$toolbarStatePresModel.canUndo;default:
            throw a._TableauException.createInvalidToolbarButtonName(e);}
      } }), t.initClass(w, i, {}), t.initClass(b, i, { get_url: function get_url() {
        return this.$constructUrl();
      }, get_baseUrl: function get_baseUrl() {
        return this.$urlFromApi;
      }, $constructUrl: function $constructUrl() {
        var e = [];e.push(this.get_baseUrl()), e.push("?"), this.userSuppliedParameters.length > 0 && (e.push(this.userSuppliedParameters), e.push("&")), !this.fixedSize && !(-1 !== this.userSuppliedParameters.indexOf(":size=")) && this.parentElement.clientWidth * this.parentElement.clientHeight > 0 && (e.push(":size="), e.push(this.parentElement.clientWidth + "," + this.parentElement.clientHeight), e.push("&")), e.push(":embed=y"), e.push("&:showVizHome=n"), e.push("&:jsdebug=y"), this.fixedSize || e.push("&:bootstrapWhenNotified=y"), this.tabs || e.push("&:tabs=n"), this.displayStaticImage && e.push("&:display_static_image=y"), this.toolbar ? t.isNullOrUndefined(this.toolBarPosition) || (e.push("&:toolbar="), e.push(this.toolBarPosition.toString())) : e.push("&:toolbar=n"), t.isValue(this.device) && (e.push("&:device="), e.push(this.device.toString()));var i = this.$createOptions,
            n = new t.ObjectEnumerator(i);try {
          for (; n.moveNext();) {
            var a = n.current();"embed" !== a.key && "height" !== a.key && "width" !== a.key && "device" !== a.key && "autoSize" !== a.key && "hideTabs" !== a.key && "hideToolbar" !== a.key && "onFirstInteractive" !== a.key && "onFirstVizSizeKnown" !== a.key && "toolbarPosition" !== a.key && "instanceIdToClone" !== a.key && "navType" !== a.key && "display_static_image" !== a.key && (e.push("&"), e.push(encodeURIComponent(a.key)), e.push("="), e.push(encodeURIComponent(a.value.toString())));
          }
        } finally {
          n.dispose();
        }return e.push("&:apiID=" + this.hostId), e.push("#"), t.isValue(this.$createOptions.instanceIdToClone) && e.push(this.$createOptions.instanceIdToClone + "&"), t.isValue(this.$createOptions.navType) && this.$createOptions.navType.length > 0 ? (e.push("navType=" + this.$createOptions.navType.toString() + "&"), e.push("navSrc=" + "Opt".toString())) : (e.push("navType=" + window.performance.navigation.type.toString() + "&"), e.push("navSrc=" + "Parse".toString())), e.join("");
      } }), t.initClass(S, i, { get_workbook: function get_workbook() {
        return t.isNullOrUndefined(this.$workbook) && (this.$workbook = new ce(this)), this.$workbook;
      }, get_viz: function get_viz() {
        return this.$vizImpl.get_$viz();
      }, get_publishedSheets: function get_publishedSheets() {
        return this.$publishedSheetsInfo;
      }, get_name: function get_name() {
        return this.$name;
      }, get_activeSheetImpl: function get_activeSheetImpl() {
        return this.$activeSheetImpl;
      }, get_activeCustomView: function get_activeCustomView() {
        return this.$currentCustomView;
      }, get_isDownloadAllowed: function get_isDownloadAllowed() {
        return this.$isDownloadAllowed;
      }, $findActiveSheetOrSheetWithinActiveDashboard: function $findActiveSheetOrSheetWithinActiveDashboard(e) {
        if (t.isNullOrUndefined(this.$activeSheetImpl)) return null;var i = S.$extractSheetName(e);if (t.isNullOrUndefined(i)) return null;if (t.referenceEquals(i, this.$activeSheetImpl.get_name())) return this.$activeSheetImpl;if (this.$activeSheetImpl.get_isDashboard()) {
          var n = t.cast(this.$activeSheetImpl, d).get_worksheets()._get(i);if (t.isValue(n)) return n._impl;
        }return null;
      }, _setActiveSheetAsync: function _setActiveSheetAsync(e) {
        if (a._Utility.isNumber(e)) {
          var i = e;if (i < this.$publishedSheetsInfo.get__length() && i >= 0) return this.$activateSheetWithInfoAsync(this.$publishedSheetsInfo.get_item(i).$impl);throw a._TableauException.createIndexOutOfRange(i);
        }var n = S.$extractSheetName(e),
            r = this.$publishedSheetsInfo._get(n);if (t.isValue(r)) return this.$activateSheetWithInfoAsync(r.$impl);if (this.$activeSheetImpl.get_isDashboard()) {
          var s = t.cast(this.$activeSheetImpl, d).get_worksheets()._get(n);if (t.isValue(s)) {
            this.$activatingHiddenSheetImpl = null;var o = "";return s.getIsHidden() ? this.$activatingHiddenSheetImpl = s._impl : o = s._impl.get_url(), this.$activateSheetInternalAsync(s._impl.get_name(), o);
          }
        }throw a._TableauException.create("sheetNotInWorkbook", "Sheet is not found in Workbook");
      }, _revertAllAsync: function _revertAllAsync() {
        var e = new a._Deferred(),
            i = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.RevertAllCommand", 1, function (t) {
          e.resolve();
        }, function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.$sendCommand(Object).call(this, null, i), e.get_promise();
      }, _update: function _update(e) {
        this.$getClientInfo(e);
      }, $activateSheetWithInfoAsync: function $activateSheetWithInfoAsync(e) {
        return this.$activateSheetInternalAsync(e.name, e.url);
      }, $activateSheetInternalAsync: function $activateSheetInternalAsync(e, i) {
        var n = new a._Deferred();if (t.isValue(this.$activeSheetImpl) && t.referenceEquals(e, this.$activeSheetImpl.get_name())) return n.resolve(this.$activeSheetImpl.get_sheet()), n.get_promise();var r = {};r["api.switchToSheetName"] = e, r["api.switchToRepositoryUrl"] = i, r["api.oldRepositoryUrl"] = this.$activeSheetImpl.get_url();var s = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.SwitchActiveSheetCommand", 0, t.mkdel(this, function (e) {
          this.$vizImpl.$workbookTabSwitchHandler = t.mkdel(this, function () {
            this.$vizImpl.$workbookTabSwitchHandler = null, n.resolve(this.$activeSheetImpl.get_sheet());
          });
        }), function (e, t) {
          n.reject(a._TableauException.createServerError(t));
        });return this.$sendCommand(Object).call(this, r, s), n.get_promise();
      }, _updateActiveSheetAsync: function _updateActiveSheetAsync() {
        var e = new a._Deferred(),
            i = {};i["api.switchToSheetName"] = this.$activeSheetImpl.get_name(), i["api.switchToRepositoryUrl"] = this.$activeSheetImpl.get_url(), i["api.oldRepositoryUrl"] = this.$activeSheetImpl.get_url();var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.UpdateActiveSheetCommand", 0, t.mkdel(this, function (t) {
          e.resolve(this.$activeSheetImpl.get_sheet());
        }), function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.$sendCommand(Object).call(this, i, n), e.get_promise();
      }, $sendCommand: function $sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      }, $getClientInfo: function $getClientInfo(e) {
        var i = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.GetClientInfoCommand", 0, t.mkdel(this, function (i) {
          this.$processInfo(i), t.isValue(e) && e();
        }), null);this.$sendCommand(Object).call(this, null, i);
      }, $processInfo: function $processInfo(e) {
        this.$name = e.workbookName, this.$isDownloadAllowed = e.isDownloadAllowed, this.$vizImpl.$setAreAutomaticUpdatesPaused(!e.isAutoUpdate), this.$vizImpl.set_instanceId(e.instanceId), this.$createSheetsInfo(e), this.$initializeActiveSheet(e);
      }, $initializeActiveSheet: function $initializeActiveSheet(e) {
        var i = e.currentSheetName,
            n = this.$publishedSheetsInfo._get(i);if (t.isNullOrUndefined(n) && t.isNullOrUndefined(this.$activatingHiddenSheetImpl)) throw a._TableauException.createInternalError("The active sheet was not specified in baseSheets");if (!t.isValue(this.$activeSheetImpl) || !t.referenceEquals(this.$activeSheetImpl.get_name(), i)) {
          if (t.isValue(this.$activeSheetImpl)) {
            this.$activeSheetImpl.set_isActive(!1);var r = this.$publishedSheetsInfo._get(this.$activeSheetImpl.get_name());if (t.isValue(r) && (r.$impl.isActive = !1), "story" === this.$activeSheetImpl.get_sheetType()) t.cast(this.$activeSheetImpl, $).remove_activeStoryPointChange(t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch));
          }if (t.isValue(this.$activatingHiddenSheetImpl)) {
            var s = g.$ctor(this.$activatingHiddenSheetImpl.get_name(), "worksheet", -1, this.$activatingHiddenSheetImpl.get_size(), this.get_workbook(), "", !0, !0, f.noZoneId);this.$activatingHiddenSheetImpl = null, this.$activeSheetImpl = new C(s, this, this.$messagingOptions, null);
          } else {
            for (var o = null, l = 0, u = e.publishedSheets.length; l < u; l++) {
              if (t.referenceEquals(e.publishedSheets[l].name, i)) {
                o = e.publishedSheets[l];break;
              }
            }if (t.isNullOrUndefined(o)) throw a._TableauException.createInternalError("No base sheet was found corresponding to the active sheet.");var c = t.mkdel(this, function (e) {
              return this.$publishedSheetsInfo._get(e);
            });if ("dashboard" === o.sheetType) {
              var h = new d(n.$impl, this, this.$messagingOptions);this.$activeSheetImpl = h;var m = S.$createDashboardZones(e.dashboardZones);h.$addObjects(m, c);
            } else if ("story" === o.sheetType) {
              var p = new $(n.$impl, this, this.$messagingOptions, e.story, c);this.$activeSheetImpl = p, p.add_activeStoryPointChange(t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch));
            } else this.$activeSheetImpl = new C(n.$impl, this, this.$messagingOptions, null);n.$impl.isActive = !0;
          }this.$activeSheetImpl.set_isActive(!0);
        }
      }, $createSheetsInfo: function $createSheetsInfo(e) {
        var i = e.publishedSheets;if (!t.isNullOrUndefined(i)) for (var n = 0; n < i.length; n++) {
          var r = i[n],
              s = r.name,
              o = this.$publishedSheetsInfo._get(s),
              l = S.$createSheetSize(r);if (t.isNullOrUndefined(o)) {
            var u = t.referenceEquals(s, e.currentSheetName),
                c = a.ApiEnumConverter.convertSheetType(r.sheetType),
                h = g.$ctor(s, c, n, l, this.get_workbook(), r.repositoryUrl, u, !1, f.noZoneId);o = new ie(h), this.$publishedSheetsInfo._add(s, o);
          } else o.$impl.size = l;
        }
      }, get_$customViews: function get_$customViews() {
        return this.$customViews;
      }, set_$customViews: function set_$customViews(e) {
        this.$customViews = e;
      }, get_$updatedCustomViews: function get_$updatedCustomViews() {
        return this.$updatedCustomViews;
      }, set_$updatedCustomViews: function set_$updatedCustomViews(e) {
        this.$updatedCustomViews = e;
      }, get_$removedCustomViews: function get_$removedCustomViews() {
        return this.$removedCustomViews;
      }, set_$removedCustomViews: function set_$removedCustomViews(e) {
        this.$removedCustomViews = e;
      }, get_$currentCustomView: function get_$currentCustomView() {
        return this.$currentCustomView;
      }, set_$currentCustomView: function set_$currentCustomView(e) {
        this.$currentCustomView = e;
      }, $getCustomViewsAsync: function $getCustomViewsAsync() {
        return m._getCustomViewsAsync(this, this.$messagingOptions);
      }, $showCustomViewAsync: function $showCustomViewAsync(e) {
        if (t.isNullOrUndefined(e) || a._Utility.isNullOrEmpty(e)) return m._showCustomViewAsync(this, this.$messagingOptions, null);var i = this.$customViews._get(e);if (t.isNullOrUndefined(i)) {
          var n = new a._Deferred();return n.reject(a._TableauException.createInvalidCustomViewName(e)), n.get_promise();
        }return i._impl._showAsync();
      }, $removeCustomViewAsync: function $removeCustomViewAsync(e) {
        if (a._Utility.isNullOrEmpty(e)) throw a._TableauException.createNullOrEmptyParameter("customViewName");var i = this.$customViews._get(e);if (t.isNullOrUndefined(i)) {
          var n = new a._Deferred();return n.reject(a._TableauException.createInvalidCustomViewName(e)), n.get_promise();
        }return i._impl.$removeAsync();
      }, $rememberCustomViewAsync: function $rememberCustomViewAsync(e) {
        if (a._Utility.isNullOrEmpty(e)) throw a._TableauException.createInvalidParameter("customViewName");return m._saveNewAsync(this, this.$messagingOptions, e);
      }, $setActiveCustomViewAsDefaultAsync: function $setActiveCustomViewAsDefaultAsync() {
        return m._makeCurrentCustomViewDefaultAsync(this, this.$messagingOptions);
      }, get_$lastChangedParameterImpl: function get_$lastChangedParameterImpl() {
        return this.$lastChangedParameterImpl;
      }, set_$lastChangedParameterImpl: function set_$lastChangedParameterImpl(e) {
        this.$lastChangedParameterImpl = e;
      }, get_$parameters: function get_$parameters() {
        return this.$parameters;
      }, $getSingleParameterAsync: function $getSingleParameterAsync(e) {
        var i = new a._Deferred();if (t.isValue(this.$lastChangedParameterImpl)) return i.resolve(this.$lastChangedParameterImpl.get_$parameter()), i.get_promise();var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.FetchParametersCommand", 0, t.mkdel(this, function (t) {
          var n = S.$findAndCreateParameterImpl(e, t);this.$lastChangedParameterImpl = n, i.resolve(n.get_$parameter());
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.$sendCommand(Object).call(this, {}, n), i.get_promise();
      }, $getParametersAsync: function $getParametersAsync() {
        var e = new a._Deferred(),
            i = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.FetchParametersCommand", 0, t.mkdel(this, function (t) {
          this.$parameters = S.$processParameters(t), e.resolve(this.get_$parameters()._toApiCollection());
        }), function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.$sendCommand(Object).call(this, {}, i), e.get_promise();
      }, $changeParameterValueAsync: function $changeParameterValueAsync(e, i) {
        var n = new a._Deferred(),
            r = null;if (t.isValue(this.$parameters)) {
          if (t.isNullOrUndefined(this.$parameters._get(e))) return n.reject(a._TableauException.createInvalidParameter(e)), n.get_promise();if (r = this.$parameters._get(e)._impl, t.isNullOrUndefined(r)) return n.reject(a._TableauException.createInvalidParameter(e)), n.get_promise();
        }var s = {};if (s["api.setParameterName"] = t.isValue(this.$parameters) ? r.get_$name() : e, t.isValue(i) && a._Utility.isDate(i)) {
          var o = t.cast(i, t.JsDate),
              l = a._Utility.serializeDateForServer(o);s["api.setParameterValue"] = l;
        } else s["api.setParameterValue"] = t.isValue(i) ? i.toString() : null;this.$lastChangedParameterImpl = null;var u = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.SetParameterValueCommand", 0, t.mkdel(this, function (i) {
          if (t.isNullOrUndefined(i)) n.reject(a._TableauException.create("serverError", "server error"));else if (i.isValidPresModel) {
            var r = new c(i);this.$lastChangedParameterImpl = r, n.resolve(r.get_$parameter());
          } else n.reject(a._TableauException.createInvalidParameter(e));
        }), function (t, i) {
          n.reject(a._TableauException.createInvalidParameter(e));
        });return this.$sendCommand(Object).call(this, s, u), n.get_promise();
      } }), t.initClass(C, i, { get_sheet: function get_sheet() {
        return this.get_worksheet();
      }, get_worksheet: function get_worksheet() {
        return t.isNullOrUndefined(this.$worksheet) && (this.$worksheet = new he(this)), this.$worksheet;
      }, get_parentDashboardImpl: function get_parentDashboardImpl() {
        return this.$parentDashboardImpl;
      }, get_parentDashboard: function get_parentDashboard() {
        return t.isValue(this.$parentDashboardImpl) ? this.$parentDashboardImpl.get_dashboard() : null;
      }, $getDataSourcesAsync: function $getDataSourcesAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var e = new a._Deferred(),
            i = {};i["api.worksheetName"] = this.get_name();var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.GetDataSourcesCommand", 0, function (t) {
          var i = p.processDataSourcesForWorksheet(t);e.resolve(i._toApiCollection());
        }, function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.sendCommand(Object).call(this, i, n), e.get_promise();
      }, $getDataSourceAsync: function $getDataSourceAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var i = new a._Deferred(),
            n = {};n["api.dataSourceName"] = e, n["api.worksheetName"] = this.get_name();var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.GetDataSourceCommand", 0, function (n) {
          var r = p.processDataSource(n);t.isValue(r) ? i.resolve(r.get_dataSource()) : i.reject(a._TableauException.createServerError("Data source '" + e + "' not found"));
        }, function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, n, r), i.get_promise();
      }, $verifyActiveSheetOrEmbeddedInActiveDashboard: function $verifyActiveSheetOrEmbeddedInActiveDashboard() {
        var e = this.get_isActive(),
            i = t.isValue(this.$parentDashboardImpl) && this.$parentDashboardImpl.get_isActive(),
            n = t.isValue(this.get_parentStoryPointImpl()) && this.get_parentStoryPointImpl().get_parentStoryImpl().get_isActive();if (!e && !i && !n) throw a._TableauException.createNotActiveSheet();
      }, $addVisualIdToCommand: function $addVisualIdToCommand(e) {
        if (t.isValue(this.get_parentStoryPointImpl())) {
          var i = {};i.worksheet = this.get_name(), i.dashboard = t.isValue(this.get_parentDashboardImpl()) ? this.$parentDashboardImpl.get_name() : this.get_name(), i.flipboardZoneId = this.get_parentStoryPointImpl().get_containedSheetImpl().get_zoneId(), i.storyboard = this.get_parentStoryPointImpl().get_parentStoryImpl().get_name(), i.storyPointId = this.get_parentStoryPointImpl().get_storyPointId(), e["api.visualId"] = i;
        } else {
          var n = t.isValue(this.get_parentDashboardImpl()) ? this.get_parentDashboardImpl().get_name() : null;this.$sharedUtils.addVisualIdForWorksheet(e, this.get_name(), n);
        }
      }, get__filters: function get__filters() {
        return this.$filters;
      }, set__filters: function set__filters(e) {
        this.$filters = e;
      }, $getFilterAsync: function $getFilterAsync(e, i, n) {
        if (!a._Utility.isNullOrEmpty(e) && !a._Utility.isNullOrEmpty(i)) throw a._TableauException.createInternalError("Only fieldName OR fieldCaption is allowed, not both.");n = n || new Object();var r = new a._Deferred(),
            s = {};this.$addVisualIdToCommand(s), !a._Utility.isNullOrEmpty(i) && a._Utility.isNullOrEmpty(e) && (s["api.fieldCaption"] = i), a._Utility.isNullOrEmpty(e) || (s["api.fieldName"] = e), s["api.filterHierarchicalLevels"] = 0, s["api.ignoreDomain"] = n.ignoreDomain || !1;var o = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.GetOneFilterInfoCommand", 0, t.mkdel(this, function (e) {
          var i = C.$filterCommandError(e);if (t.isNullOrUndefined(i)) {
            var n = e,
                a = K.$createFilter(this, n);r.resolve(a);
          } else r.reject(i);
        }), function (e, t) {
          r.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, s, o), r.get_promise();
      }, $getFiltersAsync: function $getFiltersAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard(), e = e || new Object();var i = new a._Deferred(),
            n = {};this.$addVisualIdToCommand(n), n["api.ignoreDomain"] = e.ignoreDomain || !1;var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.GetFiltersListCommand", 0, t.mkdel(this, function (e) {
          this.set__filters(K.processFiltersList(this, e)), i.resolve(this.get__filters()._toApiCollection());
        }), function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, n, r), i.get_promise();
      }, $applyFilterAsync: function $applyFilterAsync(e, t, i, n) {
        return this.$applyFilterWithValuesInternalAsync(e, t, i, n);
      }, $clearFilterAsync: function $clearFilterAsync(e) {
        return this.$clearFilterInternalAsync(e);
      }, $applyRangeFilterAsync: function $applyRangeFilterAsync(e, t) {
        var i = this.$filterCommandsBuilder.normalizeRangeFilterOption(t);return this.$applyRangeFilterInternalAsync(e, i);
      }, $applyRelativeDateFilterAsync: function $applyRelativeDateFilterAsync(e, t) {
        var i = this.$filterCommandsBuilder.normalizeRelativeDateFilterOptions(t);return this.$applyRelativeDateFilterInternalAsync(e, i);
      }, $applyHierarchicalFilterAsync: function $applyHierarchicalFilterAsync(e, i, n, r) {
        if (t.isNullOrUndefined(i) && "all" !== n) throw a._TableauException.createInvalidParameter("values");return this.$applyHierarchicalFilterInternalAsync(e, i, n, r);
      }, $clearFilterInternalAsync: function $clearFilterInternalAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var t = new a._Deferred(),
            i = this.$filterCommandsBuilder.buildClearFilterCommandsParam(e);this.$addVisualIdToCommand(i);var n = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ClearFilterCommand", e, t);return this.sendCommand(Object).call(this, i, n), t.get_promise();
      }, $applyFilterWithValuesInternalAsync: function $applyFilterWithValuesInternalAsync(e, t, i, n) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var r = new a._Deferred(),
            s = this.$filterCommandsBuilder.buildApplyFiltersCommandParams(e, t, i, n);this.$addVisualIdToCommand(s);var o = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyCategoricalFilterCommand", e, r);return this.sendCommand(Object).call(this, s, o), r.get_promise();
      }, $applyRangeFilterInternalAsync: function $applyRangeFilterInternalAsync(e, t) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var i = this.$filterCommandsBuilder.buildRangeFilterCommandParams(e, t);this.$addVisualIdToCommand(i);var n = new a._Deferred(),
            r = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyRangeFilterCommand", e, n);return this.sendCommand(Object).call(this, i, r), n.get_promise();
      }, $applyRelativeDateFilterInternalAsync: function $applyRelativeDateFilterInternalAsync(e, t) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var i = this.$filterCommandsBuilder.buildRelativeDateFilterCommandParams(e, t);this.$addVisualIdToCommand(i);var n = new a._Deferred(),
            r = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyRelativeDateFilterCommand", e, n);return this.sendCommand(Object).call(this, i, r), n.get_promise();
      }, $applyHierarchicalFilterInternalAsync: function $applyHierarchicalFilterInternalAsync(e, t, i, n) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var r = this.$filterCommandsBuilder.buildHierarchicalFilterCommandParams(e, t, i, n);this.$addVisualIdToCommand(r);var s = new a._Deferred(),
            o = this.$filterCommandsBuilder.createFilterCommandReturnHandler("api.ApplyHierarchicalFilterCommand", e, s);return this.sendCommand(Object).call(this, r, o), s.get_promise();
      }, get_selectedMarks: function get_selectedMarks() {
        return this.$selectedMarks;
      }, set_selectedMarks: function set_selectedMarks(e) {
        this.$selectedMarks = e;
      }, $clearSelectedMarksAsync: function $clearSelectedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var e = new a._Deferred(),
            i = {};this.$addVisualIdToCommand(i);var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.ClearSelectedMarksCommand", 0, function (t) {
          e.resolve();
        }, function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.sendCommand(Object).call(this, i, n), e.get_promise();
      }, $selectMarksAsync: function $selectMarksAsync(e, i, n) {
        return this.$verifyActiveSheetOrEmbeddedInActiveDashboard(), t.isNullOrUndefined(e) && t.isNullOrUndefined(i) ? this.$clearSelectedMarksAsync() : a._Utility.isString(e) && (a._jQueryShim.isArray(i) || a._Utility.isString(i) || !a.PublicEnums.isValidEnum(a.ApiSelectionUpdateType).call(null, i)) ? this.$selectMarksWithFieldNameAndValueAsync(t.cast(e, String), i, n) : a._jQueryShim.isArray(e) ? this.$selectMarksWithMarksArrayAsync(e, t.cast(i, String)) : this.$selectMarksWithMultiDimOptionAsync(e, t.cast(i, String));
      }, $getSelectedMarksAsync: function $getSelectedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var e = new a._Deferred(),
            i = {};this.$addVisualIdToCommand(i);var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.FetchSelectedMarksCommand", 0, t.mkdel(this, function (t) {
          this.$selectedMarks = a.MarkImpl.processActiveMarks(t), e.resolve(this.$selectedMarks._toApiCollection());
        }), function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.sendCommand(Object).call(this, i, n), e.get_promise();
      }, $selectMarksWithFieldNameAndValueAsync: function $selectMarksWithFieldNameAndValueAsync(e, t, i) {
        var n = [],
            a = [],
            r = [],
            s = [],
            o = [],
            l = [];return this.$parseMarksParam(n, a, r, s, o, l, e, t), this.$selectMarksWithValuesAsync(null, n, a, r, s, o, l, i);
      }, $selectMarksWithMultiDimOptionAsync: function $selectMarksWithMultiDimOptionAsync(e, i) {
        var n = e,
            r = [],
            s = [],
            o = [],
            l = [],
            u = [],
            c = [],
            h = new t.ObjectEnumerator(n);try {
          for (; h.moveNext();) {
            var m = h.current();e.hasOwnProperty(m.key) && (a._jQueryShim.isFunction(n[m.key]) || this.$parseMarksParam(r, s, o, l, u, c, m.key, m.value));
          }
        } finally {
          h.dispose();
        }return this.$selectMarksWithValuesAsync(null, r, s, o, l, u, c, i);
      }, $selectMarksWithMarksArrayAsync: function $selectMarksWithMarksArrayAsync(e, i) {
        for (var n = [], r = [], s = [], o = [], l = [], u = [], c = [], h = 0; h < e.length; h++) {
          var m = e[h];if (t.isValue(m.impl.get_tupleId()) && m.impl.get_tupleId() > 0) c.push(m.impl.get_tupleId());else for (var d = m.impl.get_pairs(), p = 0; p < d.get__length(); p++) {
            var f = d.get_item(p);f.hasOwnProperty("fieldName") && f.hasOwnProperty("value") && !a._jQueryShim.isFunction(f.fieldName) && !a._jQueryShim.isFunction(f.value) && this.$parseMarksParam(n, r, s, o, l, u, f.fieldName, f.value);
          }
        }return this.$selectMarksWithValuesAsync(c, n, r, s, o, l, u, i);
      }, $parseMarksParam: function $parseMarksParam(e, i, n, r, s, o, l, u) {
        var c = u;if (C.$regexHierarchicalFieldName.test(l)) this.$addToParamLists(n, r, l, u);else if (t.isValue(c.min) || t.isValue(c.max)) {
          var h = new Object();if (t.isValue(c.min)) if (a._Utility.isDate(c.min)) {
            var m = t.cast(c.min, t.JsDate);if (!a._Utility.isDateValid(m)) throw a._TableauException.createInvalidDateParameter("options.min");h.min = a._Utility.serializeDateForServer(m);
          } else h.min = c.min;if (t.isValue(c.max)) if (a._Utility.isDate(c.max)) {
            var d = t.cast(c.max, t.JsDate);if (!a._Utility.isDateValid(d)) throw a._TableauException.createInvalidDateParameter("options.max");h.max = a._Utility.serializeDateForServer(d);
          } else h.max = c.max;if (t.isValue(c.nullOption)) {
            var p = a.PublicEnums.normalizeEnum(a.ApiNullOption).call(null, c.nullOption, "options.nullOption");h.nullOption = p;
          } else h.nullOption = "allValues";var f = JSON.stringify(h);this.$addToParamLists(s, o, l, f);
        } else this.$addToParamLists(e, i, l, u);
      }, $addToParamLists: function $addToParamLists(e, i, n, r) {
        var s = [];if (a._jQueryShim.isArray(r)) for (var o = t.cast(r, Array), l = 0; l < o.length; l++) {
          s.push(o[l].toString());
        } else s.push(r.toString());i.push(s), e.push(n);
      }, $selectMarksWithValuesAsync: function $selectMarksWithValuesAsync(e, i, n, r, s, o, l, u) {
        var c = {};if (this.$addVisualIdToCommand(c), u = a.PublicEnums.normalizeEnum(a.ApiSelectionUpdateType).call(null, u, "updateType"), c["api.filterUpdateType"] = u, a._Utility.isNullOrEmpty(e) || (c["api.tupleIds"] = JSON.stringify(e)), !a._Utility.isNullOrEmpty(i) && !a._Utility.isNullOrEmpty(n)) {
          c["api.categoricalFieldCaption"] = JSON.stringify(i);for (var h = [], m = 0; m < n.length; m++) {
            var d = JSON.stringify(n[m]);h.push(d);
          }c["api.categoricalMarkValues"] = JSON.stringify(h);
        }if (!a._Utility.isNullOrEmpty(r) && !a._Utility.isNullOrEmpty(s)) {
          c["api.hierarchicalFieldCaption"] = JSON.stringify(r);for (var p = [], f = 0; f < s.length; f++) {
            var g = JSON.stringify(s[f]);p.push(g);
          }c["api.hierarchicalMarkValues"] = JSON.stringify(p);
        }if (!a._Utility.isNullOrEmpty(o) && !a._Utility.isNullOrEmpty(l)) {
          c["api.rangeFieldCaption"] = JSON.stringify(o);for (var $ = [], _ = 0; _ < l.length; _++) {
            var v = JSON.stringify(l[_]);$.push(v);
          }c["api.rangeMarkValues"] = JSON.stringify($);
        }if (a._Utility.isNullOrEmpty(c["api.tupleIds"]) && a._Utility.isNullOrEmpty(c["api.categoricalFieldCaption"]) && a._Utility.isNullOrEmpty(c["api.hierarchicalFieldCaption"]) && a._Utility.isNullOrEmpty(c["api.rangeFieldCaption"])) throw a._TableauException.createInvalidParameter("fieldNameOrFieldValuesMap");var y = new a._Deferred(),
            w = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.SelectMarksCommand", 0, function (e) {
          var i = C.$createSelectionCommandError(e);t.isNullOrUndefined(i) ? y.resolve() : y.reject(i);
        }, function (e, t) {
          y.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, c, w), y.get_promise();
      }, $getSummaryDataAsync: function $getSummaryDataAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var t = new a._Deferred(),
            i = this.$getDataCommandsBuilder.getSummaryDataCommandParams(e);this.$addVisualIdToCommand(i);var n = this.$getDataCommandsBuilder.getSummaryDataResponseHandler(t);return this.sendCommand(Object).call(this, i, n), t.get_promise();
      }, $getUnderlyingDataAsync: function $getUnderlyingDataAsync(e) {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var t = new a._Deferred(),
            i = this.$getDataCommandsBuilder.getUnderlyingDataCommandParams(e);this.$addVisualIdToCommand(i);var n = this.$getDataCommandsBuilder.getUnderlyingDataResponseHandler(t);return this.sendCommand(Object).call(this, i, n), t.get_promise();
      }, $clearHighlightedMarksAsync: function $clearHighlightedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var e = new a._Deferred(),
            i = {};this.$addVisualIdToCommand(i);var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.ClearHighlightedMarksCommand", 0, function (t) {
          e.resolve();
        }, function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.sendCommand(Object).call(this, i, n), e.get_promise();
      }, $highlightMarksAsync: function $highlightMarksAsync(e, i) {
        a._Param.verifyString(e, "fieldName"), this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var n = new a._Deferred(),
            r = {};r["api.fieldCaption"] = e, r["api.ObjectTextIDs"] = i, this.$addVisualIdToCommand(r);var s = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.HighlightMarksCommand", 0, function (e) {
          n.resolve();
        }, function (e, t) {
          n.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, r, s), n.get_promise();
      }, $highlightMarksByPatternMatchAsync: function $highlightMarksByPatternMatchAsync(e, i) {
        a._Param.verifyString(e, "fieldName"), a._Param.verifyString(i, "patternMatch"), this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var n = new a._Deferred(),
            r = { "api.filterUpdateType": "replace" };r["api.fieldCaption"] = e, r["api.Pattern"] = i, this.$addVisualIdToCommand(r);var s = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.HighlightMarksByPatternMatch", 0, function (e) {
          n.resolve();
        }, function (e, t) {
          n.reject(a._TableauException.createServerError(t));
        });return this.sendCommand(Object).call(this, r, s), n.get_promise();
      }, $getHighlightedMarksAsync: function $getHighlightedMarksAsync() {
        this.$verifyActiveSheetOrEmbeddedInActiveDashboard();var e = new a._Deferred(),
            i = {};this.$addVisualIdToCommand(i);var n = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.FetchHighlightedMarksCommand", 0, t.mkdel(this, function (t) {
          this.highlightedMarks = a.MarkImpl.processActiveMarks(t), e.resolve(this.highlightedMarks._toApiCollection());
        }), function (t, i) {
          e.reject(a._TableauException.createServerError(i));
        });return this.sendCommand(Object).call(this, i, n), e.get_promise();
      } }, f), t.initClass(x, i, { getViz: function getViz() {
        return this.$viz;
      }, getEventName: function getEventName() {
        return this.$eventName;
      } }), t.initClass(I, i, { getCustomViewAsync: function getCustomViewAsync() {
        var e = new a._Deferred(),
            i = null;return t.isValue(this.$context.get__customViewImpl()) && (i = this.$context.get__customViewImpl().get_$customView()), e.resolve(i), e.get_promise();
      } }, x), t.initClass(j, i, { getWorksheet: function getWorksheet() {
        return this.$worksheetImpl.get_worksheet();
      } }, x), t.initClass(N, i, { getFieldName: function getFieldName() {
        return this.$filterCaption;
      }, getFilterAsync: function getFilterAsync() {
        return this.$context.get__worksheetImpl().$getFilterAsync(this.$context.get__filterFieldName(), null, null);
      } }, j), t.initClass(A, i, { getVizSize: function getVizSize() {
        return this.$vizSize;
      } }, x), t.initClass(T, i, { getHighlightedMarksAsync: function getHighlightedMarksAsync() {
        return this.$context.get__worksheetImpl().$getHighlightedMarksAsync();
      } }, j), t.initInterface(V, i, { add_customViewsListLoad: null, remove_customViewsListLoad: null, handleVizLoad: null, handleVizListening: null, sendScaleFactor: null }), t.initClass(k, i, { registerHandler: function registerHandler(e) {
        this.$crossDomainMessager.registerHandler(e), e.add_customViewsListLoad(t.mkdel(this, this.$handleCustomViewsListLoad));
      }, unregisterHandler: function unregisterHandler(e) {
        this.$crossDomainMessager.unregisterHandler(e), e.remove_customViewsListLoad(t.mkdel(this, this.$handleCustomViewsListLoad));
      }, sendCommand: function sendCommand(e) {
        return function (i, n, a) {
          if (this.$crossDomainMessager.sendCommand(e).call(this.$crossDomainMessager, i, n, a), "api.ShowCustomViewCommand" === a.get_commandName()) {
            var r = this.$customViewLoadCallbacks[i.get_hostId()];t.isNullOrUndefined(r) && (r = [], this.$customViewLoadCallbacks[i.get_hostId()] = r), r.push(a);
          }
        };
      }, $handleCustomViewsListLoad: function $handleCustomViewsListLoad(e) {
        var i = e.get_hostId(),
            n = this.$customViewLoadCallbacks[i];if (!t.isNullOrUndefined(n)) {
          for (var a = 0; a < n.length; a++) {
            var r = n[a];t.staticEquals(r.get_successCallback(), null) || r.get_successCallback()(null);
          }delete this.$customViewLoadCallbacks[i];
        }
      }, $handleLegacyNotifications: function $handleLegacyNotifications(e, i) {
        if ("layoutInfoReq" === e.get_name()) w.$sendVisibleRects();else if ("tableau.completed" === e.get_name() || "completed" === e.get_name()) i.handleVizLoad();else if ("tableau.listening" === e.get_name()) i.handleVizListening();else if ("sf?" === e.get_name() && t.count(e.get_parameters()) > 0) {
          var n = t.getItem(e.get_parameters(), 0);i.sendScaleFactor(n);
        }
      } }), t.initClass(O, i, { get_handler: function get_handler() {
        return this.$handler;
      }, get_router: function get_router() {
        return this.$router;
      }, sendCommand: function sendCommand(e) {
        return function (t, i) {
          this.$router.sendCommand(e).call(this.$router, this.$handler, t, i);
        };
      }, dispose: function dispose() {
        this.$router.unregisterHandler(this.$handler);
      } }), t.initClass(F, i, { getMarksAsync: function getMarksAsync() {
        var e = this.$context.get__worksheetImpl();return t.isValue(e.get_selectedMarks()) ? new a._Deferred().resolve(e.get_selectedMarks()._toApiCollection()) : e.$getSelectedMarksAsync();
      } }, j), t.initClass(R, i, { getParameterName: function getParameterName() {
        return this.$context.get__parameterName();
      }, getParameterAsync: function getParameterAsync() {
        return this.$context.get__workbookImpl().$getSingleParameterAsync(this.$context.get__parameterName());
      } }, x), t.initClass(D, i, {}), t.initClass(z, i, { getOldStoryPointInfo: function getOldStoryPointInfo() {
        return this.$oldStoryPointInfo;
      }, getNewStoryPoint: function getNewStoryPoint() {
        return this.$newStoryPoint;
      } }, x), t.initClass(P, i, { getOldSheetName: function getOldSheetName() {
        return this.$oldName;
      }, getNewSheetName: function getNewSheetName() {
        return this.$newName;
      } }, x), t.initClass(U, i, { getToolbarState: function getToolbarState() {
        return this.$toolbarStateImpl.get_toolbarState();
      } }, x), t.initClass(M, i, { add_customViewsListLoad: function add_customViewsListLoad(e) {
        this.$1$CustomViewsListLoadField = t.delegateCombine(this.$1$CustomViewsListLoadField, e);
      }, remove_customViewsListLoad: function remove_customViewsListLoad(e) {
        this.$1$CustomViewsListLoadField = t.delegateRemove(this.$1$CustomViewsListLoadField, e);
      }, add_stateReadyForQuery: function add_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateCombine(this.$1$StateReadyForQueryField, e);
      }, remove_stateReadyForQuery: function remove_stateReadyForQuery(e) {
        this.$1$StateReadyForQueryField = t.delegateRemove(this.$1$StateReadyForQueryField, e);
      }, add_$marksSelection: function add_$marksSelection(e) {
        this.$1$MarksSelectionField = t.delegateCombine(this.$1$MarksSelectionField, e);
      }, remove_$marksSelection: function remove_$marksSelection(e) {
        this.$1$MarksSelectionField = t.delegateRemove(this.$1$MarksSelectionField, e);
      }, add_$marksHighlight: function add_$marksHighlight(e) {
        this.$1$MarksHighlightField = t.delegateCombine(this.$1$MarksHighlightField, e);
      }, remove_$marksHighlight: function remove_$marksHighlight(e) {
        this.$1$MarksHighlightField = t.delegateRemove(this.$1$MarksHighlightField, e);
      }, add_$filterChange: function add_$filterChange(e) {
        this.$1$FilterChangeField = t.delegateCombine(this.$1$FilterChangeField, e);
      }, remove_$filterChange: function remove_$filterChange(e) {
        this.$1$FilterChangeField = t.delegateRemove(this.$1$FilterChangeField, e);
      }, add_$parameterValueChange: function add_$parameterValueChange(e) {
        this.$1$ParameterValueChangeField = t.delegateCombine(this.$1$ParameterValueChangeField, e);
      }, remove_$parameterValueChange: function remove_$parameterValueChange(e) {
        this.$1$ParameterValueChangeField = t.delegateRemove(this.$1$ParameterValueChangeField, e);
      }, add_$customViewLoad: function add_$customViewLoad(e) {
        this.$1$CustomViewLoadField = t.delegateCombine(this.$1$CustomViewLoadField, e);
      }, remove_$customViewLoad: function remove_$customViewLoad(e) {
        this.$1$CustomViewLoadField = t.delegateRemove(this.$1$CustomViewLoadField, e);
      }, add_$customViewSave: function add_$customViewSave(e) {
        this.$1$CustomViewSaveField = t.delegateCombine(this.$1$CustomViewSaveField, e);
      }, remove_$customViewSave: function remove_$customViewSave(e) {
        this.$1$CustomViewSaveField = t.delegateRemove(this.$1$CustomViewSaveField, e);
      }, add_$customViewRemove: function add_$customViewRemove(e) {
        this.$1$CustomViewRemoveField = t.delegateCombine(this.$1$CustomViewRemoveField, e);
      }, remove_$customViewRemove: function remove_$customViewRemove(e) {
        this.$1$CustomViewRemoveField = t.delegateRemove(this.$1$CustomViewRemoveField, e);
      }, add_$customViewSetDefault: function add_$customViewSetDefault(e) {
        this.$1$CustomViewSetDefaultField = t.delegateCombine(this.$1$CustomViewSetDefaultField, e);
      }, remove_$customViewSetDefault: function remove_$customViewSetDefault(e) {
        this.$1$CustomViewSetDefaultField = t.delegateRemove(this.$1$CustomViewSetDefaultField, e);
      }, add_$tabSwitch: function add_$tabSwitch(e) {
        this.$1$TabSwitchField = t.delegateCombine(this.$1$TabSwitchField, e);
      }, remove_$tabSwitch: function remove_$tabSwitch(e) {
        this.$1$TabSwitchField = t.delegateRemove(this.$1$TabSwitchField, e);
      }, add_$toolbarStateChange: function add_$toolbarStateChange(e) {
        this.$1$ToolbarStateChangeField = t.delegateCombine(this.$1$ToolbarStateChangeField, e);
      }, remove_$toolbarStateChange: function remove_$toolbarStateChange(e) {
        this.$1$ToolbarStateChangeField = t.delegateRemove(this.$1$ToolbarStateChangeField, e);
      }, add_$storyPointSwitch: function add_$storyPointSwitch(e) {
        this.$1$StoryPointSwitchField = t.delegateCombine(this.$1$StoryPointSwitchField, e);
      }, remove_$storyPointSwitch: function remove_$storyPointSwitch(e) {
        this.$1$StoryPointSwitchField = t.delegateRemove(this.$1$StoryPointSwitchField, e);
      }, add_$vizResize: function add_$vizResize(e) {
        this.$1$VizResizeField = t.delegateCombine(this.$1$VizResizeField, e);
      }, remove_$vizResize: function remove_$vizResize(e) {
        this.$1$VizResizeField = t.delegateRemove(this.$1$VizResizeField, e);
      }, get_hostId: function get_hostId() {
        return this.$parameters.hostId;
      }, set_hostId: function set_hostId(e) {
        this.$parameters.hostId = e;
      }, get_iframe: function get_iframe() {
        return this.$iframe;
      }, get_instanceId: function get_instanceId() {
        return this.$instanceId;
      }, set_instanceId: function set_instanceId(e) {
        this.$instanceId = e;
      }, get_$viz: function get_$viz() {
        return this.$viz;
      }, get_$areTabsHidden: function get_$areTabsHidden() {
        return this.$areTabsHidden;
      }, get_$isToolbarHidden: function get_$isToolbarHidden() {
        return this.$isToolbarHidden;
      }, get_$isHidden: function get_$isHidden() {
        return "none" === this.$iframe.style.display;
      }, get_$parentElement: function get_$parentElement() {
        return this.$parameters.parentElement;
      }, get_$url: function get_$url() {
        return this.$parameters.get_baseUrl();
      }, get_$workbook: function get_$workbook() {
        return this.$workbookImpl.get_workbook();
      }, get__workbookImpl: function get__workbookImpl() {
        return this.$workbookImpl;
      }, get_$areAutomaticUpdatesPaused: function get_$areAutomaticUpdatesPaused() {
        return this.$areAutomaticUpdatesPaused;
      }, get_$vizSize: function get_$vizSize() {
        return this.$vizSize;
      }, getCurrentUrlAsync: function getCurrentUrlAsync() {
        var e = new a._Deferred(),
            i = new (t.makeGenericType(a.CommandReturnHandler$1, [String]))("api.GetCurrentUrlCommand", 0, function (t) {
          e.resolve(t);
        }, function (t, i) {
          e.reject(a._TableauException.createInternalError(i));
        });return this._sendCommand(String).call(this, null, i), e.get_promise();
      }, handleVizListening: function handleVizListening() {
        this.$enableVisibleRectCommunication();
      }, handleVizLoad: function handleVizLoad() {
        t.isNullOrUndefined(this.$vizSize) && (this.$setFrameSize(this.$initialAvailableSize.width + "px", this.$initialAvailableSize.height + "px"), this.$show()), t.isValue(this.$staticImage) && (this.$staticImage.style.display = "none"), t.isNullOrUndefined(this.$workbookImpl) ? this.$workbookImpl = new S(this, this.$messagingOptions, t.mkdel(this, function () {
          this.$onWorkbookInteractive(null);
        })) : this.$initializingWorkbookImpl || this.$workbookImpl._update(t.mkdel(this, function () {
          this.$onWorkbookInteractive(null);
        })), this.sendScaleFactor("-1");
      }, $calculateFrameSize: function $calculateFrameSize(e) {
        var t,
            i,
            n,
            r,
            s = this.$vizSize.chromeHeight,
            o = this.$vizSize.sheetSize,
            l = 0,
            u = 0;if ("exactly" === o.behavior) l = o.maxSize.width, u = o.maxSize.height + s;else switch (o.behavior) {case "range":
            t = o.minSize.width, i = o.maxSize.width, n = o.minSize.height + s, r = o.maxSize.height + s, l = Math.max(t, Math.min(i, e.width)), u = Math.max(n, Math.min(r, e.height));break;case "atleast":
            t = o.minSize.width, n = o.minSize.height + s, l = Math.max(t, e.width), u = Math.max(n, e.height);break;case "atmost":
            i = o.maxSize.width, r = o.maxSize.height + s, l = Math.min(i, e.width), u = Math.min(r, e.height);break;case "automatic":
            l = e.width, u = Math.max(e.height, s);break;default:
            throw a._TableauException.createInternalError("Unknown SheetSizeBehavior for viz: " + o.behavior.toString());}return a.Size.$ctor(l, u);
      }, $getNewFrameSize: function $getNewFrameSize() {
        var e;return t.isValue(this.$initialAvailableSize) ? (e = this.$initialAvailableSize, this.$initialAvailableSize = null) : e = a._Utility.computeContentSize(this.get_$parentElement()), this.$raiseVizResizeEvent(e), this.$calculateFrameSize(e);
      }, $refreshSize: function $refreshSize() {
        if (t.isValue(this.$vizSize)) {
          var e = this.$getNewFrameSize();if (e.height !== this.$vizSize.chromeHeight) {
            this.$setFrameSize(e.width + "px", e.height + "px");for (var i = 0; i < 10; i++) {
              var n = this.$getNewFrameSize();if (t.referenceEquals(JSON.stringify(e), JSON.stringify(n))) return;e = n, this.$setFrameSize(e.width + "px", e.height + "px");
            }throw a._TableauException.create("maxVizResizeAttempts", "Viz resize limit hit. The calculated iframe size did not stabilize after 10 resizes.");
          }
        }
      }, handleEventNotification: function handleEventNotification(e, t) {
        var i = a._ApiServerNotification.deserialize(t);switch (e) {case "api.FirstVizSizeKnownEvent":
            this.$handleFirstVizSizeKnownEvent(i);break;case "api.VizInteractiveEvent":
            this.$handleVizInteractiveEvent(i);break;case "api.MarksSelectionChangedEvent":
            this.$handleMarksSelectionChangedEvent(i);break;case "api.MarksHighlightChangedEvent":
            this.$handleMarksHighlightChangedEvent(i);break;case "api.FilterChangedEvent":
            this.$handleFilterChangedEvent(i);break;case "api.ParameterChangedEvent":
            this.$handleParameterChangedEvent(i);break;case "api.CustomViewsListLoadedEvent":
            this.$handleCustomViewsListLoadedEvent(i);break;case "api.CustomViewUpdatedEvent":
            this.$handleCustomViewUpdatedEvent(i);break;case "api.CustomViewRemovedEvent":
            this.$handleCustomViewRemovedEvent();break;case "api.CustomViewSetDefaultEvent":
            this.$handleCustomViewSetDefaultEvent(i);break;case "api.TabSwitchEvent":
            this.$handleTabSwitchEvent(i);break;case "api.ToolbarStateChangedEvent":
            this.$handleToolbarStateChangeEvent(i);break;case "api.StorytellingStateChangedEvent":
            this.$handleStorytellingStateChangedEvent(i);break;}
      }, addEventListener: function addEventListener(e, i) {
        var n = {};if (!a.PublicEnums.tryNormalizeEnum(a.ApiTableauEventName).call(null, e, n)) throw a._TableauException.createUnsupportedEventName(e.toString());switch (n.$) {case "marksselection":
            this.add_$marksSelection(t.cast(i, Function));break;case "markshighlight":
            this.add_$marksHighlight(t.cast(i, Function));break;case "parametervaluechange":
            this.add_$parameterValueChange(t.cast(i, Function));break;case "filterchange":
            this.add_$filterChange(t.cast(i, Function));break;case "customviewload":
            this.add_$customViewLoad(t.cast(i, Function));break;case "customviewsave":
            this.add_$customViewSave(t.cast(i, Function));break;case "customviewremove":
            this.add_$customViewRemove(t.cast(i, Function));break;case "customviewsetdefault":
            this.add_$customViewSetDefault(t.cast(i, Function));break;case "tabswitch":
            this.add_$tabSwitch(t.cast(i, Function));break;case "storypointswitch":
            this.add_$storyPointSwitch(t.cast(i, Function));break;case "toolbarstatechange":
            this.add_$toolbarStateChange(t.cast(i, Function));break;case "vizresize":
            this.add_$vizResize(t.cast(i, Function));break;}
      }, removeEventListener: function removeEventListener(e, i) {
        var n = {};if (!a.PublicEnums.tryNormalizeEnum(a.ApiTableauEventName).call(null, e, n)) throw a._TableauException.createUnsupportedEventName(e.toString());switch (n.$) {case "marksselection":
            this.remove_$marksSelection(t.cast(i, Function));break;case "markshighlight":
            this.remove_$marksHighlight(t.cast(i, Function));break;case "parametervaluechange":
            this.remove_$parameterValueChange(t.cast(i, Function));break;case "filterchange":
            this.remove_$filterChange(t.cast(i, Function));break;case "customviewload":
            this.remove_$customViewLoad(t.cast(i, Function));break;case "customviewsave":
            this.remove_$customViewSave(t.cast(i, Function));break;case "customviewremove":
            this.remove_$customViewRemove(t.cast(i, Function));break;case "customviewsetdefault":
            this.remove_$customViewSetDefault(t.cast(i, Function));break;case "tabswitch":
            this.remove_$tabSwitch(t.cast(i, Function));break;case "toolbarstatechange":
            this.remove_$toolbarStateChange(t.cast(i, Function));break;case "storypointswitch":
            this.remove_$storyPointSwitch(t.cast(i, Function));break;case "vizresize":
            this.remove_$vizResize(t.cast(i, Function));break;}
      }, $dispose: function $dispose() {
        t.isValue(this.$iframe) && (this.$iframe.parentNode.removeChild(this.$iframe), this.$iframe = null), w.$unregisterViz(this.$viz), this.$messagingOptions.get_router().unregisterHandler(this), this.$removeWindowResizeHandler();
      }, $show: function $show() {
        this.$iframe.style.display = "block", this.$iframe.style.visibility = "visible";
      }, $hide: function $hide() {
        this.$iframe.style.display = "none";
      }, $makeInvisible: function $makeInvisible() {
        this.$iframe.style.visibility = "hidden";
      }, $showExportImageDialog: function $showExportImageDialog() {
        this.$invokeCommand("showExportImageDialog");
      }, $showExportDataDialog: function $showExportDataDialog(e) {
        var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e);this.$invokeCommand("showExportDataDialog", t);
      }, $showExportCrossTabDialog: function $showExportCrossTabDialog(e) {
        var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e);this.$invokeCommand("showExportCrosstabDialog", t);
      }, $showExportPDFDialog: function $showExportPDFDialog() {
        this.$invokeCommand("showExportPDFDialog");
      }, $revertAllAsync: function $revertAllAsync() {
        return a._Utility.noResultPromiseHelper("api.RevertAllCommand", null, this.$messagingOptions);
      }, $refreshDataAsync: function $refreshDataAsync() {
        return a._Utility.noResultPromiseHelper("api.RefreshDataCommand", null, this.$messagingOptions);
      }, $showShareDialog: function $showShareDialog() {
        this.$invokeCommand("showShareDialog");
      }, $showDownloadWorkbookDialog: function $showDownloadWorkbookDialog() {
        if (!this.get__workbookImpl().get_isDownloadAllowed()) throw a._TableauException.create("downloadWorkbookNotAllowed", "Download workbook is not allowed");this.$invokeCommand("showDownloadWorkbookDialog");
      }, $pauseAutomaticUpdatesAsync: function $pauseAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("pauseAutomaticUpdates");
      }, $resumeAutomaticUpdatesAsync: function $resumeAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("resumeAutomaticUpdates");
      }, $toggleAutomaticUpdatesAsync: function $toggleAutomaticUpdatesAsync() {
        return this.$invokeAutomaticUpdatesCommandAsync("toggleAutomaticUpdates");
      }, $setFrameSizeAndUpdate: function $setFrameSizeAndUpdate(e, i) {
        this.$raiseVizResizeEvent(a.Size.$ctor(-1, -1)), this.$setFrameSize(e, i), t.isValue(this.$workbookImpl) && this.$workbookImpl._updateActiveSheetAsync();
      }, $setAreAutomaticUpdatesPaused: function $setAreAutomaticUpdatesPaused(e) {
        this.$areAutomaticUpdatesPaused = e;
      }, $contentRootElement: function $contentRootElement() {
        return this.$parameters.parentElement;
      }, $create: function $create() {
        try {
          w.$registerViz(this.$viz);
        } catch (i) {
          var e = t.Exception.wrap(i);throw this.$dispose(), e;
        }this.$parameters.fixedSize ? (this.$parameters.displayStaticImage && (this.$staticImage = this.$createStaticImageElement(a.Size.$ctor(parseInt(this.$parameters.width), parseInt(this.$parameters.height))), this.$staticImage.style.display = "block"), this.$iframe = this.$createIframe(), this.$show()) : (this.$initialAvailableSize = a._Utility.computeContentSize(this.get_$parentElement()), 0 !== this.$initialAvailableSize.width && 0 !== this.$initialAvailableSize.height || (this.$initialAvailableSize = a.Size.$ctor(800, 600)), this.$iframe = this.$createIframe(), this.$makeInvisible(), this.$parameters.displayStaticImage && (this.$staticImage = this.$createStaticImageElement(this.$initialAvailableSize), this.$staticImage.style.display = "block")), a._Utility.hasWindowPostMessage() || (a._Utility.isIE() ? this.$iframe.onreadystatechange = this.$getOnCheckForDoneDelegate() : this.$iframe.onload = this.$getOnCheckForDoneDelegate()), this.$isToolbarHidden = !this.$parameters.toolbar, this.$areTabsHidden = !this.$parameters.tabs, this.$messagingOptions.get_router().registerHandler(this), this.$iframe.src = this.$parameters.get_url();
      }, $sendVisibleRect: function $sendVisibleRect() {
        try {
          if (!a._Utility.hasWindowPostMessage() || t.isNullOrUndefined(this.$iframe) || !t.isValue(this.$iframe.contentWindow)) return;
        } catch (e) {
          return;
        }var e = a._Utility.visibleContentRectInDocumentCoordinates(this.get_iframe()),
            i = a._Utility.contentRectInDocumentCoordinates(this.get_iframe()),
            n = new a.NonApiCommand("layoutInfoResp", [(e.left - i.left).toString(), (e.top - i.top).toString(), e.width.toString(), e.height.toString()]);this.$iframe.contentWindow.postMessage(n.serialize(), "*");
      }, $enableVisibleRectCommunication: function $enableVisibleRectCommunication() {
        if (a._Utility.hasWindowPostMessage() && !t.isNullOrUndefined(this.$iframe) && t.isValue(this.$iframe.contentWindow)) {
          var e = new a.NonApiCommand("tableau.enableVisibleRectCommunication", []);this.$iframe.contentWindow.postMessage(e.serialize(), "*");
        }
      }, $redoAsync: function $redoAsync() {
        return a._Utility.noResultPromiseHelper("api.Redo", null, this.$messagingOptions);
      }, $undoAsync: function $undoAsync() {
        return a._Utility.noResultPromiseHelper("api.Undo", null, this.$messagingOptions);
      }, sendScaleFactor: function sendScaleFactor(e) {
        var i = document.documentElement.clientWidth / window.innerWidth,
            n = new a.NonApiCommand("sf", [e, i.toString(), 0 .toString(), 0 .toString()]);t.isValue(this.$iframe) && t.isValue(this.$iframe.contentWindow) && this.$iframe.contentWindow.postMessage(n.serialize(), "*");
      }, _sendCommand: function _sendCommand(e) {
        return function (t, i) {
          this.$messagingOptions.sendCommand(e).call(this.$messagingOptions, t, i);
        };
      }, $raiseParameterValueChange: function $raiseParameterValueChange(e) {
        t.staticEquals(this.$1$ParameterValueChangeField, null) || this.$1$ParameterValueChangeField(new R("parametervaluechange", this.$viz, e));
      }, $raiseCustomViewLoad: function $raiseCustomViewLoad(e) {
        this.get__workbookImpl()._update(t.mkdel(this, function () {
          t.staticEquals(this.$1$CustomViewLoadField, null) || this.$1$CustomViewLoadField(new I("customviewload", this.$viz, t.isValue(e) ? e._impl : null));
        }));
      }, $raiseCustomViewSave: function $raiseCustomViewSave(e) {
        this.get__workbookImpl()._update(t.mkdel(this, function () {
          t.staticEquals(this.$1$CustomViewSaveField, null) || this.$1$CustomViewSaveField(new I("customviewsave", this.$viz, e._impl));
        }));
      }, $raiseCustomViewRemove: function $raiseCustomViewRemove(e) {
        t.staticEquals(this.$1$CustomViewRemoveField, null) || this.$1$CustomViewRemoveField(new I("customviewremove", this.$viz, e._impl));
      }, $raiseCustomViewSetDefault: function $raiseCustomViewSetDefault(e) {
        t.staticEquals(this.$1$CustomViewSetDefaultField, null) || this.$1$CustomViewSetDefaultField(new I("customviewsetdefault", this.$viz, e._impl));
      }, $raiseTabSwitch: function $raiseTabSwitch(e, i) {
        t.staticEquals(this.$1$TabSwitchField, null) || this.$1$TabSwitchField(new P("tabswitch", this.$viz, e, i));
      }, raiseStoryPointSwitch: function raiseStoryPointSwitch(e, i) {
        t.staticEquals(this.$1$StoryPointSwitchField, null) || this.$1$StoryPointSwitchField(new z("storypointswitch", this.$viz, e, i));
      }, $raiseStateReadyForQuery: function $raiseStateReadyForQuery() {
        t.staticEquals(this.$1$StateReadyForQueryField, null) || this.$1$StateReadyForQueryField(this);
      }, $raiseCustomViewsListLoad: function $raiseCustomViewsListLoad() {
        t.staticEquals(this.$1$CustomViewsListLoadField, null) || this.$1$CustomViewsListLoadField(this);
      }, $raiseVizResizeEvent: function $raiseVizResizeEvent(e) {
        t.staticEquals(this.$1$VizResizeField, null) || this.$1$VizResizeField(new H("vizresize", this.$viz, e));
      }, $setFrameSize: function $setFrameSize(e, t) {
        this.$parameters.width = e, this.$parameters.height = t, this.$iframe.style.width = this.$parameters.width, this.$iframe.style.height = this.$parameters.height;
      }, $verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard: function $verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(e) {
        if (t.isNullOrUndefined(e)) return null;var i = this.$workbookImpl.$findActiveSheetOrSheetWithinActiveDashboard(e);if (t.isNullOrUndefined(i)) throw a._TableauException.createNotActiveSheet();return i.get_name();
      }, $invokeAutomaticUpdatesCommandAsync: function $invokeAutomaticUpdatesCommandAsync(e) {
        if ("pauseAutomaticUpdates" !== e && "resumeAutomaticUpdates" !== e && "toggleAutomaticUpdates" !== e) throw a._TableauException.createInternalError(null);var i = {};i["api.invokeCommandName"] = e;var n = new a._Deferred(),
            r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.InvokeCommandCommand", 0, t.mkdel(this, function (e) {
          t.isValue(e) && t.isValue(e.isAutoUpdate) && (this.$areAutomaticUpdatesPaused = !e.isAutoUpdate), n.resolve(this.$areAutomaticUpdatesPaused);
        }), function (e, t) {
          n.reject(a._TableauException.createServerError(t));
        });return this._sendCommand(Object).call(this, i, r), n.get_promise();
      }, $invokeCommand: function $invokeCommand(e, i) {
        if ("showExportImageDialog" !== e && "showExportDataDialog" !== e && "showExportCrosstabDialog" !== e && "showExportPDFDialog" !== e && "showShareDialog" !== e && "showDownloadWorkbookDialog" !== e) throw a._TableauException.createInternalError(null);var n = {};n["api.invokeCommandName"] = e, t.isValue(i) && (n["api.invokeCommandParam"] = i);var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.InvokeCommandCommand", 0, null, null);this._sendCommand(Object).call(this, n, r);
      }, $handleFirstVizSizeKnownEvent: function $handleFirstVizSizeKnownEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));this.$handleInitialVizSize(i);
      }, $handleVizInteractiveEvent: function $handleVizInteractiveEvent(e) {
        t.isValue(this.$workbookImpl) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName()) ? this.$onWorkbookInteractive(null) : this.$raiseStateReadyForQuery();
      }, $handleMarksSelectionChangedEvent: function $handleMarksSelectionChangedEvent(e) {
        if (!t.staticEquals(this.$1$MarksSelectionField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();if (n.get_isStory() && (n = t.cast(n, $).get_activeStoryPointImpl().get_containedSheetImpl()), t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, C);else if (n.get_isDashboard()) {
            i = t.cast(n, d).get_worksheets()._get(e.get_worksheetName())._impl;
          }t.isValue(i) && (i.set_selectedMarks(null), this.$1$MarksSelectionField(new F("marksselection", this.$viz, i)));
        }
      }, $handleMarksHighlightChangedEvent: function $handleMarksHighlightChangedEvent(e) {
        if (!t.staticEquals(this.$1$MarksHighlightField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();if (n.get_isStory() && (n = t.cast(n, $).get_activeStoryPointImpl().get_containedSheetImpl()), t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, C);else if (n.get_isDashboard()) {
            i = t.cast(n, d).get_worksheets()._get(e.get_worksheetName())._impl;
          }t.isValue(i) && (i.highlightedMarks = null, this.$1$MarksHighlightField(new T("markshighlight", this.$viz, i)));
        }
      }, $handleFilterChangedEvent: function $handleFilterChangedEvent(e) {
        if (!t.staticEquals(this.$1$FilterChangeField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          var i = null,
              n = this.$workbookImpl.get_activeSheetImpl();if (t.referenceEquals(n.get_name(), e.get_worksheetName())) i = t.cast(n, C);else if (n.get_isDashboard()) {
            i = t.cast(n, d).get_worksheets()._get(e.get_worksheetName())._impl;
          } else if (n.get_isStory()) {
            var a = t.cast(n, $).get_activeStoryPointImpl().get_containedSheetImpl();if (a.get_isDashboard()) i = t.cast(a, d).get_worksheets()._get(e.get_worksheetName())._impl;else t.referenceEquals(a.get_name(), e.get_worksheetName()) && (i = t.cast(a, C));
          }if (t.isValue(i)) {
            var r = t.cast(JSON.parse(t.cast(e.get_data(), String)), Array),
                s = r[0],
                o = r[1];this.$1$FilterChangeField(new N("filterchange", this.$viz, i, s, o));
          }
        }
      }, $handleParameterChangedEvent: function $handleParameterChangedEvent(e) {
        if (!t.staticEquals(this.$1$ParameterValueChangeField, null) && t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
          this.$workbookImpl.set_$lastChangedParameterImpl(null);var i = t.cast(e.get_data(), String);this.$raiseParameterValueChange(i);
        }
      }, $handleCustomViewsListLoadedEvent: function $handleCustomViewsListLoadedEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String)),
            n = t.mkdel(this, function () {
          m._processCustomViews(this.$workbookImpl, this.$messagingOptions, i);
        }),
            a = t.mkdel(this, function () {
          this.$raiseCustomViewsListLoad(), t.staticEquals(this.$1$CustomViewLoadField, null) || i.customViewLoaded || this.$raiseCustomViewLoad(this.$workbookImpl.get_activeCustomView());
        });t.isNullOrUndefined(this.$workbookImpl) ? (this.$initializingWorkbookImpl = !0, this.$workbookImpl = new S(this, this.$messagingOptions, t.mkdel(this, function () {
          n(), this.$onWorkbookInteractive(a), this.$initializingWorkbookImpl = !1;
        }))) : (n(), this.$ensureCalledAfterFirstInteractive(a));
      }, $handleCustomViewUpdatedEvent: function $handleCustomViewUpdatedEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));if (t.isNullOrUndefined(this.$workbookImpl) && (this.$workbookImpl = new S(this, this.$messagingOptions, null)), t.isValue(this.$workbookImpl) && m._processCustomViewUpdate(this.$workbookImpl, this.$messagingOptions, i, !0), !t.staticEquals(this.$1$CustomViewSaveField, null)) for (var n = this.$workbookImpl.get_$updatedCustomViews()._toApiCollection(), a = 0, r = n.length; a < r; a++) {
          this.$raiseCustomViewSave(n[a]);
        }
      }, $handleCustomViewRemovedEvent: function $handleCustomViewRemovedEvent() {
        if (!t.staticEquals(this.$1$CustomViewRemoveField, null)) for (var e = this.$workbookImpl.get_$removedCustomViews()._toApiCollection(), i = 0, n = e.length; i < n; i++) {
          this.$raiseCustomViewRemove(e[i]);
        }
      }, $handleCustomViewSetDefaultEvent: function $handleCustomViewSetDefaultEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String));if (t.isValue(this.$workbookImpl) && m._processCustomViews(this.$workbookImpl, this.$messagingOptions, i), !t.staticEquals(this.$1$CustomViewSetDefaultField, null) && t.isValue(i.defaultCustomViewId)) for (var n = this.$workbookImpl.get_$customViews(), a = 0; a < n.get__length(); a++) {
          var r = n.get_item(a);if (r.getDefault()) {
            this.$raiseCustomViewSetDefault(r);break;
          }
        }
      }, $handleTabSwitchEvent: function $handleTabSwitchEvent(e) {
        this.$workbookImpl._update(t.mkdel(this, function () {
          if (t.isValue(this.$workbookTabSwitchHandler) && this.$workbookTabSwitchHandler(), t.referenceEquals(this.$workbookImpl.get_name(), e.get_workbookName())) {
            var i = e.get_worksheetName(),
                n = t.cast(e.get_data(), String);this.$raiseTabSwitch(i, n);
          }this.$onWorkbookInteractive(null);
        }));
      }, $handleToolbarStateChangeEvent: function $handleToolbarStateChangeEvent(e) {
        var i = JSON.parse(t.cast(e.get_data(), String)),
            n = new y(this, i);t.staticEquals(this.$1$ToolbarStateChangeField, null) || this.$1$ToolbarStateChangeField(new U("toolbarstatechange", this.$viz, n));
      }, $handleStorytellingStateChangedEvent: function $handleStorytellingStateChangedEvent(e) {
        var i = t.cast(this.$workbookImpl.get_activeSheetImpl(), $);"story" === i.get_sheetType() && i.update(JSON.parse(t.cast(e.get_data(), String)));
      }, $onWorkbookInteractive: function $onWorkbookInteractive(e) {
        if (!this.$onFirstInteractiveAlreadyCalled) {
          var i = this.$onFirstInteractiveCallback;window.setTimeout(t.mkdel(this, function () {
            this.$onFirstInteractiveAlreadyCalled || (t.staticEquals(i, null) || i(new x("firstinteractive", this.$viz)), t.staticEquals(e, null) || e(), this.$onFirstInteractiveAlreadyCalled = !0);
          }), 0);
        }this.$raiseStateReadyForQuery();
      }, $ensureCalledAfterFirstInteractive: function $ensureCalledAfterFirstInteractive(e) {
        var i = new Date(),
            n = null;(n = t.mkdel(this, function () {
          var t = new Date();if (this.$onFirstInteractiveAlreadyCalled) e();else {
            if (t - i > 3e5) throw a._TableauException.createInternalError("Timed out while waiting for the viz to become interactive");window.setTimeout(n, 10);
          }
        }))();
      }, $checkForDone: function $checkForDone() {
        a._Utility.isIE() ? "complete" === this.$iframe.readyState && this.handleVizLoad() : this.handleVizLoad();
      }, $onCheckForDone: function $onCheckForDone() {
        window.setTimeout(t.mkdel(this, this.$checkForDone), 3e3);
      }, $createStaticImageElement: function $createStaticImageElement(e) {
        var i = document.createElement("div"),
            n = t.cast(i, t.isValue(i) && t.isInstanceOfType(i, Element) && "DIV" === i.tagName);return n.style.background = "transparent url('" + this.$parameters.staticImageUrl + "') no-repeat scroll 0 0", n.style.left = "8px", n.style.top = this.$parameters.tabs ? "31px" : "9px", n.style.position = "absolute", n.style.width = e.width + "px", n.style.height = e.height + "px", this.$contentRootElement().appendChild(n), n;
      }, $createIframe: function $createIframe() {
        if (t.isNullOrUndefined(this.$contentRootElement())) return null;var e = document.createElement("IFrame"),
            i = t.cast(e, t.isValue(e) && t.isInstanceOfType(e, Element) && "IFRAME" === e.tagName);return i.frameBorder = "0", i.setAttribute("allowTransparency", "true"), i.setAttribute("allowFullScreen", "true"), i.setAttribute("title", this.$getLocalizedTitle()), i.marginHeight = "0", i.marginWidth = "0", i.style.display = "block", this.$parameters.fixedSize ? (i.style.width = this.$parameters.width, i.style.height = this.$parameters.height, this.$parameters.iframeSizedToWindow && i.setAttribute("scrolling", "no")) : (i.style.width = "1px", i.style.height = "1px", i.setAttribute("scrolling", "no")), a._Utility.isSafari() && i.addEventListener("mousewheel", t.mkdel(this, this.$onIframeMouseWheel), !1), this.$contentRootElement().appendChild(i), i;
      }, $getLocalizedTitle: function $getLocalizedTitle() {
        var e = window.navigator.language;if ("zh-CN" === e) return "数据可视化";switch (e.substr(0, 2)) {case "fr":
            return "Visualisation de données";case "es":
            return "Visualización de datos";case "pt":
            return "Visualização de dados";case "ja":
            return "データ ビジュアライゼーション";case "de":
            return "Datenvisualisierung";case "ko":
            return "데이터 비주얼리제이션";case "en":default:
            return "data visualization";}
      }, $onIframeMouseWheel: function $onIframeMouseWheel(e) {}, $getOnCheckForDoneDelegate: function $getOnCheckForDoneDelegate() {
        return t.mkdel(this, function (e) {
          this.$onCheckForDone();
        });
      }, $handleInitialVizSize: function $handleInitialVizSize(e) {
        var i = a.SheetSizeFactory.fromSizeConstraints(e.sizeConstraints);this.$vizSize = L.$ctor(i, e.chromeHeight), t.isValue(this.$onFirstVizSizeKnownCallback) && this.$onFirstVizSizeKnownCallback(new A("firstvizsizeknown", this.$viz, this.$vizSize)), this.$parameters.fixedSize || (this.$refreshSize(), this.$addWindowResizeHandler(), this.$show());
      }, $removeWindowResizeHandler: function $removeWindowResizeHandler() {
        t.isNullOrUndefined(this.$windowResizeHandler) || (a._Utility.hasWindowAddEventListener() ? window.removeEventListener("resize", this.$windowResizeHandler, !1) : window.self.detachEvent("onresize", this.$windowResizeHandler), this.$windowResizeHandler = null);
      }, $addWindowResizeHandler: function $addWindowResizeHandler() {
        t.isValue(this.$windowResizeHandler) || (this.$windowResizeHandler = t.mkdel(this, function () {
          this.$refreshSize();
        }), a._Utility.hasWindowAddEventListener() ? window.addEventListener("resize", this.$windowResizeHandler, !1) : window.self.attachEvent("onresize", this.$windowResizeHandler));
      }, switchToViz: function switchToViz(e) {
        var i = new a._Deferred(),
            n = {};n["api.invokeCommandParam"] = e;var r = new (t.makeGenericType(a.CommandReturnHandler$1, [Object]))("api.SwitchViz", 1, function (e) {
          i.resolve();
        }, function (e, t) {
          i.reject(a._TableauException.createServerError(t));
        });return this.$messagingOptions.sendCommand(Object).call(this.$messagingOptions, n, r), i.get_promise();
      } }, null, [V]), t.initClass(H, i, { getAvailableSize: function getAvailableSize() {
        return this.$availableSize;
      } }, x), t.initClass(L, i, {}, Object), t.initClass(K, i, { getFilterType: function getFilterType() {
        return this.$type;
      }, getFieldName: function getFieldName() {
        return this.$caption;
      }, getWorksheet: function getWorksheet() {
        return this.$worksheetImpl.get_worksheet();
      }, getFieldAsync: function getFieldAsync() {
        var e = new a._Deferred();if (t.isNullOrUndefined(this.$field)) {
          var i = t.mkdel(this, function (t) {
            return this.$field = new J(t, this.$caption, this.$fieldRole, this.$fieldAggregation), e.resolve(this.$field), null;
          });this.$worksheetImpl.$getDataSourceAsync(this.$dataSourceName).then(i, function (t) {
            return e.reject(t), null;
          });
        } else window.setTimeout(t.mkdel(this, function () {
          e.resolve(this.$field);
        }), 0);return e.get_promise();
      }, _update: function _update(e) {
        this.$initializeFromJson(e), this._updateFromJson(e);
      }, _addFieldParams: function _addFieldParams(e) {}, _updateFromJson: null, $initializeFromJson: function $initializeFromJson(e) {
        this.$caption = e.caption, this.$type = a.ApiEnumConverter.convertFilterType(e.filterType), this.$field = null, this.$dataSourceName = e.dataSourceName, this.$fieldRole = a.ApiEnumConverter.convertFieldRole(t.coalesce(e.fieldRole, "unknown")), this.$fieldAggregation = a.ApiEnumConverter.convertFieldAggregation(t.coalesce(e.fieldAggregation, "NONE"));
      } }), t.initClass(W, i, { getIsExcludeMode: function getIsExcludeMode() {
        return this.$isExclude;
      }, getAppliedValues: function getAppliedValues() {
        return this.$appliedValues;
      }, _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      }, $initializeFromJson$1: function $initializeFromJson$1(e) {
        if (this.$isExclude = e.isExclude, t.isValue(e.appliedValues)) {
          this.$appliedValues = [];for (var i = 0; i < e.appliedValues.length; i++) {
            var n = e.appliedValues[i];this.$appliedValues.push(a._Utility.getDataValue(n));
          }
        }
      } }, K), t.initClass(B, i, { getWorkbook: function getWorkbook() {
        return this._impl.get_$workbook();
      }, getUrl: function getUrl() {
        return this._impl.get_$url();
      }, getName: function getName() {
        return this._impl.get_$name();
      }, setName: function setName(e) {
        this._impl.set_$name(e);
      }, getOwnerName: function getOwnerName() {
        return this._impl.get_$ownerName();
      }, getAdvertised: function getAdvertised() {
        return this._impl.get_$advertised();
      }, setAdvertised: function setAdvertised(e) {
        this._impl.set_$advertised(e);
      }, getDefault: function getDefault() {
        return this._impl.get_$isDefault();
      }, saveAsync: function saveAsync() {
        return this._impl.$saveAsync();
      } }), t.initClass(te, i, { getName: function getName() {
        return this._impl.get_name();
      }, getIndex: function getIndex() {
        return this._impl.get_index();
      }, getWorkbook: function getWorkbook() {
        return this._impl.get_workbookImpl().get_workbook();
      }, getSize: function getSize() {
        return this._impl.get_size();
      }, getIsHidden: function getIsHidden() {
        return this._impl.get_isHidden();
      }, getIsActive: function getIsActive() {
        return this._impl.get_isActive();
      }, getSheetType: function getSheetType() {
        return this._impl.get_sheetType();
      }, getUrl: function getUrl() {
        return this._impl.get_url();
      }, changeSizeAsync: function changeSizeAsync(e) {
        return this._impl.changeSizeAsync(e);
      } }), t.initClass(q, i, { getParentStoryPoint: function getParentStoryPoint() {
        return this._impl.get_parentStoryPoint();
      }, getObjects: function getObjects() {
        return this._impl.get_objects()._toApiCollection();
      }, getWorksheets: function getWorksheets() {
        return this._impl.get_worksheets()._toApiCollection();
      } }, te), t.initClass(G, i, { getObjectType: function getObjectType() {
        return this.$zoneInfo.objectType;
      }, getDashboard: function getDashboard() {
        return this.$dashboard;
      }, getWorksheet: function getWorksheet() {
        return this.$worksheet;
      }, getPosition: function getPosition() {
        return this.$zoneInfo.position;
      }, getSize: function getSize() {
        return this.$zoneInfo.size;
      } }), t.initClass(Q, i, { getName: function getName() {
        return this.$impl.get_name();
      }, getFields: function getFields() {
        return this.$impl.get_fields()._toApiCollection();
      }, getIsPrimary: function getIsPrimary() {
        return this.$impl.get_isPrimary();
      } }), t.initClass(J, i, { getDataSource: function getDataSource() {
        return this.$dataSource;
      }, getName: function getName() {
        return this.$name;
      }, getRole: function getRole() {
        return this.$fieldRoleType;
      }, getAggregation: function getAggregation() {
        return this.$fieldAggrType;
      } }), t.initClass(Y, i, { _addFieldParams: function _addFieldParams(e) {
        e["api.filterHierarchicalLevels"] = this.$levels;
      }, _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      }, $initializeFromJson$1: function $initializeFromJson$1(e) {
        this.$levels = e.levels;
      } }, K), t.initClass(X, i, { getName: function getName() {
        return this._impl.get_$name();
      }, getCurrentValue: function getCurrentValue() {
        return this._impl.get_$currentValue();
      }, getDataType: function getDataType() {
        return this._impl.get_$dataType();
      }, getAllowableValuesType: function getAllowableValuesType() {
        return this._impl.get_$allowableValuesType();
      }, getAllowableValues: function getAllowableValues() {
        return this._impl.get_$allowableValues();
      }, getMinValue: function getMinValue() {
        return this._impl.get_$minValue();
      }, getMaxValue: function getMaxValue() {
        return this._impl.get_$maxValue();
      }, getStepSize: function getStepSize() {
        return this._impl.get_$stepSize();
      }, getDateStepPeriod: function getDateStepPeriod() {
        return this._impl.get_$dateStepPeriod();
      } }), t.initClass(Z, i, { getMin: function getMin() {
        return this.$min;
      }, getMax: function getMax() {
        return this.$max;
      }, getIncludeNullValues: function getIncludeNullValues() {
        return this.$includeNullValues;
      }, getDomainMin: function getDomainMin() {
        return this.$domainMin;
      }, getDomainMax: function getDomainMax() {
        return this.$domainMax;
      }, _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      }, $initializeFromJson$1: function $initializeFromJson$1(e) {
        this.$domainMin = a._Utility.getDataValue(e.domainMinValue), this.$domainMax = a._Utility.getDataValue(e.domainMaxValue), this.$min = a._Utility.getDataValue(e.minValue), this.$max = a._Utility.getDataValue(e.maxValue), this.$includeNullValues = e.includeNullValues;
      } }, K), t.initClass(ee, i, { getPeriod: function getPeriod() {
        return this.$periodType;
      }, getRange: function getRange() {
        return this.$rangeType;
      }, getRangeN: function getRangeN() {
        return this.$rangeN;
      }, _updateFromJson: function _updateFromJson(e) {
        this.$initializeFromJson$1(e);
      }, $initializeFromJson$1: function $initializeFromJson$1(e) {
        t.isValue(e.periodType) && (this.$periodType = a.ApiEnumConverter.convertPeriodType(t.unbox(e.periodType))), t.isValue(e.rangeType) && (this.$rangeType = a.ApiEnumConverter.convertDateRange(t.unbox(e.rangeType))), t.isValue(e.rangeN) && (this.$rangeN = t.unbox(e.rangeN));
      } }, K), t.initClass(ie, i, { getName: function getName() {
        return this.$impl.name;
      }, getSheetType: function getSheetType() {
        return this.$impl.sheetType;
      }, getSize: function getSize() {
        return this.$impl.size;
      }, getIndex: function getIndex() {
        return this.$impl.index;
      }, getUrl: function getUrl() {
        return this.$impl.url;
      }, getIsActive: function getIsActive() {
        return this.$impl.isActive;
      }, getIsHidden: function getIsHidden() {
        return this.$impl.isHidden;
      }, getWorkbook: function getWorkbook() {
        return this.$impl.workbook;
      } }), t.initClass(ne, i, { getActiveStoryPoint: function getActiveStoryPoint() {
        return this._impl.get_activeStoryPointImpl().get_storyPoint();
      }, getStoryPointsInfo: function getStoryPointsInfo() {
        return this._impl.get_storyPointsInfo();
      }, activatePreviousStoryPointAsync: function activatePreviousStoryPointAsync() {
        return this._impl.activatePreviousStoryPointAsync();
      }, activateNextStoryPointAsync: function activateNextStoryPointAsync() {
        return this._impl.activateNextStoryPointAsync();
      }, activateStoryPointAsync: function activateStoryPointAsync(e) {
        return this._impl.activateStoryPointAsync(e);
      }, revertStoryPointAsync: function revertStoryPointAsync(e) {
        return this._impl.revertStoryPointAsync(e);
      } }, te), t.initClass(ae, i, { getCaption: function getCaption() {
        return this.$impl.get_caption();
      }, getContainedSheet: function getContainedSheet() {
        return t.isValue(this.$impl.get_containedSheetImpl()) ? this.$impl.get_containedSheetImpl().get_sheet() : null;
      }, getIndex: function getIndex() {
        return this.$impl.get_index();
      }, getIsActive: function getIsActive() {
        return this.$impl.get_isActive();
      }, getIsUpdated: function getIsUpdated() {
        return this.$impl.get_isUpdated();
      }, getParentStory: function getParentStory() {
        return this.$impl.get_parentStoryImpl().get_story();
      } }), t.initClass(re, i, { getCaption: function getCaption() {
        return this._impl.caption;
      }, getIndex: function getIndex() {
        return this._impl.index;
      }, getIsActive: function getIsActive() {
        return this._impl.isActive;
      }, getIsUpdated: function getIsUpdated() {
        return this._impl.isUpdated;
      }, getParentStory: function getParentStory() {
        return this._impl.parentStoryImpl.get_story();
      } }), t.initClass(se, i, { getViz: function getViz() {
        return this._impl.get_viz();
      }, isButtonEnabled: function isButtonEnabled(e) {
        return this._impl.isButtonEnabled(e);
      } }), t.initClass(oe, i, { getMajor: function getMajor() {
        return this.$major;
      }, getMinor: function getMinor() {
        return this.$minor;
      }, getPatch: function getPatch() {
        return this.$patch;
      }, getMetadata: function getMetadata() {
        return this.$metadata;
      }, toString: function toString() {
        var e = this.$major + "." + this.$minor + "." + this.$patch;return t.isValue(this.$metadata) && this.$metadata.length > 0 && (e += "-" + this.$metadata), e;
      } }), t.initClass(le, i, { getAreTabsHidden: function getAreTabsHidden() {
        return this._impl.get_$areTabsHidden();
      }, getIsToolbarHidden: function getIsToolbarHidden() {
        return this._impl.get_$isToolbarHidden();
      }, getIsHidden: function getIsHidden() {
        return this._impl.get_$isHidden();
      }, getInstanceId: function getInstanceId() {
        return this._impl.get_instanceId();
      }, getParentElement: function getParentElement() {
        return this._impl.get_$parentElement();
      }, getUrl: function getUrl() {
        return this._impl.get_$url();
      }, getVizSize: function getVizSize() {
        return this._impl.get_$vizSize();
      }, getWorkbook: function getWorkbook() {
        return this._impl.get_$workbook();
      }, getAreAutomaticUpdatesPaused: function getAreAutomaticUpdatesPaused() {
        return this._impl.get_$areAutomaticUpdatesPaused();
      }, getCurrentUrlAsync: function getCurrentUrlAsync() {
        return this._impl.getCurrentUrlAsync();
      }, addEventListener: function addEventListener(e, t) {
        this._impl.addEventListener(e, t);
      }, removeEventListener: function removeEventListener(e, t) {
        this._impl.removeEventListener(e, t);
      }, dispose: function dispose() {
        this._impl.$dispose();
      }, switchToViz: function switchToViz(e) {
        return this._impl.switchToViz(e);
      }, show: function show() {
        this._impl.$show();
      }, hide: function hide() {
        this._impl.$hide();
      }, showExportDataDialog: function showExportDataDialog(e) {
        this._impl.$showExportDataDialog(e);
      }, showExportCrossTabDialog: function showExportCrossTabDialog(e) {
        this._impl.$showExportCrossTabDialog(e);
      }, showExportImageDialog: function showExportImageDialog() {
        this._impl.$showExportImageDialog();
      }, showExportPDFDialog: function showExportPDFDialog() {
        this._impl.$showExportPDFDialog();
      }, revertAllAsync: function revertAllAsync() {
        return this._impl.$revertAllAsync();
      }, refreshDataAsync: function refreshDataAsync() {
        return this._impl.$refreshDataAsync();
      }, showShareDialog: function showShareDialog() {
        this._impl.$showShareDialog();
      }, showDownloadWorkbookDialog: function showDownloadWorkbookDialog() {
        this._impl.$showDownloadWorkbookDialog();
      }, pauseAutomaticUpdatesAsync: function pauseAutomaticUpdatesAsync() {
        return this._impl.$pauseAutomaticUpdatesAsync();
      }, resumeAutomaticUpdatesAsync: function resumeAutomaticUpdatesAsync() {
        return this._impl.$resumeAutomaticUpdatesAsync();
      }, toggleAutomaticUpdatesAsync: function toggleAutomaticUpdatesAsync() {
        return this._impl.$toggleAutomaticUpdatesAsync();
      }, refreshSize: function refreshSize() {
        this._impl.$refreshSize();
      }, setFrameSize: function setFrameSize(e, t) {
        var i = e,
            n = t;a._Utility.isNumber(e) && (i = e.toString() + "px"), a._Utility.isNumber(t) && (n = t.toString() + "px"), this._impl.$setFrameSizeAndUpdate(i, n);
      }, redoAsync: function redoAsync() {
        return this._impl.$redoAsync();
      }, undoAsync: function undoAsync() {
        return this._impl.$undoAsync();
      } }), t.initClass(ue, i, {}), t.initClass(ce, i, { getViz: function getViz() {
        return this.$workbookImpl.get_viz();
      }, getPublishedSheetsInfo: function getPublishedSheetsInfo() {
        return this.$workbookImpl.get_publishedSheets()._toApiCollection();
      }, getName: function getName() {
        return this.$workbookImpl.get_name();
      }, getActiveSheet: function getActiveSheet() {
        return this.$workbookImpl.get_activeSheetImpl().get_sheet();
      }, getActiveCustomView: function getActiveCustomView() {
        return this.$workbookImpl.get_activeCustomView();
      }, activateSheetAsync: function activateSheetAsync(e) {
        return this.$workbookImpl._setActiveSheetAsync(e);
      }, revertAllAsync: function revertAllAsync() {
        return this.$workbookImpl._revertAllAsync();
      }, getCustomViewsAsync: function getCustomViewsAsync() {
        return this.$workbookImpl.$getCustomViewsAsync();
      }, showCustomViewAsync: function showCustomViewAsync(e) {
        return this.$workbookImpl.$showCustomViewAsync(e);
      }, removeCustomViewAsync: function removeCustomViewAsync(e) {
        return this.$workbookImpl.$removeCustomViewAsync(e);
      }, rememberCustomViewAsync: function rememberCustomViewAsync(e) {
        return this.$workbookImpl.$rememberCustomViewAsync(e);
      }, setActiveCustomViewAsDefaultAsync: function setActiveCustomViewAsDefaultAsync() {
        return this.$workbookImpl.$setActiveCustomViewAsDefaultAsync();
      }, getParametersAsync: function getParametersAsync() {
        return this.$workbookImpl.$getParametersAsync();
      }, changeParameterValueAsync: function changeParameterValueAsync(e, t) {
        return this.$workbookImpl.$changeParameterValueAsync(e, t);
      } }), t.initClass(he, i, { getParentDashboard: function getParentDashboard() {
        return this._impl.get_parentDashboard();
      }, getParentStoryPoint: function getParentStoryPoint() {
        return this._impl.get_parentStoryPoint();
      }, getDataSourcesAsync: function getDataSourcesAsync() {
        return this._impl.$getDataSourcesAsync();
      }, getFilterAsync: function getFilterAsync(e, t) {
        return this._impl.$getFilterAsync(null, e, t);
      }, getFiltersAsync: function getFiltersAsync(e) {
        return this._impl.$getFiltersAsync(e);
      }, applyFilterAsync: function applyFilterAsync(e, t, i, n) {
        return this._impl.$applyFilterAsync(e, t, i, n);
      }, clearFilterAsync: function clearFilterAsync(e) {
        return this._impl.$clearFilterAsync(e);
      }, applyRangeFilterAsync: function applyRangeFilterAsync(e, t) {
        return this._impl.$applyRangeFilterAsync(e, t);
      }, applyRelativeDateFilterAsync: function applyRelativeDateFilterAsync(e, t) {
        return this._impl.$applyRelativeDateFilterAsync(e, t);
      }, applyHierarchicalFilterAsync: function applyHierarchicalFilterAsync(e, t, i, n) {
        return this._impl.$applyHierarchicalFilterAsync(e, t, i, n);
      }, clearSelectedMarksAsync: function clearSelectedMarksAsync() {
        return this._impl.$clearSelectedMarksAsync();
      }, selectMarksAsync: function selectMarksAsync(e, t, i) {
        return this._impl.$selectMarksAsync(e, t, i);
      }, getSelectedMarksAsync: function getSelectedMarksAsync() {
        return this._impl.$getSelectedMarksAsync();
      }, getSummaryDataAsync: function getSummaryDataAsync(e) {
        return this._impl.$getSummaryDataAsync(e);
      }, getUnderlyingDataAsync: function getUnderlyingDataAsync(e) {
        return this._impl.$getUnderlyingDataAsync(e);
      }, clearHighlightedMarksAsync: function clearHighlightedMarksAsync() {
        return this._impl.$clearHighlightedMarksAsync();
      }, highlightMarksAsync: function highlightMarksAsync(e, t) {
        return this._impl.$highlightMarksAsync(e, t);
      }, highlightMarksByPatternMatchAsync: function highlightMarksByPatternMatchAsync(e, t) {
        return this._impl.$highlightMarksByPatternMatchAsync(e, t);
      }, getHighlightedMarksAsync: function getHighlightedMarksAsync() {
        return this._impl.$getHighlightedMarksAsync();
      } }, te), w.$vizs = [], f.noZoneId = 4294967295, C.$regexHierarchicalFieldName = new RegExp("\\[[^\\]]+\\]\\.", "g"), oe.$currentVersion = new oe(2, 2, 2, "null");
  }(), window.tableau = window.tableauSoftware = e.tableauSoftware, tableauSoftware.Promise = a._PromiseImpl, a._Deferred = a._DeferredImpl, a._Collection = a._CollectionImpl, a._ApiBootstrap.initialize(), window.tableau._apiLoaded = !0;
}();