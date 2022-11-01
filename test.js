const Xe = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = e(i);
    fetch(i.href, o);
  }
};
Xe();
function At(t, n) {
  return t == null || n == null
    ? NaN
    : t < n
    ? -1
    : t > n
    ? 1
    : t >= n
    ? 0
    : NaN;
}
function Ve(t, n) {
  return t == null || n == null
    ? NaN
    : n < t
    ? -1
    : n > t
    ? 1
    : n >= t
    ? 0
    : NaN;
}
function re(t) {
  let n, e, r;
  t.length !== 2
    ? ((n = At), (e = (u, s) => At(t(u), s)), (r = (u, s) => t(u) - s))
    : ((n = t === At || t === Ve ? t : Ye), (e = t), (r = t));
  function i(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0) return c;
      do {
        const l = (f + c) >>> 1;
        e(u[l], s) < 0 ? (f = l + 1) : (c = l);
      } while (f < c);
    }
    return f;
  }
  function o(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0) return c;
      do {
        const l = (f + c) >>> 1;
        e(u[l], s) <= 0 ? (f = l + 1) : (c = l);
      } while (f < c);
    }
    return f;
  }
  function a(u, s, f = 0, c = u.length) {
    const l = i(u, s, f, c - 1);
    return l > f && r(u[l - 1], s) > -r(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: a, right: o };
}
function Ye() {
  return 0;
}
function Be(t) {
  return t === null ? NaN : +t;
}
const Ue = re(At),
  Ze = Ue.right;
