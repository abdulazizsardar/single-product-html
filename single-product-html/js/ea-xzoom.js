
/**
 * enteraddons 
 */


function detect_old_ie() {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var o = new Number(RegExp.$1);
        return !(9 <= o) && (8 <= o || 7 <= o || 6 <= o || 5 <= o || void 0);
    }
    return !1;
}
(window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (o) {
        window.setTimeout(o, 20);
    }),
    (function (Ao) {
        function n(s, o) {
            this.xzoom = !0;
            var t,
                a,
                p,
                l,
                r,
                e,
                n,
                d,
                i,
                c,
                h,
                f,
                u,
                v,
                m,
                g,
                w,
                x,
                b,
                z,
                y,
                C,
                k,
                O,
                M,
                A,
                S,
                H,
                W,
                F,
                I,
                T,
                X,
                Y,
                R,
                q,
                E,
                L,
                D,
                Z,
                _,
                j,
                N,
                Q,
                $,
                B,
                G,
                J,
                K,
                P,
                U,
                V = this,
                oo = {},
                to = (new Array(), new Array()),
                eo = 0,
                io = 0,
                so = 0,
                no = 0,
                ao = 0,
                po = 0,
                lo = 0,
                ro = 0,
                co = 0,
                ho = 0,
                fo = 0,
                uo = 0,
                vo = 0,
                mo = detect_old_ie(),
                go = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
                wo = "";
            function xo() {
                var o = document.documentElement;
                return { left: (window.pageXOffset || o.scrollLeft) - (o.clientLeft || 0), top: (window.pageYOffset || o.scrollTop) - (o.clientTop || 0) };
            }
            function bo() {
                var o;
                "circle" == V.options.lensShape && "lens" == V.options.position && ((o = ((M = A = Math.max(M, A)) + 2 * Math.max(F, W)) / 2), k.css({ "-moz-border-radius": o, "-webkit-border-radius": o, "border-radius": o }));
            }
            function zo(o, t, e, i) {
                "lens" == V.options.position
                    ? (C.css({ top: -(t - n) * T + A / 2, left: -(o - d) * I + M / 2 }),
                      V.options.bg &&
                          (k.css({ "background-image": "url(" + C.attr("src") + ")", "background-repeat": "no-repeat", "background-position": -(o - d) * I + M / 2 + "px " + (-(t - n) * T + A / 2) + "px" }),
                          e && i && k.css({ "background-size": e + "px " + i + "px" })))
                    : C.css({ top: -H * T, left: -S * I });
            }
            function yo(o, t) {
                var e, i;
                1 < (so = so < -1 ? -1 : so) && (so = 1),
                    X < Y ? (i = (e = l * (X - (X - 1) * so)) / R) : (e = (i = r * (Y - (Y - 1) * so)) * R),
                    L
                        ? ((no = o), (ao = t), (po = e), (lo = i))
                        : (L || ((ro = po = e), (co = lo = i)),
                          (M = l / (I = e / a)),
                          (A = r / (T = i / p)),
                          bo(),
                          ko(o, t),
                          C.width(e),
                          C.height(i),
                          k.width(M),
                          k.height(A),
                          k.css({ top: H - F, left: S - W }),
                          O.css({ top: -H, left: -S }),
                          zo(o, t, e, i));
            }
            function Co() {
                var o = ho,
                    t = fo,
                    e = uo,
                    i = vo,
                    s = ro,
                    n = co;
                (o += (no - o) / V.options.smoothLensMove),
                    (t += (ao - t) / V.options.smoothLensMove),
                    (e += (no - e) / V.options.smoothZoomMove),
                    (i += (ao - i) / V.options.smoothZoomMove),
                    (s += (po - s) / V.options.smoothScale),
                    (n += (lo - n) / V.options.smoothScale),
                    (M = l / (I = s / a)),
                    (A = r / (T = n / p)),
                    bo(),
                    ko(o, t),
                    C.width(s),
                    C.height(n),
                    k.width(M),
                    k.height(A),
                    k.css({ top: H - F, left: S - W }),
                    O.css({ top: -H, left: -S }),
                    ko(e, i),
                    zo(o, t, s, n),
                    (ho = o),
                    (fo = t),
                    (uo = e),
                    (vo = i),
                    (ro = s),
                    (co = n),
                    L && requestAnimFrame(Co);
            }
            function ko(o, t) {
                (S = (o -= d) - M / 2),
                    (H = (t -= n) - A / 2),
                    "lens" != V.options.position &&
                        V.options.lensCollision &&
                        (S < 0 && (S = 0), M <= a && a - M < S && (S = a - M), a < M && (S = a / 2 - M / 2), H < 0 && (H = 0), A <= p && p - A < H && (H = p - A), p < A && (H = p / 2 - A / 2));
            }
            function Oo() {
                void 0 !== m && m.remove(), void 0 !== w && w.remove(), void 0 !== N && N.remove();
            }
            function Mo(o) {
                var t = o.attr("title"),
                    o = o.attr("xtitle");
                return o || t || "";
            }
            (this.adaptive = function () {
                (0 != B && 0 != G) || (s.css("width", ""), s.css("height", ""), (B = s.width()), (G = s.height())),
                    Oo(),
                    (Q = Ao(window).width()),
                    ($ = Ao(window).height()),
                    (J = s.width()),
                    (K = s.height()),
                    B < J && (J = B),
                    G < K && (K = G),
                    (Q < B || $ < G ? !0 : !1) ? s.width("100%") : 0 != B && s.width(B),
                    "fullscreen" != P &&
                        (!(function () {
                            var o = s.offset();
                            l = "auto" == V.options.zoomWidth ? J : V.options.zoomWidth;
                            r = "auto" == V.options.zoomHeight ? K : V.options.zoomHeight;
                            "#" == V.options.position.substr(0, 1) ? (oo = Ao(V.options.position)) : (oo.length = 0);
                            if (0 != oo.length) return !0;
                            switch (P) {
                                case "lens":
                                case "inside":
                                    return !0;
                                case "top":
                                    (n = o.top), (d = o.left), (i = n - r), (c = d);
                                    break;
                                case "left":
                                    (n = o.top), (d = o.left), (i = n), (c = d - l);
                                    break;
                                case "bottom":
                                    (n = o.top), (d = o.left), (i = n + K), (c = d);
                                    break;
                                case "right":
                                default:
                                    (n = o.top), (d = o.left), (i = n), (c = d + J);
                            }
                            return !(Q < c + l || c < 0);
                        })()
                            ? (V.options.position = V.options.mposition)
                            : (V.options.position = P)),
                    V.options.lensReverse || (U = V.options.adaptiveReverse && V.options.position == V.options.mposition);
            }),
                (this.xscroll = function (o) {
                    var t, e;
                    (u = o.pageX || o.originalEvent.pageX),
                        (v = o.pageY || o.originalEvent.pageY),
                        o.preventDefault(),
                        o.xscale ? ((so = o.xscale), yo(u, v)) : ((t = -o.originalEvent.detail || o.originalEvent.wheelDelta || o.xdelta), (e = u), (o = v), mo && ((e = D), (o = Z)), (so += t = 0 < t ? -0.05 : 0.05), yo(e, o));
                }),
                (this.openzoom = function (o) {
                    switch (
                        ((u = o.pageX),
                        (v = o.pageY),
                        V.options.adaptive && V.adaptive(),
                        (so = V.options.defaultScale),
                        (L = !1),
                        (m = Ao("<div></div>")),
                        "" != V.options.sourceClass && m.addClass(V.options.sourceClass),
                        m.css("position", "absolute"),
                        (x = Ao("<div></div>")),
                        "" != V.options.loadingClass && x.addClass(V.options.loadingClass),
                        x.css("position", "absolute"),
                        (g = Ao('<div style="position: absolute; top: 0; left: 0;"></div>')),
                        m.append(x),
                        (w = Ao("<div></div>")),
                        "" != V.options.zoomClass && "fullscreen" != V.options.position && w.addClass(V.options.zoomClass),
                        w.css({ position: "absolute", overflow: "hidden", opacity: 1 }),
                        V.options.title &&
                            "" != wo &&
                            ((N = Ao("<div></div>")),
                            (j = Ao("<div></div>")),
                            N.css({ position: "absolute", opacity: 1 }),
                            V.options.titleClass && j.addClass(V.options.titleClass),
                            j.html("<span>" + wo + "</span>"),
                            N.append(j),
                            V.options.fadeIn && N.css({ opacity: 0 })),
                        (k = Ao("<div></div>")),
                        "" != V.options.lensClass && k.addClass(V.options.lensClass),
                        k.css({ position: "absolute", overflow: "hidden" }),
                        V.options.lens &&
                            ((lenstint = Ao("<div></div>")),
                            lenstint.css({ position: "absolute", background: V.options.lens, opacity: V.options.lensOpacity, width: "100%", height: "100%", top: 0, left: 0, "z-index": 9999 }),
                            k.append(lenstint)),
                        (function () {
                            switch (
                                ((p = "fullscreen" == V.options.position ? ((a = Ao(window).width()), Ao(window).height()) : ((a = s.width()), s.height())),
                                x.css({ top: p / 2 - x.height() / 2, left: a / 2 - x.width() / 2 }),
                                ((e = V.options.rootOutput || "fullscreen" == V.options.position ? s.offset() : s.position()).top = Math.round(e.top)),
                                (e.left = Math.round(e.left)),
                                V.options.position)
                            ) {
                                case "fullscreen":
                                    (n = xo().top), (d = xo().left), (c = i = 0);
                                    break;
                                case "inside":
                                    (n = e.top), (d = e.left), (c = i = 0);
                                    break;
                                case "top":
                                    (n = e.top), (d = e.left), (i = n - r), (c = d);
                                    break;
                                case "left":
                                    (n = e.top), (d = e.left), (i = n), (c = d - l);
                                    break;
                                case "bottom":
                                    (n = e.top), (d = e.left), (i = n + p), (c = d);
                                    break;
                                case "right":
                                default:
                                    (n = e.top), (d = e.left), (i = n), (c = d + a);
                            }
                            (n -= m.outerHeight() / 2),
                                (d -= m.outerWidth() / 2),
                                "#" == V.options.position.substr(0, 1) ? (oo = Ao(V.options.position)) : (oo.length = 0),
                                0 == oo.length && "inside" != V.options.position && "fullscreen" != V.options.position
                                    ? ((V.options.adaptive && B && G) || ((B = a), (G = p)),
                                      (l = "auto" == V.options.zoomWidth ? a : V.options.zoomWidth),
                                      (r = "auto" == V.options.zoomHeight ? p : V.options.zoomHeight),
                                      (i += V.options.Yoffset),
                                      (c += V.options.Xoffset),
                                      w.css({ width: l + "px", height: r + "px", top: i, left: c }),
                                      "lens" != V.options.position && t.append(w))
                                    : "inside" == V.options.position || "fullscreen" == V.options.position
                                    ? ((l = a), (r = p), w.css({ width: l + "px", height: r + "px" }), m.append(w))
                                    : ((l = oo.width()),
                                      (r = oo.height()),
                                      V.options.rootOutput ? ((i = oo.offset().top), (c = oo.offset().left), t.append(w)) : ((i = oo.position().top), (c = oo.position().left), oo.parent().append(w)),
                                      (i += (oo.outerHeight() - r - w.outerHeight()) / 2),
                                      (c += (oo.outerWidth() - l - w.outerWidth()) / 2),
                                      w.css({ width: l + "px", height: r + "px", top: i, left: c })),
                                V.options.title &&
                                    "" != wo &&
                                    ("inside" == V.options.position || "lens" == V.options.position || "fullscreen" == V.options.position
                                        ? ((h = i), (f = c), m.append(N))
                                        : ((h = i + (w.outerHeight() - r) / 2), (f = c + (w.outerWidth() - l) / 2), t.append(N)),
                                    N.css({ width: l + "px", height: r + "px", top: h, left: f })),
                                m.css({ width: a + "px", height: p + "px", top: n, left: d }),
                                g.css({ width: a + "px", height: p + "px" }),
                                V.options.tint && "inside" != V.options.position && "fullscreen" != V.options.position
                                    ? g.css("background-color", V.options.tint)
                                    : mo && g.css({ "background-image": "url(" + s.attr("src") + ")", "background-color": "#fff" }),
                                (y = new Image());
                            var o = "";
                            switch (
                                (go && (o = "?r=" + new Date().getTime()),
                                (y.src = s.attr("xoriginal") + o),
                                (C = Ao(y)).css("position", "absolute"),
                                ((y = new Image()).src = s.attr("src")),
                                (O = Ao(y)).css("position", "absolute"),
                                O.width(a),
                                V.options.position)
                            ) {
                                case "fullscreen":
                                case "inside":
                                    w.append(C);
                                    break;
                                case "lens":
                                    k.append(C), V.options.bg && C.css({ display: "none" });
                                    break;
                                default:
                                    w.append(C), k.append(O);
                            }
                        })(),
                        "inside" != V.options.position && "fullscreen" != V.options.position
                            ? ((V.options.tint || mo) && m.append(g), V.options.fadeIn && (g.css({ opacity: 0 }), k.css({ opacity: 0 }), w.css({ opacity: 0 })))
                            : V.options.fadeIn && w.css({ opacity: 0 }),
                        t.append(m),
                        V.eventmove(m),
                        V.eventleave(m),
                        V.options.position)
                    ) {
                        case "inside":
                            (i -= (w.outerHeight() - w.height()) / 2), (c -= (w.outerWidth() - w.width()) / 2);
                            break;
                        case "top":
                            (i -= w.outerHeight() - w.height()), (c -= (w.outerWidth() - w.width()) / 2);
                            break;
                        case "left":
                            (i -= (w.outerHeight() - w.height()) / 2), (c -= w.outerWidth() - w.width());
                            break;
                        case "bottom":
                            c -= (w.outerWidth() - w.width()) / 2;
                            break;
                        case "right":
                            i -= (w.outerHeight() - w.height()) / 2;
                    }
                    w.css({ top: i, left: c }),
                        C.xon("load", function (o) {
                            if ((x.remove(), !V.options.openOnSmall && (C.width() < l || C.height() < r))) return V.closezoom(), o.preventDefault(), !1;
                            V.options.scroll && V.eventscroll(m),
                                "inside" != V.options.position && "fullscreen" != V.options.position
                                    ? (m.append(k), V.options.fadeIn ? (g.fadeTo(300, V.options.tintOpacity), k.fadeTo(300, 1), w.fadeTo(300, 1)) : (g.css({ opacity: V.options.tintOpacity }), k.css({ opacity: 1 }), w.css({ opacity: 1 })))
                                    : V.options.fadeIn
                                    ? w.fadeTo(300, 1)
                                    : w.css({ opacity: 1 }),
                                V.options.title && "" != wo && (V.options.fadeIn ? N.fadeTo(300, 1) : N.css({ opacity: 1 })),
                                (q = C.width()),
                                (E = C.height()),
                                V.options.adaptive && (a < B || p < G) && (O.width(a), O.height(p), (q *= a / B), (E *= p / G), C.width(q), C.height(E)),
                                (ro = po = q),
                                (co = lo = E),
                                (R = q / E),
                                (X = q / l),
                                (Y = E / r);
                            for (var t, e = ["padding-", "border-"], i = (F = W = 0); i < e.length; i++)
                                (t = parseFloat(k.css(e[i] + "top-width"))),
                                    (F += t != t ? 0 : t),
                                    (t = parseFloat(k.css(e[i] + "bottom-width"))),
                                    (F += t != t ? 0 : t),
                                    (t = parseFloat(k.css(e[i] + "left-width"))),
                                    (W += t != t ? 0 : t),
                                    (t = parseFloat(k.css(e[i] + "right-width"))),
                                    (W += t != t ? 0 : t);
                            (F /= 2), (W /= 2), (uo = ho = no = u), (vo = fo = ao = v), yo(u, v), V.options.smooth && ((L = !0), requestAnimFrame(Co)), V.eventclick(m);
                        });
                }),
                (this.movezoom = function (o) {
                    (u = o.pageX), (v = o.pageY), mo && ((D = u), (Z = v));
                    var t = u - d,
                        e = v - n;
                    U && ((o.pageX -= 2 * (t - a / 2)), (o.pageY -= 2 * (e - p / 2))),
                        (t < 0 || a < t || e < 0 || p < e) && m.trigger("mouseleave"),
                        V.options.smooth ? ((no = o.pageX), (ao = o.pageY)) : (bo(), ko(o.pageX, o.pageY), k.css({ top: H - F, left: S - W }), O.css({ top: -H, left: -S }), zo(o.pageX, o.pageY, 0, 0));
                }),
                (this.eventdefault = function () {
                    (V.eventopen = function (o) {
                        o.xon("mouseenter", V.openzoom);
                    }),
                        (V.eventleave = function (o) {
                            o.xon("mouseleave", V.closezoom);
                        }),
                        (V.eventmove = function (o) {
                            o.xon("mousemove", V.movezoom);
                        }),
                        (V.eventscroll = function (o) {
                            o.xon("mousewheel DOMMouseScroll", V.xscroll);
                        }),
                        (V.eventclick = function (o) {
                            o.xon("click", function (o) {
                                s.trigger("click");
                            });
                        });
                }),
                (this.eventunbind = function () {
                    s.xoff("mouseenter"), (V.eventopen = function (o) {}), (V.eventleave = function (o) {}), (V.eventmove = function (o) {}), (V.eventscroll = function (o) {}), (V.eventclick = function (o) {});
                }),
                (this.init = function (o) {
                    (V.options = Ao.extend({}, Ao.fn.xzoom.defaults, o)),
                        (t = V.options.rootOutput ? Ao("body") : s.parent()),
                        (P = V.options.position),
                        (U = V.options.lensReverse && "inside" == V.options.position),
                        V.options.smoothZoomMove < 1 && (V.options.smoothZoomMove = 1),
                        V.options.smoothLensMove < 1 && (V.options.smoothLensMove = 1),
                        V.options.smoothScale < 1 && (V.options.smoothScale = 1),
                        V.options.adaptive &&
                            Ao(window).xon("load", function () {
                                (B = s.width()), (G = s.height()), V.adaptive(), Ao(window).resize(V.adaptive);
                            }),
                        V.eventdefault(),
                        V.eventopen(s);
                }),
                (this.destroy = function () {
                    V.eventunbind();
                }),
                (this.closezoom = function () {
                    (L = !1),
                        V.options.fadeOut
                            ? (V.options.title && "" != wo && N.fadeOut(299),
                              ("inside" == V.options.position && "fullscreen" == V.options.position) || w.fadeOut(299),
                              m.fadeOut(300, function () {
                                  Oo();
                              }))
                            : Oo();
                }),
                (this.gallery = function () {
                    for (var o = new Array(), t = 0, e = io; e < to.length; e++) (o[t] = to[e]), t++;
                    for (e = 0; e < io; e++) (o[t] = to[e]), t++;
                    return { index: io, ogallery: to, cgallery: o };
                }),
                (this.xappend = function (e) {
                    var i = e.parent();
                    function o(o) {
                        Oo(),
                            o.preventDefault(),
                            V.options.activeClass && (_.removeClass(V.options.activeClass), (_ = e).addClass(V.options.activeClass)),
                            (io = Ao(this).data("xindex")),
                            V.options.fadeTrans &&
                                (((z = new Image()).src = s.attr("src")),
                                (b = Ao(z)).css({ position: "absolute", top: s.offset().top, left: s.offset().left, width: s.width(), height: s.height() }),
                                Ao(document.body).append(b),
                                b.fadeOut(200, function () {
                                    b.remove();
                                }));
                        var t = i.attr("href"),
                            o = e.attr("xpreview") || e.attr("src");
                        (wo = Mo(e)), e.attr("title") && s.attr("title", e.attr("title")), s.attr("xoriginal", t), s.removeAttr("style"), s.attr("src", o), V.options.adaptive && ((B = s.width()), (G = s.height()));
                    }
                    (to[eo] = i.attr("href")),
                        i.data("xindex", eo),
                        0 == eo && V.options.activeClass && (_ = e).addClass(V.options.activeClass),
                        0 == eo && V.options.title && (wo = Mo(e)),
                        eo++,
                        V.options.hover && i.xon("mouseenter", i, o),
                        i.xon("click", i, o);
                }),
                this.init(o);
        }
        (Ao.fn.xon = Ao.fn.on || Ao.fn.bind),
            (Ao.fn.xoff = Ao.fn.off || Ao.fn.bind),
            (Ao.fn.xzoom = function (t) {
                var e, i;
                if (this.selector) {
                    var o,
                        s = this.selector.split(",");
                    for (o in s) s[o] = Ao.trim(s[o]);
                    this.each(function (o) {
                        if (1 == s.length)
                            if (0 == o) {
                                if (void 0 !== (e = Ao(this)).data("xzoom")) return e.data("xzoom");
                                e.x = new n(e, t);
                            } else void 0 !== e.x && ((i = Ao(this)), e.x.xappend(i));
                        else if (Ao(this).is(s[0]) && 0 == o) {
                            if (void 0 !== (e = Ao(this)).data("xzoom")) return e.data("xzoom");
                            e.x = new n(e, t);
                        } else void 0 === e.x || Ao(this).is(s[0]) || ((i = Ao(this)), e.x.xappend(i));
                    });
                } else
                    this.each(function (o) {
                        if (0 == o) {
                            if (void 0 !== (e = Ao(this)).data("xzoom")) return e.data("xzoom");
                            e.x = new n(e, t);
                        } else void 0 !== e.x && ((i = Ao(this)), e.x.xappend(i));
                    });
                return void 0 !== e && (e.data("xzoom", e.x), Ao(e).trigger("xzoom_ready"), e.x);
            }),
            (Ao.fn.xzoom.defaults = {
                position: "right",
                mposition: "inside",
                rootOutput: !0,
                Xoffset: 0,
                Yoffset: 0,
                fadeIn: !0,
                fadeTrans: !0,
                fadeOut: !1,
                smooth: !0,
                smoothZoomMove: 3,
                smoothLensMove: 1,
                smoothScale: 6,
                defaultScale: 0,
                scroll: !0,
                tint: !1,
                tintOpacity: 0.5,
                lens: !1,
                lensOpacity: 0.5,
                lensShape: "box",
                lensCollision: !0,
                lensReverse: !1,
                openOnSmall: !0,
                zoomWidth: "auto",
                zoomHeight: "auto",
                sourceClass: "xzoom-source",
                loadingClass: "xzoom-loading",
                lensClass: "xzoom-lens",
                zoomClass: "xzoom-preview",
                activeClass: "xactive",
                hover: !1,
                adaptive: !0,
                adaptiveReverse: !1,
                title: !1,
                titleClass: "xzoom-caption",
                bg: !1,
            });
    })(jQuery);
