var _0x9372 = ["onload", "scrollHeight", "documentElement", "scrollWidth", "length", "pop", "removeChild", "body", "div", "createElement", "position", "style", "absolute", "height", "px", "width", "overflow", "hidden", "visibility", "zIndex", "999", "appendChild", "backgroundColor", "transparent", "top", "2px", "left", "0px", "resize", "addEventListener", "onmousemove", "buttons", "movementX", "pow", "movementY", "sqrt", "pageY", "pageX", "random", "abs", "animate_sparkles(", ")", "floor", "sort", "rgb(", ", ", ",", "clip", "rect(0px, 5px, 5px, 0px)", "childNodes", "visible", "rect(1px, 4px, 4px, 1px)", "1px"];
const star = [],
    star_x = [],
    star_y = [],
    star_remaining_ticks = [],
    tiny = [],
    tiny_x = [],
    tiny_y = [],
    tiny_remaining_ticks = [],
    sparkles = 250,
    sparkle_lifetime = 30,
    sparkle_distance = 30;
let doc_height, doc_width, sparkles_enabled = null;

function sparkle(_ = null) {
    sparkles_enabled = null === _ ? !sparkles_enabled : !!_, sparkles_enabled && star[_0x9372[4]] < 250 && sparkle_init()
}

function sparkle_destroy() {
    let _;
    for (; tiny[_0x9372[4]];) _ = tiny[_0x9372[5]](), _ && document[_0x9372[7]][_0x9372[6]](_);
    for (; star[_0x9372[4]];) _ = star[_0x9372[5]](), _ && document[_0x9372[7]][_0x9372[6]](_)
}

function sparkle_init() {
    function _(_, t) {
        const x = document[_0x9372[9]](_0x9372[8]);
        return x[_0x9372[11]][_0x9372[10]] = _0x9372[12], x[_0x9372[11]][_0x9372[13]] = _ + _0x9372[14], x[_0x9372[11]][_0x9372[15]] = t + _0x9372[14], x[_0x9372[11]][_0x9372[16]] = _0x9372[17], x
    }
    for (let t = 0; t < 250; t++) {
        const x = _(3, 3);
        x[_0x9372[11]][_0x9372[18]] = _0x9372[17], x[_0x9372[11]][_0x9372[19]] = _0x9372[20], tiny[t] && document[_0x9372[7]][_0x9372[6]](tiny[t]), document[_0x9372[7]][_0x9372[21]](x), tiny[t] = x, tiny_remaining_ticks[t] = null;
        const n = _(5, 5);
        n[_0x9372[11]][_0x9372[22]] = _0x9372[23], n[_0x9372[11]][_0x9372[18]] = _0x9372[17], n[_0x9372[11]][_0x9372[19]] = _0x9372[20];
        const i = _(1, 5),
            a = _(5, 1);
        n[_0x9372[21]](i), n[_0x9372[21]](a), i[_0x9372[11]][_0x9372[24]] = _0x9372[25], i[_0x9372[11]][_0x9372[26]] = _0x9372[27], a[_0x9372[11]][_0x9372[24]] = _0x9372[27], a[_0x9372[11]][_0x9372[26]] = _0x9372[25], star[t] && document[_0x9372[7]][_0x9372[6]](star[t]), document[_0x9372[7]][_0x9372[21]](n), star[t] = n, star_remaining_ticks[t] = null
    }
    window[_0x9372[29]](_0x9372[28], (function() {
        for (let _ = 0; _ < 250; _++) star_remaining_ticks[_] = null, star[_][_0x9372[11]][_0x9372[26]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[24]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[18]] = _0x9372[17], tiny_remaining_ticks[_] = null, tiny[_][_0x9372[11]][_0x9372[24]] = _0x9372[27], tiny[_][_0x9372[11]][_0x9372[26]] = _0x9372[27], tiny[_][_0x9372[11]][_0x9372[18]] = _0x9372[17];
        doc_height = document[_0x9372[2]][_0x9372[1]], doc_width = document[_0x9372[2]][_0x9372[3]]
    })), document[_0x9372[30]] = function(_) {
        if (sparkles_enabled && !_[_0x9372[31]]) {
            const t = Math[_0x9372[35]](Math[_0x9372[33]](_[_0x9372[32]], 2) + Math[_0x9372[33]](_[_0x9372[34]], 2)),
                x = 30 * _[_0x9372[32]] * 2 / t,
                n = 30 * _[_0x9372[34]] * 2 / t,
                i = t / 30;
            let a = 0,
                r = _[_0x9372[36]],
                e = _[_0x9372[37]];
            for (; Math[_0x9372[39]](a) < Math[_0x9372[39]](_[_0x9372[32]]);) {
                create_star(e, r, i);
                let _ = Math[_0x9372[38]]();
                e -= x * _, r -= n * _, a += x * _
            }
        }
    }
}

function animate_sparkles(_ = 60) {
    const t = 1e3 / _;
    let x = 0;
    for (let _ = 0; _ < star[_0x9372[4]]; _++) x += update_star(_);
    for (let _ = 0; _ < tiny[_0x9372[4]]; _++) x += update_tiny(_);
    0 !== x || sparkles_enabled || sparkle_destroy(), setTimeout(_0x9372[40] + _ + _0x9372[41], t)
}