re(Be).center;
var Ge = Ze;
class En extends Map {
  constructor(n, e = Qe) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: e },
      }),
      n != null)
    )
      for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get($n(this, n));
  }
  has(n) {
    return super.has($n(this, n));
  }
  set(n, e) {
    return super.set(Ke(this, n), e);
  }
  delete(n) {
    return super.delete(We(this, n));
  }
}
function $n({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Ke({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function We({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && ((e = t.get(r)), t.delete(r)), e;
}
function Qe(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Qt = Math.sqrt(50),
  Jt = Math.sqrt(10),
  jt = Math.sqrt(2);
function Je(t, n, e) {
  var r,
    i = -1,
    o,
    a,
    u;
  if (((n = +n), (t = +t), (e = +e), t === n && e > 0)) return [t];
  if (
    ((r = n < t) && ((o = t), (t = n), (n = o)),
    (u = ie(t, n, e)) === 0 || !isFinite(u))
  )
    return [];
  if (u > 0) {
    let s = Math.round(t / u),
      f = Math.round(n / u);
    for (
      s * u < t && ++s, f * u > n && --f, a = new Array((o = f - s + 1));
      ++i < o;

    )
      a[i] = (s + i) * u;
  } else {
    u = -u;
    let s = Math.round(t * u),
      f = Math.round(n * u);
    for (
      s / u < t && ++s, f / u > n && --f, a = new Array((o = f - s + 1));
      ++i < o;

    )
      a[i] = (s + i) / u;
  }
  return r && a.reverse(), a;
}
function ie(t, n, e) {
  var r = (n - t) / Math.max(0, e),
    i = Math.floor(Math.log(r) / Math.LN10),
    o = r / Math.pow(10, i);
  return i >= 0
    ? (o >= Qt ? 10 : o >= Jt ? 5 : o >= jt ? 2 : 1) * Math.pow(10, i)
    : -Math.pow(10, -i) / (o >= Qt ? 10 : o >= Jt ? 5 : o >= jt ? 2 : 1);
}
function je(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e),
    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
    o = r / i;
  return (
    o >= Qt ? (i *= 10) : o >= Jt ? (i *= 5) : o >= jt && (i *= 2),
    n < t ? -i : i
  );
}
function tr(t, n, e) {
  (t = +t),
    (n = +n),
    (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
  for (
    var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i);
    ++r < i;

  )
    o[r] = t + r * e;
  return o;
}
function nr(t) {
  return t;
}
var Yt = 1,
  Bt = 2,
  tn = 3,
  ct = 4,
  Tn = 1e-6;
function er(t) {
  return "translate(" + t + ",0)";
}
function rr(t) {
  return "translate(0," + t + ")";
}
function ir(t) {
  return (n) => +t(n);
}
function or(t, n) {
  return (
    (n = Math.max(0, t.bandwidth() - n * 2) / 2),
    t.round() && (n = Math.round(n)),
    (e) => +t(e) + n
  );
}
function ar() {
  return !this.__axis;
}
function oe(t, n) {
  var e = [],
    r = null,
    i = null,
    o = 6,
    a = 6,
    u = 3,
    s = typeof window != "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
    f = t === Yt || t === ct ? -1 : 1,
    c = t === ct || t === Bt ? "x" : "y",
    l = t === Yt || t === tn ? er : rr;
  function h(d) {
    var p = r == null ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
      g = i == null ? (n.tickFormat ? n.tickFormat.apply(n, e) : nr) : i,
      y = Math.max(o, 0) + u,
      m = n.range(),
      v = +m[0] + s,
      w = +m[m.length - 1] + s,
      b = (n.bandwidth ? or : ir)(n.copy(), s),
      x = d.selection ? d.selection() : d,
      A = x.selectAll(".domain").data([null]),
      k = x.selectAll(".tick").data(p, n).order(),
      N = k.exit(),
      $ = k.enter().append("g").attr("class", "tick"),
      R = k.select("line"),
      _ = k.select("text");
    (A = A.merge(
      A.enter()
        .insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor")
    )),
      (k = k.merge($)),
      (R = R.merge(
        $.append("line")
          .attr("stroke", "currentColor")
          .attr(c + "2", f * o)
      )),
      (_ = _.merge(
        $.append("text")
          .attr("fill", "currentColor")
          .attr(c, f * y)
          .attr("dy", t === Yt ? "0em" : t === tn ? "0.71em" : "0.32em")
      )),
      d !== x &&
        ((A = A.transition(d)),
        (k = k.transition(d)),
        (R = R.transition(d)),
        (_ = _.transition(d)),
        (N = N.transition(d)
          .attr("opacity", Tn)
          .attr("transform", function (S) {
            return isFinite((S = b(S)))
              ? l(S + s)
              : this.getAttribute("transform");
          })),
        $.attr("opacity", Tn).attr("transform", function (S) {
          var C = this.parentNode.__axis;
          return l((C && isFinite((C = C(S))) ? C : b(S)) + s);
        })),
      N.remove(),
      A.attr(
        "d",
        t === ct || t === Bt
          ? a
            ? "M" + f * a + "," + v + "H" + s + "V" + w + "H" + f * a
            : "M" + s + "," + v + "V" + w
          : a
          ? "M" + v + "," + f * a + "V" + s + "H" + w + "V" + f * a
          : "M" + v + "," + s + "H" + w
      ),
      k.attr("opacity", 1).attr("transform", function (S) {
        return l(b(S) + s);
      }),
      R.attr(c + "2", f * o),
      _.attr(c, f * y).text(g),
      x
        .filter(ar)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", t === Bt ? "start" : t === ct ? "end" : "middle"),
      x.each(function () {
        this.__axis = b;
      });
  }
  return (
    (h.scale = function (d) {
      return arguments.length ? ((n = d), h) : n;
    }),
    (h.ticks = function () {
      return (e = Array.from(arguments)), h;
    }),
    (h.tickArguments = function (d) {
      return arguments.length
        ? ((e = d == null ? [] : Array.from(d)), h)
        : e.slice();
    }),
    (h.tickValues = function (d) {
      return arguments.length
        ? ((r = d == null ? null : Array.from(d)), h)
        : r && r.slice();
    }),
    (h.tickFormat = function (d) {
      return arguments.length ? ((i = d), h) : i;
    }),
    (h.tickSize = function (d) {
      return arguments.length ? ((o = a = +d), h) : o;
    }),
    (h.tickSizeInner = function (d) {
      return arguments.length ? ((o = +d), h) : o;
    }),
    (h.tickSizeOuter = function (d) {
      return arguments.length ? ((a = +d), h) : a;
    }),
    (h.tickPadding = function (d) {
      return arguments.length ? ((u = +d), h) : u;
    }),
    (h.offset = function (d) {
      return arguments.length ? ((s = +d), h) : s;
    }),
    h
  );
}
function dn(t) {
  return oe(tn, t);
}
function St(t) {
  return oe(ct, t);
}
var ur = { value: () => {} };
function ae() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new kt(e);
}
function kt(t) {
  this._ = t;
}
function sr(t, n) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var r = "",
        i = e.indexOf(".");
      if (
        (i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))),
        e && !n.hasOwnProperty(e))
      )
        throw new Error("unknown type: " + e);
      return { type: e, name: r };
    });
}
kt.prototype = ae.prototype = {
  constructor: kt,
  on: function (t, n) {
    var e = this._,
      r = sr(t + "", e),
      i,
      o = -1,
      a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = fr(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if ((i = (t = r[o]).type)) e[i] = Rn(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Rn(e[i], t.name, null);
    return this;
  },
  copy: function () {
    var t = {},
      n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new kt(t);
  },
  call: function (t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function (t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  },
};
function fr(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n) return i.value;
}
function Rn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      (t[r] = ur), (t = t.slice(0, r).concat(t.slice(r + 1)));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var nn = "http://www.w3.org/1999/xhtml",
  In = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: nn,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
function zt(t) {
  var n = (t += ""),
    e = n.indexOf(":");
  return (
    e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)),
    In.hasOwnProperty(n) ? { space: In[n], local: t } : t
  );
}
function cr(t) {
  return function () {
    var n = this.ownerDocument,
      e = this.namespaceURI;
    return e === nn && n.documentElement.namespaceURI === nn
      ? n.createElement(t)
      : n.createElementNS(e, t);
  };
}
function lr(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ue(t) {
  var n = zt(t);
  return (n.local ? lr : cr)(n);
}
function hr() {}
function pn(t) {
  return t == null
    ? hr
    : function () {
        return this.querySelector(t);
      };
}
function dr(t) {
  typeof t != "function" && (t = pn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (
      var o = n[i], a = o.length, u = (r[i] = new Array(a)), s, f, c = 0;
      c < a;
      ++c
    )
      (s = o[c]) &&
        (f = t.call(s, s.__data__, c, o)) &&
        ("__data__" in s && (f.__data__ = s.__data__), (u[c] = f));
  return new F(r, this._parents);
}
function se(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function pr() {
  return [];
}
function fe(t) {
  return t == null
    ? pr
    : function () {
        return this.querySelectorAll(t);
      };
}
function gr(t) {
  return function () {
    return se(t.apply(this, arguments));
  };
}
function mr(t) {
  typeof t == "function" ? (t = gr(t)) : (t = fe(t));
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && (r.push(t.call(s, s.__data__, f, a)), i.push(s));
  return new F(r, i);
}
function ce(t) {
  return function () {
    return this.matches(t);
  };
}
function le(t) {
  return function (n) {
    return n.matches(t);
  };
}
var yr = Array.prototype.find;
function _r(t) {
  return function () {
    return yr.call(this.children, t);
  };
}
function vr() {
  return this.firstElementChild;
}
function wr(t) {
  return this.select(t == null ? vr : _r(typeof t == "function" ? t : le(t)));
}
var xr = Array.prototype.filter;
function br() {
  return Array.from(this.children);
}
function Mr(t) {
  return function () {
    return xr.call(this.children, t);
  };
}
function Ar(t) {
  return this.selectAll(
    t == null ? br : Mr(typeof t == "function" ? t : le(t))
  );
}
function kr(t) {
  typeof t != "function" && (t = ce(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = (r[i] = []), s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new F(r, this._parents);
}
function he(t) {
  return new Array(t.length);
}
function Nr() {
  return new F(this._enter || this._groups.map(he), this._parents);
}
function Et(t, n) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = n);
}
Et.prototype = {
  constructor: Et,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
function Cr(t) {
  return function () {
    return t;
  };
}
function Sr(t, n, e, r, i, o) {
  for (var a = 0, u, s = n.length, f = o.length; a < f; ++a)
    (u = n[a]) ? ((u.__data__ = o[a]), (r[a] = u)) : (e[a] = new Et(t, o[a]));
  for (; a < s; ++a) (u = n[a]) && (i[a] = u);
}
function Er(t, n, e, r, i, o, a) {
  var u,
    s,
    f = new Map(),
    c = n.length,
    l = o.length,
    h = new Array(c),
    d;
  for (u = 0; u < c; ++u)
    (s = n[u]) &&
      ((h[u] = d = a.call(s, s.__data__, u, n) + ""),
      f.has(d) ? (i[u] = s) : f.set(d, s));
  for (u = 0; u < l; ++u)
    (d = a.call(t, o[u], u, o) + ""),
      (s = f.get(d))
        ? ((r[u] = s), (s.__data__ = o[u]), f.delete(d))
        : (e[u] = new Et(t, o[u]));
  for (u = 0; u < c; ++u) (s = n[u]) && f.get(h[u]) === s && (i[u] = s);
}
function $r(t) {
  return t.__data__;
}
function Tr(t, n) {
  if (!arguments.length) return Array.from(this, $r);
  var e = n ? Er : Sr,
    r = this._parents,
    i = this._groups;
  typeof t != "function" && (t = Cr(t));
  for (
    var o = i.length,
      a = new Array(o),
      u = new Array(o),
      s = new Array(o),
      f = 0;
    f < o;
    ++f
  ) {
    var c = r[f],
      l = i[f],
      h = l.length,
      d = Rr(t.call(c, c && c.__data__, f, r)),
      p = d.length,
      g = (u[f] = new Array(p)),
      y = (a[f] = new Array(p)),
      m = (s[f] = new Array(h));
    e(c, l, g, y, m, d, n);
    for (var v = 0, w = 0, b, x; v < p; ++v)
      if ((b = g[v])) {
        for (v >= w && (w = v + 1); !(x = y[w]) && ++w < p; );
        b._next = x || null;
      }
  }
  return (a = new F(a, r)), (a._enter = u), (a._exit = s), a;
}
function Rr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ir() {
  return new F(this._exit || this._groups.map(he), this._parents);
}
function Fr(t, n, e) {
  var r = this.enter(),
    i = this,
    o = this.exit();
  return (
    typeof t == "function"
      ? ((r = t(r)), r && (r = r.selection()))
      : (r = r.append(t + "")),
    n != null && ((i = n(i)), i && (i = i.selection())),
    e == null ? o.remove() : e(o),
    r && i ? r.merge(i).order() : i
  );
}
function Pr(t) {
  for (
    var n = t.selection ? t.selection() : t,
      e = this._groups,
      r = n._groups,
      i = e.length,
      o = r.length,
      a = Math.min(i, o),
      u = new Array(i),
      s = 0;
    s < a;
    ++s
  )
    for (
      var f = e[s], c = r[s], l = f.length, h = (u[s] = new Array(l)), d, p = 0;
      p < l;
      ++p
    )
      (d = f[p] || c[p]) && (h[p] = d);
  for (; s < i; ++s) u[s] = e[s];
  return new F(u, this._parents);
}
function Lr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) &&
        (o &&
          a.compareDocumentPosition(o) ^ 4 &&
          o.parentNode.insertBefore(a, o),
        (o = a));
  return this;
}
function Or(t) {
  t || (t = zr);
  function n(l, h) {
    return l && h ? t(l.__data__, h.__data__) : !l - !h;
  }
  for (
    var e = this._groups, r = e.length, i = new Array(r), o = 0;
    o < r;
    ++o
  ) {
    for (
      var a = e[o], u = a.length, s = (i[o] = new Array(u)), f, c = 0;
      c < u;
      ++c
    )
      (f = a[c]) && (s[c] = f);
    s.sort(n);
  }
  return new F(i, this._parents).order();
}
function zr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function qr() {
  var t = arguments[0];
  return (arguments[0] = this), t.apply(null, arguments), this;
}
function Dr() {
  return Array.from(this);
}
function Hr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Xr() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Vr() {
  return !this.node();
}
function Yr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function Br(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Ur(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Zr(t, n) {
  return function () {
    this.setAttribute(t, n);
  };
}
function Gr(t, n) {
  return function () {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Kr(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Wr(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    e == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, e);
  };
}
function Qr(t, n) {
  var e = zt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each(
    (n == null
      ? e.local
        ? Ur
        : Br
      : typeof n == "function"
      ? e.local
        ? Wr
        : Kr
      : e.local
      ? Gr
      : Zr)(e, n)
  );
}
function de(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function Jr(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function jr(t, n, e) {
  return function () {
    this.style.setProperty(t, n, e);
  };
}
function ti(t, n, e) {
  return function () {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ni(t, n, e) {
  return arguments.length > 1
    ? this.each(
        (n == null ? Jr : typeof n == "function" ? ti : jr)(
          t,
          n,
          e == null ? "" : e
        )
      )
    : ot(this.node(), t);
}
function ot(t, n) {
  return (
    t.style.getPropertyValue(n) ||
    de(t).getComputedStyle(t, null).getPropertyValue(n)
  );
}
function ei(t) {
  return function () {
    delete this[t];
  };
}
function ri(t, n) {
  return function () {
    this[t] = n;
  };
}
function ii(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : (this[t] = e);
  };
}
function oi(t, n) {
  return arguments.length > 1
    ? this.each((n == null ? ei : typeof n == "function" ? ii : ri)(t, n))
    : this.node()[t];
}
function pe(t) {
  return t.trim().split(/^|\s+/);
}
function gn(t) {
  return t.classList || new ge(t);
}
function ge(t) {
  (this._node = t), (this._names = pe(t.getAttribute("class") || ""));
}
ge.prototype = {
  add: function (t) {
    var n = this._names.indexOf(t);
    n < 0 &&
      (this._names.push(t),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (t) {
    var n = this._names.indexOf(t);
    n >= 0 &&
      (this._names.splice(n, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
function me(t, n) {
  for (var e = gn(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ye(t, n) {
  for (var e = gn(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ai(t) {
  return function () {
    me(this, t);
  };
}
function ui(t) {
  return function () {
    ye(this, t);
  };
}
function si(t, n) {
  return function () {
    (n.apply(this, arguments) ? me : ye)(this, t);
  };
}
function fi(t, n) {
  var e = pe(t + "");
  if (arguments.length < 2) {
    for (var r = gn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? si : n ? ai : ui)(e, n));
}
function ci() {
  this.textContent = "";
}
function li(t) {
  return function () {
    this.textContent = t;
  };
}
function hi(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function di(t) {
  return arguments.length
    ? this.each(t == null ? ci : (typeof t == "function" ? hi : li)(t))
    : this.node().textContent;
}
function pi() {
  this.innerHTML = "";
}
function gi(t) {
  return function () {
    this.innerHTML = t;
  };
}
function mi(t) {
  return function () {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function yi(t) {
  return arguments.length
    ? this.each(t == null ? pi : (typeof t == "function" ? mi : gi)(t))
    : this.node().innerHTML;
}
function _i() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function vi() {
  return this.each(_i);
}
function wi() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xi() {
  return this.each(wi);
}
function bi(t) {
  var n = typeof t == "function" ? t : ue(t);
  return this.select(function () {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Mi() {
  return null;
}
function Ai(t, n) {
  var e = typeof t == "function" ? t : ue(t),
    r = n == null ? Mi : typeof n == "function" ? n : pn(n);
  return this.select(function () {
    return this.insertBefore(
      e.apply(this, arguments),
      r.apply(this, arguments) || null
    );
  });
}
function ki() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ni() {
  return this.each(ki);
}
function Ci() {
  var t = this.cloneNode(!1),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Si() {
  var t = this.cloneNode(!0),
    n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ei(t) {
  return this.select(t ? Si : Ci);
}
function $i(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ti(t) {
  return function (n) {
    t.call(this, n, this.__data__);
  };
}
function Ri(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var e = "",
        r = n.indexOf(".");
      return (
        r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))),
        { type: n, name: e }
      );
    });
}
function Ii(t) {
  return function () {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        (o = n[e]),
          (!t.type || o.type === t.type) && o.name === t.name
            ? this.removeEventListener(o.type, o.listener, o.options)
            : (n[++r] = o);
      ++r ? (n.length = r) : delete this.__on;
    }
  };
}
function Fi(t, n, e) {
  return function () {
    var r = this.__on,
      i,
      o = Ti(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = o), (i.options = e)),
            (i.value = n);
          return;
        }
    }
    this.addEventListener(t.type, o, e),
      (i = { type: t.type, name: t.name, value: n, listener: o, options: e }),
      r ? r.push(i) : (this.__on = [i]);
  };
}
function Pi(t, n, e) {
  var r = Ri(t + ""),
    i,
    o = r.length,
    a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var s = 0, f = u.length, c; s < f; ++s)
        for (i = 0, c = u[s]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name) return c.value;
    }
    return;
  }
  for (u = n ? Fi : Ii, i = 0; i < o; ++i) this.each(u(r[i], n, e));
  return this;
}
function _e(t, n, e) {
  var r = de(t),
    i = r.CustomEvent;
  typeof i == "function"
    ? (i = new i(n, e))
    : ((i = r.document.createEvent("Event")),
      e
        ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
        : i.initEvent(n, !1, !1)),
    t.dispatchEvent(i);
}
function Li(t, n) {
  return function () {
    return _e(this, t, n);
  };
}
function Oi(t, n) {
  return function () {
    return _e(this, t, n.apply(this, arguments));
  };
}
function zi(t, n) {
  return this.each((typeof n == "function" ? Oi : Li)(t, n));
}
function* qi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var mn = [null];
function F(t, n) {
  (this._groups = t), (this._parents = n);
}
function yt() {
  return new F([[document.documentElement]], mn);
}
function Di() {
  return this;
}
F.prototype = yt.prototype = {
  constructor: F,
  select: dr,
  selectAll: mr,
  selectChild: wr,
  selectChildren: Ar,
  filter: kr,
  data: Tr,
  enter: Nr,
  exit: Ir,
  join: Fr,
  merge: Pr,
  selection: Di,
  order: Lr,
  sort: Or,
  call: qr,
  nodes: Dr,
  node: Hr,
  size: Xr,
  empty: Vr,
  each: Yr,
  attr: Qr,
  style: ni,
  property: oi,
  classed: fi,
  text: di,
  html: yi,
  raise: vi,
  lower: xi,
  append: bi,
  insert: Ai,
  remove: Ni,
  clone: Ei,
  datum: $i,
  on: Pi,
  dispatch: zi,
  [Symbol.iterator]: qi,
};
function B(t) {
  return typeof t == "string"
    ? new F([[document.querySelector(t)]], [document.documentElement])
    : new F([[t]], mn);
}
function Hi(t) {
  return typeof t == "string"
    ? new F([document.querySelectorAll(t)], [document.documentElement])
    : new F([se(t)], mn);
}
function yn(t, n, e) {
  (t.prototype = n.prototype = e), (e.constructor = t);
}
function ve(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function _t() {}
var pt = 0.7,
  $t = 1 / pt,
  it = "\\s*([+-]?\\d+)\\s*",
  gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Xi = /^#([0-9a-f]{3,8})$/,
  Vi = new RegExp(`^rgb\\(${it},${it},${it}\\)$`),
  Yi = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`),
  Bi = new RegExp(`^rgba\\(${it},${it},${it},${gt}\\)$`),
  Ui = new RegExp(`^rgba\\(${Y},${Y},${Y},${gt}\\)$`),
  Zi = new RegExp(`^hsl\\(${gt},${Y},${Y}\\)$`),
  Gi = new RegExp(`^hsla\\(${gt},${Y},${Y},${gt}\\)$`),
  Fn = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
yn(_t, j, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pn,
  formatHex: Pn,
  formatHex8: Ki,
  formatHsl: Wi,
  formatRgb: Ln,
  toString: Ln,
});
function Pn() {
  return this.rgb().formatHex();
}
function Ki() {
  return this.rgb().formatHex8();
}
function Wi() {
  return we(this).formatHsl();
}
function Ln() {
  return this.rgb().formatRgb();
}
function j(t) {
  var n, e;
  return (
    (t = (t + "").trim().toLowerCase()),
    (n = Xi.exec(t))
      ? ((e = n[1].length),
        (n = parseInt(n[1], 16)),
        e === 6
          ? On(n)
          : e === 3
          ? new L(
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              ((n & 15) << 4) | (n & 15),
              1
            )
          : e === 8
          ? wt(
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              (n & 255) / 255
            )
          : e === 4
          ? wt(
              ((n >> 12) & 15) | ((n >> 8) & 240),
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              (((n & 15) << 4) | (n & 15)) / 255
            )
          : null)
      : (n = Vi.exec(t))
      ? new L(n[1], n[2], n[3], 1)
      : (n = Yi.exec(t))
      ? new L((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
      : (n = Bi.exec(t))
      ? wt(n[1], n[2], n[3], n[4])
      : (n = Ui.exec(t))
      ? wt((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
      : (n = Zi.exec(t))
      ? Dn(n[1], n[2] / 100, n[3] / 100, 1)
      : (n = Gi.exec(t))
      ? Dn(n[1], n[2] / 100, n[3] / 100, n[4])
      : Fn.hasOwnProperty(t)
      ? On(Fn[t])
      : t === "transparent"
      ? new L(NaN, NaN, NaN, 0)
      : null
  );
}
function On(t) {
  return new L((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function wt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function Qi(t) {
  return (
    t instanceof _t || (t = j(t)),
    t ? ((t = t.rgb()), new L(t.r, t.g, t.b, t.opacity)) : new L()
  );
}
function en(t, n, e, r) {
  return arguments.length === 1 ? Qi(t) : new L(t, n, e, r == null ? 1 : r);
}
function L(t, n, e, r) {
  (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
}
yn(
  L,
  en,
  ve(_t, {
    brighter(t) {
      return (
        (t = t == null ? $t : Math.pow($t, t)),
        new L(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? pt : Math.pow(pt, t)),
        new L(this.r * t, this.g * t, this.b * t, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new L(J(this.r), J(this.g), J(this.b), Tt(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: zn,
    formatHex: zn,
    formatHex8: Ji,
    formatRgb: qn,
    toString: qn,
  })
);
function zn() {
  return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}`;
}
function Ji() {
  return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}${Q(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function qn() {
  const t = Tt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${J(this.r)}, ${J(this.g)}, ${J(
    this.b
  )}${t === 1 ? ")" : `, ${t})`}`;
}
function Tt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function J(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Q(t) {
  return (t = J(t)), (t < 16 ? "0" : "") + t.toString(16);
}
function Dn(t, n, e, r) {
  return (
    r <= 0
      ? (t = n = e = NaN)
      : e <= 0 || e >= 1
      ? (t = n = NaN)
      : n <= 0 && (t = NaN),
    new H(t, n, e, r)
  );
}
function we(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if ((t instanceof _t || (t = j(t)), !t)) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var n = t.r / 255,
    e = t.g / 255,
    r = t.b / 255,
    i = Math.min(n, e, r),
    o = Math.max(n, e, r),
    a = NaN,
    u = o - i,
    s = (o + i) / 2;
  return (
    u
      ? (n === o
          ? (a = (e - r) / u + (e < r) * 6)
          : e === o
          ? (a = (r - n) / u + 2)
          : (a = (n - e) / u + 4),
        (u /= s < 0.5 ? o + i : 2 - o - i),
        (a *= 60))
      : (u = s > 0 && s < 1 ? 0 : a),
    new H(a, u, s, t.opacity)
  );
}
function ji(t, n, e, r) {
  return arguments.length === 1 ? we(t) : new H(t, n, e, r == null ? 1 : r);
}
function H(t, n, e, r) {
  (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
}
yn(
  H,
  ji,
  ve(_t, {
    brighter(t) {
      return (
        (t = t == null ? $t : Math.pow($t, t)),
        new H(this.h, this.s, this.l * t, this.opacity)
      );
    },
    darker(t) {
      return (
        (t = t == null ? pt : Math.pow(pt, t)),
        new H(this.h, this.s, this.l * t, this.opacity)
      );
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        e = this.l,
        r = e + (e < 0.5 ? e : 1 - e) * n,
        i = 2 * e - r;
      return new L(
        Ut(t >= 240 ? t - 240 : t + 120, i, r),
        Ut(t, i, r),
        Ut(t < 120 ? t + 240 : t - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new H(Hn(this.h), xt(this.s), xt(this.l), Tt(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const t = Tt(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${Hn(this.h)}, ${
        xt(this.s) * 100
      }%, ${xt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    },
  })
);
function Hn(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function xt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ut(t, n, e) {
  return (
    (t < 60
      ? n + ((e - n) * t) / 60
      : t < 180
      ? e
      : t < 240
      ? n + ((e - n) * (240 - t)) / 60
      : n) * 255
  );
}
var _n = (t) => () => t;
function to(t, n) {
  return function (e) {
    return t + e * n;
  };
}
function no(t, n, e) {
  return (
    (t = Math.pow(t, e)),
    (n = Math.pow(n, e) - t),
    (e = 1 / e),
    function (r) {
      return Math.pow(t + r * n, e);
    }
  );
}
function eo(t) {
  return (t = +t) == 1
    ? xe
    : function (n, e) {
        return e - n ? no(n, e, t) : _n(isNaN(n) ? e : n);
      };
}
function xe(t, n) {
  var e = n - t;
  return e ? to(t, e) : _n(isNaN(t) ? n : t);
}
var Rt = (function t(n) {
  var e = eo(n);
  function r(i, o) {
    var a = e((i = en(i)).r, (o = en(o)).r),
      u = e(i.g, o.g),
      s = e(i.b, o.b),
      f = xe(i.opacity, o.opacity);
    return function (c) {
      return (
        (i.r = a(c)), (i.g = u(c)), (i.b = s(c)), (i.opacity = f(c)), i + ""
      );
    };
  }
  return (r.gamma = t), r;
})(1);
function ro(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0,
    r = n.slice(),
    i;
  return function (o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function io(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function oo(t, n) {
  var e = n ? n.length : 0,
    r = t ? Math.min(e, t.length) : 0,
    i = new Array(r),
    o = new Array(e),
    a;
  for (a = 0; a < r; ++a) i[a] = vn(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function (u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function ao(t, n) {
  var e = new Date();
  return (
    (t = +t),
    (n = +n),
    function (r) {
      return e.setTime(t * (1 - r) + n * r), e;
    }
  );
}
function D(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return t * (1 - e) + n * e;
    }
  );
}
function uo(t, n) {
  var e = {},
    r = {},
    i;
  (t === null || typeof t != "object") && (t = {}),
    (n === null || typeof n != "object") && (n = {});
  for (i in n) i in t ? (e[i] = vn(t[i], n[i])) : (r[i] = n[i]);
  return function (o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Zt = new RegExp(rn.source, "g");
function so(t) {
  return function () {
    return t;
  };
}
function fo(t) {
  return function (n) {
    return t(n) + "";
  };
}
function be(t, n) {
  var e = (rn.lastIndex = Zt.lastIndex = 0),
    r,
    i,
    o,
    a = -1,
    u = [],
    s = [];
  for (t = t + "", n = n + ""; (r = rn.exec(t)) && (i = Zt.exec(n)); )
    (o = i.index) > e &&
      ((o = n.slice(e, o)), u[a] ? (u[a] += o) : (u[++a] = o)),
      (r = r[0]) === (i = i[0])
        ? u[a]
          ? (u[a] += i)
          : (u[++a] = i)
        : ((u[++a] = null), s.push({ i: a, x: D(r, i) })),
      (e = Zt.lastIndex);
  return (
    e < n.length && ((o = n.slice(e)), u[a] ? (u[a] += o) : (u[++a] = o)),
    u.length < 2
      ? s[0]
        ? fo(s[0].x)
        : so(n)
      : ((n = s.length),
        function (f) {
          for (var c = 0, l; c < n; ++c) u[(l = s[c]).i] = l.x(f);
          return u.join("");
        })
  );
}
function vn(t, n) {
  var e = typeof n,
    r;
  return n == null || e === "boolean"
    ? _n(n)
    : (e === "number"
        ? D
        : e === "string"
        ? (r = j(n))
          ? ((n = r), Rt)
          : be
        : n instanceof j
        ? Rt
        : n instanceof Date
        ? ao
        : io(n)
        ? ro
        : Array.isArray(n)
        ? oo
        : (typeof n.valueOf != "function" && typeof n.toString != "function") ||
          isNaN(n)
        ? uo
        : D)(t, n);
}
function co(t, n) {
  return (
    (t = +t),
    (n = +n),
    function (e) {
      return Math.round(t * (1 - e) + n * e);
    }
  );
}
var Xn = 180 / Math.PI,
  on = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Me(t, n, e, r, i, o) {
  var a, u, s;
  return (
    (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
    (s = t * e + n * r) && ((e -= t * s), (r -= n * s)),
    (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (s /= u)),
    t * r < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * Xn,
      skewX: Math.atan(s) * Xn,
      scaleX: a,
      scaleY: u,
    }
  );
}
var bt;
function lo(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    t + ""
  );
  return n.isIdentity ? on : Me(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ho(t) {
  return t == null ||
    (bt || (bt = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    bt.setAttribute("transform", t),
    !(t = bt.transform.baseVal.consolidate()))
    ? on
    : ((t = t.matrix), Me(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ae(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, c, l, h, d, p) {
    if (f !== l || c !== h) {
      var g = d.push("translate(", null, n, null, e);
      p.push({ i: g - 4, x: D(f, l) }, { i: g - 2, x: D(c, h) });
    } else (l || h) && d.push("translate(" + l + n + h + e);
  }
  function a(f, c, l, h) {
    f !== c
      ? (f - c > 180 ? (c += 360) : c - f > 180 && (f += 360),
        h.push({ i: l.push(i(l) + "rotate(", null, r) - 2, x: D(f, c) }))
      : c && l.push(i(l) + "rotate(" + c + r);
  }
  function u(f, c, l, h) {
    f !== c
      ? h.push({ i: l.push(i(l) + "skewX(", null, r) - 2, x: D(f, c) })
      : c && l.push(i(l) + "skewX(" + c + r);
  }
  function s(f, c, l, h, d, p) {
    if (f !== l || c !== h) {
      var g = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: g - 4, x: D(f, l) }, { i: g - 2, x: D(c, h) });
    } else (l !== 1 || h !== 1) && d.push(i(d) + "scale(" + l + "," + h + ")");
  }
  return function (f, c) {
    var l = [],
      h = [];
    return (
      (f = t(f)),
      (c = t(c)),
      o(f.translateX, f.translateY, c.translateX, c.translateY, l, h),
      a(f.rotate, c.rotate, l, h),
      u(f.skewX, c.skewX, l, h),
      s(f.scaleX, f.scaleY, c.scaleX, c.scaleY, l, h),
      (f = c = null),
      function (d) {
        for (var p = -1, g = h.length, y; ++p < g; ) l[(y = h[p]).i] = y.x(d);
        return l.join("");
      }
    );
  };
}
var po = Ae(lo, "px, ", "px)", "deg)"),
  go = Ae(ho, ", ", ")", ")"),
  at = 0,
  lt = 0,
  st = 0,
  ke = 1e3,
  It,
  ht,
  Ft = 0,
  tt = 0,
  qt = 0,
  mt = typeof performance == "object" && performance.now ? performance : Date,
  Ne =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function wn() {
  return tt || (Ne(mo), (tt = mt.now() + qt));
}
function mo() {
  tt = 0;
}
function Pt() {
  this._call = this._time = this._next = null;
}
Pt.prototype = Ce.prototype = {
  constructor: Pt,
  restart: function (t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    (e = (e == null ? wn() : +e) + (n == null ? 0 : +n)),
      !this._next &&
        ht !== this &&
        (ht ? (ht._next = this) : (It = this), (ht = this)),
      (this._call = t),
      (this._time = e),
      an();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), an());
  },
};
function Ce(t, n, e) {
  var r = new Pt();
  return r.restart(t, n, e), r;
}
function yo() {
  wn(), ++at;
  for (var t = It, n; t; )
    (n = tt - t._time) >= 0 && t._call.call(void 0, n), (t = t._next);
  --at;
}
function Vn() {
  (tt = (Ft = mt.now()) + qt), (at = lt = 0);
  try {
    yo();
  } finally {
    (at = 0), vo(), (tt = 0);
  }
}
function _o() {
  var t = mt.now(),
    n = t - Ft;
  n > ke && ((qt -= n), (Ft = t));
}
function vo() {
  for (var t, n = It, e, r = 1 / 0; n; )
    n._call
      ? (r > n._time && (r = n._time), (t = n), (n = n._next))
      : ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (It = e)));
  (ht = t), an(r);
}
function an(t) {
  if (!at) {
    lt && (lt = clearTimeout(lt));
    var n = t - tt;
    n > 24
      ? (t < 1 / 0 && (lt = setTimeout(Vn, t - mt.now() - qt)),
        st && (st = clearInterval(st)))
      : (st || ((Ft = mt.now()), (st = setInterval(_o, ke))), (at = 1), Ne(Vn));
  }
}
function Yn(t, n, e) {
  var r = new Pt();
  return (
    (n = n == null ? 0 : +n),
    r.restart(
      (i) => {
        r.stop(), t(i + n);
      },
      n,
      e
    ),
    r
  );
}
var wo = ae("start", "end", "cancel", "interrupt"),
  xo = [],
  Se = 0,
  Bn = 1,
  un = 2,
  Nt = 3,
  Un = 4,
  sn = 5,
  Ct = 6;
function Dt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  bo(t, e, {
    name: n,
    index: r,
    group: i,
    on: wo,
    tween: xo,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Se,
  });
}
function xn(t, n) {
  var e = X(t, n);
  if (e.state > Se) throw new Error("too late; already scheduled");
  return e;
}
function U(t, n) {
  var e = X(t, n);
  if (e.state > Nt) throw new Error("too late; already running");
  return e;
}
function X(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function bo(t, n, e) {
  var r = t.__transition,
    i;
  (r[n] = e), (e.timer = Ce(o, 0, e.time));
  function o(f) {
    (e.state = Bn),
      e.timer.restart(a, e.delay, e.time),
      e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var c, l, h, d;
    if (e.state !== Bn) return s();
    for (c in r)
      if (((d = r[c]), d.name === e.name)) {
        if (d.state === Nt) return Yn(a);
        d.state === Un
          ? ((d.state = Ct),
            d.timer.stop(),
            d.on.call("interrupt", t, t.__data__, d.index, d.group),
            delete r[c])
          : +c < n &&
            ((d.state = Ct),
            d.timer.stop(),
            d.on.call("cancel", t, t.__data__, d.index, d.group),
            delete r[c]);
      }
    if (
      (Yn(function () {
        e.state === Nt &&
          ((e.state = Un), e.timer.restart(u, e.delay, e.time), u(f));
      }),
      (e.state = un),
      e.on.call("start", t, t.__data__, e.index, e.group),
      e.state === un)
    ) {
      for (
        e.state = Nt, i = new Array((h = e.tween.length)), c = 0, l = -1;
        c < h;
        ++c
      )
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) &&
          (i[++l] = d);
      i.length = l + 1;
    }
  }
  function u(f) {
    for (
      var c =
          f < e.duration
            ? e.ease.call(null, f / e.duration)
            : (e.timer.restart(s), (e.state = sn), 1),
        l = -1,
        h = i.length;
      ++l < h;

    )
      i[l].call(t, c);
    e.state === sn && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    (e.state = Ct), e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Mo(t, n) {
  var e = t.__transition,
    r,
    i,
    o = !0,
    a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      (i = r.state > un && r.state < sn),
        (r.state = Ct),
        r.timer.stop(),
        r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group),
        delete e[a];
    }
    o && delete t.__transition;
  }
}
function Ao(t) {
  return this.each(function () {
    Mo(this, t);
  });
}
function ko(t, n) {
  var e, r;
  return function () {
    var i = U(this, t),
      o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          (r = r.slice()), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function No(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function () {
    var o = U(this, t),
      a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, s = 0, f = i.length; s < f; ++s)
        if (i[s].name === n) {
          i[s] = u;
          break;
        }
      s === f && i.push(u);
    }
    o.tween = i;
  };
}
function Co(t, n) {
  var e = this._id;
  if (((t += ""), arguments.length < 2)) {
    for (var r = X(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t) return a.value;
    return null;
  }
  return this.each((n == null ? ko : No)(e, t, n));
}
function bn(t, n, e) {
  var r = t._id;
  return (
    t.each(function () {
      var i = U(this, r);
      (i.value || (i.value = {}))[n] = e.apply(this, arguments);
    }),
    function (i) {
      return X(i, r).value[n];
    }
  );
}
function Ee(t, n) {
  var e;
  return (
    typeof n == "number"
      ? D
      : n instanceof j
      ? Rt
      : (e = j(n))
      ? ((n = e), Rt)
      : be
  )(t, n);
}
function So(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function Eo(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function $o(t, n, e) {
  var r,
    i = e + "",
    o;
  return function () {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : (o = n((r = a), e));
  };
}
function To(t, n, e) {
  var r,
    i = e + "",
    o;
  return function () {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : (o = n((r = a), e));
  };
}
function Ro(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u = e(this),
      s;
    return u == null
      ? void this.removeAttribute(t)
      : ((a = this.getAttribute(t)),
        (s = u + ""),
        a === s
          ? null
          : a === r && s === i
          ? o
          : ((i = s), (o = n((r = a), u))));
  };
}
function Io(t, n, e) {
  var r, i, o;
  return function () {
    var a,
      u = e(this),
      s;
    return u == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((a = this.getAttributeNS(t.space, t.local)),
        (s = u + ""),
        a === s
          ? null
          : a === r && s === i
          ? o
          : ((i = s), (o = n((r = a), u))));
  };
}
function Fo(t, n) {
  var e = zt(t),
    r = e === "transform" ? go : Ee;
  return this.attrTween(
    t,
    typeof n == "function"
      ? (e.local ? Io : Ro)(e, r, bn(this, "attr." + t, n))
      : n == null
      ? (e.local ? Eo : So)(e)
      : (e.local ? To : $o)(e, r, n)
  );
}
function Po(t, n) {
  return function (e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Lo(t, n) {
  return function (e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Oo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Lo(t, o)), e;
  }
  return (i._value = n), i;
}
function zo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Po(t, o)), e;
  }
  return (i._value = n), i;
}
function qo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = zt(t);
  return this.tween(e, (r.local ? Oo : zo)(r, n));
}
function Do(t, n) {
  return function () {
    xn(this, t).delay = +n.apply(this, arguments);
  };
}
function Ho(t, n) {
  return (
    (n = +n),
    function () {
      xn(this, t).delay = n;
    }
  );
}
function Xo(t) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Do : Ho)(n, t))
    : X(this.node(), n).delay;
}
function Vo(t, n) {
  return function () {
    U(this, t).duration = +n.apply(this, arguments);
  };
}
function Yo(t, n) {
  return (
    (n = +n),
    function () {
      U(this, t).duration = n;
    }
  );
}
function Bo(t) {
  var n = this._id;
  return arguments.length
    ? this.each((typeof t == "function" ? Vo : Yo)(n, t))
    : X(this.node(), n).duration;
}
function Uo(t, n) {
  if (typeof n != "function") throw new Error();
  return function () {
    U(this, t).ease = n;
  };
}
function Zo(t) {
  var n = this._id;
  return arguments.length ? this.each(Uo(n, t)) : X(this.node(), n).ease;
}
function Go(t, n) {
  return function () {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    U(this, t).ease = e;
  };
}
function Ko(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Go(this._id, t));
}
function Wo(t) {
  typeof t != "function" && (t = ce(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = (r[i] = []), s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new K(r, this._parents, this._name, this._id);
}
function Qo(t) {
  if (t._id !== this._id) throw new Error();
  for (
    var n = this._groups,
      e = t._groups,
      r = n.length,
      i = e.length,
      o = Math.min(r, i),
      a = new Array(r),
      u = 0;
    u < o;
    ++u
  )
    for (
      var s = n[u], f = e[u], c = s.length, l = (a[u] = new Array(c)), h, d = 0;
      d < c;
      ++d
    )
      (h = s[d] || f[d]) && (l[d] = h);
  for (; u < r; ++u) a[u] = n[u];
  return new K(a, this._parents, this._name, this._id);
}
function Jo(t) {
  return (t + "")
    .trim()
    .split(/^|\s+/)
    .every(function (n) {
      var e = n.indexOf(".");
      return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
    });
}
function jo(t, n, e) {
  var r,
    i,
    o = Jo(n) ? xn : U;
  return function () {
    var a = o(this, t),
      u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
  };
}
function ta(t, n) {
  var e = this._id;
  return arguments.length < 2
    ? X(this.node(), e).on.on(t)
    : this.each(jo(e, t, n));
}
function na(t) {
  return function () {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function ea() {
  return this.on("end.remove", na(this._id));
}
function ra(t) {
  var n = this._name,
    e = this._id;
  typeof t != "function" && (t = pn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (
      var u = r[a], s = u.length, f = (o[a] = new Array(s)), c, l, h = 0;
      h < s;
      ++h
    )
      (c = u[h]) &&
        (l = t.call(c, c.__data__, h, u)) &&
        ("__data__" in c && (l.__data__ = c.__data__),
        (f[h] = l),
        Dt(f[h], n, e, h, f, X(c, e)));
  return new K(o, this._parents, n, e);
}
function ia(t) {
  var n = this._name,
    e = this._id;
  typeof t != "function" && (t = fe(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var s = r[u], f = s.length, c, l = 0; l < f; ++l)
      if ((c = s[l])) {
        for (
          var h = t.call(c, c.__data__, l, s),
            d,
            p = X(c, e),
            g = 0,
            y = h.length;
          g < y;
          ++g
        )
          (d = h[g]) && Dt(d, n, e, g, h, p);
        o.push(h), a.push(c);
      }
  return new K(o, a, n, e);
}
var oa = yt.prototype.constructor;
function aa() {
  return new oa(this._groups, this._parents);
}
function ua(t, n) {
  var e, r, i;
  return function () {
    var o = ot(this, t),
      a = (this.style.removeProperty(t), ot(this, t));
    return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)));
  };
}
function $e(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function sa(t, n, e) {
  var r,
    i = e + "",
    o;
  return function () {
    var a = ot(this, t);
    return a === i ? null : a === r ? o : (o = n((r = a), e));
  };
}
function fa(t, n, e) {
  var r, i, o;
  return function () {
    var a = ot(this, t),
      u = e(this),
      s = u + "";
    return (
      u == null && (s = u = (this.style.removeProperty(t), ot(this, t))),
      a === s ? null : a === r && s === i ? o : ((i = s), (o = n((r = a), u)))
    );
  };
}
function ca(t, n) {
  var e,
    r,
    i,
    o = "style." + n,
    a = "end." + o,
    u;
  return function () {
    var s = U(this, t),
      f = s.on,
      c = s.value[o] == null ? u || (u = $e(n)) : void 0;
    (f !== e || i !== c) && (r = (e = f).copy()).on(a, (i = c)), (s.on = r);
  };
}
function la(t, n, e) {
  var r = (t += "") == "transform" ? po : Ee;
  return n == null
    ? this.styleTween(t, ua(t, r)).on("end.style." + t, $e(t))
    : typeof n == "function"
    ? this.styleTween(t, fa(t, r, bn(this, "style." + t, n))).each(
        ca(this._id, t)
      )
    : this.styleTween(t, sa(t, r, n), e).on("end.style." + t, null);
}
function ha(t, n, e) {
  return function (r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function da(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && ha(t, a, e)), r;
  }
  return (o._value = n), o;
}
function pa(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, da(t, n, e == null ? "" : e));
}
function ga(t) {
  return function () {
    this.textContent = t;
  };
}
function ma(t) {
  return function () {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function ya(t) {
  return this.tween(
    "text",
    typeof t == "function"
      ? ma(bn(this, "text", t))
      : ga(t == null ? "" : t + "")
  );
}
function _a(t) {
  return function (n) {
    this.textContent = t.call(this, n);
  };
}
function va(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && _a(i)), n;
  }
  return (r._value = t), r;
}
function wa(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, va(t));
}
function xa() {
  for (
    var t = this._name,
      n = this._id,
      e = Te(),
      r = this._groups,
      i = r.length,
      o = 0;
    o < i;
    ++o
  )
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      if ((s = a[f])) {
        var c = X(s, n);
        Dt(s, t, e, f, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease,
        });
      }
  return new K(r, this._parents, t, e);
}
function ba() {
  var t,
    n,
    e = this,
    r = e._id,
    i = e.size();
  return new Promise(function (o, a) {
    var u = { value: a },
      s = {
        value: function () {
          --i === 0 && o();
        },
      };
    e.each(function () {
      var f = U(this, r),
        c = f.on;
      c !== t &&
        ((n = (t = c).copy()),
        n._.cancel.push(u),
        n._.interrupt.push(u),
        n._.end.push(s)),
        (f.on = n);
    }),
      i === 0 && o();
  });
}
var Ma = 0;
function K(t, n, e, r) {
  (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
}
function Te() {
  return ++Ma;
}
var G = yt.prototype;
K.prototype = {
  constructor: K,
  select: ra,
  selectAll: ia,
  selectChild: G.selectChild,
  selectChildren: G.selectChildren,
  filter: Wo,
  merge: Qo,
  selection: aa,
  transition: xa,
  call: G.call,
  nodes: G.nodes,
  node: G.node,
  size: G.size,
  empty: G.empty,
  each: G.each,
  on: ta,
  attr: Fo,
  attrTween: qo,
  style: la,
  styleTween: pa,
  text: ya,
  textTween: wa,
  remove: ea,
  tween: Co,
  delay: Xo,
  duration: Bo,
  ease: Zo,
  easeVarying: Ko,
  end: ba,
  [Symbol.iterator]: G[Symbol.iterator],
};
function Aa(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ka = { time: null, delay: 0, duration: 250, ease: Aa };
function Na(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
  return e;
}
function Ca(t) {
  var n, e;
  t instanceof K
    ? ((n = t._id), (t = t._name))
    : ((n = Te()), ((e = ka).time = wn()), (t = t == null ? null : t + ""));
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && Dt(s, t, n, f, a, e || Na(s, n));
  return new K(r, this._parents, t, n);
}
yt.prototype.interrupt = Ao;
yt.prototype.transition = Ca;
const fn = Math.PI,
  cn = 2 * fn,
  W = 1e-6,
  Sa = cn - W;
function ln() {
  (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
}
function Re() {
  return new ln();
}
ln.prototype = Re.prototype = {
  constructor: ln,
  moveTo: function (t, n) {
    this._ +=
      "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
  },
  closePath: function () {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
  },
  lineTo: function (t, n) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
  },
  quadraticCurveTo: function (t, n, e, r) {
    this._ +=
      "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function (t, n, e, r, i, o) {
    this._ +=
      "C" +
      +t +
      "," +
      +n +
      "," +
      +e +
      "," +
      +r +
      "," +
      (this._x1 = +i) +
      "," +
      (this._y1 = +o);
  },
  arcTo: function (t, n, e, r, i) {
    (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
    var o = this._x1,
      a = this._y1,
      u = e - t,
      s = r - n,
      f = o - t,
      c = a - n,
      l = f * f + c * c;
    if (i < 0) throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
    else if (l > W)
      if (!(Math.abs(c * u - s * f) > W) || !i)
        this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      else {
        var h = e - o,
          d = r - a,
          p = u * u + s * s,
          g = h * h + d * d,
          y = Math.sqrt(p),
          m = Math.sqrt(l),
          v = i * Math.tan((fn - Math.acos((p + l - g) / (2 * y * m))) / 2),
          w = v / m,
          b = v / y;
        Math.abs(w - 1) > W &&
          (this._ += "L" + (t + w * f) + "," + (n + w * c)),
          (this._ +=
            "A" +
            i +
            "," +
            i +
            ",0,0," +
            +(c * h > f * d) +
            "," +
            (this._x1 = t + b * u) +
            "," +
            (this._y1 = n + b * s));
      }
  },
  arc: function (t, n, e, r, i, o) {
    (t = +t), (n = +n), (e = +e), (o = !!o);
    var a = e * Math.cos(r),
      u = e * Math.sin(r),
      s = t + a,
      f = n + u,
      c = 1 ^ o,
      l = o ? r - i : i - r;
    if (e < 0) throw new Error("negative radius: " + e);
    this._x1 === null
      ? (this._ += "M" + s + "," + f)
      : (Math.abs(this._x1 - s) > W || Math.abs(this._y1 - f) > W) &&
        (this._ += "L" + s + "," + f),
      e &&
        (l < 0 && (l = (l % cn) + cn),
        l > Sa
          ? (this._ +=
              "A" +
              e +
              "," +
              e +
              ",0,1," +
              c +
              "," +
              (t - a) +
              "," +
              (n - u) +
              "A" +
              e +
              "," +
              e +
              ",0,1," +
              c +
              "," +
              (this._x1 = s) +
              "," +
              (this._y1 = f))
          : l > W &&
            (this._ +=
              "A" +
              e +
              "," +
              e +
              ",0," +
              +(l >= fn) +
              "," +
              c +
              "," +
              (this._x1 = t + e * Math.cos(i)) +
              "," +
              (this._y1 = n + e * Math.sin(i))));
  },
  rect: function (t, n, e, r) {
    this._ +=
      "M" +
      (this._x0 = this._x1 = +t) +
      "," +
      (this._y0 = this._y1 = +n) +
      "h" +
      +e +
      "v" +
      +r +
      "h" +
      -e +
      "Z";
  },
  toString: function () {
    return this._;
  },
};
var Zn = {},
  Gt = {},
  Kt = 34,
  ft = 10,
  Wt = 13;
function Ie(t) {
  return new Function(
    "d",
    "return {" +
      t
        .map(function (n, e) {
          return JSON.stringify(n) + ": d[" + e + '] || ""';
        })
        .join(",") +
      "}"
  );
}
function Ea(t, n) {
  var e = Ie(t);
  return function (r, i) {
    return n(e(r), i, t);
  };
}
function Gn(t) {
  var n = Object.create(null),
    e = [];
  return (
    t.forEach(function (r) {
      for (var i in r) i in n || e.push((n[i] = i));
    }),
    e
  );
}
function P(t, n) {
  var e = t + "",
    r = e.length;
  return r < n ? new Array(n - r + 1).join(0) + e : e;
}
function $a(t) {
  return t < 0 ? "-" + P(-t, 6) : t > 9999 ? "+" + P(t, 6) : P(t, 4);
}
function Ta(t) {
  var n = t.getUTCHours(),
    e = t.getUTCMinutes(),
    r = t.getUTCSeconds(),
    i = t.getUTCMilliseconds();
  return isNaN(t)
    ? "Invalid Date"
    : $a(t.getUTCFullYear()) +
        "-" +
        P(t.getUTCMonth() + 1, 2) +
        "-" +
        P(t.getUTCDate(), 2) +
        (i
          ? "T" + P(n, 2) + ":" + P(e, 2) + ":" + P(r, 2) + "." + P(i, 3) + "Z"
          : r
          ? "T" + P(n, 2) + ":" + P(e, 2) + ":" + P(r, 2) + "Z"
          : e || n
          ? "T" + P(n, 2) + ":" + P(e, 2) + "Z"
          : "");
}
function Ra(t) {
  var n = new RegExp(
      '["' +
        t +
        `
\r]`
    ),
    e = t.charCodeAt(0);
  function r(l, h) {
    var d,
      p,
      g = i(l, function (y, m) {
        if (d) return d(y, m - 1);
        (p = y), (d = h ? Ea(y, h) : Ie(y));
      });
    return (g.columns = p || []), g;
  }
  function i(l, h) {
    var d = [],
      p = l.length,
      g = 0,
      y = 0,
      m,
      v = p <= 0,
      w = !1;
    l.charCodeAt(p - 1) === ft && --p, l.charCodeAt(p - 1) === Wt && --p;
    function b() {
      if (v) return Gt;
      if (w) return (w = !1), Zn;
      var A,
        k = g,
        N;
      if (l.charCodeAt(k) === Kt) {
        for (
          ;
          (g++ < p && l.charCodeAt(g) !== Kt) || l.charCodeAt(++g) === Kt;

        );
        return (
          (A = g) >= p
            ? (v = !0)
            : (N = l.charCodeAt(g++)) === ft
            ? (w = !0)
            : N === Wt && ((w = !0), l.charCodeAt(g) === ft && ++g),
          l.slice(k + 1, A - 1).replace(/""/g, '"')
        );
      }
      for (; g < p; ) {
        if ((N = l.charCodeAt((A = g++))) === ft) w = !0;
        else if (N === Wt) (w = !0), l.charCodeAt(g) === ft && ++g;
        else if (N !== e) continue;
        return l.slice(k, A);
      }
      return (v = !0), l.slice(k, p);
    }
    for (; (m = b()) !== Gt; ) {
      for (var x = []; m !== Zn && m !== Gt; ) x.push(m), (m = b());
      (h && (x = h(x, y++)) == null) || d.push(x);
    }
    return d;
  }
  function o(l, h) {
    return l.map(function (d) {
      return h
        .map(function (p) {
          return c(d[p]);
        })
        .join(t);
    });
  }
  function a(l, h) {
    return (
      h == null && (h = Gn(l)),
      [h.map(c).join(t)].concat(o(l, h)).join(`
`)
    );
  }
  function u(l, h) {
    return (
      h == null && (h = Gn(l)),
      o(l, h).join(`
`)
    );
  }
  function s(l) {
    return l.map(f).join(`
`);
  }
  function f(l) {
    return l.map(c).join(t);
  }
  function c(l) {
    return l == null
      ? ""
      : l instanceof Date
      ? Ta(l)
      : n.test((l += ""))
      ? '"' + l.replace(/"/g, '""') + '"'
      : l;
  }
  return {
    parse: r,
    parseRows: i,
    format: a,
    formatBody: u,
    formatRows: s,
    formatRow: f,
    formatValue: c,
  };
}
var Ia = Ra(","),
  Fa = Ia.parse;
function Pa(t) {
  if (!t.ok) throw new Error(t.status + " " + t.statusText);
  return t.text();
}
function La(t, n) {
  return fetch(t, n).then(Pa);
}
function Oa(t) {
  return function (n, e, r) {
    return (
      arguments.length === 2 &&
        typeof e == "function" &&
        ((r = e), (e = void 0)),
      La(n, e).then(function (i) {
        return t(i, r);
      })
    );
  };
}
var Mn = Oa(Fa);
function za(t) {
  return Math.abs((t = Math.round(t))) >= 1e21
    ? t.toLocaleString("en").replace(/,/g, "")
    : t.toString(10);
}
function Lt(t, n) {
  if (
    (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0
  )
    return null;
  var e,
    r = t.slice(0, e);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
}
function ut(t) {
  return (t = Lt(Math.abs(t))), t ? t[1] : NaN;
}
function qa(t, n) {
  return function (e, r) {
    for (
      var i = e.length, o = [], a = 0, u = t[0], s = 0;
      i > 0 &&
      u > 0 &&
      (s + u + 1 > r && (u = Math.max(1, r - s)),
      o.push(e.substring((i -= u), i + u)),
      !((s += u + 1) > r));

    )
      u = t[(a = (a + 1) % t.length)];
    return o.reverse().join(n);
  };
}
function Da(t) {
  return function (n) {
    return n.replace(/[0-9]/g, function (e) {
      return t[+e];
    });
  };
}
var Ha =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ot(t) {
  if (!(n = Ha.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new An({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10],
  });
}
Ot.prototype = An.prototype;
function An(t) {
  (this.fill = t.fill === void 0 ? " " : t.fill + ""),
    (this.align = t.align === void 0 ? ">" : t.align + ""),
    (this.sign = t.sign === void 0 ? "-" : t.sign + ""),
    (this.symbol = t.symbol === void 0 ? "" : t.symbol + ""),
    (this.zero = !!t.zero),
    (this.width = t.width === void 0 ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = t.precision === void 0 ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = t.type === void 0 ? "" : t.type + "");
}
An.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function Xa(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), (i = e);
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Fe;
function Va(t, n) {
  var e = Lt(t, n);
  if (!e) return t + "";
  var r = e[0],
    i = e[1],
    o = i - (Fe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    a = r.length;
  return o === a
    ? r
    : o > a
    ? r + new Array(o - a + 1).join("0")
    : o > 0
    ? r.slice(0, o) + "." + r.slice(o)
    : "0." + new Array(1 - o).join("0") + Lt(t, Math.max(0, n + o - 1))[0];
}
function Kn(t, n) {
  var e = Lt(t, n);
  if (!e) return t + "";
  var r = e[0],
    i = e[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + "." + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join("0");
}
var Wn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: za,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Kn(t * 100, n),
  r: Kn,
  s: Va,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function Qn(t) {
  return t;
}
var Jn = Array.prototype.map,
  jn = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function Ya(t) {
  var n =
      t.grouping === void 0 || t.thousands === void 0
        ? Qn
        : qa(Jn.call(t.grouping, Number), t.thousands + ""),
    e = t.currency === void 0 ? "" : t.currency[0] + "",
    r = t.currency === void 0 ? "" : t.currency[1] + "",
    i = t.decimal === void 0 ? "." : t.decimal + "",
    o = t.numerals === void 0 ? Qn : Da(Jn.call(t.numerals, String)),
    a = t.percent === void 0 ? "%" : t.percent + "",
    u = t.minus === void 0 ? "\u2212" : t.minus + "",
    s = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(l) {
    l = Ot(l);
    var h = l.fill,
      d = l.align,
      p = l.sign,
      g = l.symbol,
      y = l.zero,
      m = l.width,
      v = l.comma,
      w = l.precision,
      b = l.trim,
      x = l.type;
    x === "n"
      ? ((v = !0), (x = "g"))
      : Wn[x] || (w === void 0 && (w = 12), (b = !0), (x = "g")),
      (y || (h === "0" && d === "=")) && ((y = !0), (h = "0"), (d = "="));
    var A =
        g === "$"
          ? e
          : g === "#" && /[boxX]/.test(x)
          ? "0" + x.toLowerCase()
          : "",
      k = g === "$" ? r : /[%p]/.test(x) ? a : "",
      N = Wn[x],
      $ = /[defgprs%]/.test(x);
    w =
      w === void 0
        ? 6
        : /[gprs]/.test(x)
        ? Math.max(1, Math.min(21, w))
        : Math.max(0, Math.min(20, w));
    function R(_) {
      var S = A,
        C = k,
        T,
        E,
        O;
      if (x === "c") (C = N(_) + C), (_ = "");
      else {
        _ = +_;
        var q = _ < 0 || 1 / _ < 0;
        if (
          ((_ = isNaN(_) ? s : N(Math.abs(_), w)),
          b && (_ = Xa(_)),
          q && +_ == 0 && p !== "+" && (q = !1),
          (S = (q ? (p === "(" ? p : u) : p === "-" || p === "(" ? "" : p) + S),
          (C =
            (x === "s" ? jn[8 + Fe / 3] : "") +
            C +
            (q && p === "(" ? ")" : "")),
          $)
        ) {
          for (T = -1, E = _.length; ++T < E; )
            if (((O = _.charCodeAt(T)), 48 > O || O > 57)) {
              (C = (O === 46 ? i + _.slice(T + 1) : _.slice(T)) + C),
                (_ = _.slice(0, T));
              break;
            }
        }
      }
      v && !y && (_ = n(_, 1 / 0));
      var vt = S.length + _.length + C.length,
        Z = vt < m ? new Array(m - vt + 1).join(h) : "";
      switch (
        (v && y && ((_ = n(Z + _, Z.length ? m - C.length : 1 / 0)), (Z = "")),
        d)
      ) {
        case "<":
          _ = S + _ + C + Z;
          break;
        case "=":
          _ = S + Z + _ + C;
          break;
        case "^":
          _ = Z.slice(0, (vt = Z.length >> 1)) + S + _ + C + Z.slice(vt);
          break;
        default:
          _ = Z + S + _ + C;
          break;
      }
      return o(_);
    }
    return (
      (R.toString = function () {
        return l + "";
      }),
      R
    );
  }
  function c(l, h) {
    var d = f(((l = Ot(l)), (l.type = "f"), l)),
      p = Math.max(-8, Math.min(8, Math.floor(ut(h) / 3))) * 3,
      g = Math.pow(10, -p),
      y = jn[8 + p / 3];
    return function (m) {
      return d(g * m) + y;
    };
  }
  return { format: f, formatPrefix: c };
}
var Mt, Pe, Le;
Ba({ thousands: ",", grouping: [3], currency: ["$", ""] });
function Ba(t) {
  return (Mt = Ya(t)), (Pe = Mt.format), (Le = Mt.formatPrefix), Mt;
}
function Ua(t) {
  return Math.max(0, -ut(Math.abs(t)));
}
function Za(t, n) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(ut(n) / 3))) * 3 - ut(Math.abs(t))
  );
}
function Ga(t, n) {
  return (
    (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, ut(n) - ut(t)) + 1
  );
}
function kn(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const te = Symbol("implicit");
function Oe() {
  var t = new En(),
    n = [],
    e = [],
    r = te;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== te) return r;
      t.set(o, (a = n.push(o) - 1));
    }
    return e[a % e.length];
  }
  return (
    (i.domain = function (o) {
      if (!arguments.length) return n.slice();
      (n = []), (t = new En());
      for (const a of o) t.has(a) || t.set(a, n.push(a) - 1);
      return i;
    }),
    (i.range = function (o) {
      return arguments.length ? ((e = Array.from(o)), i) : e.slice();
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((r = o), i) : r;
    }),
    (i.copy = function () {
      return Oe(n, e).unknown(r);
    }),
    kn.apply(i, arguments),
    i
  );
}
function Ht() {
  var t = Oe().unknown(void 0),
    n = t.domain,
    e = t.range,
    r = 0,
    i = 1,
    o,
    a,
    u = !1,
    s = 0,
    f = 0,
    c = 0.5;
  delete t.unknown;
  function l() {
    var h = n().length,
      d = i < r,
      p = d ? i : r,
      g = d ? r : i;
    (o = (g - p) / Math.max(1, h - s + f * 2)),
      u && (o = Math.floor(o)),
      (p += (g - p - o * (h - s)) * c),
      (a = o * (1 - s)),
      u && ((p = Math.round(p)), (a = Math.round(a)));
    var y = tr(h).map(function (m) {
      return p + o * m;
    });
    return e(d ? y.reverse() : y);
  }
  return (
    (t.domain = function (h) {
      return arguments.length ? (n(h), l()) : n();
    }),
    (t.range = function (h) {
      return arguments.length
        ? (([r, i] = h), (r = +r), (i = +i), l())
        : [r, i];
    }),
    (t.rangeRound = function (h) {
      return ([r, i] = h), (r = +r), (i = +i), (u = !0), l();
    }),
    (t.bandwidth = function () {
      return a;
    }),
    (t.step = function () {
      return o;
    }),
    (t.round = function (h) {
      return arguments.length ? ((u = !!h), l()) : u;
    }),
    (t.padding = function (h) {
      return arguments.length ? ((s = Math.min(1, (f = +h))), l()) : s;
    }),
    (t.paddingInner = function (h) {
      return arguments.length ? ((s = Math.min(1, h)), l()) : s;
    }),
    (t.paddingOuter = function (h) {
      return arguments.length ? ((f = +h), l()) : f;
    }),
    (t.align = function (h) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, h))), l()) : c;
    }),
    (t.copy = function () {
      return Ht(n(), [r, i]).round(u).paddingInner(s).paddingOuter(f).align(c);
    }),
    kn.apply(l(), arguments)
  );
}
function Ka(t) {
  return function () {
    return t;
  };
}
function Wa(t) {
  return +t;
}
var ne = [0, 1];
function rt(t) {
  return t;
}
function hn(t, n) {
  return (n -= t = +t)
    ? function (e) {
        return (e - t) / n;
      }
    : Ka(isNaN(n) ? NaN : 0.5);
}
function Qa(t, n) {
  var e;
  return (
    t > n && ((e = t), (t = n), (n = e)),
    function (r) {
      return Math.max(t, Math.min(n, r));
    }
  );
}
function Ja(t, n, e) {
  var r = t[0],
    i = t[1],
    o = n[0],
    a = n[1];
  return (
    i < r ? ((r = hn(i, r)), (o = e(a, o))) : ((r = hn(r, i)), (o = e(o, a))),
    function (u) {
      return o(r(u));
    }
  );
}
function ja(t, n, e) {
  var r = Math.min(t.length, n.length) - 1,
    i = new Array(r),
    o = new Array(r),
    a = -1;
  for (
    t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
    ++a < r;

  )
    (i[a] = hn(t[a], t[a + 1])), (o[a] = e(n[a], n[a + 1]));
  return function (u) {
    var s = Ge(t, u, 1, r) - 1;
    return o[s](i[s](u));
  };
}
function tu(t, n) {
  return n
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function nu() {
  var t = ne,
    n = ne,
    e = vn,
    r,
    i,
    o,
    a = rt,
    u,
    s,
    f;
  function c() {
    var h = Math.min(t.length, n.length);
    return (
      a !== rt && (a = Qa(t[0], t[h - 1])),
      (u = h > 2 ? ja : Ja),
      (s = f = null),
      l
    );
  }
  function l(h) {
    return h == null || isNaN((h = +h))
      ? o
      : (s || (s = u(t.map(r), n, e)))(r(a(h)));
  }
  return (
    (l.invert = function (h) {
      return a(i((f || (f = u(n, t.map(r), D)))(h)));
    }),
    (l.domain = function (h) {
      return arguments.length ? ((t = Array.from(h, Wa)), c()) : t.slice();
    }),
    (l.range = function (h) {
      return arguments.length ? ((n = Array.from(h)), c()) : n.slice();
    }),
    (l.rangeRound = function (h) {
      return (n = Array.from(h)), (e = co), c();
    }),
    (l.clamp = function (h) {
      return arguments.length ? ((a = h ? !0 : rt), c()) : a !== rt;
    }),
    (l.interpolate = function (h) {
      return arguments.length ? ((e = h), c()) : e;
    }),
    (l.unknown = function (h) {
      return arguments.length ? ((o = h), l) : o;
    }),
    function (h, d) {
      return (r = h), (i = d), c();
    }
  );
}
function eu() {
  return nu()(rt, rt);
}
function ru(t, n, e, r) {
  var i = je(t, n, e),
    o;
  switch (((r = Ot(r == null ? ",f" : r)), r.type)) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return (
        r.precision == null && !isNaN((o = Za(i, a))) && (r.precision = o),
        Le(r, a)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((o = Ga(i, Math.max(Math.abs(t), Math.abs(n))))) &&
        (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null &&
        !isNaN((o = Ua(i))) &&
        (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Pe(r);
}
function iu(t) {
  var n = t.domain;
  return (
    (t.ticks = function (e) {
      var r = n();
      return Je(r[0], r[r.length - 1], e == null ? 10 : e);
    }),
    (t.tickFormat = function (e, r) {
      var i = n();
      return ru(i[0], i[i.length - 1], e == null ? 10 : e, r);
    }),
    (t.nice = function (e) {
      e == null && (e = 10);
      var r = n(),
        i = 0,
        o = r.length - 1,
        a = r[i],
        u = r[o],
        s,
        f,
        c = 10;
      for (
        u < a && ((f = a), (a = u), (u = f), (f = i), (i = o), (o = f));
        c-- > 0;

      ) {
        if (((f = ie(a, u, e)), f === s)) return (r[i] = a), (r[o] = u), n(r);
        if (f > 0) (a = Math.floor(a / f) * f), (u = Math.ceil(u / f) * f);
        else if (f < 0) (a = Math.ceil(a * f) / f), (u = Math.floor(u * f) / f);
        else break;
        s = f;
      }
      return t;
    }),
    t
  );
}
function Xt() {
  var t = eu();
  return (
    (t.copy = function () {
      return tu(t, Xt());
    }),
    kn.apply(t, arguments),
    iu(t)
  );
}
function nt(t) {
  return function () {
    return t;
  };
}
function ou(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ze(t) {
  this._context = t;
}
ze.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, n) {
    switch (((t = +t), (n = +n), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
        break;
    }
  },
};
function au(t) {
  return new ze(t);
}
function uu(t) {
  return t[0];
}
function su(t) {
  return t[1];
}
function fu(t, n) {
  var e = nt(!0),
    r = null,
    i = au,
    o = null;
  (t = typeof t == "function" ? t : t === void 0 ? uu : nt(t)),
    (n = typeof n == "function" ? n : n === void 0 ? su : nt(n));
  function a(u) {
    var s,
      f = (u = ou(u)).length,
      c,
      l = !1,
      h;
    for (r == null && (o = i((h = Re()))), s = 0; s <= f; ++s)
      !(s < f && e((c = u[s]), s, u)) === l &&
        ((l = !l) ? o.lineStart() : o.lineEnd()),
        l && o.point(+t(c, s, u), +n(c, s, u));
    if (h) return (o = null), h + "" || null;
  }
  return (
    (a.x = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : nt(+u)), a)
        : t;
    }),
    (a.y = function (u) {
      return arguments.length
        ? ((n = typeof u == "function" ? u : nt(+u)), a)
        : n;
    }),
    (a.defined = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : nt(!!u)), a)
        : e;
    }),
    (a.curve = function (u) {
      return arguments.length ? ((i = u), r != null && (o = i(r)), a) : i;
    }),
    (a.context = function (u) {
      return arguments.length
        ? (u == null ? (r = o = null) : (o = i((r = u))), a)
        : r;
    }),
    a
  );
}
function Nn(t, n) {
  return cu(t) || lu(t, n) || hu();
}
function cu(t) {
  if (Array.isArray(t)) return t;
}
function lu(t, n) {
  var e = [],
    r = !0,
    i = !1,
    o = void 0;
  try {
    for (
      var a = t[Symbol.iterator](), u;
      !(r = (u = a.next()).done) && (e.push(u.value), !(n && e.length === n));
      r = !0
    );
  } catch (s) {
    (i = !0), (o = s);
  } finally {
    try {
      !r && a.return != null && a.return();
    } finally {
      if (i) throw o;
    }
  }
  return e;
}
function hu() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function qe(t, n, e, r) {
  (t = t.filter(function (p, g) {
    var y = n(p, g),
      m = e(p, g);
    return y != null && isFinite(y) && m != null && isFinite(m);
  })),
    r &&
      t.sort(function (p, g) {
        return n(p) - n(g);
      });
  for (
    var i = t.length,
      o = new Float64Array(i),
      a = new Float64Array(i),
      u = 0,
      s = 0,
      f,
      c,
      l,
      h = 0;
    h < i;

  )
    (l = t[h]),
      (o[h] = f = +n(l, h, t)),
      (a[h] = c = +e(l, h, t)),
      ++h,
      (u += (f - u) / h),
      (s += (c - s) / h);
  for (var d = 0; d < i; ++d) (o[d] -= u), (a[d] -= s);
  return [o, a, u, s];
}
function Vt(t, n, e, r) {
  for (var i = 0, o = 0, a = t.length; o < a; o++) {
    var u = t[o],
      s = +n(u, o, t),
      f = +e(u, o, t);
    s != null && isFinite(s) && f != null && isFinite(f) && r(s, f, i++);
  }
}
function Cn(t, n, e, r, i) {
  var o = 0,
    a = 0;
  return (
    Vt(t, n, e, function (u, s) {
      var f = s - i(u),
        c = s - r;
      (o += f * f), (a += c * c);
    }),
    1 - o / a
  );
}
function ee(t) {
  return (Math.atan2(t[1][1] - t[0][1], t[1][0] - t[0][0]) * 180) / Math.PI;
}
function du(t) {
  return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
}
function De(t, n, e) {
  for (
    var r = (Math.log(n - t) * Math.LOG10E + 1) | 0,
      i = 1 * Math.pow(10, -r / 2 - 1),
      o = 1e4,
      a = [s(t), s(n)],
      u = 0;
    f(a) && u < o;

  );
  return a;
  function s(c) {
    return [c, e(c)];
  }
  function f(c) {
    u++;
    for (var l = c.length, h = !1, d = 0; d < l - 1; d++) {
      var p = c[d],
        g = c[d + 1],
        y = du([p, g]),
        m = s(y[0]),
        v = ee([p, y]),
        w = ee([p, m]),
        b = Math.abs(v - w);
      b > i && (c.splice(d + 1, 0, m), (h = !0));
    }
    return h;
  }
}
function pu(t, n, e, r) {
  var i = r - t * t,
    o = Math.abs(i) < 1e-24 ? 0 : (e - t * n) / i,
    a = n - o * t;
  return [a, o];
}
function gu() {
  var t = function (o) {
      return o[0];
    },
    n = function (o) {
      return o[1];
    },
    e;
  function r(i) {
    var o = 0,
      a = 0,
      u = 0,
      s = 0,
      f = 0,
      c = e ? +e[0] : 1 / 0,
      l = e ? +e[1] : -1 / 0;
    Vt(i, t, n, function (v, w) {
      ++o,
        (a += (v - a) / o),
        (u += (w - u) / o),
        (s += (v * w - s) / o),
        (f += (v * v - f) / o),
        e || (v < c && (c = v), v > l && (l = v));
    });
    var h = pu(a, u, s, f),
      d = Nn(h, 2),
      p = d[0],
      g = d[1],
      y = function (w) {
        return g * w + p;
      },
      m = [
        [c, y(c)],
        [l, y(l)],
      ];
    return (
      (m.a = g), (m.b = p), (m.predict = y), (m.rSquared = Cn(i, t, n, u, y)), m
    );
  }
  return (
    (r.domain = function (i) {
      return arguments.length ? ((e = i), r) : e;
    }),
    (r.x = function (i) {
      return arguments.length ? ((t = i), r) : t;
    }),
    (r.y = function (i) {
      return arguments.length ? ((n = i), r) : n;
    }),
    r
  );
}
function mu() {
  var t = function (o) {
      return o[0];
    },
    n = function (o) {
      return o[1];
    },
    e;
  function r(i) {
    var o = qe(i, t, n),
      a = Nn(o, 4),
      u = a[0],
      s = a[1],
      f = a[2],
      c = a[3],
      l = u.length,
      h = 0,
      d = 0,
      p = 0,
      g = 0,
      y = 0,
      m,
      v,
      w,
      b;
    for (m = 0; m < l; )
      (v = u[m]),
        (w = s[m++]),
        (b = v * v),
        (h += (b - h) / m),
        (d += (b * v - d) / m),
        (p += (b * b - p) / m),
        (g += (v * w - g) / m),
        (y += (b * w - y) / m);
    var x = 0,
      A = 0,
      k = e ? +e[0] : 1 / 0,
      N = e ? +e[1] : -1 / 0;
    Vt(i, t, n, function (O, q) {
      A++, (x += (q - x) / A), e || (O < k && (k = O), O > N && (N = O));
    });
    var $ = p - h * h,
      R = h * $ - d * d,
      _ = (y * h - g * d) / R,
      S = (g * $ - y * d) / R,
      C = -_ * h,
      T = function (q) {
        return (q = q - f), _ * q * q + S * q + C + c;
      },
      E = De(k, N, T);
    return (
      (E.a = _),
      (E.b = S - 2 * _ * f),
      (E.c = C - S * f + _ * f * f + c),
      (E.predict = T),
      (E.rSquared = Cn(i, t, n, x, T)),
      E
    );
  }
  return (
    (r.domain = function (i) {
      return arguments.length ? ((e = i), r) : e;
    }),
    (r.x = function (i) {
      return arguments.length ? ((t = i), r) : t;
    }),
    (r.y = function (i) {
      return arguments.length ? ((n = i), r) : n;
    }),
    r
  );
}
function yu() {
  var t = function (a) {
      return a[0];
    },
    n = function (a) {
      return a[1];
    },
    e = 3,
    r;
  function i(o) {
    if (e === 1) {
      var a = gu().x(t).y(n).domain(r)(o);
      return (a.coefficients = [a.b, a.a]), delete a.a, delete a.b, a;
    }
    if (e === 2) {
      var u = mu().x(t).y(n).domain(r)(o);
      return (
        (u.coefficients = [u.c, u.b, u.a]),
        delete u.a,
        delete u.b,
        delete u.c,
        u
      );
    }
    var s = qe(o, t, n),
      f = Nn(s, 4),
      c = f[0],
      l = f[1],
      h = f[2],
      d = f[3],
      p = c.length,
      g = [],
      y = [],
      m = e + 1,
      v = 0,
      w = 0,
      b = r ? +r[0] : 1 / 0,
      x = r ? +r[1] : -1 / 0;
    Vt(o, t, n, function (T, E) {
      ++w, (v += (E - v) / w), r || (T < b && (b = T), T > x && (x = T));
    });
    var A, k, N, $, R;
    for (A = 0; A < m; ++A) {
      for (N = 0, $ = 0; N < p; ++N) $ += Math.pow(c[N], A) * l[N];
      for (g.push($), R = new Float64Array(m), k = 0; k < m; ++k) {
        for (N = 0, $ = 0; N < p; ++N) $ += Math.pow(c[N], A + k);
        R[k] = $;
      }
      y.push(R);
    }
    y.push(g);
    var _ = vu(y),
      S = function (E) {
        E -= h;
        var O = d + _[0] + _[1] * E + _[2] * E * E;
        for (A = 3; A < m; ++A) O += _[A] * Math.pow(E, A);
        return O;
      },
      C = De(b, x, S);
    return (
      (C.coefficients = _u(m, _, -h, d)),
      (C.predict = S),
      (C.rSquared = Cn(o, t, n, v, S)),
      C
    );
  }
  return (
    (i.domain = function (o) {
      return arguments.length ? ((r = o), i) : r;
    }),
    (i.x = function (o) {
      return arguments.length ? ((t = o), i) : t;
    }),
    (i.y = function (o) {
      return arguments.length ? ((n = o), i) : n;
    }),
    (i.order = function (o) {
      return arguments.length ? ((e = o), i) : e;
    }),
    i
  );
}
function _u(t, n, e, r) {
  var i = Array(t),
    o,
    a,
    u,
    s;
  for (o = 0; o < t; ++o) i[o] = 0;
  for (o = t - 1; o >= 0; --o)
    for (u = n[o], s = 1, i[o] += u, a = 1; a <= o; ++a)
      (s *= (o + 1 - a) / a), (i[o - a] += u * Math.pow(e, a) * s);
  return (i[0] += r), i;
}
function vu(t) {
  var n = t.length - 1,
    e = [],
    r,
    i,
    o,
    a,
    u;
  for (r = 0; r < n; ++r) {
    for (a = r, i = r + 1; i < n; ++i)
      Math.abs(t[r][i]) > Math.abs(t[r][a]) && (a = i);
    for (o = r; o < n + 1; ++o)
      (u = t[o][r]), (t[o][r] = t[o][a]), (t[o][a] = u);
    for (i = r + 1; i < n; ++i)
      for (o = n; o >= r; o--) t[o][i] -= (t[o][r] * t[r][i]) / t[r][r];
  }
  for (i = n - 1; i >= 0; --i) {
    for (u = 0, o = i + 1; o < n; ++o) u += t[o][i] * e[o];
    e[i] = (t[n][i] - u) / t[i][i];
  }
  return e;
}
function He(t, n, e, r, i) {
  const a = yu()
    .x((u, s) => n(`Most Cited Rank: ${++s}`))
    .y((u, s) => e(u.cite_count))
    .order(3)(t);
  i.datum(a)
    .append("path")
    .attr("fill", "none")
    .attr("stroke", r)
    .attr("stroke-width", 4)
    .attr(
      "d",
      fu()
        .x(function (u, s) {
          return u[0];
        })
        .y(function (u, s) {
          return u[1];
        })
    );
}
function Sn(t, n) {
  const e = "#78716c";
  t
    .append("circle")
    .attr("cx", n / 1.2 - 15)
    .attr("cy", 25)
    .attr("r", 6)
    .style("fill", "#0891b2"),
    t
      .append("text")
      .attr("x", n / 1.2)
      .attr("y", 29)
      .text("Most Cited Active Projects")
      .style("fill", "#0891b2")
      .style("font-size", "13px")
      .attr("alignment-baseline", "center"),
    t
      .append("circle")
      .attr("cx", n / 1.2 - 15)
      .attr("cy", 55)
      .attr("r", 6)
      .style("fill", e),
    t
      .append("text")
      .attr("x", n / 1.2)
      .attr("y", 58)
      .text("Most Cited Inactive Projects")
      .style("fill", e)
      .style("font-size", "13px")
      .attr("alignment-baseline", "center");
}
let wu = window.innerWidth < 420 ? 380 : 1e3;
const M = { top: 60, right: 30, bottom: 110, left: 60 },
  I = wu - M.left - M.right,
  z = 500 - M.top - M.bottom,
  V = B("#active")
    .append("svg")
    .attr("width", I + M.left + M.right)
    .attr("height", z + M.top + M.bottom)
    .append("g")
    .attr("transform", "translate(" + M.left + "," + M.top + ")"),
  xu = B("#inactive")
    .append("svg")
    .attr("width", I + M.left + M.right)
    .attr("height", z + M.top + M.bottom)
    .append("g")
    .attr("transform", "translate(" + M.left + "," + M.top + ")"),
  et = B("#combined")
    .append("svg")
    .attr("width", I + M.left + M.right)
    .attr("height", z + M.top + M.bottom)
    .append("g")
    .attr("transform", "translate(" + M.left + "," + M.top + ")"),
  dt = B("#compare")
    .append("svg")
    .attr("width", I + M.left + M.right)
    .attr("height", z + M.top + M.top / 2)
    .append("g")
    .attr("transform", "translate(" + M.left + "," + M.top + ")");
Mn("/top2012_active.csv").then(function (t) {
  const n = "#0891b2",
    e = Ht()
      .range([0, I])
      .domain(
        t.map(function (i, o) {
          return `Most Cited Rank: ${++o}`;
        })
      )
      .padding(0.2);
  V.append("g")
    .attr("transform", "translate(0," + z + ")")
    .call(dn(e))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  const r = Xt().domain([0, 8]).range([z, 0]);
  V.append("g").call(St(r)),
    V.selectAll("mybar")
      .data(t)
      .enter()
      .append("rect")
      .style("fill", n)
      .attr("x", function (i, o) {
        return e(`Most Cited Rank: ${++o}`);
      })
      .attr("y", function (i) {
        return r(i.cite_count);
      })
      .attr("width", e.bandwidth())
      .attr("height", function (i) {
        return z - r(i.cite_count);
      }),
    V.append("g")
      .attr("id", "percentages")
      .selectAll("text")
      .data(t)
      .join("text")
      .attr("x", (i, o) => e(`Most Cited Rank: ${o}`))
      .attr("y", (i) => r(i.cite_count))
      .attr("fill", "transparent")
      .text((i) => i.project)
      .style("font-size", "20px")
      .style("font-weight", "900")
      .on("mouseover", function (i, o) {
        B(this).attr("fill", "#84cc16");
      })
      .on("mouseout", function (i, o) {
        B(this).attr("fill", "transparent");
      }),
    V.append("text")
      .attr("x", I / 2)
      .attr("y", "-.67rem")
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .attr("font-weight", "900")
      .text("10 Most Cited Projects (active vs non-active overlaid)"),
    He(t, e, r, n, dt);
});
Mn("/top2012_inactive.csv").then(function (t) {
  const n = "#78716c",
    e = Ht()
      .range([0, I])
      .domain(
        t.map(function (i, o) {
          return `Most Cited Rank: ${++o}`;
        })
      )
      .padding(0.2);
  V.append("g")
    .attr("transform", "translate(0," + z + ")")
    .call(dn(e))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  const r = Xt().domain([0, 8]).range([z, 0]);
  V.append("g").call(St(r)),
    V.selectAll("mybar")
      .data(t)
      .enter()
      .append("rect")
      .style("fill", n)
      .attr("x", function (i, o) {
        return e(`Most Cited Rank: ${++o}`);
      })
      .attr("y", function (i) {
        return r(i.cite_count);
      })
      .attr("width", e.bandwidth())
      .attr("height", function (i) {
        return z - r(i.cite_count);
      }),
    V.append("g")
      .attr("id", "percentages")
      .selectAll("text")
      .data(t)
      .join("text")
      .attr("x", (i, o) => e(`Most Cited Rank: ${o}`))
      .attr("y", (i) => r(i.cite_count))
      .attr("fill", "transparent")
      .text((i) => i.project)
      .style("font-size", "20px")
      .style("font-weight", "900")
      .style("transform-origin", "top top")
      .on("mouseover", function (i, o) {
        B(this).attr("fill", "#84cc16");
      })
      .on("mouseout", function (i, o) {
        B(this).attr("fill", "transparent");
      }),
    dt
      .append("text")
      .attr("x", I / 2)
      .attr("y", "-.67rem")
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .attr("font-weight", "900")
      .text("Comparison of Polynomial Regression Trend Lines"),
    dt.append("g").call(St(r)),
    He(t, e, r, n, dt);
});
xu.append("text")
  .attr("x", I / 2)
  .attr("y", "-1rem")
  .attr("text-anchor", "middle")
  .attr("font-weight", "900")
  .style("font-size", "16px")
  .text("10 Most Cited Inactive Projects");
Hi("svg")
  .on("mouseover", function (t, n) {
    B(this).style("background", "white");
  })
  .on("mouseout", function (t, n) {
    B(this).style("background", "#e7e5e4");
  });
Sn(dt, I);
Sn(et, I);
Sn(V, I);
Mn("/top2012_all.csv").then(function (t) {
  const n = Ht()
    .range([0, I])
    .domain(
      t.map(function (r, i) {
        return r.project;
      })
    )
    .padding(0.2);
  et
    .append("text")
    .attr("x", I / 2)
    .attr("y", "-.67rem")
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .attr("font-weight", "900")
    .text("Top 10 Most Cited Projects (active and non-active)"),
    et
      .append("text")
      .attr("x", I / 2)
      .attr("y", ".67rem")
      .attr("text-anchor", "middle")
      .style("font-size", "13px")
      .attr("font-weight", "100")
      .text("80% of the most cited projects are still active"),
    et
      .append("g")
      .attr("transform", "translate(0," + z + ")")
      .call(dn(n))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");
  const e = Xt().domain([0, 8]).range([z, 0]);
  et.append("g").call(St(e)),
    et
      .selectAll("mybar")
      .data(t)
      .enter()
      .append("rect")
      .style("fill", function (r) {
        return r.is_active === "yes" ? "#0891b2" : "#78716c";
      })
      .attr("x", function (r, i) {
        return n(r.project);
      })
      .attr("y", function (r) {
        return e(r.cite_count);
      })
      .attr("width", n.bandwidth())
      .attr("height", function (r) {
        return z - e(r.cite_count);
      });
});