function create_star(_, t, x = 1) {
    if (_ + 5 >= doc_width || t + 5 >= doc_height) return;
    if (Math[_0x9372[38]]() > x) return;
    let n = 61,
        i = NaN;
    for (let _ = 0; _ < 250; _++) {
        if (!star_remaining_ticks[_]) {
            n = null, i = _;
            break
        }
        star_remaining_ticks[_] < n && (n = star_remaining_ticks[_], i = _)
    }
    n && star_to_tiny(i);
    var a = Math[_0x9372[42]](256 * Math[_0x9372[38]]()),
        r = Math[_0x9372[42]](256 * Math[_0x9372[38]]()),
        e = Math[_0x9372[42]](256 * Math[_0x9372[38]]()),
        s = _0x9372[44] + a + _0x9372[46] + r + _0x9372[46] + e + _0x9372[41];
    return i >= 0 ? (star_remaining_ticks[i] = 60, star_x[i] = _, star[i][_0x9372[11]][_0x9372[26]] = _ + _0x9372[14], star_y[i] = t, star[i][_0x9372[11]][_0x9372[24]] = t + _0x9372[14], star[i][_0x9372[11]][_0x9372[47]] = _0x9372[48], star[i][_0x9372[49]][0][_0x9372[11]][_0x9372[22]] = star[i][_0x9372[49]][1][_0x9372[11]][_0x9372[22]] = s, star[i][_0x9372[11]][_0x9372[18]] = _0x9372[50], i) : void 0
}

function update_star(_) {
    return null !== star_remaining_ticks[_] && (star_remaining_ticks[_] -= 1, 0 === star_remaining_ticks[_] ? (star_to_tiny(_), !1) : (30 === star_remaining_ticks[_] && (star[_][_0x9372[11]][_0x9372[47]] = _0x9372[51]), star_remaining_ticks[_] > 0 && (star_y[_] += 1 + 3 * Math[_0x9372[38]](), star_x[_] += (_ % 5 - 2) / 5, star_y[_] + 5 < doc_height && star_x[_] + 5 < doc_width) ? (star[_][_0x9372[11]][_0x9372[24]] = star_y[_] + _0x9372[14], star[_][_0x9372[11]][_0x9372[26]] = star_x[_] + _0x9372[14], !0) : (star_remaining_ticks[_] = null, star[_][_0x9372[11]][_0x9372[26]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[24]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[18]] = _0x9372[17], !1)))
}

function star_to_tiny(_) {
    null !== star_remaining_ticks[_] && (star_y[_] + 3 < doc_height && star_x[_] + 3 < doc_width && (tiny_remaining_ticks[_] = 60, tiny_y[_] = star_y[_], tiny[_][_0x9372[11]][_0x9372[24]] = star_y[_] + _0x9372[14], tiny_x[_] = star_x[_], tiny[_][_0x9372[11]][_0x9372[26]] = star_x[_] + _0x9372[14], tiny[_][_0x9372[11]][_0x9372[15]] = _0x9372[25], tiny[_][_0x9372[11]][_0x9372[13]] = _0x9372[25], tiny[_][_0x9372[11]][_0x9372[22]] = star[_][_0x9372[49]][0][_0x9372[11]][_0x9372[22]], star[_][_0x9372[11]][_0x9372[18]] = _0x9372[17], tiny[_][_0x9372[11]][_0x9372[18]] = _0x9372[50]), star_remaining_ticks[_] = null, star[_][_0x9372[11]][_0x9372[26]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[24]] = _0x9372[27], star[_][_0x9372[11]][_0x9372[18]] = _0x9372[17])
}

function update_tiny(_) {
    return null !== tiny_remaining_ticks[_] && (tiny_remaining_ticks[_] -= 1, 30 === tiny_remaining_ticks[_] && (tiny[_][_0x9372[11]][_0x9372[15]] = _0x9372[52], tiny[_][_0x9372[11]][_0x9372[13]] = _0x9372[52]), tiny_remaining_ticks[_] > 0 && (tiny_y[_] += 1 + 2 * Math[_0x9372[38]](), tiny_x[_] += (_ % 4 - 2) / 4, tiny_y[_] + 3 < doc_height && tiny_x[_] + 3 < doc_width) ? (tiny[_][_0x9372[11]][_0x9372[24]] = tiny_y[_] + _0x9372[14], tiny[_][_0x9372[11]][_0x9372[26]] = tiny_x[_] + _0x9372[14], !0) : (tiny_remaining_ticks[_] = null, tiny[_][_0x9372[11]][_0x9372[24]] = _0x9372[27], tiny[_][_0x9372[11]][_0x9372[26]] = _0x9372[27], tiny[_][_0x9372[11]][_0x9372[18]] = _0x9372[17], !1))
}
window[_0x9372[0]] = function() {
    doc_height = document[_0x9372[2]][_0x9372[1]], doc_width = document[_0x9372[2]][_0x9372[3]], animate_sparkles(), null === sparkles_enabled && sparkle(!0)
};