(()=>{
    "use strict";
    var e = {
        392: (e,t)=>{
            var n, s, a, r, o, i, c, l, u, E, h, p = "ArrowFunctionExpression", d = "BlockStatement", T = "EmptyStatement", m = "ExportBatchSpecifier", f = "GeneratorExpression", A = "Identifier", _ = "IfStatement", C = "Literal", g = "LogicalExpression", k = "Property", I = "VariableDeclaration", N = 15, S = {
                "||": 3,
                "&&": 4,
                "|": 5,
                "^": 6,
                "&": 7,
                "==": 8,
                "!=": 8,
                "===": 8,
                "!==": 8,
                is: 8,
                isnt: 8,
                "<": 9,
                ">": 9,
                "<=": 9,
                ">=": 9,
                in: 9,
                instanceof: 9,
                "<<": 10,
                ">>": 10,
                ">>>": 10,
                "+": 11,
                "-": 11,
                "*": 12,
                "%": 12,
                "/": 12,
                "??": 3,
                "**": 14
            }, R = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], b = new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]");
            function D(e) {
                if (e < 128)
                    return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57 || 36 === e || 95 === e || 92 === e;
                var t = String.fromCharCode(e);
                return b.test(t)
            }
            function P(e) {
                return 10 === e || 13 === e || 8232 === e || 8233 === e
            }
            function O(e) {
                return 32 === e || 9 === e || P(e) || 11 === e || 12 === e || 160 === e || e >= 5760 && R.indexOf(e) >= 0
            }
            function L(e, t) {
                var n = "";
                for (t |= 0; t > 0; t >>>= 1,
                e += e)
                    1 & t && (n += e);
                return n
            }
            function M(e, t) {
                var n, s;
                function a(e) {
                    return "object" == typeof e && e instanceof Object && !(e instanceof RegExp)
                }
                for (n in t)
                    t.hasOwnProperty(n) && (a(s = t[n]) ? a(e[n]) ? M(e[n], s) : e[n] = M({}, s) : e[n] = s);
                return e
            }
            function y(e, t) {
                return 8232 == (-2 & e) ? (t ? "u" : "\\u") + (8232 === e ? "2028" : "2029") : 10 === e || 13 === e ? (t ? "" : "\\") + (10 === e ? "n" : "r") : String.fromCharCode(e)
            }
            function w(e, t) {
                var n, a, r = "\\";
                switch (e) {
                case 8:
                    r += "b";
                    break;
                case 12:
                    r += "f";
                    break;
                case 9:
                    r += "t";
                    break;
                default:
                    n = e.toString(16).toUpperCase(),
                    s || e > 255 ? r += "u" + "0000".slice(n.length) + n : 0 !== e || (a = t) >= 48 && a <= 57 ? r += 11 === e ? "x0B" : "x" + "00".slice(n.length) + n : r += "0"
                }
                return r
            }
            function v(e) {
                var t = "\\";
                switch (e) {
                case 92:
                    t += "\\";
                    break;
                case 10:
                    t += "n";
                    break;
                case 13:
                    t += "r";
                    break;
                case 8232:
                    t += "u2028";
                    break;
                case 8233:
                    t += "u2029"
                }
                return t
            }
            function B(e, t) {
                if (!e.length)
                    return t;
                if (!t.length)
                    return e;
                var n = e.charCodeAt(e.length - 1)
                  , s = t.charCodeAt(0);
                return D(n) && D(s) || n === s && (43 === n || 45 === n) || 47 === n && 105 === s ? e + ne.space + t : O(n) || O(s) ? e + t : e + ne.optSpace + t
            }
            function U() {
                var e = ne.indent;
                return ne.indent += ne.indentUnit,
                e
            }
            function x(e) {
                return e.type === d ? ne.optSpace : e.type === T ? "" : ne.newline + ne.indent + ne.indentUnit
            }
            function H(e) {
                return e.type === d ? ne.optSpace : ne.newline + ne.indent
            }
            function F(e) {
                var t = e.body;
                if (function(e) {
                    var t = e.params
                      , n = t.length
                      , s = n - 1;
                    if (e.type === p && 1 === n && t[0].type === A)
                        ne.js += t[0].name;
                    else {
                        ne.js += "(";
                        for (var a = 0; a < n; ++a) {
                            var r = t[a];
                            t[a].type === A ? ne.js += r.name : se[r.type](r, G.e4),
                            a !== s && (ne.js += "," + ne.optSpace)
                        }
                        ne.js += ")"
                    }
                }(e),
                e.type === p && (ne.js += ne.optSpace + "=>"),
                e.expression) {
                    ne.js += ne.optSpace;
                    var n = Z(t, G.e4);
                    "{" === n.charAt(0) && (n = "(" + n + ")"),
                    ne.js += n
                } else
                    ne.js += x(t),
                    ae[t.type](t, G.s8)
            }
            (n = Array.isArray) || (n = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            );
            var G = {
                e1: function(e) {
                    return {
                        precedence: 1,
                        allowIn: e,
                        allowCall: !0,
                        allowUnparenthesizedNew: !0
                    }
                },
                e2: function(e) {
                    return {
                        precedence: 3,
                        allowIn: e,
                        allowCall: !0,
                        allowUnparenthesizedNew: !0
                    }
                },
                e3: {
                    precedence: N,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !1
                },
                e4: {
                    precedence: 1,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e5: {
                    precedence: 0,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e6: function(e) {
                    return {
                        precedence: 16,
                        allowIn: !0,
                        allowCall: !1,
                        allowUnparenthesizedNew: e
                    }
                },
                e7: {
                    precedence: 13,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e8: {
                    precedence: 14,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e9: {
                    precedence: void 0,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e10: {
                    precedence: N,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e11: function(e) {
                    return {
                        precedence: N,
                        allowIn: !0,
                        allowCall: e,
                        allowUnparenthesizedNew: !1
                    }
                },
                e12: {
                    precedence: 19,
                    allowIn: !1,
                    allowCall: !1,
                    allowUnparenthesizedNew: !0
                },
                e13: {
                    precedence: 19,
                    allowIn: !0,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e14: {
                    precedence: 0,
                    allowIn: !1,
                    allowCall: !0,
                    allowUnparenthesizedNew: !0
                },
                e15: function(e) {
                    return {
                        precedence: 0,
                        allowIn: !0,
                        allowCall: e,
                        allowUnparenthesizedNew: !0
                    }
                },
                e16: function(e, t) {
                    return {
                        precedence: e,
                        allowIn: t,
                        allowCall: !0,
                        allowUnparenthesizedNew: !0
                    }
                },
                e17: function(e) {
                    return {
                        precedence: N,
                        allowIn: e,
                        allowCall: !0,
                        allowUnparenthesizedNew: !0
                    }
                },
                e18: function(e) {
                    return {
                        precedence: 1,
                        allowIn: e,
                        allowCall: !0,
                        allowUnparenthesizedNew: !0
                    }
                },
                e19: {
                    precedence: 0,
                    allowIn: !0,
                    allowCall: !0,
                    semicolonOptional: !1
                },
                e20: {
                    precedence: 14,
                    allowCall: !0
                },
                s1: function(e, t) {
                    return {
                        allowIn: !0,
                        functionBody: !1,
                        directiveContext: e,
                        semicolonOptional: t
                    }
                },
                s2: {
                    allowIn: !0,
                    functionBody: !1,
                    directiveContext: !1,
                    semicolonOptional: !0
                },
                s3: function(e) {
                    return {
                        allowIn: e,
                        functionBody: !1,
                        directiveContext: !1,
                        semicolonOptional: !1
                    }
                },
                s4: function(e) {
                    return {
                        allowIn: !0,
                        functionBody: !1,
                        directiveContext: !1,
                        semicolonOptional: e
                    }
                },
                s5: function(e) {
                    return {
                        allowIn: !0,
                        functionBody: !1,
                        directiveContext: !0,
                        semicolonOptional: e
                    }
                },
                s6: {
                    allowIn: !1,
                    functionBody: !1,
                    directiveContext: !1,
                    semicolonOptional: !1
                },
                s7: {
                    allowIn: !0,
                    functionBody: !1,
                    directiveContext: !1,
                    semicolonOptional: !1
                },
                s8: {
                    allowIn: !0,
                    functionBody: !0,
                    directiveContext: !1,
                    semicolonOptional: !1
                }
            }
              , j = /[.eExX]|^0[0-9]+/
              , Y = /[0-9]$/;
            function q(e) {
                return !!e && e.type === g
            }
            function V(e, t, n) {
                var s = e.operator
                  , a = S[e.operator]
                  , r = a < t.precedence
                  , o = t.allowIn || r
                  , i = G.e16(a, o)
                  , c = Z(e.left, i, e);
                r |= "in" === s && !o;
                var l = function(e, t) {
                    switch (e.operator) {
                    case "||":
                        return !!q(t) && ("??" === t.operator || "&&" === t.operator);
                    case "&&":
                        return q(t);
                    case "??":
                        return q(t) && "??" !== t.operator
                    }
                }(e, n);
                (r || l) && (ne.js += "("),
                c = 47 === c.charCodeAt(c.length - 1) && D(s.charCodeAt(0)) ? c + ne.space + s : B(c, s),
                i.precedence++;
                var u = Z(e.right, i);
                "/" === s && "/" === u.charAt(0) || "<" === s.slice(-1) && "!--" === u.slice(0, 3) ? c += ne.space + u : c = B(c, u),
                ne.js += c,
                (r || l) && (ne.js += ")")
            }
            function X(e) {
                var t = e.elements
                  , n = t.length;
                if (n) {
                    var s = n - 1
                      , a = n > 1
                      , r = U()
                      , o = ne.newline + ne.indent;
                    ne.js += "[";
                    for (var i = 0; i < n; i++) {
                        var c = t[i];
                        a && (ne.js += o),
                        c && se[c.type](c, G.e4),
                        i === s && c || (ne.js += ",")
                    }
                    ne.indent = r,
                    a && (ne.js += ne.newline + ne.indent),
                    ne.js += "]"
                } else
                    ne.js += "[]"
            }
            function W(e) {
                var t = e.blocks
                  , n = e.filter
                  , s = e.type === f
                  , a = s ? "(" : "["
                  , r = Z(e.body, G.e4);
                if (t) {
                    for (var o = U(), i = t.length, c = 0; c < i; ++c) {
                        var l = Z(t[c], G.e5);
                        a = c > 0 ? B(a, l) : a + l
                    }
                    ne.indent = o
                }
                if (n) {
                    var u = Z(n, G.e5);
                    a = B(a, "if" + ne.optSpace),
                    a = B(a, "(" + u + ")")
                }
                a = B(a, r),
                a += s ? ")" : "]",
                ne.js += a
            }
            var Q = {
                SequenceExpression: function(e, t) {
                    var n = e.expressions
                      , s = n.length
                      , a = s - 1
                      , r = 0 < t.precedence
                      , o = G.e1(t.allowIn || r);
                    r && (ne.js += "(");
                    for (var i = 0; i < s; i++) {
                        var c = n[i];
                        se[c.type](c, o),
                        i !== a && (ne.js += "," + ne.optSpace)
                    }
                    r && (ne.js += ")")
                },
                AssignmentExpression: function(e, t) {
                    var n = e.left
                      , s = e.right
                      , a = 1 < t.precedence
                      , r = t.allowIn || a;
                    a && (ne.js += "("),
                    se[n.type](n, G.e17(r)),
                    ne.js += ne.optSpace + e.operator + ne.optSpace,
                    se[s.type](s, G.e18(r)),
                    a && (ne.js += ")")
                },
                AssignmentPattern: function(e) {
                    var t = {
                        left: e.left,
                        right: e.right,
                        operator: "="
                    };
                    se.AssignmentExpression(t, G.e4)
                },
                ArrowFunctionExpression: function(e, t) {
                    var n = 2 < t.precedence;
                    n && (ne.js += "("),
                    e.async && (ne.js += "async "),
                    F(e),
                    n && (ne.js += ")")
                },
                AwaitExpression: function(e, t) {
                    var n = 14 < t.precedence;
                    n && (ne.js += "("),
                    ne.js += e.all ? "await* " : "await ",
                    se[e.argument.type](e.argument, G.e20),
                    n && (ne.js += ")")
                },
                ConditionalExpression: function(e, t) {
                    var n = e.test
                      , s = e.consequent
                      , a = e.alternate
                      , r = 2 < t.precedence
                      , o = t.allowIn || r
                      , i = G.e2(o)
                      , c = G.e1(o);
                    r && (ne.js += "("),
                    se[n.type](n, i),
                    ne.js += ne.optSpace + "?" + ne.optSpace,
                    se[s.type](s, c),
                    ne.js += ne.optSpace + ":" + ne.optSpace,
                    se[a.type](a, c),
                    r && (ne.js += ")")
                },
                LogicalExpression: V,
                BinaryExpression: V,
                CallExpression: function(e, t) {
                    var n = e.callee
                      , s = e.arguments
                      , a = s.length
                      , r = a - 1
                      , o = !t.allowCall || N < t.precedence;
                    o && (ne.js += "("),
                    se[n.type](n, G.e3),
                    e.optional && (ne.js += "?."),
                    ne.js += "(";
                    for (var i = 0; i < a; ++i) {
                        var c = s[i];
                        se[c.type](c, G.e4),
                        i !== r && (ne.js += "," + ne.optSpace)
                    }
                    ne.js += ")",
                    o && (ne.js += ")")
                },
                NewExpression: function(e, t) {
                    var n = e.arguments
                      , s = 16 < t.precedence
                      , a = n.length
                      , r = a - 1
                      , o = !t.allowUnparenthesizedNew || c || a > 0
                      , i = Z(e.callee, G.e6(!o));
                    if (s && (ne.js += "("),
                    ne.js += B("new", i),
                    o) {
                        ne.js += "(";
                        for (var l = 0; l < a; ++l) {
                            var u = n[l];
                            se[u.type](u, G.e4),
                            l !== r && (ne.js += "," + ne.optSpace)
                        }
                        ne.js += ")"
                    }
                    s && (ne.js += ")")
                },
                MemberExpression: function(e, t) {
                    var n = e.object
                      , s = e.property
                      , a = 18 < t.precedence
                      , r = !e.computed && n.type === C && "number" == typeof n.value;
                    if (a && (ne.js += "("),
                    r) {
                        var o = Z(n, G.e11(t.allowCall))
                          , i = Y.test(o) && !j.test(o);
                        ne.js += i ? o + "." : o
                    } else
                        se[n.type](n, G.e11(t.allowCall));
                    e.computed ? (e.optional && (ne.js += "?."),
                    ne.js += "[",
                    se[s.type](s, G.e15(t.allowCall)),
                    ne.js += "]") : ne.js += (e.optional ? "?." : ".") + s.name,
                    a && (ne.js += ")")
                },
                UnaryExpression: function(e, t) {
                    var n = 13 < t.precedence
                      , s = e.operator
                      , a = Z(e.argument, G.e7);
                    if (n && (ne.js += "("),
                    "" === ne.optSpace || s.length > 2)
                        ne.js += B(s, a);
                    else {
                        ne.js += s;
                        var r = s.charCodeAt(s.length - 1)
                          , o = a.charCodeAt(0);
                        (r === o && (43 === r || 45 === r) || D(r) && D(o)) && (ne.js += ne.space),
                        ne.js += a
                    }
                    n && (ne.js += ")")
                },
                YieldExpression: function(e, t) {
                    var n = e.argument
                      , s = e.delegate ? "yield*" : "yield"
                      , a = 1 < t.precedence;
                    a && (ne.js += "("),
                    n && (s = B(s, Z(n, G.e4))),
                    ne.js += s,
                    a && (ne.js += ")")
                },
                UpdateExpression: function(e, t) {
                    var n = e.argument
                      , s = e.operator
                      , a = e.prefix
                      , r = (a ? 13 : 14) < t.precedence;
                    r && (ne.js += "("),
                    a ? (ne.js += s,
                    se[n.type](n, G.e8)) : (se[n.type](n, G.e8),
                    ne.js += s),
                    r && (ne.js += ")")
                },
                FunctionExpression: function(e) {
                    var t = !!e.generator;
                    e.async && (ne.js += "async "),
                    ne.js += t ? "function*" : "function",
                    e.id ? (ne.js += t ? ne.optSpace : ne.space,
                    ne.js += e.id.name) : ne.js += ne.optSpace,
                    F(e)
                },
                ExportBatchSpecifier: function() {
                    ne.js += "*"
                },
                ArrayPattern: X,
                ArrayExpression: X,
                ClassExpression: function(e) {
                    var t = e.id
                      , n = e.superClass
                      , s = e.body
                      , a = "class";
                    if (t && (a = B(a, Z(t, G.e9))),
                    n) {
                        var r = Z(n, G.e4);
                        r = B("extends", r),
                        a = B(a, r)
                    }
                    ne.js += a + ne.optSpace,
                    ae[s.type](s, G.s2)
                },
                MetaProperty: function(e, t) {
                    var n = e.meta
                      , s = e.property
                      , a = 18 < t.precedence;
                    a && (ne.js += "("),
                    ne.js += ("string" == typeof n ? n : n.name) + "." + ("string" == typeof s ? s : s.name),
                    a && (ne.js += ")")
                },
                MethodDefinition: function(e) {
                    var t = e.static ? "static" + ne.optSpace : ""
                      , n = Z(e.key, G.e5);
                    e.computed && (n = "[" + n + "]"),
                    "get" === e.kind || "set" === e.kind ? (n = B(e.kind, n),
                    ne.js += B(t, n)) : e.value.generator ? ne.js += t + "*" + n : e.value.async ? ne.js += t + "async " + n : ne.js += B(t, n),
                    F(e.value)
                },
                Property: function(e) {
                    var t = e.value
                      , n = e.kind
                      , s = Z(e.key, G.e4);
                    e.computed && (s = "[" + s + "]"),
                    "get" === n || "set" === n ? (ne.js += n + ne.space + s,
                    F(t)) : e.shorthand ? ne.js += s : e.method ? (t.generator ? s = "*" + s : t.async && (s = "async " + s),
                    ne.js += s,
                    F(t)) : (ne.js += s + ":" + ne.optSpace,
                    se[t.type](t, G.e4))
                },
                ObjectExpression: function(e) {
                    var t = e.properties
                      , n = t.length;
                    if (n) {
                        var s = n - 1
                          , a = U();
                        ne.js += "{";
                        for (var r = 0; r < n; r++) {
                            var o = t[r]
                              , i = o.type || k;
                            ne.js += ne.newline + ne.indent,
                            se[i](o, G.e5),
                            r !== s && (ne.js += ",")
                        }
                        ne.indent = a,
                        ne.js += ne.newline + ne.indent + "}"
                    } else
                        ne.js += "{}"
                },
                ObjectPattern: function(e) {
                    var t = e.properties
                      , n = t.length;
                    if (n) {
                        var s = n - 1
                          , a = !1;
                        if (1 === n)
                            a = t[0].value.type !== A;
                        else
                            for (var r = 0; r < n; r++)
                                if (!t[r].shorthand) {
                                    a = !0;
                                    break
                                }
                        ne.js += a ? "{" + ne.newline : "{";
                        var o = U()
                          , i = "," + (a ? ne.newline : ne.optSpace);
                        for (r = 0; r < n; r++) {
                            var c = t[r];
                            a && (ne.js += ne.indent),
                            se[c.type](c, G.e5),
                            r !== s && (ne.js += i)
                        }
                        ne.indent = o,
                        ne.js += a ? ne.newline + ne.indent + "}" : "}"
                    } else
                        ne.js += "{}"
                },
                ThisExpression: function() {
                    ne.js += "this"
                },
                Identifier: function(e, t, n) {
                    ne.js += e.name
                },
                ImportExpression: function(e, t) {
                    var n = N < t.precedence
                      , s = e.source;
                    n && (ne.js += "("),
                    ne.js += "import(",
                    se[s.type](s, G.e4),
                    ne.js += ")",
                    n && (ne.js += ")")
                },
                ImportSpecifier: function(e) {
                    ne.js += e.imported.name,
                    e.local && (ne.js += ne.space + "as" + ne.space + e.local.name)
                },
                ExportSpecifier: function(e) {
                    ne.js += e.local.name,
                    e.exported && (ne.js += ne.space + "as" + ne.space + e.exported.name)
                },
                ChainExpression: function(e, t) {
                    var n = 17 < t.precedence
                      , s = e.expression
                      , a = {
                        precedence: 17,
                        allowIn: (t = t || {}).allowIn,
                        allowCall: t.allowCall,
                        allowUnparenthesizedNew: t.allowUnparenthesizedNew
                    };
                    n && (a.allowCall = !0,
                    ne.js += "("),
                    se[s.type](s, a),
                    n && (ne.js += ")")
                },
                Literal: function(e) {
                    if (h.raw && void 0 !== e.raw)
                        ne.js += e.raw;
                    else if (null === e.value)
                        ne.js += "null";
                    else {
                        var t = typeof e.value;
                        ne.js += "string" === t ? function(e) {
                            var t, n, a, r, c, l = "", u = 0, E = 0;
                            for (t = 0,
                            n = e.length; t < n; ++t) {
                                if (39 === (a = e.charCodeAt(t)))
                                    ++u;
                                else if (34 === a)
                                    ++E;
                                else if (47 === a && s)
                                    l += "\\";
                                else {
                                    if (P(a) || 92 === a) {
                                        l += v(a);
                                        continue
                                    }
                                    if (s && a < 32 || !(s || i || a >= 32 && a <= 126)) {
                                        l += w(a, e.charCodeAt(t + 1));
                                        continue
                                    }
                                }
                                l += String.fromCharCode(a)
                            }
                            if (c = (r = !("double" === o || "auto" === o && E < u)) ? "'" : '"',
                            !(r ? u : E))
                                return c + l + c;
                            for (e = l,
                            l = c,
                            t = 0,
                            n = e.length; t < n; ++t)
                                (39 === (a = e.charCodeAt(t)) && r || 34 === a && !r) && (l += "\\"),
                                l += String.fromCharCode(a);
                            return l + c
                        }(e.value) : "number" === t ? function(e) {
                            var t, n, o, i, c;
                            if (e === 1 / 0)
                                return s ? "null" : a ? "1e400" : "1e+400";
                            if (t = "" + e,
                            !a || t.length < 3)
                                return t;
                            for (n = t.indexOf("."),
                            s || 48 !== t.charCodeAt(0) || 1 !== n || (n = 0,
                            t = t.slice(1)),
                            o = t,
                            t = t.replace("e+", "e"),
                            i = 0,
                            (c = o.indexOf("e")) > 0 && (i = +o.slice(c + 1),
                            o = o.slice(0, c)),
                            n >= 0 && (i -= o.length - n - 1,
                            o = +(o.slice(0, n) + o.slice(n + 1)) + ""),
                            c = 0; 48 === o.charCodeAt(o.length + c - 1); )
                                --c;
                            return 0 !== c && (i -= c,
                            o = o.slice(0, c)),
                            0 !== i && (o += "e" + i),
                            (o.length < t.length || r && e > 1e12 && Math.floor(e) === e && (o = "0x" + e.toString(16)).length < t.length) && +o === e && (t = o),
                            t
                        }(e.value) : "boolean" === t ? e.value ? "true" : "false" : function(e) {
                            var t, n, s, a, r, o, i, c;
                            if (n = e.toString(),
                            e.source) {
                                if (!(t = n.match(/\/([^/]*)$/)))
                                    return n;
                                for (s = t[1],
                                n = "",
                                i = !1,
                                c = !1,
                                a = 0,
                                r = e.source.length; a < r; ++a)
                                    o = e.source.charCodeAt(a),
                                    c ? (n += y(o, c),
                                    c = !1) : (i ? 93 === o && (i = !1) : 47 === o ? n += "\\" : 91 === o && (i = !0),
                                    n += y(o, c),
                                    c = 92 === o);
                                return "/" + n + "/" + s
                            }
                            return n
                        }(e.value)
                    }
                },
                GeneratorExpression: W,
                ComprehensionExpression: W,
                ComprehensionBlock: function(e) {
                    var t = e.left
                      , n = void 0
                      , s = Z(e.right, G.e5);
                    n = B(n = t.type === I ? t.kind + ne.space + ee(t.declarations[0], G.s6) : Z(t, G.e10), e.of ? "of" : "in"),
                    ne.js += "for" + ne.optSpace + "(" + B(n, s) + ")"
                },
                RestElement: function(e) {
                    ne.js += "..." + e.argument.name
                },
                SpreadElement: function(e) {
                    var t = e.argument;
                    ne.js += "...",
                    se[t.type](t, G.e4)
                },
                TaggedTemplateExpression: function(e, t) {
                    var n = e.tag
                      , s = e.quasi
                      , a = 17 < t.precedence;
                    a && (ne.js += "("),
                    se[n.type](n, G.e11(t.allowCall)),
                    se[s.type](s, G.e12),
                    a && (ne.js += ")")
                },
                TemplateElement: function(e) {
                    ne.js += e.value.raw
                },
                TemplateLiteral: function(e) {
                    var t = e.quasis
                      , n = e.expressions
                      , s = t.length
                      , a = s - 1;
                    ne.js += "`";
                    for (var r = 0; r < s; ++r) {
                        var o = t[r];
                        if (se[o.type](o, G.e13),
                        r !== a) {
                            var i = n[r];
                            ne.js += "${" + ne.optSpace,
                            se[i.type](i, G.e5),
                            ne.js += ne.optSpace + "}"
                        }
                    }
                    ne.js += "`"
                },
                Super: function() {
                    ne.js += "super"
                }
            }
              , K = /^{|^class(?:\s|{)|^(async )?function(?:\s|\*|\()/;
            function z(e, t, n) {
                for (var s = n.length, a = s - 1, r = 0; r < s; ++r)
                    e = B(e, ee(n[r], G.s7)),
                    (t || r !== a) && (e += H(n[r].body));
                return e
            }
            function J(e, t, n) {
                var s = t.body
                  , a = t.left
                  , r = !l && n.semicolonOptional
                  , o = U()
                  , i = "for" + (t.await ? " await" : "") + ne.optSpace + "(";
                if (a.type === I) {
                    var c = U();
                    i += a.kind + ne.space + ee(a.declarations[0], G.s6),
                    ne.indent = c
                } else
                    i += Z(a, G.e10);
                i = B(i, e),
                i = B(i, Z(t.right, G.e4)) + ")",
                ne.indent = o,
                ne.js += i + x(s),
                ae[s.type](s, G.s4(r))
            }
            var $ = {
                BlockStatement: function(e, t) {
                    var n = e.body
                      , s = n.length
                      , a = s - 1
                      , r = U();
                    ne.js += "{" + ne.newline;
                    for (var o = 0; o < s; o++) {
                        var i = n[o];
                        ne.js += ne.indent,
                        ae[i.type](i, G.s1(t.functionBody, o === a)),
                        ne.js += ne.newline
                    }
                    ne.indent = r,
                    ne.js += ne.indent + "}"
                },
                BreakStatement: function(e, t) {
                    e.label ? ne.js += "break " + e.label.name : ne.js += "break",
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                ContinueStatement: function(e, t) {
                    e.label ? ne.js += "continue " + e.label.name : ne.js += "continue",
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                ClassBody: function(e) {
                    var t = e.body
                      , n = t.length
                      , s = n - 1
                      , a = U();
                    ne.js += "{" + ne.newline;
                    for (var r = 0; r < n; r++) {
                        var o = t[r]
                          , i = o.type || k;
                        ne.js += ne.indent,
                        se[i](o, G.e5),
                        r !== s && (ne.js += ne.newline)
                    }
                    ne.indent = a,
                    ne.js += ne.newline + ne.indent + "}"
                },
                ClassDeclaration: function(e) {
                    var t = e.body
                      , n = e.superClass
                      , s = "class " + e.id.name;
                    if (n) {
                        var a = Z(n, G.e4);
                        s += ne.space + B("extends", a)
                    }
                    ne.js += s + ne.optSpace,
                    ae[t.type](t, G.s2)
                },
                DirectiveStatement: function(e, t) {
                    h.raw && e.raw ? ne.js += e.raw : ne.js += function(e) {
                        var t, n, s, a;
                        for (a = "double" === o ? '"' : "'",
                        t = 0,
                        n = e.length; t < n; ++t) {
                            if (39 === (s = e.charCodeAt(t))) {
                                a = '"';
                                break
                            }
                            if (34 === s) {
                                a = "'";
                                break
                            }
                            92 === s && ++t
                        }
                        return a + e + a
                    }(e.directive),
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                DoWhileStatement: function(e, t) {
                    var n = e.body
                      , s = e.test
                      , a = B("do", x(n) + ee(n, G.s7) + H(n));
                    ne.js += B(a, "while" + ne.optSpace + "("),
                    se[s.type](s, G.e5),
                    ne.js += ")",
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                CatchClause: function(e) {
                    var t = e.param
                      , n = e.guard
                      , s = e.body
                      , a = U();
                    ne.js += "catch" + ne.optSpace,
                    t && (ne.js += "(",
                    se[t.type](t, G.e5)),
                    n && (ne.js += " if ",
                    se[n.type](n, G.e5)),
                    ne.indent = a,
                    t && (ne.js += ")"),
                    ne.js += x(s),
                    ae[s.type](s, G.s7)
                },
                DebuggerStatement: function(e, t) {
                    ne.js += "debugger",
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                EmptyStatement: function() {
                    ne.js += ";"
                },
                ExportAllDeclaration: function(e, t) {
                    $.ExportDeclaration(e, t, !0)
                },
                ExportDeclaration: function(e, t, n) {
                    var s = e.specifiers
                      , a = e.declaration
                      , r = l || !t.semicolonOptional;
                    if (e.default) {
                        var o = Z(a, G.e4);
                        ne.js += B("export default", o),
                        r && (ne.js += ";")
                    } else if (s || n) {
                        var i = "export";
                        if (n)
                            i += ne.optSpace + "*";
                        else if (0 === s.length)
                            i += ne.optSpace + "{" + ne.optSpace + "}";
                        else if (s[0].type === m)
                            i = B(i, Z(s[0], G.e5));
                        else {
                            var c = U()
                              , u = s.length
                              , E = u - 1;
                            i += ne.optSpace + "{";
                            for (var h = 0; h < u; ++h)
                                i += ne.newline + ne.indent,
                                i += Z(s[h], G.e5),
                                h !== E && (i += ",");
                            ne.indent = c,
                            i += ne.newline + ne.indent + "}"
                        }
                        e.source ? (ne.js += B(i, "from" + ne.optSpace),
                        se.Literal(e.source)) : ne.js += i,
                        r && (ne.js += ";")
                    } else
                        a && (o = ee(a, G.s4(!r)),
                        ne.js += B("export", o))
                },
                ExportNamedDeclaration: function(e, t) {
                    $.ExportDeclaration(e, t)
                },
                ExpressionStatement: function(e, t) {
                    var n = Z(e.expression, G.e5)
                      , s = K.test(n) || E && t.directiveContext && e.expression.type === C && "string" == typeof e.expression.value;
                    ne.js += s ? "(" + n + ")" : n,
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                ImportDeclaration: function(e, t) {
                    var n = e.specifiers
                      , s = "import"
                      , a = n.length;
                    if (a) {
                        var r = !!n[0].default
                          , o = r ? 1 : 0
                          , i = a - 1;
                        if (r && (s = B(s, n[0].id.name)),
                        o < a) {
                            if (r && (s += ","),
                            s += ne.optSpace + "{",
                            o === i)
                                s += ne.optSpace + Z(n[o], G.e5) + ne.optSpace;
                            else {
                                for (var c = U(), u = o; u < a; u++)
                                    s += ne.newline + ne.indent + Z(n[u], G.e5),
                                    u !== i && (s += ",");
                                ne.indent = c,
                                s += ne.newline + ne.indent
                            }
                            s += "}" + ne.optSpace
                        }
                        s = B(s, "from")
                    }
                    ne.js += s + ne.optSpace,
                    se.Literal(e.source),
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                VariableDeclarator: function(e, t) {
                    var n = e.id
                      , s = e.init
                      , a = G.e1(t.allowIn);
                    s ? (se[n.type](n, a),
                    ne.js += ne.optSpace + "=" + ne.optSpace,
                    se[s.type](s, a, e)) : n.type === A ? ne.js += n.name : se[n.type](n, a)
                },
                VariableDeclaration: function(e, t) {
                    var n = e.declarations
                      , s = n.length
                      , a = s > 1 ? U() : ne.indent
                      , r = G.s3(t.allowIn);
                    ne.js += e.kind;
                    for (var o = 0; o < s; o++) {
                        var i = n[o];
                        ne.js += 0 === o ? ne.space : "," + ne.optSpace,
                        ae[i.type](i, r)
                    }
                    !l && t.semicolonOptional || (ne.js += ";"),
                    ne.indent = a
                },
                ThrowStatement: function(e, t) {
                    var n = Z(e.argument, G.e5);
                    ne.js += B("throw", n),
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                TryStatement: function(e) {
                    var t = e.block
                      , s = e.finalizer
                      , a = "try" + x(t) + ee(t, G.s7) + H(t)
                      , r = e.handlers || e.guardedHandlers;
                    r && (a = z(a, s, r)),
                    e.handler && (a = z(a, s, r = n(e.handler) ? e.handler : [e.handler])),
                    s && (a = B(a, "finally" + x(s)),
                    a += ee(s, G.s7)),
                    ne.js += a
                },
                SwitchStatement: function(e) {
                    var t = e.cases
                      , n = e.discriminant
                      , s = U();
                    if (ne.js += "switch" + ne.optSpace + "(",
                    se[n.type](n, G.e5),
                    ne.js += ")" + ne.optSpace + "{" + ne.newline,
                    ne.indent = s,
                    t)
                        for (var a = t.length, r = a - 1, o = 0; o < a; o++) {
                            var i = t[o];
                            ne.js += ne.indent,
                            ae[i.type](i, G.s4(o === r)),
                            ne.js += ne.newline
                        }
                    ne.js += ne.indent + "}"
                },
                SwitchCase: function(e, t) {
                    var n = e.consequent
                      , s = n[0]
                      , a = e.test
                      , r = 0
                      , o = !l && t.semicolonOptional
                      , i = n.length
                      , c = i - 1
                      , u = U();
                    if (a) {
                        var E = Z(a, G.e5);
                        ne.js += B("case", E) + ":"
                    } else
                        ne.js += "default:";
                    for (i && s.type === d && (r++,
                    ne.js += x(s),
                    ae[s.type](s, G.s7)); r < i; r++) {
                        var h = n[r]
                          , p = r === c && o;
                        ne.js += ne.newline + ne.indent,
                        ae[h.type](h, G.s4(p))
                    }
                    ne.indent = u
                },
                IfStatement: function(e, t) {
                    var n = e.consequent
                      , s = e.test
                      , a = U()
                      , r = !l && t.semicolonOptional;
                    if (ne.js += "if" + ne.optSpace + "(",
                    se[s.type](s, G.e5),
                    ne.js += ")",
                    ne.indent = a,
                    ne.js += x(n),
                    e.alternate) {
                        var o = ee(n, G.s7) + H(n)
                          , i = ee(e.alternate, G.s4(r));
                        i = e.alternate.type === _ ? "else " + i : B("else", x(e.alternate) + i),
                        ne.js += B(o, i)
                    } else
                        ae[n.type](n, G.s4(r))
                },
                ForStatement: function(e, t) {
                    var n = e.init
                      , s = e.test
                      , a = e.body
                      , r = e.update
                      , o = !l && t.semicolonOptional
                      , i = U();
                    ne.js += "for" + ne.optSpace + "(",
                    n ? n.type === I ? ae[n.type](n, G.s6) : (se[n.type](n, G.e14),
                    ne.js += ";") : ne.js += ";",
                    s && (ne.js += ne.optSpace,
                    se[s.type](s, G.e5)),
                    ne.js += ";",
                    r && (ne.js += ne.optSpace,
                    se[r.type](r, G.e5)),
                    ne.js += ")",
                    ne.indent = i,
                    ne.js += x(a),
                    ae[a.type](a, G.s4(o))
                },
                ForInStatement: function(e, t) {
                    J("in", e, t)
                },
                ForOfStatement: function(e, t) {
                    J("of", e, t)
                },
                LabeledStatement: function(e, t) {
                    var n = e.body
                      , s = !l && t.semicolonOptional
                      , a = ne.indent;
                    ne.js += e.label.name + ":" + x(n),
                    n.type !== d && (a = U()),
                    ae[n.type](n, G.s4(s)),
                    ne.indent = a
                },
                ModuleDeclaration: function(e, t) {
                    ne.js += "module" + ne.space + e.id.name + ne.space + "from" + ne.optSpace,
                    se.Literal(e.source),
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                Program: function(e) {
                    var t = e.body
                      , n = t.length
                      , s = n - 1;
                    u && n > 0 && (ne.js += "\n");
                    for (var a = 0; a < n; a++) {
                        var r = t[a];
                        ne.js += ne.indent,
                        ae[r.type](r, G.s5(!u && a === s)),
                        a !== s && (ne.js += ne.newline)
                    }
                },
                FunctionDeclaration: function(e) {
                    var t = !!e.generator;
                    e.async && (ne.js += "async "),
                    ne.js += t ? "function*" + ne.optSpace : "function" + ne.space,
                    ne.js += e.id.name,
                    F(e)
                },
                ReturnStatement: function(e, t) {
                    var n = e.argument;
                    if (n) {
                        var s = Z(n, G.e5);
                        ne.js += B("return", s)
                    } else
                        ne.js += "return";
                    !l && t.semicolonOptional || (ne.js += ";")
                },
                WhileStatement: function(e, t) {
                    var n = e.body
                      , s = e.test
                      , a = !l && t.semicolonOptional
                      , r = U();
                    ne.js += "while" + ne.optSpace + "(",
                    se[s.type](s, G.e5),
                    ne.js += ")",
                    ne.indent = r,
                    ne.js += x(n),
                    ae[n.type](n, G.s4(a))
                },
                WithStatement: function(e, t) {
                    var n = e.body
                      , s = e.object
                      , a = !l && t.semicolonOptional
                      , r = U();
                    ne.js += "with" + ne.optSpace + "(",
                    se[s.type](s, G.e5),
                    ne.js += ")",
                    ne.indent = r,
                    ne.js += x(n),
                    ae[n.type](n, G.s4(a))
                }
            };
            function Z(e, t, n) {
                var s = ne.js;
                ne.js = "",
                se[e.type](e, t, n);
                var a = ne.js;
                return ne.js = s,
                a
            }
            function ee(e, t) {
                var n = ne.js;
                ne.js = "",
                ae[e.type](e, t);
                var s = ne.js;
                return ne.js = n,
                s
            }
            function te(e) {
                return function(t, n) {
                    h.verbatim && t.hasOwnProperty(h.verbatim) ? function(e, t) {
                        var n = e[h.verbatim]
                          , s = "string" == typeof n
                          , a = (s || void 0 === n.precedence ? 0 : n.precedence) < t.precedence
                          , r = (s ? n : n.content).split(/\r\n|\n/)
                          , o = r.length;
                        a && (ne.js += "("),
                        ne.js += r[0];
                        for (var i = 1; i < o; i++)
                            ne.js += ne.newline + ne.indent + r[i];
                        a && (ne.js += ")")
                    }(t, n) : e(t, n)
                }
            }
            var ne = {
                js: "",
                newline: "\n",
                optSpace: " ",
                space: " ",
                indentUnit: "    ",
                indent: ""
            }
              , se = void 0
              , ae = $;
            t.R = function(e, t) {
                var n = {
                    indent: null,
                    base: null,
                    parse: null,
                    format: {
                        indent: {
                            style: "    ",
                            base: 0
                        },
                        newline: "\n",
                        space: " ",
                        json: !1,
                        renumber: !1,
                        hexadecimal: !1,
                        quotes: "single",
                        escapeless: !1,
                        compact: !1,
                        parentheses: !0,
                        semicolons: !0,
                        safeConcatenation: !1
                    },
                    directive: !1,
                    raw: !0,
                    verbatim: null
                };
                return null != t ? ("string" == typeof t.indent && (n.format.indent.style = t.indent),
                "number" == typeof t.base && (n.format.indent.base = t.base),
                t = M(n, t),
                ne.indentUnit = t.format.indent.style,
                "string" == typeof t.base ? ne.indent = t.base : ne.indent = L(ne.indentUnit, t.format.indent.base)) : (t = n,
                ne.indentUnit = t.format.indent.style,
                ne.indent = L(ne.indentUnit, t.format.indent.base)),
                s = t.format.json,
                a = t.format.renumber,
                r = !s && t.format.hexadecimal,
                o = s ? "double" : t.format.quotes,
                i = t.format.escapeless,
                ne.newline = t.format.newline,
                ne.optSpace = t.format.space,
                t.format.compact && (ne.newline = ne.optSpace = ne.indentUnit = ne.indent = ""),
                ne.space = ne.optSpace ? ne.optSpace : " ",
                c = t.format.parentheses,
                l = t.format.semicolons,
                u = t.format.safeConcatenation,
                E = t.directive,
                s || t.parse,
                se = (h = t).verbatim ? function() {
                    var e = {};
                    for (var t in Q)
                        Q.hasOwnProperty(t) && (e[t] = te(Q[t]));
                    return e
                }() : Q,
                function(e) {
                    return ne.js = "",
                    ae[e.type] ? ae[e.type](e, G.s7) : se[e.type](e, G.e19),
                    ne.js
                }(e)
            }
        }
    }
      , t = {};
    function n(s) {
        var a = t[s];
        if (void 0 !== a)
            return a.exports;
        var r = t[s] = {
            exports: {}
        };
        return e[s](r, r.exports, n),
        r.exports
    }
    n.d = (e,t)=>{
        for (var s in t)
            n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e = {};
        n.r(e),
        n.d(e, {
            request: ()=>Wt,
            response: ()=>Qt
        });
        var t = {};
        n.r(t),
        n.d(t, {
            base64: ()=>ar,
            none: ()=>tr,
            plain: ()=>nr,
            whatTheFuck: ()=>rr,
            xor: ()=>sr
        });
        const s = {
            0: "Unexpected token",
            28: "Unexpected token: '%0'",
            1: "Octal escape sequences are not allowed in strict mode",
            2: "Octal escape sequences are not allowed in template strings",
            3: "Unexpected token `#`",
            4: "Illegal Unicode escape sequence",
            5: "Invalid code point %0",
            6: "Invalid hexadecimal escape sequence",
            8: "Octal literals are not allowed in strict mode",
            7: "Decimal integer literals with a leading zero are forbidden in strict mode",
            9: "Expected number in radix %0",
            145: "Invalid left-hand side assignment to a destructible right-hand side",
            10: "Non-number found after exponent indicator",
            11: "Invalid BigIntLiteral",
            12: "No identifiers allowed directly after numeric literal",
            13: "Escapes \\8 or \\9 are not syntactically valid escapes",
            14: "Unterminated string literal",
            15: "Unterminated template literal",
            16: "Multiline comment was not closed properly",
            17: "The identifier contained dynamic unicode escape that was not closed",
            18: "Illegal character '%0'",
            19: "Missing hexadecimal digits",
            20: "Invalid implicit octal",
            21: "Invalid line break in string literal",
            22: "Only unicode escapes are legal in identifier names",
            23: "Expected '%0'",
            24: "Invalid left-hand side in assignment",
            25: "Invalid left-hand side in async arrow",
            26: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
            27: "Member access on super must be in a method",
            29: "Await expression not allowed in formal parameter",
            30: "Yield expression not allowed in formal parameter",
            92: "Unexpected token: 'escaped keyword'",
            31: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
            119: "Async functions can only be declared at the top level or inside a block",
            32: "Unterminated regular expression",
            33: "Unexpected regular expression flag",
            34: "Duplicate regular expression flag '%0'",
            35: "%0 functions must have exactly %1 argument%2",
            36: "Setter function argument must not be a rest parameter",
            37: "%0 declaration must have a name in this context",
            38: "Function name may not contain any reserved words or be eval or arguments in strict mode",
            39: "The rest operator is missing an argument",
            40: "A getter cannot be a generator",
            41: "A computed property name must be followed by a colon or paren",
            130: "Object literal keys that are strings or numbers must be a method or have a colon",
            43: "Found `* async x(){}` but this should be `async * x(){}`",
            42: "Getters and setters can not be generators",
            44: "'%0' can not be generator method",
            45: "No line break is allowed after '=>'",
            46: "The left-hand side of the arrow can only be destructed through assignment",
            47: "The binding declaration is not destructible",
            48: "Async arrow can not be followed by new expression",
            49: "Classes may not have a static property named 'prototype'",
            50: "Class constructor may not be a %0",
            51: "Duplicate constructor method in class",
            52: "Invalid increment/decrement operand",
            53: "Invalid use of `new` keyword on an increment/decrement expression",
            54: "`=>` is an invalid assignment target",
            55: "Rest element may not have a trailing comma",
            56: "Missing initializer in %0 declaration",
            57: "'for-%0' loop head declarations can not have an initializer",
            58: "Invalid left-hand side in for-%0 loop: Must have a single binding",
            59: "Invalid shorthand property initializer",
            60: "Property name __proto__ appears more than once in object literal",
            61: "Let is disallowed as a lexically bound name",
            62: "Invalid use of '%0' inside new expression",
            63: "Illegal 'use strict' directive in function with non-simple parameter list",
            64: 'Identifier "let" disallowed as left-hand side expression in strict mode',
            65: "Illegal continue statement",
            66: "Illegal break statement",
            67: "Cannot have `let[...]` as a var name in strict mode",
            68: "Invalid destructuring assignment target",
            69: "Rest parameter may not have a default initializer",
            70: "The rest argument must the be last parameter",
            71: "Invalid rest argument",
            73: "In strict mode code, functions can only be declared at top level or inside a block",
            74: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
            75: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
            76: "Class declaration can't appear in single-statement context",
            77: "Invalid left-hand side in for-%0",
            78: "Invalid assignment in for-%0",
            79: "for await (... of ...) is only valid in async functions and async generators",
            80: "The first token after the template expression should be a continuation of the template",
            82: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
            81: "`let \n [` is a restricted production at the start of a statement",
            83: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
            84: "Catch clause parameter does not support default values",
            85: "Missing catch or finally after try",
            86: "More than one default clause in switch statement",
            87: "Illegal newline after throw",
            88: "Strict mode code may not include a with statement",
            89: "Illegal return statement",
            90: "The left hand side of the for-header binding declaration is not destructible",
            91: "new.target only allowed within functions",
            93: "'#' not followed by identifier",
            99: "Invalid keyword",
            98: "Can not use 'let' as a class name",
            97: "'A lexical declaration can't define a 'let' binding",
            96: "Can not use `let` as variable name in strict mode",
            94: "'%0' may not be used as an identifier in this context",
            95: "Await is only valid in async functions",
            100: "The %0 keyword can only be used with the module goal",
            101: "Unicode codepoint must not be greater than 0x10FFFF",
            102: "%0 source must be string",
            103: "Only a identifier can be used to indicate alias",
            104: "Only '*' or '{...}' can be imported after default",
            105: "Trailing decorator may be followed by method",
            106: "Decorators can't be used with a constructor",
            108: "HTML comments are only allowed with web compatibility (Annex B)",
            109: "The identifier 'let' must not be in expression position in strict mode",
            110: "Cannot assign to `eval` and `arguments` in strict mode",
            111: "The left-hand side of a for-of loop may not start with 'let'",
            112: "Block body arrows can not be immediately invoked without a group",
            113: "Block body arrows can not be immediately accessed without a group",
            114: "Unexpected strict mode reserved word",
            115: "Unexpected eval or arguments in strict mode",
            116: "Decorators must not be followed by a semicolon",
            117: "Calling delete on expression not allowed in strict mode",
            118: "Pattern can not have a tail",
            120: "Can not have a `yield` expression on the left side of a ternary",
            121: "An arrow function can not have a postfix update operator",
            122: "Invalid object literal key character after generator star",
            123: "Private fields can not be deleted",
            125: "Classes may not have a field called constructor",
            124: "Classes may not have a private element named constructor",
            126: "A class field initializer may not contain arguments",
            127: "Generators can only be declared at the top level or inside a block",
            128: "Async methods are a restricted production and cannot have a newline following it",
            129: "Unexpected character after object literal property name",
            131: "Invalid key token",
            132: "Label '%0' has already been declared",
            133: "continue statement must be nested within an iteration statement",
            134: "Undefined label '%0'",
            135: "Trailing comma is disallowed inside import(...) arguments",
            136: "import() requires exactly one argument",
            137: "Cannot use new with import(...)",
            138: "... is not allowed in import()",
            139: "Expected '=>'",
            140: "Duplicate binding '%0'",
            141: "Cannot export a duplicate name '%0'",
            144: "Duplicate %0 for-binding",
            142: "Exported binding '%0' needs to refer to a top-level declared variable",
            143: "Unexpected private field",
            147: "Numeric separators are not allowed at the end of numeric literals",
            146: "Only one underscore is allowed as numeric separator",
            148: "JSX value should be either an expression or a quoted JSX text",
            149: "Expected corresponding JSX closing tag for %0",
            150: "Adjacent JSX elements must be wrapped in an enclosing tag",
            151: "JSX attributes must only be assigned a non-empty 'expression'",
            152: "'%0' has already been declared",
            153: "'%0' shadowed a catch clause binding",
            154: "Dot property must be an identifier",
            155: "Encountered invalid input after spread/rest argument",
            156: "Catch without try",
            157: "Finally without try",
            158: "Expected corresponding closing tag for JSX fragment",
            159: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
            160: "Invalid tagged template on optional chain",
            161: "Invalid optional chain from super property",
            162: "Invalid optional chain from new expression",
            163: 'Cannot use "import.meta" outside a module',
            164: "Leading decorators must be attached to a class declaration"
        };
        class a extends SyntaxError {
            constructor(e, t, n, a, ...r) {
                const o = "[" + t + ":" + n + "]: " + s[a].replace(/%(\d+)/g, ((e,t)=>r[t]));
                super(`${o}`),
                this.index = e,
                this.line = t,
                this.column = n,
                this.description = o,
                this.loc = {
                    line: t,
                    column: n
                }
            }
        }
        function r(e, t, ...n) {
            throw new a(e.index,e.line,e.column,t,...n)
        }
        function o(e) {
            throw new a(e.index,e.line,e.column,e.type,e.params)
        }
        function i(e, t, n, s, ...r) {
            throw new a(e,t,n,s,...r)
        }
        function c(e, t, n, s) {
            throw new a(e,t,n,s)
        }
        const l = ((e,t)=>{
            const n = new Uint32Array(104448);
            let s = 0
              , a = 0;
            for (; s < 3540; ) {
                const r = e[s++];
                if (r < 0)
                    a -= r;
                else {
                    let o = e[s++];
                    2 & r && (o = t[o]),
                    1 & r ? n.fill(o, a, a += e[s++]) : n[a++] = o
                }
            }
            return n
        }
        )([-1, 2, 24, 2, 25, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 131, 2, 6, 2, 56, -1, 2, 37, 0, 4294443263, 2, 1, 3, 0, 3, 0, 4294901711, 2, 39, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 194, 2, 3, 0, 3825204735, 0, 123747807, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 66, 0, 4284449919, 0, 851904, 2, 4, 2, 11, 0, 67076095, -1, 2, 67, 0, 1073741743, 0, 4093591391, -1, 0, 50331649, 0, 3265266687, 2, 32, 0, 4294844415, 0, 4278190047, 2, 18, 2, 129, -1, 3, 0, 2, 2, 21, 2, 0, 2, 9, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 10, 0, 261632, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 2088959, 2, 27, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 41, 0, 67057664, 3, 0, 2, 2, 40, 2, 0, 2, 28, 2, 0, 2, 29, 2, 7, 0, 268374015, 2, 26, 2, 49, 2, 0, 2, 76, 0, 134153215, -1, 2, 6, 2, 0, 2, 7, 0, 2684354559, 0, 67044351, 0, 3221160064, 0, 1, -1, 3, 0, 2, 2, 42, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 51, 0, 4294960127, 2, 9, 2, 38, 2, 10, 0, 4294377472, 2, 11, 3, 0, 7, 0, 4227858431, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -1, 2, 124, 0, 1048577, 2, 82, 2, 13, -1, 2, 13, 0, 131042, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14, 2, 0, 0, 2147516671, 2, 20, 3, 86, 2, 2, 0, -16, 2, 87, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 2, 121, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 2, 0, 0, 4351, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 22, 2, 8, 2, 18, 3, 0, 2, 0, 67076097, 2, 7, 2, 0, 2, 20, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 3774349439, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, 2, 23, 0, 1638399, 2, 172, 2, 105, 3, 0, 3, 2, 18, 2, 24, 2, 25, 2, 5, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -3, 2, 150, -4, 2, 18, 2, 0, 2, 35, 0, 1, 2, 0, 2, 62, 2, 28, 2, 11, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 21, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277137519, 0, 2269118463, -1, 3, 18, 2, -1, 2, 32, 2, 36, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 46, -10, 2, 0, 0, 203775, -2, 2, 18, 2, 43, 2, 35, -2, 2, 17, 2, 117, 2, 20, 3, 0, 2, 2, 36, 0, 2147549120, 2, 0, 2, 11, 2, 17, 2, 135, 2, 0, 2, 37, 2, 52, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 120, 0, 1090519039, -2, 2, 122, 2, 38, 2, 0, 0, 67045375, 2, 39, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 40, 2, 41, -1, 2, 10, 2, 42, -6, 2, 0, 2, 11, -3, 3, 0, 2, 0, 2147484671, 2, 125, 0, 4190109695, 2, 50, -2, 2, 126, 0, 4244635647, 0, 27, 2, 0, 2, 7, 2, 43, 2, 0, 2, 63, -1, 2, 0, 2, 40, -8, 2, 54, 2, 44, 0, 67043329, 2, 127, 2, 45, 0, 8388351, -2, 2, 128, 0, 3028287487, 2, 46, 2, 130, 0, 33259519, 2, 41, -9, 2, 20, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, 2, 41, -2, 2, 17, 2, 49, 2, 0, 2, 20, 2, 50, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 0, 1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 88, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -42, 0, 4194303871, 0, 2011, -6, 2, 0, 0, 1073684479, 0, 17407, -11, 2, 0, 2, 31, -40, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 42, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -105, 2, 24, -32, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -22381, 3, 0, 7, 2, 23, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 60, 2, 0, 2, 33, -1, 2, 17, 2, 61, -1, 2, 0, 2, 56, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 23, 2, 62, 3, 0, 2, 0, 131135, 2, 95, 0, 70256639, 0, 71303167, 0, 272, 2, 40, 2, 56, -1, 2, 37, 2, 30, -1, 2, 96, 2, 63, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 65, 2, 64, 0, 33554435, 2, 123, 2, 65, 2, 151, 0, 131075, 0, 3594373096, 0, 67094296, 2, 64, -1, 0, 4294828e3, 0, 603979263, 2, 160, 0, 3, 0, 4294828001, 0, 602930687, 2, 183, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 66, 2, 36, -1, 2, 4, 0, 917503, 2, 36, -1, 2, 67, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 32, 2, 68, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 11, -1, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 253951, 3, 19, 2, 0, 122879, 2, 0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 40, 2, 0, 0, 4294903295, 2, 0, 2, 29, 2, 7, -1, 2, 17, 2, 49, 2, 0, 2, 76, 2, 41, -1, 2, 20, 2, 0, 2, 27, -2, 0, 128, -2, 2, 77, 2, 8, 0, 4064, -1, 2, 119, 0, 4227907585, 2, 0, 2, 118, 2, 0, 2, 48, 2, 173, 2, 9, 2, 38, 2, 10, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -3, 2, 82, 2, 13, -3, 2, 83, 2, 84, 2, 85, 2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2, 14, 2, 0, 0, 33023, 2, 20, 3, 86, 2, -17, 2, 87, 0, 524157950, 2, 4, 2, 0, 2, 88, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 23, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 0, 4294965179, 0, 7, 2, 0, 2, 8, 2, 91, 2, 8, -1, 0, 1761345536, 2, 95, 0, 4294901823, 2, 36, 2, 18, 2, 96, 2, 34, 2, 166, 0, 2080440287, 2, 0, 2, 33, 2, 143, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 7, 3, 0, 349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0, 2700607615, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, -3, 2, 105, 3, 0, 3, 2, 18, -1, 3, 5, 2, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -8, 2, 18, 2, 0, 2, 35, -1, 2, 0, 2, 62, 2, 28, 2, 29, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 17, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277075969, 2, 29, -1, 3, 18, 2, -1, 2, 32, 2, 117, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 48, -10, 2, 0, 0, 197631, -2, 2, 18, 2, 43, 2, 118, -2, 2, 17, 2, 117, 2, 20, 2, 119, 2, 51, -2, 2, 119, 2, 23, 2, 17, 2, 33, 2, 119, 2, 36, 0, 4294901904, 0, 4718591, 2, 119, 2, 34, 0, 335544350, -1, 2, 120, 2, 121, -2, 2, 122, 2, 38, 2, 7, -1, 2, 123, 2, 65, 0, 3758161920, 0, 3, -4, 2, 0, 2, 27, 0, 2147485568, 0, 3, 2, 0, 2, 23, 0, 176, -5, 2, 0, 2, 47, 2, 186, -1, 2, 0, 2, 23, 2, 197, -1, 2, 0, 0, 16779263, -2, 2, 11, -7, 2, 0, 2, 121, -3, 3, 0, 2, 2, 124, 2, 125, 0, 2147549183, 0, 2, -2, 2, 126, 2, 35, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, -1, 2, 0, 2, 40, -8, 2, 54, 2, 47, 0, 1, 2, 127, 2, 23, -3, 2, 128, 2, 35, 2, 129, 2, 130, 0, 16778239, -10, 2, 34, -5, 2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, -3, 2, 17, 2, 131, 2, 0, 2, 23, 2, 48, 2, 132, 2, 23, -21, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 103, -2, 0, 11, 3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 2, 135, -187, 3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 2, 143, -73, 2, 0, 0, 1065361407, 0, 16384, -11, 2, 0, 2, 121, -40, 3, 0, 6, 2, 117, -1, 3, 0, 2, 0, 2063, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -138, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 56, -28517, 2, 0, 0, 1, -1, 2, 124, 2, 0, 0, 8193, -21, 2, 193, 0, 10255, 0, 4, -11, 2, 64, 2, 171, -1, 0, 71680, -1, 2, 161, 0, 4292900864, 0, 805306431, -5, 2, 150, -1, 2, 157, -1, 0, 6144, -2, 2, 127, -1, 2, 154, -1, 0, 2147532800, 2, 151, 2, 165, 2, 0, 2, 164, 0, 524032, 0, 4, -4, 2, 190, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 152, 0, 4294886464, 0, 33292336, 0, 417809, 2, 152, 0, 1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 153, 0, 469762560, 0, 4171219488, 0, 8323120, 2, 153, 0, 202375680, 0, 3214918176, 0, 4294508592, 2, 153, -1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 177, 2, 0, 0, 2089, 0, 3221225552, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 150, 0, 4160757760, 2, 0, -6, 2, 167, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 154, 2, 159, 2, 178, -2, 2, 162, -20, 0, 3758096385, -2, 2, 155, 0, 4292878336, 2, 90, 2, 169, 0, 4294057984, -2, 2, 163, 2, 156, 2, 175, -2, 2, 155, -1, 2, 182, -1, 2, 170, 2, 124, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 158, 0, 939588608, -1, 0, 805306368, -1, 2, 124, 0, 1610612736, 2, 156, 2, 157, 2, 4, 2, 0, -2, 2, 158, 2, 159, -3, 0, 267386880, -1, 2, 160, 0, 7168, -1, 0, 65024, 2, 154, 2, 161, 2, 179, -7, 2, 168, -8, 2, 162, -1, 0, 1426112704, 2, 163, -1, 2, 164, 0, 271581216, 0, 2149777408, 2, 23, 2, 161, 2, 124, 0, 851967, 2, 180, -1, 2, 23, 2, 181, -4, 2, 158, -20, 2, 195, 2, 165, -56, 0, 3145728, 2, 185, -4, 2, 166, 2, 124, -4, 0, 32505856, -1, 2, 167, -1, 0, 2147385088, 2, 90, 1, 2155905152, 2, -3, 2, 103, 2, 0, 2, 168, -2, 2, 169, -6, 2, 170, 0, 4026597375, 0, 1, -1, 0, 1, -1, 2, 171, -3, 2, 117, 2, 64, -2, 2, 166, -2, 2, 176, 2, 124, -878, 2, 159, -36, 2, 172, -1, 2, 201, -10, 2, 188, -5, 2, 174, -6, 0, 4294965251, 2, 27, -1, 2, 173, -1, 2, 174, -2, 0, 4227874752, -3, 0, 2146435072, 2, 159, -2, 0, 1006649344, 2, 124, -1, 2, 90, 0, 201375744, -3, 0, 134217720, 2, 90, 0, 4286677377, 0, 32896, -1, 2, 158, -3, 2, 175, -349, 2, 176, 0, 1920, 2, 177, 3, 0, 264, -11, 2, 157, -2, 2, 178, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524284, -11, 2, 23, -1, 2, 187, -1, 2, 184, 0, 3221291007, 2, 178, -1, 2, 202, 0, 2158720, -3, 2, 159, 0, 1, -4, 2, 124, 0, 3808625411, 0, 3489628288, 2, 200, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 179, 0, 120, 0, 7340032, -2, 2, 180, 2, 4, 2, 23, 2, 163, 3, 0, 4, 2, 159, -1, 2, 181, 2, 177, -1, 0, 8176, 2, 182, 2, 179, 2, 183, -1, 0, 4290773232, 2, 0, -4, 2, 163, 2, 189, 0, 15728640, 2, 177, -1, 2, 161, -1, 0, 4294934512, 3, 0, 4, -9, 2, 90, 2, 170, 2, 184, 3, 0, 4, 0, 704, 0, 1849688064, 2, 185, -1, 2, 124, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 199, 3, 0, 2, -1, 2, 186, 2, 187, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 192, 0, 16252928, 0, 3791388672, 2, 38, 3, 0, 2, -2, 2, 196, 2, 0, -1, 2, 103, -1, 0, 66584576, -1, 2, 191, 3, 0, 9, 2, 124, -1, 0, 4294755328, 3, 0, 2, -1, 2, 161, 2, 178, 3, 0, 2, 2, 23, 2, 188, 2, 90, -2, 0, 245760, 0, 2147418112, -1, 2, 150, 2, 203, 0, 4227923456, -1, 2, 164, 2, 161, 2, 90, -3, 0, 4292870145, 0, 262144, 2, 124, 3, 0, 2, 0, 1073758848, 2, 189, -1, 0, 4227921920, 2, 190, 0, 68289024, 0, 528402016, 0, 4292927536, 3, 0, 4, -2, 0, 268435456, 2, 91, -2, 2, 191, 3, 0, 5, -1, 2, 192, 2, 163, 2, 0, -2, 0, 4227923936, 2, 62, -1, 2, 155, 2, 95, 2, 0, 2, 154, 2, 158, 3, 0, 6, -1, 2, 177, 3, 0, 3, -2, 0, 2146959360, 0, 9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 193, 2, 77, -2, 2, 161, -2, 2, 119, -1, 2, 155, 3, 0, 8, 0, 512, 0, 8388608, 2, 194, 2, 172, 2, 187, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 191, 0, 576, 0, 4261707776, 2, 95, 3, 0, 9, 2, 155, 3, 0, 5, 2, 16, -1, 0, 2147221504, -28, 2, 178, 3, 0, 3, -3, 0, 4292902912, -6, 2, 96, 3, 0, 85, -33, 0, 4294934528, 3, 0, 126, -18, 2, 195, 3, 0, 269, -17, 2, 155, 2, 124, 2, 198, 3, 0, 2, 2, 23, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 21, -2, 2, 179, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656, -191, 2, 174, -38, 2, 170, 2, 0, 2, 196, 3, 0, 279, -8, 2, 124, 2, 0, 0, 4294508543, 0, 65295, -11, 2, 177, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 155, -7, 2, 170, -1, 0, 384, -1, 0, 133693440, -3, 2, 196, -2, 2, 26, 3, 0, 4, 2, 169, -2, 2, 90, 2, 155, 3, 0, 4, -2, 2, 164, -1, 2, 150, 0, 335552923, 2, 197, -1, 0, 538974272, 0, 2214592512, 0, 132e3, -10, 0, 192, -8, 0, 12288, -21, 0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284, 3, 0, 6, -1, 0, 3221282816, 2, 198, 3, 0, 11, -1, 2, 199, 3, 0, 40, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 35, -1, 2, 94, 3, 0, 2, 0, 1, 2, 163, 3, 0, 6, 2, 197, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 45, 3, 0, 8, -1, 2, 158, -2, 2, 169, 0, 98304, 0, 65537, 2, 170, -5, 0, 4294950912, 2, 0, 2, 118, 0, 65528, 2, 177, 0, 4294770176, 2, 26, 3, 0, 4, -30, 2, 174, 0, 3758153728, -3, 2, 169, -2, 2, 155, 2, 188, 2, 158, -1, 2, 191, -1, 2, 161, 0, 4294754304, 3, 0, 2, -3, 0, 33554432, -2, 2, 200, -3, 2, 169, 0, 4175478784, 2, 201, 0, 4286643712, 0, 4286644216, 2, 0, -4, 2, 202, -1, 2, 165, 0, 4227923967, 3, 0, 32, -1334, 2, 163, 2, 0, -129, 2, 94, -6, 2, 163, -180, 2, 203, -233, 2, 4, 3, 0, 96, -16, 2, 163, 3, 0, 47, -154, 2, 165, 3, 0, 22381, -7, 2, 17, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4160749567, 4294901759, 4294901760, 536870911, 262143, 8388607, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967232, 2097151, 4294903807, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 127, 4292870143, 4294902271, 4294549487, 33554431, 1023, 67047423, 4294901888, 4286578687, 4294770687, 67043583, 32767, 15, 2047999, 67043343, 16777215, 4294902e3, 4294934527, 4294966783, 4294967279, 2047, 262083, 20511, 4290772991, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 4294967264, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 2044, 4292870144, 4294966272, 4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4294966591, 2445279231, 3670015, 3238002687, 31, 63, 4294967288, 4294705151, 4095, 3221208447, 4294549472, 2147483648, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 16383, 3774873592, 458752, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 536870912, 2952790016, 202506752, 139264, 402653184, 4261412864, 4227922944, 49152, 61440, 3758096384, 117440512, 65280, 3233808384, 3221225472, 2097152, 4294965248, 32768, 57152, 67108864, 4293918720, 4290772992, 25165824, 57344, 4227915776, 4278190080, 4227907584, 65520, 4026531840, 4227858432, 4160749568, 3758129152, 4294836224, 63488, 1073741824, 4294967040, 4194304, 251658240, 196608, 4294963200, 64512, 417808, 4227923712, 12582912, 50331648, 65472, 4294967168, 4294966784, 16, 4294917120, 2080374784, 4096, 65408, 524288, 65532]);
        function u(e) {
            return e.column++,
            e.currentChar = e.source.charCodeAt(++e.index)
        }
        function E(e, t) {
            if (55296 != (64512 & t))
                return 0;
            const n = e.source.charCodeAt(e.index + 1);
            return 56320 != (64512 & n) ? 0 : (t = e.currentChar = 65536 + ((1023 & t) << 10) + (1023 & n),
            0 == (1 & l[0 + (t >>> 5)] >>> t) && r(e, 18, d(t)),
            e.index++,
            e.column++,
            1)
        }
        function h(e, t) {
            e.currentChar = e.source.charCodeAt(++e.index),
            e.flags |= 1,
            0 == (4 & t) && (e.column = 0,
            e.line++)
        }
        function p(e) {
            e.flags |= 1,
            e.currentChar = e.source.charCodeAt(++e.index),
            e.column = 0,
            e.line++
        }
        function d(e) {
            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(e >>> 10) + String.fromCharCode(1023 & e)
        }
        function T(e) {
            return e < 65 ? e - 48 : e - 65 + 10 & 15
        }
        const m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 0, 0, 0]
          , f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
          , A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
        function _(e) {
            return e <= 127 ? f[e] : 1 & l[34816 + (e >>> 5)] >>> e
        }
        function C(e) {
            return e <= 127 ? A[e] : 1 & l[0 + (e >>> 5)] >>> e || 8204 === e || 8205 === e
        }
        const g = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
        function k(e, t, n, s, a, o, i, c) {
            return 2048 & s && r(e, 0),
            I(e, t, n, a, o, i, c)
        }
        function I(e, t, n, s, a, r, o) {
            const {index: i} = e;
            for (e.tokenPos = e.index,
            e.linePos = e.line,
            e.colPos = e.column; e.index < e.end; ) {
                if (8 & m[e.currentChar]) {
                    const n = 13 === e.currentChar;
                    p(e),
                    n && e.index < e.end && 10 === e.currentChar && (e.currentChar = t.charCodeAt(++e.index));
                    break
                }
                if ((8232 ^ e.currentChar) <= 1) {
                    p(e);
                    break
                }
                u(e),
                e.tokenPos = e.index,
                e.linePos = e.line,
                e.colPos = e.column
            }
            if (e.onComment) {
                const n = {
                    start: {
                        line: r,
                        column: o
                    },
                    end: {
                        line: e.linePos,
                        column: e.colPos
                    }
                };
                e.onComment(g[255 & s], t.slice(i, e.tokenPos), a, e.tokenPos, n)
            }
            return 1 | n
        }
        function N(e, t, n) {
            const {index: s} = e;
            for (; e.index < e.end; )
                if (e.currentChar < 43) {
                    let a = !1;
                    for (; 42 === e.currentChar; )
                        if (a || (n &= -5,
                        a = !0),
                        47 === u(e)) {
                            if (u(e),
                            e.onComment) {
                                const n = {
                                    start: {
                                        line: e.linePos,
                                        column: e.colPos
                                    },
                                    end: {
                                        line: e.line,
                                        column: e.column
                                    }
                                };
                                e.onComment(g[1], t.slice(s, e.index - 2), s - 2, e.index, n)
                            }
                            return e.tokenPos = e.index,
                            e.linePos = e.line,
                            e.colPos = e.column,
                            n
                        }
                    if (a)
                        continue;
                    8 & m[e.currentChar] ? 13 === e.currentChar ? (n |= 5,
                    p(e)) : (h(e, n),
                    n = -5 & n | 1) : u(e)
                } else
                    (8232 ^ e.currentChar) <= 1 ? (n = -5 & n | 1,
                    p(e)) : (n &= -5,
                    u(e));
            r(e, 16)
        }
        function S(e, t) {
            const n = e.index;
            let s = 0;
            e: for (; ; ) {
                const t = e.currentChar;
                if (u(e),
                1 & s)
                    s &= -2;
                else
                    switch (t) {
                    case 47:
                        if (s)
                            break;
                        break e;
                    case 92:
                        s |= 1;
                        break;
                    case 91:
                        s |= 2;
                        break;
                    case 93:
                        s &= 1;
                        break;
                    case 13:
                    case 10:
                    case 8232:
                    case 8233:
                        r(e, 32)
                    }
                if (e.index >= e.source.length)
                    return r(e, 32)
            }
            const a = e.index - 1;
            let o = 0
              , i = e.currentChar;
            const {index: c} = e;
            for (; C(i); ) {
                switch (i) {
                case 103:
                    2 & o && r(e, 34, "g"),
                    o |= 2;
                    break;
                case 105:
                    1 & o && r(e, 34, "i"),
                    o |= 1;
                    break;
                case 109:
                    4 & o && r(e, 34, "m"),
                    o |= 4;
                    break;
                case 117:
                    16 & o && r(e, 34, "u"),
                    o |= 16;
                    break;
                case 121:
                    8 & o && r(e, 34, "y"),
                    o |= 8;
                    break;
                case 115:
                    32 & o && r(e, 34, "s"),
                    o |= 32;
                    break;
                case 100:
                    64 & o && r(e, 34, "d"),
                    o |= 64;
                    break;
                default:
                    r(e, 33)
                }
                i = u(e)
            }
            const l = e.source.slice(c, e.index)
              , E = e.source.slice(n, a);
            return e.tokenRegExp = {
                pattern: E,
                flags: l
            },
            512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
            e.tokenValue = function(e, t, n) {
                try {
                    return new RegExp(t,n)
                } catch (s) {
                    try {
                        return new RegExp(t,n.replace("d", "")),
                        null
                    } catch (t) {
                        r(e, 32)
                    }
                }
            }(e, E, l),
            65540
        }
        function R(e, t, n) {
            const {index: s} = e;
            let a = ""
              , o = u(e)
              , i = e.index;
            for (; 0 == (8 & m[o]); ) {
                if (o === n)
                    return a += e.source.slice(i, e.index),
                    u(e),
                    512 & t && (e.tokenRaw = e.source.slice(s, e.index)),
                    e.tokenValue = a,
                    134283267;
                if (8 == (8 & o) && 92 === o) {
                    if (a += e.source.slice(i, e.index),
                    o = u(e),
                    o < 127 || 8232 === o || 8233 === o) {
                        const n = b(e, t, o);
                        n >= 0 ? a += d(n) : D(e, n, 0)
                    } else
                        a += d(o);
                    i = e.index + 1
                }
                e.index >= e.end && r(e, 14),
                o = u(e)
            }
            r(e, 14)
        }
        function b(e, t, n) {
            switch (n) {
            case 98:
                return 8;
            case 102:
                return 12;
            case 114:
                return 13;
            case 110:
                return 10;
            case 116:
                return 9;
            case 118:
                return 11;
            case 13:
                if (e.index < e.end) {
                    const t = e.source.charCodeAt(e.index + 1);
                    10 === t && (e.index = e.index + 1,
                    e.currentChar = t)
                }
            case 10:
            case 8232:
            case 8233:
                return e.column = -1,
                e.line++,
                -1;
            case 48:
            case 49:
            case 50:
            case 51:
                {
                    let s = n - 48
                      , a = e.index + 1
                      , r = e.column + 1;
                    if (a < e.end) {
                        const n = e.source.charCodeAt(a);
                        if (0 == (32 & m[n])) {
                            if ((0 !== s || 512 & m[n]) && 1024 & t)
                                return -2
                        } else {
                            if (1024 & t)
                                return -2;
                            if (e.currentChar = n,
                            s = s << 3 | n - 48,
                            a++,
                            r++,
                            a < e.end) {
                                const t = e.source.charCodeAt(a);
                                32 & m[t] && (e.currentChar = t,
                                s = s << 3 | t - 48,
                                a++,
                                r++)
                            }
                            e.flags |= 64,
                            e.index = a - 1,
                            e.column = r - 1
                        }
                    }
                    return s
                }
            case 52:
            case 53:
            case 54:
            case 55:
                {
                    if (1024 & t)
                        return -2;
                    let s = n - 48;
                    const a = e.index + 1
                      , r = e.column + 1;
                    if (a < e.end) {
                        const t = e.source.charCodeAt(a);
                        32 & m[t] && (s = s << 3 | t - 48,
                        e.currentChar = t,
                        e.index = a,
                        e.column = r)
                    }
                    return e.flags |= 64,
                    s
                }
            case 120:
                {
                    const t = u(e);
                    if (0 == (64 & m[t]))
                        return -4;
                    const n = T(t)
                      , s = u(e);
                    return 0 == (64 & m[s]) ? -4 : n << 4 | T(s)
                }
            case 117:
                {
                    const t = u(e);
                    if (123 === e.currentChar) {
                        let t = 0;
                        for (; 0 != (64 & m[u(e)]); )
                            if (t = t << 4 | T(e.currentChar),
                            t > 1114111)
                                return -5;
                        return e.currentChar < 1 || 125 !== e.currentChar ? -4 : t
                    }
                    {
                        if (0 == (64 & m[t]))
                            return -4;
                        const n = e.source.charCodeAt(e.index + 1);
                        if (0 == (64 & m[n]))
                            return -4;
                        const s = e.source.charCodeAt(e.index + 2);
                        if (0 == (64 & m[s]))
                            return -4;
                        const a = e.source.charCodeAt(e.index + 3);
                        return 0 == (64 & m[a]) ? -4 : (e.index += 3,
                        e.column += 3,
                        e.currentChar = e.source.charCodeAt(e.index),
                        T(t) << 12 | T(n) << 8 | T(s) << 4 | T(a))
                    }
                }
            case 56:
            case 57:
                if (0 == (256 & t))
                    return -3;
            default:
                return n
            }
        }
        function D(e, t, n) {
            switch (t) {
            case -1:
                return;
            case -2:
                r(e, n ? 2 : 1);
            case -3:
                r(e, 13);
            case -4:
                r(e, 6);
            case -5:
                r(e, 101)
            }
        }
        function P(e, t) {
            const {index: n} = e;
            let s = 67174409
              , a = ""
              , o = u(e);
            for (; 96 !== o; ) {
                if (36 === o && 123 === e.source.charCodeAt(e.index + 1)) {
                    u(e),
                    s = 67174408;
                    break
                }
                if (8 == (8 & o) && 92 === o)
                    if (o = u(e),
                    o > 126)
                        a += d(o);
                    else {
                        const n = b(e, 1024 | t, o);
                        if (n >= 0)
                            a += d(n);
                        else {
                            if (-1 !== n && 65536 & t) {
                                a = void 0,
                                o = O(e, o),
                                o < 0 && (s = 67174408);
                                break
                            }
                            D(e, n, 1)
                        }
                    }
                else
                    e.index < e.end && 13 === o && 10 === e.source.charCodeAt(e.index) && (a += d(o),
                    e.currentChar = e.source.charCodeAt(++e.index)),
                    ((83 & o) < 3 && 10 === o || (8232 ^ o) <= 1) && (e.column = -1,
                    e.line++),
                    a += d(o);
                e.index >= e.end && r(e, 15),
                o = u(e)
            }
            return u(e),
            e.tokenValue = a,
            e.tokenRaw = e.source.slice(n + 1, e.index - (67174409 === s ? 1 : 2)),
            s
        }
        function O(e, t) {
            for (; 96 !== t; ) {
                switch (t) {
                case 36:
                    {
                        const n = e.index + 1;
                        if (n < e.end && 123 === e.source.charCodeAt(n))
                            return e.index = n,
                            e.column++,
                            -t;
                        break
                    }
                case 10:
                case 8232:
                case 8233:
                    e.column = -1,
                    e.line++
                }
                e.index >= e.end && r(e, 15),
                t = u(e)
            }
            return t
        }
        function L(e, t) {
            return e.index >= e.end && r(e, 0),
            e.index--,
            e.column--,
            P(e, t)
        }
        function M(e, t, n) {
            let s = e.currentChar
              , a = 0
              , o = 9
              , i = 64 & n ? 0 : 1
              , l = 0
              , E = 0;
            if (64 & n)
                a = "." + y(e, s),
                s = e.currentChar,
                110 === s && r(e, 11);
            else {
                if (48 === s)
                    if (s = u(e),
                    120 == (32 | s)) {
                        for (n = 136,
                        s = u(e); 4160 & m[s]; )
                            95 !== s ? (E = 1,
                            a = 16 * a + T(s),
                            l++,
                            s = u(e)) : (E || r(e, 146),
                            E = 0,
                            s = u(e));
                        0 !== l && E || r(e, 0 === l ? 19 : 147)
                    } else if (111 == (32 | s)) {
                        for (n = 132,
                        s = u(e); 4128 & m[s]; )
                            95 !== s ? (E = 1,
                            a = 8 * a + (s - 48),
                            l++,
                            s = u(e)) : (E || r(e, 146),
                            E = 0,
                            s = u(e));
                        0 !== l && E || r(e, 0 === l ? 0 : 147)
                    } else if (98 == (32 | s)) {
                        for (n = 130,
                        s = u(e); 4224 & m[s]; )
                            95 !== s ? (E = 1,
                            a = 2 * a + (s - 48),
                            l++,
                            s = u(e)) : (E || r(e, 146),
                            E = 0,
                            s = u(e));
                        0 !== l && E || r(e, 0 === l ? 0 : 147)
                    } else if (32 & m[s])
                        for (1024 & t && r(e, 1),
                        n = 1; 16 & m[s]; ) {
                            if (512 & m[s]) {
                                n = 32,
                                i = 0;
                                break
                            }
                            a = 8 * a + (s - 48),
                            s = u(e)
                        }
                    else
                        512 & m[s] ? (1024 & t && r(e, 1),
                        e.flags |= 64,
                        n = 32) : 95 === s && r(e, 0);
                if (48 & n) {
                    if (i) {
                        for (; o >= 0 && 4112 & m[s]; )
                            95 !== s ? (E = 0,
                            a = 10 * a + (s - 48),
                            s = u(e),
                            --o) : (s = u(e),
                            (95 === s || 32 & n) && c(e.index, e.line, e.index + 1, 146),
                            E = 1);
                        if (E && c(e.index, e.line, e.index + 1, 147),
                        o >= 0 && !_(s) && 46 !== s)
                            return e.tokenValue = a,
                            512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
                            134283266
                    }
                    a += y(e, s),
                    s = e.currentChar,
                    46 === s && (95 === u(e) && r(e, 0),
                    n = 64,
                    a += "." + y(e, e.currentChar),
                    s = e.currentChar)
                }
            }
            const h = e.index;
            let p = 0;
            if (110 === s && 128 & n)
                p = 1,
                s = u(e);
            else if (101 == (32 | s)) {
                s = u(e),
                256 & m[s] && (s = u(e));
                const {index: t} = e;
                0 == (16 & m[s]) && r(e, 10),
                a += e.source.substring(h, t) + y(e, s),
                s = e.currentChar
            }
            return (e.index < e.end && 16 & m[s] || _(s)) && r(e, 12),
            p ? (e.tokenRaw = e.source.slice(e.tokenPos, e.index),
            e.tokenValue = BigInt(a),
            134283389) : (e.tokenValue = 15 & n ? a : 32 & n ? parseFloat(e.source.substring(e.tokenPos, e.index)) : +a,
            512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
            134283266)
        }
        function y(e, t) {
            let n = 0
              , s = e.index
              , a = "";
            for (; 4112 & m[t]; )
                if (95 !== t)
                    n = 0,
                    t = u(e);
                else {
                    const {index: r} = e;
                    95 === (t = u(e)) && c(e.index, e.line, e.index + 1, 146),
                    n = 1,
                    a += e.source.substring(s, r),
                    s = e.index
                }
            return n && c(e.index, e.line, e.index + 1, 147),
            a + e.source.substring(s, e.index)
        }
        const w = ["end of source", "identifier", "number", "string", "regular expression", "false", "true", "null", "template continuation", "template tail", "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", '"', "</", "/>", "++", "--", "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=", "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch", "this", "throw", "try", "while", "with", "implements", "interface", "package", "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor", "get", "set", "from", "of", "enum", "eval", "arguments", "escaped keyword", "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral", "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template", "@", "target", "meta", "LineFeed", "Escaped", "JSXText"]
          , v = Object.create(null, {
            this: {
                value: 86113
            },
            function: {
                value: 86106
            },
            if: {
                value: 20571
            },
            return: {
                value: 20574
            },
            var: {
                value: 86090
            },
            else: {
                value: 20565
            },
            for: {
                value: 20569
            },
            new: {
                value: 86109
            },
            in: {
                value: 8738868
            },
            typeof: {
                value: 16863277
            },
            while: {
                value: 20580
            },
            case: {
                value: 20558
            },
            break: {
                value: 20557
            },
            try: {
                value: 20579
            },
            catch: {
                value: 20559
            },
            delete: {
                value: 16863278
            },
            throw: {
                value: 86114
            },
            switch: {
                value: 86112
            },
            continue: {
                value: 20561
            },
            default: {
                value: 20563
            },
            instanceof: {
                value: 8476725
            },
            do: {
                value: 20564
            },
            void: {
                value: 16863279
            },
            finally: {
                value: 20568
            },
            async: {
                value: 209007
            },
            await: {
                value: 209008
            },
            class: {
                value: 86096
            },
            const: {
                value: 86092
            },
            constructor: {
                value: 12401
            },
            debugger: {
                value: 20562
            },
            export: {
                value: 20566
            },
            extends: {
                value: 20567
            },
            false: {
                value: 86021
            },
            from: {
                value: 12404
            },
            get: {
                value: 12402
            },
            implements: {
                value: 36966
            },
            import: {
                value: 86108
            },
            interface: {
                value: 36967
            },
            let: {
                value: 241739
            },
            null: {
                value: 86023
            },
            of: {
                value: 274549
            },
            package: {
                value: 36968
            },
            private: {
                value: 36969
            },
            protected: {
                value: 36970
            },
            public: {
                value: 36971
            },
            set: {
                value: 12403
            },
            static: {
                value: 36972
            },
            super: {
                value: 86111
            },
            true: {
                value: 86022
            },
            with: {
                value: 20581
            },
            yield: {
                value: 241773
            },
            enum: {
                value: 86134
            },
            eval: {
                value: 537079927
            },
            as: {
                value: 77934
            },
            arguments: {
                value: 537079928
            },
            target: {
                value: 143494
            },
            meta: {
                value: 143495
            }
        });
        function B(e, t, n) {
            for (; A[u(e)]; )
                ;
            return e.tokenValue = e.source.slice(e.tokenPos, e.index),
            92 !== e.currentChar && e.currentChar < 126 ? v[e.tokenValue] || 208897 : x(e, t, 0, n)
        }
        function U(e, t) {
            const n = F(e);
            return C(n) || r(e, 4),
            e.tokenValue = d(n),
            x(e, t, 1, 4 & m[n])
        }
        function x(e, t, n, s) {
            let a = e.index;
            for (; e.index < e.end; )
                if (92 === e.currentChar) {
                    e.tokenValue += e.source.slice(a, e.index),
                    n = 1;
                    const t = F(e);
                    C(t) || r(e, 4),
                    s = s && 4 & m[t],
                    e.tokenValue += d(t),
                    a = e.index
                } else {
                    if (!C(e.currentChar) && !E(e, e.currentChar))
                        break;
                    u(e)
                }
            e.index <= e.end && (e.tokenValue += e.source.slice(a, e.index));
            const o = e.tokenValue.length;
            if (s && o >= 2 && o <= 11) {
                const s = v[e.tokenValue];
                return void 0 === s ? 208897 : n ? 1024 & t ? 209008 === s && 0 == (4196352 & t) ? s : 36972 === s || 36864 == (36864 & s) ? 122 : 121 : 1073741824 & t && 0 == (8192 & t) && 20480 == (20480 & s) ? s : 241773 === s ? 1073741824 & t ? 143483 : 2097152 & t ? 121 : s : 209007 === s && 1073741824 & t ? 143483 : 36864 == (36864 & s) || 209008 === s && 0 == (4194304 & t) ? s : 121 : s
            }
            return 208897
        }
        function H(e) {
            return _(u(e)) || r(e, 93),
            131
        }
        function F(e) {
            return 117 !== e.source.charCodeAt(e.index + 1) && r(e, 4),
            e.currentChar = e.source.charCodeAt(e.index += 2),
            function(e) {
                let t = 0;
                const n = e.currentChar;
                if (123 === n) {
                    const n = e.index - 2;
                    for (; 64 & m[u(e)]; )
                        t = t << 4 | T(e.currentChar),
                        t > 1114111 && c(n, e.line, e.index + 1, 101);
                    return 125 !== e.currentChar && c(n, e.line, e.index - 1, 6),
                    u(e),
                    t
                }
                0 == (64 & m[n]) && r(e, 6);
                const s = e.source.charCodeAt(e.index + 1);
                0 == (64 & m[s]) && r(e, 6);
                const a = e.source.charCodeAt(e.index + 2);
                0 == (64 & m[a]) && r(e, 6);
                const o = e.source.charCodeAt(e.index + 3);
                return 0 == (64 & m[o]) && r(e, 6),
                t = T(n) << 12 | T(s) << 8 | T(a) << 4 | T(o),
                e.currentChar = e.source.charCodeAt(e.index += 4),
                t
            }(e)
        }
        const G = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 16842800, 134283267, 131, 208897, 8457015, 8455751, 134283267, 67174411, 16, 8457014, 25233970, 18, 25233971, 67108877, 8457016, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21, 1074790417, 8456258, 1077936157, 8456259, 22, 133, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20, 8455497, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8455240, 1074790415, 16842801, 129];
        function j(e, t) {
            if (e.flags = 1 ^ (1 | e.flags),
            e.startPos = e.index,
            e.startColumn = e.column,
            e.startLine = e.line,
            e.token = Y(e, t, 0),
            e.onToken && 1048576 !== e.token) {
                const t = {
                    start: {
                        line: e.linePos,
                        column: e.colPos
                    },
                    end: {
                        line: e.line,
                        column: e.column
                    }
                };
                e.onToken(function(e) {
                    switch (e) {
                    case 134283266:
                        return "NumericLiteral";
                    case 134283267:
                        return "StringLiteral";
                    case 86021:
                    case 86022:
                        return "BooleanLiteral";
                    case 86023:
                        return "NullLiteral";
                    case 65540:
                        return "RegularExpression";
                    case 67174408:
                    case 67174409:
                    case 132:
                        return "TemplateLiteral";
                    default:
                        return 143360 == (143360 & e) ? "Identifier" : 4096 == (4096 & e) ? "Keyword" : "Punctuator"
                    }
                }(e.token), e.tokenPos, e.index, t)
            }
        }
        function Y(e, t, n) {
            const s = 0 === e.index
              , a = e.source;
            let o = e.index
              , i = e.line
              , c = e.column;
            for (; e.index < e.end; ) {
                e.tokenPos = e.index,
                e.colPos = e.column,
                e.linePos = e.line;
                let T = e.currentChar;
                if (T <= 126) {
                    const l = G[T];
                    switch (l) {
                    case 67174411:
                    case 16:
                    case 2162700:
                    case 1074790415:
                    case 69271571:
                    case 20:
                    case 21:
                    case 1074790417:
                    case 18:
                    case 16842801:
                    case 133:
                    case 129:
                        return u(e),
                        l;
                    case 208897:
                        return B(e, t, 0);
                    case 4096:
                        return B(e, t, 1);
                    case 134283266:
                        return M(e, t, 144);
                    case 134283267:
                        return R(e, t, T);
                    case 132:
                        return P(e, t);
                    case 137:
                        return U(e, t);
                    case 131:
                        return H(e);
                    case 128:
                        u(e);
                        break;
                    case 130:
                        n |= 5,
                        p(e);
                        break;
                    case 136:
                        h(e, n),
                        n = -5 & n | 1;
                        break;
                    case 8456258:
                        let E = u(e);
                        if (e.index < e.end) {
                            if (60 === E)
                                return e.index < e.end && 61 === u(e) ? (u(e),
                                4194334) : 8456516;
                            if (61 === E)
                                return u(e),
                                8456256;
                            if (33 === E) {
                                const s = e.index + 1;
                                if (s + 1 < e.end && 45 === a.charCodeAt(s) && 45 == a.charCodeAt(s + 1)) {
                                    e.column += 3,
                                    e.currentChar = a.charCodeAt(e.index += 3),
                                    n = k(e, a, n, t, 2, e.tokenPos, e.linePos, e.colPos),
                                    o = e.tokenPos,
                                    i = e.linePos,
                                    c = e.colPos;
                                    continue
                                }
                                return 8456258
                            }
                            if (47 === E) {
                                if (0 == (16 & t))
                                    return 8456258;
                                const n = e.index + 1;
                                if (n < e.end && (E = a.charCodeAt(n),
                                42 === E || 47 === E))
                                    break;
                                return u(e),
                                25
                            }
                        }
                        return 8456258;
                    case 1077936157:
                        {
                            u(e);
                            const t = e.currentChar;
                            return 61 === t ? 61 === u(e) ? (u(e),
                            8455996) : 8455998 : 62 === t ? (u(e),
                            10) : 1077936157
                        }
                    case 16842800:
                        return 61 !== u(e) ? 16842800 : 61 !== u(e) ? 8455999 : (u(e),
                        8455997);
                    case 8457015:
                        return 61 !== u(e) ? 8457015 : (u(e),
                        4194342);
                    case 8457014:
                        {
                            if (u(e),
                            e.index >= e.end)
                                return 8457014;
                            const t = e.currentChar;
                            return 61 === t ? (u(e),
                            4194340) : 42 !== t ? 8457014 : 61 !== u(e) ? 8457273 : (u(e),
                            4194337)
                        }
                    case 8455497:
                        return 61 !== u(e) ? 8455497 : (u(e),
                        4194343);
                    case 25233970:
                        {
                            u(e);
                            const t = e.currentChar;
                            return 43 === t ? (u(e),
                            33619995) : 61 === t ? (u(e),
                            4194338) : 25233970
                        }
                    case 25233971:
                        {
                            u(e);
                            const l = e.currentChar;
                            if (45 === l) {
                                if (u(e),
                                (1 & n || s) && 62 === e.currentChar) {
                                    0 == (256 & t) && r(e, 108),
                                    u(e),
                                    n = k(e, a, n, t, 3, o, i, c),
                                    o = e.tokenPos,
                                    i = e.linePos,
                                    c = e.colPos;
                                    continue
                                }
                                return 33619996
                            }
                            return 61 === l ? (u(e),
                            4194339) : 25233971
                        }
                    case 8457016:
                        if (u(e),
                        e.index < e.end) {
                            const s = e.currentChar;
                            if (47 === s) {
                                u(e),
                                n = I(e, a, n, 0, e.tokenPos, e.linePos, e.colPos),
                                o = e.tokenPos,
                                i = e.linePos,
                                c = e.colPos;
                                continue
                            }
                            if (42 === s) {
                                u(e),
                                n = N(e, a, n),
                                o = e.tokenPos,
                                i = e.linePos,
                                c = e.colPos;
                                continue
                            }
                            if (32768 & t)
                                return S(e, t);
                            if (61 === s)
                                return u(e),
                                4259877
                        }
                        return 8457016;
                    case 67108877:
                        const d = u(e);
                        if (d >= 48 && d <= 57)
                            return M(e, t, 80);
                        if (46 === d) {
                            const t = e.index + 1;
                            if (t < e.end && 46 === a.charCodeAt(t))
                                return e.column += 2,
                                e.currentChar = a.charCodeAt(e.index += 2),
                                14
                        }
                        return 67108877;
                    case 8455240:
                        {
                            u(e);
                            const t = e.currentChar;
                            return 124 === t ? (u(e),
                            61 === e.currentChar ? (u(e),
                            4194346) : 8979003) : 61 === t ? (u(e),
                            4194344) : 8455240
                        }
                    case 8456259:
                        {
                            u(e);
                            const t = e.currentChar;
                            if (61 === t)
                                return u(e),
                                8456257;
                            if (62 !== t)
                                return 8456259;
                            if (u(e),
                            e.index < e.end) {
                                const t = e.currentChar;
                                if (62 === t)
                                    return 61 === u(e) ? (u(e),
                                    4194336) : 8456518;
                                if (61 === t)
                                    return u(e),
                                    4194335
                            }
                            return 8456517
                        }
                    case 8455751:
                        {
                            u(e);
                            const t = e.currentChar;
                            return 38 === t ? (u(e),
                            61 === e.currentChar ? (u(e),
                            4194347) : 8979258) : 61 === t ? (u(e),
                            4194345) : 8455751
                        }
                    case 22:
                        {
                            let t = u(e);
                            if (63 === t)
                                return u(e),
                                61 === e.currentChar ? (u(e),
                                4194348) : 276889982;
                            if (46 === t) {
                                const n = e.index + 1;
                                if (n < e.end && (t = a.charCodeAt(n),
                                !(t >= 48 && t <= 57)))
                                    return u(e),
                                    67108991
                            }
                            return 22
                        }
                    }
                } else {
                    if ((8232 ^ T) <= 1) {
                        n = -5 & n | 1,
                        p(e);
                        continue
                    }
                    if (55296 == (64512 & T) || 0 != (1 & l[34816 + (T >>> 5)] >>> T))
                        return 56320 == (64512 & T) && (T = (1023 & T) << 10 | 1023 & T | 65536,
                        0 == (1 & l[0 + (T >>> 5)] >>> T) && r(e, 18, d(T)),
                        e.index++,
                        e.currentChar = T),
                        e.column++,
                        e.tokenValue = "",
                        x(e, t, 0, 0);
                    if (160 === (E = T) || 65279 === E || 133 === E || 5760 === E || E >= 8192 && E <= 8203 || 8239 === E || 8287 === E || 12288 === E || 8201 === E || 65519 === E) {
                        u(e);
                        continue
                    }
                    r(e, 18, d(T))
                }
            }
            var E;
            return 1048576
        }
        const q = {
            AElig: "Æ",
            AMP: "&",
            Aacute: "Á",
            Abreve: "Ă",
            Acirc: "Â",
            Acy: "А",
            Afr: "𝔄",
            Agrave: "À",
            Alpha: "Α",
            Amacr: "Ā",
            And: "⩓",
            Aogon: "Ą",
            Aopf: "𝔸",
            ApplyFunction: "⁡",
            Aring: "Å",
            Ascr: "𝒜",
            Assign: "≔",
            Atilde: "Ã",
            Auml: "Ä",
            Backslash: "∖",
            Barv: "⫧",
            Barwed: "⌆",
            Bcy: "Б",
            Because: "∵",
            Bernoullis: "ℬ",
            Beta: "Β",
            Bfr: "𝔅",
            Bopf: "𝔹",
            Breve: "˘",
            Bscr: "ℬ",
            Bumpeq: "≎",
            CHcy: "Ч",
            COPY: "©",
            Cacute: "Ć",
            Cap: "⋒",
            CapitalDifferentialD: "ⅅ",
            Cayleys: "ℭ",
            Ccaron: "Č",
            Ccedil: "Ç",
            Ccirc: "Ĉ",
            Cconint: "∰",
            Cdot: "Ċ",
            Cedilla: "¸",
            CenterDot: "·",
            Cfr: "ℭ",
            Chi: "Χ",
            CircleDot: "⊙",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            Colon: "∷",
            Colone: "⩴",
            Congruent: "≡",
            Conint: "∯",
            ContourIntegral: "∮",
            Copf: "ℂ",
            Coproduct: "∐",
            CounterClockwiseContourIntegral: "∳",
            Cross: "⨯",
            Cscr: "𝒞",
            Cup: "⋓",
            CupCap: "≍",
            DD: "ⅅ",
            DDotrahd: "⤑",
            DJcy: "Ђ",
            DScy: "Ѕ",
            DZcy: "Џ",
            Dagger: "‡",
            Darr: "↡",
            Dashv: "⫤",
            Dcaron: "Ď",
            Dcy: "Д",
            Del: "∇",
            Delta: "Δ",
            Dfr: "𝔇",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            Diamond: "⋄",
            DifferentialD: "ⅆ",
            Dopf: "𝔻",
            Dot: "¨",
            DotDot: "⃜",
            DotEqual: "≐",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            Downarrow: "⇓",
            Dscr: "𝒟",
            Dstrok: "Đ",
            ENG: "Ŋ",
            ETH: "Ð",
            Eacute: "É",
            Ecaron: "Ě",
            Ecirc: "Ê",
            Ecy: "Э",
            Edot: "Ė",
            Efr: "𝔈",
            Egrave: "È",
            Element: "∈",
            Emacr: "Ē",
            EmptySmallSquare: "◻",
            EmptyVerySmallSquare: "▫",
            Eogon: "Ę",
            Eopf: "𝔼",
            Epsilon: "Ε",
            Equal: "⩵",
            EqualTilde: "≂",
            Equilibrium: "⇌",
            Escr: "ℰ",
            Esim: "⩳",
            Eta: "Η",
            Euml: "Ë",
            Exists: "∃",
            ExponentialE: "ⅇ",
            Fcy: "Ф",
            Ffr: "𝔉",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            Fopf: "𝔽",
            ForAll: "∀",
            Fouriertrf: "ℱ",
            Fscr: "ℱ",
            GJcy: "Ѓ",
            GT: ">",
            Gamma: "Γ",
            Gammad: "Ϝ",
            Gbreve: "Ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            Gcy: "Г",
            Gdot: "Ġ",
            Gfr: "𝔊",
            Gg: "⋙",
            Gopf: "𝔾",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "𝒢",
            Gt: "≫",
            HARDcy: "Ъ",
            Hacek: "ˇ",
            Hat: "^",
            Hcirc: "Ĥ",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            Hopf: "ℍ",
            HorizontalLine: "─",
            Hscr: "ℋ",
            Hstrok: "Ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            IEcy: "Е",
            IJlig: "Ĳ",
            IOcy: "Ё",
            Iacute: "Í",
            Icirc: "Î",
            Icy: "И",
            Idot: "İ",
            Ifr: "ℑ",
            Igrave: "Ì",
            Im: "ℑ",
            Imacr: "Ī",
            ImaginaryI: "ⅈ",
            Implies: "⇒",
            Int: "∬",
            Integral: "∫",
            Intersection: "⋂",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            Iogon: "Į",
            Iopf: "𝕀",
            Iota: "Ι",
            Iscr: "ℐ",
            Itilde: "Ĩ",
            Iukcy: "І",
            Iuml: "Ï",
            Jcirc: "Ĵ",
            Jcy: "Й",
            Jfr: "𝔍",
            Jopf: "𝕁",
            Jscr: "𝒥",
            Jsercy: "Ј",
            Jukcy: "Є",
            KHcy: "Х",
            KJcy: "Ќ",
            Kappa: "Κ",
            Kcedil: "Ķ",
            Kcy: "К",
            Kfr: "𝔎",
            Kopf: "𝕂",
            Kscr: "𝒦",
            LJcy: "Љ",
            LT: "<",
            Lacute: "Ĺ",
            Lambda: "Λ",
            Lang: "⟪",
            Laplacetrf: "ℒ",
            Larr: "↞",
            Lcaron: "Ľ",
            Lcedil: "Ļ",
            Lcy: "Л",
            LeftAngleBracket: "⟨",
            LeftArrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            LeftRightArrow: "↔",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            Leftarrow: "⇐",
            Leftrightarrow: "⇔",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            LessLess: "⪡",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            Lfr: "𝔏",
            Ll: "⋘",
            Lleftarrow: "⇚",
            Lmidot: "Ŀ",
            LongLeftArrow: "⟵",
            LongLeftRightArrow: "⟷",
            LongRightArrow: "⟶",
            Longleftarrow: "⟸",
            Longleftrightarrow: "⟺",
            Longrightarrow: "⟹",
            Lopf: "𝕃",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            Lscr: "ℒ",
            Lsh: "↰",
            Lstrok: "Ł",
            Lt: "≪",
            Map: "⤅",
            Mcy: "М",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "𝔐",
            MinusPlus: "∓",
            Mopf: "𝕄",
            Mscr: "ℳ",
            Mu: "Μ",
            NJcy: "Њ",
            Nacute: "Ń",
            Ncaron: "Ň",
            Ncedil: "Ņ",
            Ncy: "Н",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            Nfr: "𝔑",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            Nopf: "ℕ",
            Not: "⫬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            Nscr: "𝒩",
            Ntilde: "Ñ",
            Nu: "Ν",
            OElig: "Œ",
            Oacute: "Ó",
            Ocirc: "Ô",
            Ocy: "О",
            Odblac: "Ő",
            Ofr: "𝔒",
            Ograve: "Ò",
            Omacr: "Ō",
            Omega: "Ω",
            Omicron: "Ο",
            Oopf: "𝕆",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            Or: "⩔",
            Oscr: "𝒪",
            Oslash: "Ø",
            Otilde: "Õ",
            Otimes: "⨷",
            Ouml: "Ö",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            PartialD: "∂",
            Pcy: "П",
            Pfr: "𝔓",
            Phi: "Φ",
            Pi: "Π",
            PlusMinus: "±",
            Poincareplane: "ℌ",
            Popf: "ℙ",
            Pr: "⪻",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            Prime: "″",
            Product: "∏",
            Proportion: "∷",
            Proportional: "∝",
            Pscr: "𝒫",
            Psi: "Ψ",
            QUOT: '"',
            Qfr: "𝔔",
            Qopf: "ℚ",
            Qscr: "𝒬",
            RBarr: "⤐",
            REG: "®",
            Racute: "Ŕ",
            Rang: "⟫",
            Rarr: "↠",
            Rarrtl: "⤖",
            Rcaron: "Ř",
            Rcedil: "Ŗ",
            Rcy: "Р",
            Re: "ℜ",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            Rfr: "ℜ",
            Rho: "Ρ",
            RightAngleBracket: "⟩",
            RightArrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            Rightarrow: "⇒",
            Ropf: "ℝ",
            RoundImplies: "⥰",
            Rrightarrow: "⇛",
            Rscr: "ℛ",
            Rsh: "↱",
            RuleDelayed: "⧴",
            SHCHcy: "Щ",
            SHcy: "Ш",
            SOFTcy: "Ь",
            Sacute: "Ś",
            Sc: "⪼",
            Scaron: "Š",
            Scedil: "Ş",
            Scirc: "Ŝ",
            Scy: "С",
            Sfr: "𝔖",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            Sigma: "Σ",
            SmallCircle: "∘",
            Sopf: "𝕊",
            Sqrt: "√",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            Sscr: "𝒮",
            Star: "⋆",
            Sub: "⋐",
            Subset: "⋐",
            SubsetEqual: "⊆",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            SuchThat: "∋",
            Sum: "∑",
            Sup: "⋑",
            Superset: "⊃",
            SupersetEqual: "⊇",
            Supset: "⋑",
            THORN: "Þ",
            TRADE: "™",
            TSHcy: "Ћ",
            TScy: "Ц",
            Tab: "\t",
            Tau: "Τ",
            Tcaron: "Ť",
            Tcedil: "Ţ",
            Tcy: "Т",
            Tfr: "𝔗",
            Therefore: "∴",
            Theta: "Θ",
            ThickSpace: "  ",
            ThinSpace: " ",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            Topf: "𝕋",
            TripleDot: "⃛",
            Tscr: "𝒯",
            Tstrok: "Ŧ",
            Uacute: "Ú",
            Uarr: "↟",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            Ubreve: "Ŭ",
            Ucirc: "Û",
            Ucy: "У",
            Udblac: "Ű",
            Ufr: "𝔘",
            Ugrave: "Ù",
            Umacr: "Ū",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            Uopf: "𝕌",
            UpArrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            UpDownArrow: "↕",
            UpEquilibrium: "⥮",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            Uparrow: "⇑",
            Updownarrow: "⇕",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            Upsi: "ϒ",
            Upsilon: "Υ",
            Uring: "Ů",
            Uscr: "𝒰",
            Utilde: "Ũ",
            Uuml: "Ü",
            VDash: "⊫",
            Vbar: "⫫",
            Vcy: "В",
            Vdash: "⊩",
            Vdashl: "⫦",
            Vee: "⋁",
            Verbar: "‖",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "𝔙",
            Vopf: "𝕍",
            Vscr: "𝒱",
            Vvdash: "⊪",
            Wcirc: "Ŵ",
            Wedge: "⋀",
            Wfr: "𝔚",
            Wopf: "𝕎",
            Wscr: "𝒲",
            Xfr: "𝔛",
            Xi: "Ξ",
            Xopf: "𝕏",
            Xscr: "𝒳",
            YAcy: "Я",
            YIcy: "Ї",
            YUcy: "Ю",
            Yacute: "Ý",
            Ycirc: "Ŷ",
            Ycy: "Ы",
            Yfr: "𝔜",
            Yopf: "𝕐",
            Yscr: "𝒴",
            Yuml: "Ÿ",
            ZHcy: "Ж",
            Zacute: "Ź",
            Zcaron: "Ž",
            Zcy: "З",
            Zdot: "Ż",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            Zfr: "ℨ",
            Zopf: "ℤ",
            Zscr: "𝒵",
            aacute: "á",
            abreve: "ă",
            ac: "∾",
            acE: "∾̳",
            acd: "∿",
            acirc: "â",
            acute: "´",
            acy: "а",
            aelig: "æ",
            af: "⁡",
            afr: "𝔞",
            agrave: "à",
            alefsym: "ℵ",
            aleph: "ℵ",
            alpha: "α",
            amacr: "ā",
            amalg: "⨿",
            amp: "&",
            and: "∧",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            aogon: "ą",
            aopf: "𝕒",
            ap: "≈",
            apE: "⩰",
            apacir: "⩯",
            ape: "≊",
            apid: "≋",
            apos: "'",
            approx: "≈",
            approxeq: "≊",
            aring: "å",
            ascr: "𝒶",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            atilde: "ã",
            auml: "ä",
            awconint: "∳",
            awint: "⨑",
            bNot: "⫭",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            barvee: "⊽",
            barwed: "⌅",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            bfr: "𝔟",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bnot: "⌐",
            bopf: "𝕓",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxDL: "╗",
            boxDR: "╔",
            boxDl: "╖",
            boxDr: "╓",
            boxH: "═",
            boxHD: "╦",
            boxHU: "╩",
            boxHd: "╤",
            boxHu: "╧",
            boxUL: "╝",
            boxUR: "╚",
            boxUl: "╜",
            boxUr: "╙",
            boxV: "║",
            boxVH: "╬",
            boxVL: "╣",
            boxVR: "╠",
            boxVh: "╫",
            boxVl: "╢",
            boxVr: "╟",
            boxbox: "⧉",
            boxdL: "╕",
            boxdR: "╒",
            boxdl: "┐",
            boxdr: "┌",
            boxh: "─",
            boxhD: "╥",
            boxhU: "╨",
            boxhd: "┬",
            boxhu: "┴",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxuL: "╛",
            boxuR: "╘",
            boxul: "┘",
            boxur: "└",
            boxv: "│",
            boxvH: "╪",
            boxvL: "╡",
            boxvR: "╞",
            boxvh: "┼",
            boxvl: "┤",
            boxvr: "├",
            bprime: "‵",
            breve: "˘",
            brvbar: "¦",
            bscr: "𝒷",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            bumpeq: "≏",
            cacute: "ć",
            cap: "∩",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            ccaps: "⩍",
            ccaron: "č",
            ccedil: "ç",
            ccirc: "ĉ",
            ccups: "⩌",
            ccupssm: "⩐",
            cdot: "ċ",
            cedil: "¸",
            cemptyv: "⦲",
            cent: "¢",
            centerdot: "·",
            cfr: "𝔠",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            chi: "χ",
            cir: "○",
            cirE: "⧃",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledR: "®",
            circledS: "Ⓢ",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            conint: "∮",
            copf: "𝕔",
            coprod: "∐",
            copy: "©",
            copysr: "℗",
            crarr: "↵",
            cross: "✗",
            cscr: "𝒸",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cup: "∪",
            cupbrcap: "⩈",
            cupcap: "⩆",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "¤",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dArr: "⇓",
            dHar: "⥥",
            dagger: "†",
            daleth: "ℸ",
            darr: "↓",
            dash: "‐",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            dcaron: "ď",
            dcy: "д",
            dd: "ⅆ",
            ddagger: "‡",
            ddarr: "⇊",
            ddotseq: "⩷",
            deg: "°",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            dfr: "𝔡",
            dharl: "⇃",
            dharr: "⇂",
            diam: "⋄",
            diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divide: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            dopf: "𝕕",
            dot: "˙",
            doteq: "≐",
            doteqdot: "≑",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            downarrow: "↓",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            dscr: "𝒹",
            dscy: "ѕ",
            dsol: "⧶",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            dzcy: "џ",
            dzigrarr: "⟿",
            eDDot: "⩷",
            eDot: "≑",
            eacute: "é",
            easter: "⩮",
            ecaron: "ě",
            ecir: "≖",
            ecirc: "ê",
            ecolon: "≕",
            ecy: "э",
            edot: "ė",
            ee: "ⅇ",
            efDot: "≒",
            efr: "𝔢",
            eg: "⪚",
            egrave: "è",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            emptyv: "∅",
            emsp13: " ",
            emsp14: " ",
            emsp: " ",
            eng: "ŋ",
            ensp: " ",
            eogon: "ę",
            eopf: "𝕖",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            equals: "=",
            equest: "≟",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erDot: "≓",
            erarr: "⥱",
            escr: "ℯ",
            esdot: "≐",
            esim: "≂",
            eta: "η",
            eth: "ð",
            euml: "ë",
            euro: "€",
            excl: "!",
            exist: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            fallingdotseq: "≒",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            ffr: "𝔣",
            filig: "ﬁ",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            fopf: "𝕗",
            forall: "∀",
            fork: "⋔",
            forkv: "⫙",
            fpartint: "⨍",
            frac12: "½",
            frac13: "⅓",
            frac14: "¼",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "¾",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "𝒻",
            gE: "≧",
            gEl: "⪌",
            gacute: "ǵ",
            gamma: "γ",
            gammad: "ϝ",
            gap: "⪆",
            gbreve: "ğ",
            gcirc: "ĝ",
            gcy: "г",
            gdot: "ġ",
            ge: "≥",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            gfr: "𝔤",
            gg: "≫",
            ggg: "⋙",
            gimel: "ℷ",
            gjcy: "ѓ",
            gl: "≷",
            glE: "⪒",
            gla: "⪥",
            glj: "⪤",
            gnE: "≩",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            gopf: "𝕘",
            grave: "`",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gt: ">",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            hArr: "⇔",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            hardcy: "ъ",
            harr: "↔",
            harrcir: "⥈",
            harrw: "↭",
            hbar: "ℏ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "𝔥",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "𝕙",
            horbar: "―",
            hscr: "𝒽",
            hslash: "ℏ",
            hstrok: "ħ",
            hybull: "⁃",
            hyphen: "‐",
            iacute: "í",
            ic: "⁣",
            icirc: "î",
            icy: "и",
            iecy: "е",
            iexcl: "¡",
            iff: "⇔",
            ifr: "𝔦",
            igrave: "ì",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            ijlig: "ĳ",
            imacr: "ī",
            image: "ℑ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            int: "∫",
            intcal: "⊺",
            integers: "ℤ",
            intercal: "⊺",
            intlarhk: "⨗",
            intprod: "⨼",
            iocy: "ё",
            iogon: "į",
            iopf: "𝕚",
            iota: "ι",
            iprod: "⨼",
            iquest: "¿",
            iscr: "𝒾",
            isin: "∈",
            isinE: "⋹",
            isindot: "⋵",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            itilde: "ĩ",
            iukcy: "і",
            iuml: "ï",
            jcirc: "ĵ",
            jcy: "й",
            jfr: "𝔧",
            jmath: "ȷ",
            jopf: "𝕛",
            jscr: "𝒿",
            jsercy: "ј",
            jukcy: "є",
            kappa: "κ",
            kappav: "ϰ",
            kcedil: "ķ",
            kcy: "к",
            kfr: "𝔨",
            kgreen: "ĸ",
            khcy: "х",
            kjcy: "ќ",
            kopf: "𝕜",
            kscr: "𝓀",
            lAarr: "⇚",
            lArr: "⇐",
            lAtail: "⤛",
            lBarr: "⤎",
            lE: "≦",
            lEg: "⪋",
            lHar: "⥢",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            lambda: "λ",
            lang: "⟨",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            laquo: "«",
            larr: "←",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            latail: "⤙",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            lcaron: "ľ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            leftarrow: "←",
            leftarrowtail: "↢",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            leftthreetimes: "⋋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            lessgtr: "≶",
            lesssim: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            lfr: "𝔩",
            lg: "≶",
            lgE: "⪑",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            ljcy: "љ",
            ll: "≪",
            llarr: "⇇",
            llcorner: "⌞",
            llhard: "⥫",
            lltri: "◺",
            lmidot: "ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnE: "≨",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            longleftrightarrow: "⟷",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            lopf: "𝕝",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "𝓁",
            lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            lstrok: "ł",
            lt: "<",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltrPar: "⦖",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            mDDot: "∺",
            macr: "¯",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            mcy: "м",
            mdash: "—",
            measuredangle: "∡",
            mfr: "𝔪",
            mho: "℧",
            micro: "µ",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            middot: "·",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            mopf: "𝕞",
            mp: "∓",
            mscr: "𝓂",
            mstpos: "∾",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nGg: "⋙̸",
            nGt: "≫⃒",
            nGtv: "≫̸",
            nLeftarrow: "⇍",
            nLeftrightarrow: "⇎",
            nLl: "⋘̸",
            nLt: "≪⃒",
            nLtv: "≪̸",
            nRightarrow: "⇏",
            nVDash: "⊯",
            nVdash: "⊮",
            nabla: "∇",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbsp: " ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            ncaron: "ň",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            ncy: "н",
            ndash: "–",
            ne: "≠",
            neArr: "⇗",
            nearhk: "⤤",
            nearr: "↗",
            nearrow: "↗",
            nedot: "≐̸",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            nexist: "∄",
            nexists: "∄",
            nfr: "𝔫",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            ngsim: "≵",
            ngt: "≯",
            ngtr: "≯",
            nhArr: "⇎",
            nharr: "↮",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            njcy: "њ",
            nlArr: "⇍",
            nlE: "≦̸",
            nlarr: "↚",
            nldr: "‥",
            nle: "≰",
            nleftarrow: "↚",
            nleftrightarrow: "↮",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nlsim: "≴",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nmid: "∤",
            nopf: "𝕟",
            not: "¬",
            notin: "∉",
            notinE: "⋹̸",
            notindot: "⋵̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrArr: "⇏",
            nrarr: "↛",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            nscr: "𝓃",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            ntilde: "ñ",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvDash: "⊭",
            nvHarr: "⤄",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwArr: "⇖",
            nwarhk: "⤣",
            nwarr: "↖",
            nwarrow: "↖",
            nwnear: "⤧",
            oS: "Ⓢ",
            oacute: "ó",
            oast: "⊛",
            ocir: "⊚",
            ocirc: "ô",
            ocy: "о",
            odash: "⊝",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            oelig: "œ",
            ofcir: "⦿",
            ofr: "𝔬",
            ogon: "˛",
            ograve: "ò",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            omacr: "ō",
            omega: "ω",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            oopf: "𝕠",
            opar: "⦷",
            operp: "⦹",
            oplus: "⊕",
            or: "∨",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "ª",
            ordm: "º",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oscr: "ℴ",
            oslash: "ø",
            osol: "⊘",
            otilde: "õ",
            otimes: "⊗",
            otimesas: "⨶",
            ouml: "ö",
            ovbar: "⌽",
            par: "∥",
            para: "¶",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            pfr: "𝔭",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            plusmn: "±",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            pointint: "⨕",
            popf: "𝕡",
            pound: "£",
            pr: "≺",
            prE: "⪳",
            prap: "⪷",
            prcue: "≼",
            pre: "⪯",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            prime: "′",
            primes: "ℙ",
            prnE: "⪵",
            prnap: "⪹",
            prnsim: "⋨",
            prod: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            pscr: "𝓅",
            psi: "ψ",
            puncsp: " ",
            qfr: "𝔮",
            qint: "⨌",
            qopf: "𝕢",
            qprime: "⁗",
            qscr: "𝓆",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            rAarr: "⇛",
            rArr: "⇒",
            rAtail: "⤜",
            rBarr: "⤏",
            rHar: "⥤",
            race: "∽̱",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "»",
            rarr: "→",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            rarrtl: "↣",
            rarrw: "↝",
            ratail: "⤚",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            rcaron: "ř",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            reg: "®",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "𝔯",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            rho: "ρ",
            rhov: "ϱ",
            rightarrow: "→",
            rightarrowtail: "↣",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            rightthreetimes: "⋌",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "𝕣",
            roplus: "⨮",
            rotimes: "⨵",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            rsaquo: "›",
            rscr: "𝓇",
            rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            ruluhar: "⥨",
            rx: "℞",
            sacute: "ś",
            sbquo: "‚",
            sc: "≻",
            scE: "⪴",
            scap: "⪸",
            scaron: "š",
            sccue: "≽",
            sce: "⪰",
            scedil: "ş",
            scirc: "ŝ",
            scnE: "⪶",
            scnap: "⪺",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            scy: "с",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            seArr: "⇘",
            searhk: "⤥",
            searr: "↘",
            searrow: "↘",
            sect: "§",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            sfr: "𝔰",
            sfrown: "⌢",
            sharp: "♯",
            shchcy: "щ",
            shcy: "ш",
            shortmid: "∣",
            shortparallel: "∥",
            shy: "­",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            softcy: "ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            sopf: "𝕤",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            square: "□",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            sscr: "𝓈",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            sub: "⊂",
            subE: "⫅",
            subdot: "⪽",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            subseteq: "⊆",
            subseteqq: "⫅",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            sum: "∑",
            sung: "♪",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            sup: "⊃",
            supE: "⫆",
            supdot: "⪾",
            supdsub: "⫘",
            supe: "⊇",
            supedot: "⫄",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            supset: "⊃",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swArr: "⇙",
            swarhk: "⤦",
            swarr: "↙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "ß",
            target: "⌖",
            tau: "τ",
            tbrk: "⎴",
            tcaron: "ť",
            tcedil: "ţ",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            tfr: "𝔱",
            there4: "∴",
            therefore: "∴",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            thinsp: " ",
            thkap: "≈",
            thksim: "∼",
            thorn: "þ",
            tilde: "˜",
            times: "×",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            topf: "𝕥",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            tscr: "𝓉",
            tscy: "ц",
            tshcy: "ћ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            uArr: "⇑",
            uHar: "⥣",
            uacute: "ú",
            uarr: "↑",
            ubrcy: "ў",
            ubreve: "ŭ",
            ucirc: "û",
            ucy: "у",
            udarr: "⇅",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            ufr: "𝔲",
            ugrave: "ù",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            umacr: "ū",
            uml: "¨",
            uogon: "ų",
            uopf: "𝕦",
            uparrow: "↑",
            updownarrow: "↕",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            upsi: "υ",
            upsih: "ϒ",
            upsilon: "υ",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            uring: "ů",
            urtri: "◹",
            uscr: "𝓊",
            utdot: "⋰",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            uuml: "ü",
            uwangle: "⦧",
            vArr: "⇕",
            vBar: "⫨",
            vBarv: "⫩",
            vDash: "⊨",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vcy: "в",
            vdash: "⊢",
            vee: "∨",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            vert: "|",
            vfr: "𝔳",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            vopf: "𝕧",
            vprop: "∝",
            vrtri: "⊳",
            vscr: "𝓋",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            vzigzag: "⦚",
            wcirc: "ŵ",
            wedbar: "⩟",
            wedge: "∧",
            wedgeq: "≙",
            weierp: "℘",
            wfr: "𝔴",
            wopf: "𝕨",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            wscr: "𝓌",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            xfr: "𝔵",
            xhArr: "⟺",
            xharr: "⟷",
            xi: "ξ",
            xlArr: "⟸",
            xlarr: "⟵",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            xopf: "𝕩",
            xoplus: "⨁",
            xotime: "⨂",
            xrArr: "⟹",
            xrarr: "⟶",
            xscr: "𝓍",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            yacute: "ý",
            yacy: "я",
            ycirc: "ŷ",
            ycy: "ы",
            yen: "¥",
            yfr: "𝔶",
            yicy: "ї",
            yopf: "𝕪",
            yscr: "𝓎",
            yucy: "ю",
            yuml: "ÿ",
            zacute: "ź",
            zcaron: "ž",
            zcy: "з",
            zdot: "ż",
            zeetrf: "ℨ",
            zeta: "ζ",
            zfr: "𝔷",
            zhcy: "ж",
            zigrarr: "⇝",
            zopf: "𝕫",
            zscr: "𝓏",
            zwj: "‍",
            zwnj: "‌"
        }
          , V = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376
        };
        function X(e, t) {
            if (e.startPos = e.tokenPos = e.index,
            e.startColumn = e.colPos = e.column,
            e.startLine = e.linePos = e.line,
            e.index >= e.end)
                return e.token = 1048576;
            switch (G[e.source.charCodeAt(e.index)]) {
            case 8456258:
                u(e),
                47 === e.currentChar ? (u(e),
                e.token = 25) : e.token = 8456258;
                break;
            case 2162700:
                u(e),
                e.token = 2162700;
                break;
            default:
                {
                    let n = 0;
                    for (; e.index < e.end; ) {
                        const t = m[e.source.charCodeAt(e.index)];
                        if (1024 & t ? (n |= 5,
                        p(e)) : 2048 & t ? (h(e, n),
                        n = -5 & n | 1) : u(e),
                        16384 & m[e.currentChar])
                            break
                    }
                    const s = e.source.slice(e.tokenPos, e.index);
                    512 & t && (e.tokenRaw = s),
                    e.tokenValue = s.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (e=>{
                        if ("#" === e.charAt(1)) {
                            const n = e.charAt(2);
                            return (t = "X" === n || "x" === n ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10)) >= 55296 && t <= 57343 || t > 1114111 ? "�" : (t in V && (t = V[t]),
                            String.fromCodePoint(t))
                        }
                        var t;
                        return q[e.slice(1, -1)] || e
                    }
                    )),
                    e.token = 138
                }
            }
            return e.token
        }
        function W(e) {
            if (143360 == (143360 & e.token)) {
                const {index: t} = e;
                let n = e.currentChar;
                for (; 32770 & m[n]; )
                    n = u(e);
                e.tokenValue += e.source.slice(t, e.index)
            }
            return e.token = 208897,
            e.token
        }
        function Q(e, t, n) {
            0 != (1 & e.flags) || 1048576 == (1048576 & e.token) || n || r(e, 28, w[255 & e.token]),
            J(e, t, 1074790417)
        }
        function K(e, t, n, s) {
            return t - n < 13 && "use strict" === s && (1048576 == (1048576 & e.token) || 1 & e.flags) ? 1 : 0
        }
        function z(e, t, n) {
            return e.token !== n ? 0 : (j(e, t),
            1)
        }
        function J(e, t, n) {
            return e.token === n && (j(e, t),
            !0)
        }
        function $(e, t, n) {
            e.token !== n && r(e, 23, w[255 & n]),
            j(e, t)
        }
        function Z(e, t) {
            switch (t.type) {
            case "ArrayExpression":
                t.type = "ArrayPattern";
                const n = t.elements;
                for (let t = 0, s = n.length; t < s; ++t) {
                    const s = n[t];
                    s && Z(e, s)
                }
                return;
            case "ObjectExpression":
                t.type = "ObjectPattern";
                const s = t.properties;
                for (let t = 0, n = s.length; t < n; ++t)
                    Z(e, s[t]);
                return;
            case "AssignmentExpression":
                return t.type = "AssignmentPattern",
                "=" !== t.operator && r(e, 68),
                delete t.operator,
                void Z(e, t.left);
            case "Property":
                return void Z(e, t.value);
            case "SpreadElement":
                t.type = "RestElement",
                Z(e, t.argument)
            }
        }
        function ee(e, t, n, s, a) {
            1024 & t && (36864 == (36864 & s) && r(e, 114),
            a || 537079808 != (537079808 & s) || r(e, 115)),
            20480 == (20480 & s) && r(e, 99),
            24 & n && 241739 === s && r(e, 97),
            4196352 & t && 209008 === s && r(e, 95),
            2098176 & t && 241773 === s && r(e, 94, "yield")
        }
        function te(e, t, n) {
            1024 & t && (36864 == (36864 & n) && r(e, 114),
            537079808 == (537079808 & n) && r(e, 115),
            122 === n && r(e, 92),
            121 === n && r(e, 92)),
            20480 == (20480 & n) && r(e, 99),
            4196352 & t && 209008 === n && r(e, 95),
            2098176 & t && 241773 === n && r(e, 94, "yield")
        }
        function ne(e, t, n) {
            return 209008 === n && (4196352 & t && r(e, 95),
            e.destructible |= 128),
            241773 === n && 2097152 & t && r(e, 94, "yield"),
            20480 == (20480 & n) || 36864 == (36864 & n) || 122 == n
        }
        function se(e, t, n, s) {
            for (; t; ) {
                if (t["$" + n])
                    return s && r(e, 133),
                    1;
                s && t.loop && (s = 0),
                t = t.$
            }
            return 0
        }
        function ae(e, t, n, s, a, r) {
            return 2 & t && (r.start = n,
            r.end = e.startPos,
            r.range = [n, e.startPos]),
            4 & t && (r.loc = {
                start: {
                    line: s,
                    column: a
                },
                end: {
                    line: e.startLine,
                    column: e.startColumn
                }
            },
            e.sourceFile && (r.loc.source = e.sourceFile)),
            r
        }
        function re(e) {
            switch (e.type) {
            case "JSXIdentifier":
                return e.name;
            case "JSXNamespacedName":
                return e.namespace + ":" + e.name;
            case "JSXMemberExpression":
                return re(e.object) + "." + re(e.property)
            }
        }
        function oe(e, t, n) {
            const s = ce({
                parent: void 0,
                type: 2
            }, 1024);
            return ue(e, t, s, n, 1, 0),
            s
        }
        function ie(e, t, ...n) {
            const {index: s, line: a, column: r} = e;
            return {
                type: t,
                params: n,
                index: s,
                line: a,
                column: r
            }
        }
        function ce(e, t) {
            return {
                parent: e,
                type: t,
                scopeError: void 0
            }
        }
        function le(e, t, n, s, a, r) {
            4 & a ? Ee(e, t, n, s, a) : ue(e, t, n, s, a, r),
            64 & r && he(e, s)
        }
        function ue(e, t, n, s, a, o) {
            const i = n["#" + s];
            i && 0 == (2 & i) && (1 & a ? n.scopeError = ie(e, 140, s) : 256 & t && 64 & i && 2 & o || r(e, 140, s)),
            128 & n.type && n.parent["#" + s] && 0 == (2 & n.parent["#" + s]) && r(e, 140, s),
            1024 & n.type && i && 0 == (2 & i) && 1 & a && (n.scopeError = ie(e, 140, s)),
            64 & n.type && 768 & n.parent["#" + s] && r(e, 153, s),
            n["#" + s] = a
        }
        function Ee(e, t, n, s, a) {
            let o = n;
            for (; o && 0 == (256 & o.type); ) {
                const i = o["#" + s];
                248 & i && (256 & t && 0 == (1024 & t) && (128 & a && 68 & i || 128 & i && 68 & a) || r(e, 140, s)),
                o === n && 1 & i && 1 & a && (o.scopeError = ie(e, 140, s)),
                768 & i && (0 == (512 & i) || 0 == (256 & t) || 1024 & t) && r(e, 140, s),
                o["#" + s] = a,
                o = o.parent
            }
        }
        function he(e, t) {
            void 0 !== e.exportedNames && "" !== t && (e.exportedNames["#" + t] && r(e, 141, t),
            e.exportedNames["#" + t] = 1)
        }
        function pe(e, t) {
            void 0 !== e.exportedBindings && "" !== t && (e.exportedBindings["#" + t] = 1)
        }
        function de(e, t) {
            return 2098176 & e ? !(2048 & e && 209008 === t || 2097152 & e && 241773 === t || 143360 != (143360 & t) && 12288 != (12288 & t)) : 143360 == (143360 & t) || 12288 == (12288 & t) || 36864 == (36864 & t)
        }
        function Te(e, t, n, s) {
            537079808 == (537079808 & n) && (1024 & t && r(e, 115),
            s && (e.flags |= 512)),
            de(t, n) || r(e, 0)
        }
        function me(e, t, n) {
            let s;
            switch (e.leadingDecorators = Ct(e, t),
            e.token) {
            case 20566:
                s = function(e, t, n) {
                    const s = e.tokenPos
                      , a = e.linePos
                      , o = e.colPos;
                    j(e, 32768 | t);
                    const i = [];
                    let c, l = null, u = null;
                    if (J(e, 32768 | t, 20563)) {
                        switch (e.token) {
                        case 86106:
                            l = st(e, t, n, 4, 1, 1, 0, e.tokenPos, e.linePos, e.colPos);
                            break;
                        case 133:
                        case 86096:
                            l = _t(e, t, n, 1, e.tokenPos, e.linePos, e.colPos);
                            break;
                        case 209007:
                            const {tokenPos: s, linePos: a, colPos: r} = e;
                            l = tt(e, t, 0);
                            const {flags: o} = e;
                            0 == (1 & o) && (86106 === e.token ? l = st(e, t, n, 4, 1, 1, 1, s, a, r) : 67174411 === e.token ? (l = At(e, t, l, 1, 1, 0, o, s, a, r),
                            l = qe(e, t, l, 0, 0, s, a, r),
                            l = xe(e, t, 0, 0, s, a, r, l)) : 143360 & e.token && (n && (n = oe(e, t, e.tokenValue)),
                            l = tt(e, t, 0),
                            l = dt(e, t, n, [l], 1, s, a, r)));
                            break;
                        default:
                            l = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos),
                            Q(e, 32768 | t)
                        }
                        return n && he(e, "default"),
                        ae(e, t, s, a, o, {
                            type: "ExportDefaultDeclaration",
                            declaration: l
                        })
                    }
                    switch (e.token) {
                    case 8457014:
                        {
                            j(e, t);
                            let i = null;
                            return J(e, t, 77934) && (n && he(e, e.tokenValue),
                            i = tt(e, t, 0)),
                            $(e, t, 12404),
                            134283267 !== e.token && r(e, 102, "Export"),
                            u = nt(e, t),
                            Q(e, 32768 | t),
                            ae(e, t, s, a, o, {
                                type: "ExportAllDeclaration",
                                source: u,
                                exported: i
                            })
                        }
                    case 2162700:
                        {
                            j(e, t);
                            const s = []
                              , a = [];
                            for (; 143360 & e.token; ) {
                                const {tokenPos: o, tokenValue: c, linePos: l, colPos: u} = e
                                  , E = tt(e, t, 0);
                                let h;
                                77934 === e.token ? (j(e, t),
                                134217728 == (134217728 & e.token) && r(e, 103),
                                n && (s.push(e.tokenValue),
                                a.push(c)),
                                h = tt(e, t, 0)) : (n && (s.push(e.tokenValue),
                                a.push(e.tokenValue)),
                                h = E),
                                i.push(ae(e, t, o, l, u, {
                                    type: "ExportSpecifier",
                                    local: E,
                                    exported: h
                                })),
                                1074790415 !== e.token && $(e, t, 18)
                            }
                            if ($(e, t, 1074790415),
                            J(e, t, 12404))
                                134283267 !== e.token && r(e, 102, "Export"),
                                u = nt(e, t);
                            else if (n) {
                                let t = 0
                                  , n = s.length;
                                for (; t < n; t++)
                                    he(e, s[t]);
                                for (t = 0,
                                n = a.length; t < n; t++)
                                    pe(e, a[t])
                            }
                            Q(e, 32768 | t);
                            break
                        }
                    case 86096:
                        l = _t(e, t, n, 2, e.tokenPos, e.linePos, e.colPos);
                        break;
                    case 86106:
                        l = st(e, t, n, 4, 1, 2, 0, e.tokenPos, e.linePos, e.colPos);
                        break;
                    case 241739:
                        l = Re(e, t, n, 8, 64, e.tokenPos, e.linePos, e.colPos);
                        break;
                    case 86092:
                        l = Re(e, t, n, 16, 64, e.tokenPos, e.linePos, e.colPos);
                        break;
                    case 86090:
                        l = be(e, t, n, 64, e.tokenPos, e.linePos, e.colPos);
                        break;
                    case 209007:
                        const {tokenPos: E, linePos: h, colPos: p} = e;
                        if (j(e, t),
                        0 == (1 & e.flags) && 86106 === e.token) {
                            l = st(e, t, n, 4, 1, 2, 1, E, h, p),
                            n && (c = l.id ? l.id.name : "",
                            he(e, c));
                            break
                        }
                    default:
                        r(e, 28, w[255 & e.token])
                    }
                    return ae(e, t, s, a, o, {
                        type: "ExportNamedDeclaration",
                        declaration: l,
                        specifiers: i,
                        source: u
                    })
                }(e, t, n);
                break;
            case 86108:
                s = function(e, t, n) {
                    const s = e.tokenPos
                      , a = e.linePos
                      , o = e.colPos;
                    j(e, t);
                    let i = null;
                    const {tokenPos: c, linePos: l, colPos: u} = e;
                    let E = [];
                    if (134283267 === e.token)
                        i = nt(e, t);
                    else {
                        if (143360 & e.token) {
                            if (E = [ae(e, t, c, l, u, {
                                type: "ImportDefaultSpecifier",
                                local: Oe(e, t, n)
                            })],
                            J(e, t, 18))
                                switch (e.token) {
                                case 8457014:
                                    E.push(Le(e, t, n));
                                    break;
                                case 2162700:
                                    Me(e, t, n, E);
                                    break;
                                default:
                                    r(e, 104)
                                }
                        } else
                            switch (e.token) {
                            case 8457014:
                                E = [Le(e, t, n)];
                                break;
                            case 2162700:
                                Me(e, t, n, E);
                                break;
                            case 67174411:
                                return we(e, t, s, a, o);
                            case 67108877:
                                return ye(e, t, s, a, o);
                            default:
                                r(e, 28, w[255 & e.token])
                            }
                        i = function(e, t) {
                            return J(e, t, 12404),
                            134283267 !== e.token && r(e, 102, "Import"),
                            nt(e, t)
                        }(e, t)
                    }
                    return Q(e, 32768 | t),
                    ae(e, t, s, a, o, {
                        type: "ImportDeclaration",
                        specifiers: E,
                        source: i
                    })
                }(e, t, n);
                break;
            default:
                s = fe(e, t, n, 4, {})
            }
            return e.leadingDecorators.length && r(e, 164),
            s
        }
        function fe(e, t, n, s, a) {
            const o = e.tokenPos
              , i = e.linePos
              , c = e.colPos;
            switch (e.token) {
            case 86106:
                return st(e, t, n, s, 1, 0, 0, o, i, c);
            case 133:
            case 86096:
                return _t(e, t, n, 0, o, i, c);
            case 86092:
                return Re(e, t, n, 16, 0, o, i, c);
            case 241739:
                return function(e, t, n, s, a, o, i) {
                    const {token: c, tokenValue: l} = e;
                    let u = tt(e, t, 0);
                    if (2240512 & e.token) {
                        const s = De(e, t, n, 8, 0);
                        return Q(e, 32768 | t),
                        ae(e, t, a, o, i, {
                            type: "VariableDeclaration",
                            kind: "let",
                            declarations: s
                        })
                    }
                    if (e.assignable = 1,
                    1024 & t && r(e, 82),
                    21 === e.token)
                        return ge(e, t, n, s, {}, l, u, c, 0, a, o, i);
                    if (10 === e.token) {
                        let n;
                        64 & t && (n = oe(e, t, l)),
                        e.flags = 128 ^ (128 | e.flags),
                        u = dt(e, t, n, [u], 0, a, o, i)
                    } else
                        u = qe(e, t, u, 0, 0, a, o, i),
                        u = xe(e, t, 0, 0, a, o, i, u);
                    return 18 === e.token && (u = Be(e, t, 0, a, o, i, u)),
                    Ce(e, t, u, a, o, i)
                }(e, t, n, s, o, i, c);
            case 20566:
                r(e, 100, "export");
            case 86108:
                switch (j(e, t),
                e.token) {
                case 67174411:
                    return we(e, t, o, i, c);
                case 67108877:
                    return ye(e, t, o, i, c);
                default:
                    r(e, 100, "import")
                }
            case 209007:
                return ke(e, t, n, s, a, 1, o, i, c);
            default:
                return Ae(e, t, n, s, a, 1, o, i, c)
            }
        }
        function Ae(e, t, n, s, a, o, i, c, l) {
            switch (e.token) {
            case 86090:
                return be(e, t, n, 0, i, c, l);
            case 20574:
                return function(e, t, n, s, a) {
                    0 == (32 & t) && 8192 & t && r(e, 89),
                    j(e, 32768 | t);
                    const o = 1 & e.flags || 1048576 & e.token ? null : Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    return Q(e, 32768 | t),
                    ae(e, t, n, s, a, {
                        type: "ReturnStatement",
                        argument: o
                    })
                }(e, t, i, c, l);
            case 20571:
                return function(e, t, n, s, a, r, o) {
                    j(e, t),
                    $(e, 32768 | t, 67174411),
                    e.assignable = 1;
                    const i = Ue(e, t, 0, 1, e.tokenPos, e.line, e.colPos);
                    $(e, 32768 | t, 16);
                    const c = Ne(e, t, n, s, e.tokenPos, e.linePos, e.colPos);
                    let l = null;
                    return 20565 === e.token && (j(e, 32768 | t),
                    l = Ne(e, t, n, s, e.tokenPos, e.linePos, e.colPos)),
                    ae(e, t, a, r, o, {
                        type: "IfStatement",
                        test: i,
                        consequent: c,
                        alternate: l
                    })
                }(e, t, n, a, i, c, l);
            case 20569:
                return function(e, t, n, s, a, o, i) {
                    j(e, t);
                    const c = ((4194304 & t) > 0 || (2048 & t) > 0 && (8192 & t) > 0) && J(e, t, 209008);
                    $(e, 32768 | t, 67174411),
                    n && (n = ce(n, 1));
                    let l, u = null, E = null, h = 0, p = null, d = 86090 === e.token || 241739 === e.token || 86092 === e.token;
                    const {token: T, tokenPos: m, linePos: f, colPos: A} = e;
                    if (d ? 241739 === T ? (p = tt(e, t, 0),
                    2240512 & e.token ? (8738868 === e.token ? 1024 & t && r(e, 64) : p = ae(e, t, m, f, A, {
                        type: "VariableDeclaration",
                        kind: "let",
                        declarations: De(e, 134217728 | t, n, 8, 32)
                    }),
                    e.assignable = 1) : 1024 & t ? r(e, 64) : (d = !1,
                    e.assignable = 1,
                    p = qe(e, t, p, 0, 0, m, f, A),
                    274549 === e.token && r(e, 111))) : (j(e, t),
                    p = ae(e, t, m, f, A, 86090 === T ? {
                        type: "VariableDeclaration",
                        kind: "var",
                        declarations: De(e, 134217728 | t, n, 4, 32)
                    } : {
                        type: "VariableDeclaration",
                        kind: "const",
                        declarations: De(e, 134217728 | t, n, 16, 32)
                    }),
                    e.assignable = 1) : 1074790417 === T ? c && r(e, 79) : 2097152 == (2097152 & T) ? (p = 2162700 === T ? lt(e, t, void 0, 1, 0, 0, 2, 32, m, f, A) : rt(e, t, void 0, 1, 0, 0, 2, 32, m, f, A),
                    h = e.destructible,
                    256 & t && 64 & h && r(e, 60),
                    e.assignable = 16 & h ? 2 : 1,
                    p = qe(e, 134217728 | t, p, 0, 0, e.tokenPos, e.linePos, e.colPos)) : p = Ye(e, 134217728 | t, 1, 0, 1, m, f, A),
                    262144 == (262144 & e.token))
                        return 274549 === e.token ? (2 & e.assignable && r(e, 77, c ? "await" : "of"),
                        Z(e, p),
                        j(e, 32768 | t),
                        l = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos),
                        $(e, 32768 | t, 16),
                        ae(e, t, a, o, i, {
                            type: "ForOfStatement",
                            left: p,
                            right: l,
                            body: Se(e, t, n, s),
                            await: c
                        })) : (2 & e.assignable && r(e, 77, "in"),
                        Z(e, p),
                        j(e, 32768 | t),
                        c && r(e, 79),
                        l = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos),
                        $(e, 32768 | t, 16),
                        ae(e, t, a, o, i, {
                            type: "ForInStatement",
                            body: Se(e, t, n, s),
                            left: p,
                            right: l
                        }));
                    c && r(e, 79),
                    d || (8 & h && 1077936157 !== e.token && r(e, 77, "loop"),
                    p = xe(e, 134217728 | t, 0, 0, m, f, A, p)),
                    18 === e.token && (p = Be(e, t, 0, e.tokenPos, e.linePos, e.colPos, p)),
                    $(e, 32768 | t, 1074790417),
                    1074790417 !== e.token && (u = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
                    $(e, 32768 | t, 1074790417),
                    16 !== e.token && (E = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
                    $(e, 32768 | t, 16);
                    return ae(e, t, a, o, i, {
                        type: "ForStatement",
                        init: p,
                        test: u,
                        update: E,
                        body: Se(e, t, n, s)
                    })
                }(e, t, n, a, i, c, l);
            case 20564:
                return function(e, t, n, s, a, r, o) {
                    j(e, 32768 | t);
                    const i = Se(e, t, n, s);
                    $(e, t, 20580),
                    $(e, 32768 | t, 67174411);
                    const c = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    return $(e, 32768 | t, 16),
                    J(e, t, 1074790417),
                    ae(e, t, a, r, o, {
                        type: "DoWhileStatement",
                        body: i,
                        test: c
                    })
                }(e, t, n, a, i, c, l);
            case 20580:
                return function(e, t, n, s, a, r, o) {
                    j(e, t),
                    $(e, 32768 | t, 67174411);
                    const i = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    $(e, 32768 | t, 16);
                    return ae(e, t, a, r, o, {
                        type: "WhileStatement",
                        test: i,
                        body: Se(e, t, n, s)
                    })
                }(e, t, n, a, i, c, l);
            case 86112:
                return function(e, t, n, s, a, o, i) {
                    j(e, t),
                    $(e, 32768 | t, 67174411);
                    const c = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    $(e, t, 16),
                    $(e, t, 2162700);
                    const l = [];
                    let u = 0;
                    for (n && (n = ce(n, 8)); 1074790415 !== e.token; ) {
                        const {tokenPos: a, linePos: o, colPos: i} = e;
                        let c = null;
                        const E = [];
                        for (J(e, 32768 | t, 20558) ? c = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos) : ($(e, 32768 | t, 20563),
                        u && r(e, 86),
                        u = 1),
                        $(e, 32768 | t, 21); 20558 !== e.token && 1074790415 !== e.token && 20563 !== e.token; )
                            E.push(fe(e, 4096 | t, n, 2, {
                                $: s
                            }));
                        l.push(ae(e, t, a, o, i, {
                            type: "SwitchCase",
                            test: c,
                            consequent: E
                        }))
                    }
                    return $(e, 32768 | t, 1074790415),
                    ae(e, t, a, o, i, {
                        type: "SwitchStatement",
                        discriminant: c,
                        cases: l
                    })
                }(e, t, n, a, i, c, l);
            case 1074790417:
                return function(e, t, n, s, a) {
                    return j(e, 32768 | t),
                    ae(e, t, n, s, a, {
                        type: "EmptyStatement"
                    })
                }(e, t, i, c, l);
            case 2162700:
                return _e(e, t, n ? ce(n, 2) : n, a, i, c, l);
            case 86114:
                return function(e, t, n, s, a) {
                    j(e, 32768 | t),
                    1 & e.flags && r(e, 87);
                    const o = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    return Q(e, 32768 | t),
                    ae(e, t, n, s, a, {
                        type: "ThrowStatement",
                        argument: o
                    })
                }(e, t, i, c, l);
            case 20557:
                return function(e, t, n, s, a, o) {
                    j(e, 32768 | t);
                    let i = null;
                    if (0 == (1 & e.flags) && 143360 & e.token) {
                        const {tokenValue: s} = e;
                        i = tt(e, 32768 | t, 0),
                        se(e, n, s, 0) || r(e, 134, s)
                    } else
                        0 == (135168 & t) && r(e, 66);
                    return Q(e, 32768 | t),
                    ae(e, t, s, a, o, {
                        type: "BreakStatement",
                        label: i
                    })
                }(e, t, a, i, c, l);
            case 20561:
                return function(e, t, n, s, a, o) {
                    0 == (131072 & t) && r(e, 65),
                    j(e, t);
                    let i = null;
                    if (0 == (1 & e.flags) && 143360 & e.token) {
                        const {tokenValue: s} = e;
                        i = tt(e, 32768 | t, 0),
                        se(e, n, s, 1) || r(e, 134, s)
                    }
                    return Q(e, 32768 | t),
                    ae(e, t, s, a, o, {
                        type: "ContinueStatement",
                        label: i
                    })
                }(e, t, a, i, c, l);
            case 20579:
                return function(e, t, n, s, a, o, i) {
                    j(e, 32768 | t);
                    const c = n ? ce(n, 32) : void 0
                      , l = _e(e, t, c, {
                        $: s
                    }, e.tokenPos, e.linePos, e.colPos)
                      , {tokenPos: u, linePos: E, colPos: h} = e
                      , p = J(e, 32768 | t, 20559) ? function(e, t, n, s, a, o, i) {
                        let c = null
                          , l = n;
                        J(e, t, 67174411) && (n && (n = ce(n, 4)),
                        c = Rt(e, t, n, 2097152 == (2097152 & e.token) ? 256 : 512, 0, e.tokenPos, e.linePos, e.colPos),
                        18 === e.token ? r(e, 83) : 1077936157 === e.token && r(e, 84),
                        $(e, 32768 | t, 16),
                        n && (l = ce(n, 64)));
                        return ae(e, t, a, o, i, {
                            type: "CatchClause",
                            param: c,
                            body: _e(e, t, l, {
                                $: s
                            }, e.tokenPos, e.linePos, e.colPos)
                        })
                    }(e, t, n, s, u, E, h) : null;
                    let d = null;
                    return 20568 === e.token && (j(e, 32768 | t),
                    d = _e(e, t, c ? ce(n, 4) : void 0, {
                        $: s
                    }, e.tokenPos, e.linePos, e.colPos)),
                    p || d || r(e, 85),
                    ae(e, t, a, o, i, {
                        type: "TryStatement",
                        block: l,
                        handler: p,
                        finalizer: d
                    })
                }(e, t, n, a, i, c, l);
            case 20581:
                return function(e, t, n, s, a, o, i) {
                    j(e, t),
                    1024 & t && r(e, 88),
                    $(e, 32768 | t, 67174411);
                    const c = Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    $(e, 32768 | t, 16);
                    return ae(e, t, a, o, i, {
                        type: "WithStatement",
                        object: c,
                        body: Ae(e, t, n, 2, s, 0, e.tokenPos, e.linePos, e.colPos)
                    })
                }(e, t, n, a, i, c, l);
            case 20562:
                return function(e, t, n, s, a) {
                    return j(e, 32768 | t),
                    Q(e, 32768 | t),
                    ae(e, t, n, s, a, {
                        type: "DebuggerStatement"
                    })
                }(e, t, i, c, l);
            case 209007:
                return ke(e, t, n, s, a, 0, i, c, l);
            case 20559:
                r(e, 156);
            case 20568:
                r(e, 157);
            case 86106:
                r(e, 1024 & t ? 73 : 0 == (256 & t) ? 75 : 74);
            case 86096:
                r(e, 76);
            default:
                return function(e, t, n, s, a, o, i, c, l) {
                    const {tokenValue: u, token: E} = e;
                    let h;
                    return 241739 === E ? (h = tt(e, t, 0),
                    1024 & t && r(e, 82),
                    69271571 === e.token && r(e, 81)) : h = Xe(e, t, 2, 0, 1, 0, 0, 1, e.tokenPos, e.linePos, e.colPos),
                    143360 & E && 21 === e.token ? ge(e, t, n, s, a, u, h, E, o, i, c, l) : (h = qe(e, t, h, 0, 0, i, c, l),
                    h = xe(e, t, 0, 0, i, c, l, h),
                    18 === e.token && (h = Be(e, t, 0, i, c, l, h)),
                    Ce(e, t, h, i, c, l))
                }(e, t, n, s, a, o, i, c, l)
            }
        }
        function _e(e, t, n, s, a, r, o) {
            const i = [];
            for ($(e, 32768 | t, 2162700); 1074790415 !== e.token; )
                i.push(fe(e, t, n, 2, {
                    $: s
                }));
            return $(e, 32768 | t, 1074790415),
            ae(e, t, a, r, o, {
                type: "BlockStatement",
                body: i
            })
        }
        function Ce(e, t, n, s, a, r) {
            return Q(e, 32768 | t),
            ae(e, t, s, a, r, {
                type: "ExpressionStatement",
                expression: n
            })
        }
        function ge(e, t, n, s, a, o, i, c, l, u, E, h) {
            return ee(e, t, 0, c, 1),
            function(e, t, n) {
                let s = t;
                for (; s; )
                    s["$" + n] && r(e, 132, n),
                    s = s.$;
                t["$" + n] = 1
            }(e, a, o),
            j(e, 32768 | t),
            ae(e, t, u, E, h, {
                type: "LabeledStatement",
                label: i,
                body: l && 0 == (1024 & t) && 256 & t && 86106 === e.token ? st(e, t, ce(n, 2), s, 0, 0, 0, e.tokenPos, e.linePos, e.colPos) : Ae(e, t, n, s, a, l, e.tokenPos, e.linePos, e.colPos)
            })
        }
        function ke(e, t, n, s, a, o, i, c, l) {
            const {token: u, tokenValue: E} = e;
            let h = tt(e, t, 0);
            if (21 === e.token)
                return ge(e, t, n, s, a, E, h, u, 1, i, c, l);
            const p = 1 & e.flags;
            if (!p) {
                if (86106 === e.token)
                    return o || r(e, 119),
                    st(e, t, n, s, 1, 0, 1, i, c, l);
                if (143360 == (143360 & e.token))
                    return h = ft(e, t, 1, i, c, l),
                    18 === e.token && (h = Be(e, t, 0, i, c, l, h)),
                    Ce(e, t, h, i, c, l)
            }
            return 67174411 === e.token ? h = At(e, t, h, 1, 1, 0, p, i, c, l) : (10 === e.token && (Te(e, t, u, 1),
            h = ht(e, t, e.tokenValue, h, 0, 1, 0, i, c, l)),
            e.assignable = 1),
            h = qe(e, t, h, 0, 0, i, c, l),
            18 === e.token && (h = Be(e, t, 0, i, c, l, h)),
            h = xe(e, t, 0, 0, i, c, l, h),
            e.assignable = 1,
            Ce(e, t, h, i, c, l)
        }
        function Ie(e, t, n, s, a, r, o) {
            return 1074790417 !== s && (e.assignable = 2,
            n = qe(e, t, n, 0, 0, a, r, o),
            1074790417 !== e.token && (n = xe(e, t, 0, 0, a, r, o, n),
            18 === e.token && (n = Be(e, t, 0, a, r, o, n))),
            Q(e, 32768 | t)),
            8 & t && "Literal" === n.type && "string" == typeof n.value ? ae(e, t, a, r, o, {
                type: "ExpressionStatement",
                expression: n,
                directive: n.raw.slice(1, -1)
            }) : ae(e, t, a, r, o, {
                type: "ExpressionStatement",
                expression: n
            })
        }
        function Ne(e, t, n, s, a, r, o) {
            return 1024 & t || 0 == (256 & t) || 86106 !== e.token ? Ae(e, t, n, 0, {
                $: s
            }, 0, e.tokenPos, e.linePos, e.colPos) : st(e, t, ce(n, 2), 0, 0, 0, 0, a, r, o)
        }
        function Se(e, t, n, s) {
            return Ae(e, 134217728 ^ (134217728 | t) | 131072, n, 0, {
                loop: 1,
                $: s
            }, 0, e.tokenPos, e.linePos, e.colPos)
        }
        function Re(e, t, n, s, a, r, o, i) {
            j(e, t);
            const c = De(e, t, n, s, a);
            return Q(e, 32768 | t),
            ae(e, t, r, o, i, {
                type: "VariableDeclaration",
                kind: 8 & s ? "let" : "const",
                declarations: c
            })
        }
        function be(e, t, n, s, a, r, o) {
            j(e, t);
            const i = De(e, t, n, 4, s);
            return Q(e, 32768 | t),
            ae(e, t, a, r, o, {
                type: "VariableDeclaration",
                kind: "var",
                declarations: i
            })
        }
        function De(e, t, n, s, a) {
            let o = 1;
            const i = [Pe(e, t, n, s, a)];
            for (; J(e, t, 18); )
                o++,
                i.push(Pe(e, t, n, s, a));
            return o > 1 && 32 & a && 262144 & e.token && r(e, 58, w[255 & e.token]),
            i
        }
        function Pe(e, t, n, s, a) {
            const {token: o, tokenPos: c, linePos: l, colPos: u} = e;
            let E = null;
            const h = Rt(e, t, n, s, a, c, l, u);
            return 1077936157 === e.token ? (j(e, 32768 | t),
            E = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos),
            (32 & a || 0 == (2097152 & o)) && (274549 === e.token || 8738868 === e.token && (2097152 & o || 0 == (4 & s) || 1024 & t)) && i(c, e.line, e.index - 3, 57, 274549 === e.token ? "of" : "in")) : (16 & s || (2097152 & o) > 0) && 262144 != (262144 & e.token) && r(e, 56, 16 & s ? "const" : "destructuring"),
            ae(e, t, c, l, u, {
                type: "VariableDeclarator",
                id: h,
                init: E
            })
        }
        function Oe(e, t, n) {
            return de(t, e.token) || r(e, 114),
            537079808 == (537079808 & e.token) && r(e, 115),
            n && ue(e, t, n, e.tokenValue, 8, 0),
            tt(e, t, 0)
        }
        function Le(e, t, n) {
            const {tokenPos: s, linePos: a, colPos: r} = e;
            return j(e, t),
            $(e, t, 77934),
            134217728 == (134217728 & e.token) && i(s, e.line, e.index, 28, w[255 & e.token]),
            ae(e, t, s, a, r, {
                type: "ImportNamespaceSpecifier",
                local: Oe(e, t, n)
            })
        }
        function Me(e, t, n, s) {
            for (j(e, t); 143360 & e.token; ) {
                let {token: a, tokenValue: o, tokenPos: i, linePos: c, colPos: l} = e;
                const u = tt(e, t, 0);
                let E;
                J(e, t, 77934) ? (134217728 == (134217728 & e.token) || 18 === e.token ? r(e, 103) : ee(e, t, 16, e.token, 0),
                o = e.tokenValue,
                E = tt(e, t, 0)) : (ee(e, t, 16, a, 0),
                E = u),
                n && ue(e, t, n, o, 8, 0),
                s.push(ae(e, t, i, c, l, {
                    type: "ImportSpecifier",
                    local: E,
                    imported: u
                })),
                1074790415 !== e.token && $(e, t, 18)
            }
            return $(e, t, 1074790415),
            s
        }
        function ye(e, t, n, s, a) {
            let r = We(e, t, ae(e, t, n, s, a, {
                type: "Identifier",
                name: "import"
            }), n, s, a);
            return r = qe(e, t, r, 0, 0, n, s, a),
            r = xe(e, t, 0, 0, n, s, a, r),
            Ce(e, t, r, n, s, a)
        }
        function we(e, t, n, s, a) {
            let r = Qe(e, t, 0, n, s, a);
            return r = qe(e, t, r, 0, 0, n, s, a),
            Ce(e, t, r, n, s, a)
        }
        function ve(e, t, n, s, a, r, o, i) {
            let c = Xe(e, t, 2, 0, n, s, a, 1, r, o, i);
            return c = qe(e, t, c, a, 0, r, o, i),
            xe(e, t, a, 0, r, o, i, c)
        }
        function Be(e, t, n, s, a, r, o) {
            const i = [o];
            for (; J(e, 32768 | t, 18); )
                i.push(ve(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos));
            return ae(e, t, s, a, r, {
                type: "SequenceExpression",
                expressions: i
            })
        }
        function Ue(e, t, n, s, a, r, o) {
            const i = ve(e, t, s, 0, n, a, r, o);
            return 18 === e.token ? Be(e, t, n, a, r, o, i) : i
        }
        function xe(e, t, n, s, a, o, i, c) {
            const {token: l} = e;
            if (4194304 == (4194304 & l)) {
                2 & e.assignable && r(e, 24),
                (!s && 1077936157 === l && "ArrayExpression" === c.type || "ObjectExpression" === c.type) && Z(e, c),
                j(e, 32768 | t);
                const u = ve(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
                return e.assignable = 2,
                ae(e, t, a, o, i, s ? {
                    type: "AssignmentPattern",
                    left: c,
                    right: u
                } : {
                    type: "AssignmentExpression",
                    left: c,
                    operator: w[255 & l],
                    right: u
                })
            }
            return 8454144 == (8454144 & l) && (c = Ge(e, t, n, a, o, i, 4, l, c)),
            J(e, 32768 | t, 22) && (c = Fe(e, t, c, a, o, i)),
            c
        }
        function He(e, t, n, s, a, r, o, i) {
            const {token: c} = e;
            j(e, 32768 | t);
            const l = ve(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
            return i = ae(e, t, a, r, o, s ? {
                type: "AssignmentPattern",
                left: i,
                right: l
            } : {
                type: "AssignmentExpression",
                left: i,
                operator: w[255 & c],
                right: l
            }),
            e.assignable = 2,
            i
        }
        function Fe(e, t, n, s, a, r) {
            const o = ve(e, 134217728 ^ (134217728 | t), 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
            $(e, 32768 | t, 21),
            e.assignable = 1;
            const i = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
            return e.assignable = 2,
            ae(e, t, s, a, r, {
                type: "ConditionalExpression",
                test: n,
                consequent: o,
                alternate: i
            })
        }
        function Ge(e, t, n, s, a, o, i, c, l) {
            const u = 8738868 & -((134217728 & t) > 0);
            let E, h;
            for (e.assignable = 2; 8454144 & e.token && (E = e.token,
            h = 3840 & E,
            (524288 & E && 268435456 & c || 524288 & c && 268435456 & E) && r(e, 159),
            !(h + ((8457273 === E) << 8) - ((u === E) << 12) <= i)); )
                j(e, 32768 | t),
                l = ae(e, t, s, a, o, {
                    type: 524288 & E || 268435456 & E ? "LogicalExpression" : "BinaryExpression",
                    left: l,
                    right: Ge(e, t, n, e.tokenPos, e.linePos, e.colPos, h, E, Ye(e, t, 0, n, 1, e.tokenPos, e.linePos, e.colPos)),
                    operator: w[255 & E]
                });
            return 1077936157 === e.token && r(e, 24),
            l
        }
        function je(e, t, n, s, a, c) {
            const {tokenPos: l, linePos: u, colPos: E} = e;
            $(e, 32768 | t, 2162700);
            const h = []
              , p = t;
            if (1074790415 !== e.token) {
                for (; 134283267 === e.token; ) {
                    const {index: n, tokenPos: s, tokenValue: a, token: r} = e
                      , o = nt(e, t);
                    K(e, n, s, a) && (t |= 1024,
                    128 & e.flags && i(e.index, e.line, e.tokenPos, 63),
                    64 & e.flags && i(e.index, e.line, e.tokenPos, 8)),
                    h.push(Ie(e, t, o, r, s, e.linePos, e.colPos))
                }
                1024 & t && (a && (537079808 == (537079808 & a) && r(e, 115),
                36864 == (36864 & a) && r(e, 38)),
                512 & e.flags && r(e, 115),
                256 & e.flags && r(e, 114)),
                64 & t && n && void 0 !== c && 0 == (1024 & p) && 0 == (8192 & t) && o(c)
            }
            for (e.flags = 832 ^ (832 | e.flags),
            e.destructible = 256 ^ (256 | e.destructible); 1074790415 !== e.token; )
                h.push(fe(e, t, n, 4, {}));
            return $(e, 24 & s ? 32768 | t : t, 1074790415),
            e.flags &= -193,
            1077936157 === e.token && r(e, 24),
            ae(e, t, l, u, E, {
                type: "BlockStatement",
                body: h
            })
        }
        function Ye(e, t, n, s, a, r, o, i) {
            return qe(e, t, Xe(e, t, 2, 0, n, 0, s, a, r, o, i), s, 0, r, o, i)
        }
        function qe(e, t, n, s, a, o, i, c) {
            if (33619968 == (33619968 & e.token) && 0 == (1 & e.flags))
                n = function(e, t, n, s, a, o) {
                    2 & e.assignable && r(e, 52);
                    const {token: i} = e;
                    return j(e, t),
                    e.assignable = 2,
                    ae(e, t, s, a, o, {
                        type: "UpdateExpression",
                        argument: n,
                        operator: w[255 & i],
                        prefix: !1
                    })
                }(e, t, n, o, i, c);
            else if (67108864 == (67108864 & e.token)) {
                switch (t = 134217728 ^ (134217728 | t),
                e.token) {
                case 67108877:
                    j(e, 8192 ^ (1073750016 | t)),
                    e.assignable = 1,
                    n = ae(e, t, o, i, c, {
                        type: "MemberExpression",
                        object: n,
                        computed: !1,
                        property: Ve(e, t)
                    });
                    break;
                case 69271571:
                    {
                        let a = !1;
                        2048 == (2048 & e.flags) && (a = !0,
                        e.flags = 2048 ^ (2048 | e.flags)),
                        j(e, 32768 | t);
                        const {tokenPos: r, linePos: l, colPos: u} = e
                          , E = Ue(e, t, s, 1, r, l, u);
                        $(e, t, 20),
                        e.assignable = 1,
                        n = ae(e, t, o, i, c, {
                            type: "MemberExpression",
                            object: n,
                            computed: !0,
                            property: E
                        }),
                        a && (e.flags |= 2048);
                        break
                    }
                case 67174411:
                    {
                        if (1024 == (1024 & e.flags))
                            return e.flags = 1024 ^ (1024 | e.flags),
                            n;
                        let a = !1;
                        2048 == (2048 & e.flags) && (a = !0,
                        e.flags = 2048 ^ (2048 | e.flags));
                        const r = et(e, t, s);
                        e.assignable = 2,
                        n = ae(e, t, o, i, c, {
                            type: "CallExpression",
                            callee: n,
                            arguments: r
                        }),
                        a && (e.flags |= 2048);
                        break
                    }
                case 67108991:
                    j(e, 8192 ^ (1073750016 | t)),
                    e.flags |= 2048,
                    e.assignable = 2,
                    n = function(e, t, n, s, a, o) {
                        let i, c = !1;
                        if (69271571 !== e.token && 67174411 !== e.token || 2048 == (2048 & e.flags) && (c = !0,
                        e.flags = 2048 ^ (2048 | e.flags)),
                        69271571 === e.token) {
                            j(e, 32768 | t);
                            const {tokenPos: r, linePos: c, colPos: l} = e
                              , u = Ue(e, t, 0, 1, r, c, l);
                            $(e, t, 20),
                            e.assignable = 2,
                            i = ae(e, t, s, a, o, {
                                type: "MemberExpression",
                                object: n,
                                computed: !0,
                                optional: !0,
                                property: u
                            })
                        } else if (67174411 === e.token) {
                            const r = et(e, t, 0);
                            e.assignable = 2,
                            i = ae(e, t, s, a, o, {
                                type: "CallExpression",
                                callee: n,
                                arguments: r,
                                optional: !0
                            })
                        } else {
                            0 == (143360 & e.token) && r(e, 154);
                            const c = tt(e, t, 0);
                            e.assignable = 2,
                            i = ae(e, t, s, a, o, {
                                type: "MemberExpression",
                                object: n,
                                computed: !1,
                                optional: !0,
                                property: c
                            })
                        }
                        return c && (e.flags |= 2048),
                        i
                    }(e, t, n, o, i, c);
                    break;
                default:
                    2048 == (2048 & e.flags) && r(e, 160),
                    e.assignable = 2,
                    n = ae(e, t, o, i, c, {
                        type: "TaggedTemplateExpression",
                        tag: n,
                        quasi: 67174408 === e.token ? Je(e, 65536 | t) : ze(e, t, e.tokenPos, e.linePos, e.colPos)
                    })
                }
                n = qe(e, t, n, 0, 1, o, i, c)
            }
            return 0 === a && 2048 == (2048 & e.flags) && (e.flags = 2048 ^ (2048 | e.flags),
            n = ae(e, t, o, i, c, {
                type: "ChainExpression",
                expression: n
            })),
            n
        }
        function Ve(e, t) {
            return 0 == (143360 & e.token) && 131 !== e.token && r(e, 154),
            1 & t && 131 === e.token ? Nt(e, t, e.tokenPos, e.linePos, e.colPos) : tt(e, t, 0)
        }
        function Xe(e, t, n, s, a, o, c, l, u, E, h) {
            if (143360 == (143360 & e.token)) {
                switch (e.token) {
                case 209008:
                    return function(e, t, n, s, a, o, c) {
                        if (s && (e.destructible |= 128),
                        4194304 & t || 2048 & t && 8192 & t) {
                            n && r(e, 0),
                            8388608 & t && i(e.index, e.line, e.index, 29),
                            j(e, 32768 | t);
                            const s = Ye(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
                            return 8457273 === e.token && r(e, 31),
                            e.assignable = 2,
                            ae(e, t, a, o, c, {
                                type: "AwaitExpression",
                                argument: s
                            })
                        }
                        return 2048 & t && r(e, 95),
                        Et(e, t, a, o, c)
                    }(e, t, s, c, u, E, h);
                case 241773:
                    return function(e, t, n, s, a, o, i) {
                        if (n && (e.destructible |= 256),
                        2097152 & t) {
                            j(e, 32768 | t),
                            8388608 & t && r(e, 30),
                            s || r(e, 24),
                            22 === e.token && r(e, 120);
                            let n = null
                              , c = !1;
                            return 0 == (1 & e.flags) && (c = J(e, 32768 | t, 8457014),
                            (77824 & e.token || c) && (n = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos))),
                            e.assignable = 2,
                            ae(e, t, a, o, i, {
                                type: "YieldExpression",
                                argument: n,
                                delegate: c
                            })
                        }
                        return 1024 & t && r(e, 94, "yield"),
                        Et(e, t, a, o, i)
                    }(e, t, c, a, u, E, h);
                case 209007:
                    return function(e, t, n, s, a, o, i, c, l, u) {
                        const {token: E} = e
                          , h = tt(e, t, o)
                          , {flags: p} = e;
                        if (0 == (1 & p)) {
                            if (86106 === e.token)
                                return at(e, t, 1, n, c, l, u);
                            if (143360 == (143360 & e.token))
                                return s || r(e, 0),
                                ft(e, t, a, c, l, u)
                        }
                        return i || 67174411 !== e.token ? 10 === e.token ? (Te(e, t, E, 1),
                        i && r(e, 48),
                        ht(e, t, e.tokenValue, h, i, a, 0, c, l, u)) : h : At(e, t, h, a, 1, 0, p, c, l, u)
                    }(e, t, c, l, a, o, s, u, E, h)
                }
                const {token: p, tokenValue: d} = e
                  , T = tt(e, 65536 | t, o);
                return 10 === e.token ? (l || r(e, 0),
                Te(e, t, p, 1),
                ht(e, t, d, T, s, a, 0, u, E, h)) : (16384 & t && 537079928 === p && r(e, 126),
                241739 === p && (1024 & t && r(e, 109),
                24 & n && r(e, 97)),
                e.assignable = 1024 & t && 537079808 == (537079808 & p) ? 2 : 1,
                T)
            }
            if (134217728 == (134217728 & e.token))
                return nt(e, t);
            switch (e.token) {
            case 33619995:
            case 33619996:
                return function(e, t, n, s, a, o, i) {
                    n && r(e, 53),
                    s || r(e, 0);
                    const {token: c} = e;
                    j(e, 32768 | t);
                    const l = Ye(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
                    return 2 & e.assignable && r(e, 52),
                    e.assignable = 2,
                    ae(e, t, a, o, i, {
                        type: "UpdateExpression",
                        argument: l,
                        operator: w[255 & c],
                        prefix: !0
                    })
                }(e, t, s, l, u, E, h);
            case 16863278:
            case 16842800:
            case 16842801:
            case 25233970:
            case 25233971:
            case 16863277:
            case 16863279:
                return function(e, t, n, s, a, o, i) {
                    n || r(e, 0);
                    const c = e.token;
                    j(e, 32768 | t);
                    const l = Ye(e, t, 0, i, 1, e.tokenPos, e.linePos, e.colPos);
                    var u;
                    return 8457273 === e.token && r(e, 31),
                    1024 & t && 16863278 === c && ("Identifier" === l.type ? r(e, 117) : (u = l).property && "PrivateIdentifier" === u.property.type && r(e, 123)),
                    e.assignable = 2,
                    ae(e, t, s, a, o, {
                        type: "UnaryExpression",
                        operator: w[255 & c],
                        argument: l,
                        prefix: !0
                    })
                }(e, t, l, u, E, h, c);
            case 86106:
                return at(e, t, 0, c, u, E, h);
            case 2162700:
                return function(e, t, n, s, a, o, i) {
                    const c = lt(e, t, void 0, n, s, 0, 2, 0, a, o, i);
                    return 256 & t && 64 & e.destructible && r(e, 60),
                    8 & e.destructible && r(e, 59),
                    c
                }(e, t, a ? 0 : 1, c, u, E, h);
            case 69271571:
                return function(e, t, n, s, a, o, i) {
                    const c = rt(e, t, void 0, n, s, 0, 2, 0, a, o, i);
                    return 256 & t && 64 & e.destructible && r(e, 60),
                    8 & e.destructible && r(e, 59),
                    c
                }(e, t, a ? 0 : 1, c, u, E, h);
            case 67174411:
                return function(e, t, n, s, a, o, i, c) {
                    e.flags = 128 ^ (128 | e.flags);
                    const {tokenPos: l, linePos: u, colPos: E} = e;
                    j(e, 1073774592 | t);
                    const h = 64 & t ? ce({
                        parent: void 0,
                        type: 2
                    }, 1024) : void 0;
                    if (J(e, t = 134217728 ^ (134217728 | t), 16))
                        return pt(e, t, h, [], n, 0, o, i, c);
                    let p, d = 0;
                    e.destructible &= -385;
                    let T = []
                      , m = 0
                      , f = 0;
                    const {tokenPos: A, linePos: _, colPos: C} = e;
                    for (e.assignable = 1; 16 !== e.token; ) {
                        const {token: n, tokenPos: s, linePos: a, colPos: o} = e;
                        if (143360 & n)
                            h && ue(e, t, h, e.tokenValue, 1, 0),
                            p = Xe(e, t, 1, 0, 1, 0, 1, 1, s, a, o),
                            16 === e.token || 18 === e.token ? 2 & e.assignable ? (d |= 16,
                            f = 1) : 537079808 != (537079808 & n) && 36864 != (36864 & n) || (f = 1) : (1077936157 === e.token ? f = 1 : d |= 16,
                            p = qe(e, t, p, 1, 0, s, a, o),
                            16 !== e.token && 18 !== e.token && (p = xe(e, t, 1, 0, s, a, o, p)));
                        else {
                            if (2097152 != (2097152 & n)) {
                                if (14 === n) {
                                    p = it(e, t, h, 16, 1, 0, 0, 1, 0, s, a, o),
                                    16 & e.destructible && r(e, 71),
                                    f = 1,
                                    !m || 16 !== e.token && 18 !== e.token || T.push(p),
                                    d |= 8;
                                    break
                                }
                                if (d |= 16,
                                p = ve(e, t, 1, 0, 1, s, a, o),
                                !m || 16 !== e.token && 18 !== e.token || T.push(p),
                                18 === e.token && (m || (m = 1,
                                T = [p])),
                                m) {
                                    for (; J(e, 32768 | t, 18); )
                                        T.push(ve(e, t, 1, 0, 1, e.tokenPos, e.linePos, e.colPos));
                                    e.assignable = 2,
                                    p = ae(e, t, A, _, C, {
                                        type: "SequenceExpression",
                                        expressions: T
                                    })
                                }
                                return $(e, t, 16),
                                e.destructible = d,
                                p
                            }
                            p = 2162700 === n ? lt(e, 1073741824 | t, h, 0, 1, 0, 1, 0, s, a, o) : rt(e, 1073741824 | t, h, 0, 1, 0, 1, 0, s, a, o),
                            d |= e.destructible,
                            f = 1,
                            e.assignable = 2,
                            16 !== e.token && 18 !== e.token && (8 & d && r(e, 118),
                            p = qe(e, t, p, 0, 0, s, a, o),
                            d |= 16,
                            16 !== e.token && 18 !== e.token && (p = xe(e, t, 0, 0, s, a, o, p)))
                        }
                        if (!m || 16 !== e.token && 18 !== e.token || T.push(p),
                        !J(e, 32768 | t, 18))
                            break;
                        if (m || (m = 1,
                        T = [p]),
                        16 === e.token) {
                            d |= 8;
                            break
                        }
                    }
                    return m && (e.assignable = 2,
                    p = ae(e, t, A, _, C, {
                        type: "SequenceExpression",
                        expressions: T
                    })),
                    $(e, t, 16),
                    16 & d && 8 & d && r(e, 145),
                    d |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0,
                    10 === e.token ? (48 & d && r(e, 46),
                    4196352 & t && 128 & d && r(e, 29),
                    2098176 & t && 256 & d && r(e, 30),
                    f && (e.flags |= 128),
                    pt(e, t, h, m ? T : [p], n, 0, o, i, c)) : (8 & d && r(e, 139),
                    e.destructible = 256 ^ (256 | e.destructible) | d,
                    128 & t ? ae(e, t, l, u, E, {
                        type: "ParenthesizedExpression",
                        expression: p
                    }) : p)
                }(e, t, a, 0, 0, u, E, h);
            case 86021:
            case 86022:
            case 86023:
                return function(e, t, n, s, a) {
                    const r = w[255 & e.token]
                      , o = 86023 === e.token ? null : "true" === r;
                    return j(e, t),
                    e.assignable = 2,
                    ae(e, t, n, s, a, 512 & t ? {
                        type: "Literal",
                        value: o,
                        raw: r
                    } : {
                        type: "Literal",
                        value: o
                    })
                }(e, t, u, E, h);
            case 86113:
                return function(e, t) {
                    const {tokenPos: n, linePos: s, colPos: a} = e;
                    return j(e, t),
                    e.assignable = 2,
                    ae(e, t, n, s, a, {
                        type: "ThisExpression"
                    })
                }(e, t);
            case 65540:
                return function(e, t, n, s, a) {
                    const {tokenRaw: r, tokenRegExp: o, tokenValue: i} = e;
                    return j(e, t),
                    e.assignable = 2,
                    ae(e, t, n, s, a, 512 & t ? {
                        type: "Literal",
                        value: i,
                        regex: o,
                        raw: r
                    } : {
                        type: "Literal",
                        value: i,
                        regex: o
                    })
                }(e, t, u, E, h);
            case 133:
            case 86096:
                return function(e, t, n, s, a, o) {
                    let i = null
                      , c = null;
                    const l = Ct(e, t = 16777216 ^ (16778240 | t));
                    l.length && (s = e.tokenPos,
                    a = e.linePos,
                    o = e.colPos),
                    j(e, t),
                    4096 & e.token && 20567 !== e.token && (ne(e, t, e.token) && r(e, 114),
                    537079808 == (537079808 & e.token) && r(e, 115),
                    i = tt(e, t, 0));
                    let u = t;
                    J(e, 32768 | t, 20567) ? (c = Ye(e, t, 0, n, 0, e.tokenPos, e.linePos, e.colPos),
                    u |= 524288) : u = 524288 ^ (524288 | u);
                    const E = kt(e, u, t, void 0, 2, 0, n);
                    return e.assignable = 2,
                    ae(e, t, s, a, o, 1 & t ? {
                        type: "ClassExpression",
                        id: i,
                        superClass: c,
                        decorators: l,
                        body: E
                    } : {
                        type: "ClassExpression",
                        id: i,
                        superClass: c,
                        body: E
                    })
                }(e, t, c, u, E, h);
            case 86111:
                return function(e, t, n, s, a) {
                    switch (j(e, t),
                    e.token) {
                    case 67108991:
                        r(e, 161);
                    case 67174411:
                        0 == (524288 & t) && r(e, 26),
                        16384 & t && r(e, 27),
                        e.assignable = 2;
                        break;
                    case 69271571:
                    case 67108877:
                        0 == (262144 & t) && r(e, 27),
                        16384 & t && r(e, 27),
                        e.assignable = 1;
                        break;
                    default:
                        r(e, 28, "super")
                    }
                    return ae(e, t, n, s, a, {
                        type: "Super"
                    })
                }(e, t, u, E, h);
            case 67174409:
                return ze(e, t, u, E, h);
            case 67174408:
                return Je(e, t);
            case 86109:
                return function(e, t, n, s, a, o) {
                    const i = tt(e, 32768 | t, 0)
                      , {tokenPos: c, linePos: l, colPos: u} = e;
                    if (J(e, t, 67108877)) {
                        if (67108864 & t && 143494 === e.token)
                            return e.assignable = 2,
                            function(e, t, n, s, a, r) {
                                return ae(e, t, s, a, r, {
                                    type: "MetaProperty",
                                    meta: n,
                                    property: tt(e, t, 0)
                                })
                            }(e, t, i, s, a, o);
                        r(e, 91)
                    }
                    e.assignable = 2,
                    16842752 == (16842752 & e.token) && r(e, 62, w[255 & e.token]);
                    const E = Xe(e, t, 2, 1, 0, 0, n, 1, c, l, u);
                    t = 134217728 ^ (134217728 | t),
                    67108991 === e.token && r(e, 162);
                    const h = mt(e, t, E, n, c, l, u);
                    return e.assignable = 2,
                    ae(e, t, s, a, o, {
                        type: "NewExpression",
                        callee: h,
                        arguments: 67174411 === e.token ? et(e, t, n) : []
                    })
                }(e, t, c, u, E, h);
            case 134283389:
                return Ke(e, t, u, E, h);
            case 131:
                return Nt(e, t, u, E, h);
            case 86108:
                return function(e, t, n, s, a, o, i) {
                    let c = tt(e, t, 0);
                    return 67108877 === e.token ? We(e, t, c, a, o, i) : (n && r(e, 137),
                    c = Qe(e, t, s, a, o, i),
                    e.assignable = 2,
                    qe(e, t, c, s, 0, a, o, i))
                }(e, t, s, c, u, E, h);
            case 8456258:
                if (16 & t)
                    return Dt(e, t, 1, u, E, h);
            default:
                if (de(t, e.token))
                    return Et(e, t, u, E, h);
                r(e, 28, w[255 & e.token])
            }
        }
        function We(e, t, n, s, a, o) {
            return 0 == (2048 & t) && r(e, 163),
            j(e, t),
            143495 !== e.token && "meta" !== e.tokenValue && r(e, 28, w[255 & e.token]),
            e.assignable = 2,
            ae(e, t, s, a, o, {
                type: "MetaProperty",
                meta: n,
                property: tt(e, t, 0)
            })
        }
        function Qe(e, t, n, s, a, o) {
            $(e, 32768 | t, 67174411),
            14 === e.token && r(e, 138);
            const i = ve(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos);
            return $(e, t, 16),
            ae(e, t, s, a, o, {
                type: "ImportExpression",
                source: i
            })
        }
        function Ke(e, t, n, s, a) {
            const {tokenRaw: r, tokenValue: o} = e;
            return j(e, t),
            e.assignable = 2,
            ae(e, t, n, s, a, 512 & t ? {
                type: "Literal",
                value: o,
                bigint: r.slice(0, -1),
                raw: r
            } : {
                type: "Literal",
                value: o,
                bigint: r.slice(0, -1)
            })
        }
        function ze(e, t, n, s, a) {
            e.assignable = 2;
            const {tokenValue: r, tokenRaw: o, tokenPos: i, linePos: c, colPos: l} = e;
            return $(e, t, 67174409),
            ae(e, t, n, s, a, {
                type: "TemplateLiteral",
                expressions: [],
                quasis: [$e(e, t, r, o, i, c, l, !0)]
            })
        }
        function Je(e, t) {
            t = 134217728 ^ (134217728 | t);
            const {tokenValue: n, tokenRaw: s, tokenPos: a, linePos: o, colPos: i} = e;
            $(e, 32768 | t, 67174408);
            const c = [$e(e, t, n, s, a, o, i, !1)]
              , l = [Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)];
            for (1074790415 !== e.token && r(e, 80); 67174409 !== (e.token = L(e, t)); ) {
                const {tokenValue: n, tokenRaw: s, tokenPos: a, linePos: o, colPos: i} = e;
                $(e, 32768 | t, 67174408),
                c.push($e(e, t, n, s, a, o, i, !1)),
                l.push(Ue(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
                1074790415 !== e.token && r(e, 80)
            }
            {
                const {tokenValue: n, tokenRaw: s, tokenPos: a, linePos: r, colPos: o} = e;
                $(e, t, 67174409),
                c.push($e(e, t, n, s, a, r, o, !0))
            }
            return ae(e, t, a, o, i, {
                type: "TemplateLiteral",
                expressions: l,
                quasis: c
            })
        }
        function $e(e, t, n, s, a, r, o, i) {
            const c = ae(e, t, a, r, o, {
                type: "TemplateElement",
                value: {
                    cooked: n,
                    raw: s
                },
                tail: i
            })
              , l = i ? 1 : 2;
            return 2 & t && (c.start += 1,
            c.range[0] += 1,
            c.end -= l,
            c.range[1] -= l),
            4 & t && (c.loc.start.column += 1,
            c.loc.end.column -= l),
            c
        }
        function Ze(e, t, n, s, a) {
            $(e, 32768 | (t = 134217728 ^ (134217728 | t)), 14);
            const r = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
            return e.assignable = 1,
            ae(e, t, n, s, a, {
                type: "SpreadElement",
                argument: r
            })
        }
        function et(e, t, n) {
            j(e, 32768 | t);
            const s = [];
            if (16 === e.token)
                return j(e, t),
                s;
            for (; 16 !== e.token && (14 === e.token ? s.push(Ze(e, t, e.tokenPos, e.linePos, e.colPos)) : s.push(ve(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos)),
            18 === e.token) && (j(e, 32768 | t),
            16 !== e.token); )
                ;
            return $(e, t, 16),
            s
        }
        function tt(e, t, n) {
            const {tokenValue: s, tokenPos: a, linePos: r, colPos: o} = e;
            return j(e, t),
            ae(e, t, a, r, o, 268435456 & t ? {
                type: "Identifier",
                name: s,
                pattern: 1 === n
            } : {
                type: "Identifier",
                name: s
            })
        }
        function nt(e, t) {
            const {tokenValue: n, tokenRaw: s, tokenPos: a, linePos: r, colPos: o} = e;
            return 134283389 === e.token ? Ke(e, t, a, r, o) : (j(e, t),
            e.assignable = 2,
            ae(e, t, a, r, o, 512 & t ? {
                type: "Literal",
                value: n,
                raw: s
            } : {
                type: "Literal",
                value: n
            }))
        }
        function st(e, t, n, s, a, o, i, c, l, u) {
            j(e, 32768 | t);
            const E = a ? z(e, t, 8457014) : 0;
            let h, p = null, d = n ? {
                parent: void 0,
                type: 2
            } : void 0;
            if (67174411 === e.token)
                0 == (1 & o) && r(e, 37, "Function");
            else {
                const a = 4 & s && (0 == (8192 & t) || 0 == (2048 & t)) ? 4 : 64;
                te(e, t | (3072 & t) << 11, e.token),
                n && (4 & a ? Ee(e, t, n, e.tokenValue, a) : ue(e, t, n, e.tokenValue, a, s),
                d = ce(d, 256),
                o && 2 & o && he(e, e.tokenValue)),
                h = e.token,
                143360 & e.token ? p = tt(e, t, 0) : r(e, 28, w[255 & e.token])
            }
            return t = 32243712 ^ (32243712 | t) | 67108864 | 2 * i + E << 21 | (E ? 0 : 1073741824),
            n && (d = ce(d, 512)),
            ae(e, t, c, l, u, {
                type: "FunctionDeclaration",
                id: p,
                params: Tt(e, 8388608 | t, d, 0, 1),
                body: je(e, 143360 ^ (143360 | t), n ? ce(d, 128) : d, 8, h, n ? d.scopeError : void 0),
                async: 1 === i,
                generator: 1 === E
            })
        }
        function at(e, t, n, s, a, r, o) {
            j(e, 32768 | t);
            const i = z(e, t, 8457014)
              , c = 2 * n + i << 21;
            let l, u = null, E = 64 & t ? {
                parent: void 0,
                type: 2
            } : void 0;
            (176128 & e.token) > 0 && (te(e, 32243712 ^ (32243712 | t) | c, e.token),
            E && (E = ce(E, 256)),
            l = e.token,
            u = tt(e, t, 0)),
            t = 32243712 ^ (32243712 | t) | 67108864 | c | (i ? 0 : 1073741824),
            E && (E = ce(E, 512));
            const h = Tt(e, 8388608 | t, E, s, 1)
              , p = je(e, -134377473 & t, E ? ce(E, 128) : E, 0, l, void 0);
            return e.assignable = 2,
            ae(e, t, a, r, o, {
                type: "FunctionExpression",
                id: u,
                params: h,
                body: p,
                async: 1 === n,
                generator: 1 === i
            })
        }
        function rt(e, t, n, s, a, o, i, c, l, u, E) {
            j(e, 32768 | t);
            const h = [];
            let p = 0;
            for (t = 134217728 ^ (134217728 | t); 20 !== e.token; )
                if (J(e, 32768 | t, 18))
                    h.push(null);
                else {
                    let s;
                    const {token: l, tokenPos: u, linePos: E, colPos: d, tokenValue: T} = e;
                    if (143360 & l)
                        if (s = Xe(e, t, i, 0, 1, 0, a, 1, u, E, d),
                        1077936157 === e.token) {
                            2 & e.assignable && r(e, 24),
                            j(e, 32768 | t),
                            n && le(e, t, n, T, i, c);
                            const l = ve(e, t, 1, 1, a, e.tokenPos, e.linePos, e.colPos);
                            s = ae(e, t, u, E, d, o ? {
                                type: "AssignmentPattern",
                                left: s,
                                right: l
                            } : {
                                type: "AssignmentExpression",
                                operator: "=",
                                left: s,
                                right: l
                            }),
                            p |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0
                        } else
                            18 === e.token || 20 === e.token ? (2 & e.assignable ? p |= 16 : n && le(e, t, n, T, i, c),
                            p |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0) : (p |= 1 & i ? 32 : 0 == (2 & i) ? 16 : 0,
                            s = qe(e, t, s, a, 0, u, E, d),
                            18 !== e.token && 20 !== e.token ? (1077936157 !== e.token && (p |= 16),
                            s = xe(e, t, a, o, u, E, d, s)) : 1077936157 !== e.token && (p |= 2 & e.assignable ? 16 : 32));
                    else
                        2097152 & l ? (s = 2162700 === e.token ? lt(e, t, n, 0, a, o, i, c, u, E, d) : rt(e, t, n, 0, a, o, i, c, u, E, d),
                        p |= e.destructible,
                        e.assignable = 16 & e.destructible ? 2 : 1,
                        18 === e.token || 20 === e.token ? 2 & e.assignable && (p |= 16) : 8 & e.destructible ? r(e, 68) : (s = qe(e, t, s, a, 0, u, E, d),
                        p = 2 & e.assignable ? 16 : 0,
                        18 !== e.token && 20 !== e.token ? s = xe(e, t, a, o, u, E, d, s) : 1077936157 !== e.token && (p |= 2 & e.assignable ? 16 : 32))) : 14 === l ? (s = it(e, t, n, 20, i, c, 0, a, o, u, E, d),
                        p |= e.destructible,
                        18 !== e.token && 20 !== e.token && r(e, 28, w[255 & e.token])) : (s = Ye(e, t, 1, 0, 1, u, E, d),
                        18 !== e.token && 20 !== e.token ? (s = xe(e, t, a, o, u, E, d, s),
                        0 == (3 & i) && 67174411 === l && (p |= 16)) : 2 & e.assignable ? p |= 16 : 67174411 === l && (p |= 1 & e.assignable && 3 & i ? 32 : 16));
                    if (h.push(s),
                    !J(e, 32768 | t, 18))
                        break;
                    if (20 === e.token)
                        break
                }
            $(e, t, 20);
            const d = ae(e, t, l, u, E, {
                type: o ? "ArrayPattern" : "ArrayExpression",
                elements: h
            });
            return !s && 4194304 & e.token ? ot(e, t, p, a, o, l, u, E, d) : (e.destructible = p,
            d)
        }
        function ot(e, t, n, s, a, o, i, c, l) {
            1077936157 !== e.token && r(e, 24),
            j(e, 32768 | t),
            16 & n && r(e, 24),
            a || Z(e, l);
            const {tokenPos: u, linePos: E, colPos: h} = e
              , p = ve(e, t, 1, 1, s, u, E, h);
            return e.destructible = 72 ^ (72 | n) | (128 & e.destructible ? 128 : 0) | (256 & e.destructible ? 256 : 0),
            ae(e, t, o, i, c, a ? {
                type: "AssignmentPattern",
                left: l,
                right: p
            } : {
                type: "AssignmentExpression",
                left: l,
                operator: "=",
                right: p
            })
        }
        function it(e, t, n, s, a, o, i, c, l, u, E, h) {
            j(e, 32768 | t);
            let p = null
              , d = 0
              , {token: T, tokenValue: m, tokenPos: f, linePos: A, colPos: _} = e;
            if (143360 & T)
                e.assignable = 1,
                p = Xe(e, t, a, 0, 1, 0, c, 1, f, A, _),
                T = e.token,
                p = qe(e, t, p, c, 0, f, A, _),
                18 !== e.token && e.token !== s && (2 & e.assignable && 1077936157 === e.token && r(e, 68),
                d |= 16,
                p = xe(e, t, c, l, f, A, _, p)),
                2 & e.assignable ? d |= 16 : T === s || 18 === T ? n && le(e, t, n, m, a, o) : d |= 32,
                d |= 128 & e.destructible ? 128 : 0;
            else if (T === s)
                r(e, 39);
            else {
                if (!(2097152 & T)) {
                    d |= 32,
                    p = Ye(e, t, 1, c, 1, e.tokenPos, e.linePos, e.colPos);
                    const {token: n, tokenPos: a, linePos: o, colPos: i} = e;
                    return 1077936157 === n && n !== s && 18 !== n ? (2 & e.assignable && r(e, 24),
                    p = xe(e, t, c, l, a, o, i, p),
                    d |= 16) : (18 === n ? d |= 16 : n !== s && (p = xe(e, t, c, l, a, o, i, p)),
                    d |= 1 & e.assignable ? 32 : 16),
                    e.destructible = d,
                    e.token !== s && 18 !== e.token && r(e, 155),
                    ae(e, t, u, E, h, {
                        type: l ? "RestElement" : "SpreadElement",
                        argument: p
                    })
                }
                p = 2162700 === e.token ? lt(e, t, n, 1, c, l, a, o, f, A, _) : rt(e, t, n, 1, c, l, a, o, f, A, _),
                T = e.token,
                1077936157 !== T && T !== s && 18 !== T ? (8 & e.destructible && r(e, 68),
                p = qe(e, t, p, c, 0, f, A, _),
                d |= 2 & e.assignable ? 16 : 0,
                4194304 == (4194304 & e.token) ? (1077936157 !== e.token && (d |= 16),
                p = xe(e, t, c, l, f, A, _, p)) : (8454144 == (8454144 & e.token) && (p = Ge(e, t, 1, f, A, _, 4, T, p)),
                J(e, 32768 | t, 22) && (p = Fe(e, t, p, f, A, _)),
                d |= 2 & e.assignable ? 16 : 32)) : d |= 1074790415 === s && 1077936157 !== T ? 16 : e.destructible
            }
            if (e.token !== s)
                if (1 & a && (d |= i ? 16 : 32),
                J(e, 32768 | t, 1077936157)) {
                    16 & d && r(e, 24),
                    Z(e, p);
                    const n = ve(e, t, 1, 1, c, e.tokenPos, e.linePos, e.colPos);
                    p = ae(e, t, f, A, _, l ? {
                        type: "AssignmentPattern",
                        left: p,
                        right: n
                    } : {
                        type: "AssignmentExpression",
                        left: p,
                        operator: "=",
                        right: n
                    }),
                    d = 16
                } else
                    d |= 16;
            return e.destructible = d,
            ae(e, t, u, E, h, {
                type: l ? "RestElement" : "SpreadElement",
                argument: p
            })
        }
        function ct(e, t, n, s, a, i, c) {
            const l = 0 == (64 & n) ? 31981568 : 14680064;
            let u = 64 & (t = (t | l) ^ l | (88 & n) << 18 | 100925440) ? ce({
                parent: void 0,
                type: 2
            }, 512) : void 0;
            const E = function(e, t, n, s, a, i) {
                $(e, t, 67174411);
                const c = [];
                if (e.flags = 128 ^ (128 | e.flags),
                16 === e.token)
                    return 512 & s && r(e, 35, "Setter", "one", ""),
                    j(e, t),
                    c;
                256 & s && r(e, 35, "Getter", "no", "s"),
                512 & s && 14 === e.token && r(e, 36),
                t = 134217728 ^ (134217728 | t);
                let l = 0
                  , u = 0;
                for (; 18 !== e.token; ) {
                    let a = null;
                    const {tokenPos: o, linePos: E, colPos: h} = e;
                    if (143360 & e.token ? (0 == (1024 & t) && (36864 == (36864 & e.token) && (e.flags |= 256),
                    537079808 == (537079808 & e.token) && (e.flags |= 512)),
                    a = bt(e, t, n, 1 | s, 0, o, E, h)) : (2162700 === e.token ? a = lt(e, t, n, 1, i, 1, 1, 0, o, E, h) : 69271571 === e.token ? a = rt(e, t, n, 1, i, 1, 1, 0, o, E, h) : 14 === e.token && (a = it(e, t, n, 16, 1, 0, 0, i, 1, o, E, h)),
                    u = 1,
                    48 & e.destructible && r(e, 47)),
                    1077936157 === e.token && (j(e, 32768 | t),
                    u = 1,
                    a = ae(e, t, o, E, h, {
                        type: "AssignmentPattern",
                        left: a,
                        right: ve(e, t, 1, 1, 0, e.tokenPos, e.linePos, e.colPos)
                    })),
                    l++,
                    c.push(a),
                    !J(e, t, 18))
                        break;
                    if (16 === e.token)
                        break
                }
                return 512 & s && 1 !== l && r(e, 35, "Setter", "one", ""),
                n && void 0 !== n.scopeError && o(n.scopeError),
                u && (e.flags |= 128),
                $(e, t, 16),
                c
            }(e, 8388608 | t, u, n, 0, s);
            return u && (u = ce(u, 128)),
            ae(e, t, a, i, c, {
                type: "FunctionExpression",
                params: E,
                body: je(e, -134230017 & t, u, 0, void 0, void 0),
                async: (16 & n) > 0,
                generator: (8 & n) > 0,
                id: null
            })
        }
        function lt(e, t, n, s, a, o, c, l, u, E, h) {
            j(e, t);
            const p = [];
            let d = 0
              , T = 0;
            for (t = 134217728 ^ (134217728 | t); 1074790415 !== e.token; ) {
                const {token: s, tokenValue: u, linePos: E, colPos: h, tokenPos: m} = e;
                if (14 === s)
                    p.push(it(e, t, n, 1074790415, c, l, 0, a, o, m, E, h));
                else {
                    let f, A = 0, _ = null;
                    const C = e.token;
                    if (143360 & e.token || 121 === e.token)
                        if (_ = tt(e, t, 0),
                        18 === e.token || 1074790415 === e.token || 1077936157 === e.token)
                            if (A |= 4,
                            1024 & t && 537079808 == (537079808 & s) ? d |= 16 : ee(e, t, c, s, 0),
                            n && le(e, t, n, u, c, l),
                            J(e, 32768 | t, 1077936157)) {
                                d |= 8;
                                const n = ve(e, t, 1, 1, a, e.tokenPos, e.linePos, e.colPos);
                                d |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0,
                                f = ae(e, t, m, E, h, {
                                    type: "AssignmentPattern",
                                    left: -2147483648 & t ? Object.assign({}, _) : _,
                                    right: n
                                })
                            } else
                                d |= (209008 === s ? 128 : 0) | (121 === s ? 16 : 0),
                                f = -2147483648 & t ? Object.assign({}, _) : _;
                        else if (J(e, 32768 | t, 21)) {
                            const {tokenPos: i, linePos: E, colPos: h} = e;
                            if ("__proto__" === u && T++,
                            143360 & e.token) {
                                const s = e.token
                                  , r = e.tokenValue;
                                d |= 121 === C ? 16 : 0,
                                f = Xe(e, t, c, 0, 1, 0, a, 1, i, E, h);
                                const {token: u} = e;
                                f = qe(e, t, f, a, 0, i, E, h),
                                18 === e.token || 1074790415 === e.token ? 1077936157 === u || 1074790415 === u || 18 === u ? (d |= 128 & e.destructible ? 128 : 0,
                                2 & e.assignable ? d |= 16 : n && 143360 == (143360 & s) && le(e, t, n, r, c, l)) : d |= 1 & e.assignable ? 32 : 16 : 4194304 == (4194304 & e.token) ? (2 & e.assignable ? d |= 16 : 1077936157 !== u ? d |= 32 : n && le(e, t, n, r, c, l),
                                f = xe(e, t, a, o, i, E, h, f)) : (d |= 16,
                                8454144 == (8454144 & e.token) && (f = Ge(e, t, 1, i, E, h, 4, u, f)),
                                J(e, 32768 | t, 22) && (f = Fe(e, t, f, i, E, h)))
                            } else
                                2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? rt(e, t, n, 0, a, o, c, l, i, E, h) : lt(e, t, n, 0, a, o, c, l, i, E, h),
                                d = e.destructible,
                                e.assignable = 16 & d ? 2 : 1,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 & e.destructible ? r(e, 68) : (f = qe(e, t, f, a, 0, i, E, h),
                                d = 2 & e.assignable ? 16 : 0,
                                4194304 == (4194304 & e.token) ? f = He(e, t, a, o, i, E, h, f) : (8454144 == (8454144 & e.token) && (f = Ge(e, t, 1, i, E, h, 4, s, f)),
                                J(e, 32768 | t, 22) && (f = Fe(e, t, f, i, E, h)),
                                d |= 2 & e.assignable ? 16 : 32))) : (f = Ye(e, t, 1, a, 1, i, E, h),
                                d |= 1 & e.assignable ? 32 : 16,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = qe(e, t, f, a, 0, i, E, h),
                                d = 2 & e.assignable ? 16 : 0,
                                18 !== e.token && 1074790415 !== s && (1077936157 !== e.token && (d |= 16),
                                f = xe(e, t, a, o, i, E, h, f))))
                        } else
                            69271571 === e.token ? (d |= 16,
                            209007 === s && (A |= 16),
                            A |= 2 | (12402 === s ? 256 : 12403 === s ? 512 : 1),
                            _ = ut(e, t, a),
                            d |= e.assignable,
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : 143360 & e.token ? (d |= 16,
                            121 === s && r(e, 92),
                            209007 === s && (1 & e.flags && r(e, 128),
                            A |= 16),
                            _ = tt(e, t, 0),
                            A |= 12402 === s ? 256 : 12403 === s ? 512 : 1,
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : 67174411 === e.token ? (d |= 16,
                            A |= 1,
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : 8457014 === e.token ? (d |= 16,
                            12402 === s || 12403 === s ? r(e, 40) : 143483 === s && r(e, 92),
                            j(e, t),
                            A |= 9 | (209007 === s ? 16 : 0),
                            143360 & e.token ? _ = tt(e, t, 0) : 134217728 == (134217728 & e.token) ? _ = nt(e, t) : 69271571 === e.token ? (A |= 2,
                            _ = ut(e, t, a),
                            d |= e.assignable) : r(e, 28, w[255 & e.token]),
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : 134217728 == (134217728 & e.token) ? (209007 === s && (A |= 16),
                            A |= 12402 === s ? 256 : 12403 === s ? 512 : 1,
                            d |= 16,
                            _ = nt(e, t),
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : r(e, 129);
                    else if (134217728 == (134217728 & e.token))
                        if (_ = nt(e, t),
                        21 === e.token) {
                            $(e, 32768 | t, 21);
                            const {tokenPos: r, linePos: i, colPos: E} = e;
                            if ("__proto__" === u && T++,
                            143360 & e.token) {
                                f = Xe(e, t, c, 0, 1, 0, a, 1, r, i, E);
                                const {token: s, tokenValue: u} = e;
                                f = qe(e, t, f, a, 0, r, i, E),
                                18 === e.token || 1074790415 === e.token ? 1077936157 === s || 1074790415 === s || 18 === s ? 2 & e.assignable ? d |= 16 : n && le(e, t, n, u, c, l) : d |= 1 & e.assignable ? 32 : 16 : 1077936157 === e.token ? (2 & e.assignable && (d |= 16),
                                f = xe(e, t, a, o, r, i, E, f)) : (d |= 16,
                                f = xe(e, t, a, o, r, i, E, f))
                            } else
                                2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? rt(e, t, n, 0, a, o, c, l, r, i, E) : lt(e, t, n, 0, a, o, c, l, r, i, E),
                                d = e.destructible,
                                e.assignable = 16 & d ? 2 : 1,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 != (8 & e.destructible) && (f = qe(e, t, f, a, 0, r, i, E),
                                d = 2 & e.assignable ? 16 : 0,
                                4194304 == (4194304 & e.token) ? f = He(e, t, a, o, r, i, E, f) : (8454144 == (8454144 & e.token) && (f = Ge(e, t, 1, r, i, E, 4, s, f)),
                                J(e, 32768 | t, 22) && (f = Fe(e, t, f, r, i, E)),
                                d |= 2 & e.assignable ? 16 : 32))) : (f = Ye(e, t, 1, 0, 1, r, i, E),
                                d |= 1 & e.assignable ? 32 : 16,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = qe(e, t, f, a, 0, r, i, E),
                                d = 1 & e.assignable ? 0 : 16,
                                18 !== e.token && 1074790415 !== e.token && (1077936157 !== e.token && (d |= 16),
                                f = xe(e, t, a, o, r, i, E, f))))
                        } else
                            67174411 === e.token ? (A |= 1,
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos),
                            d = 16 | e.assignable) : r(e, 130);
                    else if (69271571 === e.token)
                        if (_ = ut(e, t, a),
                        d |= 256 & e.destructible ? 256 : 0,
                        A |= 2,
                        21 === e.token) {
                            j(e, 32768 | t);
                            const {tokenPos: i, linePos: u, colPos: E, tokenValue: h, token: p} = e;
                            if (143360 & e.token) {
                                f = Xe(e, t, c, 0, 1, 0, a, 1, i, u, E);
                                const {token: s} = e;
                                f = qe(e, t, f, a, 0, i, u, E),
                                4194304 == (4194304 & e.token) ? (d |= 2 & e.assignable ? 16 : 1077936157 === s ? 0 : 32,
                                f = He(e, t, a, o, i, u, E, f)) : 18 === e.token || 1074790415 === e.token ? 1077936157 === s || 1074790415 === s || 18 === s ? 2 & e.assignable ? d |= 16 : n && 143360 == (143360 & p) && le(e, t, n, h, c, l) : d |= 1 & e.assignable ? 32 : 16 : (d |= 16,
                                f = xe(e, t, a, o, i, u, E, f))
                            } else
                                2097152 == (2097152 & e.token) ? (f = 69271571 === e.token ? rt(e, t, n, 0, a, o, c, l, i, u, E) : lt(e, t, n, 0, a, o, c, l, i, u, E),
                                d = e.destructible,
                                e.assignable = 16 & d ? 2 : 1,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : 8 & d ? r(e, 59) : (f = qe(e, t, f, a, 0, i, u, E),
                                d = 2 & e.assignable ? 16 | d : 0,
                                4194304 == (4194304 & e.token) ? (1077936157 !== e.token && (d |= 16),
                                f = He(e, t, a, o, i, u, E, f)) : (8454144 == (8454144 & e.token) && (f = Ge(e, t, 1, i, u, E, 4, s, f)),
                                J(e, 32768 | t, 22) && (f = Fe(e, t, f, i, u, E)),
                                d |= 2 & e.assignable ? 16 : 32))) : (f = Ye(e, t, 1, 0, 1, i, u, E),
                                d |= 1 & e.assignable ? 32 : 16,
                                18 === e.token || 1074790415 === e.token ? 2 & e.assignable && (d |= 16) : (f = qe(e, t, f, a, 0, i, u, E),
                                d = 1 & e.assignable ? 0 : 16,
                                18 !== e.token && 1074790415 !== e.token && (1077936157 !== e.token && (d |= 16),
                                f = xe(e, t, a, o, i, u, E, f))))
                        } else
                            67174411 === e.token ? (A |= 1,
                            f = ct(e, t, A, a, e.tokenPos, E, h),
                            d = 16) : r(e, 41);
                    else if (8457014 === s)
                        if ($(e, 32768 | t, 8457014),
                        A |= 8,
                        143360 & e.token) {
                            const {token: n, line: s, index: r} = e;
                            _ = tt(e, t, 0),
                            A |= 1,
                            67174411 === e.token ? (d |= 16,
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : i(r, s, r, 209007 === n ? 43 : 12402 === n || 12403 === e.token ? 42 : 44, w[255 & n])
                        } else
                            134217728 == (134217728 & e.token) ? (d |= 16,
                            _ = nt(e, t),
                            A |= 1,
                            f = ct(e, t, A, a, m, E, h)) : 69271571 === e.token ? (d |= 16,
                            A |= 3,
                            _ = ut(e, t, a),
                            f = ct(e, t, A, a, e.tokenPos, e.linePos, e.colPos)) : r(e, 122);
                    else
                        r(e, 28, w[255 & s]);
                    d |= 128 & e.destructible ? 128 : 0,
                    e.destructible = d,
                    p.push(ae(e, t, m, E, h, {
                        type: "Property",
                        key: _,
                        value: f,
                        kind: 768 & A ? 512 & A ? "set" : "get" : "init",
                        computed: (2 & A) > 0,
                        method: (1 & A) > 0,
                        shorthand: (4 & A) > 0
                    }))
                }
                if (d |= e.destructible,
                18 !== e.token)
                    break;
                j(e, t)
            }
            $(e, t, 1074790415),
            T > 1 && (d |= 64);
            const m = ae(e, t, u, E, h, {
                type: o ? "ObjectPattern" : "ObjectExpression",
                properties: p
            });
            return !s && 4194304 & e.token ? ot(e, t, d, a, o, u, E, h, m) : (e.destructible = d,
            m)
        }
        function ut(e, t, n) {
            j(e, 32768 | t);
            const s = ve(e, 134217728 ^ (134217728 | t), 1, 0, n, e.tokenPos, e.linePos, e.colPos);
            return $(e, t, 20),
            s
        }
        function Et(e, t, n, s, a) {
            const {tokenValue: r} = e
              , o = tt(e, t, 0);
            if (e.assignable = 1,
            10 === e.token) {
                let i;
                return 64 & t && (i = oe(e, t, r)),
                e.flags = 128 ^ (128 | e.flags),
                dt(e, t, i, [o], 0, n, s, a)
            }
            return o
        }
        function ht(e, t, n, s, a, o, i, c, l, u) {
            return o || r(e, 54),
            a && r(e, 48),
            e.flags &= -129,
            dt(e, t, 64 & t ? oe(e, t, n) : void 0, [s], i, c, l, u)
        }
        function pt(e, t, n, s, a, o, i, c, l) {
            a || r(e, 54);
            for (let t = 0; t < s.length; ++t)
                Z(e, s[t]);
            return dt(e, t, n, s, o, i, c, l)
        }
        function dt(e, t, n, s, a, i, c, l) {
            1 & e.flags && r(e, 45),
            $(e, 32768 | t, 10),
            t = 15728640 ^ (15728640 | t) | a << 22;
            const u = 2162700 !== e.token;
            let E;
            if (n && void 0 !== n.scopeError && o(n.scopeError),
            u)
                E = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
            else {
                switch (n && (n = ce(n, 128)),
                E = je(e, 134246400 ^ (134246400 | t), n, 16, void 0, void 0),
                e.token) {
                case 69271571:
                    0 == (1 & e.flags) && r(e, 112);
                    break;
                case 67108877:
                case 67174409:
                case 22:
                    r(e, 113);
                case 67174411:
                    0 == (1 & e.flags) && r(e, 112),
                    e.flags |= 1024
                }
                8454144 == (8454144 & e.token) && 0 == (1 & e.flags) && r(e, 28, w[255 & e.token]),
                33619968 == (33619968 & e.token) && r(e, 121)
            }
            return e.assignable = 2,
            ae(e, t, i, c, l, {
                type: "ArrowFunctionExpression",
                params: s,
                body: E,
                async: 1 === a,
                expression: u
            })
        }
        function Tt(e, t, n, s, a) {
            $(e, t, 67174411),
            e.flags = 128 ^ (128 | e.flags);
            const i = [];
            if (J(e, t, 16))
                return i;
            t = 134217728 ^ (134217728 | t);
            let c = 0;
            for (; 18 !== e.token; ) {
                let o;
                const {tokenPos: l, linePos: u, colPos: E} = e;
                if (143360 & e.token ? (0 == (1024 & t) && (36864 == (36864 & e.token) && (e.flags |= 256),
                537079808 == (537079808 & e.token) && (e.flags |= 512)),
                o = bt(e, t, n, 1 | a, 0, l, u, E)) : (2162700 === e.token ? o = lt(e, t, n, 1, s, 1, a, 0, l, u, E) : 69271571 === e.token ? o = rt(e, t, n, 1, s, 1, a, 0, l, u, E) : 14 === e.token ? o = it(e, t, n, 16, a, 0, 0, s, 1, l, u, E) : r(e, 28, w[255 & e.token]),
                c = 1,
                48 & e.destructible && r(e, 47)),
                1077936157 === e.token && (j(e, 32768 | t),
                c = 1,
                o = ae(e, t, l, u, E, {
                    type: "AssignmentPattern",
                    left: o,
                    right: ve(e, t, 1, 1, s, e.tokenPos, e.linePos, e.colPos)
                })),
                i.push(o),
                !J(e, t, 18))
                    break;
                if (16 === e.token)
                    break
            }
            return c && (e.flags |= 128),
            n && (c || 1024 & t) && void 0 !== n.scopeError && o(n.scopeError),
            $(e, t, 16),
            i
        }
        function mt(e, t, n, s, a, r, o) {
            const {token: i} = e;
            if (67108864 & i) {
                if (67108877 === i)
                    return j(e, 1073741824 | t),
                    e.assignable = 1,
                    mt(e, t, ae(e, t, a, r, o, {
                        type: "MemberExpression",
                        object: n,
                        computed: !1,
                        property: Ve(e, t)
                    }), 0, a, r, o);
                if (69271571 === i) {
                    j(e, 32768 | t);
                    const {tokenPos: i, linePos: c, colPos: l} = e
                      , u = Ue(e, t, s, 1, i, c, l);
                    return $(e, t, 20),
                    e.assignable = 1,
                    mt(e, t, ae(e, t, a, r, o, {
                        type: "MemberExpression",
                        object: n,
                        computed: !0,
                        property: u
                    }), 0, a, r, o)
                }
                if (67174408 === i || 67174409 === i)
                    return e.assignable = 2,
                    mt(e, t, ae(e, t, a, r, o, {
                        type: "TaggedTemplateExpression",
                        tag: n,
                        quasi: 67174408 === e.token ? Je(e, 65536 | t) : ze(e, t, e.tokenPos, e.linePos, e.colPos)
                    }), 0, a, r, o)
            }
            return n
        }
        function ft(e, t, n, s, a, o) {
            return 209008 === e.token && r(e, 29),
            2098176 & t && 241773 === e.token && r(e, 30),
            537079808 == (537079808 & e.token) && (e.flags |= 512),
            ht(e, t, e.tokenValue, tt(e, t, 0), 0, n, 1, s, a, o)
        }
        function At(e, t, n, s, a, o, i, c, l, u) {
            j(e, 32768 | t);
            const E = 64 & t ? ce({
                parent: void 0,
                type: 2
            }, 1024) : void 0;
            if (J(e, t = 134217728 ^ (134217728 | t), 16))
                return 10 === e.token ? (1 & i && r(e, 45),
                pt(e, t, E, [], s, 1, c, l, u)) : ae(e, t, c, l, u, {
                    type: "CallExpression",
                    callee: n,
                    arguments: []
                });
            let h = 0
              , p = null
              , d = 0;
            e.destructible = 384 ^ (384 | e.destructible);
            const T = [];
            for (; 16 !== e.token; ) {
                const {token: s, tokenPos: i, linePos: m, colPos: f} = e;
                if (143360 & s)
                    E && ue(e, t, E, e.tokenValue, a, 0),
                    p = Xe(e, t, a, 0, 1, 0, 1, 1, i, m, f),
                    16 === e.token || 18 === e.token ? 2 & e.assignable ? (h |= 16,
                    d = 1) : 537079808 == (537079808 & s) ? e.flags |= 512 : 36864 == (36864 & s) && (e.flags |= 256) : (1077936157 === e.token ? d = 1 : h |= 16,
                    p = qe(e, t, p, 1, 0, i, m, f),
                    16 !== e.token && 18 !== e.token && (p = xe(e, t, 1, 0, i, m, f, p)));
                else if (2097152 & s)
                    p = 2162700 === s ? lt(e, t, E, 0, 1, 0, a, o, i, m, f) : rt(e, t, E, 0, 1, 0, a, o, i, m, f),
                    h |= e.destructible,
                    d = 1,
                    16 !== e.token && 18 !== e.token && (8 & h && r(e, 118),
                    p = qe(e, t, p, 0, 0, i, m, f),
                    h |= 16,
                    8454144 == (8454144 & e.token) && (p = Ge(e, t, 1, c, l, u, 4, s, p)),
                    J(e, 32768 | t, 22) && (p = Fe(e, t, p, c, l, u)));
                else {
                    if (14 !== s) {
                        for (p = ve(e, t, 1, 0, 0, i, m, f),
                        h = e.assignable,
                        T.push(p); J(e, 32768 | t, 18); )
                            T.push(ve(e, t, 1, 0, 0, i, m, f));
                        return h |= e.assignable,
                        $(e, t, 16),
                        e.destructible = 16 | h,
                        e.assignable = 2,
                        ae(e, t, c, l, u, {
                            type: "CallExpression",
                            callee: n,
                            arguments: T
                        })
                    }
                    p = it(e, t, E, 16, a, o, 1, 1, 0, i, m, f),
                    h |= (16 === e.token ? 0 : 16) | e.destructible,
                    d = 1
                }
                if (T.push(p),
                !J(e, 32768 | t, 18))
                    break
            }
            return $(e, t, 16),
            h |= 256 & e.destructible ? 256 : 0 | 128 & e.destructible ? 128 : 0,
            10 === e.token ? (48 & h && r(e, 25),
            (1 & e.flags || 1 & i) && r(e, 45),
            128 & h && r(e, 29),
            2098176 & t && 256 & h && r(e, 30),
            d && (e.flags |= 128),
            pt(e, t, E, T, s, 1, c, l, u)) : (8 & h && r(e, 59),
            e.assignable = 2,
            ae(e, t, c, l, u, {
                type: "CallExpression",
                callee: n,
                arguments: T
            }))
        }
        function _t(e, t, n, s, a, o, i) {
            let c = Ct(e, t = 16777216 ^ (16778240 | t));
            c.length && (a = e.tokenPos,
            o = e.linePos,
            i = e.colPos),
            e.leadingDecorators.length && (e.leadingDecorators.push(...c),
            c = e.leadingDecorators,
            e.leadingDecorators = []),
            j(e, t);
            let l = null
              , u = null;
            const {tokenValue: E} = e;
            4096 & e.token && 20567 !== e.token ? (ne(e, t, e.token) && r(e, 114),
            537079808 == (537079808 & e.token) && r(e, 115),
            n && (ue(e, t, n, E, 32, 0),
            s && 2 & s && he(e, E)),
            l = tt(e, t, 0)) : 0 == (1 & s) && r(e, 37, "Class");
            let h = t;
            J(e, 32768 | t, 20567) ? (u = Ye(e, t, 0, 0, 0, e.tokenPos, e.linePos, e.colPos),
            h |= 524288) : h = 524288 ^ (524288 | h);
            const p = kt(e, h, t, n, 2, 8, 0);
            return ae(e, t, a, o, i, 1 & t ? {
                type: "ClassDeclaration",
                id: l,
                superClass: u,
                decorators: c,
                body: p
            } : {
                type: "ClassDeclaration",
                id: l,
                superClass: u,
                body: p
            })
        }
        function Ct(e, t) {
            const n = [];
            if (1 & t)
                for (; 133 === e.token; )
                    n.push(gt(e, t, e.tokenPos, e.linePos, e.colPos));
            return n
        }
        function gt(e, t, n, s, a) {
            j(e, 32768 | t);
            let r = Xe(e, t, 2, 0, 1, 0, 0, 1, n, s, a);
            return r = qe(e, t, r, 0, 0, n, s, a),
            ae(e, t, n, s, a, {
                type: "Decorator",
                expression: r
            })
        }
        function kt(e, t, n, s, a, o, i) {
            const {tokenPos: c, linePos: l, colPos: u} = e;
            $(e, 32768 | t, 2162700),
            t = 134217728 ^ (134217728 | t),
            e.flags = 32 ^ (32 | e.flags);
            const E = [];
            let h;
            for (; 1074790415 !== e.token; ) {
                let o = 0;
                h = Ct(e, t),
                o = h.length,
                o > 0 && "constructor" === e.tokenValue && r(e, 106),
                1074790415 === e.token && r(e, 105),
                J(e, t, 1074790417) ? o > 0 && r(e, 116) : E.push(It(e, t, s, n, a, h, 0, i, e.tokenPos, e.linePos, e.colPos))
            }
            return $(e, 8 & o ? 32768 | t : t, 1074790415),
            ae(e, t, c, l, u, {
                type: "ClassBody",
                body: E
            })
        }
        function It(e, t, n, s, a, o, i, c, l, u, E) {
            let h = i ? 32 : 0
              , p = null;
            const {token: d, tokenPos: T, linePos: m, colPos: f} = e;
            if (176128 & d)
                switch (p = tt(e, t, 0),
                d) {
                case 36972:
                    if (!i && 67174411 !== e.token)
                        return It(e, t, n, s, a, o, 1, c, l, u, E);
                    break;
                case 209007:
                    if (67174411 !== e.token && 0 == (1 & e.flags)) {
                        if (1 & t && 1073741824 == (1073741824 & e.token))
                            return St(e, t, p, h, o, T, m, f);
                        h |= 16 | (z(e, t, 8457014) ? 8 : 0)
                    }
                    break;
                case 12402:
                    if (67174411 !== e.token) {
                        if (1 & t && 1073741824 == (1073741824 & e.token))
                            return St(e, t, p, h, o, T, m, f);
                        h |= 256
                    }
                    break;
                case 12403:
                    if (67174411 !== e.token) {
                        if (1 & t && 1073741824 == (1073741824 & e.token))
                            return St(e, t, p, h, o, T, m, f);
                        h |= 512
                    }
                }
            else if (69271571 === d)
                h |= 2,
                p = ut(e, s, c);
            else if (134217728 == (134217728 & d))
                p = nt(e, t);
            else if (8457014 === d)
                h |= 8,
                j(e, t);
            else if (1 & t && 131 === e.token)
                h |= 4096,
                p = Nt(e, 16384 | t, T, m, f);
            else if (1 & t && 1073741824 == (1073741824 & e.token))
                h |= 128;
            else {
                if (i && 2162700 === d)
                    return function(e, t, n, s, a, r) {
                        n && (n = ce(n, 2));
                        const o = 540672;
                        t = (t | o) ^ o | 262144;
                        const {body: i} = _e(e, t, n, {}, s, a, r);
                        return ae(e, t, s, a, r, {
                            type: "StaticBlock",
                            body: i
                        })
                    }(e, t, n, T, m, f);
                122 === d ? (p = tt(e, t, 0),
                67174411 !== e.token && r(e, 28, w[255 & e.token])) : r(e, 28, w[255 & e.token])
            }
            if (792 & h && (143360 & e.token ? p = tt(e, t, 0) : 134217728 == (134217728 & e.token) ? p = nt(e, t) : 69271571 === e.token ? (h |= 2,
            p = ut(e, t, 0)) : 122 === e.token ? p = tt(e, t, 0) : 1 & t && 131 === e.token ? (h |= 4096,
            p = Nt(e, t, T, m, f)) : r(e, 131)),
            0 == (2 & h) && ("constructor" === e.tokenValue ? (1073741824 == (1073741824 & e.token) ? r(e, 125) : 0 == (32 & h) && 67174411 === e.token && (920 & h ? r(e, 50, "accessor") : 0 == (524288 & t) && (32 & e.flags ? r(e, 51) : e.flags |= 32)),
            h |= 64) : 0 == (4096 & h) && 824 & h && "prototype" === e.tokenValue && r(e, 49)),
            1 & t && 67174411 !== e.token)
                return St(e, t, p, h, o, T, m, f);
            const A = ct(e, t, h, c, e.tokenPos, e.linePos, e.colPos);
            return ae(e, t, l, u, E, 1 & t ? {
                type: "MethodDefinition",
                kind: 0 == (32 & h) && 64 & h ? "constructor" : 256 & h ? "get" : 512 & h ? "set" : "method",
                static: (32 & h) > 0,
                computed: (2 & h) > 0,
                key: p,
                decorators: o,
                value: A
            } : {
                type: "MethodDefinition",
                kind: 0 == (32 & h) && 64 & h ? "constructor" : 256 & h ? "get" : 512 & h ? "set" : "method",
                static: (32 & h) > 0,
                computed: (2 & h) > 0,
                key: p,
                value: A
            })
        }
        function Nt(e, t, n, s, a) {
            j(e, t);
            const {tokenValue: o} = e;
            return "constructor" === o && r(e, 124),
            j(e, t),
            ae(e, t, n, s, a, {
                type: "PrivateIdentifier",
                name: o
            })
        }
        function St(e, t, n, s, a, o, i, c) {
            let l = null;
            if (8 & s && r(e, 0),
            1077936157 === e.token) {
                j(e, 32768 | t);
                const {tokenPos: n, linePos: s, colPos: a} = e;
                537079928 === e.token && r(e, 115),
                l = Xe(e, 16384 | t, 2, 0, 1, 0, 0, 1, n, s, a),
                1073741824 != (1073741824 & e.token) && (l = qe(e, 16384 | t, l, 0, 0, n, s, a),
                l = xe(e, 16384 | t, 0, 0, n, s, a, l),
                18 === e.token && (l = Be(e, t, 0, o, i, c, l)))
            }
            return ae(e, t, o, i, c, {
                type: "PropertyDefinition",
                key: n,
                value: l,
                static: (32 & s) > 0,
                computed: (2 & s) > 0,
                decorators: a
            })
        }
        function Rt(e, t, n, s, a, o, i, c) {
            if (143360 & e.token)
                return bt(e, t, n, s, a, o, i, c);
            2097152 != (2097152 & e.token) && r(e, 28, w[255 & e.token]);
            const l = 69271571 === e.token ? rt(e, t, n, 1, 0, 1, s, a, o, i, c) : lt(e, t, n, 1, 0, 1, s, a, o, i, c);
            return 16 & e.destructible && r(e, 47),
            32 & e.destructible && r(e, 47),
            l
        }
        function bt(e, t, n, s, a, o, i, c) {
            const {tokenValue: l, token: u} = e;
            return 1024 & t && (537079808 == (537079808 & u) ? r(e, 115) : 36864 == (36864 & u) && r(e, 114)),
            20480 == (20480 & u) && r(e, 99),
            2099200 & t && 241773 === u && r(e, 30),
            241739 === u && 24 & s && r(e, 97),
            4196352 & t && 209008 === u && r(e, 95),
            j(e, t),
            n && le(e, t, n, l, s, a),
            ae(e, t, o, i, c, {
                type: "Identifier",
                name: l
            })
        }
        function Dt(e, t, n, s, a, o) {
            if (j(e, t),
            8456259 === e.token)
                return ae(e, t, s, a, o, {
                    type: "JSXFragment",
                    openingFragment: Pt(e, t, s, a, o),
                    children: Lt(e, t),
                    closingFragment: Ot(e, t, 0, e.tokenPos, e.linePos, e.colPos)
                });
            let i = null
              , c = [];
            const l = function(e, t, n, s, a, o) {
                143360 != (143360 & e.token) && 4096 != (4096 & e.token) && r(e, 0);
                const i = yt(e, t, e.tokenPos, e.linePos, e.colPos)
                  , c = function(e, t) {
                    const n = [];
                    for (; 8457016 !== e.token && 8456259 !== e.token && 1048576 !== e.token; )
                        n.push(vt(e, t, e.tokenPos, e.linePos, e.colPos));
                    return n
                }(e, t)
                  , l = 8457016 === e.token;
                return 8456259 === e.token ? X(e, t) : ($(e, t, 8457016),
                n ? $(e, t, 8456259) : X(e, t)),
                ae(e, t, s, a, o, {
                    type: "JSXOpeningElement",
                    name: i,
                    attributes: c,
                    selfClosing: l
                })
            }(e, t, n, s, a, o);
            if (!l.selfClosing) {
                c = Lt(e, t),
                i = function(e, t, n, s, a, r) {
                    $(e, t, 25);
                    const o = yt(e, t, e.tokenPos, e.linePos, e.colPos);
                    return n ? $(e, t, 8456259) : e.token = X(e, t),
                    ae(e, t, s, a, r, {
                        type: "JSXClosingElement",
                        name: o
                    })
                }(e, t, n, e.tokenPos, e.linePos, e.colPos);
                const s = re(i.name);
                re(l.name) !== s && r(e, 149, s)
            }
            return ae(e, t, s, a, o, {
                type: "JSXElement",
                children: c,
                openingElement: l,
                closingElement: i
            })
        }
        function Pt(e, t, n, s, a) {
            return X(e, t),
            ae(e, t, n, s, a, {
                type: "JSXOpeningFragment"
            })
        }
        function Ot(e, t, n, s, a, r) {
            return $(e, t, 25),
            $(e, t, 8456259),
            ae(e, t, s, a, r, {
                type: "JSXClosingFragment"
            })
        }
        function Lt(e, t) {
            const n = [];
            for (; 25 !== e.token; )
                e.index = e.tokenPos = e.startPos,
                e.column = e.colPos = e.startColumn,
                e.line = e.linePos = e.startLine,
                X(e, t),
                n.push(Mt(e, t, e.tokenPos, e.linePos, e.colPos));
            return n
        }
        function Mt(e, t, n, s, a) {
            return 138 === e.token ? function(e, t, n, s, a) {
                X(e, t);
                const r = {
                    type: "JSXText",
                    value: e.tokenValue
                };
                return 512 & t && (r.raw = e.tokenRaw),
                ae(e, t, n, s, a, r)
            }(e, t, n, s, a) : 2162700 === e.token ? Ut(e, t, 0, 0, n, s, a) : 8456258 === e.token ? Dt(e, t, 0, n, s, a) : void r(e, 0)
        }
        function yt(e, t, n, s, a) {
            W(e);
            let r = xt(e, t, n, s, a);
            if (21 === e.token)
                return Bt(e, t, r, n, s, a);
            for (; J(e, t, 67108877); )
                W(e),
                r = wt(e, t, r, n, s, a);
            return r
        }
        function wt(e, t, n, s, a, r) {
            return ae(e, t, s, a, r, {
                type: "JSXMemberExpression",
                object: n,
                property: xt(e, t, e.tokenPos, e.linePos, e.colPos)
            })
        }
        function vt(e, t, n, s, a) {
            if (2162700 === e.token)
                return function(e, t, n, s, a) {
                    j(e, t),
                    $(e, t, 14);
                    const r = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
                    return $(e, t, 1074790415),
                    ae(e, t, n, s, a, {
                        type: "JSXSpreadAttribute",
                        argument: r
                    })
                }(e, t, n, s, a);
            W(e);
            let o = null
              , i = xt(e, t, n, s, a);
            if (21 === e.token && (i = Bt(e, t, i, n, s, a)),
            1077936157 === e.token) {
                const n = function(e, t) {
                    return e.startPos = e.tokenPos = e.index,
                    e.startColumn = e.colPos = e.column,
                    e.startLine = e.linePos = e.line,
                    e.token = 8192 & m[e.currentChar] ? function(e, t) {
                        const n = e.currentChar;
                        let s = u(e);
                        const a = e.index;
                        for (; s !== n; )
                            e.index >= e.end && r(e, 14),
                            s = u(e);
                        return s !== n && r(e, 14),
                        e.tokenValue = e.source.slice(a, e.index),
                        u(e),
                        512 & t && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
                        134283267
                    }(e, t) : Y(e, t, 0),
                    e.token
                }(e, t)
                  , {tokenPos: s, linePos: a, colPos: i} = e;
                switch (n) {
                case 134283267:
                    o = nt(e, t);
                    break;
                case 8456258:
                    o = Dt(e, t, 1, s, a, i);
                    break;
                case 2162700:
                    o = Ut(e, t, 1, 1, s, a, i);
                    break;
                default:
                    r(e, 148)
                }
            }
            return ae(e, t, n, s, a, {
                type: "JSXAttribute",
                value: o,
                name: i
            })
        }
        function Bt(e, t, n, s, a, r) {
            return $(e, t, 21),
            ae(e, t, s, a, r, {
                type: "JSXNamespacedName",
                namespace: n,
                name: xt(e, t, e.tokenPos, e.linePos, e.colPos)
            })
        }
        function Ut(e, t, n, s, a, o, i) {
            j(e, 32768 | t);
            const {tokenPos: c, linePos: l, colPos: u} = e;
            if (14 === e.token)
                return function(e, t, n, s, a) {
                    $(e, t, 14);
                    const r = ve(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
                    return $(e, t, 1074790415),
                    ae(e, t, n, s, a, {
                        type: "JSXSpreadChild",
                        expression: r
                    })
                }(e, t, c, l, u);
            let E = null;
            return 1074790415 === e.token ? (s && r(e, 151),
            E = function(e, t, n, s, a) {
                return e.startPos = e.tokenPos,
                e.startLine = e.linePos,
                e.startColumn = e.colPos,
                ae(e, t, n, s, a, {
                    type: "JSXEmptyExpression"
                })
            }(e, t, e.startPos, e.startLine, e.startColumn)) : E = ve(e, t, 1, 0, 0, c, l, u),
            n ? $(e, t, 1074790415) : X(e, t),
            ae(e, t, a, o, i, {
                type: "JSXExpressionContainer",
                expression: E
            })
        }
        function xt(e, t, n, s, a) {
            const {tokenValue: r} = e;
            return j(e, t),
            ae(e, t, n, s, a, {
                type: "JSXIdentifier",
                name: r
            })
        }
        function Ht(e, t) {
            return function(e, t, n) {
                let s, a, o = "";
                null != t && (t.module && (n |= 3072),
                t.next && (n |= 1),
                t.loc && (n |= 4),
                t.ranges && (n |= 2),
                t.uniqueKeyInPattern && (n |= -2147483648),
                t.lexical && (n |= 64),
                t.webcompat && (n |= 256),
                t.directives && (n |= 520),
                t.globalReturn && (n |= 32),
                t.raw && (n |= 512),
                t.preserveParens && (n |= 128),
                t.impliedStrict && (n |= 1024),
                t.jsx && (n |= 16),
                t.identifierPattern && (n |= 268435456),
                t.specDeviation && (n |= 536870912),
                t.source && (o = t.source),
                null != t.onComment && (s = Array.isArray(t.onComment) ? function(e, t) {
                    return function(n, s, a, r, o) {
                        const i = {
                            type: n,
                            value: s
                        };
                        2 & e && (i.start = a,
                        i.end = r,
                        i.range = [a, r]),
                        4 & e && (i.loc = o),
                        t.push(i)
                    }
                }(n, t.onComment) : t.onComment),
                null != t.onToken && (a = Array.isArray(t.onToken) ? function(e, t) {
                    return function(n, s, a, r) {
                        const o = {
                            token: n
                        };
                        2 & e && (o.start = s,
                        o.end = a,
                        o.range = [s, a]),
                        4 & e && (o.loc = r),
                        t.push(o)
                    }
                }(n, t.onToken) : t.onToken));
                const i = function(e, t, n, s) {
                    return {
                        source: e,
                        flags: 0,
                        index: 0,
                        line: 1,
                        column: 0,
                        startPos: 0,
                        end: e.length,
                        tokenPos: 0,
                        startColumn: 0,
                        colPos: 0,
                        linePos: 1,
                        startLine: 1,
                        sourceFile: t,
                        tokenValue: "",
                        token: 1048576,
                        tokenRaw: "",
                        tokenRegExp: void 0,
                        currentChar: e.charCodeAt(0),
                        exportedNames: [],
                        exportedBindings: [],
                        assignable: 1,
                        destructible: 0,
                        onComment: n,
                        onToken: s,
                        leadingDecorators: []
                    }
                }(e, o, s, a);
                1 & n && function(e) {
                    const t = e.source;
                    35 === e.currentChar && 33 === t.charCodeAt(e.index + 1) && (u(e),
                    u(e),
                    I(e, t, 0, 4, e.tokenPos, e.linePos, e.colPos))
                }(i);
                const c = 64 & n ? {
                    parent: void 0,
                    type: 2
                } : void 0;
                let l = []
                  , E = "script";
                if (2048 & n) {
                    if (E = "module",
                    l = function(e, t, n) {
                        j(e, 32768 | t);
                        const s = [];
                        if (8 & t)
                            for (; 134283267 === e.token; ) {
                                const {tokenPos: n, linePos: a, colPos: r, token: o} = e;
                                s.push(Ie(e, t, nt(e, t), o, n, a, r))
                            }
                        for (; 1048576 !== e.token; )
                            s.push(me(e, t, n));
                        return s
                    }(i, 8192 | n, c),
                    c)
                        for (const e in i.exportedBindings)
                            "#" !== e[0] || c[e] || r(i, 142, e.slice(1))
                } else
                    l = function(e, t, n) {
                        j(e, 1073774592 | t);
                        const s = [];
                        for (; 134283267 === e.token; ) {
                            const {index: n, tokenPos: a, tokenValue: r, linePos: o, colPos: i, token: c} = e
                              , l = nt(e, t);
                            K(e, n, a, r) && (t |= 1024),
                            s.push(Ie(e, t, l, c, a, o, i))
                        }
                        for (; 1048576 !== e.token; )
                            s.push(fe(e, t, n, 4, {}));
                        return s
                    }(i, 8192 | n, c);
                const h = {
                    type: "Program",
                    sourceType: E,
                    body: l
                };
                return 2 & n && (h.start = 0,
                h.end = e.length,
                h.range = [0, e.length]),
                4 & n && (h.loc = {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: i.line,
                        column: i.column
                    }
                },
                i.sourceFile && (h.loc.source = o)),
                h
            }(e, t, 0)
        }
        var Ft = n(392);
        function Gt(e, t) {
            let n = function(e) {
                try {
                    return Ht(e, {
                        module: !0
                    })
                } catch (e) {
                    return console.error(e),
                    Ht("")
                }
            }(e);
            return n = jt(n, null, ((e,n)=>("MemberExpression" === e.type ? ("CallExpression" !== n.type || "Identifier" === e.object.type && ["location", "localStorage", "sessionStorage"].includes(e.object.name)) && (e.object = function(e) {
                if ("Identifier" === e.type)
                    switch (e.name) {
                    case "self":
                        e.name = "__self";
                        break;
                    case "window":
                        e.name = "__window";
                        break;
                    case "parent":
                        e.name = "__parent";
                        break;
                    case "location":
                        e.name = "__location";
                        break;
                    case "localStorage":
                        e.name = "__localStorage";
                        break;
                    case "sessionStorage":
                        e.name = "__sessionStorage";
                        break;
                    case "top":
                        e.name = "__top"
                    }
                return e
            }(e.object)) : "Literal" !== e.type || "ImportDeclaration" !== n.type && "ImportExpression" !== n.type && "ExportNamedDeclaration" !== n.type && "ExportAllDeclaration" !== n.type || (e.value = Yt(e.value, t)),
            e))),
            (0,
            Ft.R)(n, {
                format: {
                    quotes: "double"
                }
            })
        }
        function jt(e, t, n) {
            if (!e || "object" != typeof e)
                return e;
            e = n(e, t);
            for (let t in e)
                if (Array.isArray(e[t]))
                    for (let s in e[t])
                        e[t][s] = jt(e[t][s], e[t], n);
                else
                    e[t] = jt(e[t], e, n);
            return e
        }
        function Yt(e, t) {
            const n = self.__osana$config;
            if (new RegExp(`^${n.prefix}`).test(e))
                return e;
            let s;
            if ("window"in self && (s = new URL(n.codec.decode(location.href.slice((location.origin + n.prefix).length)))),
            t && (s = new URL(t)),
            /^(#|about|data|mailto):/.test(e))
                return e;
            if (/^javascript:/.test(e))
                return `javascript:${Gt(e.slice("javascript:".length), t)}`;
            if (!s)
                return e;
            try {
                return `${n.prefix}${n.codec.encode(new URL(e,s).href)}`
            } catch (t) {
                return `${n.prefix}${n.codec.encode(e)}`
            }
        }
        let qt;
        function Vt(e, t) {
            return qt = t,
            e.replace(/(?<=url\("?'?)[^"'][\S]*[^"'](?="?'?\);?)/g, Xt)
        }
        function Xt(e) {
            return Yt(e, qt)
        }
        function Wt(e, t) {
            return e.host = t.host,
            e
        }
        function Qt(e, t) {
            return ["Cache-Control", "Content-Security-Policy", "Content-Security-Policy-Report-Only", "Cross-Origin-Opener-Policy", "Cross-Origin-Opener-Policy-Report-Only", "Report-To", "Strict-Transport-Security", "X-Content-Type-Options", "X-Frame-Options", "Access-Control-Allow-Origin"].forEach((t=>{
                delete e[t],
                delete e[t.toLowerCase()]
            }
            )),
            e.Location = Yt(e.Location || e.location),
            e
        }
        const Kt = new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111])
          , zt = "�";
        var Jt;
        !function(e) {
            e[e.EOF = -1] = "EOF",
            e[e.NULL = 0] = "NULL",
            e[e.TABULATION = 9] = "TABULATION",
            e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN",
            e[e.LINE_FEED = 10] = "LINE_FEED",
            e[e.FORM_FEED = 12] = "FORM_FEED",
            e[e.SPACE = 32] = "SPACE",
            e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK",
            e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK",
            e[e.NUMBER_SIGN = 35] = "NUMBER_SIGN",
            e[e.AMPERSAND = 38] = "AMPERSAND",
            e[e.APOSTROPHE = 39] = "APOSTROPHE",
            e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS",
            e[e.SOLIDUS = 47] = "SOLIDUS",
            e[e.DIGIT_0 = 48] = "DIGIT_0",
            e[e.DIGIT_9 = 57] = "DIGIT_9",
            e[e.SEMICOLON = 59] = "SEMICOLON",
            e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN",
            e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN",
            e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN",
            e[e.QUESTION_MARK = 63] = "QUESTION_MARK",
            e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A",
            e[e.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F",
            e[e.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X",
            e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z",
            e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET",
            e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT",
            e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A",
            e[e.LATIN_SMALL_F = 102] = "LATIN_SMALL_F",
            e[e.LATIN_SMALL_X = 120] = "LATIN_SMALL_X",
            e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z",
            e[e.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER"
        }(Jt || (Jt = {}));
        const $t = "[CDATA["
          , Zt = "doctype"
          , en = "script";
        function tn(e) {
            return e >= 55296 && e <= 57343
        }
        function nn(e) {
            return 32 !== e && 10 !== e && 13 !== e && 9 !== e && 12 !== e && e >= 1 && e <= 31 || e >= 127 && e <= 159
        }
        function sn(e) {
            return e >= 64976 && e <= 65007 || Kt.has(e)
        }
        var an, rn;
        !function(e) {
            e.controlCharacterInInputStream = "control-character-in-input-stream",
            e.noncharacterInInputStream = "noncharacter-in-input-stream",
            e.surrogateInInputStream = "surrogate-in-input-stream",
            e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus",
            e.endTagWithAttributes = "end-tag-with-attributes",
            e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus",
            e.unexpectedSolidusInTag = "unexpected-solidus-in-tag",
            e.unexpectedNullCharacter = "unexpected-null-character",
            e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name",
            e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name",
            e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name",
            e.missingEndTagName = "missing-end-tag-name",
            e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name",
            e.unknownNamedCharacterReference = "unknown-named-character-reference",
            e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference",
            e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier",
            e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value",
            e.eofBeforeTagName = "eof-before-tag-name",
            e.eofInTag = "eof-in-tag",
            e.missingAttributeValue = "missing-attribute-value",
            e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes",
            e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword",
            e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers",
            e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword",
            e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier",
            e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier",
            e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier",
            e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier",
            e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier",
            e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier",
            e.cdataInHtmlContent = "cdata-in-html-content",
            e.incorrectlyOpenedComment = "incorrectly-opened-comment",
            e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text",
            e.eofInDoctype = "eof-in-doctype",
            e.nestedComment = "nested-comment",
            e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment",
            e.eofInComment = "eof-in-comment",
            e.incorrectlyClosedComment = "incorrectly-closed-comment",
            e.eofInCdata = "eof-in-cdata",
            e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference",
            e.nullCharacterReference = "null-character-reference",
            e.surrogateCharacterReference = "surrogate-character-reference",
            e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range",
            e.controlCharacterReference = "control-character-reference",
            e.noncharacterCharacterReference = "noncharacter-character-reference",
            e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name",
            e.missingDoctypeName = "missing-doctype-name",
            e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name",
            e.duplicateAttribute = "duplicate-attribute",
            e.nonConformingDoctype = "non-conforming-doctype",
            e.missingDoctype = "missing-doctype",
            e.misplacedDoctype = "misplaced-doctype",
            e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element",
            e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements",
            e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head",
            e.openElementsLeftAfterEof = "open-elements-left-after-eof",
            e.abandonedHeadElementChild = "abandoned-head-element-child",
            e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element",
            e.nestedNoscriptInHead = "nested-noscript-in-head",
            e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text"
        }(an || (an = {}));
        class on {
            constructor(e) {
                this.handler = e,
                this.html = "",
                this.pos = -1,
                this.lastGapPos = -2,
                this.gapStack = [],
                this.skipNextNewLine = !1,
                this.lastChunkWritten = !1,
                this.endOfChunkHit = !1,
                this.bufferWaterline = 65536,
                this.isEol = !1,
                this.lineStartPos = 0,
                this.droppedBufferSize = 0,
                this.line = 1,
                this.lastErrOffset = -1
            }
            get col() {
                return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
            }
            get offset() {
                return this.droppedBufferSize + this.pos
            }
            getError(e) {
                const {line: t, col: n, offset: s} = this;
                return {
                    code: e,
                    startLine: t,
                    endLine: t,
                    startCol: n,
                    endCol: n,
                    startOffset: s,
                    endOffset: s
                }
            }
            _err(e) {
                this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset,
                this.handler.onParseError(this.getError(e)))
            }
            _addGap() {
                this.gapStack.push(this.lastGapPos),
                this.lastGapPos = this.pos
            }
            _processSurrogate(e) {
                if (this.pos !== this.html.length - 1) {
                    const t = this.html.charCodeAt(this.pos + 1);
                    if (function(e) {
                        return e >= 56320 && e <= 57343
                    }(t))
                        return this.pos++,
                        this._addGap(),
                        1024 * (e - 55296) + 9216 + t
                } else if (!this.lastChunkWritten)
                    return this.endOfChunkHit = !0,
                    Jt.EOF;
                return this._err(an.surrogateInInputStream),
                e
            }
            willDropParsedChunk() {
                return this.pos > this.bufferWaterline
            }
            dropParsedChunk() {
                this.willDropParsedChunk() && (this.html = this.html.substring(this.pos),
                this.lineStartPos -= this.pos,
                this.droppedBufferSize += this.pos,
                this.pos = 0,
                this.lastGapPos = -2,
                this.gapStack.length = 0)
            }
            write(e, t) {
                this.html.length > 0 ? this.html += e : this.html = e,
                this.endOfChunkHit = !1,
                this.lastChunkWritten = t
            }
            insertHtmlAtCurrentPos(e) {
                this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1),
                this.endOfChunkHit = !1
            }
            startsWith(e, t) {
                if (this.pos + e.length > this.html.length)
                    return this.endOfChunkHit = !this.lastChunkWritten,
                    !1;
                if (t)
                    return this.html.startsWith(e, this.pos);
                for (let t = 0; t < e.length; t++)
                    if ((32 | this.html.charCodeAt(this.pos + t)) !== e.charCodeAt(t))
                        return !1;
                return !0
            }
            peek(e) {
                const t = this.pos + e;
                return t >= this.html.length ? (this.endOfChunkHit = !this.lastChunkWritten,
                Jt.EOF) : this.html.charCodeAt(t)
            }
            advance() {
                if (this.pos++,
                this.isEol && (this.isEol = !1,
                this.line++,
                this.lineStartPos = this.pos),
                this.pos >= this.html.length)
                    return this.endOfChunkHit = !this.lastChunkWritten,
                    Jt.EOF;
                let e = this.html.charCodeAt(this.pos);
                return e === Jt.CARRIAGE_RETURN ? (this.isEol = !0,
                this.skipNextNewLine = !0,
                Jt.LINE_FEED) : e === Jt.LINE_FEED && (this.isEol = !0,
                this.skipNextNewLine) ? (this.line--,
                this.skipNextNewLine = !1,
                this._addGap(),
                this.advance()) : (this.skipNextNewLine = !1,
                tn(e) && (e = this._processSurrogate(e)),
                null === this.handler.onParseError || e > 31 && e < 127 || e === Jt.LINE_FEED || e === Jt.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e),
                e)
            }
            _checkForProblematicCharacters(e) {
                nn(e) ? this._err(an.controlCharacterInInputStream) : sn(e) && this._err(an.noncharacterInInputStream)
            }
            retreat(e) {
                for (this.pos -= e; this.pos < this.lastGapPos; )
                    this.lastGapPos = this.gapStack.pop(),
                    this.pos--;
                this.isEol = !1
            }
        }
        function cn(e, t) {
            for (let n = e.attrs.length - 1; n >= 0; n--)
                if (e.attrs[n].name === t)
                    return e.attrs[n].value;
            return null
        }
        !function(e) {
            e[e.CHARACTER = 0] = "CHARACTER",
            e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER",
            e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER",
            e[e.START_TAG = 3] = "START_TAG",
            e[e.END_TAG = 4] = "END_TAG",
            e[e.COMMENT = 5] = "COMMENT",
            e[e.DOCTYPE = 6] = "DOCTYPE",
            e[e.EOF = 7] = "EOF",
            e[e.HIBERNATION = 8] = "HIBERNATION"
        }(rn || (rn = {}));
        const ln = new Uint16Array([7489, 60, 213, 305, 650, 1181, 1403, 1488, 1653, 1758, 1954, 2006, 2063, 2634, 2705, 3489, 3693, 3849, 3878, 4298, 4648, 4833, 5141, 5277, 5315, 5343, 5413, 0, 0, 0, 0, 0, 0, 5483, 5837, 6541, 7186, 7645, 8062, 8288, 8624, 8845, 9152, 9211, 9282, 10276, 10514, 11528, 11848, 12238, 12310, 12986, 13881, 14252, 14590, 14888, 14961, 15072, 15150, 2048, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 98, 102, 109, 115, 127, 132, 139, 144, 149, 152, 166, 179, 185, 200, 207, 108, 105, 103, 32827, 198, 16582, 80, 32827, 38, 16422, 99, 117, 116, 101, 32827, 193, 16577, 114, 101, 118, 101, 59, 16642, 256, 105, 121, 120, 125, 114, 99, 32827, 194, 16578, 59, 17424, 114, 59, 49152, 55349, 56580, 114, 97, 118, 101, 32827, 192, 16576, 112, 104, 97, 59, 17297, 97, 99, 114, 59, 16640, 100, 59, 27219, 256, 103, 112, 157, 161, 111, 110, 59, 16644, 102, 59, 49152, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 24673, 105, 110, 103, 32827, 197, 16581, 256, 99, 115, 190, 195, 114, 59, 49152, 55349, 56476, 105, 103, 110, 59, 25172, 105, 108, 100, 101, 32827, 195, 16579, 109, 108, 32827, 196, 16580, 1024, 97, 99, 101, 102, 111, 114, 115, 117, 229, 251, 254, 279, 284, 290, 295, 298, 256, 99, 114, 234, 242, 107, 115, 108, 97, 115, 104, 59, 25110, 374, 246, 248, 59, 27367, 101, 100, 59, 25350, 121, 59, 17425, 384, 99, 114, 116, 261, 267, 276, 97, 117, 115, 101, 59, 25141, 110, 111, 117, 108, 108, 105, 115, 59, 24876, 97, 59, 17298, 114, 59, 49152, 55349, 56581, 112, 102, 59, 49152, 55349, 56633, 101, 118, 101, 59, 17112, 99, 242, 275, 109, 112, 101, 113, 59, 25166, 1792, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 333, 337, 342, 384, 414, 418, 437, 439, 442, 476, 533, 627, 632, 638, 99, 121, 59, 17447, 80, 89, 32827, 169, 16553, 384, 99, 112, 121, 349, 354, 378, 117, 116, 101, 59, 16646, 256, 59, 105, 359, 360, 25298, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24901, 108, 101, 121, 115, 59, 24877, 512, 97, 101, 105, 111, 393, 398, 404, 408, 114, 111, 110, 59, 16652, 100, 105, 108, 32827, 199, 16583, 114, 99, 59, 16648, 110, 105, 110, 116, 59, 25136, 111, 116, 59, 16650, 256, 100, 110, 423, 429, 105, 108, 108, 97, 59, 16568, 116, 101, 114, 68, 111, 116, 59, 16567, 242, 383, 105, 59, 17319, 114, 99, 108, 101, 512, 68, 77, 80, 84, 455, 459, 465, 470, 111, 116, 59, 25241, 105, 110, 117, 115, 59, 25238, 108, 117, 115, 59, 25237, 105, 109, 101, 115, 59, 25239, 111, 256, 99, 115, 482, 504, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25138, 101, 67, 117, 114, 108, 121, 256, 68, 81, 515, 527, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24605, 117, 111, 116, 101, 59, 24601, 512, 108, 110, 112, 117, 542, 552, 583, 597, 111, 110, 256, 59, 101, 549, 550, 25143, 59, 27252, 384, 103, 105, 116, 559, 566, 570, 114, 117, 101, 110, 116, 59, 25185, 110, 116, 59, 25135, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25134, 256, 102, 114, 588, 590, 59, 24834, 111, 100, 117, 99, 116, 59, 25104, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25139, 111, 115, 115, 59, 27183, 99, 114, 59, 49152, 55349, 56478, 112, 256, 59, 67, 644, 645, 25299, 97, 112, 59, 25165, 1408, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 672, 684, 688, 692, 696, 715, 727, 737, 742, 819, 1165, 256, 59, 111, 377, 677, 116, 114, 97, 104, 100, 59, 26897, 99, 121, 59, 17410, 99, 121, 59, 17413, 99, 121, 59, 17423, 384, 103, 114, 115, 703, 708, 711, 103, 101, 114, 59, 24609, 114, 59, 24993, 104, 118, 59, 27364, 256, 97, 121, 720, 725, 114, 111, 110, 59, 16654, 59, 17428, 108, 256, 59, 116, 733, 734, 25095, 97, 59, 17300, 114, 59, 49152, 55349, 56583, 256, 97, 102, 747, 807, 256, 99, 109, 752, 802, 114, 105, 116, 105, 99, 97, 108, 512, 65, 68, 71, 84, 768, 774, 790, 796, 99, 117, 116, 101, 59, 16564, 111, 372, 779, 781, 59, 17113, 98, 108, 101, 65, 99, 117, 116, 101, 59, 17117, 114, 97, 118, 101, 59, 16480, 105, 108, 100, 101, 59, 17116, 111, 110, 100, 59, 25284, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24902, 1136, 829, 0, 0, 0, 834, 852, 0, 1029, 102, 59, 49152, 55349, 56635, 384, 59, 68, 69, 840, 841, 845, 16552, 111, 116, 59, 24796, 113, 117, 97, 108, 59, 25168, 98, 108, 101, 768, 67, 68, 76, 82, 85, 86, 867, 882, 898, 975, 994, 1016, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 236, 569, 111, 628, 889, 0, 0, 891, 187, 841, 110, 65, 114, 114, 111, 119, 59, 25043, 256, 101, 111, 903, 932, 102, 116, 384, 65, 82, 84, 912, 918, 929, 114, 114, 111, 119, 59, 25040, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25044, 101, 229, 714, 110, 103, 256, 76, 82, 939, 964, 101, 102, 116, 256, 65, 82, 947, 953, 114, 114, 111, 119, 59, 26616, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26618, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26617, 105, 103, 104, 116, 256, 65, 84, 984, 990, 114, 114, 111, 119, 59, 25042, 101, 101, 59, 25256, 112, 577, 1001, 0, 0, 1007, 114, 114, 111, 119, 59, 25041, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25045, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25125, 110, 768, 65, 66, 76, 82, 84, 97, 1042, 1066, 1072, 1118, 1151, 892, 114, 114, 111, 119, 384, 59, 66, 85, 1053, 1054, 1058, 24979, 97, 114, 59, 26899, 112, 65, 114, 114, 111, 119, 59, 25077, 114, 101, 118, 101, 59, 17169, 101, 102, 116, 722, 1082, 0, 1094, 0, 1104, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 26960, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26974, 101, 99, 116, 111, 114, 256, 59, 66, 1113, 1114, 25021, 97, 114, 59, 26966, 105, 103, 104, 116, 468, 1127, 0, 1137, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26975, 101, 99, 116, 111, 114, 256, 59, 66, 1146, 1147, 25025, 97, 114, 59, 26967, 101, 101, 256, 59, 65, 1158, 1159, 25252, 114, 114, 111, 119, 59, 24999, 256, 99, 116, 1170, 1175, 114, 59, 49152, 55349, 56479, 114, 111, 107, 59, 16656, 2048, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1213, 1216, 1220, 1227, 1246, 1250, 1255, 1262, 1269, 1313, 1327, 1334, 1362, 1373, 1376, 1381, 71, 59, 16714, 72, 32827, 208, 16592, 99, 117, 116, 101, 32827, 201, 16585, 384, 97, 105, 121, 1234, 1239, 1244, 114, 111, 110, 59, 16666, 114, 99, 32827, 202, 16586, 59, 17453, 111, 116, 59, 16662, 114, 59, 49152, 55349, 56584, 114, 97, 118, 101, 32827, 200, 16584, 101, 109, 101, 110, 116, 59, 25096, 256, 97, 112, 1274, 1278, 99, 114, 59, 16658, 116, 121, 595, 1286, 0, 0, 1298, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26107, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26027, 256, 103, 112, 1318, 1322, 111, 110, 59, 16664, 102, 59, 49152, 55349, 56636, 115, 105, 108, 111, 110, 59, 17301, 117, 256, 97, 105, 1340, 1353, 108, 256, 59, 84, 1346, 1347, 27253, 105, 108, 100, 101, 59, 25154, 108, 105, 98, 114, 105, 117, 109, 59, 25036, 256, 99, 105, 1367, 1370, 114, 59, 24880, 109, 59, 27251, 97, 59, 17303, 109, 108, 32827, 203, 16587, 256, 105, 112, 1386, 1391, 115, 116, 115, 59, 25091, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 24903, 640, 99, 102, 105, 111, 115, 1413, 1416, 1421, 1458, 1484, 121, 59, 17444, 114, 59, 49152, 55349, 56585, 108, 108, 101, 100, 595, 1431, 0, 0, 1443, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26108, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26026, 880, 1466, 0, 1471, 0, 0, 1476, 102, 59, 49152, 55349, 56637, 65, 108, 108, 59, 25088, 114, 105, 101, 114, 116, 114, 102, 59, 24881, 99, 242, 1483, 1536, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1512, 1516, 1519, 1530, 1536, 1554, 1558, 1563, 1565, 1571, 1644, 1650, 99, 121, 59, 17411, 32827, 62, 16446, 109, 109, 97, 256, 59, 100, 1527, 1528, 17299, 59, 17372, 114, 101, 118, 101, 59, 16670, 384, 101, 105, 121, 1543, 1548, 1552, 100, 105, 108, 59, 16674, 114, 99, 59, 16668, 59, 17427, 111, 116, 59, 16672, 114, 59, 49152, 55349, 56586, 59, 25305, 112, 102, 59, 49152, 55349, 56638, 101, 97, 116, 101, 114, 768, 69, 70, 71, 76, 83, 84, 1589, 1604, 1614, 1622, 1627, 1638, 113, 117, 97, 108, 256, 59, 76, 1598, 1599, 25189, 101, 115, 115, 59, 25307, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25191, 114, 101, 97, 116, 101, 114, 59, 27298, 101, 115, 115, 59, 25207, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27262, 105, 108, 100, 101, 59, 25203, 99, 114, 59, 49152, 55349, 56482, 59, 25195, 1024, 65, 97, 99, 102, 105, 111, 115, 117, 1669, 1675, 1686, 1691, 1694, 1706, 1726, 1738, 82, 68, 99, 121, 59, 17450, 256, 99, 116, 1680, 1684, 101, 107, 59, 17095, 59, 16478, 105, 114, 99, 59, 16676, 114, 59, 24844, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 24843, 496, 1711, 0, 1714, 102, 59, 24845, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 25856, 256, 99, 116, 1731, 1733, 242, 1705, 114, 111, 107, 59, 16678, 109, 112, 324, 1744, 1752, 111, 119, 110, 72, 117, 109, 240, 303, 113, 117, 97, 108, 59, 25167, 1792, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1786, 1790, 1795, 1799, 1806, 1818, 1822, 1825, 1832, 1860, 1912, 1931, 1935, 1941, 99, 121, 59, 17429, 108, 105, 103, 59, 16690, 99, 121, 59, 17409, 99, 117, 116, 101, 32827, 205, 16589, 256, 105, 121, 1811, 1816, 114, 99, 32827, 206, 16590, 59, 17432, 111, 116, 59, 16688, 114, 59, 24849, 114, 97, 118, 101, 32827, 204, 16588, 384, 59, 97, 112, 1824, 1839, 1855, 256, 99, 103, 1844, 1847, 114, 59, 16682, 105, 110, 97, 114, 121, 73, 59, 24904, 108, 105, 101, 243, 989, 500, 1865, 0, 1890, 256, 59, 101, 1869, 1870, 25132, 256, 103, 114, 1875, 1880, 114, 97, 108, 59, 25131, 115, 101, 99, 116, 105, 111, 110, 59, 25282, 105, 115, 105, 98, 108, 101, 256, 67, 84, 1900, 1906, 111, 109, 109, 97, 59, 24675, 105, 109, 101, 115, 59, 24674, 384, 103, 112, 116, 1919, 1923, 1928, 111, 110, 59, 16686, 102, 59, 49152, 55349, 56640, 97, 59, 17305, 99, 114, 59, 24848, 105, 108, 100, 101, 59, 16680, 491, 1946, 0, 1950, 99, 121, 59, 17414, 108, 32827, 207, 16591, 640, 99, 102, 111, 115, 117, 1964, 1975, 1980, 1986, 2e3, 256, 105, 121, 1969, 1973, 114, 99, 59, 16692, 59, 17433, 114, 59, 49152, 55349, 56589, 112, 102, 59, 49152, 55349, 56641, 483, 1991, 0, 1996, 114, 59, 49152, 55349, 56485, 114, 99, 121, 59, 17416, 107, 99, 121, 59, 17412, 896, 72, 74, 97, 99, 102, 111, 115, 2020, 2024, 2028, 2033, 2045, 2050, 2056, 99, 121, 59, 17445, 99, 121, 59, 17420, 112, 112, 97, 59, 17306, 256, 101, 121, 2038, 2043, 100, 105, 108, 59, 16694, 59, 17434, 114, 59, 49152, 55349, 56590, 112, 102, 59, 49152, 55349, 56642, 99, 114, 59, 49152, 55349, 56486, 1408, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2085, 2089, 2092, 2128, 2147, 2483, 2488, 2503, 2509, 2615, 2631, 99, 121, 59, 17417, 32827, 60, 16444, 640, 99, 109, 110, 112, 114, 2103, 2108, 2113, 2116, 2125, 117, 116, 101, 59, 16697, 98, 100, 97, 59, 17307, 103, 59, 26602, 108, 97, 99, 101, 116, 114, 102, 59, 24850, 114, 59, 24990, 384, 97, 101, 121, 2135, 2140, 2145, 114, 111, 110, 59, 16701, 100, 105, 108, 59, 16699, 59, 17435, 256, 102, 115, 2152, 2416, 116, 1280, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2174, 2217, 2225, 2272, 2278, 2300, 2351, 2395, 912, 2410, 256, 110, 114, 2179, 2191, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26600, 114, 111, 119, 384, 59, 66, 82, 2201, 2202, 2206, 24976, 97, 114, 59, 25060, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25030, 101, 105, 108, 105, 110, 103, 59, 25352, 111, 501, 2231, 0, 2243, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26598, 110, 468, 2248, 0, 2258, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26977, 101, 99, 116, 111, 114, 256, 59, 66, 2267, 2268, 25027, 97, 114, 59, 26969, 108, 111, 111, 114, 59, 25354, 105, 103, 104, 116, 256, 65, 86, 2287, 2293, 114, 114, 111, 119, 59, 24980, 101, 99, 116, 111, 114, 59, 26958, 256, 101, 114, 2305, 2327, 101, 384, 59, 65, 86, 2313, 2314, 2320, 25251, 114, 114, 111, 119, 59, 24996, 101, 99, 116, 111, 114, 59, 26970, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 2340, 2341, 2345, 25266, 97, 114, 59, 27087, 113, 117, 97, 108, 59, 25268, 112, 384, 68, 84, 86, 2359, 2370, 2380, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26961, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26976, 101, 99, 116, 111, 114, 256, 59, 66, 2390, 2391, 25023, 97, 114, 59, 26968, 101, 99, 116, 111, 114, 256, 59, 66, 2405, 2406, 25020, 97, 114, 59, 26962, 105, 103, 104, 116, 225, 924, 115, 768, 69, 70, 71, 76, 83, 84, 2430, 2443, 2453, 2461, 2466, 2477, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 25306, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25190, 114, 101, 97, 116, 101, 114, 59, 25206, 101, 115, 115, 59, 27297, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27261, 105, 108, 100, 101, 59, 25202, 114, 59, 49152, 55349, 56591, 256, 59, 101, 2493, 2494, 25304, 102, 116, 97, 114, 114, 111, 119, 59, 25050, 105, 100, 111, 116, 59, 16703, 384, 110, 112, 119, 2516, 2582, 2587, 103, 512, 76, 82, 108, 114, 2526, 2551, 2562, 2576, 101, 102, 116, 256, 65, 82, 2534, 2540, 114, 114, 111, 119, 59, 26613, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26615, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26614, 101, 102, 116, 256, 97, 114, 947, 2570, 105, 103, 104, 116, 225, 959, 105, 103, 104, 116, 225, 970, 102, 59, 49152, 55349, 56643, 101, 114, 256, 76, 82, 2594, 2604, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24985, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24984, 384, 99, 104, 116, 2622, 2624, 2626, 242, 2124, 59, 25008, 114, 111, 107, 59, 16705, 59, 25194, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 2650, 2653, 2656, 2679, 2684, 2693, 2699, 2702, 112, 59, 26885, 121, 59, 17436, 256, 100, 108, 2661, 2671, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24671, 108, 105, 110, 116, 114, 102, 59, 24883, 114, 59, 49152, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 25107, 112, 102, 59, 49152, 55349, 56644, 99, 242, 2678, 59, 17308, 1152, 74, 97, 99, 101, 102, 111, 115, 116, 117, 2723, 2727, 2733, 2752, 2836, 2841, 3473, 3479, 3486, 99, 121, 59, 17418, 99, 117, 116, 101, 59, 16707, 384, 97, 101, 121, 2740, 2745, 2750, 114, 111, 110, 59, 16711, 100, 105, 108, 59, 16709, 59, 17437, 384, 103, 115, 119, 2759, 2800, 2830, 97, 116, 105, 118, 101, 384, 77, 84, 86, 2771, 2783, 2792, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24587, 104, 105, 256, 99, 110, 2790, 2776, 235, 2777, 101, 114, 121, 84, 104, 105, 238, 2777, 116, 101, 100, 256, 71, 76, 2808, 2822, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 242, 1651, 101, 115, 115, 76, 101, 115, 243, 2632, 76, 105, 110, 101, 59, 16394, 114, 59, 49152, 55349, 56593, 512, 66, 110, 112, 116, 2850, 2856, 2871, 2874, 114, 101, 97, 107, 59, 24672, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 16544, 102, 59, 24853, 1664, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 2901, 2902, 2922, 2940, 2977, 3051, 3076, 3166, 3204, 3238, 3288, 3425, 3461, 27372, 256, 111, 117, 2907, 2916, 110, 103, 114, 117, 101, 110, 116, 59, 25186, 112, 67, 97, 112, 59, 25197, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25126, 384, 108, 113, 120, 2947, 2954, 2971, 101, 109, 101, 110, 116, 59, 25097, 117, 97, 108, 256, 59, 84, 2962, 2963, 25184, 105, 108, 100, 101, 59, 49152, 8770, 824, 105, 115, 116, 115, 59, 25092, 114, 101, 97, 116, 101, 114, 896, 59, 69, 70, 71, 76, 83, 84, 2998, 2999, 3005, 3017, 3027, 3032, 3045, 25199, 113, 117, 97, 108, 59, 25201, 117, 108, 108, 69, 113, 117, 97, 108, 59, 49152, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 49152, 8811, 824, 101, 115, 115, 59, 25209, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10878, 824, 105, 108, 100, 101, 59, 25205, 117, 109, 112, 324, 3058, 3069, 111, 119, 110, 72, 117, 109, 112, 59, 49152, 8782, 824, 113, 117, 97, 108, 59, 49152, 8783, 824, 101, 256, 102, 115, 3082, 3111, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3098, 3099, 3105, 25322, 97, 114, 59, 49152, 10703, 824, 113, 117, 97, 108, 59, 25324, 115, 768, 59, 69, 71, 76, 83, 84, 3125, 3126, 3132, 3140, 3147, 3160, 25198, 113, 117, 97, 108, 59, 25200, 114, 101, 97, 116, 101, 114, 59, 25208, 101, 115, 115, 59, 49152, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10877, 824, 105, 108, 100, 101, 59, 25204, 101, 115, 116, 101, 100, 256, 71, 76, 3176, 3193, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 49152, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 49152, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 384, 59, 69, 83, 3218, 3219, 3227, 25216, 113, 117, 97, 108, 59, 49152, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25312, 256, 101, 105, 3243, 3257, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 25100, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3275, 3276, 3282, 25323, 97, 114, 59, 49152, 10704, 824, 113, 117, 97, 108, 59, 25325, 256, 113, 117, 3293, 3340, 117, 97, 114, 101, 83, 117, 256, 98, 112, 3304, 3321, 115, 101, 116, 256, 59, 69, 3312, 3315, 49152, 8847, 824, 113, 117, 97, 108, 59, 25314, 101, 114, 115, 101, 116, 256, 59, 69, 3331, 3334, 49152, 8848, 824, 113, 117, 97, 108, 59, 25315, 384, 98, 99, 112, 3347, 3364, 3406, 115, 101, 116, 256, 59, 69, 3355, 3358, 49152, 8834, 8402, 113, 117, 97, 108, 59, 25224, 99, 101, 101, 100, 115, 512, 59, 69, 83, 84, 3378, 3379, 3387, 3398, 25217, 113, 117, 97, 108, 59, 49152, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25313, 105, 108, 100, 101, 59, 49152, 8831, 824, 101, 114, 115, 101, 116, 256, 59, 69, 3416, 3419, 49152, 8835, 8402, 113, 117, 97, 108, 59, 25225, 105, 108, 100, 101, 512, 59, 69, 70, 84, 3438, 3439, 3445, 3455, 25153, 113, 117, 97, 108, 59, 25156, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25159, 105, 108, 100, 101, 59, 25161, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25124, 99, 114, 59, 49152, 55349, 56489, 105, 108, 100, 101, 32827, 209, 16593, 59, 17309, 1792, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3517, 3522, 3529, 3541, 3547, 3552, 3559, 3580, 3586, 3616, 3618, 3634, 3647, 3652, 108, 105, 103, 59, 16722, 99, 117, 116, 101, 32827, 211, 16595, 256, 105, 121, 3534, 3539, 114, 99, 32827, 212, 16596, 59, 17438, 98, 108, 97, 99, 59, 16720, 114, 59, 49152, 55349, 56594, 114, 97, 118, 101, 32827, 210, 16594, 384, 97, 101, 105, 3566, 3570, 3574, 99, 114, 59, 16716, 103, 97, 59, 17321, 99, 114, 111, 110, 59, 17311, 112, 102, 59, 49152, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 256, 68, 81, 3598, 3610, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24604, 117, 111, 116, 101, 59, 24600, 59, 27220, 256, 99, 108, 3623, 3628, 114, 59, 49152, 55349, 56490, 97, 115, 104, 32827, 216, 16600, 105, 364, 3639, 3644, 100, 101, 32827, 213, 16597, 101, 115, 59, 27191, 109, 108, 32827, 214, 16598, 101, 114, 256, 66, 80, 3659, 3680, 256, 97, 114, 3664, 3667, 114, 59, 24638, 97, 99, 256, 101, 107, 3674, 3676, 59, 25566, 101, 116, 59, 25524, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25564, 1152, 97, 99, 102, 104, 105, 108, 111, 114, 115, 3711, 3719, 3722, 3727, 3730, 3732, 3741, 3760, 3836, 114, 116, 105, 97, 108, 68, 59, 25090, 121, 59, 17439, 114, 59, 49152, 55349, 56595, 105, 59, 17318, 59, 17312, 117, 115, 77, 105, 110, 117, 115, 59, 16561, 256, 105, 112, 3746, 3757, 110, 99, 97, 114, 101, 112, 108, 97, 110, 229, 1693, 102, 59, 24857, 512, 59, 101, 105, 111, 3769, 3770, 3808, 3812, 27323, 99, 101, 100, 101, 115, 512, 59, 69, 83, 84, 3784, 3785, 3791, 3802, 25210, 113, 117, 97, 108, 59, 27311, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25212, 105, 108, 100, 101, 59, 25214, 109, 101, 59, 24627, 256, 100, 112, 3817, 3822, 117, 99, 116, 59, 25103, 111, 114, 116, 105, 111, 110, 256, 59, 97, 549, 3833, 108, 59, 25117, 256, 99, 105, 3841, 3846, 114, 59, 49152, 55349, 56491, 59, 17320, 512, 85, 102, 111, 115, 3857, 3862, 3867, 3871, 79, 84, 32827, 34, 16418, 114, 59, 49152, 55349, 56596, 112, 102, 59, 24858, 99, 114, 59, 49152, 55349, 56492, 1536, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 3902, 3907, 3911, 3936, 3955, 4007, 4010, 4013, 4246, 4265, 4276, 4286, 97, 114, 114, 59, 26896, 71, 32827, 174, 16558, 384, 99, 110, 114, 3918, 3923, 3926, 117, 116, 101, 59, 16724, 103, 59, 26603, 114, 256, 59, 116, 3932, 3933, 24992, 108, 59, 26902, 384, 97, 101, 121, 3943, 3948, 3953, 114, 111, 110, 59, 16728, 100, 105, 108, 59, 16726, 59, 17440, 256, 59, 118, 3960, 3961, 24860, 101, 114, 115, 101, 256, 69, 85, 3970, 3993, 256, 108, 113, 3975, 3982, 101, 109, 101, 110, 116, 59, 25099, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 25035, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26991, 114, 187, 3961, 111, 59, 17313, 103, 104, 116, 1024, 65, 67, 68, 70, 84, 85, 86, 97, 4033, 4075, 4083, 4130, 4136, 4187, 4231, 984, 256, 110, 114, 4038, 4050, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26601, 114, 111, 119, 384, 59, 66, 76, 4060, 4061, 4065, 24978, 97, 114, 59, 25061, 101, 102, 116, 65, 114, 114, 111, 119, 59, 25028, 101, 105, 108, 105, 110, 103, 59, 25353, 111, 501, 4089, 0, 4101, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26599, 110, 468, 4106, 0, 4116, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26973, 101, 99, 116, 111, 114, 256, 59, 66, 4125, 4126, 25026, 97, 114, 59, 26965, 108, 111, 111, 114, 59, 25355, 256, 101, 114, 4141, 4163, 101, 384, 59, 65, 86, 4149, 4150, 4156, 25250, 114, 114, 111, 119, 59, 24998, 101, 99, 116, 111, 114, 59, 26971, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 4176, 4177, 4181, 25267, 97, 114, 59, 27088, 113, 117, 97, 108, 59, 25269, 112, 384, 68, 84, 86, 4195, 4206, 4216, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26959, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26972, 101, 99, 116, 111, 114, 256, 59, 66, 4226, 4227, 25022, 97, 114, 59, 26964, 101, 99, 116, 111, 114, 256, 59, 66, 4241, 4242, 25024, 97, 114, 59, 26963, 256, 112, 117, 4251, 4254, 102, 59, 24861, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 26992, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25051, 256, 99, 104, 4281, 4284, 114, 59, 24859, 59, 25009, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 27124, 1664, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4324, 4337, 4343, 4349, 4377, 4382, 4433, 4438, 4449, 4455, 4533, 4539, 4543, 256, 67, 99, 4329, 4334, 72, 99, 121, 59, 17449, 121, 59, 17448, 70, 84, 99, 121, 59, 17452, 99, 117, 116, 101, 59, 16730, 640, 59, 97, 101, 105, 121, 4360, 4361, 4366, 4371, 4375, 27324, 114, 111, 110, 59, 16736, 100, 105, 108, 59, 16734, 114, 99, 59, 16732, 59, 17441, 114, 59, 49152, 55349, 56598, 111, 114, 116, 512, 68, 76, 82, 85, 4394, 4404, 4414, 4425, 111, 119, 110, 65, 114, 114, 111, 119, 187, 1054, 101, 102, 116, 65, 114, 114, 111, 119, 187, 2202, 105, 103, 104, 116, 65, 114, 114, 111, 119, 187, 4061, 112, 65, 114, 114, 111, 119, 59, 24977, 103, 109, 97, 59, 17315, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 25112, 112, 102, 59, 49152, 55349, 56650, 626, 4461, 0, 0, 4464, 116, 59, 25114, 97, 114, 101, 512, 59, 73, 83, 85, 4475, 4476, 4489, 4527, 26017, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 25235, 117, 256, 98, 112, 4495, 4510, 115, 101, 116, 256, 59, 69, 4503, 4504, 25231, 113, 117, 97, 108, 59, 25233, 101, 114, 115, 101, 116, 256, 59, 69, 4520, 4521, 25232, 113, 117, 97, 108, 59, 25234, 110, 105, 111, 110, 59, 25236, 99, 114, 59, 49152, 55349, 56494, 97, 114, 59, 25286, 512, 98, 99, 109, 112, 4552, 4571, 4617, 4619, 256, 59, 115, 4557, 4558, 25296, 101, 116, 256, 59, 69, 4557, 4565, 113, 117, 97, 108, 59, 25222, 256, 99, 104, 4576, 4613, 101, 101, 100, 115, 512, 59, 69, 83, 84, 4589, 4590, 4596, 4607, 25211, 113, 117, 97, 108, 59, 27312, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25213, 105, 108, 100, 101, 59, 25215, 84, 104, 225, 3980, 59, 25105, 384, 59, 101, 115, 4626, 4627, 4643, 25297, 114, 115, 101, 116, 256, 59, 69, 4636, 4637, 25219, 113, 117, 97, 108, 59, 25223, 101, 116, 187, 4627, 1408, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 4670, 4676, 4681, 4693, 4702, 4721, 4726, 4767, 4802, 4808, 4817, 79, 82, 78, 32827, 222, 16606, 65, 68, 69, 59, 24866, 256, 72, 99, 4686, 4690, 99, 121, 59, 17419, 121, 59, 17446, 256, 98, 117, 4698, 4700, 59, 16393, 59, 17316, 384, 97, 101, 121, 4709, 4714, 4719, 114, 111, 110, 59, 16740, 100, 105, 108, 59, 16738, 59, 17442, 114, 59, 49152, 55349, 56599, 256, 101, 105, 4731, 4745, 498, 4736, 0, 4743, 101, 102, 111, 114, 101, 59, 25140, 97, 59, 17304, 256, 99, 110, 4750, 4760, 107, 83, 112, 97, 99, 101, 59, 49152, 8287, 8202, 83, 112, 97, 99, 101, 59, 24585, 108, 100, 101, 512, 59, 69, 70, 84, 4779, 4780, 4786, 4796, 25148, 113, 117, 97, 108, 59, 25155, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25157, 105, 108, 100, 101, 59, 25160, 112, 102, 59, 49152, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 24795, 256, 99, 116, 4822, 4827, 114, 59, 49152, 55349, 56495, 114, 111, 107, 59, 16742, 2785, 4855, 4878, 4890, 4902, 0, 4908, 4913, 0, 0, 0, 0, 0, 4920, 4925, 4983, 4997, 0, 5119, 5124, 5130, 5136, 256, 99, 114, 4859, 4865, 117, 116, 101, 32827, 218, 16602, 114, 256, 59, 111, 4871, 4872, 24991, 99, 105, 114, 59, 26953, 114, 483, 4883, 0, 4886, 121, 59, 17422, 118, 101, 59, 16748, 256, 105, 121, 4894, 4899, 114, 99, 32827, 219, 16603, 59, 17443, 98, 108, 97, 99, 59, 16752, 114, 59, 49152, 55349, 56600, 114, 97, 118, 101, 32827, 217, 16601, 97, 99, 114, 59, 16746, 256, 100, 105, 4929, 4969, 101, 114, 256, 66, 80, 4936, 4957, 256, 97, 114, 4941, 4944, 114, 59, 16479, 97, 99, 256, 101, 107, 4951, 4953, 59, 25567, 101, 116, 59, 25525, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25565, 111, 110, 256, 59, 80, 4976, 4977, 25283, 108, 117, 115, 59, 25230, 256, 103, 112, 4987, 4991, 111, 110, 59, 16754, 102, 59, 49152, 55349, 56652, 1024, 65, 68, 69, 84, 97, 100, 112, 115, 5013, 5038, 5048, 5060, 1e3, 5074, 5079, 5107, 114, 114, 111, 119, 384, 59, 66, 68, 4432, 5024, 5028, 97, 114, 59, 26898, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25029, 111, 119, 110, 65, 114, 114, 111, 119, 59, 24981, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26990, 101, 101, 256, 59, 65, 5067, 5068, 25253, 114, 114, 111, 119, 59, 24997, 111, 119, 110, 225, 1011, 101, 114, 256, 76, 82, 5086, 5096, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24982, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24983, 105, 256, 59, 108, 5113, 5114, 17362, 111, 110, 59, 17317, 105, 110, 103, 59, 16750, 99, 114, 59, 49152, 55349, 56496, 105, 108, 100, 101, 59, 16744, 109, 108, 32827, 220, 16604, 1152, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5159, 5164, 5168, 5171, 5182, 5253, 5258, 5264, 5270, 97, 115, 104, 59, 25259, 97, 114, 59, 27371, 121, 59, 17426, 97, 115, 104, 256, 59, 108, 5179, 5180, 25257, 59, 27366, 256, 101, 114, 5187, 5189, 59, 25281, 384, 98, 116, 121, 5196, 5200, 5242, 97, 114, 59, 24598, 256, 59, 105, 5199, 5205, 99, 97, 108, 512, 66, 76, 83, 84, 5217, 5221, 5226, 5236, 97, 114, 59, 25123, 105, 110, 101, 59, 16508, 101, 112, 97, 114, 97, 116, 111, 114, 59, 26456, 105, 108, 100, 101, 59, 25152, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 24586, 114, 59, 49152, 55349, 56601, 112, 102, 59, 49152, 55349, 56653, 99, 114, 59, 49152, 55349, 56497, 100, 97, 115, 104, 59, 25258, 640, 99, 101, 102, 111, 115, 5287, 5292, 5297, 5302, 5308, 105, 114, 99, 59, 16756, 100, 103, 101, 59, 25280, 114, 59, 49152, 55349, 56602, 112, 102, 59, 49152, 55349, 56654, 99, 114, 59, 49152, 55349, 56498, 512, 102, 105, 111, 115, 5323, 5328, 5330, 5336, 114, 59, 49152, 55349, 56603, 59, 17310, 112, 102, 59, 49152, 55349, 56655, 99, 114, 59, 49152, 55349, 56499, 1152, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5361, 5365, 5369, 5373, 5380, 5391, 5396, 5402, 5408, 99, 121, 59, 17455, 99, 121, 59, 17415, 99, 121, 59, 17454, 99, 117, 116, 101, 32827, 221, 16605, 256, 105, 121, 5385, 5389, 114, 99, 59, 16758, 59, 17451, 114, 59, 49152, 55349, 56604, 112, 102, 59, 49152, 55349, 56656, 99, 114, 59, 49152, 55349, 56500, 109, 108, 59, 16760, 1024, 72, 97, 99, 100, 101, 102, 111, 115, 5429, 5433, 5439, 5451, 5455, 5469, 5472, 5476, 99, 121, 59, 17430, 99, 117, 116, 101, 59, 16761, 256, 97, 121, 5444, 5449, 114, 111, 110, 59, 16765, 59, 17431, 111, 116, 59, 16763, 498, 5460, 0, 5467, 111, 87, 105, 100, 116, 232, 2777, 97, 59, 17302, 114, 59, 24872, 112, 102, 59, 24868, 99, 114, 59, 49152, 55349, 56501, 3041, 5507, 5514, 5520, 0, 5552, 5558, 5567, 0, 0, 0, 0, 5574, 5595, 5611, 5727, 5741, 0, 5781, 5787, 5810, 5817, 0, 5822, 99, 117, 116, 101, 32827, 225, 16609, 114, 101, 118, 101, 59, 16643, 768, 59, 69, 100, 105, 117, 121, 5532, 5533, 5537, 5539, 5544, 5549, 25150, 59, 49152, 8766, 819, 59, 25151, 114, 99, 32827, 226, 16610, 116, 101, 32955, 180, 774, 59, 17456, 108, 105, 103, 32827, 230, 16614, 256, 59, 114, 178, 5562, 59, 49152, 55349, 56606, 114, 97, 118, 101, 32827, 224, 16608, 256, 101, 112, 5578, 5590, 256, 102, 112, 5583, 5588, 115, 121, 109, 59, 24885, 232, 5587, 104, 97, 59, 17329, 256, 97, 112, 5599, 99, 256, 99, 108, 5604, 5607, 114, 59, 16641, 103, 59, 27199, 612, 5616, 0, 0, 5642, 640, 59, 97, 100, 115, 118, 5626, 5627, 5631, 5633, 5639, 25127, 110, 100, 59, 27221, 59, 27228, 108, 111, 112, 101, 59, 27224, 59, 27226, 896, 59, 101, 108, 109, 114, 115, 122, 5656, 5657, 5659, 5662, 5695, 5711, 5721, 25120, 59, 27044, 101, 187, 5657, 115, 100, 256, 59, 97, 5669, 5670, 25121, 1121, 5680, 5682, 5684, 5686, 5688, 5690, 5692, 5694, 59, 27048, 59, 27049, 59, 27050, 59, 27051, 59, 27052, 59, 27053, 59, 27054, 59, 27055, 116, 256, 59, 118, 5701, 5702, 25119, 98, 256, 59, 100, 5708, 5709, 25278, 59, 27037, 256, 112, 116, 5716, 5719, 104, 59, 25122, 187, 185, 97, 114, 114, 59, 25468, 256, 103, 112, 5731, 5735, 111, 110, 59, 16645, 102, 59, 49152, 55349, 56658, 896, 59, 69, 97, 101, 105, 111, 112, 4801, 5755, 5757, 5762, 5764, 5767, 5770, 59, 27248, 99, 105, 114, 59, 27247, 59, 25162, 100, 59, 25163, 115, 59, 16423, 114, 111, 120, 256, 59, 101, 4801, 5778, 241, 5763, 105, 110, 103, 32827, 229, 16613, 384, 99, 116, 121, 5793, 5798, 5800, 114, 59, 49152, 55349, 56502, 59, 16426, 109, 112, 256, 59, 101, 4801, 5807, 241, 648, 105, 108, 100, 101, 32827, 227, 16611, 109, 108, 32827, 228, 16612, 256, 99, 105, 5826, 5832, 111, 110, 105, 110, 244, 626, 110, 116, 59, 27153, 2048, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 5869, 5873, 5936, 5948, 5955, 5960, 6008, 6013, 6112, 6118, 6201, 6224, 5901, 6461, 6472, 6512, 111, 116, 59, 27373, 256, 99, 114, 5878, 5918, 107, 512, 99, 101, 112, 115, 5888, 5893, 5901, 5907, 111, 110, 103, 59, 25164, 112, 115, 105, 108, 111, 110, 59, 17398, 114, 105, 109, 101, 59, 24629, 105, 109, 256, 59, 101, 5914, 5915, 25149, 113, 59, 25293, 374, 5922, 5926, 101, 101, 59, 25277, 101, 100, 256, 59, 103, 5932, 5933, 25349, 101, 187, 5933, 114, 107, 256, 59, 116, 4956, 5943, 98, 114, 107, 59, 25526, 256, 111, 121, 5889, 5953, 59, 17457, 113, 117, 111, 59, 24606, 640, 99, 109, 112, 114, 116, 5971, 5979, 5985, 5988, 5992, 97, 117, 115, 256, 59, 101, 266, 265, 112, 116, 121, 118, 59, 27056, 115, 233, 5900, 110, 111, 245, 275, 384, 97, 104, 119, 5999, 6001, 6003, 59, 17330, 59, 24886, 101, 101, 110, 59, 25196, 114, 59, 49152, 55349, 56607, 103, 896, 99, 111, 115, 116, 117, 118, 119, 6029, 6045, 6067, 6081, 6101, 6107, 6110, 384, 97, 105, 117, 6036, 6038, 6042, 240, 1888, 114, 99, 59, 26095, 112, 187, 4977, 384, 100, 112, 116, 6052, 6056, 6061, 111, 116, 59, 27136, 108, 117, 115, 59, 27137, 105, 109, 101, 115, 59, 27138, 625, 6073, 0, 0, 6078, 99, 117, 112, 59, 27142, 97, 114, 59, 26117, 114, 105, 97, 110, 103, 108, 101, 256, 100, 117, 6093, 6098, 111, 119, 110, 59, 26045, 112, 59, 26035, 112, 108, 117, 115, 59, 27140, 101, 229, 5188, 229, 5293, 97, 114, 111, 119, 59, 26893, 384, 97, 107, 111, 6125, 6182, 6197, 256, 99, 110, 6130, 6179, 107, 384, 108, 115, 116, 6138, 1451, 6146, 111, 122, 101, 110, 103, 101, 59, 27115, 114, 105, 97, 110, 103, 108, 101, 512, 59, 100, 108, 114, 6162, 6163, 6168, 6173, 26036, 111, 119, 110, 59, 26046, 101, 102, 116, 59, 26050, 105, 103, 104, 116, 59, 26040, 107, 59, 25635, 433, 6187, 0, 6195, 434, 6191, 0, 6193, 59, 26002, 59, 26001, 52, 59, 26003, 99, 107, 59, 25992, 256, 101, 111, 6206, 6221, 256, 59, 113, 6211, 6214, 49152, 61, 8421, 117, 105, 118, 59, 49152, 8801, 8421, 116, 59, 25360, 512, 112, 116, 119, 120, 6233, 6238, 6247, 6252, 102, 59, 49152, 55349, 56659, 256, 59, 116, 5067, 6243, 111, 109, 187, 5068, 116, 105, 101, 59, 25288, 1536, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 6277, 6294, 6314, 6331, 6359, 6363, 6380, 6399, 6405, 6410, 6416, 6433, 512, 76, 82, 108, 114, 6286, 6288, 6290, 6292, 59, 25943, 59, 25940, 59, 25942, 59, 25939, 640, 59, 68, 85, 100, 117, 6305, 6306, 6308, 6310, 6312, 25936, 59, 25958, 59, 25961, 59, 25956, 59, 25959, 512, 76, 82, 108, 114, 6323, 6325, 6327, 6329, 59, 25949, 59, 25946, 59, 25948, 59, 25945, 896, 59, 72, 76, 82, 104, 108, 114, 6346, 6347, 6349, 6351, 6353, 6355, 6357, 25937, 59, 25964, 59, 25955, 59, 25952, 59, 25963, 59, 25954, 59, 25951, 111, 120, 59, 27081, 512, 76, 82, 108, 114, 6372, 6374, 6376, 6378, 59, 25941, 59, 25938, 59, 25872, 59, 25868, 640, 59, 68, 85, 100, 117, 1725, 6391, 6393, 6395, 6397, 59, 25957, 59, 25960, 59, 25900, 59, 25908, 105, 110, 117, 115, 59, 25247, 108, 117, 115, 59, 25246, 105, 109, 101, 115, 59, 25248, 512, 76, 82, 108, 114, 6425, 6427, 6429, 6431, 59, 25947, 59, 25944, 59, 25880, 59, 25876, 896, 59, 72, 76, 82, 104, 108, 114, 6448, 6449, 6451, 6453, 6455, 6457, 6459, 25858, 59, 25962, 59, 25953, 59, 25950, 59, 25916, 59, 25892, 59, 25884, 256, 101, 118, 291, 6466, 98, 97, 114, 32827, 166, 16550, 512, 99, 101, 105, 111, 6481, 6486, 6490, 6496, 114, 59, 49152, 55349, 56503, 109, 105, 59, 24655, 109, 256, 59, 101, 5914, 5916, 108, 384, 59, 98, 104, 6504, 6505, 6507, 16476, 59, 27077, 115, 117, 98, 59, 26568, 364, 6516, 6526, 108, 256, 59, 101, 6521, 6522, 24610, 116, 187, 6522, 112, 384, 59, 69, 101, 303, 6533, 6535, 59, 27310, 256, 59, 113, 1756, 1755, 3297, 6567, 0, 6632, 6673, 6677, 6706, 0, 6711, 6736, 0, 0, 6836, 0, 0, 6849, 0, 0, 6945, 6958, 6989, 6994, 0, 7165, 0, 7180, 384, 99, 112, 114, 6573, 6578, 6621, 117, 116, 101, 59, 16647, 768, 59, 97, 98, 99, 100, 115, 6591, 6592, 6596, 6602, 6613, 6617, 25129, 110, 100, 59, 27204, 114, 99, 117, 112, 59, 27209, 256, 97, 117, 6607, 6610, 112, 59, 27211, 112, 59, 27207, 111, 116, 59, 27200, 59, 49152, 8745, 65024, 256, 101, 111, 6626, 6629, 116, 59, 24641, 238, 1683, 512, 97, 101, 105, 117, 6640, 6651, 6657, 6661, 496, 6645, 0, 6648, 115, 59, 27213, 111, 110, 59, 16653, 100, 105, 108, 32827, 231, 16615, 114, 99, 59, 16649, 112, 115, 256, 59, 115, 6668, 6669, 27212, 109, 59, 27216, 111, 116, 59, 16651, 384, 100, 109, 110, 6683, 6688, 6694, 105, 108, 32955, 184, 429, 112, 116, 121, 118, 59, 27058, 116, 33024, 162, 59, 101, 6701, 6702, 16546, 114, 228, 434, 114, 59, 49152, 55349, 56608, 384, 99, 101, 105, 6717, 6720, 6733, 121, 59, 17479, 99, 107, 256, 59, 109, 6727, 6728, 26387, 97, 114, 107, 187, 6728, 59, 17351, 114, 896, 59, 69, 99, 101, 102, 109, 115, 6751, 6752, 6754, 6763, 6820, 6826, 6830, 26059, 59, 27075, 384, 59, 101, 108, 6761, 6762, 6765, 17094, 113, 59, 25175, 101, 609, 6772, 0, 0, 6792, 114, 114, 111, 119, 256, 108, 114, 6780, 6785, 101, 102, 116, 59, 25018, 105, 103, 104, 116, 59, 25019, 640, 82, 83, 97, 99, 100, 6802, 6804, 6806, 6810, 6815, 187, 3911, 59, 25800, 115, 116, 59, 25243, 105, 114, 99, 59, 25242, 97, 115, 104, 59, 25245, 110, 105, 110, 116, 59, 27152, 105, 100, 59, 27375, 99, 105, 114, 59, 27074, 117, 98, 115, 256, 59, 117, 6843, 6844, 26211, 105, 116, 187, 6844, 748, 6855, 6868, 6906, 0, 6922, 111, 110, 256, 59, 101, 6861, 6862, 16442, 256, 59, 113, 199, 198, 621, 6873, 0, 0, 6882, 97, 256, 59, 116, 6878, 6879, 16428, 59, 16448, 384, 59, 102, 108, 6888, 6889, 6891, 25089, 238, 4448, 101, 256, 109, 120, 6897, 6902, 101, 110, 116, 187, 6889, 101, 243, 589, 487, 6910, 0, 6919, 256, 59, 100, 4795, 6914, 111, 116, 59, 27245, 110, 244, 582, 384, 102, 114, 121, 6928, 6932, 6935, 59, 49152, 55349, 56660, 111, 228, 596, 33024, 169, 59, 115, 341, 6941, 114, 59, 24855, 256, 97, 111, 6949, 6953, 114, 114, 59, 25013, 115, 115, 59, 26391, 256, 99, 117, 6962, 6967, 114, 59, 49152, 55349, 56504, 256, 98, 112, 6972, 6980, 256, 59, 101, 6977, 6978, 27343, 59, 27345, 256, 59, 101, 6985, 6986, 27344, 59, 27346, 100, 111, 116, 59, 25327, 896, 100, 101, 108, 112, 114, 118, 119, 7008, 7020, 7031, 7042, 7084, 7124, 7161, 97, 114, 114, 256, 108, 114, 7016, 7018, 59, 26936, 59, 26933, 624, 7026, 0, 0, 7029, 114, 59, 25310, 99, 59, 25311, 97, 114, 114, 256, 59, 112, 7039, 7040, 25014, 59, 26941, 768, 59, 98, 99, 100, 111, 115, 7055, 7056, 7062, 7073, 7077, 7080, 25130, 114, 99, 97, 112, 59, 27208, 256, 97, 117, 7067, 7070, 112, 59, 27206, 112, 59, 27210, 111, 116, 59, 25229, 114, 59, 27205, 59, 49152, 8746, 65024, 512, 97, 108, 114, 118, 7093, 7103, 7134, 7139, 114, 114, 256, 59, 109, 7100, 7101, 25015, 59, 26940, 121, 384, 101, 118, 119, 7111, 7124, 7128, 113, 624, 7118, 0, 0, 7122, 114, 101, 227, 7027, 117, 227, 7029, 101, 101, 59, 25294, 101, 100, 103, 101, 59, 25295, 101, 110, 32827, 164, 16548, 101, 97, 114, 114, 111, 119, 256, 108, 114, 7150, 7155, 101, 102, 116, 187, 7040, 105, 103, 104, 116, 187, 7101, 101, 228, 7133, 256, 99, 105, 7169, 7175, 111, 110, 105, 110, 244, 503, 110, 116, 59, 25137, 108, 99, 116, 121, 59, 25389, 2432, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 7224, 7227, 7231, 7261, 7273, 7285, 7306, 7326, 7340, 7351, 7419, 7423, 7437, 7547, 7569, 7595, 7611, 7622, 7629, 114, 242, 897, 97, 114, 59, 26981, 512, 103, 108, 114, 115, 7240, 7245, 7250, 7252, 103, 101, 114, 59, 24608, 101, 116, 104, 59, 24888, 242, 4403, 104, 256, 59, 118, 7258, 7259, 24592, 187, 2314, 363, 7265, 7271, 97, 114, 111, 119, 59, 26895, 97, 227, 789, 256, 97, 121, 7278, 7283, 114, 111, 110, 59, 16655, 59, 17460, 384, 59, 97, 111, 818, 7292, 7300, 256, 103, 114, 703, 7297, 114, 59, 25034, 116, 115, 101, 113, 59, 27255, 384, 103, 108, 109, 7313, 7316, 7320, 32827, 176, 16560, 116, 97, 59, 17332, 112, 116, 121, 118, 59, 27057, 256, 105, 114, 7331, 7336, 115, 104, 116, 59, 27007, 59, 49152, 55349, 56609, 97, 114, 256, 108, 114, 7347, 7349, 187, 2268, 187, 4126, 640, 97, 101, 103, 115, 118, 7362, 888, 7382, 7388, 7392, 109, 384, 59, 111, 115, 806, 7370, 7380, 110, 100, 256, 59, 115, 806, 7377, 117, 105, 116, 59, 26214, 97, 109, 109, 97, 59, 17373, 105, 110, 59, 25330, 384, 59, 105, 111, 7399, 7400, 7416, 16631, 100, 101, 33024, 247, 59, 111, 7399, 7408, 110, 116, 105, 109, 101, 115, 59, 25287, 110, 248, 7415, 99, 121, 59, 17490, 99, 623, 7430, 0, 0, 7434, 114, 110, 59, 25374, 111, 112, 59, 25357, 640, 108, 112, 116, 117, 119, 7448, 7453, 7458, 7497, 7509, 108, 97, 114, 59, 16420, 102, 59, 49152, 55349, 56661, 640, 59, 101, 109, 112, 115, 779, 7469, 7479, 7485, 7490, 113, 256, 59, 100, 850, 7475, 111, 116, 59, 25169, 105, 110, 117, 115, 59, 25144, 108, 117, 115, 59, 25108, 113, 117, 97, 114, 101, 59, 25249, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 229, 250, 110, 384, 97, 100, 104, 4398, 7517, 7527, 111, 119, 110, 97, 114, 114, 111, 119, 243, 7299, 97, 114, 112, 111, 111, 110, 256, 108, 114, 7538, 7542, 101, 102, 244, 7348, 105, 103, 104, 244, 7350, 354, 7551, 7557, 107, 97, 114, 111, 247, 3906, 623, 7562, 0, 0, 7566, 114, 110, 59, 25375, 111, 112, 59, 25356, 384, 99, 111, 116, 7576, 7587, 7590, 256, 114, 121, 7581, 7585, 59, 49152, 55349, 56505, 59, 17493, 108, 59, 27126, 114, 111, 107, 59, 16657, 256, 100, 114, 7600, 7604, 111, 116, 59, 25329, 105, 256, 59, 102, 7610, 6166, 26047, 256, 97, 104, 7616, 7619, 114, 242, 1065, 97, 242, 4006, 97, 110, 103, 108, 101, 59, 27046, 256, 99, 105, 7634, 7637, 121, 59, 17503, 103, 114, 97, 114, 114, 59, 26623, 2304, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 7681, 7689, 7705, 7736, 1400, 7740, 7753, 7777, 7806, 7845, 7855, 7869, 7905, 7978, 7991, 8004, 8014, 8026, 256, 68, 111, 7686, 7476, 111, 244, 7305, 256, 99, 115, 7694, 7700, 117, 116, 101, 32827, 233, 16617, 116, 101, 114, 59, 27246, 512, 97, 105, 111, 121, 7714, 7719, 7729, 7734, 114, 111, 110, 59, 16667, 114, 256, 59, 99, 7725, 7726, 25174, 32827, 234, 16618, 108, 111, 110, 59, 25173, 59, 17485, 111, 116, 59, 16663, 256, 68, 114, 7745, 7749, 111, 116, 59, 25170, 59, 49152, 55349, 56610, 384, 59, 114, 115, 7760, 7761, 7767, 27290, 97, 118, 101, 32827, 232, 16616, 256, 59, 100, 7772, 7773, 27286, 111, 116, 59, 27288, 512, 59, 105, 108, 115, 7786, 7787, 7794, 7796, 27289, 110, 116, 101, 114, 115, 59, 25575, 59, 24851, 256, 59, 100, 7801, 7802, 27285, 111, 116, 59, 27287, 384, 97, 112, 115, 7813, 7817, 7831, 99, 114, 59, 16659, 116, 121, 384, 59, 115, 118, 7826, 7827, 7829, 25093, 101, 116, 187, 7827, 112, 256, 49, 59, 7837, 7844, 307, 7841, 7843, 59, 24580, 59, 24581, 24579, 256, 103, 115, 7850, 7852, 59, 16715, 112, 59, 24578, 256, 103, 112, 7860, 7864, 111, 110, 59, 16665, 102, 59, 49152, 55349, 56662, 384, 97, 108, 115, 7876, 7886, 7890, 114, 256, 59, 115, 7882, 7883, 25301, 108, 59, 27107, 117, 115, 59, 27249, 105, 384, 59, 108, 118, 7898, 7899, 7903, 17333, 111, 110, 187, 7899, 59, 17397, 512, 99, 115, 117, 118, 7914, 7923, 7947, 7971, 256, 105, 111, 7919, 7729, 114, 99, 187, 7726, 617, 7929, 0, 0, 7931, 237, 1352, 97, 110, 116, 256, 103, 108, 7938, 7942, 116, 114, 187, 7773, 101, 115, 115, 187, 7802, 384, 97, 101, 105, 7954, 7958, 7962, 108, 115, 59, 16445, 115, 116, 59, 25183, 118, 256, 59, 68, 565, 7968, 68, 59, 27256, 112, 97, 114, 115, 108, 59, 27109, 256, 68, 97, 7983, 7987, 111, 116, 59, 25171, 114, 114, 59, 26993, 384, 99, 100, 105, 7998, 8001, 7928, 114, 59, 24879, 111, 244, 850, 256, 97, 104, 8009, 8011, 59, 17335, 32827, 240, 16624, 256, 109, 114, 8019, 8023, 108, 32827, 235, 16619, 111, 59, 24748, 384, 99, 105, 112, 8033, 8036, 8039, 108, 59, 16417, 115, 244, 1390, 256, 101, 111, 8044, 8052, 99, 116, 97, 116, 105, 111, 238, 1369, 110, 101, 110, 116, 105, 97, 108, 229, 1401, 2529, 8082, 0, 8094, 0, 8097, 8103, 0, 0, 8134, 8140, 0, 8147, 0, 8166, 8170, 8192, 0, 8200, 8282, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7748, 121, 59, 17476, 109, 97, 108, 101, 59, 26176, 384, 105, 108, 114, 8109, 8115, 8129, 108, 105, 103, 59, 32768, 64259, 617, 8121, 0, 0, 8125, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 49152, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 49152, 102, 106, 384, 97, 108, 116, 8153, 8156, 8161, 116, 59, 26221, 105, 103, 59, 32768, 64258, 110, 115, 59, 26033, 111, 102, 59, 16786, 496, 8174, 0, 8179, 102, 59, 49152, 55349, 56663, 256, 97, 107, 1471, 8183, 256, 59, 118, 8188, 8189, 25300, 59, 27353, 97, 114, 116, 105, 110, 116, 59, 27149, 256, 97, 111, 8204, 8277, 256, 99, 115, 8209, 8274, 945, 8218, 8240, 8248, 8261, 8264, 0, 8272, 946, 8226, 8229, 8231, 8234, 8236, 0, 8238, 32827, 189, 16573, 59, 24915, 32827, 188, 16572, 59, 24917, 59, 24921, 59, 24923, 435, 8244, 0, 8246, 59, 24916, 59, 24918, 692, 8254, 8257, 0, 0, 8259, 32827, 190, 16574, 59, 24919, 59, 24924, 53, 59, 24920, 438, 8268, 0, 8270, 59, 24922, 59, 24925, 56, 59, 24926, 108, 59, 24644, 119, 110, 59, 25378, 99, 114, 59, 49152, 55349, 56507, 2176, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 8322, 8329, 8351, 8357, 8368, 8372, 8432, 8437, 8442, 8447, 8451, 8466, 8504, 791, 8510, 8530, 8606, 256, 59, 108, 1613, 8327, 59, 27276, 384, 99, 109, 112, 8336, 8341, 8349, 117, 116, 101, 59, 16885, 109, 97, 256, 59, 100, 8348, 7386, 17331, 59, 27270, 114, 101, 118, 101, 59, 16671, 256, 105, 121, 8362, 8366, 114, 99, 59, 16669, 59, 17459, 111, 116, 59, 16673, 512, 59, 108, 113, 115, 1598, 1602, 8381, 8393, 384, 59, 113, 115, 1598, 1612, 8388, 108, 97, 110, 244, 1637, 512, 59, 99, 100, 108, 1637, 8402, 8405, 8421, 99, 59, 27305, 111, 116, 256, 59, 111, 8412, 8413, 27264, 256, 59, 108, 8418, 8419, 27266, 59, 27268, 256, 59, 101, 8426, 8429, 49152, 8923, 65024, 115, 59, 27284, 114, 59, 49152, 55349, 56612, 256, 59, 103, 1651, 1563, 109, 101, 108, 59, 24887, 99, 121, 59, 17491, 512, 59, 69, 97, 106, 1626, 8460, 8462, 8464, 59, 27282, 59, 27301, 59, 27300, 512, 69, 97, 101, 115, 8475, 8477, 8489, 8500, 59, 25193, 112, 256, 59, 112, 8483, 8484, 27274, 114, 111, 120, 187, 8484, 256, 59, 113, 8494, 8495, 27272, 256, 59, 113, 8494, 8475, 105, 109, 59, 25319, 112, 102, 59, 49152, 55349, 56664, 256, 99, 105, 8515, 8518, 114, 59, 24842, 109, 384, 59, 101, 108, 1643, 8526, 8528, 59, 27278, 59, 27280, 33536, 62, 59, 99, 100, 108, 113, 114, 1518, 8544, 8554, 8558, 8563, 8569, 256, 99, 105, 8549, 8551, 59, 27303, 114, 59, 27258, 111, 116, 59, 25303, 80, 97, 114, 59, 27029, 117, 101, 115, 116, 59, 27260, 640, 97, 100, 101, 108, 115, 8580, 8554, 8592, 1622, 8603, 496, 8585, 0, 8590, 112, 114, 111, 248, 8350, 114, 59, 27e3, 113, 256, 108, 113, 1599, 8598, 108, 101, 115, 243, 8328, 105, 237, 1643, 256, 101, 110, 8611, 8621, 114, 116, 110, 101, 113, 113, 59, 49152, 8809, 65024, 197, 8618, 1280, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 8644, 8647, 8689, 8693, 8698, 8728, 8733, 8751, 8808, 8829, 114, 242, 928, 512, 105, 108, 109, 114, 8656, 8660, 8663, 8667, 114, 115, 240, 5252, 102, 187, 8228, 105, 108, 244, 1705, 256, 100, 114, 8672, 8676, 99, 121, 59, 17482, 384, 59, 99, 119, 2292, 8683, 8687, 105, 114, 59, 26952, 59, 25005, 97, 114, 59, 24847, 105, 114, 99, 59, 16677, 384, 97, 108, 114, 8705, 8718, 8723, 114, 116, 115, 256, 59, 117, 8713, 8714, 26213, 105, 116, 187, 8714, 108, 105, 112, 59, 24614, 99, 111, 110, 59, 25273, 114, 59, 49152, 55349, 56613, 115, 256, 101, 119, 8739, 8745, 97, 114, 111, 119, 59, 26917, 97, 114, 111, 119, 59, 26918, 640, 97, 109, 111, 112, 114, 8762, 8766, 8771, 8798, 8803, 114, 114, 59, 25087, 116, 104, 116, 59, 25147, 107, 256, 108, 114, 8777, 8787, 101, 102, 116, 97, 114, 114, 111, 119, 59, 25001, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25002, 102, 59, 49152, 55349, 56665, 98, 97, 114, 59, 24597, 384, 99, 108, 116, 8815, 8820, 8824, 114, 59, 49152, 55349, 56509, 97, 115, 232, 8692, 114, 111, 107, 59, 16679, 256, 98, 112, 8834, 8839, 117, 108, 108, 59, 24643, 104, 101, 110, 187, 7259, 2785, 8867, 0, 8874, 0, 8888, 8901, 8910, 0, 8917, 8947, 0, 0, 8952, 8994, 9063, 9058, 9087, 0, 9094, 9130, 9140, 99, 117, 116, 101, 32827, 237, 16621, 384, 59, 105, 121, 1905, 8880, 8885, 114, 99, 32827, 238, 16622, 59, 17464, 256, 99, 120, 8892, 8895, 121, 59, 17461, 99, 108, 32827, 161, 16545, 256, 102, 114, 927, 8905, 59, 49152, 55349, 56614, 114, 97, 118, 101, 32827, 236, 16620, 512, 59, 105, 110, 111, 1854, 8925, 8937, 8942, 256, 105, 110, 8930, 8934, 110, 116, 59, 27148, 116, 59, 25133, 102, 105, 110, 59, 27100, 116, 97, 59, 24873, 108, 105, 103, 59, 16691, 384, 97, 111, 112, 8958, 8986, 8989, 384, 99, 103, 116, 8965, 8968, 8983, 114, 59, 16683, 384, 101, 108, 112, 1823, 8975, 8979, 105, 110, 229, 1934, 97, 114, 244, 1824, 104, 59, 16689, 102, 59, 25271, 101, 100, 59, 16821, 640, 59, 99, 102, 111, 116, 1268, 9004, 9009, 9021, 9025, 97, 114, 101, 59, 24837, 105, 110, 256, 59, 116, 9016, 9017, 25118, 105, 101, 59, 27101, 100, 111, 244, 8985, 640, 59, 99, 101, 108, 112, 1879, 9036, 9040, 9051, 9057, 97, 108, 59, 25274, 256, 103, 114, 9045, 9049, 101, 114, 243, 5475, 227, 9037, 97, 114, 104, 107, 59, 27159, 114, 111, 100, 59, 27196, 512, 99, 103, 112, 116, 9071, 9074, 9078, 9083, 121, 59, 17489, 111, 110, 59, 16687, 102, 59, 49152, 55349, 56666, 97, 59, 17337, 117, 101, 115, 116, 32827, 191, 16575, 256, 99, 105, 9098, 9103, 114, 59, 49152, 55349, 56510, 110, 640, 59, 69, 100, 115, 118, 1268, 9115, 9117, 9121, 1267, 59, 25337, 111, 116, 59, 25333, 256, 59, 118, 9126, 9127, 25332, 59, 25331, 256, 59, 105, 1911, 9134, 108, 100, 101, 59, 16681, 491, 9144, 0, 9148, 99, 121, 59, 17494, 108, 32827, 239, 16623, 768, 99, 102, 109, 111, 115, 117, 9164, 9175, 9180, 9185, 9191, 9205, 256, 105, 121, 9169, 9173, 114, 99, 59, 16693, 59, 17465, 114, 59, 49152, 55349, 56615, 97, 116, 104, 59, 16951, 112, 102, 59, 49152, 55349, 56667, 483, 9196, 0, 9201, 114, 59, 49152, 55349, 56511, 114, 99, 121, 59, 17496, 107, 99, 121, 59, 17492, 1024, 97, 99, 102, 103, 104, 106, 111, 115, 9227, 9238, 9250, 9255, 9261, 9265, 9269, 9275, 112, 112, 97, 256, 59, 118, 9235, 9236, 17338, 59, 17392, 256, 101, 121, 9243, 9248, 100, 105, 108, 59, 16695, 59, 17466, 114, 59, 49152, 55349, 56616, 114, 101, 101, 110, 59, 16696, 99, 121, 59, 17477, 99, 121, 59, 17500, 112, 102, 59, 49152, 55349, 56668, 99, 114, 59, 49152, 55349, 56512, 2944, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 9328, 9345, 9350, 9357, 9361, 9486, 9533, 9562, 9600, 9806, 9822, 9829, 9849, 9853, 9882, 9906, 9944, 10077, 10088, 10123, 10176, 10241, 10258, 384, 97, 114, 116, 9335, 9338, 9340, 114, 242, 2502, 242, 917, 97, 105, 108, 59, 26907, 97, 114, 114, 59, 26894, 256, 59, 103, 2452, 9355, 59, 27275, 97, 114, 59, 26978, 2403, 9381, 0, 9386, 0, 9393, 0, 0, 0, 0, 0, 9397, 9402, 0, 9414, 9416, 9421, 0, 9465, 117, 116, 101, 59, 16698, 109, 112, 116, 121, 118, 59, 27060, 114, 97, 238, 2124, 98, 100, 97, 59, 17339, 103, 384, 59, 100, 108, 2190, 9409, 9411, 59, 27025, 229, 2190, 59, 27269, 117, 111, 32827, 171, 16555, 114, 1024, 59, 98, 102, 104, 108, 112, 115, 116, 2201, 9438, 9446, 9449, 9451, 9454, 9457, 9461, 256, 59, 102, 2205, 9443, 115, 59, 26911, 115, 59, 26909, 235, 8786, 112, 59, 25003, 108, 59, 26937, 105, 109, 59, 26995, 108, 59, 24994, 384, 59, 97, 101, 9471, 9472, 9476, 27307, 105, 108, 59, 26905, 256, 59, 115, 9481, 9482, 27309, 59, 49152, 10925, 65024, 384, 97, 98, 114, 9493, 9497, 9501, 114, 114, 59, 26892, 114, 107, 59, 26482, 256, 97, 107, 9506, 9516, 99, 256, 101, 107, 9512, 9514, 59, 16507, 59, 16475, 256, 101, 115, 9521, 9523, 59, 27019, 108, 256, 100, 117, 9529, 9531, 59, 27023, 59, 27021, 512, 97, 101, 117, 121, 9542, 9547, 9558, 9560, 114, 111, 110, 59, 16702, 256, 100, 105, 9552, 9556, 105, 108, 59, 16700, 236, 2224, 226, 9513, 59, 17467, 512, 99, 113, 114, 115, 9571, 9574, 9581, 9597, 97, 59, 26934, 117, 111, 256, 59, 114, 3609, 5958, 256, 100, 117, 9586, 9591, 104, 97, 114, 59, 26983, 115, 104, 97, 114, 59, 26955, 104, 59, 25010, 640, 59, 102, 103, 113, 115, 9611, 9612, 2441, 9715, 9727, 25188, 116, 640, 97, 104, 108, 114, 116, 9624, 9636, 9655, 9666, 9704, 114, 114, 111, 119, 256, 59, 116, 2201, 9633, 97, 233, 9462, 97, 114, 112, 111, 111, 110, 256, 100, 117, 9647, 9652, 111, 119, 110, 187, 1114, 112, 187, 2406, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 25031, 105, 103, 104, 116, 384, 97, 104, 115, 9677, 9686, 9694, 114, 114, 111, 119, 256, 59, 115, 2292, 2215, 97, 114, 112, 111, 111, 110, 243, 3992, 113, 117, 105, 103, 97, 114, 114, 111, 247, 8688, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25291, 384, 59, 113, 115, 9611, 2451, 9722, 108, 97, 110, 244, 2476, 640, 59, 99, 100, 103, 115, 2476, 9738, 9741, 9757, 9768, 99, 59, 27304, 111, 116, 256, 59, 111, 9748, 9749, 27263, 256, 59, 114, 9754, 9755, 27265, 59, 27267, 256, 59, 101, 9762, 9765, 49152, 8922, 65024, 115, 59, 27283, 640, 97, 100, 101, 103, 115, 9779, 9785, 9789, 9801, 9803, 112, 112, 114, 111, 248, 9414, 111, 116, 59, 25302, 113, 256, 103, 113, 9795, 9797, 244, 2441, 103, 116, 242, 9356, 244, 2459, 105, 237, 2482, 384, 105, 108, 114, 9813, 2273, 9818, 115, 104, 116, 59, 27004, 59, 49152, 55349, 56617, 256, 59, 69, 2460, 9827, 59, 27281, 353, 9833, 9846, 114, 256, 100, 117, 9650, 9838, 256, 59, 108, 2405, 9843, 59, 26986, 108, 107, 59, 25988, 99, 121, 59, 17497, 640, 59, 97, 99, 104, 116, 2632, 9864, 9867, 9873, 9878, 114, 242, 9665, 111, 114, 110, 101, 242, 7432, 97, 114, 100, 59, 26987, 114, 105, 59, 26106, 256, 105, 111, 9887, 9892, 100, 111, 116, 59, 16704, 117, 115, 116, 256, 59, 97, 9900, 9901, 25520, 99, 104, 101, 187, 9901, 512, 69, 97, 101, 115, 9915, 9917, 9929, 9940, 59, 25192, 112, 256, 59, 112, 9923, 9924, 27273, 114, 111, 120, 187, 9924, 256, 59, 113, 9934, 9935, 27271, 256, 59, 113, 9934, 9915, 105, 109, 59, 25318, 1024, 97, 98, 110, 111, 112, 116, 119, 122, 9961, 9972, 9975, 10010, 10031, 10049, 10055, 10064, 256, 110, 114, 9966, 9969, 103, 59, 26604, 114, 59, 25085, 114, 235, 2241, 103, 384, 108, 109, 114, 9983, 9997, 10004, 101, 102, 116, 256, 97, 114, 2534, 9991, 105, 103, 104, 116, 225, 2546, 97, 112, 115, 116, 111, 59, 26620, 105, 103, 104, 116, 225, 2557, 112, 97, 114, 114, 111, 119, 256, 108, 114, 10021, 10025, 101, 102, 244, 9453, 105, 103, 104, 116, 59, 25004, 384, 97, 102, 108, 10038, 10041, 10045, 114, 59, 27013, 59, 49152, 55349, 56669, 117, 115, 59, 27181, 105, 109, 101, 115, 59, 27188, 353, 10059, 10063, 115, 116, 59, 25111, 225, 4942, 384, 59, 101, 102, 10071, 10072, 6144, 26058, 110, 103, 101, 187, 10072, 97, 114, 256, 59, 108, 10084, 10085, 16424, 116, 59, 27027, 640, 97, 99, 104, 109, 116, 10099, 10102, 10108, 10117, 10119, 114, 242, 2216, 111, 114, 110, 101, 242, 7564, 97, 114, 256, 59, 100, 3992, 10115, 59, 26989, 59, 24590, 114, 105, 59, 25279, 768, 97, 99, 104, 105, 113, 116, 10136, 10141, 2624, 10146, 10158, 10171, 113, 117, 111, 59, 24633, 114, 59, 49152, 55349, 56513, 109, 384, 59, 101, 103, 2482, 10154, 10156, 59, 27277, 59, 27279, 256, 98, 117, 9514, 10163, 111, 256, 59, 114, 3615, 10169, 59, 24602, 114, 111, 107, 59, 16706, 33792, 60, 59, 99, 100, 104, 105, 108, 113, 114, 2091, 10194, 9785, 10204, 10208, 10213, 10218, 10224, 256, 99, 105, 10199, 10201, 59, 27302, 114, 59, 27257, 114, 101, 229, 9714, 109, 101, 115, 59, 25289, 97, 114, 114, 59, 26998, 117, 101, 115, 116, 59, 27259, 256, 80, 105, 10229, 10233, 97, 114, 59, 27030, 384, 59, 101, 102, 10240, 2349, 6171, 26051, 114, 256, 100, 117, 10247, 10253, 115, 104, 97, 114, 59, 26954, 104, 97, 114, 59, 26982, 256, 101, 110, 10263, 10273, 114, 116, 110, 101, 113, 113, 59, 49152, 8808, 65024, 197, 10270, 1792, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 10304, 10309, 10370, 10382, 10387, 10400, 10405, 10408, 10458, 10466, 10468, 2691, 10483, 10498, 68, 111, 116, 59, 25146, 512, 99, 108, 112, 114, 10318, 10322, 10339, 10365, 114, 32827, 175, 16559, 256, 101, 116, 10327, 10329, 59, 26178, 256, 59, 101, 10334, 10335, 26400, 115, 101, 187, 10335, 256, 59, 115, 4155, 10344, 116, 111, 512, 59, 100, 108, 117, 4155, 10355, 10359, 10363, 111, 119, 238, 1164, 101, 102, 244, 2319, 240, 5073, 107, 101, 114, 59, 26030, 256, 111, 121, 10375, 10380, 109, 109, 97, 59, 27177, 59, 17468, 97, 115, 104, 59, 24596, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 187, 5670, 114, 59, 49152, 55349, 56618, 111, 59, 24871, 384, 99, 100, 110, 10415, 10420, 10441, 114, 111, 32827, 181, 16565, 512, 59, 97, 99, 100, 5220, 10429, 10432, 10436, 115, 244, 5799, 105, 114, 59, 27376, 111, 116, 32955, 183, 437, 117, 115, 384, 59, 98, 100, 10450, 6403, 10451, 25106, 256, 59, 117, 7484, 10456, 59, 27178, 355, 10462, 10465, 112, 59, 27355, 242, 8722, 240, 2689, 256, 100, 112, 10473, 10478, 101, 108, 115, 59, 25255, 102, 59, 49152, 55349, 56670, 256, 99, 116, 10488, 10493, 114, 59, 49152, 55349, 56514, 112, 111, 115, 187, 5533, 384, 59, 108, 109, 10505, 10506, 10509, 17340, 116, 105, 109, 97, 112, 59, 25272, 3072, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 10562, 10579, 10622, 10633, 10648, 10714, 10729, 10773, 10778, 10840, 10845, 10883, 10901, 10916, 10920, 11012, 11015, 11076, 11135, 11182, 11316, 11367, 11388, 11497, 256, 103, 116, 10567, 10571, 59, 49152, 8921, 824, 256, 59, 118, 10576, 3023, 49152, 8811, 8402, 384, 101, 108, 116, 10586, 10610, 10614, 102, 116, 256, 97, 114, 10593, 10599, 114, 114, 111, 119, 59, 25037, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25038, 59, 49152, 8920, 824, 256, 59, 118, 10619, 3143, 49152, 8810, 8402, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25039, 256, 68, 100, 10638, 10643, 97, 115, 104, 59, 25263, 97, 115, 104, 59, 25262, 640, 98, 99, 110, 112, 116, 10659, 10663, 10668, 10673, 10700, 108, 97, 187, 734, 117, 116, 101, 59, 16708, 103, 59, 49152, 8736, 8402, 640, 59, 69, 105, 111, 112, 3460, 10684, 10688, 10693, 10696, 59, 49152, 10864, 824, 100, 59, 49152, 8779, 824, 115, 59, 16713, 114, 111, 248, 3460, 117, 114, 256, 59, 97, 10707, 10708, 26222, 108, 256, 59, 115, 10707, 2872, 499, 10719, 0, 10723, 112, 32955, 160, 2871, 109, 112, 256, 59, 101, 3065, 3072, 640, 97, 101, 111, 117, 121, 10740, 10750, 10755, 10768, 10771, 496, 10745, 0, 10747, 59, 27203, 111, 110, 59, 16712, 100, 105, 108, 59, 16710, 110, 103, 256, 59, 100, 3454, 10762, 111, 116, 59, 49152, 10861, 824, 112, 59, 27202, 59, 17469, 97, 115, 104, 59, 24595, 896, 59, 65, 97, 100, 113, 115, 120, 2962, 10793, 10797, 10811, 10817, 10821, 10832, 114, 114, 59, 25047, 114, 256, 104, 114, 10803, 10806, 107, 59, 26916, 256, 59, 111, 5106, 5104, 111, 116, 59, 49152, 8784, 824, 117, 105, 246, 2915, 256, 101, 105, 10826, 10830, 97, 114, 59, 26920, 237, 2968, 105, 115, 116, 256, 59, 115, 2976, 2975, 114, 59, 49152, 55349, 56619, 512, 69, 101, 115, 116, 3013, 10854, 10873, 10876, 384, 59, 113, 115, 3004, 10861, 3041, 384, 59, 113, 115, 3004, 3013, 10868, 108, 97, 110, 244, 3042, 105, 237, 3050, 256, 59, 114, 2998, 10881, 187, 2999, 384, 65, 97, 112, 10890, 10893, 10897, 114, 242, 10609, 114, 114, 59, 25006, 97, 114, 59, 27378, 384, 59, 115, 118, 3981, 10908, 3980, 256, 59, 100, 10913, 10914, 25340, 59, 25338, 99, 121, 59, 17498, 896, 65, 69, 97, 100, 101, 115, 116, 10935, 10938, 10942, 10946, 10949, 10998, 11001, 114, 242, 10598, 59, 49152, 8806, 824, 114, 114, 59, 24986, 114, 59, 24613, 512, 59, 102, 113, 115, 3131, 10958, 10979, 10991, 116, 256, 97, 114, 10964, 10969, 114, 114, 111, 247, 10945, 105, 103, 104, 116, 97, 114, 114, 111, 247, 10896, 384, 59, 113, 115, 3131, 10938, 10986, 108, 97, 110, 244, 3157, 256, 59, 115, 3157, 10996, 187, 3126, 105, 237, 3165, 256, 59, 114, 3125, 11006, 105, 256, 59, 101, 3098, 3109, 105, 228, 3472, 256, 112, 116, 11020, 11025, 102, 59, 49152, 55349, 56671, 33152, 172, 59, 105, 110, 11033, 11034, 11062, 16556, 110, 512, 59, 69, 100, 118, 2953, 11044, 11048, 11054, 59, 49152, 8953, 824, 111, 116, 59, 49152, 8949, 824, 481, 2953, 11059, 11061, 59, 25335, 59, 25334, 105, 256, 59, 118, 3256, 11068, 481, 3256, 11073, 11075, 59, 25342, 59, 25341, 384, 97, 111, 114, 11083, 11107, 11113, 114, 512, 59, 97, 115, 116, 2939, 11093, 11098, 11103, 108, 108, 101, 236, 2939, 108, 59, 49152, 11005, 8421, 59, 49152, 8706, 824, 108, 105, 110, 116, 59, 27156, 384, 59, 99, 101, 3218, 11120, 11123, 117, 229, 3237, 256, 59, 99, 3224, 11128, 256, 59, 101, 3218, 11133, 241, 3224, 512, 65, 97, 105, 116, 11144, 11147, 11165, 11175, 114, 242, 10632, 114, 114, 384, 59, 99, 119, 11156, 11157, 11161, 24987, 59, 49152, 10547, 824, 59, 49152, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 187, 11157, 114, 105, 256, 59, 101, 3275, 3286, 896, 99, 104, 105, 109, 112, 113, 117, 11197, 11213, 11225, 11012, 2936, 11236, 11247, 512, 59, 99, 101, 114, 3378, 11206, 3383, 11209, 117, 229, 3397, 59, 49152, 55349, 56515, 111, 114, 116, 621, 11013, 0, 0, 11222, 97, 114, 225, 11094, 109, 256, 59, 101, 3438, 11231, 256, 59, 113, 3444, 3443, 115, 117, 256, 98, 112, 11243, 11245, 229, 3320, 229, 3339, 384, 98, 99, 112, 11254, 11281, 11289, 512, 59, 69, 101, 115, 11263, 11264, 3362, 11268, 25220, 59, 49152, 10949, 824, 101, 116, 256, 59, 101, 3355, 11275, 113, 256, 59, 113, 3363, 11264, 99, 256, 59, 101, 3378, 11287, 241, 3384, 512, 59, 69, 101, 115, 11298, 11299, 3423, 11303, 25221, 59, 49152, 10950, 824, 101, 116, 256, 59, 101, 3416, 11310, 113, 256, 59, 113, 3424, 11299, 512, 103, 105, 108, 114, 11325, 11327, 11333, 11335, 236, 3031, 108, 100, 101, 32827, 241, 16625, 231, 3139, 105, 97, 110, 103, 108, 101, 256, 108, 114, 11346, 11356, 101, 102, 116, 256, 59, 101, 3098, 11354, 241, 3110, 105, 103, 104, 116, 256, 59, 101, 3275, 11365, 241, 3287, 256, 59, 109, 11372, 11373, 17341, 384, 59, 101, 115, 11380, 11381, 11385, 16419, 114, 111, 59, 24854, 112, 59, 24583, 1152, 68, 72, 97, 100, 103, 105, 108, 114, 115, 11407, 11412, 11417, 11422, 11427, 11440, 11446, 11475, 11491, 97, 115, 104, 59, 25261, 97, 114, 114, 59, 26884, 112, 59, 49152, 8781, 8402, 97, 115, 104, 59, 25260, 256, 101, 116, 11432, 11436, 59, 49152, 8805, 8402, 59, 49152, 62, 8402, 110, 102, 105, 110, 59, 27102, 384, 65, 101, 116, 11453, 11457, 11461, 114, 114, 59, 26882, 59, 49152, 8804, 8402, 256, 59, 114, 11466, 11469, 49152, 60, 8402, 105, 101, 59, 49152, 8884, 8402, 256, 65, 116, 11480, 11484, 114, 114, 59, 26883, 114, 105, 101, 59, 49152, 8885, 8402, 105, 109, 59, 49152, 8764, 8402, 384, 65, 97, 110, 11504, 11508, 11522, 114, 114, 59, 25046, 114, 256, 104, 114, 11514, 11517, 107, 59, 26915, 256, 59, 111, 5095, 5093, 101, 97, 114, 59, 26919, 4691, 6805, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11565, 0, 11576, 11592, 11616, 11621, 11634, 11652, 6919, 0, 0, 11661, 11691, 0, 11720, 11726, 0, 11740, 11801, 11819, 11838, 11843, 256, 99, 115, 11569, 6807, 117, 116, 101, 32827, 243, 16627, 256, 105, 121, 11580, 11589, 114, 256, 59, 99, 6814, 11586, 32827, 244, 16628, 59, 17470, 640, 97, 98, 105, 111, 115, 6816, 11602, 11607, 456, 11610, 108, 97, 99, 59, 16721, 118, 59, 27192, 111, 108, 100, 59, 27068, 108, 105, 103, 59, 16723, 256, 99, 114, 11625, 11629, 105, 114, 59, 27071, 59, 49152, 55349, 56620, 879, 11641, 0, 0, 11644, 0, 11650, 110, 59, 17115, 97, 118, 101, 32827, 242, 16626, 59, 27073, 256, 98, 109, 11656, 3572, 97, 114, 59, 27061, 512, 97, 99, 105, 116, 11669, 11672, 11685, 11688, 114, 242, 6784, 256, 105, 114, 11677, 11680, 114, 59, 27070, 111, 115, 115, 59, 27067, 110, 229, 3666, 59, 27072, 384, 97, 101, 105, 11697, 11701, 11705, 99, 114, 59, 16717, 103, 97, 59, 17353, 384, 99, 100, 110, 11712, 11717, 461, 114, 111, 110, 59, 17343, 59, 27062, 112, 102, 59, 49152, 55349, 56672, 384, 97, 101, 108, 11732, 11735, 466, 114, 59, 27063, 114, 112, 59, 27065, 896, 59, 97, 100, 105, 111, 115, 118, 11754, 11755, 11758, 11784, 11789, 11792, 11798, 25128, 114, 242, 6790, 512, 59, 101, 102, 109, 11767, 11768, 11778, 11781, 27229, 114, 256, 59, 111, 11774, 11775, 24884, 102, 187, 11775, 32827, 170, 16554, 32827, 186, 16570, 103, 111, 102, 59, 25270, 114, 59, 27222, 108, 111, 112, 101, 59, 27223, 59, 27227, 384, 99, 108, 111, 11807, 11809, 11815, 242, 11777, 97, 115, 104, 32827, 248, 16632, 108, 59, 25240, 105, 364, 11823, 11828, 100, 101, 32827, 245, 16629, 101, 115, 256, 59, 97, 475, 11834, 115, 59, 27190, 109, 108, 32827, 246, 16630, 98, 97, 114, 59, 25405, 2785, 11870, 0, 11901, 0, 11904, 11933, 0, 11938, 11961, 0, 0, 11979, 3740, 0, 12051, 0, 0, 12075, 12220, 0, 12232, 114, 512, 59, 97, 115, 116, 1027, 11879, 11890, 3717, 33024, 182, 59, 108, 11885, 11886, 16566, 108, 101, 236, 1027, 617, 11896, 0, 0, 11899, 109, 59, 27379, 59, 27389, 121, 59, 17471, 114, 640, 99, 105, 109, 112, 116, 11915, 11919, 11923, 6245, 11927, 110, 116, 59, 16421, 111, 100, 59, 16430, 105, 108, 59, 24624, 101, 110, 107, 59, 24625, 114, 59, 49152, 55349, 56621, 384, 105, 109, 111, 11944, 11952, 11956, 256, 59, 118, 11949, 11950, 17350, 59, 17365, 109, 97, 244, 2678, 110, 101, 59, 26126, 384, 59, 116, 118, 11967, 11968, 11976, 17344, 99, 104, 102, 111, 114, 107, 187, 8189, 59, 17366, 256, 97, 117, 11983, 11999, 110, 256, 99, 107, 11989, 11997, 107, 256, 59, 104, 8692, 11995, 59, 24846, 246, 8692, 115, 1152, 59, 97, 98, 99, 100, 101, 109, 115, 116, 12019, 12020, 6408, 12025, 12029, 12036, 12038, 12042, 12046, 16427, 99, 105, 114, 59, 27171, 105, 114, 59, 27170, 256, 111, 117, 7488, 12034, 59, 27173, 59, 27250, 110, 32955, 177, 3741, 105, 109, 59, 27174, 119, 111, 59, 27175, 384, 105, 112, 117, 12057, 12064, 12069, 110, 116, 105, 110, 116, 59, 27157, 102, 59, 49152, 55349, 56673, 110, 100, 32827, 163, 16547, 1280, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 3784, 12095, 12097, 12100, 12103, 12161, 12169, 12178, 12158, 12214, 59, 27315, 112, 59, 27319, 117, 229, 3801, 256, 59, 99, 3790, 12108, 768, 59, 97, 99, 101, 110, 115, 3784, 12121, 12127, 12134, 12136, 12158, 112, 112, 114, 111, 248, 12099, 117, 114, 108, 121, 101, 241, 3801, 241, 3790, 384, 97, 101, 115, 12143, 12150, 12154, 112, 112, 114, 111, 120, 59, 27321, 113, 113, 59, 27317, 105, 109, 59, 25320, 105, 237, 3807, 109, 101, 256, 59, 115, 12168, 3758, 24626, 384, 69, 97, 115, 12152, 12176, 12154, 240, 12149, 384, 100, 102, 112, 3820, 12185, 12207, 384, 97, 108, 115, 12192, 12197, 12202, 108, 97, 114, 59, 25390, 105, 110, 101, 59, 25362, 117, 114, 102, 59, 25363, 256, 59, 116, 3835, 12212, 239, 3835, 114, 101, 108, 59, 25264, 256, 99, 105, 12224, 12229, 114, 59, 49152, 55349, 56517, 59, 17352, 110, 99, 115, 112, 59, 24584, 768, 102, 105, 111, 112, 115, 117, 12250, 8930, 12255, 12261, 12267, 12273, 114, 59, 49152, 55349, 56622, 112, 102, 59, 49152, 55349, 56674, 114, 105, 109, 101, 59, 24663, 99, 114, 59, 49152, 55349, 56518, 384, 97, 101, 111, 12280, 12297, 12307, 116, 256, 101, 105, 12286, 12293, 114, 110, 105, 111, 110, 243, 1712, 110, 116, 59, 27158, 115, 116, 256, 59, 101, 12304, 12305, 16447, 241, 7961, 244, 3860, 2688, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 12352, 12369, 12373, 12377, 12512, 12558, 12587, 12615, 12642, 12658, 12686, 12806, 12821, 12836, 12841, 12888, 12910, 12914, 12944, 12976, 12983, 384, 97, 114, 116, 12359, 12362, 12364, 114, 242, 4275, 242, 989, 97, 105, 108, 59, 26908, 97, 114, 242, 7269, 97, 114, 59, 26980, 896, 99, 100, 101, 110, 113, 114, 116, 12392, 12405, 12408, 12415, 12431, 12436, 12492, 256, 101, 117, 12397, 12401, 59, 49152, 8765, 817, 116, 101, 59, 16725, 105, 227, 4462, 109, 112, 116, 121, 118, 59, 27059, 103, 512, 59, 100, 101, 108, 4049, 12425, 12427, 12429, 59, 27026, 59, 27045, 229, 4049, 117, 111, 32827, 187, 16571, 114, 1408, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 4060, 12460, 12463, 12471, 12473, 12476, 12478, 12480, 12483, 12487, 12490, 112, 59, 26997, 256, 59, 102, 4064, 12468, 115, 59, 26912, 59, 26931, 115, 59, 26910, 235, 8797, 240, 10030, 108, 59, 26949, 105, 109, 59, 26996, 108, 59, 24995, 59, 24989, 256, 97, 105, 12497, 12501, 105, 108, 59, 26906, 111, 256, 59, 110, 12507, 12508, 25142, 97, 108, 243, 3870, 384, 97, 98, 114, 12519, 12522, 12526, 114, 242, 6117, 114, 107, 59, 26483, 256, 97, 107, 12531, 12541, 99, 256, 101, 107, 12537, 12539, 59, 16509, 59, 16477, 256, 101, 115, 12546, 12548, 59, 27020, 108, 256, 100, 117, 12554, 12556, 59, 27022, 59, 27024, 512, 97, 101, 117, 121, 12567, 12572, 12583, 12585, 114, 111, 110, 59, 16729, 256, 100, 105, 12577, 12581, 105, 108, 59, 16727, 236, 4082, 226, 12538, 59, 17472, 512, 99, 108, 113, 115, 12596, 12599, 12605, 12612, 97, 59, 26935, 100, 104, 97, 114, 59, 26985, 117, 111, 256, 59, 114, 526, 525, 104, 59, 25011, 384, 97, 99, 103, 12622, 12639, 3908, 108, 512, 59, 105, 112, 115, 3960, 12632, 12635, 4252, 110, 229, 4283, 97, 114, 244, 4009, 116, 59, 26029, 384, 105, 108, 114, 12649, 4131, 12654, 115, 104, 116, 59, 27005, 59, 49152, 55349, 56623, 256, 97, 111, 12663, 12678, 114, 256, 100, 117, 12669, 12671, 187, 1147, 256, 59, 108, 4241, 12676, 59, 26988, 256, 59, 118, 12683, 12684, 17345, 59, 17393, 384, 103, 110, 115, 12693, 12793, 12796, 104, 116, 768, 97, 104, 108, 114, 115, 116, 12708, 12720, 12738, 12760, 12772, 12782, 114, 114, 111, 119, 256, 59, 116, 4060, 12717, 97, 233, 12488, 97, 114, 112, 111, 111, 110, 256, 100, 117, 12731, 12735, 111, 119, 238, 12670, 112, 187, 4242, 101, 102, 116, 256, 97, 104, 12746, 12752, 114, 114, 111, 119, 243, 4074, 97, 114, 112, 111, 111, 110, 243, 1361, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 25033, 113, 117, 105, 103, 97, 114, 114, 111, 247, 12491, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25292, 103, 59, 17114, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7986, 384, 97, 104, 109, 12813, 12816, 12819, 114, 242, 4074, 97, 242, 1361, 59, 24591, 111, 117, 115, 116, 256, 59, 97, 12830, 12831, 25521, 99, 104, 101, 187, 12831, 109, 105, 100, 59, 27374, 512, 97, 98, 112, 116, 12850, 12861, 12864, 12882, 256, 110, 114, 12855, 12858, 103, 59, 26605, 114, 59, 25086, 114, 235, 4099, 384, 97, 102, 108, 12871, 12874, 12878, 114, 59, 27014, 59, 49152, 55349, 56675, 117, 115, 59, 27182, 105, 109, 101, 115, 59, 27189, 256, 97, 112, 12893, 12903, 114, 256, 59, 103, 12899, 12900, 16425, 116, 59, 27028, 111, 108, 105, 110, 116, 59, 27154, 97, 114, 242, 12771, 512, 97, 99, 104, 113, 12923, 12928, 4284, 12933, 113, 117, 111, 59, 24634, 114, 59, 49152, 55349, 56519, 256, 98, 117, 12539, 12938, 111, 256, 59, 114, 532, 531, 384, 104, 105, 114, 12951, 12955, 12960, 114, 101, 229, 12792, 109, 101, 115, 59, 25290, 105, 512, 59, 101, 102, 108, 12970, 4185, 6177, 12971, 26041, 116, 114, 105, 59, 27086, 108, 117, 104, 97, 114, 59, 26984, 59, 24862, 3425, 13013, 13019, 13023, 13100, 13112, 13169, 0, 13178, 13220, 0, 0, 13292, 13296, 0, 13352, 13384, 13402, 13485, 13489, 13514, 13553, 0, 13846, 0, 0, 13875, 99, 117, 116, 101, 59, 16731, 113, 117, 239, 10170, 1280, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 4589, 13043, 13045, 13055, 13058, 13067, 13071, 13087, 13094, 13097, 59, 27316, 496, 13050, 0, 13052, 59, 27320, 111, 110, 59, 16737, 117, 229, 4606, 256, 59, 100, 4595, 13063, 105, 108, 59, 16735, 114, 99, 59, 16733, 384, 69, 97, 115, 13078, 13080, 13083, 59, 27318, 112, 59, 27322, 105, 109, 59, 25321, 111, 108, 105, 110, 116, 59, 27155, 105, 237, 4612, 59, 17473, 111, 116, 384, 59, 98, 101, 13108, 7495, 13109, 25285, 59, 27238, 896, 65, 97, 99, 109, 115, 116, 120, 13126, 13130, 13143, 13147, 13150, 13155, 13165, 114, 114, 59, 25048, 114, 256, 104, 114, 13136, 13138, 235, 8744, 256, 59, 111, 2614, 2612, 116, 32827, 167, 16551, 105, 59, 16443, 119, 97, 114, 59, 26921, 109, 256, 105, 110, 13161, 240, 110, 117, 243, 241, 116, 59, 26422, 114, 256, 59, 111, 13174, 8277, 49152, 55349, 56624, 512, 97, 99, 111, 121, 13186, 13190, 13201, 13216, 114, 112, 59, 26223, 256, 104, 121, 13195, 13199, 99, 121, 59, 17481, 59, 17480, 114, 116, 621, 13209, 0, 0, 13212, 105, 228, 5220, 97, 114, 97, 236, 11887, 32827, 173, 16557, 256, 103, 109, 13224, 13236, 109, 97, 384, 59, 102, 118, 13233, 13234, 13234, 17347, 59, 17346, 1024, 59, 100, 101, 103, 108, 110, 112, 114, 4779, 13253, 13257, 13262, 13270, 13278, 13281, 13286, 111, 116, 59, 27242, 256, 59, 113, 4785, 4784, 256, 59, 69, 13267, 13268, 27294, 59, 27296, 256, 59, 69, 13275, 13276, 27293, 59, 27295, 101, 59, 25158, 108, 117, 115, 59, 27172, 97, 114, 114, 59, 26994, 97, 114, 242, 4413, 512, 97, 101, 105, 116, 13304, 13320, 13327, 13335, 256, 108, 115, 13309, 13316, 108, 115, 101, 116, 109, 233, 13162, 104, 112, 59, 27187, 112, 97, 114, 115, 108, 59, 27108, 256, 100, 108, 5219, 13332, 101, 59, 25379, 256, 59, 101, 13340, 13341, 27306, 256, 59, 115, 13346, 13347, 27308, 59, 49152, 10924, 65024, 384, 102, 108, 112, 13358, 13363, 13378, 116, 99, 121, 59, 17484, 256, 59, 98, 13368, 13369, 16431, 256, 59, 97, 13374, 13375, 27076, 114, 59, 25407, 102, 59, 49152, 55349, 56676, 97, 256, 100, 114, 13389, 1026, 101, 115, 256, 59, 117, 13396, 13397, 26208, 105, 116, 187, 13397, 384, 99, 115, 117, 13408, 13433, 13471, 256, 97, 117, 13413, 13423, 112, 256, 59, 115, 4488, 13419, 59, 49152, 8851, 65024, 112, 256, 59, 115, 4532, 13429, 59, 49152, 8852, 65024, 117, 256, 98, 112, 13439, 13455, 384, 59, 101, 115, 4503, 4508, 13446, 101, 116, 256, 59, 101, 4503, 13453, 241, 4509, 384, 59, 101, 115, 4520, 4525, 13462, 101, 116, 256, 59, 101, 4520, 13469, 241, 4526, 384, 59, 97, 102, 4475, 13478, 1456, 114, 357, 13483, 1457, 187, 4476, 97, 114, 242, 4424, 512, 99, 101, 109, 116, 13497, 13502, 13506, 13509, 114, 59, 49152, 55349, 56520, 116, 109, 238, 241, 105, 236, 13333, 97, 114, 230, 4542, 256, 97, 114, 13518, 13525, 114, 256, 59, 102, 13524, 6079, 26118, 256, 97, 110, 13530, 13549, 105, 103, 104, 116, 256, 101, 112, 13539, 13546, 112, 115, 105, 108, 111, 238, 7904, 104, 233, 11951, 115, 187, 10322, 640, 98, 99, 109, 110, 112, 13563, 13662, 4617, 13707, 13710, 1152, 59, 69, 100, 101, 109, 110, 112, 114, 115, 13582, 13583, 13585, 13589, 13598, 13603, 13612, 13617, 13622, 25218, 59, 27333, 111, 116, 59, 27325, 256, 59, 100, 4570, 13594, 111, 116, 59, 27331, 117, 108, 116, 59, 27329, 256, 69, 101, 13608, 13610, 59, 27339, 59, 25226, 108, 117, 115, 59, 27327, 97, 114, 114, 59, 27001, 384, 101, 105, 117, 13629, 13650, 13653, 116, 384, 59, 101, 110, 13582, 13637, 13643, 113, 256, 59, 113, 4570, 13583, 101, 113, 256, 59, 113, 13611, 13608, 109, 59, 27335, 256, 98, 112, 13658, 13660, 59, 27349, 59, 27347, 99, 768, 59, 97, 99, 101, 110, 115, 4589, 13676, 13682, 13689, 13691, 13094, 112, 112, 114, 111, 248, 13050, 117, 114, 108, 121, 101, 241, 4606, 241, 4595, 384, 97, 101, 115, 13698, 13704, 13083, 112, 112, 114, 111, 248, 13082, 113, 241, 13079, 103, 59, 26218, 1664, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 13737, 13740, 13743, 4636, 13746, 13748, 13760, 13769, 13781, 13786, 13791, 13800, 13805, 32827, 185, 16569, 32827, 178, 16562, 32827, 179, 16563, 59, 27334, 256, 111, 115, 13753, 13756, 116, 59, 27326, 117, 98, 59, 27352, 256, 59, 100, 4642, 13765, 111, 116, 59, 27332, 115, 256, 111, 117, 13775, 13778, 108, 59, 26569, 98, 59, 27351, 97, 114, 114, 59, 27003, 117, 108, 116, 59, 27330, 256, 69, 101, 13796, 13798, 59, 27340, 59, 25227, 108, 117, 115, 59, 27328, 384, 101, 105, 117, 13812, 13833, 13836, 116, 384, 59, 101, 110, 4636, 13820, 13826, 113, 256, 59, 113, 4642, 13746, 101, 113, 256, 59, 113, 13799, 13796, 109, 59, 27336, 256, 98, 112, 13841, 13843, 59, 27348, 59, 27350, 384, 65, 97, 110, 13852, 13856, 13869, 114, 114, 59, 25049, 114, 256, 104, 114, 13862, 13864, 235, 8750, 256, 59, 111, 2603, 2601, 119, 97, 114, 59, 26922, 108, 105, 103, 32827, 223, 16607, 3041, 13905, 13917, 13920, 4814, 13939, 13945, 0, 13950, 14018, 0, 0, 0, 0, 0, 14043, 14083, 0, 14089, 14188, 0, 0, 0, 14215, 626, 13910, 0, 0, 13915, 103, 101, 116, 59, 25366, 59, 17348, 114, 235, 3679, 384, 97, 101, 121, 13926, 13931, 13936, 114, 111, 110, 59, 16741, 100, 105, 108, 59, 16739, 59, 17474, 108, 114, 101, 99, 59, 25365, 114, 59, 49152, 55349, 56625, 512, 101, 105, 107, 111, 13958, 13981, 14005, 14012, 498, 13963, 0, 13969, 101, 256, 52, 102, 4740, 4737, 97, 384, 59, 115, 118, 13976, 13977, 13979, 17336, 121, 109, 59, 17361, 256, 99, 110, 13986, 14002, 107, 256, 97, 115, 13992, 13998, 112, 112, 114, 111, 248, 4801, 105, 109, 187, 4780, 115, 240, 4766, 256, 97, 115, 14010, 13998, 240, 4801, 114, 110, 32827, 254, 16638, 492, 799, 14022, 8935, 101, 115, 33152, 215, 59, 98, 100, 14031, 14032, 14040, 16599, 256, 59, 97, 6415, 14037, 114, 59, 27185, 59, 27184, 384, 101, 112, 115, 14049, 14051, 14080, 225, 10829, 512, 59, 98, 99, 102, 1158, 14060, 14064, 14068, 111, 116, 59, 25398, 105, 114, 59, 27377, 256, 59, 111, 14073, 14076, 49152, 55349, 56677, 114, 107, 59, 27354, 225, 13154, 114, 105, 109, 101, 59, 24628, 384, 97, 105, 112, 14095, 14098, 14180, 100, 229, 4680, 896, 97, 100, 101, 109, 112, 115, 116, 14113, 14157, 14144, 14161, 14167, 14172, 14175, 110, 103, 108, 101, 640, 59, 100, 108, 113, 114, 14128, 14129, 14134, 14144, 14146, 26037, 111, 119, 110, 187, 7611, 101, 102, 116, 256, 59, 101, 10240, 14142, 241, 2350, 59, 25180, 105, 103, 104, 116, 256, 59, 101, 12970, 14155, 241, 4186, 111, 116, 59, 26092, 105, 110, 117, 115, 59, 27194, 108, 117, 115, 59, 27193, 98, 59, 27085, 105, 109, 101, 59, 27195, 101, 122, 105, 117, 109, 59, 25570, 384, 99, 104, 116, 14194, 14205, 14209, 256, 114, 121, 14199, 14203, 59, 49152, 55349, 56521, 59, 17478, 99, 121, 59, 17499, 114, 111, 107, 59, 16743, 256, 105, 111, 14219, 14222, 120, 244, 6007, 104, 101, 97, 100, 256, 108, 114, 14231, 14240, 101, 102, 116, 97, 114, 114, 111, 247, 2127, 105, 103, 104, 116, 97, 114, 114, 111, 119, 187, 3933, 2304, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 14288, 14291, 14295, 14308, 14320, 14332, 14350, 14364, 14371, 14388, 14417, 14429, 14443, 14505, 14540, 14546, 14570, 14582, 114, 242, 1005, 97, 114, 59, 26979, 256, 99, 114, 14300, 14306, 117, 116, 101, 32827, 250, 16634, 242, 4432, 114, 483, 14314, 0, 14317, 121, 59, 17502, 118, 101, 59, 16749, 256, 105, 121, 14325, 14330, 114, 99, 32827, 251, 16635, 59, 17475, 384, 97, 98, 104, 14339, 14342, 14347, 114, 242, 5037, 108, 97, 99, 59, 16753, 97, 242, 5059, 256, 105, 114, 14355, 14360, 115, 104, 116, 59, 27006, 59, 49152, 55349, 56626, 114, 97, 118, 101, 32827, 249, 16633, 353, 14375, 14385, 114, 256, 108, 114, 14380, 14382, 187, 2391, 187, 4227, 108, 107, 59, 25984, 256, 99, 116, 14393, 14413, 623, 14399, 0, 0, 14410, 114, 110, 256, 59, 101, 14405, 14406, 25372, 114, 187, 14406, 111, 112, 59, 25359, 114, 105, 59, 26104, 256, 97, 108, 14422, 14426, 99, 114, 59, 16747, 32955, 168, 841, 256, 103, 112, 14434, 14438, 111, 110, 59, 16755, 102, 59, 49152, 55349, 56678, 768, 97, 100, 104, 108, 115, 117, 4427, 14456, 14461, 4978, 14481, 14496, 111, 119, 110, 225, 5043, 97, 114, 112, 111, 111, 110, 256, 108, 114, 14472, 14476, 101, 102, 244, 14381, 105, 103, 104, 244, 14383, 105, 384, 59, 104, 108, 14489, 14490, 14492, 17349, 187, 5114, 111, 110, 187, 14490, 112, 97, 114, 114, 111, 119, 115, 59, 25032, 384, 99, 105, 116, 14512, 14532, 14536, 623, 14518, 0, 0, 14529, 114, 110, 256, 59, 101, 14524, 14525, 25373, 114, 187, 14525, 111, 112, 59, 25358, 110, 103, 59, 16751, 114, 105, 59, 26105, 99, 114, 59, 49152, 55349, 56522, 384, 100, 105, 114, 14553, 14557, 14562, 111, 116, 59, 25328, 108, 100, 101, 59, 16745, 105, 256, 59, 102, 14128, 14568, 187, 6163, 256, 97, 109, 14575, 14578, 114, 242, 14504, 108, 32827, 252, 16636, 97, 110, 103, 108, 101, 59, 27047, 1920, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 14620, 14623, 14633, 14637, 14773, 14776, 14781, 14815, 14820, 14824, 14835, 14841, 14845, 14849, 14880, 114, 242, 1015, 97, 114, 256, 59, 118, 14630, 14631, 27368, 59, 27369, 97, 115, 232, 993, 256, 110, 114, 14642, 14647, 103, 114, 116, 59, 27036, 896, 101, 107, 110, 112, 114, 115, 116, 13539, 14662, 14667, 14674, 14685, 14692, 14742, 97, 112, 112, 225, 9237, 111, 116, 104, 105, 110, 231, 7830, 384, 104, 105, 114, 13547, 11976, 14681, 111, 112, 244, 12213, 256, 59, 104, 5047, 14690, 239, 12685, 256, 105, 117, 14697, 14701, 103, 109, 225, 13235, 256, 98, 112, 14706, 14724, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14717, 14720, 49152, 8842, 65024, 59, 49152, 10955, 65024, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14735, 14738, 49152, 8843, 65024, 59, 49152, 10956, 65024, 256, 104, 114, 14747, 14751, 101, 116, 225, 13980, 105, 97, 110, 103, 108, 101, 256, 108, 114, 14762, 14767, 101, 102, 116, 187, 2341, 105, 103, 104, 116, 187, 4177, 121, 59, 17458, 97, 115, 104, 187, 4150, 384, 101, 108, 114, 14788, 14802, 14807, 384, 59, 98, 101, 11754, 14795, 14799, 97, 114, 59, 25275, 113, 59, 25178, 108, 105, 112, 59, 25326, 256, 98, 116, 14812, 5224, 97, 242, 5225, 114, 59, 49152, 55349, 56627, 116, 114, 233, 14766, 115, 117, 256, 98, 112, 14831, 14833, 187, 3356, 187, 3417, 112, 102, 59, 49152, 55349, 56679, 114, 111, 240, 3835, 116, 114, 233, 14772, 256, 99, 117, 14854, 14859, 114, 59, 49152, 55349, 56523, 256, 98, 112, 14864, 14872, 110, 256, 69, 101, 14720, 14870, 187, 14718, 110, 256, 69, 101, 14738, 14878, 187, 14736, 105, 103, 122, 97, 103, 59, 27034, 896, 99, 101, 102, 111, 112, 114, 115, 14902, 14907, 14934, 14939, 14932, 14945, 14954, 105, 114, 99, 59, 16757, 256, 100, 105, 14912, 14929, 256, 98, 103, 14917, 14921, 97, 114, 59, 27231, 101, 256, 59, 113, 5626, 14927, 59, 25177, 101, 114, 112, 59, 24856, 114, 59, 49152, 55349, 56628, 112, 102, 59, 49152, 55349, 56680, 256, 59, 101, 5241, 14950, 97, 116, 232, 5241, 99, 114, 59, 49152, 55349, 56524, 2787, 6030, 14983, 0, 14987, 0, 14992, 15003, 0, 0, 15005, 15016, 15019, 15023, 0, 0, 15043, 15054, 0, 15064, 6108, 6111, 116, 114, 233, 6097, 114, 59, 49152, 55349, 56629, 256, 65, 97, 14996, 14999, 114, 242, 963, 114, 242, 2550, 59, 17342, 256, 65, 97, 15009, 15012, 114, 242, 952, 114, 242, 2539, 97, 240, 10003, 105, 115, 59, 25339, 384, 100, 112, 116, 6052, 15029, 15038, 256, 102, 108, 15034, 6057, 59, 49152, 55349, 56681, 105, 109, 229, 6066, 256, 65, 97, 15047, 15050, 114, 242, 974, 114, 242, 2561, 256, 99, 113, 15058, 6072, 114, 59, 49152, 55349, 56525, 256, 112, 116, 6102, 15068, 114, 233, 6100, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 15088, 15101, 15112, 15116, 15121, 15125, 15131, 15137, 99, 256, 117, 121, 15094, 15099, 116, 101, 32827, 253, 16637, 59, 17487, 256, 105, 121, 15106, 15110, 114, 99, 59, 16759, 59, 17483, 110, 32827, 165, 16549, 114, 59, 49152, 55349, 56630, 99, 121, 59, 17495, 112, 102, 59, 49152, 55349, 56682, 99, 114, 59, 49152, 55349, 56526, 256, 99, 109, 15142, 15145, 121, 59, 17486, 108, 32827, 255, 16639, 1280, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 15170, 15176, 15188, 15192, 15204, 15209, 15213, 15220, 15226, 15232, 99, 117, 116, 101, 59, 16762, 256, 97, 121, 15181, 15186, 114, 111, 110, 59, 16766, 59, 17463, 111, 116, 59, 16764, 256, 101, 116, 15197, 15201, 116, 114, 230, 5471, 97, 59, 17334, 114, 59, 49152, 55349, 56631, 99, 121, 59, 17462, 103, 114, 97, 114, 114, 59, 25053, 112, 102, 59, 49152, 55349, 56683, 99, 114, 59, 49152, 55349, 56527, 256, 106, 110, 15237, 15239, 59, 24589, 106, 59, 24588])
          , un = new Uint16Array([512, 97, 103, 108, 113, 9, 21, 24, 27, 621, 15, 0, 0, 18, 112, 59, 16422, 111, 115, 59, 16423, 116, 59, 16446, 116, 59, 16444, 117, 111, 116, 59, 16418]);
        var En;
        const hn = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]])
          , pn = null !== (En = String.fromCodePoint) && void 0 !== En ? En : function(e) {
            let t = "";
            return e > 65535 && (e -= 65536,
            t += String.fromCharCode(e >>> 10 & 1023 | 55296),
            e = 56320 | 1023 & e),
            t += String.fromCharCode(e),
            t
        }
        ;
        var dn, Tn, mn, fn, An, _n, Cn;
        function gn(e) {
            return function(t, n) {
                let s = ""
                  , a = 0
                  , r = 0;
                for (; (r = t.indexOf("&", r)) >= 0; ) {
                    if (s += t.slice(a, r),
                    a = r,
                    r += 1,
                    t.charCodeAt(r) === dn.NUM) {
                        let e = r + 1
                          , o = 10
                          , i = t.charCodeAt(e);
                        (i | dn.To_LOWER_BIT) === dn.LOWER_X && (o = 16,
                        r += 1,
                        e += 1);
                        do {
                            i = t.charCodeAt(++r)
                        } while (i >= dn.ZERO && i <= dn.NINE || 16 === o && (i | dn.To_LOWER_BIT) >= dn.LOWER_A && (i | dn.To_LOWER_BIT) <= dn.LOWER_F);
                        if (e !== r) {
                            const i = t.substring(e, r)
                              , c = parseInt(i, o);
                            if (t.charCodeAt(r) === dn.SEMI)
                                r += 1;
                            else if (n)
                                continue;
                            s += pn(function(e) {
                                var t;
                                return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : null !== (t = hn.get(e)) && void 0 !== t ? t : e
                            }(c)),
                            a = r
                        }
                        continue
                    }
                    let o = 0
                      , i = 1
                      , c = 0
                      , l = e[c];
                    for (; r < t.length && (c = kn(e, l, c + 1, t.charCodeAt(r)),
                    !(c < 0)); r++,
                    i++) {
                        l = e[c];
                        const s = l & Tn.VALUE_LENGTH;
                        if (s) {
                            n && t.charCodeAt(r) !== dn.SEMI || (o = c,
                            i = 0);
                            const e = (s >> 14) - 1;
                            if (0 === e)
                                break;
                            c += e
                        }
                    }
                    if (0 !== o) {
                        const t = (e[o] & Tn.VALUE_LENGTH) >> 14;
                        s += 1 === t ? String.fromCharCode(e[o] & ~Tn.VALUE_LENGTH) : 2 === t ? String.fromCharCode(e[o + 1]) : String.fromCharCode(e[o + 1], e[o + 2]),
                        a = r - i + 1
                    }
                }
                return s + t.slice(a)
            }
        }
        function kn(e, t, n, s) {
            const a = (t & Tn.BRANCH_LENGTH) >> 7
              , r = t & Tn.JUMP_TABLE;
            if (0 === a)
                return 0 !== r && s === r ? n : -1;
            if (r) {
                const t = s - r;
                return t < 0 || t >= a ? -1 : e[n + t] - 1
            }
            let o = n
              , i = o + a - 1;
            for (; o <= i; ) {
                const t = o + i >>> 1
                  , n = e[t];
                if (n < s)
                    o = t + 1;
                else {
                    if (!(n > s))
                        return e[t + a];
                    i = t - 1
                }
            }
            return -1
        }
        !function(e) {
            e[e.NUM = 35] = "NUM",
            e[e.SEMI = 59] = "SEMI",
            e[e.ZERO = 48] = "ZERO",
            e[e.NINE = 57] = "NINE",
            e[e.LOWER_A = 97] = "LOWER_A",
            e[e.LOWER_F = 102] = "LOWER_F",
            e[e.LOWER_X = 120] = "LOWER_X",
            e[e.To_LOWER_BIT = 32] = "To_LOWER_BIT"
        }(dn || (dn = {})),
        function(e) {
            e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH",
            e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH",
            e[e.JUMP_TABLE = 127] = "JUMP_TABLE"
        }(Tn || (Tn = {})),
        gn(ln),
        gn(un),
        function(e) {
            e.HTML = "http://www.w3.org/1999/xhtml",
            e.MATHML = "http://www.w3.org/1998/Math/MathML",
            e.SVG = "http://www.w3.org/2000/svg",
            e.XLINK = "http://www.w3.org/1999/xlink",
            e.XML = "http://www.w3.org/XML/1998/namespace",
            e.XMLNS = "http://www.w3.org/2000/xmlns/"
        }(mn || (mn = {})),
        function(e) {
            e.TYPE = "type",
            e.ACTION = "action",
            e.ENCODING = "encoding",
            e.PROMPT = "prompt",
            e.NAME = "name",
            e.COLOR = "color",
            e.FACE = "face",
            e.SIZE = "size"
        }(fn || (fn = {})),
        function(e) {
            e.NO_QUIRKS = "no-quirks",
            e.QUIRKS = "quirks",
            e.LIMITED_QUIRKS = "limited-quirks"
        }(An || (An = {})),
        function(e) {
            e.A = "a",
            e.ADDRESS = "address",
            e.ANNOTATION_XML = "annotation-xml",
            e.APPLET = "applet",
            e.AREA = "area",
            e.ARTICLE = "article",
            e.ASIDE = "aside",
            e.B = "b",
            e.BASE = "base",
            e.BASEFONT = "basefont",
            e.BGSOUND = "bgsound",
            e.BIG = "big",
            e.BLOCKQUOTE = "blockquote",
            e.BODY = "body",
            e.BR = "br",
            e.BUTTON = "button",
            e.CAPTION = "caption",
            e.CENTER = "center",
            e.CODE = "code",
            e.COL = "col",
            e.COLGROUP = "colgroup",
            e.DD = "dd",
            e.DESC = "desc",
            e.DETAILS = "details",
            e.DIALOG = "dialog",
            e.DIR = "dir",
            e.DIV = "div",
            e.DL = "dl",
            e.DT = "dt",
            e.EM = "em",
            e.EMBED = "embed",
            e.FIELDSET = "fieldset",
            e.FIGCAPTION = "figcaption",
            e.FIGURE = "figure",
            e.FONT = "font",
            e.FOOTER = "footer",
            e.FOREIGN_OBJECT = "foreignObject",
            e.FORM = "form",
            e.FRAME = "frame",
            e.FRAMESET = "frameset",
            e.H1 = "h1",
            e.H2 = "h2",
            e.H3 = "h3",
            e.H4 = "h4",
            e.H5 = "h5",
            e.H6 = "h6",
            e.HEAD = "head",
            e.HEADER = "header",
            e.HGROUP = "hgroup",
            e.HR = "hr",
            e.HTML = "html",
            e.I = "i",
            e.IMG = "img",
            e.IMAGE = "image",
            e.INPUT = "input",
            e.IFRAME = "iframe",
            e.KEYGEN = "keygen",
            e.LABEL = "label",
            e.LI = "li",
            e.LINK = "link",
            e.LISTING = "listing",
            e.MAIN = "main",
            e.MALIGNMARK = "malignmark",
            e.MARQUEE = "marquee",
            e.MATH = "math",
            e.MENU = "menu",
            e.META = "meta",
            e.MGLYPH = "mglyph",
            e.MI = "mi",
            e.MO = "mo",
            e.MN = "mn",
            e.MS = "ms",
            e.MTEXT = "mtext",
            e.NAV = "nav",
            e.NOBR = "nobr",
            e.NOFRAMES = "noframes",
            e.NOEMBED = "noembed",
            e.NOSCRIPT = "noscript",
            e.OBJECT = "object",
            e.OL = "ol",
            e.OPTGROUP = "optgroup",
            e.OPTION = "option",
            e.P = "p",
            e.PARAM = "param",
            e.PLAINTEXT = "plaintext",
            e.PRE = "pre",
            e.RB = "rb",
            e.RP = "rp",
            e.RT = "rt",
            e.RTC = "rtc",
            e.RUBY = "ruby",
            e.S = "s",
            e.SCRIPT = "script",
            e.SECTION = "section",
            e.SELECT = "select",
            e.SOURCE = "source",
            e.SMALL = "small",
            e.SPAN = "span",
            e.STRIKE = "strike",
            e.STRONG = "strong",
            e.STYLE = "style",
            e.SUB = "sub",
            e.SUMMARY = "summary",
            e.SUP = "sup",
            e.TABLE = "table",
            e.TBODY = "tbody",
            e.TEMPLATE = "template",
            e.TEXTAREA = "textarea",
            e.TFOOT = "tfoot",
            e.TD = "td",
            e.TH = "th",
            e.THEAD = "thead",
            e.TITLE = "title",
            e.TR = "tr",
            e.TRACK = "track",
            e.TT = "tt",
            e.U = "u",
            e.UL = "ul",
            e.SVG = "svg",
            e.VAR = "var",
            e.WBR = "wbr",
            e.XMP = "xmp"
        }(_n || (_n = {})),
        function(e) {
            e[e.UNKNOWN = 0] = "UNKNOWN",
            e[e.A = 1] = "A",
            e[e.ADDRESS = 2] = "ADDRESS",
            e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML",
            e[e.APPLET = 4] = "APPLET",
            e[e.AREA = 5] = "AREA",
            e[e.ARTICLE = 6] = "ARTICLE",
            e[e.ASIDE = 7] = "ASIDE",
            e[e.B = 8] = "B",
            e[e.BASE = 9] = "BASE",
            e[e.BASEFONT = 10] = "BASEFONT",
            e[e.BGSOUND = 11] = "BGSOUND",
            e[e.BIG = 12] = "BIG",
            e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE",
            e[e.BODY = 14] = "BODY",
            e[e.BR = 15] = "BR",
            e[e.BUTTON = 16] = "BUTTON",
            e[e.CAPTION = 17] = "CAPTION",
            e[e.CENTER = 18] = "CENTER",
            e[e.CODE = 19] = "CODE",
            e[e.COL = 20] = "COL",
            e[e.COLGROUP = 21] = "COLGROUP",
            e[e.DD = 22] = "DD",
            e[e.DESC = 23] = "DESC",
            e[e.DETAILS = 24] = "DETAILS",
            e[e.DIALOG = 25] = "DIALOG",
            e[e.DIR = 26] = "DIR",
            e[e.DIV = 27] = "DIV",
            e[e.DL = 28] = "DL",
            e[e.DT = 29] = "DT",
            e[e.EM = 30] = "EM",
            e[e.EMBED = 31] = "EMBED",
            e[e.FIELDSET = 32] = "FIELDSET",
            e[e.FIGCAPTION = 33] = "FIGCAPTION",
            e[e.FIGURE = 34] = "FIGURE",
            e[e.FONT = 35] = "FONT",
            e[e.FOOTER = 36] = "FOOTER",
            e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT",
            e[e.FORM = 38] = "FORM",
            e[e.FRAME = 39] = "FRAME",
            e[e.FRAMESET = 40] = "FRAMESET",
            e[e.H1 = 41] = "H1",
            e[e.H2 = 42] = "H2",
            e[e.H3 = 43] = "H3",
            e[e.H4 = 44] = "H4",
            e[e.H5 = 45] = "H5",
            e[e.H6 = 46] = "H6",
            e[e.HEAD = 47] = "HEAD",
            e[e.HEADER = 48] = "HEADER",
            e[e.HGROUP = 49] = "HGROUP",
            e[e.HR = 50] = "HR",
            e[e.HTML = 51] = "HTML",
            e[e.I = 52] = "I",
            e[e.IMG = 53] = "IMG",
            e[e.IMAGE = 54] = "IMAGE",
            e[e.INPUT = 55] = "INPUT",
            e[e.IFRAME = 56] = "IFRAME",
            e[e.KEYGEN = 57] = "KEYGEN",
            e[e.LABEL = 58] = "LABEL",
            e[e.LI = 59] = "LI",
            e[e.LINK = 60] = "LINK",
            e[e.LISTING = 61] = "LISTING",
            e[e.MAIN = 62] = "MAIN",
            e[e.MALIGNMARK = 63] = "MALIGNMARK",
            e[e.MARQUEE = 64] = "MARQUEE",
            e[e.MATH = 65] = "MATH",
            e[e.MENU = 66] = "MENU",
            e[e.META = 67] = "META",
            e[e.MGLYPH = 68] = "MGLYPH",
            e[e.MI = 69] = "MI",
            e[e.MO = 70] = "MO",
            e[e.MN = 71] = "MN",
            e[e.MS = 72] = "MS",
            e[e.MTEXT = 73] = "MTEXT",
            e[e.NAV = 74] = "NAV",
            e[e.NOBR = 75] = "NOBR",
            e[e.NOFRAMES = 76] = "NOFRAMES",
            e[e.NOEMBED = 77] = "NOEMBED",
            e[e.NOSCRIPT = 78] = "NOSCRIPT",
            e[e.OBJECT = 79] = "OBJECT",
            e[e.OL = 80] = "OL",
            e[e.OPTGROUP = 81] = "OPTGROUP",
            e[e.OPTION = 82] = "OPTION",
            e[e.P = 83] = "P",
            e[e.PARAM = 84] = "PARAM",
            e[e.PLAINTEXT = 85] = "PLAINTEXT",
            e[e.PRE = 86] = "PRE",
            e[e.RB = 87] = "RB",
            e[e.RP = 88] = "RP",
            e[e.RT = 89] = "RT",
            e[e.RTC = 90] = "RTC",
            e[e.RUBY = 91] = "RUBY",
            e[e.S = 92] = "S",
            e[e.SCRIPT = 93] = "SCRIPT",
            e[e.SECTION = 94] = "SECTION",
            e[e.SELECT = 95] = "SELECT",
            e[e.SOURCE = 96] = "SOURCE",
            e[e.SMALL = 97] = "SMALL",
            e[e.SPAN = 98] = "SPAN",
            e[e.STRIKE = 99] = "STRIKE",
            e[e.STRONG = 100] = "STRONG",
            e[e.STYLE = 101] = "STYLE",
            e[e.SUB = 102] = "SUB",
            e[e.SUMMARY = 103] = "SUMMARY",
            e[e.SUP = 104] = "SUP",
            e[e.TABLE = 105] = "TABLE",
            e[e.TBODY = 106] = "TBODY",
            e[e.TEMPLATE = 107] = "TEMPLATE",
            e[e.TEXTAREA = 108] = "TEXTAREA",
            e[e.TFOOT = 109] = "TFOOT",
            e[e.TD = 110] = "TD",
            e[e.TH = 111] = "TH",
            e[e.THEAD = 112] = "THEAD",
            e[e.TITLE = 113] = "TITLE",
            e[e.TR = 114] = "TR",
            e[e.TRACK = 115] = "TRACK",
            e[e.TT = 116] = "TT",
            e[e.U = 117] = "U",
            e[e.UL = 118] = "UL",
            e[e.SVG = 119] = "SVG",
            e[e.VAR = 120] = "VAR",
            e[e.WBR = 121] = "WBR",
            e[e.XMP = 122] = "XMP"
        }(Cn || (Cn = {}));
        const In = new Map([[_n.A, Cn.A], [_n.ADDRESS, Cn.ADDRESS], [_n.ANNOTATION_XML, Cn.ANNOTATION_XML], [_n.APPLET, Cn.APPLET], [_n.AREA, Cn.AREA], [_n.ARTICLE, Cn.ARTICLE], [_n.ASIDE, Cn.ASIDE], [_n.B, Cn.B], [_n.BASE, Cn.BASE], [_n.BASEFONT, Cn.BASEFONT], [_n.BGSOUND, Cn.BGSOUND], [_n.BIG, Cn.BIG], [_n.BLOCKQUOTE, Cn.BLOCKQUOTE], [_n.BODY, Cn.BODY], [_n.BR, Cn.BR], [_n.BUTTON, Cn.BUTTON], [_n.CAPTION, Cn.CAPTION], [_n.CENTER, Cn.CENTER], [_n.CODE, Cn.CODE], [_n.COL, Cn.COL], [_n.COLGROUP, Cn.COLGROUP], [_n.DD, Cn.DD], [_n.DESC, Cn.DESC], [_n.DETAILS, Cn.DETAILS], [_n.DIALOG, Cn.DIALOG], [_n.DIR, Cn.DIR], [_n.DIV, Cn.DIV], [_n.DL, Cn.DL], [_n.DT, Cn.DT], [_n.EM, Cn.EM], [_n.EMBED, Cn.EMBED], [_n.FIELDSET, Cn.FIELDSET], [_n.FIGCAPTION, Cn.FIGCAPTION], [_n.FIGURE, Cn.FIGURE], [_n.FONT, Cn.FONT], [_n.FOOTER, Cn.FOOTER], [_n.FOREIGN_OBJECT, Cn.FOREIGN_OBJECT], [_n.FORM, Cn.FORM], [_n.FRAME, Cn.FRAME], [_n.FRAMESET, Cn.FRAMESET], [_n.H1, Cn.H1], [_n.H2, Cn.H2], [_n.H3, Cn.H3], [_n.H4, Cn.H4], [_n.H5, Cn.H5], [_n.H6, Cn.H6], [_n.HEAD, Cn.HEAD], [_n.HEADER, Cn.HEADER], [_n.HGROUP, Cn.HGROUP], [_n.HR, Cn.HR], [_n.HTML, Cn.HTML], [_n.I, Cn.I], [_n.IMG, Cn.IMG], [_n.IMAGE, Cn.IMAGE], [_n.INPUT, Cn.INPUT], [_n.IFRAME, Cn.IFRAME], [_n.KEYGEN, Cn.KEYGEN], [_n.LABEL, Cn.LABEL], [_n.LI, Cn.LI], [_n.LINK, Cn.LINK], [_n.LISTING, Cn.LISTING], [_n.MAIN, Cn.MAIN], [_n.MALIGNMARK, Cn.MALIGNMARK], [_n.MARQUEE, Cn.MARQUEE], [_n.MATH, Cn.MATH], [_n.MENU, Cn.MENU], [_n.META, Cn.META], [_n.MGLYPH, Cn.MGLYPH], [_n.MI, Cn.MI], [_n.MO, Cn.MO], [_n.MN, Cn.MN], [_n.MS, Cn.MS], [_n.MTEXT, Cn.MTEXT], [_n.NAV, Cn.NAV], [_n.NOBR, Cn.NOBR], [_n.NOFRAMES, Cn.NOFRAMES], [_n.NOEMBED, Cn.NOEMBED], [_n.NOSCRIPT, Cn.NOSCRIPT], [_n.OBJECT, Cn.OBJECT], [_n.OL, Cn.OL], [_n.OPTGROUP, Cn.OPTGROUP], [_n.OPTION, Cn.OPTION], [_n.P, Cn.P], [_n.PARAM, Cn.PARAM], [_n.PLAINTEXT, Cn.PLAINTEXT], [_n.PRE, Cn.PRE], [_n.RB, Cn.RB], [_n.RP, Cn.RP], [_n.RT, Cn.RT], [_n.RTC, Cn.RTC], [_n.RUBY, Cn.RUBY], [_n.S, Cn.S], [_n.SCRIPT, Cn.SCRIPT], [_n.SECTION, Cn.SECTION], [_n.SELECT, Cn.SELECT], [_n.SOURCE, Cn.SOURCE], [_n.SMALL, Cn.SMALL], [_n.SPAN, Cn.SPAN], [_n.STRIKE, Cn.STRIKE], [_n.STRONG, Cn.STRONG], [_n.STYLE, Cn.STYLE], [_n.SUB, Cn.SUB], [_n.SUMMARY, Cn.SUMMARY], [_n.SUP, Cn.SUP], [_n.TABLE, Cn.TABLE], [_n.TBODY, Cn.TBODY], [_n.TEMPLATE, Cn.TEMPLATE], [_n.TEXTAREA, Cn.TEXTAREA], [_n.TFOOT, Cn.TFOOT], [_n.TD, Cn.TD], [_n.TH, Cn.TH], [_n.THEAD, Cn.THEAD], [_n.TITLE, Cn.TITLE], [_n.TR, Cn.TR], [_n.TRACK, Cn.TRACK], [_n.TT, Cn.TT], [_n.U, Cn.U], [_n.UL, Cn.UL], [_n.SVG, Cn.SVG], [_n.VAR, Cn.VAR], [_n.WBR, Cn.WBR], [_n.XMP, Cn.XMP]]);
        function Nn(e) {
            var t;
            return null !== (t = In.get(e)) && void 0 !== t ? t : Cn.UNKNOWN
        }
        const Sn = Cn
          , Rn = {
            [mn.HTML]: new Set([Sn.ADDRESS, Sn.APPLET, Sn.AREA, Sn.ARTICLE, Sn.ASIDE, Sn.BASE, Sn.BASEFONT, Sn.BGSOUND, Sn.BLOCKQUOTE, Sn.BODY, Sn.BR, Sn.BUTTON, Sn.CAPTION, Sn.CENTER, Sn.COL, Sn.COLGROUP, Sn.DD, Sn.DETAILS, Sn.DIR, Sn.DIV, Sn.DL, Sn.DT, Sn.EMBED, Sn.FIELDSET, Sn.FIGCAPTION, Sn.FIGURE, Sn.FOOTER, Sn.FORM, Sn.FRAME, Sn.FRAMESET, Sn.H1, Sn.H2, Sn.H3, Sn.H4, Sn.H5, Sn.H6, Sn.HEAD, Sn.HEADER, Sn.HGROUP, Sn.HR, Sn.HTML, Sn.IFRAME, Sn.IMG, Sn.INPUT, Sn.LI, Sn.LINK, Sn.LISTING, Sn.MAIN, Sn.MARQUEE, Sn.MENU, Sn.META, Sn.NAV, Sn.NOEMBED, Sn.NOFRAMES, Sn.NOSCRIPT, Sn.OBJECT, Sn.OL, Sn.P, Sn.PARAM, Sn.PLAINTEXT, Sn.PRE, Sn.SCRIPT, Sn.SECTION, Sn.SELECT, Sn.SOURCE, Sn.STYLE, Sn.SUMMARY, Sn.TABLE, Sn.TBODY, Sn.TD, Sn.TEMPLATE, Sn.TEXTAREA, Sn.TFOOT, Sn.TH, Sn.THEAD, Sn.TITLE, Sn.TR, Sn.TRACK, Sn.UL, Sn.WBR, Sn.XMP]),
            [mn.MATHML]: new Set([Sn.MI, Sn.MO, Sn.MN, Sn.MS, Sn.MTEXT, Sn.ANNOTATION_XML]),
            [mn.SVG]: new Set([Sn.TITLE, Sn.FOREIGN_OBJECT, Sn.DESC]),
            [mn.XLINK]: new Set,
            [mn.XML]: new Set,
            [mn.XMLNS]: new Set
        };
        function bn(e) {
            return e === Sn.H1 || e === Sn.H2 || e === Sn.H3 || e === Sn.H4 || e === Sn.H5 || e === Sn.H6
        }
        const Dn = new Set([_n.STYLE, _n.SCRIPT, _n.XMP, _n.IFRAME, _n.NOEMBED, _n.NOFRAMES, _n.PLAINTEXT])
          , Pn = new Map([[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
        var On;
        !function(e) {
            e[e.DATA = 0] = "DATA",
            e[e.RCDATA = 1] = "RCDATA",
            e[e.RAWTEXT = 2] = "RAWTEXT",
            e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA",
            e[e.PLAINTEXT = 4] = "PLAINTEXT",
            e[e.TAG_OPEN = 5] = "TAG_OPEN",
            e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN",
            e[e.TAG_NAME = 7] = "TAG_NAME",
            e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN",
            e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN",
            e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME",
            e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN",
            e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN",
            e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME",
            e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN",
            e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN",
            e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME",
            e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START",
            e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH",
            e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED",
            e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH",
            e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH",
            e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",
            e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN",
            e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",
            e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END",
            e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME",
            e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME",
            e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME",
            e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE",
            e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED",
            e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED",
            e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED",
            e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED",
            e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG",
            e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT",
            e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN",
            e[e.COMMENT_START = 42] = "COMMENT_START",
            e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH",
            e[e.COMMENT = 44] = "COMMENT",
            e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN",
            e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG",
            e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH",
            e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",
            e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH",
            e[e.COMMENT_END = 50] = "COMMENT_END",
            e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG",
            e[e.DOCTYPE = 52] = "DOCTYPE",
            e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME",
            e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME",
            e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME",
            e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD",
            e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",
            e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",
            e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",
            e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER",
            e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",
            e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD",
            e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",
            e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",
            e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",
            e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER",
            e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE",
            e[e.CDATA_SECTION = 68] = "CDATA_SECTION",
            e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET",
            e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END",
            e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE",
            e[e.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE",
            e[e.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND",
            e[e.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE",
            e[e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START",
            e[e.DECIMAL_CHARACTER_REFERENCE_START = 76] = "DECIMAL_CHARACTER_REFERENCE_START",
            e[e.HEXADEMICAL_CHARACTER_REFERENCE = 77] = "HEXADEMICAL_CHARACTER_REFERENCE",
            e[e.DECIMAL_CHARACTER_REFERENCE = 78] = "DECIMAL_CHARACTER_REFERENCE",
            e[e.NUMERIC_CHARACTER_REFERENCE_END = 79] = "NUMERIC_CHARACTER_REFERENCE_END"
        }(On || (On = {}));
        const Ln = {
            DATA: On.DATA,
            RCDATA: On.RCDATA,
            RAWTEXT: On.RAWTEXT,
            SCRIPT_DATA: On.SCRIPT_DATA,
            PLAINTEXT: On.PLAINTEXT,
            CDATA_SECTION: On.CDATA_SECTION
        };
        function Mn(e) {
            return e >= Jt.DIGIT_0 && e <= Jt.DIGIT_9
        }
        function yn(e) {
            return e >= Jt.LATIN_CAPITAL_A && e <= Jt.LATIN_CAPITAL_Z
        }
        function wn(e) {
            return function(e) {
                return e >= Jt.LATIN_SMALL_A && e <= Jt.LATIN_SMALL_Z
            }(e) || yn(e)
        }
        function vn(e) {
            return wn(e) || Mn(e)
        }
        function Bn(e) {
            return e >= Jt.LATIN_CAPITAL_A && e <= Jt.LATIN_CAPITAL_F
        }
        function Un(e) {
            return e >= Jt.LATIN_SMALL_A && e <= Jt.LATIN_SMALL_F
        }
        function xn(e) {
            return e + 32
        }
        function Hn(e) {
            return e === Jt.SPACE || e === Jt.LINE_FEED || e === Jt.TABULATION || e === Jt.FORM_FEED
        }
        function Fn(e) {
            return Hn(e) || e === Jt.SOLIDUS || e === Jt.GREATER_THAN_SIGN
        }
        class Gn {
            constructor(e, t) {
                this.options = e,
                this.handler = t,
                this.paused = !1,
                this.inLoop = !1,
                this.inForeignNode = !1,
                this.lastStartTagName = "",
                this.active = !1,
                this.state = On.DATA,
                this.returnState = On.DATA,
                this.charRefCode = -1,
                this.consumedAfterSnapshot = -1,
                this.currentCharacterToken = null,
                this.currentToken = null,
                this.currentAttr = {
                    name: "",
                    value: ""
                },
                this.preprocessor = new on(t),
                this.currentLocation = this.getCurrentLocation(-1)
            }
            _err(e) {
                var t, n;
                null === (n = (t = this.handler).onParseError) || void 0 === n || n.call(t, this.preprocessor.getError(e))
            }
            getCurrentLocation(e) {
                return this.options.sourceCodeLocationInfo ? {
                    startLine: this.preprocessor.line,
                    startCol: this.preprocessor.col - e,
                    startOffset: this.preprocessor.offset - e,
                    endLine: -1,
                    endCol: -1,
                    endOffset: -1
                } : null
            }
            _runParsingLoop() {
                if (!this.inLoop) {
                    for (this.inLoop = !0; this.active && !this.paused; ) {
                        this.consumedAfterSnapshot = 0;
                        const e = this._consume();
                        this._ensureHibernation() || this._callState(e)
                    }
                    this.inLoop = !1
                }
            }
            pause() {
                this.paused = !0
            }
            resume(e) {
                if (!this.paused)
                    throw new Error("Parser was already resumed");
                this.paused = !1,
                this.inLoop || (this._runParsingLoop(),
                this.paused || null == e || e())
            }
            write(e, t, n) {
                this.active = !0,
                this.preprocessor.write(e, t),
                this._runParsingLoop(),
                this.paused || null == n || n()
            }
            insertHtmlAtCurrentPos(e) {
                this.active = !0,
                this.preprocessor.insertHtmlAtCurrentPos(e),
                this._runParsingLoop()
            }
            _ensureHibernation() {
                return !!this.preprocessor.endOfChunkHit && (this._unconsume(this.consumedAfterSnapshot),
                this.active = !1,
                !0)
            }
            _consume() {
                return this.consumedAfterSnapshot++,
                this.preprocessor.advance()
            }
            _unconsume(e) {
                this.consumedAfterSnapshot -= e,
                this.preprocessor.retreat(e)
            }
            _reconsumeInState(e) {
                this.state = e,
                this._unconsume(1)
            }
            _advanceBy(e) {
                this.consumedAfterSnapshot += e;
                for (let t = 0; t < e; t++)
                    this.preprocessor.advance()
            }
            _consumeSequenceIfMatch(e, t) {
                return !!this.preprocessor.startsWith(e, t) && (this._advanceBy(e.length - 1),
                !0)
            }
            _createStartTagToken() {
                this.currentToken = {
                    type: rn.START_TAG,
                    tagName: "",
                    tagID: Cn.UNKNOWN,
                    selfClosing: !1,
                    ackSelfClosing: !1,
                    attrs: [],
                    location: this.getCurrentLocation(1)
                }
            }
            _createEndTagToken() {
                this.currentToken = {
                    type: rn.END_TAG,
                    tagName: "",
                    tagID: Cn.UNKNOWN,
                    selfClosing: !1,
                    ackSelfClosing: !1,
                    attrs: [],
                    location: this.getCurrentLocation(2)
                }
            }
            _createCommentToken(e) {
                this.currentToken = {
                    type: rn.COMMENT,
                    data: "",
                    location: this.getCurrentLocation(e)
                }
            }
            _createDoctypeToken(e) {
                this.currentToken = {
                    type: rn.DOCTYPE,
                    name: e,
                    forceQuirks: !1,
                    publicId: null,
                    systemId: null,
                    location: this.currentLocation
                }
            }
            _createCharacterToken(e, t) {
                this.currentCharacterToken = {
                    type: e,
                    chars: t,
                    location: this.currentLocation
                }
            }
            _createAttr(e) {
                this.currentAttr = {
                    name: e,
                    value: ""
                },
                this.currentLocation = this.getCurrentLocation(0)
            }
            _leaveAttrName() {
                var e, t;
                const n = this.currentToken;
                null === cn(n, this.currentAttr.name) ? (n.attrs.push(this.currentAttr),
                n.location && this.currentLocation && ((null !== (e = (t = n.location).attrs) && void 0 !== e ? e : t.attrs = Object.create(null))[this.currentAttr.name] = this.currentLocation,
                this._leaveAttrValue())) : this._err(an.duplicateAttribute)
            }
            _leaveAttrValue() {
                this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line,
                this.currentLocation.endCol = this.preprocessor.col,
                this.currentLocation.endOffset = this.preprocessor.offset)
            }
            prepareToken(e) {
                this._emitCurrentCharacterToken(e.location),
                this.currentToken = null,
                e.location && (e.location.endLine = this.preprocessor.line,
                e.location.endCol = this.preprocessor.col + 1,
                e.location.endOffset = this.preprocessor.offset + 1),
                this.currentLocation = this.getCurrentLocation(-1)
            }
            emitCurrentTagToken() {
                const e = this.currentToken;
                this.prepareToken(e),
                e.tagID = Nn(e.tagName),
                e.type === rn.START_TAG ? (this.lastStartTagName = e.tagName,
                this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(an.endTagWithAttributes),
                e.selfClosing && this._err(an.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
                this.preprocessor.dropParsedChunk()
            }
            emitCurrentComment(e) {
                this.prepareToken(e),
                this.handler.onComment(e),
                this.preprocessor.dropParsedChunk()
            }
            emitCurrentDoctype(e) {
                this.prepareToken(e),
                this.handler.onDoctype(e),
                this.preprocessor.dropParsedChunk()
            }
            _emitCurrentCharacterToken(e) {
                if (this.currentCharacterToken) {
                    switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine,
                    this.currentCharacterToken.location.endCol = e.startCol,
                    this.currentCharacterToken.location.endOffset = e.startOffset),
                    this.currentCharacterToken.type) {
                    case rn.CHARACTER:
                        this.handler.onCharacter(this.currentCharacterToken);
                        break;
                    case rn.NULL_CHARACTER:
                        this.handler.onNullCharacter(this.currentCharacterToken);
                        break;
                    case rn.WHITESPACE_CHARACTER:
                        this.handler.onWhitespaceCharacter(this.currentCharacterToken)
                    }
                    this.currentCharacterToken = null
                }
            }
            _emitEOFToken() {
                const e = this.getCurrentLocation(0);
                e && (e.endLine = e.startLine,
                e.endCol = e.startCol,
                e.endOffset = e.startOffset),
                this._emitCurrentCharacterToken(e),
                this.handler.onEof({
                    type: rn.EOF,
                    location: e
                }),
                this.active = !1
            }
            _appendCharToCurrentCharacterToken(e, t) {
                if (this.currentCharacterToken) {
                    if (this.currentCharacterToken.type === e)
                        return void (this.currentCharacterToken.chars += t);
                    this.currentLocation = this.getCurrentLocation(0),
                    this._emitCurrentCharacterToken(this.currentLocation),
                    this.preprocessor.dropParsedChunk()
                }
                this._createCharacterToken(e, t)
            }
            _emitCodePoint(e) {
                let t = rn.CHARACTER;
                Hn(e) ? t = rn.WHITESPACE_CHARACTER : e === Jt.NULL && (t = rn.NULL_CHARACTER),
                this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e))
            }
            _emitChars(e) {
                this._appendCharToCurrentCharacterToken(rn.CHARACTER, e)
            }
            _matchNamedCharacterReference(e) {
                let t = null
                  , n = 0
                  , s = !1;
                for (let r = 0, o = ln[0]; r >= 0 && (r = kn(ln, o, r + 1, e),
                !(r < 0)); e = this._consume()) {
                    n += 1,
                    o = ln[r];
                    const i = o & Tn.VALUE_LENGTH;
                    if (i) {
                        const o = (i >> 14) - 1;
                        if (e !== Jt.SEMICOLON && this._isCharacterReferenceInAttribute() && ((a = this.preprocessor.peek(1)) === Jt.EQUALS_SIGN || vn(a)) ? (t = [Jt.AMPERSAND],
                        r += o) : (t = 0 === o ? [ln[r] & ~Tn.VALUE_LENGTH] : 1 === o ? [ln[++r]] : [ln[++r], ln[++r]],
                        n = 0,
                        s = e !== Jt.SEMICOLON),
                        0 === o) {
                            this._consume();
                            break
                        }
                    }
                }
                var a;
                return this._unconsume(n),
                s && !this.preprocessor.endOfChunkHit && this._err(an.missingSemicolonAfterCharacterReference),
                this._unconsume(1),
                t
            }
            _isCharacterReferenceInAttribute() {
                return this.returnState === On.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === On.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === On.ATTRIBUTE_VALUE_UNQUOTED
            }
            _flushCodePointConsumedAsCharacterReference(e) {
                this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e)
            }
            _callState(e) {
                switch (this.state) {
                case On.DATA:
                    this._stateData(e);
                    break;
                case On.RCDATA:
                    this._stateRcdata(e);
                    break;
                case On.RAWTEXT:
                    this._stateRawtext(e);
                    break;
                case On.SCRIPT_DATA:
                    this._stateScriptData(e);
                    break;
                case On.PLAINTEXT:
                    this._statePlaintext(e);
                    break;
                case On.TAG_OPEN:
                    this._stateTagOpen(e);
                    break;
                case On.END_TAG_OPEN:
                    this._stateEndTagOpen(e);
                    break;
                case On.TAG_NAME:
                    this._stateTagName(e);
                    break;
                case On.RCDATA_LESS_THAN_SIGN:
                    this._stateRcdataLessThanSign(e);
                    break;
                case On.RCDATA_END_TAG_OPEN:
                    this._stateRcdataEndTagOpen(e);
                    break;
                case On.RCDATA_END_TAG_NAME:
                    this._stateRcdataEndTagName(e);
                    break;
                case On.RAWTEXT_LESS_THAN_SIGN:
                    this._stateRawtextLessThanSign(e);
                    break;
                case On.RAWTEXT_END_TAG_OPEN:
                    this._stateRawtextEndTagOpen(e);
                    break;
                case On.RAWTEXT_END_TAG_NAME:
                    this._stateRawtextEndTagName(e);
                    break;
                case On.SCRIPT_DATA_LESS_THAN_SIGN:
                    this._stateScriptDataLessThanSign(e);
                    break;
                case On.SCRIPT_DATA_END_TAG_OPEN:
                    this._stateScriptDataEndTagOpen(e);
                    break;
                case On.SCRIPT_DATA_END_TAG_NAME:
                    this._stateScriptDataEndTagName(e);
                    break;
                case On.SCRIPT_DATA_ESCAPE_START:
                    this._stateScriptDataEscapeStart(e);
                    break;
                case On.SCRIPT_DATA_ESCAPE_START_DASH:
                    this._stateScriptDataEscapeStartDash(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED:
                    this._stateScriptDataEscaped(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED_DASH:
                    this._stateScriptDataEscapedDash(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED_DASH_DASH:
                    this._stateScriptDataEscapedDashDash(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
                    this._stateScriptDataEscapedLessThanSign(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
                    this._stateScriptDataEscapedEndTagOpen(e);
                    break;
                case On.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
                    this._stateScriptDataEscapedEndTagName(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPE_START:
                    this._stateScriptDataDoubleEscapeStart(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPED:
                    this._stateScriptDataDoubleEscaped(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
                    this._stateScriptDataDoubleEscapedDash(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
                    this._stateScriptDataDoubleEscapedDashDash(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
                    this._stateScriptDataDoubleEscapedLessThanSign(e);
                    break;
                case On.SCRIPT_DATA_DOUBLE_ESCAPE_END:
                    this._stateScriptDataDoubleEscapeEnd(e);
                    break;
                case On.BEFORE_ATTRIBUTE_NAME:
                    this._stateBeforeAttributeName(e);
                    break;
                case On.ATTRIBUTE_NAME:
                    this._stateAttributeName(e);
                    break;
                case On.AFTER_ATTRIBUTE_NAME:
                    this._stateAfterAttributeName(e);
                    break;
                case On.BEFORE_ATTRIBUTE_VALUE:
                    this._stateBeforeAttributeValue(e);
                    break;
                case On.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
                    this._stateAttributeValueDoubleQuoted(e);
                    break;
                case On.ATTRIBUTE_VALUE_SINGLE_QUOTED:
                    this._stateAttributeValueSingleQuoted(e);
                    break;
                case On.ATTRIBUTE_VALUE_UNQUOTED:
                    this._stateAttributeValueUnquoted(e);
                    break;
                case On.AFTER_ATTRIBUTE_VALUE_QUOTED:
                    this._stateAfterAttributeValueQuoted(e);
                    break;
                case On.SELF_CLOSING_START_TAG:
                    this._stateSelfClosingStartTag(e);
                    break;
                case On.BOGUS_COMMENT:
                    this._stateBogusComment(e);
                    break;
                case On.MARKUP_DECLARATION_OPEN:
                    this._stateMarkupDeclarationOpen(e);
                    break;
                case On.COMMENT_START:
                    this._stateCommentStart(e);
                    break;
                case On.COMMENT_START_DASH:
                    this._stateCommentStartDash(e);
                    break;
                case On.COMMENT:
                    this._stateComment(e);
                    break;
                case On.COMMENT_LESS_THAN_SIGN:
                    this._stateCommentLessThanSign(e);
                    break;
                case On.COMMENT_LESS_THAN_SIGN_BANG:
                    this._stateCommentLessThanSignBang(e);
                    break;
                case On.COMMENT_LESS_THAN_SIGN_BANG_DASH:
                    this._stateCommentLessThanSignBangDash(e);
                    break;
                case On.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
                    this._stateCommentLessThanSignBangDashDash(e);
                    break;
                case On.COMMENT_END_DASH:
                    this._stateCommentEndDash(e);
                    break;
                case On.COMMENT_END:
                    this._stateCommentEnd(e);
                    break;
                case On.COMMENT_END_BANG:
                    this._stateCommentEndBang(e);
                    break;
                case On.DOCTYPE:
                    this._stateDoctype(e);
                    break;
                case On.BEFORE_DOCTYPE_NAME:
                    this._stateBeforeDoctypeName(e);
                    break;
                case On.DOCTYPE_NAME:
                    this._stateDoctypeName(e);
                    break;
                case On.AFTER_DOCTYPE_NAME:
                    this._stateAfterDoctypeName(e);
                    break;
                case On.AFTER_DOCTYPE_PUBLIC_KEYWORD:
                    this._stateAfterDoctypePublicKeyword(e);
                    break;
                case On.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
                    this._stateBeforeDoctypePublicIdentifier(e);
                    break;
                case On.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
                    this._stateDoctypePublicIdentifierDoubleQuoted(e);
                    break;
                case On.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
                    this._stateDoctypePublicIdentifierSingleQuoted(e);
                    break;
                case On.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
                    this._stateAfterDoctypePublicIdentifier(e);
                    break;
                case On.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
                    this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
                    break;
                case On.AFTER_DOCTYPE_SYSTEM_KEYWORD:
                    this._stateAfterDoctypeSystemKeyword(e);
                    break;
                case On.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
                    this._stateBeforeDoctypeSystemIdentifier(e);
                    break;
                case On.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
                    this._stateDoctypeSystemIdentifierDoubleQuoted(e);
                    break;
                case On.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
                    this._stateDoctypeSystemIdentifierSingleQuoted(e);
                    break;
                case On.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
                    this._stateAfterDoctypeSystemIdentifier(e);
                    break;
                case On.BOGUS_DOCTYPE:
                    this._stateBogusDoctype(e);
                    break;
                case On.CDATA_SECTION:
                    this._stateCdataSection(e);
                    break;
                case On.CDATA_SECTION_BRACKET:
                    this._stateCdataSectionBracket(e);
                    break;
                case On.CDATA_SECTION_END:
                    this._stateCdataSectionEnd(e);
                    break;
                case On.CHARACTER_REFERENCE:
                    this._stateCharacterReference(e);
                    break;
                case On.NAMED_CHARACTER_REFERENCE:
                    this._stateNamedCharacterReference(e);
                    break;
                case On.AMBIGUOUS_AMPERSAND:
                    this._stateAmbiguousAmpersand(e);
                    break;
                case On.NUMERIC_CHARACTER_REFERENCE:
                    this._stateNumericCharacterReference(e);
                    break;
                case On.HEXADEMICAL_CHARACTER_REFERENCE_START:
                    this._stateHexademicalCharacterReferenceStart(e);
                    break;
                case On.DECIMAL_CHARACTER_REFERENCE_START:
                    this._stateDecimalCharacterReferenceStart(e);
                    break;
                case On.HEXADEMICAL_CHARACTER_REFERENCE:
                    this._stateHexademicalCharacterReference(e);
                    break;
                case On.DECIMAL_CHARACTER_REFERENCE:
                    this._stateDecimalCharacterReference(e);
                    break;
                case On.NUMERIC_CHARACTER_REFERENCE_END:
                    this._stateNumericCharacterReferenceEnd();
                    break;
                default:
                    throw new Error("Unknown state")
                }
            }
            _stateData(e) {
                switch (e) {
                case Jt.LESS_THAN_SIGN:
                    this.state = On.TAG_OPEN;
                    break;
                case Jt.AMPERSAND:
                    this.returnState = On.DATA,
                    this.state = On.CHARACTER_REFERENCE;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitCodePoint(e);
                    break;
                case Jt.EOF:
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateRcdata(e) {
                switch (e) {
                case Jt.AMPERSAND:
                    this.returnState = On.RCDATA,
                    this.state = On.CHARACTER_REFERENCE;
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.RCDATA_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateRawtext(e) {
                switch (e) {
                case Jt.LESS_THAN_SIGN:
                    this.state = On.RAWTEXT_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateScriptData(e) {
                switch (e) {
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _statePlaintext(e) {
                switch (e) {
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateTagOpen(e) {
                if (wn(e))
                    this._createStartTagToken(),
                    this.state = On.TAG_NAME,
                    this._stateTagName(e);
                else
                    switch (e) {
                    case Jt.EXCLAMATION_MARK:
                        this.state = On.MARKUP_DECLARATION_OPEN;
                        break;
                    case Jt.SOLIDUS:
                        this.state = On.END_TAG_OPEN;
                        break;
                    case Jt.QUESTION_MARK:
                        this._err(an.unexpectedQuestionMarkInsteadOfTagName),
                        this._createCommentToken(1),
                        this.state = On.BOGUS_COMMENT,
                        this._stateBogusComment(e);
                        break;
                    case Jt.EOF:
                        this._err(an.eofBeforeTagName),
                        this._emitChars("<"),
                        this._emitEOFToken();
                        break;
                    default:
                        this._err(an.invalidFirstCharacterOfTagName),
                        this._emitChars("<"),
                        this.state = On.DATA,
                        this._stateData(e)
                    }
            }
            _stateEndTagOpen(e) {
                if (wn(e))
                    this._createEndTagToken(),
                    this.state = On.TAG_NAME,
                    this._stateTagName(e);
                else
                    switch (e) {
                    case Jt.GREATER_THAN_SIGN:
                        this._err(an.missingEndTagName),
                        this.state = On.DATA;
                        break;
                    case Jt.EOF:
                        this._err(an.eofBeforeTagName),
                        this._emitChars("</"),
                        this._emitEOFToken();
                        break;
                    default:
                        this._err(an.invalidFirstCharacterOfTagName),
                        this._createCommentToken(2),
                        this.state = On.BOGUS_COMMENT,
                        this._stateBogusComment(e)
                    }
            }
            _stateTagName(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.BEFORE_ATTRIBUTE_NAME;
                    break;
                case Jt.SOLIDUS:
                    this.state = On.SELF_CLOSING_START_TAG;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.tagName += zt;
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    t.tagName += String.fromCodePoint(yn(e) ? xn(e) : e)
                }
            }
            _stateRcdataLessThanSign(e) {
                e === Jt.SOLIDUS ? this.state = On.RCDATA_END_TAG_OPEN : (this._emitChars("<"),
                this.state = On.RCDATA,
                this._stateRcdata(e))
            }
            _stateRcdataEndTagOpen(e) {
                wn(e) ? (this.state = On.RCDATA_END_TAG_NAME,
                this._stateRcdataEndTagName(e)) : (this._emitChars("</"),
                this.state = On.RCDATA,
                this._stateRcdata(e))
            }
            handleSpecialEndTag(e) {
                if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
                    return !this._ensureHibernation();
                switch (this._createEndTagToken(),
                this.currentToken.tagName = this.lastStartTagName,
                this.preprocessor.peek(this.lastStartTagName.length)) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    return this._advanceBy(this.lastStartTagName.length),
                    this.state = On.BEFORE_ATTRIBUTE_NAME,
                    !1;
                case Jt.SOLIDUS:
                    return this._advanceBy(this.lastStartTagName.length),
                    this.state = On.SELF_CLOSING_START_TAG,
                    !1;
                case Jt.GREATER_THAN_SIGN:
                    return this._advanceBy(this.lastStartTagName.length),
                    this.emitCurrentTagToken(),
                    this.state = On.DATA,
                    !1;
                default:
                    return !this._ensureHibernation()
                }
            }
            _stateRcdataEndTagName(e) {
                this.handleSpecialEndTag(e) && (this._emitChars("</"),
                this.state = On.RCDATA,
                this._stateRcdata(e))
            }
            _stateRawtextLessThanSign(e) {
                e === Jt.SOLIDUS ? this.state = On.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"),
                this.state = On.RAWTEXT,
                this._stateRawtext(e))
            }
            _stateRawtextEndTagOpen(e) {
                wn(e) ? (this.state = On.RAWTEXT_END_TAG_NAME,
                this._stateRawtextEndTagName(e)) : (this._emitChars("</"),
                this.state = On.RAWTEXT,
                this._stateRawtext(e))
            }
            _stateRawtextEndTagName(e) {
                this.handleSpecialEndTag(e) && (this._emitChars("</"),
                this.state = On.RAWTEXT,
                this._stateRawtext(e))
            }
            _stateScriptDataLessThanSign(e) {
                switch (e) {
                case Jt.SOLIDUS:
                    this.state = On.SCRIPT_DATA_END_TAG_OPEN;
                    break;
                case Jt.EXCLAMATION_MARK:
                    this.state = On.SCRIPT_DATA_ESCAPE_START,
                    this._emitChars("<!");
                    break;
                default:
                    this._emitChars("<"),
                    this.state = On.SCRIPT_DATA,
                    this._stateScriptData(e)
                }
            }
            _stateScriptDataEndTagOpen(e) {
                wn(e) ? (this.state = On.SCRIPT_DATA_END_TAG_NAME,
                this._stateScriptDataEndTagName(e)) : (this._emitChars("</"),
                this.state = On.SCRIPT_DATA,
                this._stateScriptData(e))
            }
            _stateScriptDataEndTagName(e) {
                this.handleSpecialEndTag(e) && (this._emitChars("</"),
                this.state = On.SCRIPT_DATA,
                this._stateScriptData(e))
            }
            _stateScriptDataEscapeStart(e) {
                e === Jt.HYPHEN_MINUS ? (this.state = On.SCRIPT_DATA_ESCAPE_START_DASH,
                this._emitChars("-")) : (this.state = On.SCRIPT_DATA,
                this._stateScriptData(e))
            }
            _stateScriptDataEscapeStartDash(e) {
                e === Jt.HYPHEN_MINUS ? (this.state = On.SCRIPT_DATA_ESCAPED_DASH_DASH,
                this._emitChars("-")) : (this.state = On.SCRIPT_DATA,
                this._stateScriptData(e))
            }
            _stateScriptDataEscaped(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.SCRIPT_DATA_ESCAPED_DASH,
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataEscapedDash(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.SCRIPT_DATA_ESCAPED_DASH_DASH,
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.state = On.SCRIPT_DATA_ESCAPED,
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this.state = On.SCRIPT_DATA_ESCAPED,
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataEscapedDashDash(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.SCRIPT_DATA,
                    this._emitChars(">");
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.state = On.SCRIPT_DATA_ESCAPED,
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this.state = On.SCRIPT_DATA_ESCAPED,
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataEscapedLessThanSign(e) {
                e === Jt.SOLIDUS ? this.state = On.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : wn(e) ? (this._emitChars("<"),
                this.state = On.SCRIPT_DATA_DOUBLE_ESCAPE_START,
                this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"),
                this.state = On.SCRIPT_DATA_ESCAPED,
                this._stateScriptDataEscaped(e))
            }
            _stateScriptDataEscapedEndTagOpen(e) {
                wn(e) ? (this.state = On.SCRIPT_DATA_ESCAPED_END_TAG_NAME,
                this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"),
                this.state = On.SCRIPT_DATA_ESCAPED,
                this._stateScriptDataEscaped(e))
            }
            _stateScriptDataEscapedEndTagName(e) {
                this.handleSpecialEndTag(e) && (this._emitChars("</"),
                this.state = On.SCRIPT_DATA_ESCAPED,
                this._stateScriptDataEscaped(e))
            }
            _stateScriptDataDoubleEscapeStart(e) {
                if (this.preprocessor.startsWith(en, !1) && Fn(this.preprocessor.peek(en.length))) {
                    this._emitCodePoint(e);
                    for (let e = 0; e < en.length; e++)
                        this._emitCodePoint(this._consume());
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED
                } else
                    this._ensureHibernation() || (this.state = On.SCRIPT_DATA_ESCAPED,
                    this._stateScriptDataEscaped(e))
            }
            _stateScriptDataDoubleEscaped(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,
                    this._emitChars("<");
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataDoubleEscapedDash(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,
                    this._emitChars("<");
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataDoubleEscapedDashDash(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this._emitChars("-");
                    break;
                case Jt.LESS_THAN_SIGN:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,
                    this._emitChars("<");
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.SCRIPT_DATA,
                    this._emitChars(">");
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                    this._emitChars(zt);
                    break;
                case Jt.EOF:
                    this._err(an.eofInScriptHtmlCommentLikeText),
                    this._emitEOFToken();
                    break;
                default:
                    this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                    this._emitCodePoint(e)
                }
            }
            _stateScriptDataDoubleEscapedLessThanSign(e) {
                e === Jt.SOLIDUS ? (this.state = On.SCRIPT_DATA_DOUBLE_ESCAPE_END,
                this._emitChars("/")) : (this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                this._stateScriptDataDoubleEscaped(e))
            }
            _stateScriptDataDoubleEscapeEnd(e) {
                if (this.preprocessor.startsWith(en, !1) && Fn(this.preprocessor.peek(en.length))) {
                    this._emitCodePoint(e);
                    for (let e = 0; e < en.length; e++)
                        this._emitCodePoint(this._consume());
                    this.state = On.SCRIPT_DATA_ESCAPED
                } else
                    this._ensureHibernation() || (this.state = On.SCRIPT_DATA_DOUBLE_ESCAPED,
                    this._stateScriptDataDoubleEscaped(e))
            }
            _stateBeforeAttributeName(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.SOLIDUS:
                case Jt.GREATER_THAN_SIGN:
                case Jt.EOF:
                    this.state = On.AFTER_ATTRIBUTE_NAME,
                    this._stateAfterAttributeName(e);
                    break;
                case Jt.EQUALS_SIGN:
                    this._err(an.unexpectedEqualsSignBeforeAttributeName),
                    this._createAttr("="),
                    this.state = On.ATTRIBUTE_NAME;
                    break;
                default:
                    this._createAttr(""),
                    this.state = On.ATTRIBUTE_NAME,
                    this._stateAttributeName(e)
                }
            }
            _stateAttributeName(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                case Jt.SOLIDUS:
                case Jt.GREATER_THAN_SIGN:
                case Jt.EOF:
                    this._leaveAttrName(),
                    this.state = On.AFTER_ATTRIBUTE_NAME,
                    this._stateAfterAttributeName(e);
                    break;
                case Jt.EQUALS_SIGN:
                    this._leaveAttrName(),
                    this.state = On.BEFORE_ATTRIBUTE_VALUE;
                    break;
                case Jt.QUOTATION_MARK:
                case Jt.APOSTROPHE:
                case Jt.LESS_THAN_SIGN:
                    this._err(an.unexpectedCharacterInAttributeName),
                    this.currentAttr.name += String.fromCodePoint(e);
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.currentAttr.name += zt;
                    break;
                default:
                    this.currentAttr.name += String.fromCodePoint(yn(e) ? xn(e) : e)
                }
            }
            _stateAfterAttributeName(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.SOLIDUS:
                    this.state = On.SELF_CLOSING_START_TAG;
                    break;
                case Jt.EQUALS_SIGN:
                    this.state = On.BEFORE_ATTRIBUTE_VALUE;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this._createAttr(""),
                    this.state = On.ATTRIBUTE_NAME,
                    this._stateAttributeName(e)
                }
            }
            _stateBeforeAttributeValue(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.QUOTATION_MARK:
                    this.state = On.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    this.state = On.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.missingAttributeValue),
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                default:
                    this.state = On.ATTRIBUTE_VALUE_UNQUOTED,
                    this._stateAttributeValueUnquoted(e)
                }
            }
            _stateAttributeValueDoubleQuoted(e) {
                switch (e) {
                case Jt.QUOTATION_MARK:
                    this.state = On.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                case Jt.AMPERSAND:
                    this.returnState = On.ATTRIBUTE_VALUE_DOUBLE_QUOTED,
                    this.state = On.CHARACTER_REFERENCE;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.currentAttr.value += zt;
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this.currentAttr.value += String.fromCodePoint(e)
                }
            }
            _stateAttributeValueSingleQuoted(e) {
                switch (e) {
                case Jt.APOSTROPHE:
                    this.state = On.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                case Jt.AMPERSAND:
                    this.returnState = On.ATTRIBUTE_VALUE_SINGLE_QUOTED,
                    this.state = On.CHARACTER_REFERENCE;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.currentAttr.value += zt;
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this.currentAttr.value += String.fromCodePoint(e)
                }
            }
            _stateAttributeValueUnquoted(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this._leaveAttrValue(),
                    this.state = On.BEFORE_ATTRIBUTE_NAME;
                    break;
                case Jt.AMPERSAND:
                    this.returnState = On.ATTRIBUTE_VALUE_UNQUOTED,
                    this.state = On.CHARACTER_REFERENCE;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._leaveAttrValue(),
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    this.currentAttr.value += zt;
                    break;
                case Jt.QUOTATION_MARK:
                case Jt.APOSTROPHE:
                case Jt.LESS_THAN_SIGN:
                case Jt.EQUALS_SIGN:
                case Jt.GRAVE_ACCENT:
                    this._err(an.unexpectedCharacterInUnquotedAttributeValue),
                    this.currentAttr.value += String.fromCodePoint(e);
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this.currentAttr.value += String.fromCodePoint(e)
                }
            }
            _stateAfterAttributeValueQuoted(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this._leaveAttrValue(),
                    this.state = On.BEFORE_ATTRIBUTE_NAME;
                    break;
                case Jt.SOLIDUS:
                    this._leaveAttrValue(),
                    this.state = On.SELF_CLOSING_START_TAG;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._leaveAttrValue(),
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingWhitespaceBetweenAttributes),
                    this.state = On.BEFORE_ATTRIBUTE_NAME,
                    this._stateBeforeAttributeName(e)
                }
            }
            _stateSelfClosingStartTag(e) {
                switch (e) {
                case Jt.GREATER_THAN_SIGN:
                    this.currentToken.selfClosing = !0,
                    this.state = On.DATA,
                    this.emitCurrentTagToken();
                    break;
                case Jt.EOF:
                    this._err(an.eofInTag),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.unexpectedSolidusInTag),
                    this.state = On.BEFORE_ATTRIBUTE_NAME,
                    this._stateBeforeAttributeName(e)
                }
            }
            _stateBogusComment(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentComment(t);
                    break;
                case Jt.EOF:
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.data += zt;
                    break;
                default:
                    t.data += String.fromCodePoint(e)
                }
            }
            _stateMarkupDeclarationOpen(e) {
                this._consumeSequenceIfMatch("--", !0) ? (this._createCommentToken("--".length + 1),
                this.state = On.COMMENT_START) : this._consumeSequenceIfMatch(Zt, !1) ? (this.currentLocation = this.getCurrentLocation(Zt.length + 1),
                this.state = On.DOCTYPE) : this._consumeSequenceIfMatch($t, !0) ? this.inForeignNode ? this.state = On.CDATA_SECTION : (this._err(an.cdataInHtmlContent),
                this._createCommentToken($t.length + 1),
                this.currentToken.data = "[CDATA[",
                this.state = On.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(an.incorrectlyOpenedComment),
                this._createCommentToken(2),
                this.state = On.BOGUS_COMMENT,
                this._stateBogusComment(e))
            }
            _stateCommentStart(e) {
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.COMMENT_START_DASH;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    {
                        this._err(an.abruptClosingOfEmptyComment),
                        this.state = On.DATA;
                        const e = this.currentToken;
                        this.emitCurrentComment(e);
                        break
                    }
                default:
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateCommentStartDash(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.COMMENT_END;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.abruptClosingOfEmptyComment),
                    this.state = On.DATA,
                    this.emitCurrentComment(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInComment),
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.data += "-",
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateComment(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.COMMENT_END_DASH;
                    break;
                case Jt.LESS_THAN_SIGN:
                    t.data += "<",
                    this.state = On.COMMENT_LESS_THAN_SIGN;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.data += zt;
                    break;
                case Jt.EOF:
                    this._err(an.eofInComment),
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.data += String.fromCodePoint(e)
                }
            }
            _stateCommentLessThanSign(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.EXCLAMATION_MARK:
                    t.data += "!",
                    this.state = On.COMMENT_LESS_THAN_SIGN_BANG;
                    break;
                case Jt.LESS_THAN_SIGN:
                    t.data += "<";
                    break;
                default:
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateCommentLessThanSignBang(e) {
                e === Jt.HYPHEN_MINUS ? this.state = On.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = On.COMMENT,
                this._stateComment(e))
            }
            _stateCommentLessThanSignBangDash(e) {
                e === Jt.HYPHEN_MINUS ? this.state = On.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = On.COMMENT_END_DASH,
                this._stateCommentEndDash(e))
            }
            _stateCommentLessThanSignBangDashDash(e) {
                e !== Jt.GREATER_THAN_SIGN && e !== Jt.EOF && this._err(an.nestedComment),
                this.state = On.COMMENT_END,
                this._stateCommentEnd(e)
            }
            _stateCommentEndDash(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    this.state = On.COMMENT_END;
                    break;
                case Jt.EOF:
                    this._err(an.eofInComment),
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.data += "-",
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateCommentEnd(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentComment(t);
                    break;
                case Jt.EXCLAMATION_MARK:
                    this.state = On.COMMENT_END_BANG;
                    break;
                case Jt.HYPHEN_MINUS:
                    t.data += "-";
                    break;
                case Jt.EOF:
                    this._err(an.eofInComment),
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.data += "--",
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateCommentEndBang(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.HYPHEN_MINUS:
                    t.data += "--!",
                    this.state = On.COMMENT_END_DASH;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.incorrectlyClosedComment),
                    this.state = On.DATA,
                    this.emitCurrentComment(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInComment),
                    this.emitCurrentComment(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.data += "--!",
                    this.state = On.COMMENT,
                    this._stateComment(e)
                }
            }
            _stateDoctype(e) {
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.BEFORE_DOCTYPE_NAME;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.BEFORE_DOCTYPE_NAME,
                    this._stateBeforeDoctypeName(e);
                    break;
                case Jt.EOF:
                    {
                        this._err(an.eofInDoctype),
                        this._createDoctypeToken(null);
                        const e = this.currentToken;
                        e.forceQuirks = !0,
                        this.emitCurrentDoctype(e),
                        this._emitEOFToken();
                        break
                    }
                default:
                    this._err(an.missingWhitespaceBeforeDoctypeName),
                    this.state = On.BEFORE_DOCTYPE_NAME,
                    this._stateBeforeDoctypeName(e)
                }
            }
            _stateBeforeDoctypeName(e) {
                if (yn(e))
                    this._createDoctypeToken(String.fromCharCode(xn(e))),
                    this.state = On.DOCTYPE_NAME;
                else
                    switch (e) {
                    case Jt.SPACE:
                    case Jt.LINE_FEED:
                    case Jt.TABULATION:
                    case Jt.FORM_FEED:
                        break;
                    case Jt.NULL:
                        this._err(an.unexpectedNullCharacter),
                        this._createDoctypeToken(zt),
                        this.state = On.DOCTYPE_NAME;
                        break;
                    case Jt.GREATER_THAN_SIGN:
                        {
                            this._err(an.missingDoctypeName),
                            this._createDoctypeToken(null);
                            const e = this.currentToken;
                            e.forceQuirks = !0,
                            this.emitCurrentDoctype(e),
                            this.state = On.DATA;
                            break
                        }
                    case Jt.EOF:
                        {
                            this._err(an.eofInDoctype),
                            this._createDoctypeToken(null);
                            const e = this.currentToken;
                            e.forceQuirks = !0,
                            this.emitCurrentDoctype(e),
                            this._emitEOFToken();
                            break
                        }
                    default:
                        this._createDoctypeToken(String.fromCodePoint(e)),
                        this.state = On.DOCTYPE_NAME
                    }
            }
            _stateDoctypeName(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.AFTER_DOCTYPE_NAME;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.name += zt;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.name += String.fromCodePoint(yn(e) ? xn(e) : e)
                }
            }
            _stateAfterDoctypeName(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._consumeSequenceIfMatch("public", !1) ? this.state = On.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch("system", !1) ? this.state = On.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(an.invalidCharacterSequenceAfterDoctypeName),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e))
                }
            }
            _stateAfterDoctypePublicKeyword(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                case Jt.QUOTATION_MARK:
                    this._err(an.missingWhitespaceAfterDoctypePublicKeyword),
                    t.publicId = "",
                    this.state = On.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    this._err(an.missingWhitespaceAfterDoctypePublicKeyword),
                    t.publicId = "",
                    this.state = On.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.missingDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateBeforeDoctypePublicIdentifier(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.QUOTATION_MARK:
                    t.publicId = "",
                    this.state = On.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    t.publicId = "",
                    this.state = On.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.missingDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateDoctypePublicIdentifierDoubleQuoted(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.QUOTATION_MARK:
                    this.state = On.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.publicId += zt;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.abruptDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.publicId += String.fromCodePoint(e)
                }
            }
            _stateDoctypePublicIdentifierSingleQuoted(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.APOSTROPHE:
                    this.state = On.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.publicId += zt;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.abruptDoctypePublicIdentifier),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.publicId += String.fromCodePoint(e)
                }
            }
            _stateAfterDoctypePublicIdentifier(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.QUOTATION_MARK:
                    this._err(an.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    this._err(an.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.QUOTATION_MARK:
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateAfterDoctypeSystemKeyword(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    this.state = On.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                case Jt.QUOTATION_MARK:
                    this._err(an.missingWhitespaceAfterDoctypeSystemKeyword),
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    this._err(an.missingWhitespaceAfterDoctypeSystemKeyword),
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.missingDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateBeforeDoctypeSystemIdentifier(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.QUOTATION_MARK:
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                case Jt.APOSTROPHE:
                    t.systemId = "",
                    this.state = On.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.missingDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.DATA,
                    this.emitCurrentDoctype(t);
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.missingQuoteBeforeDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateDoctypeSystemIdentifierDoubleQuoted(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.QUOTATION_MARK:
                    this.state = On.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.systemId += zt;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.abruptDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.systemId += String.fromCodePoint(e)
                }
            }
            _stateDoctypeSystemIdentifierSingleQuoted(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.APOSTROPHE:
                    this.state = On.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter),
                    t.systemId += zt;
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this._err(an.abruptDoctypeSystemIdentifier),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    t.systemId += String.fromCodePoint(e)
                }
            }
            _stateAfterDoctypeSystemIdentifier(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.SPACE:
                case Jt.LINE_FEED:
                case Jt.TABULATION:
                case Jt.FORM_FEED:
                    break;
                case Jt.GREATER_THAN_SIGN:
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.EOF:
                    this._err(an.eofInDoctype),
                    t.forceQuirks = !0,
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken();
                    break;
                default:
                    this._err(an.unexpectedCharacterAfterDoctypeSystemIdentifier),
                    this.state = On.BOGUS_DOCTYPE,
                    this._stateBogusDoctype(e)
                }
            }
            _stateBogusDoctype(e) {
                const t = this.currentToken;
                switch (e) {
                case Jt.GREATER_THAN_SIGN:
                    this.emitCurrentDoctype(t),
                    this.state = On.DATA;
                    break;
                case Jt.NULL:
                    this._err(an.unexpectedNullCharacter);
                    break;
                case Jt.EOF:
                    this.emitCurrentDoctype(t),
                    this._emitEOFToken()
                }
            }
            _stateCdataSection(e) {
                switch (e) {
                case Jt.RIGHT_SQUARE_BRACKET:
                    this.state = On.CDATA_SECTION_BRACKET;
                    break;
                case Jt.EOF:
                    this._err(an.eofInCdata),
                    this._emitEOFToken();
                    break;
                default:
                    this._emitCodePoint(e)
                }
            }
            _stateCdataSectionBracket(e) {
                e === Jt.RIGHT_SQUARE_BRACKET ? this.state = On.CDATA_SECTION_END : (this._emitChars("]"),
                this.state = On.CDATA_SECTION,
                this._stateCdataSection(e))
            }
            _stateCdataSectionEnd(e) {
                switch (e) {
                case Jt.GREATER_THAN_SIGN:
                    this.state = On.DATA;
                    break;
                case Jt.RIGHT_SQUARE_BRACKET:
                    this._emitChars("]");
                    break;
                default:
                    this._emitChars("]]"),
                    this.state = On.CDATA_SECTION,
                    this._stateCdataSection(e)
                }
            }
            _stateCharacterReference(e) {
                e === Jt.NUMBER_SIGN ? this.state = On.NUMERIC_CHARACTER_REFERENCE : vn(e) ? (this.state = On.NAMED_CHARACTER_REFERENCE,
                this._stateNamedCharacterReference(e)) : (this._flushCodePointConsumedAsCharacterReference(Jt.AMPERSAND),
                this._reconsumeInState(this.returnState))
            }
            _stateNamedCharacterReference(e) {
                const t = this._matchNamedCharacterReference(e);
                if (this._ensureHibernation())
                    ;
                else if (t) {
                    for (let e = 0; e < t.length; e++)
                        this._flushCodePointConsumedAsCharacterReference(t[e]);
                    this.state = this.returnState
                } else
                    this._flushCodePointConsumedAsCharacterReference(Jt.AMPERSAND),
                    this.state = On.AMBIGUOUS_AMPERSAND
            }
            _stateAmbiguousAmpersand(e) {
                vn(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === Jt.SEMICOLON && this._err(an.unknownNamedCharacterReference),
                this._reconsumeInState(this.returnState))
            }
            _stateNumericCharacterReference(e) {
                this.charRefCode = 0,
                e === Jt.LATIN_SMALL_X || e === Jt.LATIN_CAPITAL_X ? this.state = On.HEXADEMICAL_CHARACTER_REFERENCE_START : (this.state = On.DECIMAL_CHARACTER_REFERENCE_START,
                this._stateDecimalCharacterReferenceStart(e))
            }
            _stateHexademicalCharacterReferenceStart(e) {
                !function(e) {
                    return Mn(e) || Bn(e) || Un(e)
                }(e) ? (this._err(an.absenceOfDigitsInNumericCharacterReference),
                this._flushCodePointConsumedAsCharacterReference(Jt.AMPERSAND),
                this._flushCodePointConsumedAsCharacterReference(Jt.NUMBER_SIGN),
                this._unconsume(2),
                this.state = this.returnState) : (this.state = On.HEXADEMICAL_CHARACTER_REFERENCE,
                this._stateHexademicalCharacterReference(e))
            }
            _stateDecimalCharacterReferenceStart(e) {
                Mn(e) ? (this.state = On.DECIMAL_CHARACTER_REFERENCE,
                this._stateDecimalCharacterReference(e)) : (this._err(an.absenceOfDigitsInNumericCharacterReference),
                this._flushCodePointConsumedAsCharacterReference(Jt.AMPERSAND),
                this._flushCodePointConsumedAsCharacterReference(Jt.NUMBER_SIGN),
                this._reconsumeInState(this.returnState))
            }
            _stateHexademicalCharacterReference(e) {
                Bn(e) ? this.charRefCode = 16 * this.charRefCode + e - 55 : Un(e) ? this.charRefCode = 16 * this.charRefCode + e - 87 : Mn(e) ? this.charRefCode = 16 * this.charRefCode + e - 48 : e === Jt.SEMICOLON ? this.state = On.NUMERIC_CHARACTER_REFERENCE_END : (this._err(an.missingSemicolonAfterCharacterReference),
                this.state = On.NUMERIC_CHARACTER_REFERENCE_END,
                this._stateNumericCharacterReferenceEnd())
            }
            _stateDecimalCharacterReference(e) {
                Mn(e) ? this.charRefCode = 10 * this.charRefCode + e - 48 : e === Jt.SEMICOLON ? this.state = On.NUMERIC_CHARACTER_REFERENCE_END : (this._err(an.missingSemicolonAfterCharacterReference),
                this.state = On.NUMERIC_CHARACTER_REFERENCE_END,
                this._stateNumericCharacterReferenceEnd())
            }
            _stateNumericCharacterReferenceEnd() {
                if (this.charRefCode === Jt.NULL)
                    this._err(an.nullCharacterReference),
                    this.charRefCode = Jt.REPLACEMENT_CHARACTER;
                else if (this.charRefCode > 1114111)
                    this._err(an.characterReferenceOutsideUnicodeRange),
                    this.charRefCode = Jt.REPLACEMENT_CHARACTER;
                else if (tn(this.charRefCode))
                    this._err(an.surrogateCharacterReference),
                    this.charRefCode = Jt.REPLACEMENT_CHARACTER;
                else if (sn(this.charRefCode))
                    this._err(an.noncharacterCharacterReference);
                else if (nn(this.charRefCode) || this.charRefCode === Jt.CARRIAGE_RETURN) {
                    this._err(an.controlCharacterReference);
                    const e = Pn.get(this.charRefCode);
                    void 0 !== e && (this.charRefCode = e)
                }
                this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
                this._reconsumeInState(this.returnState)
            }
        }
        const jn = new Set([Cn.DD, Cn.DT, Cn.LI, Cn.OPTGROUP, Cn.OPTION, Cn.P, Cn.RB, Cn.RP, Cn.RT, Cn.RTC])
          , Yn = new Set([...jn, Cn.CAPTION, Cn.COLGROUP, Cn.TBODY, Cn.TD, Cn.TFOOT, Cn.TH, Cn.THEAD, Cn.TR])
          , qn = new Map([[Cn.APPLET, mn.HTML], [Cn.CAPTION, mn.HTML], [Cn.HTML, mn.HTML], [Cn.MARQUEE, mn.HTML], [Cn.OBJECT, mn.HTML], [Cn.TABLE, mn.HTML], [Cn.TD, mn.HTML], [Cn.TEMPLATE, mn.HTML], [Cn.TH, mn.HTML], [Cn.ANNOTATION_XML, mn.MATHML], [Cn.MI, mn.MATHML], [Cn.MN, mn.MATHML], [Cn.MO, mn.MATHML], [Cn.MS, mn.MATHML], [Cn.MTEXT, mn.MATHML], [Cn.DESC, mn.SVG], [Cn.FOREIGN_OBJECT, mn.SVG], [Cn.TITLE, mn.SVG]])
          , Vn = [Cn.H1, Cn.H2, Cn.H3, Cn.H4, Cn.H5, Cn.H6]
          , Xn = [Cn.TR, Cn.TEMPLATE, Cn.HTML]
          , Wn = [Cn.TBODY, Cn.TFOOT, Cn.THEAD, Cn.TEMPLATE, Cn.HTML]
          , Qn = [Cn.TABLE, Cn.TEMPLATE, Cn.HTML]
          , Kn = [Cn.TD, Cn.TH];
        class zn {
            constructor(e, t, n) {
                this.treeAdapter = t,
                this.handler = n,
                this.items = [],
                this.tagIDs = [],
                this.stackTop = -1,
                this.tmplCount = 0,
                this.currentTagId = Cn.UNKNOWN,
                this.current = e
            }
            get currentTmplContentOrNode() {
                return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current
            }
            _indexOf(e) {
                return this.items.lastIndexOf(e, this.stackTop)
            }
            _isInTemplate() {
                return this.currentTagId === Cn.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === mn.HTML
            }
            _updateCurrentElement() {
                this.current = this.items[this.stackTop],
                this.currentTagId = this.tagIDs[this.stackTop]
            }
            push(e, t) {
                this.stackTop++,
                this.items[this.stackTop] = e,
                this.current = e,
                this.tagIDs[this.stackTop] = t,
                this.currentTagId = t,
                this._isInTemplate() && this.tmplCount++,
                this.handler.onItemPush(e, t, !0)
            }
            pop() {
                const e = this.current;
                this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !0)
            }
            replace(e, t) {
                const n = this._indexOf(e);
                this.items[n] = t,
                n === this.stackTop && (this.current = t)
            }
            insertAfter(e, t, n) {
                const s = this._indexOf(e) + 1;
                this.items.splice(s, 0, t),
                this.tagIDs.splice(s, 0, n),
                this.stackTop++,
                s === this.stackTop && this._updateCurrentElement(),
                this.handler.onItemPush(this.current, this.currentTagId, s === this.stackTop)
            }
            popUntilTagNamePopped(e) {
                let t = this.stackTop + 1;
                do {
                    t = this.tagIDs.lastIndexOf(e, t - 1)
                } while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== mn.HTML);
                this.shortenToLength(t < 0 ? 0 : t)
            }
            shortenToLength(e) {
                for (; this.stackTop >= e; ) {
                    const t = this.current;
                    this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
                    this.stackTop--,
                    this._updateCurrentElement(),
                    this.handler.onItemPop(t, this.stackTop < e)
                }
            }
            popUntilElementPopped(e) {
                const t = this._indexOf(e);
                this.shortenToLength(t < 0 ? 0 : t)
            }
            popUntilPopped(e, t) {
                const n = this._indexOfTagNames(e, t);
                this.shortenToLength(n < 0 ? 0 : n)
            }
            popUntilNumberedHeaderPopped() {
                this.popUntilPopped(Vn, mn.HTML)
            }
            popUntilTableCellPopped() {
                this.popUntilPopped(Kn, mn.HTML)
            }
            popAllUpToHtmlElement() {
                this.tmplCount = 0,
                this.shortenToLength(1)
            }
            _indexOfTagNames(e, t) {
                for (let n = this.stackTop; n >= 0; n--)
                    if (e.includes(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t)
                        return n;
                return -1
            }
            clearBackTo(e, t) {
                const n = this._indexOfTagNames(e, t);
                this.shortenToLength(n + 1)
            }
            clearBackToTableContext() {
                this.clearBackTo(Qn, mn.HTML)
            }
            clearBackToTableBodyContext() {
                this.clearBackTo(Wn, mn.HTML)
            }
            clearBackToTableRowContext() {
                this.clearBackTo(Xn, mn.HTML)
            }
            remove(e) {
                const t = this._indexOf(e);
                t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)))
            }
            tryPeekProperlyNestedBodyElement() {
                return this.stackTop >= 1 && this.tagIDs[1] === Cn.BODY ? this.items[1] : null
            }
            contains(e) {
                return this._indexOf(e) > -1
            }
            getCommonAncestor(e) {
                const t = this._indexOf(e) - 1;
                return t >= 0 ? this.items[t] : null
            }
            isRootHtmlElementCurrent() {
                return 0 === this.stackTop && this.tagIDs[0] === Cn.HTML
            }
            hasInScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    const n = this.tagIDs[t]
                      , s = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && s === mn.HTML)
                        return !0;
                    if (qn.get(n) === s)
                        return !1
                }
                return !0
            }
            hasNumberedHeaderInScope() {
                for (let e = this.stackTop; e >= 0; e--) {
                    const t = this.tagIDs[e]
                      , n = this.treeAdapter.getNamespaceURI(this.items[e]);
                    if (bn(t) && n === mn.HTML)
                        return !0;
                    if (qn.get(t) === n)
                        return !1
                }
                return !0
            }
            hasInListItemScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    const n = this.tagIDs[t]
                      , s = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && s === mn.HTML)
                        return !0;
                    if ((n === Cn.UL || n === Cn.OL) && s === mn.HTML || qn.get(n) === s)
                        return !1
                }
                return !0
            }
            hasInButtonScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    const n = this.tagIDs[t]
                      , s = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && s === mn.HTML)
                        return !0;
                    if (n === Cn.BUTTON && s === mn.HTML || qn.get(n) === s)
                        return !1
                }
                return !0
            }
            hasInTableScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    const n = this.tagIDs[t];
                    if (this.treeAdapter.getNamespaceURI(this.items[t]) === mn.HTML) {
                        if (n === e)
                            return !0;
                        if (n === Cn.TABLE || n === Cn.TEMPLATE || n === Cn.HTML)
                            return !1
                    }
                }
                return !0
            }
            hasTableBodyContextInTableScope() {
                for (let e = this.stackTop; e >= 0; e--) {
                    const t = this.tagIDs[e];
                    if (this.treeAdapter.getNamespaceURI(this.items[e]) === mn.HTML) {
                        if (t === Cn.TBODY || t === Cn.THEAD || t === Cn.TFOOT)
                            return !0;
                        if (t === Cn.TABLE || t === Cn.HTML)
                            return !1
                    }
                }
                return !0
            }
            hasInSelectScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    const n = this.tagIDs[t];
                    if (this.treeAdapter.getNamespaceURI(this.items[t]) === mn.HTML) {
                        if (n === e)
                            return !0;
                        if (n !== Cn.OPTION && n !== Cn.OPTGROUP)
                            return !1
                    }
                }
                return !0
            }
            generateImpliedEndTags() {
                for (; jn.has(this.currentTagId); )
                    this.pop()
            }
            generateImpliedEndTagsThoroughly() {
                for (; Yn.has(this.currentTagId); )
                    this.pop()
            }
            generateImpliedEndTagsWithExclusion(e) {
                for (; this.currentTagId !== e && Yn.has(this.currentTagId); )
                    this.pop()
            }
        }
        var Jn;
        !function(e) {
            e[e.Marker = 0] = "Marker",
            e[e.Element = 1] = "Element"
        }(Jn || (Jn = {}));
        const $n = {
            type: Jn.Marker
        };
        class Zn {
            constructor(e) {
                this.treeAdapter = e,
                this.entries = [],
                this.bookmark = null
            }
            _getNoahArkConditionCandidates(e, t) {
                const n = []
                  , s = t.length
                  , a = this.treeAdapter.getTagName(e)
                  , r = this.treeAdapter.getNamespaceURI(e);
                for (let e = 0; e < this.entries.length; e++) {
                    const t = this.entries[e];
                    if (t.type === Jn.Marker)
                        break;
                    const {element: o} = t;
                    if (this.treeAdapter.getTagName(o) === a && this.treeAdapter.getNamespaceURI(o) === r) {
                        const t = this.treeAdapter.getAttrList(o);
                        t.length === s && n.push({
                            idx: e,
                            attrs: t
                        })
                    }
                }
                return n
            }
            _ensureNoahArkCondition(e) {
                if (this.entries.length < 3)
                    return;
                const t = this.treeAdapter.getAttrList(e)
                  , n = this._getNoahArkConditionCandidates(e, t);
                if (n.length < 3)
                    return;
                const s = new Map(t.map((e=>[e.name, e.value])));
                let a = 0;
                for (let e = 0; e < n.length; e++) {
                    const t = n[e];
                    t.attrs.every((e=>s.get(e.name) === e.value)) && (a += 1,
                    a >= 3 && this.entries.splice(t.idx, 1))
                }
            }
            insertMarker() {
                this.entries.unshift($n)
            }
            pushElement(e, t) {
                this._ensureNoahArkCondition(e),
                this.entries.unshift({
                    type: Jn.Element,
                    element: e,
                    token: t
                })
            }
            insertElementAfterBookmark(e, t) {
                const n = this.entries.indexOf(this.bookmark);
                this.entries.splice(n, 0, {
                    type: Jn.Element,
                    element: e,
                    token: t
                })
            }
            removeEntry(e) {
                const t = this.entries.indexOf(e);
                t >= 0 && this.entries.splice(t, 1)
            }
            clearToLastMarker() {
                const e = this.entries.indexOf($n);
                e >= 0 ? this.entries.splice(0, e + 1) : this.entries.length = 0
            }
            getElementEntryInScopeWithTagName(e) {
                const t = this.entries.find((t=>t.type === Jn.Marker || this.treeAdapter.getTagName(t.element) === e));
                return t && t.type === Jn.Element ? t : null
            }
            getElementEntry(e) {
                return this.entries.find((t=>t.type === Jn.Element && t.element === e))
            }
        }
        var es;
        function ts(e) {
            return {
                nodeName: es.Text,
                value: e,
                parentNode: null
            }
        }
        !function(e) {
            e.Document = "#document",
            e.DocumentFragment = "#document-fragment",
            e.Comment = "#comment",
            e.Text = "#text",
            e.DocumentType = "#documentType"
        }(es || (es = {}));
        const ns = {
            createDocument: ()=>({
                nodeName: es.Document,
                mode: An.NO_QUIRKS,
                childNodes: []
            }),
            createDocumentFragment: ()=>({
                nodeName: es.DocumentFragment,
                childNodes: []
            }),
            createElement: (e,t,n)=>({
                nodeName: e,
                tagName: e,
                attrs: n,
                namespaceURI: t,
                childNodes: [],
                parentNode: null
            }),
            createCommentNode: e=>({
                nodeName: es.Comment,
                data: e,
                parentNode: null
            }),
            appendChild(e, t) {
                e.childNodes.push(t),
                t.parentNode = e
            },
            insertBefore(e, t, n) {
                const s = e.childNodes.indexOf(n);
                e.childNodes.splice(s, 0, t),
                t.parentNode = e
            },
            setTemplateContent(e, t) {
                e.content = t
            },
            getTemplateContent: e=>e.content,
            setDocumentType(e, t, n, s) {
                const a = e.childNodes.find((e=>e.nodeName === es.DocumentType));
                if (a)
                    a.name = t,
                    a.publicId = n,
                    a.systemId = s;
                else {
                    const a = {
                        nodeName: es.DocumentType,
                        name: t,
                        publicId: n,
                        systemId: s,
                        parentNode: null
                    };
                    ns.appendChild(e, a)
                }
            },
            setDocumentMode(e, t) {
                e.mode = t
            },
            getDocumentMode: e=>e.mode,
            detachNode(e) {
                if (e.parentNode) {
                    const t = e.parentNode.childNodes.indexOf(e);
                    e.parentNode.childNodes.splice(t, 1),
                    e.parentNode = null
                }
            },
            insertText(e, t) {
                if (e.childNodes.length > 0) {
                    const n = e.childNodes[e.childNodes.length - 1];
                    if (ns.isTextNode(n))
                        return void (n.value += t)
                }
                ns.appendChild(e, ts(t))
            },
            insertTextBefore(e, t, n) {
                const s = e.childNodes[e.childNodes.indexOf(n) - 1];
                s && ns.isTextNode(s) ? s.value += t : ns.insertBefore(e, ts(t), n)
            },
            adoptAttributes(e, t) {
                const n = new Set(e.attrs.map((e=>e.name)));
                for (let s = 0; s < t.length; s++)
                    n.has(t[s].name) || e.attrs.push(t[s])
            },
            getFirstChild: e=>e.childNodes[0],
            getChildNodes: e=>e.childNodes,
            getParentNode: e=>e.parentNode,
            getAttrList: e=>e.attrs,
            getTagName: e=>e.tagName,
            getNamespaceURI: e=>e.namespaceURI,
            getTextNodeContent: e=>e.value,
            getCommentNodeContent: e=>e.data,
            getDocumentTypeNodeName: e=>e.name,
            getDocumentTypeNodePublicId: e=>e.publicId,
            getDocumentTypeNodeSystemId: e=>e.systemId,
            isTextNode: e=>"#text" === e.nodeName,
            isCommentNode: e=>"#comment" === e.nodeName,
            isDocumentTypeNode: e=>e.nodeName === es.DocumentType,
            isElementNode: e=>Object.prototype.hasOwnProperty.call(e, "tagName"),
            setNodeSourceCodeLocation(e, t) {
                e.sourceCodeLocation = t
            },
            getNodeSourceCodeLocation: e=>e.sourceCodeLocation,
            updateNodeSourceCodeLocation(e, t) {
                e.sourceCodeLocation = {
                    ...e.sourceCodeLocation,
                    ...t
                }
            }
        }
          , ss = "html"
          , as = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"]
          , rs = [...as, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]
          , os = new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"])
          , is = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"]
          , cs = [...is, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];
        function ls(e, t) {
            return t.some((t=>e.startsWith(t)))
        }
        const us = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map((e=>[e.toLowerCase(), e])))
          , Es = new Map([["xlink:actuate", {
            prefix: "xlink",
            name: "actuate",
            namespace: mn.XLINK
        }], ["xlink:arcrole", {
            prefix: "xlink",
            name: "arcrole",
            namespace: mn.XLINK
        }], ["xlink:href", {
            prefix: "xlink",
            name: "href",
            namespace: mn.XLINK
        }], ["xlink:role", {
            prefix: "xlink",
            name: "role",
            namespace: mn.XLINK
        }], ["xlink:show", {
            prefix: "xlink",
            name: "show",
            namespace: mn.XLINK
        }], ["xlink:title", {
            prefix: "xlink",
            name: "title",
            namespace: mn.XLINK
        }], ["xlink:type", {
            prefix: "xlink",
            name: "type",
            namespace: mn.XLINK
        }], ["xml:base", {
            prefix: "xml",
            name: "base",
            namespace: mn.XML
        }], ["xml:lang", {
            prefix: "xml",
            name: "lang",
            namespace: mn.XML
        }], ["xml:space", {
            prefix: "xml",
            name: "space",
            namespace: mn.XML
        }], ["xmlns", {
            prefix: "",
            name: "xmlns",
            namespace: mn.XMLNS
        }], ["xmlns:xlink", {
            prefix: "xmlns",
            name: "xlink",
            namespace: mn.XMLNS
        }]])
          , hs = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map((e=>[e.toLowerCase(), e])))
          , ps = new Set([Cn.B, Cn.BIG, Cn.BLOCKQUOTE, Cn.BODY, Cn.BR, Cn.CENTER, Cn.CODE, Cn.DD, Cn.DIV, Cn.DL, Cn.DT, Cn.EM, Cn.EMBED, Cn.H1, Cn.H2, Cn.H3, Cn.H4, Cn.H5, Cn.H6, Cn.HEAD, Cn.HR, Cn.I, Cn.IMG, Cn.LI, Cn.LISTING, Cn.MENU, Cn.META, Cn.NOBR, Cn.OL, Cn.P, Cn.PRE, Cn.RUBY, Cn.S, Cn.SMALL, Cn.SPAN, Cn.STRONG, Cn.STRIKE, Cn.SUB, Cn.SUP, Cn.TABLE, Cn.TT, Cn.U, Cn.UL, Cn.VAR]);
        function ds(e) {
            for (let t = 0; t < e.attrs.length; t++)
                if ("definitionurl" === e.attrs[t].name) {
                    e.attrs[t].name = "definitionURL";
                    break
                }
        }
        function Ts(e) {
            for (let t = 0; t < e.attrs.length; t++) {
                const n = us.get(e.attrs[t].name);
                null != n && (e.attrs[t].name = n)
            }
        }
        function ms(e) {
            for (let t = 0; t < e.attrs.length; t++) {
                const n = Es.get(e.attrs[t].name);
                n && (e.attrs[t].prefix = n.prefix,
                e.attrs[t].name = n.name,
                e.attrs[t].namespace = n.namespace)
            }
        }
        var fs;
        !function(e) {
            e[e.INITIAL = 0] = "INITIAL",
            e[e.BEFORE_HTML = 1] = "BEFORE_HTML",
            e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD",
            e[e.IN_HEAD = 3] = "IN_HEAD",
            e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT",
            e[e.AFTER_HEAD = 5] = "AFTER_HEAD",
            e[e.IN_BODY = 6] = "IN_BODY",
            e[e.TEXT = 7] = "TEXT",
            e[e.IN_TABLE = 8] = "IN_TABLE",
            e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT",
            e[e.IN_CAPTION = 10] = "IN_CAPTION",
            e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP",
            e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY",
            e[e.IN_ROW = 13] = "IN_ROW",
            e[e.IN_CELL = 14] = "IN_CELL",
            e[e.IN_SELECT = 15] = "IN_SELECT",
            e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE",
            e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE",
            e[e.AFTER_BODY = 18] = "AFTER_BODY",
            e[e.IN_FRAMESET = 19] = "IN_FRAMESET",
            e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET",
            e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY",
            e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET"
        }(fs || (fs = {}));
        const As = {
            startLine: -1,
            startCol: -1,
            startOffset: -1,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        }
          , _s = new Set([Cn.TABLE, Cn.TBODY, Cn.TFOOT, Cn.THEAD, Cn.TR])
          , Cs = {
            scriptingEnabled: !0,
            sourceCodeLocationInfo: !1,
            treeAdapter: ns,
            onParseError: null
        };
        function gs(e, t) {
            let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
            return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n),
            n = null) : Xs(e, t),
            n
        }
        function ks(e, t) {
            let n = null
              , s = e.openElements.stackTop;
            for (; s >= 0; s--) {
                const a = e.openElements.items[s];
                if (a === t.element)
                    break;
                e._isSpecialElement(a, e.openElements.tagIDs[s]) && (n = a)
            }
            return n || (e.openElements.shortenToLength(s < 0 ? 0 : s),
            e.activeFormattingElements.removeEntry(t)),
            n
        }
        function Is(e, t, n) {
            let s = t
              , a = e.openElements.getCommonAncestor(t);
            for (let r = 0, o = a; o !== n; r++,
            o = a) {
                a = e.openElements.getCommonAncestor(o);
                const n = e.activeFormattingElements.getElementEntry(o)
                  , i = n && r >= 3;
                !n || i ? (i && e.activeFormattingElements.removeEntry(n),
                e.openElements.remove(o)) : (o = Ns(e, n),
                s === t && (e.activeFormattingElements.bookmark = n),
                e.treeAdapter.detachNode(s),
                e.treeAdapter.appendChild(o, s),
                s = o)
            }
            return s
        }
        function Ns(e, t) {
            const n = e.treeAdapter.getNamespaceURI(t.element)
              , s = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
            return e.openElements.replace(t.element, s),
            t.element = s,
            s
        }
        function Ss(e, t, n) {
            const s = Nn(e.treeAdapter.getTagName(t));
            if (e._isElementCausesFosterParenting(s))
                e._fosterParentElement(n);
            else {
                const a = e.treeAdapter.getNamespaceURI(t);
                s === Cn.TEMPLATE && a === mn.HTML && (t = e.treeAdapter.getTemplateContent(t)),
                e.treeAdapter.appendChild(t, n)
            }
        }
        function Rs(e, t, n) {
            const s = e.treeAdapter.getNamespaceURI(n.element)
              , {token: a} = n
              , r = e.treeAdapter.createElement(a.tagName, s, a.attrs);
            e._adoptNodes(t, r),
            e.treeAdapter.appendChild(t, r),
            e.activeFormattingElements.insertElementAfterBookmark(r, a),
            e.activeFormattingElements.removeEntry(n),
            e.openElements.remove(n.element),
            e.openElements.insertAfter(t, r, a.tagID)
        }
        function bs(e, t) {
            for (let n = 0; n < 8; n++) {
                const n = gs(e, t);
                if (!n)
                    break;
                const s = ks(e, n);
                if (!s)
                    break;
                e.activeFormattingElements.bookmark = n;
                const a = Is(e, s, n.element)
                  , r = e.openElements.getCommonAncestor(n.element);
                e.treeAdapter.detachNode(a),
                r && Ss(e, r, a),
                Rs(e, s, n)
            }
        }
        function Ds(e, t) {
            e._appendCommentNode(t, e.openElements.currentTmplContentOrNode)
        }
        function Ps(e, t) {
            if (e.stopped = !0,
            t.location) {
                const n = e.fragmentContext ? 0 : 2;
                for (let s = e.openElements.stackTop; s >= n; s--)
                    e._setEndLocation(e.openElements.items[s], t);
                if (!e.fragmentContext && e.openElements.stackTop >= 0) {
                    const n = e.openElements.items[0]
                      , s = e.treeAdapter.getNodeSourceCodeLocation(n);
                    if (s && !s.endTag && (e._setEndLocation(n, t),
                    e.openElements.stackTop >= 1)) {
                        const n = e.openElements.items[1]
                          , s = e.treeAdapter.getNodeSourceCodeLocation(n);
                        s && !s.endTag && e._setEndLocation(n, t)
                    }
                }
            }
        }
        function Os(e, t) {
            e._err(t, an.missingDoctype, !0),
            e.treeAdapter.setDocumentMode(e.document, An.QUIRKS),
            e.insertionMode = fs.BEFORE_HTML,
            e._processToken(t)
        }
        function Ls(e, t) {
            e._insertFakeRootElement(),
            e.insertionMode = fs.BEFORE_HEAD,
            e._processToken(t)
        }
        function Ms(e, t) {
            e._insertFakeElement(_n.HEAD, Cn.HEAD),
            e.headElement = e.openElements.current,
            e.insertionMode = fs.IN_HEAD,
            e._processToken(t)
        }
        function ys(e, t) {
            switch (t.tagID) {
            case Cn.HTML:
                Vs(e, t);
                break;
            case Cn.BASE:
            case Cn.BASEFONT:
            case Cn.BGSOUND:
            case Cn.LINK:
            case Cn.META:
                e._appendElement(t, mn.HTML),
                t.ackSelfClosing = !0;
                break;
            case Cn.TITLE:
                e._switchToTextParsing(t, Ln.RCDATA);
                break;
            case Cn.NOSCRIPT:
                e.options.scriptingEnabled ? e._switchToTextParsing(t, Ln.RAWTEXT) : (e._insertElement(t, mn.HTML),
                e.insertionMode = fs.IN_HEAD_NO_SCRIPT);
                break;
            case Cn.NOFRAMES:
            case Cn.STYLE:
                e._switchToTextParsing(t, Ln.RAWTEXT);
                break;
            case Cn.SCRIPT:
                e._switchToTextParsing(t, Ln.SCRIPT_DATA);
                break;
            case Cn.TEMPLATE:
                e._insertTemplate(t),
                e.activeFormattingElements.insertMarker(),
                e.framesetOk = !1,
                e.insertionMode = fs.IN_TEMPLATE,
                e.tmplInsertionModeStack.unshift(fs.IN_TEMPLATE);
                break;
            case Cn.HEAD:
                e._err(t, an.misplacedStartTagForHeadElement);
                break;
            default:
                vs(e, t)
            }
        }
        function ws(e, t) {
            switch (t.tagID) {
            case Cn.HEAD:
                e.openElements.pop(),
                e.insertionMode = fs.AFTER_HEAD;
                break;
            case Cn.BODY:
            case Cn.BR:
            case Cn.HTML:
                vs(e, t);
                break;
            case Cn.TEMPLATE:
                e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(),
                e.openElements.currentTagId !== Cn.TEMPLATE && e._err(t, an.closingOfElementWithOpenChildElements),
                e.openElements.popUntilTagNamePopped(Cn.TEMPLATE),
                e.activeFormattingElements.clearToLastMarker(),
                e.tmplInsertionModeStack.shift(),
                e._resetInsertionMode()) : e._err(t, an.endTagWithoutMatchingOpenElement);
                break;
            default:
                e._err(t, an.endTagWithoutMatchingOpenElement)
            }
        }
        function vs(e, t) {
            e.openElements.pop(),
            e.insertionMode = fs.AFTER_HEAD,
            e._processToken(t)
        }
        function Bs(e, t) {
            const n = t.type === rn.EOF ? an.openElementsLeftAfterEof : an.disallowedContentInNoscriptInHead;
            e._err(t, n),
            e.openElements.pop(),
            e.insertionMode = fs.IN_HEAD,
            e._processToken(t)
        }
        function Us(e, t) {
            e._insertFakeElement(_n.BODY, Cn.BODY),
            e.insertionMode = fs.IN_BODY,
            xs(e, t)
        }
        function xs(e, t) {
            switch (t.type) {
            case rn.CHARACTER:
                Fs(e, t);
                break;
            case rn.WHITESPACE_CHARACTER:
                Hs(e, t);
                break;
            case rn.COMMENT:
                Ds(e, t);
                break;
            case rn.START_TAG:
                Vs(e, t);
                break;
            case rn.END_TAG:
                Ws(e, t);
                break;
            case rn.EOF:
                Qs(e, t)
            }
        }
        function Hs(e, t) {
            e._reconstructActiveFormattingElements(),
            e._insertCharacters(t)
        }
        function Fs(e, t) {
            e._reconstructActiveFormattingElements(),
            e._insertCharacters(t),
            e.framesetOk = !1
        }
        function Gs(e, t) {
            e._reconstructActiveFormattingElements(),
            e._appendElement(t, mn.HTML),
            e.framesetOk = !1,
            t.ackSelfClosing = !0
        }
        function js(e) {
            const t = cn(e, fn.TYPE);
            return null != t && "hidden" === t.toLowerCase()
        }
        function Ys(e, t) {
            e._switchToTextParsing(t, Ln.RAWTEXT)
        }
        function qs(e, t) {
            e._reconstructActiveFormattingElements(),
            e._insertElement(t, mn.HTML)
        }
        function Vs(e, t) {
            switch (t.tagID) {
            case Cn.I:
            case Cn.S:
            case Cn.B:
            case Cn.U:
            case Cn.EM:
            case Cn.TT:
            case Cn.BIG:
            case Cn.CODE:
            case Cn.FONT:
            case Cn.SMALL:
            case Cn.STRIKE:
            case Cn.STRONG:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML),
                    e.activeFormattingElements.pushElement(e.openElements.current, t)
                }(e, t);
                break;
            case Cn.A:
                !function(e, t) {
                    const n = e.activeFormattingElements.getElementEntryInScopeWithTagName(_n.A);
                    n && (bs(e, t),
                    e.openElements.remove(n.element),
                    e.activeFormattingElements.removeEntry(n)),
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML),
                    e.activeFormattingElements.pushElement(e.openElements.current, t)
                }(e, t);
                break;
            case Cn.H1:
            case Cn.H2:
            case Cn.H3:
            case Cn.H4:
            case Cn.H5:
            case Cn.H6:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    bn(e.openElements.currentTagId) && e.openElements.pop(),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.P:
            case Cn.DL:
            case Cn.OL:
            case Cn.UL:
            case Cn.DIV:
            case Cn.DIR:
            case Cn.NAV:
            case Cn.MAIN:
            case Cn.MENU:
            case Cn.ASIDE:
            case Cn.CENTER:
            case Cn.FIGURE:
            case Cn.FOOTER:
            case Cn.HEADER:
            case Cn.HGROUP:
            case Cn.DIALOG:
            case Cn.DETAILS:
            case Cn.ADDRESS:
            case Cn.ARTICLE:
            case Cn.SECTION:
            case Cn.SUMMARY:
            case Cn.FIELDSET:
            case Cn.BLOCKQUOTE:
            case Cn.FIGCAPTION:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.LI:
            case Cn.DD:
            case Cn.DT:
                !function(e, t) {
                    e.framesetOk = !1;
                    const n = t.tagID;
                    for (let t = e.openElements.stackTop; t >= 0; t--) {
                        const s = e.openElements.tagIDs[t];
                        if (n === Cn.LI && s === Cn.LI || (n === Cn.DD || n === Cn.DT) && (s === Cn.DD || s === Cn.DT)) {
                            e.openElements.generateImpliedEndTagsWithExclusion(s),
                            e.openElements.popUntilTagNamePopped(s);
                            break
                        }
                        if (s !== Cn.ADDRESS && s !== Cn.DIV && s !== Cn.P && e._isSpecialElement(e.openElements.items[t], s))
                            break
                    }
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.BR:
            case Cn.IMG:
            case Cn.WBR:
            case Cn.AREA:
            case Cn.EMBED:
            case Cn.KEYGEN:
                Gs(e, t);
                break;
            case Cn.HR:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._appendElement(t, mn.HTML),
                    e.framesetOk = !1,
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.RB:
            case Cn.RTC:
                !function(e, t) {
                    e.openElements.hasInScope(Cn.RUBY) && e.openElements.generateImpliedEndTags(),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.RT:
            case Cn.RP:
                !function(e, t) {
                    e.openElements.hasInScope(Cn.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(Cn.RTC),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.PRE:
            case Cn.LISTING:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML),
                    e.skipNextNewLine = !0,
                    e.framesetOk = !1
                }(e, t);
                break;
            case Cn.XMP:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._reconstructActiveFormattingElements(),
                    e.framesetOk = !1,
                    e._switchToTextParsing(t, Ln.RAWTEXT)
                }(e, t);
                break;
            case Cn.SVG:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    Ts(t),
                    ms(t),
                    t.selfClosing ? e._appendElement(t, mn.SVG) : e._insertElement(t, mn.SVG),
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.HTML:
                !function(e, t) {
                    0 === e.openElements.tmplCount && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs)
                }(e, t);
                break;
            case Cn.BASE:
            case Cn.LINK:
            case Cn.META:
            case Cn.STYLE:
            case Cn.TITLE:
            case Cn.SCRIPT:
            case Cn.BGSOUND:
            case Cn.BASEFONT:
            case Cn.TEMPLATE:
                ys(e, t);
                break;
            case Cn.BODY:
                !function(e, t) {
                    const n = e.openElements.tryPeekProperlyNestedBodyElement();
                    n && 0 === e.openElements.tmplCount && (e.framesetOk = !1,
                    e.treeAdapter.adoptAttributes(n, t.attrs))
                }(e, t);
                break;
            case Cn.FORM:
                !function(e, t) {
                    const n = e.openElements.tmplCount > 0;
                    e.formElement && !n || (e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML),
                    n || (e.formElement = e.openElements.current))
                }(e, t);
                break;
            case Cn.NOBR:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    e.openElements.hasInScope(Cn.NOBR) && (bs(e, t),
                    e._reconstructActiveFormattingElements()),
                    e._insertElement(t, mn.HTML),
                    e.activeFormattingElements.pushElement(e.openElements.current, t)
                }(e, t);
                break;
            case Cn.MATH:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    ds(t),
                    ms(t),
                    t.selfClosing ? e._appendElement(t, mn.MATHML) : e._insertElement(t, mn.MATHML),
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.TABLE:
                !function(e, t) {
                    e.treeAdapter.getDocumentMode(e.document) !== An.QUIRKS && e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML),
                    e.framesetOk = !1,
                    e.insertionMode = fs.IN_TABLE
                }(e, t);
                break;
            case Cn.INPUT:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    e._appendElement(t, mn.HTML),
                    js(t) || (e.framesetOk = !1),
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.PARAM:
            case Cn.TRACK:
            case Cn.SOURCE:
                !function(e, t) {
                    e._appendElement(t, mn.HTML),
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.IMAGE:
                !function(e, t) {
                    t.tagName = _n.IMG,
                    t.tagID = Cn.IMG,
                    Gs(e, t)
                }(e, t);
                break;
            case Cn.BUTTON:
                !function(e, t) {
                    e.openElements.hasInScope(Cn.BUTTON) && (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(Cn.BUTTON)),
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML),
                    e.framesetOk = !1
                }(e, t);
                break;
            case Cn.APPLET:
            case Cn.OBJECT:
            case Cn.MARQUEE:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML),
                    e.activeFormattingElements.insertMarker(),
                    e.framesetOk = !1
                }(e, t);
                break;
            case Cn.IFRAME:
                !function(e, t) {
                    e.framesetOk = !1,
                    e._switchToTextParsing(t, Ln.RAWTEXT)
                }(e, t);
                break;
            case Cn.SELECT:
                !function(e, t) {
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML),
                    e.framesetOk = !1,
                    e.insertionMode = e.insertionMode === fs.IN_TABLE || e.insertionMode === fs.IN_CAPTION || e.insertionMode === fs.IN_TABLE_BODY || e.insertionMode === fs.IN_ROW || e.insertionMode === fs.IN_CELL ? fs.IN_SELECT_IN_TABLE : fs.IN_SELECT
                }(e, t);
                break;
            case Cn.OPTION:
            case Cn.OPTGROUP:
                !function(e, t) {
                    e.openElements.currentTagId === Cn.OPTION && e.openElements.pop(),
                    e._reconstructActiveFormattingElements(),
                    e._insertElement(t, mn.HTML)
                }(e, t);
                break;
            case Cn.NOEMBED:
                Ys(e, t);
                break;
            case Cn.FRAMESET:
                !function(e, t) {
                    const n = e.openElements.tryPeekProperlyNestedBodyElement();
                    e.framesetOk && n && (e.treeAdapter.detachNode(n),
                    e.openElements.popAllUpToHtmlElement(),
                    e._insertElement(t, mn.HTML),
                    e.insertionMode = fs.IN_FRAMESET)
                }(e, t);
                break;
            case Cn.TEXTAREA:
                !function(e, t) {
                    e._insertElement(t, mn.HTML),
                    e.skipNextNewLine = !0,
                    e.tokenizer.state = Ln.RCDATA,
                    e.originalInsertionMode = e.insertionMode,
                    e.framesetOk = !1,
                    e.insertionMode = fs.TEXT
                }(e, t);
                break;
            case Cn.NOSCRIPT:
                e.options.scriptingEnabled ? Ys(e, t) : qs(e, t);
                break;
            case Cn.PLAINTEXT:
                !function(e, t) {
                    e.openElements.hasInButtonScope(Cn.P) && e._closePElement(),
                    e._insertElement(t, mn.HTML),
                    e.tokenizer.state = Ln.PLAINTEXT
                }(e, t);
                break;
            case Cn.COL:
            case Cn.TH:
            case Cn.TD:
            case Cn.TR:
            case Cn.HEAD:
            case Cn.FRAME:
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
            case Cn.CAPTION:
            case Cn.COLGROUP:
                break;
            default:
                qs(e, t)
            }
        }
        function Xs(e, t) {
            const n = t.tagName
              , s = t.tagID;
            for (let t = e.openElements.stackTop; t > 0; t--) {
                const a = e.openElements.items[t]
                  , r = e.openElements.tagIDs[t];
                if (s === r && (s !== Cn.UNKNOWN || e.treeAdapter.getTagName(a) === n)) {
                    e.openElements.generateImpliedEndTagsWithExclusion(s),
                    e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
                    break
                }
                if (e._isSpecialElement(a, r))
                    break
            }
        }
        function Ws(e, t) {
            switch (t.tagID) {
            case Cn.A:
            case Cn.B:
            case Cn.I:
            case Cn.S:
            case Cn.U:
            case Cn.EM:
            case Cn.TT:
            case Cn.BIG:
            case Cn.CODE:
            case Cn.FONT:
            case Cn.NOBR:
            case Cn.SMALL:
            case Cn.STRIKE:
            case Cn.STRONG:
                bs(e, t);
                break;
            case Cn.P:
                !function(e) {
                    e.openElements.hasInButtonScope(Cn.P) || e._insertFakeElement(_n.P, Cn.P),
                    e._closePElement()
                }(e);
                break;
            case Cn.DL:
            case Cn.UL:
            case Cn.OL:
            case Cn.DIR:
            case Cn.DIV:
            case Cn.NAV:
            case Cn.PRE:
            case Cn.MAIN:
            case Cn.MENU:
            case Cn.ASIDE:
            case Cn.CENTER:
            case Cn.FIGURE:
            case Cn.FOOTER:
            case Cn.HEADER:
            case Cn.HGROUP:
            case Cn.DIALOG:
            case Cn.ADDRESS:
            case Cn.ARTICLE:
            case Cn.DETAILS:
            case Cn.SECTION:
            case Cn.SUMMARY:
            case Cn.LISTING:
            case Cn.FIELDSET:
            case Cn.BLOCKQUOTE:
            case Cn.FIGCAPTION:
                !function(e, t) {
                    const n = t.tagID;
                    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(n))
                }(e, t);
                break;
            case Cn.LI:
                !function(e) {
                    e.openElements.hasInListItemScope(Cn.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(Cn.LI),
                    e.openElements.popUntilTagNamePopped(Cn.LI))
                }(e);
                break;
            case Cn.DD:
            case Cn.DT:
                !function(e, t) {
                    const n = t.tagID;
                    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n),
                    e.openElements.popUntilTagNamePopped(n))
                }(e, t);
                break;
            case Cn.H1:
            case Cn.H2:
            case Cn.H3:
            case Cn.H4:
            case Cn.H5:
            case Cn.H6:
                !function(e) {
                    e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilNumberedHeaderPopped())
                }(e);
                break;
            case Cn.BR:
                !function(e) {
                    e._reconstructActiveFormattingElements(),
                    e._insertFakeElement(_n.BR, Cn.BR),
                    e.openElements.pop(),
                    e.framesetOk = !1
                }(e);
                break;
            case Cn.BODY:
                !function(e, t) {
                    if (e.openElements.hasInScope(Cn.BODY) && (e.insertionMode = fs.AFTER_BODY,
                    e.options.sourceCodeLocationInfo)) {
                        const n = e.openElements.tryPeekProperlyNestedBodyElement();
                        n && e._setEndLocation(n, t)
                    }
                }(e, t);
                break;
            case Cn.HTML:
                !function(e, t) {
                    e.openElements.hasInScope(Cn.BODY) && (e.insertionMode = fs.AFTER_BODY,
                    ha(e, t))
                }(e, t);
                break;
            case Cn.FORM:
                !function(e) {
                    const t = e.openElements.tmplCount > 0
                      , {formElement: n} = e;
                    t || (e.formElement = null),
                    (n || t) && e.openElements.hasInScope(Cn.FORM) && (e.openElements.generateImpliedEndTags(),
                    t ? e.openElements.popUntilTagNamePopped(Cn.FORM) : n && e.openElements.remove(n))
                }(e);
                break;
            case Cn.APPLET:
            case Cn.OBJECT:
            case Cn.MARQUEE:
                !function(e, t) {
                    const n = t.tagID;
                    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(n),
                    e.activeFormattingElements.clearToLastMarker())
                }(e, t);
                break;
            case Cn.TEMPLATE:
                ws(e, t);
                break;
            default:
                Xs(e, t)
            }
        }
        function Qs(e, t) {
            e.tmplInsertionModeStack.length > 0 ? Ea(e, t) : Ps(e, t)
        }
        function Ks(e, t) {
            if (_s.has(e.openElements.currentTagId))
                switch (e.pendingCharacterTokens.length = 0,
                e.hasNonWhitespacePendingCharacterToken = !1,
                e.originalInsertionMode = e.insertionMode,
                e.insertionMode = fs.IN_TABLE_TEXT,
                t.type) {
                case rn.CHARACTER:
                    ea(e, t);
                    break;
                case rn.WHITESPACE_CHARACTER:
                    Zs(e, t)
                }
            else
                $s(e, t)
        }
        function zs(e, t) {
            switch (t.tagID) {
            case Cn.TD:
            case Cn.TH:
            case Cn.TR:
                !function(e, t) {
                    e.openElements.clearBackToTableContext(),
                    e._insertFakeElement(_n.TBODY, Cn.TBODY),
                    e.insertionMode = fs.IN_TABLE_BODY,
                    ra(e, t)
                }(e, t);
                break;
            case Cn.STYLE:
            case Cn.SCRIPT:
            case Cn.TEMPLATE:
                ys(e, t);
                break;
            case Cn.COL:
                !function(e, t) {
                    e.openElements.clearBackToTableContext(),
                    e._insertFakeElement(_n.COLGROUP, Cn.COLGROUP),
                    e.insertionMode = fs.IN_COLUMN_GROUP,
                    sa(e, t)
                }(e, t);
                break;
            case Cn.FORM:
                !function(e, t) {
                    e.formElement || 0 !== e.openElements.tmplCount || (e._insertElement(t, mn.HTML),
                    e.formElement = e.openElements.current,
                    e.openElements.pop())
                }(e, t);
                break;
            case Cn.TABLE:
                !function(e, t) {
                    e.openElements.hasInTableScope(Cn.TABLE) && (e.openElements.popUntilTagNamePopped(Cn.TABLE),
                    e._resetInsertionMode(),
                    e._processStartTag(t))
                }(e, t);
                break;
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
                !function(e, t) {
                    e.openElements.clearBackToTableContext(),
                    e._insertElement(t, mn.HTML),
                    e.insertionMode = fs.IN_TABLE_BODY
                }(e, t);
                break;
            case Cn.INPUT:
                !function(e, t) {
                    js(t) ? e._appendElement(t, mn.HTML) : $s(e, t),
                    t.ackSelfClosing = !0
                }(e, t);
                break;
            case Cn.CAPTION:
                !function(e, t) {
                    e.openElements.clearBackToTableContext(),
                    e.activeFormattingElements.insertMarker(),
                    e._insertElement(t, mn.HTML),
                    e.insertionMode = fs.IN_CAPTION
                }(e, t);
                break;
            case Cn.COLGROUP:
                !function(e, t) {
                    e.openElements.clearBackToTableContext(),
                    e._insertElement(t, mn.HTML),
                    e.insertionMode = fs.IN_COLUMN_GROUP
                }(e, t);
                break;
            default:
                $s(e, t)
            }
        }
        function Js(e, t) {
            switch (t.tagID) {
            case Cn.TABLE:
                e.openElements.hasInTableScope(Cn.TABLE) && (e.openElements.popUntilTagNamePopped(Cn.TABLE),
                e._resetInsertionMode());
                break;
            case Cn.TEMPLATE:
                ws(e, t);
                break;
            case Cn.BODY:
            case Cn.CAPTION:
            case Cn.COL:
            case Cn.COLGROUP:
            case Cn.HTML:
            case Cn.TBODY:
            case Cn.TD:
            case Cn.TFOOT:
            case Cn.TH:
            case Cn.THEAD:
            case Cn.TR:
                break;
            default:
                $s(e, t)
            }
        }
        function $s(e, t) {
            const n = e.fosterParentingEnabled;
            e.fosterParentingEnabled = !0,
            xs(e, t),
            e.fosterParentingEnabled = n
        }
        function Zs(e, t) {
            e.pendingCharacterTokens.push(t)
        }
        function ea(e, t) {
            e.pendingCharacterTokens.push(t),
            e.hasNonWhitespacePendingCharacterToken = !0
        }
        function ta(e, t) {
            let n = 0;
            if (e.hasNonWhitespacePendingCharacterToken)
                for (; n < e.pendingCharacterTokens.length; n++)
                    $s(e, e.pendingCharacterTokens[n]);
            else
                for (; n < e.pendingCharacterTokens.length; n++)
                    e._insertCharacters(e.pendingCharacterTokens[n]);
            e.insertionMode = e.originalInsertionMode,
            e._processToken(t)
        }
        const na = new Set([Cn.CAPTION, Cn.COL, Cn.COLGROUP, Cn.TBODY, Cn.TD, Cn.TFOOT, Cn.TH, Cn.THEAD, Cn.TR]);
        function sa(e, t) {
            switch (t.tagID) {
            case Cn.HTML:
                Vs(e, t);
                break;
            case Cn.COL:
                e._appendElement(t, mn.HTML),
                t.ackSelfClosing = !0;
                break;
            case Cn.TEMPLATE:
                ys(e, t);
                break;
            default:
                aa(e, t)
            }
        }
        function aa(e, t) {
            e.openElements.currentTagId === Cn.COLGROUP && (e.openElements.pop(),
            e.insertionMode = fs.IN_TABLE,
            e._processToken(t))
        }
        function ra(e, t) {
            switch (t.tagID) {
            case Cn.TR:
                e.openElements.clearBackToTableBodyContext(),
                e._insertElement(t, mn.HTML),
                e.insertionMode = fs.IN_ROW;
                break;
            case Cn.TH:
            case Cn.TD:
                e.openElements.clearBackToTableBodyContext(),
                e._insertFakeElement(_n.TR, Cn.TR),
                e.insertionMode = fs.IN_ROW,
                ia(e, t);
                break;
            case Cn.CAPTION:
            case Cn.COL:
            case Cn.COLGROUP:
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
                e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE,
                zs(e, t));
                break;
            default:
                zs(e, t)
            }
        }
        function oa(e, t) {
            const n = t.tagID;
            switch (t.tagID) {
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
                e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE);
                break;
            case Cn.TABLE:
                e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE,
                Js(e, t));
                break;
            case Cn.BODY:
            case Cn.CAPTION:
            case Cn.COL:
            case Cn.COLGROUP:
            case Cn.HTML:
            case Cn.TD:
            case Cn.TH:
            case Cn.TR:
                break;
            default:
                Js(e, t)
            }
        }
        function ia(e, t) {
            switch (t.tagID) {
            case Cn.TH:
            case Cn.TD:
                e.openElements.clearBackToTableRowContext(),
                e._insertElement(t, mn.HTML),
                e.insertionMode = fs.IN_CELL,
                e.activeFormattingElements.insertMarker();
                break;
            case Cn.CAPTION:
            case Cn.COL:
            case Cn.COLGROUP:
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
            case Cn.TR:
                e.openElements.hasInTableScope(Cn.TR) && (e.openElements.clearBackToTableRowContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE_BODY,
                ra(e, t));
                break;
            default:
                zs(e, t)
            }
        }
        function ca(e, t) {
            switch (t.tagID) {
            case Cn.TR:
                e.openElements.hasInTableScope(Cn.TR) && (e.openElements.clearBackToTableRowContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE_BODY);
                break;
            case Cn.TABLE:
                e.openElements.hasInTableScope(Cn.TR) && (e.openElements.clearBackToTableRowContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE_BODY,
                oa(e, t));
                break;
            case Cn.TBODY:
            case Cn.TFOOT:
            case Cn.THEAD:
                (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(Cn.TR)) && (e.openElements.clearBackToTableRowContext(),
                e.openElements.pop(),
                e.insertionMode = fs.IN_TABLE_BODY,
                oa(e, t));
                break;
            case Cn.BODY:
            case Cn.CAPTION:
            case Cn.COL:
            case Cn.COLGROUP:
            case Cn.HTML:
            case Cn.TD:
            case Cn.TH:
                break;
            default:
                Js(e, t)
            }
        }
        function la(e, t) {
            switch (t.tagID) {
            case Cn.HTML:
                Vs(e, t);
                break;
            case Cn.OPTION:
                e.openElements.currentTagId === Cn.OPTION && e.openElements.pop(),
                e._insertElement(t, mn.HTML);
                break;
            case Cn.OPTGROUP:
                e.openElements.currentTagId === Cn.OPTION && e.openElements.pop(),
                e.openElements.currentTagId === Cn.OPTGROUP && e.openElements.pop(),
                e._insertElement(t, mn.HTML);
                break;
            case Cn.INPUT:
            case Cn.KEYGEN:
            case Cn.TEXTAREA:
            case Cn.SELECT:
                e.openElements.hasInSelectScope(Cn.SELECT) && (e.openElements.popUntilTagNamePopped(Cn.SELECT),
                e._resetInsertionMode(),
                t.tagID !== Cn.SELECT && e._processStartTag(t));
                break;
            case Cn.SCRIPT:
            case Cn.TEMPLATE:
                ys(e, t)
            }
        }
        function ua(e, t) {
            switch (t.tagID) {
            case Cn.OPTGROUP:
                e.openElements.stackTop > 0 && e.openElements.currentTagId === Cn.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === Cn.OPTGROUP && e.openElements.pop(),
                e.openElements.currentTagId === Cn.OPTGROUP && e.openElements.pop();
                break;
            case Cn.OPTION:
                e.openElements.currentTagId === Cn.OPTION && e.openElements.pop();
                break;
            case Cn.SELECT:
                e.openElements.hasInSelectScope(Cn.SELECT) && (e.openElements.popUntilTagNamePopped(Cn.SELECT),
                e._resetInsertionMode());
                break;
            case Cn.TEMPLATE:
                ws(e, t)
            }
        }
        function Ea(e, t) {
            e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(Cn.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t)) : Ps(e, t)
        }
        function ha(e, t) {
            var n;
            if (t.tagID === Cn.HTML) {
                if (e.fragmentContext || (e.insertionMode = fs.AFTER_AFTER_BODY),
                e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === Cn.HTML) {
                    e._setEndLocation(e.openElements.items[0], t);
                    const s = e.openElements.items[1];
                    s && !(null === (n = e.treeAdapter.getNodeSourceCodeLocation(s)) || void 0 === n ? void 0 : n.endTag) && e._setEndLocation(s, t)
                }
            } else
                pa(e, t)
        }
        function pa(e, t) {
            e.insertionMode = fs.IN_BODY,
            xs(e, t)
        }
        function da(e, t) {
            e.insertionMode = fs.IN_BODY,
            xs(e, t)
        }
        function Ta(e) {
            for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== mn.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
                e.openElements.pop()
        }
        const ma = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
        function fa(e, t) {
            return function(n) {
                let s, a = 0, r = "";
                for (; s = e.exec(n); )
                    a !== s.index && (r += n.substring(a, s.index)),
                    r += t.get(s[0].charCodeAt(0)),
                    a = s.index + 1;
                return r + n.substring(a)
            }
        }
        String.prototype.codePointAt,
        fa(/[&<>'"]/g, ma);
        const Aa = fa(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]))
          , _a = fa(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]))
          , Ca = new Set([_n.AREA, _n.BASE, _n.BASEFONT, _n.BGSOUND, _n.BR, _n.COL, _n.EMBED, _n.FRAME, _n.HR, _n.IMG, _n.INPUT, _n.KEYGEN, _n.LINK, _n.META, _n.PARAM, _n.SOURCE, _n.TRACK, _n.WBR]);
        function ga(e, t) {
            return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === mn.HTML && Ca.has(t.treeAdapter.getTagName(e))
        }
        const ka = {
            treeAdapter: ns,
            scriptingEnabled: !0
        };
        function Ia(e, t) {
            let n = "";
            const s = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === _n.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === mn.HTML ? t.treeAdapter.getTemplateContent(e) : e
              , a = t.treeAdapter.getChildNodes(s);
            if (a)
                for (const e of a)
                    n += Na(e, t);
            return n
        }
        function Na(e, t) {
            return t.treeAdapter.isElementNode(e) ? function(e, t) {
                const n = t.treeAdapter.getTagName(e);
                return `<${n}${function(e, {treeAdapter: t}) {
                    let n = "";
                    for (const s of t.getAttrList(e)) {
                        if (n += " ",
                        s.namespace)
                            switch (s.namespace) {
                            case mn.XML:
                                n += `xml:${s.name}`;
                                break;
                            case mn.XMLNS:
                                "xmlns" !== s.name && (n += "xmlns:"),
                                n += s.name;
                                break;
                            case mn.XLINK:
                                n += `xlink:${s.name}`;
                                break;
                            default:
                                n += `${s.prefix}:${s.name}`
                            }
                        else
                            n += s.name;
                        n += `="${Aa(s.value)}"`
                    }
                    return n
                }(e, t)}>${ga(e, t) ? "" : `${Ia(e, t)}</${n}>`}`
            }(e, t) : t.treeAdapter.isTextNode(e) ? function(e, t) {
                const {treeAdapter: n} = t
                  , s = n.getTextNodeContent(e)
                  , a = n.getParentNode(e)
                  , r = a && n.isElementNode(a) && n.getTagName(a);
                return r && n.getNamespaceURI(a) === mn.HTML && (o = r,
                i = t.scriptingEnabled,
                Dn.has(o) || i && o === _n.NOSCRIPT) ? s : _a(s);
                var o, i
            }(e, t) : t.treeAdapter.isCommentNode(e) ? function(e, {treeAdapter: t}) {
                return `\x3c!--${t.getCommentNodeContent(e)}--\x3e`
            }(e, t) : t.treeAdapter.isDocumentTypeNode(e) ? function(e, {treeAdapter: t}) {
                return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`
            }(e, t) : ""
        }
        function Sa(e, t) {
            return class {
                constructor(e, t, n=null, s=null) {
                    this.fragmentContext = n,
                    this.scriptHandler = s,
                    this.currentToken = null,
                    this.stopped = !1,
                    this.insertionMode = fs.INITIAL,
                    this.originalInsertionMode = fs.INITIAL,
                    this.headElement = null,
                    this.formElement = null,
                    this.currentNotInHTML = !1,
                    this.tmplInsertionModeStack = [],
                    this.pendingCharacterTokens = [],
                    this.hasNonWhitespacePendingCharacterToken = !1,
                    this.framesetOk = !0,
                    this.skipNextNewLine = !1,
                    this.fosterParentingEnabled = !1,
                    this.options = {
                        ...Cs,
                        ...e
                    },
                    this.treeAdapter = this.options.treeAdapter,
                    this.onParseError = this.options.onParseError,
                    this.onParseError && (this.options.sourceCodeLocationInfo = !0),
                    this.document = null != t ? t : this.treeAdapter.createDocument(),
                    this.tokenizer = new Gn(this.options,this),
                    this.activeFormattingElements = new Zn(this.treeAdapter),
                    this.fragmentContextID = n ? Nn(this.treeAdapter.getTagName(n)) : Cn.UNKNOWN,
                    this._setContextModes(null != n ? n : this.document, this.fragmentContextID),
                    this.openElements = new zn(this.document,this.treeAdapter,this)
                }
                static parse(e, t) {
                    const n = new this(t);
                    return n.tokenizer.write(e, !0),
                    n.document
                }
                static getFragmentParser(e, t) {
                    const n = {
                        ...Cs,
                        ...t
                    };
                    null != e || (e = n.treeAdapter.createElement(_n.TEMPLATE, mn.HTML, []));
                    const s = n.treeAdapter.createElement("documentmock", mn.HTML, [])
                      , a = new this(n,s,e);
                    return a.fragmentContextID === Cn.TEMPLATE && a.tmplInsertionModeStack.unshift(fs.IN_TEMPLATE),
                    a._initTokenizerForFragmentParsing(),
                    a._insertFakeRootElement(),
                    a._resetInsertionMode(),
                    a._findFormInFragmentContext(),
                    a
                }
                getFragment() {
                    const e = this.treeAdapter.getFirstChild(this.document)
                      , t = this.treeAdapter.createDocumentFragment();
                    return this._adoptNodes(e, t),
                    t
                }
                _err(e, t, n) {
                    var s;
                    if (!this.onParseError)
                        return;
                    const a = null !== (s = e.location) && void 0 !== s ? s : As
                      , r = {
                        code: t,
                        startLine: a.startLine,
                        startCol: a.startCol,
                        startOffset: a.startOffset,
                        endLine: n ? a.startLine : a.endLine,
                        endCol: n ? a.startCol : a.endCol,
                        endOffset: n ? a.startOffset : a.endOffset
                    };
                    this.onParseError(r)
                }
                onItemPush(e, t, n) {
                    var s, a;
                    null === (a = (s = this.treeAdapter).onItemPush) || void 0 === a || a.call(s, e),
                    n && this.openElements.stackTop > 0 && this._setContextModes(e, t)
                }
                onItemPop(e, t) {
                    var n, s;
                    if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken),
                    null === (s = (n = this.treeAdapter).onItemPop) || void 0 === s || s.call(n, e, this.openElements.current),
                    t) {
                        let e, t;
                        0 === this.openElements.stackTop && this.fragmentContext ? (e = this.fragmentContext,
                        t = this.fragmentContextID) : ({current: e, currentTagId: t} = this.openElements),
                        this._setContextModes(e, t)
                    }
                }
                _setContextModes(e, t) {
                    const n = e === this.document || this.treeAdapter.getNamespaceURI(e) === mn.HTML;
                    this.currentNotInHTML = !n,
                    this.tokenizer.inForeignNode = !n && !this._isIntegrationPoint(t, e)
                }
                _switchToTextParsing(e, t) {
                    this._insertElement(e, mn.HTML),
                    this.tokenizer.state = t,
                    this.originalInsertionMode = this.insertionMode,
                    this.insertionMode = fs.TEXT
                }
                switchToPlaintextParsing() {
                    this.insertionMode = fs.TEXT,
                    this.originalInsertionMode = fs.IN_BODY,
                    this.tokenizer.state = Ln.PLAINTEXT
                }
                _getAdjustedCurrentElement() {
                    return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current
                }
                _findFormInFragmentContext() {
                    let e = this.fragmentContext;
                    for (; e; ) {
                        if (this.treeAdapter.getTagName(e) === _n.FORM) {
                            this.formElement = e;
                            break
                        }
                        e = this.treeAdapter.getParentNode(e)
                    }
                }
                _initTokenizerForFragmentParsing() {
                    if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === mn.HTML)
                        switch (this.fragmentContextID) {
                        case Cn.TITLE:
                        case Cn.TEXTAREA:
                            this.tokenizer.state = Ln.RCDATA;
                            break;
                        case Cn.STYLE:
                        case Cn.XMP:
                        case Cn.IFRAME:
                        case Cn.NOEMBED:
                        case Cn.NOFRAMES:
                        case Cn.NOSCRIPT:
                            this.tokenizer.state = Ln.RAWTEXT;
                            break;
                        case Cn.SCRIPT:
                            this.tokenizer.state = Ln.SCRIPT_DATA;
                            break;
                        case Cn.PLAINTEXT:
                            this.tokenizer.state = Ln.PLAINTEXT
                        }
                }
                _setDocumentType(e) {
                    const t = e.name || ""
                      , n = e.publicId || ""
                      , s = e.systemId || "";
                    if (this.treeAdapter.setDocumentType(this.document, t, n, s),
                    e.location) {
                        const t = this.treeAdapter.getChildNodes(this.document).find((e=>this.treeAdapter.isDocumentTypeNode(e)));
                        t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location)
                    }
                }
                _attachElementToTree(e, t) {
                    if (this.options.sourceCodeLocationInfo) {
                        const n = t && {
                            ...t,
                            startTag: t
                        };
                        this.treeAdapter.setNodeSourceCodeLocation(e, n)
                    }
                    if (this._shouldFosterParentOnInsertion())
                        this._fosterParentElement(e);
                    else {
                        const t = this.openElements.currentTmplContentOrNode;
                        this.treeAdapter.appendChild(t, e)
                    }
                }
                _appendElement(e, t) {
                    const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
                    this._attachElementToTree(n, e.location)
                }
                _insertElement(e, t) {
                    const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
                    this._attachElementToTree(n, e.location),
                    this.openElements.push(n, e.tagID)
                }
                _insertFakeElement(e, t) {
                    const n = this.treeAdapter.createElement(e, mn.HTML, []);
                    this._attachElementToTree(n, null),
                    this.openElements.push(n, t)
                }
                _insertTemplate(e) {
                    const t = this.treeAdapter.createElement(e.tagName, mn.HTML, e.attrs)
                      , n = this.treeAdapter.createDocumentFragment();
                    this.treeAdapter.setTemplateContent(t, n),
                    this._attachElementToTree(t, e.location),
                    this.openElements.push(t, e.tagID),
                    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null)
                }
                _insertFakeRootElement() {
                    const e = this.treeAdapter.createElement(_n.HTML, mn.HTML, []);
                    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null),
                    this.treeAdapter.appendChild(this.openElements.current, e),
                    this.openElements.push(e, Cn.HTML)
                }
                _appendCommentNode(e, t) {
                    const n = this.treeAdapter.createCommentNode(e.data);
                    this.treeAdapter.appendChild(t, n),
                    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location)
                }
                _insertCharacters(e) {
                    let t, n;
                    if (this._shouldFosterParentOnInsertion() ? (({parent: t, beforeElement: n} = this._findFosterParentingLocation()),
                    n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode,
                    this.treeAdapter.insertText(t, e.chars)),
                    !e.location)
                        return;
                    const s = this.treeAdapter.getChildNodes(t)
                      , a = n ? s.lastIndexOf(n) : s.length
                      , r = s[a - 1];
                    if (this.treeAdapter.getNodeSourceCodeLocation(r)) {
                        const {endLine: t, endCol: n, endOffset: s} = e.location;
                        this.treeAdapter.updateNodeSourceCodeLocation(r, {
                            endLine: t,
                            endCol: n,
                            endOffset: s
                        })
                    } else
                        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, e.location)
                }
                _adoptNodes(e, t) {
                    for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e))
                        this.treeAdapter.detachNode(n),
                        this.treeAdapter.appendChild(t, n)
                }
                _setEndLocation(e, t) {
                    if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
                        const n = t.location
                          , s = this.treeAdapter.getTagName(e)
                          , a = t.type === rn.END_TAG && s === t.tagName ? {
                            endTag: {
                                ...n
                            },
                            endLine: n.endLine,
                            endCol: n.endCol,
                            endOffset: n.endOffset
                        } : {
                            endLine: n.startLine,
                            endCol: n.startCol,
                            endOffset: n.startOffset
                        };
                        this.treeAdapter.updateNodeSourceCodeLocation(e, a)
                    }
                }
                shouldProcessStartTagTokenInForeignContent(e) {
                    if (!this.currentNotInHTML)
                        return !1;
                    let t, n;
                    return 0 === this.openElements.stackTop && this.fragmentContext ? (t = this.fragmentContext,
                    n = this.fragmentContextID) : ({current: t, currentTagId: n} = this.openElements),
                    (e.tagID !== Cn.SVG || this.treeAdapter.getTagName(t) !== _n.ANNOTATION_XML || this.treeAdapter.getNamespaceURI(t) !== mn.MATHML) && (this.tokenizer.inForeignNode || (e.tagID === Cn.MGLYPH || e.tagID === Cn.MALIGNMARK) && !this._isIntegrationPoint(n, t, mn.HTML))
                }
                _processToken(e) {
                    switch (e.type) {
                    case rn.CHARACTER:
                        this.onCharacter(e);
                        break;
                    case rn.NULL_CHARACTER:
                        this.onNullCharacter(e);
                        break;
                    case rn.COMMENT:
                        this.onComment(e);
                        break;
                    case rn.DOCTYPE:
                        this.onDoctype(e);
                        break;
                    case rn.START_TAG:
                        this._processStartTag(e);
                        break;
                    case rn.END_TAG:
                        this.onEndTag(e);
                        break;
                    case rn.EOF:
                        this.onEof(e);
                        break;
                    case rn.WHITESPACE_CHARACTER:
                        this.onWhitespaceCharacter(e)
                    }
                }
                _isIntegrationPoint(e, t, n) {
                    return function(e, t, n, s) {
                        return (!s || s === mn.HTML) && function(e, t, n) {
                            if (t === mn.MATHML && e === Cn.ANNOTATION_XML)
                                for (let e = 0; e < n.length; e++)
                                    if (n[e].name === fn.ENCODING) {
                                        const t = n[e].value.toLowerCase();
                                        return "text/html" === t || "application/xhtml+xml" === t
                                    }
                            return t === mn.SVG && (e === Cn.FOREIGN_OBJECT || e === Cn.DESC || e === Cn.TITLE)
                        }(e, t, n) || (!s || s === mn.MATHML) && function(e, t) {
                            return t === mn.MATHML && (e === Cn.MI || e === Cn.MO || e === Cn.MN || e === Cn.MS || e === Cn.MTEXT)
                        }(e, t)
                    }(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n)
                }
                _reconstructActiveFormattingElements() {
                    const e = this.activeFormattingElements.entries.length;
                    if (e) {
                        const t = this.activeFormattingElements.entries.findIndex((e=>e.type === Jn.Marker || this.openElements.contains(e.element)));
                        for (let n = t < 0 ? e - 1 : t - 1; n >= 0; n--) {
                            const e = this.activeFormattingElements.entries[n];
                            this._insertElement(e.token, this.treeAdapter.getNamespaceURI(e.element)),
                            e.element = this.openElements.current
                        }
                    }
                }
                _closeTableCell() {
                    this.openElements.generateImpliedEndTags(),
                    this.openElements.popUntilTableCellPopped(),
                    this.activeFormattingElements.clearToLastMarker(),
                    this.insertionMode = fs.IN_ROW
                }
                _closePElement() {
                    this.openElements.generateImpliedEndTagsWithExclusion(Cn.P),
                    this.openElements.popUntilTagNamePopped(Cn.P)
                }
                _resetInsertionMode() {
                    for (let e = this.openElements.stackTop; e >= 0; e--)
                        switch (0 === e && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
                        case Cn.TR:
                            return void (this.insertionMode = fs.IN_ROW);
                        case Cn.TBODY:
                        case Cn.THEAD:
                        case Cn.TFOOT:
                            return void (this.insertionMode = fs.IN_TABLE_BODY);
                        case Cn.CAPTION:
                            return void (this.insertionMode = fs.IN_CAPTION);
                        case Cn.COLGROUP:
                            return void (this.insertionMode = fs.IN_COLUMN_GROUP);
                        case Cn.TABLE:
                            return void (this.insertionMode = fs.IN_TABLE);
                        case Cn.BODY:
                            return void (this.insertionMode = fs.IN_BODY);
                        case Cn.FRAMESET:
                            return void (this.insertionMode = fs.IN_FRAMESET);
                        case Cn.SELECT:
                            return void this._resetInsertionModeForSelect(e);
                        case Cn.TEMPLATE:
                            return void (this.insertionMode = this.tmplInsertionModeStack[0]);
                        case Cn.HTML:
                            return void (this.insertionMode = this.headElement ? fs.AFTER_HEAD : fs.BEFORE_HEAD);
                        case Cn.TD:
                        case Cn.TH:
                            if (e > 0)
                                return void (this.insertionMode = fs.IN_CELL);
                            break;
                        case Cn.HEAD:
                            if (e > 0)
                                return void (this.insertionMode = fs.IN_HEAD)
                        }
                    this.insertionMode = fs.IN_BODY
                }
                _resetInsertionModeForSelect(e) {
                    if (e > 0)
                        for (let t = e - 1; t > 0; t--) {
                            const e = this.openElements.tagIDs[t];
                            if (e === Cn.TEMPLATE)
                                break;
                            if (e === Cn.TABLE)
                                return void (this.insertionMode = fs.IN_SELECT_IN_TABLE)
                        }
                    this.insertionMode = fs.IN_SELECT
                }
                _isElementCausesFosterParenting(e) {
                    return _s.has(e)
                }
                _shouldFosterParentOnInsertion() {
                    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId)
                }
                _findFosterParentingLocation() {
                    for (let e = this.openElements.stackTop; e >= 0; e--) {
                        const t = this.openElements.items[e];
                        switch (this.openElements.tagIDs[e]) {
                        case Cn.TEMPLATE:
                            if (this.treeAdapter.getNamespaceURI(t) === mn.HTML)
                                return {
                                    parent: this.treeAdapter.getTemplateContent(t),
                                    beforeElement: null
                                };
                            break;
                        case Cn.TABLE:
                            {
                                const n = this.treeAdapter.getParentNode(t);
                                return n ? {
                                    parent: n,
                                    beforeElement: t
                                } : {
                                    parent: this.openElements.items[e - 1],
                                    beforeElement: null
                                }
                            }
                        }
                    }
                    return {
                        parent: this.openElements.items[0],
                        beforeElement: null
                    }
                }
                _fosterParentElement(e) {
                    const t = this._findFosterParentingLocation();
                    t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e)
                }
                _isSpecialElement(e, t) {
                    const n = this.treeAdapter.getNamespaceURI(e);
                    return Rn[n].has(t)
                }
                onCharacter(e) {
                    if (this.skipNextNewLine = !1,
                    this.tokenizer.inForeignNode)
                        !function(e, t) {
                            e._insertCharacters(t),
                            e.framesetOk = !1
                        }(this, e);
                    else
                        switch (this.insertionMode) {
                        case fs.INITIAL:
                            Os(this, e);
                            break;
                        case fs.BEFORE_HTML:
                            Ls(this, e);
                            break;
                        case fs.BEFORE_HEAD:
                            Ms(this, e);
                            break;
                        case fs.IN_HEAD:
                            vs(this, e);
                            break;
                        case fs.IN_HEAD_NO_SCRIPT:
                            Bs(this, e);
                            break;
                        case fs.AFTER_HEAD:
                            Us(this, e);
                            break;
                        case fs.IN_BODY:
                        case fs.IN_CAPTION:
                        case fs.IN_CELL:
                        case fs.IN_TEMPLATE:
                            Fs(this, e);
                            break;
                        case fs.TEXT:
                        case fs.IN_SELECT:
                        case fs.IN_SELECT_IN_TABLE:
                            this._insertCharacters(e);
                            break;
                        case fs.IN_TABLE:
                        case fs.IN_TABLE_BODY:
                        case fs.IN_ROW:
                            Ks(this, e);
                            break;
                        case fs.IN_TABLE_TEXT:
                            ea(this, e);
                            break;
                        case fs.IN_COLUMN_GROUP:
                            aa(this, e);
                            break;
                        case fs.AFTER_BODY:
                            pa(this, e);
                            break;
                        case fs.AFTER_AFTER_BODY:
                            da(this, e)
                        }
                }
                onNullCharacter(e) {
                    if (this.skipNextNewLine = !1,
                    this.tokenizer.inForeignNode)
                        !function(e, t) {
                            t.chars = zt,
                            e._insertCharacters(t)
                        }(this, e);
                    else
                        switch (this.insertionMode) {
                        case fs.INITIAL:
                            Os(this, e);
                            break;
                        case fs.BEFORE_HTML:
                            Ls(this, e);
                            break;
                        case fs.BEFORE_HEAD:
                            Ms(this, e);
                            break;
                        case fs.IN_HEAD:
                            vs(this, e);
                            break;
                        case fs.IN_HEAD_NO_SCRIPT:
                            Bs(this, e);
                            break;
                        case fs.AFTER_HEAD:
                            Us(this, e);
                            break;
                        case fs.TEXT:
                            this._insertCharacters(e);
                            break;
                        case fs.IN_TABLE:
                        case fs.IN_TABLE_BODY:
                        case fs.IN_ROW:
                            Ks(this, e);
                            break;
                        case fs.IN_COLUMN_GROUP:
                            aa(this, e);
                            break;
                        case fs.AFTER_BODY:
                            pa(this, e);
                            break;
                        case fs.AFTER_AFTER_BODY:
                            da(this, e)
                        }
                }
                onComment(e) {
                    if (this.skipNextNewLine = !1,
                    this.currentNotInHTML)
                        Ds(this, e);
                    else
                        switch (this.insertionMode) {
                        case fs.INITIAL:
                        case fs.BEFORE_HTML:
                        case fs.BEFORE_HEAD:
                        case fs.IN_HEAD:
                        case fs.IN_HEAD_NO_SCRIPT:
                        case fs.AFTER_HEAD:
                        case fs.IN_BODY:
                        case fs.IN_TABLE:
                        case fs.IN_CAPTION:
                        case fs.IN_COLUMN_GROUP:
                        case fs.IN_TABLE_BODY:
                        case fs.IN_ROW:
                        case fs.IN_CELL:
                        case fs.IN_SELECT:
                        case fs.IN_SELECT_IN_TABLE:
                        case fs.IN_TEMPLATE:
                        case fs.IN_FRAMESET:
                        case fs.AFTER_FRAMESET:
                            Ds(this, e);
                            break;
                        case fs.IN_TABLE_TEXT:
                            ta(this, e);
                            break;
                        case fs.AFTER_BODY:
                            !function(e, t) {
                                e._appendCommentNode(t, e.openElements.items[0])
                            }(this, e);
                            break;
                        case fs.AFTER_AFTER_BODY:
                        case fs.AFTER_AFTER_FRAMESET:
                            !function(e, t) {
                                e._appendCommentNode(t, e.document)
                            }(this, e)
                        }
                }
                onDoctype(e) {
                    switch (this.skipNextNewLine = !1,
                    this.insertionMode) {
                    case fs.INITIAL:
                        !function(e, t) {
                            e._setDocumentType(t);
                            const n = t.forceQuirks ? An.QUIRKS : function(e) {
                                if (e.name !== ss)
                                    return An.QUIRKS;
                                const {systemId: t} = e;
                                if (t && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t.toLowerCase())
                                    return An.QUIRKS;
                                let {publicId: n} = e;
                                if (null !== n) {
                                    if (n = n.toLowerCase(),
                                    os.has(n))
                                        return An.QUIRKS;
                                    let e = null === t ? rs : as;
                                    if (ls(n, e))
                                        return An.QUIRKS;
                                    if (e = null === t ? is : cs,
                                    ls(n, e))
                                        return An.LIMITED_QUIRKS
                                }
                                return An.NO_QUIRKS
                            }(t);
                            (function(e) {
                                return e.name === ss && null === e.publicId && (null === e.systemId || "about:legacy-compat" === e.systemId)
                            }
                            )(t) || e._err(t, an.nonConformingDoctype),
                            e.treeAdapter.setDocumentMode(e.document, n),
                            e.insertionMode = fs.BEFORE_HTML
                        }(this, e);
                        break;
                    case fs.BEFORE_HEAD:
                    case fs.IN_HEAD:
                    case fs.IN_HEAD_NO_SCRIPT:
                    case fs.AFTER_HEAD:
                        this._err(e, an.misplacedDoctype);
                        break;
                    case fs.IN_TABLE_TEXT:
                        ta(this, e)
                    }
                }
                onStartTag(e) {
                    this.skipNextNewLine = !1,
                    this.currentToken = e,
                    this._processStartTag(e),
                    e.selfClosing && !e.ackSelfClosing && this._err(e, an.nonVoidHtmlElementStartTagWithTrailingSolidus)
                }
                _processStartTag(e) {
                    this.shouldProcessStartTagTokenInForeignContent(e) ? function(e, t) {
                        if (function(e) {
                            const t = e.tagID;
                            return t === Cn.FONT && e.attrs.some((({name: e})=>e === fn.COLOR || e === fn.SIZE || e === fn.FACE)) || ps.has(t)
                        }(t))
                            Ta(e),
                            e._startTagOutsideForeignContent(t);
                        else {
                            const n = e._getAdjustedCurrentElement()
                              , s = e.treeAdapter.getNamespaceURI(n);
                            s === mn.MATHML ? ds(t) : s === mn.SVG && (function(e) {
                                const t = hs.get(e.tagName);
                                null != t && (e.tagName = t,
                                e.tagID = Nn(e.tagName))
                            }(t),
                            Ts(t)),
                            ms(t),
                            t.selfClosing ? e._appendElement(t, s) : e._insertElement(t, s),
                            t.ackSelfClosing = !0
                        }
                    }(this, e) : this._startTagOutsideForeignContent(e)
                }
                _startTagOutsideForeignContent(e) {
                    switch (this.insertionMode) {
                    case fs.INITIAL:
                        Os(this, e);
                        break;
                    case fs.BEFORE_HTML:
                        !function(e, t) {
                            t.tagID === Cn.HTML ? (e._insertElement(t, mn.HTML),
                            e.insertionMode = fs.BEFORE_HEAD) : Ls(e, t)
                        }(this, e);
                        break;
                    case fs.BEFORE_HEAD:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.HEAD:
                                e._insertElement(t, mn.HTML),
                                e.headElement = e.openElements.current,
                                e.insertionMode = fs.IN_HEAD;
                                break;
                            default:
                                Ms(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.IN_HEAD:
                        ys(this, e);
                        break;
                    case fs.IN_HEAD_NO_SCRIPT:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.BASEFONT:
                            case Cn.BGSOUND:
                            case Cn.HEAD:
                            case Cn.LINK:
                            case Cn.META:
                            case Cn.NOFRAMES:
                            case Cn.STYLE:
                                ys(e, t);
                                break;
                            case Cn.NOSCRIPT:
                                e._err(t, an.nestedNoscriptInHead);
                                break;
                            default:
                                Bs(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.AFTER_HEAD:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.BODY:
                                e._insertElement(t, mn.HTML),
                                e.framesetOk = !1,
                                e.insertionMode = fs.IN_BODY;
                                break;
                            case Cn.FRAMESET:
                                e._insertElement(t, mn.HTML),
                                e.insertionMode = fs.IN_FRAMESET;
                                break;
                            case Cn.BASE:
                            case Cn.BASEFONT:
                            case Cn.BGSOUND:
                            case Cn.LINK:
                            case Cn.META:
                            case Cn.NOFRAMES:
                            case Cn.SCRIPT:
                            case Cn.STYLE:
                            case Cn.TEMPLATE:
                            case Cn.TITLE:
                                e._err(t, an.abandonedHeadElementChild),
                                e.openElements.push(e.headElement, Cn.HEAD),
                                ys(e, t),
                                e.openElements.remove(e.headElement);
                                break;
                            case Cn.HEAD:
                                e._err(t, an.misplacedStartTagForHeadElement);
                                break;
                            default:
                                Us(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.IN_BODY:
                        Vs(this, e);
                        break;
                    case fs.IN_TABLE:
                        zs(this, e);
                        break;
                    case fs.IN_TABLE_TEXT:
                        ta(this, e);
                        break;
                    case fs.IN_CAPTION:
                        !function(e, t) {
                            const n = t.tagID;
                            na.has(n) ? e.openElements.hasInTableScope(Cn.CAPTION) && (e.openElements.generateImpliedEndTags(),
                            e.openElements.popUntilTagNamePopped(Cn.CAPTION),
                            e.activeFormattingElements.clearToLastMarker(),
                            e.insertionMode = fs.IN_TABLE,
                            zs(e, t)) : Vs(e, t)
                        }(this, e);
                        break;
                    case fs.IN_COLUMN_GROUP:
                        sa(this, e);
                        break;
                    case fs.IN_TABLE_BODY:
                        ra(this, e);
                        break;
                    case fs.IN_ROW:
                        ia(this, e);
                        break;
                    case fs.IN_CELL:
                        !function(e, t) {
                            const n = t.tagID;
                            na.has(n) ? (e.openElements.hasInTableScope(Cn.TD) || e.openElements.hasInTableScope(Cn.TH)) && (e._closeTableCell(),
                            ia(e, t)) : Vs(e, t)
                        }(this, e);
                        break;
                    case fs.IN_SELECT:
                        la(this, e);
                        break;
                    case fs.IN_SELECT_IN_TABLE:
                        !function(e, t) {
                            const n = t.tagID;
                            n === Cn.CAPTION || n === Cn.TABLE || n === Cn.TBODY || n === Cn.TFOOT || n === Cn.THEAD || n === Cn.TR || n === Cn.TD || n === Cn.TH ? (e.openElements.popUntilTagNamePopped(Cn.SELECT),
                            e._resetInsertionMode(),
                            e._processStartTag(t)) : la(e, t)
                        }(this, e);
                        break;
                    case fs.IN_TEMPLATE:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.BASE:
                            case Cn.BASEFONT:
                            case Cn.BGSOUND:
                            case Cn.LINK:
                            case Cn.META:
                            case Cn.NOFRAMES:
                            case Cn.SCRIPT:
                            case Cn.STYLE:
                            case Cn.TEMPLATE:
                            case Cn.TITLE:
                                ys(e, t);
                                break;
                            case Cn.CAPTION:
                            case Cn.COLGROUP:
                            case Cn.TBODY:
                            case Cn.TFOOT:
                            case Cn.THEAD:
                                e.tmplInsertionModeStack[0] = fs.IN_TABLE,
                                e.insertionMode = fs.IN_TABLE,
                                zs(e, t);
                                break;
                            case Cn.COL:
                                e.tmplInsertionModeStack[0] = fs.IN_COLUMN_GROUP,
                                e.insertionMode = fs.IN_COLUMN_GROUP,
                                sa(e, t);
                                break;
                            case Cn.TR:
                                e.tmplInsertionModeStack[0] = fs.IN_TABLE_BODY,
                                e.insertionMode = fs.IN_TABLE_BODY,
                                ra(e, t);
                                break;
                            case Cn.TD:
                            case Cn.TH:
                                e.tmplInsertionModeStack[0] = fs.IN_ROW,
                                e.insertionMode = fs.IN_ROW,
                                ia(e, t);
                                break;
                            default:
                                e.tmplInsertionModeStack[0] = fs.IN_BODY,
                                e.insertionMode = fs.IN_BODY,
                                Vs(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.AFTER_BODY:
                        !function(e, t) {
                            t.tagID === Cn.HTML ? Vs(e, t) : pa(e, t)
                        }(this, e);
                        break;
                    case fs.IN_FRAMESET:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.FRAMESET:
                                e._insertElement(t, mn.HTML);
                                break;
                            case Cn.FRAME:
                                e._appendElement(t, mn.HTML),
                                t.ackSelfClosing = !0;
                                break;
                            case Cn.NOFRAMES:
                                ys(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.AFTER_FRAMESET:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.NOFRAMES:
                                ys(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.AFTER_AFTER_BODY:
                        !function(e, t) {
                            t.tagID === Cn.HTML ? Vs(e, t) : da(e, t)
                        }(this, e);
                        break;
                    case fs.AFTER_AFTER_FRAMESET:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.HTML:
                                Vs(e, t);
                                break;
                            case Cn.NOFRAMES:
                                ys(e, t)
                            }
                        }(this, e)
                    }
                }
                onEndTag(e) {
                    this.skipNextNewLine = !1,
                    this.currentToken = e,
                    this.currentNotInHTML ? function(e, t) {
                        if (t.tagID === Cn.P || t.tagID === Cn.BR)
                            return Ta(e),
                            void e._endTagOutsideForeignContent(t);
                        for (let n = e.openElements.stackTop; n > 0; n--) {
                            const s = e.openElements.items[n];
                            if (e.treeAdapter.getNamespaceURI(s) === mn.HTML) {
                                e._endTagOutsideForeignContent(t);
                                break
                            }
                            const a = e.treeAdapter.getTagName(s);
                            if (a.toLowerCase() === t.tagName) {
                                t.tagName = a,
                                e.openElements.shortenToLength(n);
                                break
                            }
                        }
                    }(this, e) : this._endTagOutsideForeignContent(e)
                }
                _endTagOutsideForeignContent(e) {
                    switch (this.insertionMode) {
                    case fs.INITIAL:
                        Os(this, e);
                        break;
                    case fs.BEFORE_HTML:
                        !function(e, t) {
                            const n = t.tagID;
                            n !== Cn.HTML && n !== Cn.HEAD && n !== Cn.BODY && n !== Cn.BR || Ls(e, t)
                        }(this, e);
                        break;
                    case fs.BEFORE_HEAD:
                        !function(e, t) {
                            const n = t.tagID;
                            n === Cn.HEAD || n === Cn.BODY || n === Cn.HTML || n === Cn.BR ? Ms(e, t) : e._err(t, an.endTagWithoutMatchingOpenElement)
                        }(this, e);
                        break;
                    case fs.IN_HEAD:
                        ws(this, e);
                        break;
                    case fs.IN_HEAD_NO_SCRIPT:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.NOSCRIPT:
                                e.openElements.pop(),
                                e.insertionMode = fs.IN_HEAD;
                                break;
                            case Cn.BR:
                                Bs(e, t);
                                break;
                            default:
                                e._err(t, an.endTagWithoutMatchingOpenElement)
                            }
                        }(this, e);
                        break;
                    case fs.AFTER_HEAD:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.BODY:
                            case Cn.HTML:
                            case Cn.BR:
                                Us(e, t);
                                break;
                            case Cn.TEMPLATE:
                                ws(e, t);
                                break;
                            default:
                                e._err(t, an.endTagWithoutMatchingOpenElement)
                            }
                        }(this, e);
                        break;
                    case fs.IN_BODY:
                        Ws(this, e);
                        break;
                    case fs.TEXT:
                        !function(e, t) {
                            var n;
                            t.tagID === Cn.SCRIPT && (null === (n = e.scriptHandler) || void 0 === n || n.call(e, e.openElements.current)),
                            e.openElements.pop(),
                            e.insertionMode = e.originalInsertionMode
                        }(this, e);
                        break;
                    case fs.IN_TABLE:
                        Js(this, e);
                        break;
                    case fs.IN_TABLE_TEXT:
                        ta(this, e);
                        break;
                    case fs.IN_CAPTION:
                        !function(e, t) {
                            const n = t.tagID;
                            switch (n) {
                            case Cn.CAPTION:
                            case Cn.TABLE:
                                e.openElements.hasInTableScope(Cn.CAPTION) && (e.openElements.generateImpliedEndTags(),
                                e.openElements.popUntilTagNamePopped(Cn.CAPTION),
                                e.activeFormattingElements.clearToLastMarker(),
                                e.insertionMode = fs.IN_TABLE,
                                n === Cn.TABLE && Js(e, t));
                                break;
                            case Cn.BODY:
                            case Cn.COL:
                            case Cn.COLGROUP:
                            case Cn.HTML:
                            case Cn.TBODY:
                            case Cn.TD:
                            case Cn.TFOOT:
                            case Cn.TH:
                            case Cn.THEAD:
                            case Cn.TR:
                                break;
                            default:
                                Ws(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.IN_COLUMN_GROUP:
                        !function(e, t) {
                            switch (t.tagID) {
                            case Cn.COLGROUP:
                                e.openElements.currentTagId === Cn.COLGROUP && (e.openElements.pop(),
                                e.insertionMode = fs.IN_TABLE);
                                break;
                            case Cn.TEMPLATE:
                                ws(e, t);
                                break;
                            case Cn.COL:
                                break;
                            default:
                                aa(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.IN_TABLE_BODY:
                        oa(this, e);
                        break;
                    case fs.IN_ROW:
                        ca(this, e);
                        break;
                    case fs.IN_CELL:
                        !function(e, t) {
                            const n = t.tagID;
                            switch (n) {
                            case Cn.TD:
                            case Cn.TH:
                                e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(),
                                e.openElements.popUntilTagNamePopped(n),
                                e.activeFormattingElements.clearToLastMarker(),
                                e.insertionMode = fs.IN_ROW);
                                break;
                            case Cn.TABLE:
                            case Cn.TBODY:
                            case Cn.TFOOT:
                            case Cn.THEAD:
                            case Cn.TR:
                                e.openElements.hasInTableScope(n) && (e._closeTableCell(),
                                ca(e, t));
                                break;
                            case Cn.BODY:
                            case Cn.CAPTION:
                            case Cn.COL:
                            case Cn.COLGROUP:
                            case Cn.HTML:
                                break;
                            default:
                                Ws(e, t)
                            }
                        }(this, e);
                        break;
                    case fs.IN_SELECT:
                        ua(this, e);
                        break;
                    case fs.IN_SELECT_IN_TABLE:
                        !function(e, t) {
                            const n = t.tagID;
                            n === Cn.CAPTION || n === Cn.TABLE || n === Cn.TBODY || n === Cn.TFOOT || n === Cn.THEAD || n === Cn.TR || n === Cn.TD || n === Cn.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(Cn.SELECT),
                            e._resetInsertionMode(),
                            e.onEndTag(t)) : ua(e, t)
                        }(this, e);
                        break;
                    case fs.IN_TEMPLATE:
                        !function(e, t) {
                            t.tagID === Cn.TEMPLATE && ws(e, t)
                        }(this, e);
                        break;
                    case fs.AFTER_BODY:
                        ha(this, e);
                        break;
                    case fs.IN_FRAMESET:
                        !function(e, t) {
                            t.tagID !== Cn.FRAMESET || e.openElements.isRootHtmlElementCurrent() || (e.openElements.pop(),
                            e.fragmentContext || e.openElements.currentTagId === Cn.FRAMESET || (e.insertionMode = fs.AFTER_FRAMESET))
                        }(this, e);
                        break;
                    case fs.AFTER_FRAMESET:
                        !function(e, t) {
                            t.tagID === Cn.HTML && (e.insertionMode = fs.AFTER_AFTER_FRAMESET)
                        }(this, e);
                        break;
                    case fs.AFTER_AFTER_BODY:
                        da(this, e)
                    }
                }
                onEof(e) {
                    switch (this.insertionMode) {
                    case fs.INITIAL:
                        Os(this, e);
                        break;
                    case fs.BEFORE_HTML:
                        Ls(this, e);
                        break;
                    case fs.BEFORE_HEAD:
                        Ms(this, e);
                        break;
                    case fs.IN_HEAD:
                        vs(this, e);
                        break;
                    case fs.IN_HEAD_NO_SCRIPT:
                        Bs(this, e);
                        break;
                    case fs.AFTER_HEAD:
                        Us(this, e);
                        break;
                    case fs.IN_BODY:
                    case fs.IN_TABLE:
                    case fs.IN_CAPTION:
                    case fs.IN_COLUMN_GROUP:
                    case fs.IN_TABLE_BODY:
                    case fs.IN_ROW:
                    case fs.IN_CELL:
                    case fs.IN_SELECT:
                    case fs.IN_SELECT_IN_TABLE:
                        Qs(this, e);
                        break;
                    case fs.TEXT:
                        !function(e, t) {
                            e._err(t, an.eofInElementThatCanContainOnlyText),
                            e.openElements.pop(),
                            e.insertionMode = e.originalInsertionMode,
                            e.onEof(t)
                        }(this, e);
                        break;
                    case fs.IN_TABLE_TEXT:
                        ta(this, e);
                        break;
                    case fs.IN_TEMPLATE:
                        Ea(this, e);
                        break;
                    case fs.AFTER_BODY:
                    case fs.IN_FRAMESET:
                    case fs.AFTER_FRAMESET:
                    case fs.AFTER_AFTER_BODY:
                    case fs.AFTER_AFTER_FRAMESET:
                        Ps(this, e)
                    }
                }
                onWhitespaceCharacter(e) {
                    if (this.skipNextNewLine && (this.skipNextNewLine = !1,
                    e.chars.charCodeAt(0) === Jt.LINE_FEED)) {
                        if (1 === e.chars.length)
                            return;
                        e.chars = e.chars.substr(1)
                    }
                    if (this.tokenizer.inForeignNode)
                        this._insertCharacters(e);
                    else
                        switch (this.insertionMode) {
                        case fs.IN_HEAD:
                        case fs.IN_HEAD_NO_SCRIPT:
                        case fs.AFTER_HEAD:
                        case fs.TEXT:
                        case fs.IN_COLUMN_GROUP:
                        case fs.IN_SELECT:
                        case fs.IN_SELECT_IN_TABLE:
                        case fs.IN_FRAMESET:
                        case fs.AFTER_FRAMESET:
                            this._insertCharacters(e);
                            break;
                        case fs.IN_BODY:
                        case fs.IN_CAPTION:
                        case fs.IN_CELL:
                        case fs.IN_TEMPLATE:
                        case fs.AFTER_BODY:
                        case fs.AFTER_AFTER_BODY:
                        case fs.AFTER_AFTER_FRAMESET:
                            Hs(this, e);
                            break;
                        case fs.IN_TABLE:
                        case fs.IN_TABLE_BODY:
                        case fs.IN_ROW:
                            Ks(this, e);
                            break;
                        case fs.IN_TABLE_TEXT:
                            Zs(this, e)
                        }
                }
            }
            .parse(e, t)
        }
        function Ra(e, t) {
            if (e.tagName) {
                for (let n in e.attrs)
                    "style" === e.attrs[n].name && (e.attrs.push({
                        name: "data-osana_style",
                        value: e.attrs[n].value
                    }),
                    e.attrs[n].value = Vt(e.attrs[n].value, t));
                switch (e.tagName.toLowerCase()) {
                case "a":
                    for (let n in e.attrs)
                        "href" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_href",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t));
                    break;
                case "script":
                    let n = !1;
                    for (let s in e.attrs) {
                        if (e.attrs.includes({
                            name: "type",
                            value: "application/json"
                        }))
                            return;
                        "src" === e.attrs[s].name ? (e.attrs.push({
                            name: "data-osana_src",
                            value: e.attrs[s].value
                        }),
                        e.attrs[s].value = Yt(e.attrs[s].value, t),
                        n = !0) : "integrity" === e.attrs[s].name ? (e.attrs.push({
                            name: "data-osana_integrity",
                            value: e.attrs[s].value
                        }),
                        e.attrs[s].value = "") : "nonce" === e.attrs[s].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[s].value
                        }),
                        e.attrs[s].value = "")
                    }
                    if (!n)
                        for (let n in e.childNodes)
                            e.childNodes[n].value = Gt(e.childNodes[n].value, t);
                    break;
                case "style":
                    for (let n in e.childNodes)
                        e.childNodes[n].value = Vt(e.childNodes[n].value, t);
                    break;
                case "link":
                    for (let n in e.attrs)
                        "href" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_href",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "integrity" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_integrity",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "") : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "img":
                case "source":
                    for (let n in e.attrs)
                        "src" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_src",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "srcset" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_srcset",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = ba(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "form":
                    for (let n in e.attrs)
                        "action" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_action",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "iframe":
                case "audio":
                case "embed":
                case "track":
                    for (let n in e.attrs)
                        "src" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_src",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "meta":
                    for (let t in e.attrs)
                        if ("http-equiv" === e.attrs[t].name) {
                            "Content-Security-Policy" === e.attrs[t].value && (e.attrs.push({
                                name: "data-Content-Security-Policy",
                                value: e.attrs[t].value
                            }),
                            e.attrs[t].value = "*");
                            for (let t in e.attrs)
                                "content" === e.attrs[t].name && (e.attrs.push({
                                    name: "data-content",
                                    value: e.attrs[t].value
                                }),
                                e.attrs[t].value = "")
                        }
                    break;
                case "area":
                case "base":
                    for (let n in e.attrs)
                        "href" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_href",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "body":
                    for (let n in e.attrs)
                        "background" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_background",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t));
                    break;
                case "input":
                    for (let n in e.attrs)
                        "src" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_src",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t));
                    break;
                case "object":
                    for (let n in e.attrs)
                        "data" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_data",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "");
                    break;
                case "button":
                    for (let n in e.attrs)
                        "formaction" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_formaction",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t));
                    break;
                case "video":
                    for (let n in e.attrs)
                        "src" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_src",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "poster" === e.attrs[n].name ? (e.attrs.push({
                            name: "data-osana_poster",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = Yt(e.attrs[n].value, t)) : "nonce" === e.attrs[n].name && (e.attrs.push({
                            name: "data-osana_nonce",
                            value: e.attrs[n].value
                        }),
                        e.attrs[n].value = "")
                }
            }
            if (e.childNodes)
                for (let n in e.childNodes)
                    n = Ra(e.childNodes[n], t);
            return e
        }
        function ba(e, t) {
            const n = e.split(/ [0-9]+x,? ?/g);
            if (!n)
                return "";
            const s = e.match(/ [0-9]+x,? ?/g);
            if (!s)
                return "";
            const a = n.map(((e,n)=>{
                if (e && s[n])
                    return Yt(e, t) + s[n]
            }
            ));
            return a.join("")
        }
        const Da = globalThis
          , Pa = Da.fetch
          , Oa = Da.WebSocket
          , La = Da.Request
          , Ma = Da.Response
          , ya = [101, 204, 205, 304]
          , wa = [301, 302, 303, 307, 308];
        class va extends Error {
            status;
            body;
            constructor(e, t) {
                super(t.message || t.code),
                this.status = e,
                this.body = t
            }
        }
        class Ba {
            base;
            constructor(e, t) {
                this.base = new URL(`./v ${e}/`,t)
            }
        }
        const Ua = "!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";
        function xa(e) {
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (!Ua.includes(n))
                    return !1
            }
            return !0
        }
        function Ha(e) {
            let t = "";
            for (let n = 0; n < e.length; n++) {
                const s = e[n];
                Ua.includes(s) && "%" !== s ? t += s : t += "%" + s.charCodeAt(0).toString(16).padStart(2, "0")
            }
            return t
        }
        function Fa(e, t) {
            const n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function Ga(e, t, n, s, a, r) {
            return Fa((o = Fa(Fa(t, e), Fa(s, r))) << (i = a) | o >>> 32 - i, n);
            var o, i
        }
        function ja(e, t, n, s, a, r, o) {
            return Ga(t & n | ~t & s, e, t, a, r, o)
        }
        function Ya(e, t, n, s, a, r, o) {
            return Ga(t & s | n & ~s, e, t, a, r, o)
        }
        function qa(e, t, n, s, a, r, o) {
            return Ga(t ^ n ^ s, e, t, a, r, o)
        }
        function Va(e, t, n, s, a, r, o) {
            return Ga(n ^ (t | ~s), e, t, a, r, o)
        }
        function Xa(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            let n = 1732584193
              , s = -271733879
              , a = -1732584194
              , r = 271733878;
            for (let t = 0; t < e.length; t += 16) {
                const o = n
                  , i = s
                  , c = a
                  , l = r;
                n = ja(n, s, a, r, e[t], 7, -680876936),
                r = ja(r, n, s, a, e[t + 1], 12, -389564586),
                a = ja(a, r, n, s, e[t + 2], 17, 606105819),
                s = ja(s, a, r, n, e[t + 3], 22, -1044525330),
                n = ja(n, s, a, r, e[t + 4], 7, -176418897),
                r = ja(r, n, s, a, e[t + 5], 12, 1200080426),
                a = ja(a, r, n, s, e[t + 6], 17, -1473231341),
                s = ja(s, a, r, n, e[t + 7], 22, -45705983),
                n = ja(n, s, a, r, e[t + 8], 7, 1770035416),
                r = ja(r, n, s, a, e[t + 9], 12, -1958414417),
                a = ja(a, r, n, s, e[t + 10], 17, -42063),
                s = ja(s, a, r, n, e[t + 11], 22, -1990404162),
                n = ja(n, s, a, r, e[t + 12], 7, 1804603682),
                r = ja(r, n, s, a, e[t + 13], 12, -40341101),
                a = ja(a, r, n, s, e[t + 14], 17, -1502002290),
                s = ja(s, a, r, n, e[t + 15], 22, 1236535329),
                n = Ya(n, s, a, r, e[t + 1], 5, -165796510),
                r = Ya(r, n, s, a, e[t + 6], 9, -1069501632),
                a = Ya(a, r, n, s, e[t + 11], 14, 643717713),
                s = Ya(s, a, r, n, e[t], 20, -373897302),
                n = Ya(n, s, a, r, e[t + 5], 5, -701558691),
                r = Ya(r, n, s, a, e[t + 10], 9, 38016083),
                a = Ya(a, r, n, s, e[t + 15], 14, -660478335),
                s = Ya(s, a, r, n, e[t + 4], 20, -405537848),
                n = Ya(n, s, a, r, e[t + 9], 5, 568446438),
                r = Ya(r, n, s, a, e[t + 14], 9, -1019803690),
                a = Ya(a, r, n, s, e[t + 3], 14, -187363961),
                s = Ya(s, a, r, n, e[t + 8], 20, 1163531501),
                n = Ya(n, s, a, r, e[t + 13], 5, -1444681467),
                r = Ya(r, n, s, a, e[t + 2], 9, -51403784),
                a = Ya(a, r, n, s, e[t + 7], 14, 1735328473),
                s = Ya(s, a, r, n, e[t + 12], 20, -1926607734),
                n = qa(n, s, a, r, e[t + 5], 4, -378558),
                r = qa(r, n, s, a, e[t + 8], 11, -2022574463),
                a = qa(a, r, n, s, e[t + 11], 16, 1839030562),
                s = qa(s, a, r, n, e[t + 14], 23, -35309556),
                n = qa(n, s, a, r, e[t + 1], 4, -1530992060),
                r = qa(r, n, s, a, e[t + 4], 11, 1272893353),
                a = qa(a, r, n, s, e[t + 7], 16, -155497632),
                s = qa(s, a, r, n, e[t + 10], 23, -1094730640),
                n = qa(n, s, a, r, e[t + 13], 4, 681279174),
                r = qa(r, n, s, a, e[t], 11, -358537222),
                a = qa(a, r, n, s, e[t + 3], 16, -722521979),
                s = qa(s, a, r, n, e[t + 6], 23, 76029189),
                n = qa(n, s, a, r, e[t + 9], 4, -640364487),
                r = qa(r, n, s, a, e[t + 12], 11, -421815835),
                a = qa(a, r, n, s, e[t + 15], 16, 530742520),
                s = qa(s, a, r, n, e[t + 2], 23, -995338651),
                n = Va(n, s, a, r, e[t], 6, -198630844),
                r = Va(r, n, s, a, e[t + 7], 10, 1126891415),
                a = Va(a, r, n, s, e[t + 14], 15, -1416354905),
                s = Va(s, a, r, n, e[t + 5], 21, -57434055),
                n = Va(n, s, a, r, e[t + 12], 6, 1700485571),
                r = Va(r, n, s, a, e[t + 3], 10, -1894986606),
                a = Va(a, r, n, s, e[t + 10], 15, -1051523),
                s = Va(s, a, r, n, e[t + 1], 21, -2054922799),
                n = Va(n, s, a, r, e[t + 8], 6, 1873313359),
                r = Va(r, n, s, a, e[t + 15], 10, -30611744),
                a = Va(a, r, n, s, e[t + 6], 15, -1560198380),
                s = Va(s, a, r, n, e[t + 13], 21, 1309151649),
                n = Va(n, s, a, r, e[t + 4], 6, -145523070),
                r = Va(r, n, s, a, e[t + 11], 10, -1120210379),
                a = Va(a, r, n, s, e[t + 2], 15, 718787259),
                s = Va(s, a, r, n, e[t + 9], 21, -343485551),
                n = Fa(n, o),
                s = Fa(s, i),
                a = Fa(a, c),
                r = Fa(r, l)
            }
            return [n, s, a, r]
        }
        function Wa(e) {
            let t = "";
            const n = 32 * e.length;
            for (let s = 0; s < n; s += 8)
                t += String.fromCharCode(e[s >> 5] >>> s % 32 & 255);
            return t
        }
        function Qa(e) {
            const t = []
              , n = e.length >> 2;
            for (let e = 0; e < n; e += 1)
                t[e] = 0;
            const s = 8 * e.length;
            for (let n = 0; n < s; n += 8)
                t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
            return t
        }
        function Ka(e) {
            const t = "0123456789abcdef";
            let n = "";
            for (let s = 0; s < e.length; s += 1) {
                const a = e.charCodeAt(s);
                n += t.charAt(a >>> 4 & 15) + t.charAt(15 & a)
            }
            return n
        }
        function za(e) {
            return unescape(encodeURIComponent(e))
        }
        function Ja(e) {
            return function(e) {
                return Wa(Xa(Qa(e), 8 * e.length))
            }(za(e))
        }
        function $a(e, t) {
            return function(e, t) {
                let n = Qa(e);
                const s = []
                  , a = [];
                n.length > 16 && (n = Xa(n, 8 * e.length));
                for (let e = 0; e < 16; e += 1)
                    s[e] = 909522486 ^ n[e],
                    a[e] = 1549556828 ^ n[e];
                const r = Xa(s.concat(Qa(t)), 512 + 8 * t.length);
                return Wa(Xa(a.concat(r), 640))
            }(za(e), za(t))
        }
        const Za = 3072
          , er = [["v2", class extends Ba {
            ws;
            http;
            newMeta;
            getMeta;
            constructor(e) {
                super(2, e),
                this.ws = new URL(this.base),
                this.http = new URL(this.base),
                this.newMeta = new URL("./ws-new-meta",this.base),
                this.getMeta = new URL("./ws-meta",this.base),
                "https:" === this.ws.protocol ? this.ws.protocol = "wss:" : this.ws.protocol = "ws:"
            }
            async connect(e, t, n, s, a) {
                const r = new La(this.newMeta,{
                    headers: this.createBareHeaders(t, n, a, s, e)
                })
                  , o = await Pa(r);
                if (!o.ok)
                    throw new va(o.status,await o.json());
                const i = await o.text()
                  , c = new Oa(this.ws,[i]);
                return c.meta = new Promise(((e,t)=>{
                    c.addEventListener("open", (async()=>{
                        const t = await Pa(this.getMeta, {
                            headers: {
                                "x-bare-id": i
                            },
                            method: "GET"
                        });
                        e(await await this.readBareResponse(t))
                    }
                    )),
                    c.addEventListener("error", t)
                }
                )),
                c
            }
            async request(e, t, n, s, a, r, o, i, c) {
                if (s.startsWith("blob:")) {
                    const e = await Pa(`blob:${location.origin}${o}`)
                      , t = new Ma(e.body,e);
                    return t.rawHeaders = Object.fromEntries(e.headers),
                    t.rawResponse = e,
                    t
                }
                const l = {};
                if (t instanceof Headers)
                    for (const [e,n] of t)
                        l[e] = n;
                else
                    for (const e in t)
                        l[e] = t[e];
                const u = {
                    credentials: "include",
                    method: e,
                    signal: c
                };
                "only-if-cached" !== i && (u.cache = i),
                void 0 !== n && (u.body = n),
                u.headers = this.createBareHeaders(s, a, o, r, l);
                const E = new La(this.http + "?cache=" + (T = `${s}${a}${r}${o}`,
                m ? f ? $a(m, T) : Ka($a(m, T)) : f ? Ja(T) : Ka(Ja(T))),u)
                  , h = await Pa(E)
                  , p = await this.readBareResponse(h)
                  , d = new Ma(ya.includes(p.status) ? void 0 : h.body,{
                    status: p.status,
                    statusText: p.statusText ?? void 0,
                    headers: p.headers
                });
                var T, m, f;
                return d.rawHeaders = p.rawHeaders,
                d.rawResponse = h,
                d
            }
            async readBareResponse(e) {
                if (!e.ok)
                    throw new va(e.status,await e.json());
                const t = function(e) {
                    const t = new Headers(e)
                      , n = "x-bare-headers";
                    if (e.has(`${n}-0`)) {
                        const s = [];
                        for (const [a,r] of e)
                            if (a.startsWith(n)) {
                                if (!r.startsWith(";"))
                                    throw new va(400,{
                                        code: "INVALID_BARE_HEADER",
                                        id: `request.headers.${a}`,
                                        message: "Value didn't begin with semi-colon."
                                    });
                                s[parseInt(a.slice(n.length + 1))] = r.slice(1),
                                t.delete(a)
                            }
                        t.set(n, s.join(""))
                    }
                    return t
                }(e.headers)
                  , n = {};
                return t.has("x-bare-status") && (n.status = parseInt(t.get("x-bare-status"))),
                t.has("x-bare-status-text") && (n.statusText = t.get("x-bare-status-text")),
                t.has("x-bare-headers") && (n.rawHeaders = JSON.parse(t.get("x-bare-headers")),
                n.headers = new Headers(n.rawHeaders)),
                n
            }
            createBareHeaders(e, t, n, s, a, r=[], o=[], i=[]) {
                const c = new Headers;
                c.set("x-bare-protocol", e),
                c.set("x-bare-host", t),
                c.set("x-bare-path", n),
                c.set("x-bare-port", s.toString()),
                c.set("x-bare-headers", JSON.stringify(a));
                for (const e of r)
                    c.append("x-bare-forward-headers", e);
                for (const e of o)
                    c.append("x-bare-pass-headers", e);
                for (const e of i)
                    c.append("x-bare-pass-status", e.toString());
                return function(e) {
                    const t = new Headers(e);
                    if (e.has("x-bare-headers")) {
                        const n = e.get("x-bare-headers");
                        if (n.length > Za) {
                            t.delete("x-bare-headers");
                            let e = 0;
                            for (let s = 0; s < n.length; s += Za) {
                                const a = n.slice(s, s + Za)
                                  , r = e++;
                                t.set(`x-bare-headers-${r}`, `;${a}`)
                            }
                        }
                    }
                }(c),
                c
            }
        }
        ], ["v1", class extends Ba {
            ws;
            http;
            newMeta;
            getMeta;
            constructor(e) {
                super(1, e),
                this.ws = new URL(this.base),
                this.http = new URL(this.base),
                this.newMeta = new URL("ws-new-meta",this.base),
                this.getMeta = new URL("ws-meta",this.base),
                "https:" === this.ws.protocol ? this.ws.protocol = "wss:" : this.ws.protocol = "ws:"
            }
            async connect(e, t, n, s, a) {
                const r = await Pa(this.newMeta, {
                    method: "GET"
                });
                if (!r.ok)
                    throw new va(r.status,await r.json());
                const o = await r.text()
                  , i = new Oa(this.ws,["/", Ha(JSON.stringify({
                    remote: {
                        protocol: t,
                        host: n,
                        port: s,
                        path: a
                    },
                    headers: [
                        e, 
                        'cross-origin-embedder-policy', 
                        'cross-origin-opener-policy', 
                        'cross-origin-resource-policy',
                        'content-security-policy',
                        'content-security-policy-report-only',
                        'expect-ct',
                        'feature-policy',
                        'origin-isolation',
                        'strict-transport-security',
                        'upgrade-insecure-requests',
                        'x-content-type-options',
                        'x-download-options',
                        'x-frame-options',
                        'x-permitted-cross-domain-policies',
                        'x-powered-by',
                        'x-xss-protection',
                        'access-control-allow-origin',],
                    forward_headers: ["accept-encoding", "accept-language", "sec-websocket-extensions", "sec-websocket-key", "sec-websocket-version", 'connection', 'content-length',],
                    id: o
                }))]);
                return i.meta = new Promise(((e,t)=>{
                    i.addEventListener("open", (async()=>{
                        const n = await Pa(this.getMeta, {
                            headers: {
                                "x-bare-id": o
                            },
                            method: "GET"
                        });
                        n.ok || t(new va(n.status,await n.json())),
                        e(await n.json())
                    }
                    )),
                    i.addEventListener("error", t)
                }
                )),
                i
            }
            async request(e, t, n, s, a, r, o, i, c) {
                if (s.startsWith("blob:")) {
                    const e = await Pa(`blob:${location.origin}${o}`)
                      , t = new Ma(e.body,e);
                    return t.rawHeaders = Object.fromEntries(e.headers),
                    t.rawResponse = e,
                    t
                }
                const l = {};
                if (t instanceof Headers)
                    for (const [e,n] of t)
                        l[e] = n;
                else
                    for (const e in t)
                        l[e] = t[e];
                const u = {
                    credentials: "include",
                    method: e,
                    signal: c
                };
                void 0 !== n && (u.body = n);
                const E = new La(this.http,u);
                this.writeBareRequest(E, s, a, o, r, l, ["accept-encoding", "accept-language"]);
                const h = await Pa(E)
                  , p = await this.readBareResponse(h)
                  , d = new Ma(ya.includes(p.status) ? void 0 : h.body,{
                    status: p.status,
                    statusText: p.statusText ?? void 0,
                    headers: p.headers
                });
                return d.rawHeaders = p.rawHeaders,
                d.rawResponse = h,
                d
            }
            async readBareResponse(e) {
                if (!e.ok)
                    throw new va(e.status,await e.json());
                const t = ["x-bare-status", "x-bare-status-text", "x-bare-headers"];
                for (const n of t)
                    if (!e.headers.has(n))
                        throw new va(500,{
                            code: "IMPL_MISSING_BARE_HEADER",
                            id: `response.headers.${n}`
                        });
                const n = parseInt(e.headers.get("x-bare-status"))
                  , s = e.headers.get("x-bare-status-text")
                  , a = JSON.parse(e.headers.get("x-bare-headers"));
                return {
                    status: n,
                    statusText: s,
                    rawHeaders: a,
                    headers: new Headers(a)
                }
            }
            writeBareRequest(e, t, n, s, a, r, o) {
                e.headers.set("x-bare-protocol", t),
                e.headers.set("x-bare-host", n),
                e.headers.set("x-bare-path", s),
                e.headers.set("x-bare-port", a.toString()),
                e.headers.set("x-bare-headers", JSON.stringify(r)),
                e.headers.set("x-bare-forward-headers", JSON.stringify(o))
            }
        }
        ]]
          , tr = {
            encode: (e="")=>e,
            decode: (e="")=>e
        }
          , nr = {
            encode: (e="")=>encodeURIComponent(e),
            decode: (e="")=>decodeURIComponent(e)
        }
          , sr = {
            encode: (e="")=>encodeURIComponent(e.toString().split("").map(((e,t)=>t % 2 ? String.fromCharCode(2 ^ e.charCodeAt(0)) : e)).join("")),
            decode: (e="")=>{
                let[t,...n] = e.split("?");
                return decodeURIComponent(t).split("").map(((e,t)=>t % 2 ? String.fromCharCode(2 ^ e.charCodeAt(0)) : e)).join("") + (n.length ? "?" + n.join("?") : "")
            }
        }
          , ar = {
            encode: e=>{
                const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                e = String(e),
                /[^\0-\xFF]/.test(e) && new DOMException("The string to be encoded contains characters outside of the Latin1 range.");
                let n, s, a, r, o = e.length % 3, i = "", c = -1, l = e.length - o;
                for (; ++c < l; )
                    n = e.charCodeAt(c) << 16,
                    s = e.charCodeAt(++c) << 8,
                    a = e.charCodeAt(++c),
                    r = n + s + a,
                    i += t.charAt(r >> 18 & 63) + t.charAt(r >> 12 & 63) + t.charAt(r >> 6 & 63) + t.charAt(63 & r);
                return 2 == o ? (n = e.charCodeAt(c) << 8,
                s = e.charCodeAt(++c),
                r = n + s,
                i += t.charAt(r >> 10) + t.charAt(r >> 4 & 63) + t.charAt(r << 2 & 63) + "=") : 1 == o && (r = e.charCodeAt(c),
                i += t.charAt(r >> 2) + t.charAt(r << 4 & 63) + "=="),
                i
            }
            ,
            decode: e=>{
                var t = (e = String(e).replace(/[\t\n\f\r ]/g, "")).length;
                if (t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e))
                    throw new DOMException("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                let n, s, a = 0, r = "", o = -1;
                for (; ++o < t; )
                    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(o)),
                    n = a % 4 ? 64 * n + s : s,
                    a++ % 4 && (r += String.fromCharCode(255 & n >> (-2 * a & 6)));
                return r
            }
        }
          , rr = {
            decode: e=>{
                const t = parseInt(e.substring(0, 2))
                  , n = parseInt(e.substring(2, t + 2))
                  , s = decodeURIComponent(e.substring(t + 2, e.length)).match(new RegExp(`.{1,${t}}`,"g"));
                let a = "";
                for (let e in s)
                    for (let t in s[e].split(""))
                        a += String.fromCharCode(s[e][t].charCodeAt(0) - parseInt(n.toString()[t]));
                return decodeURIComponent(a)
            }
            ,
            encode: e=>{
                const t = Math.ceil(10 * Math.random())
                  , n = (e=>{
                    let t = "";
                    for (let n = 0; n < e; n++)
                        t += Math.ceil(9 * Math.random());
                    return parseInt(t)
                }
                )(t)
                  , s = encodeURIComponent(e).match(new RegExp(`.{1,${t}}`,"g"));
                let a = "";
                for (let e in s)
                    for (let t in s[e].split(""))
                        a += String.fromCharCode(s[e][t].charCodeAt(0) + parseInt(n.toString()[t]));
                return encodeURIComponent(`${t < 10 ? `0 ${t}` : t}${n}${a}`)
            }
        };
        var or, ir = new Uint8Array(16);
        function cr() {
            if (!or && !(or = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return or(ir)
        }
        const lr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
          , ur = function(e) {
            return "string" == typeof e && lr.test(e)
        };
        for (var Er = [], hr = 0; hr < 256; ++hr)
            Er.push((hr + 256).toString(16).substr(1));
        self.__osana$bundle = {
            rewrite: {
                css: Vt,
                html: function(e, t) {
                    return "string" != typeof e && (e = e.toString()),
                    function(e, t) {
                        const n = {
                            ...ka
                        };
                        return ga(e, n) ? "" : Ia(e, n)
                    }(Ra(Sa(e), t))
                },
                srcset: ba,
                js: Gt,
                url: {
                    rewriteURL: Yt,
                    unwriteURL: function(e) {
                        const t = self.__osana$config;
                        if (!e)
                            return e;
                        let n;
                        if (/^https?:\/\//.test(e))
                            n = new URL(t.codec.decode(new URL(e).pathname.slice(t.prefix.length)));
                        else {
                            if (/^(#|about|data|mailto|javascript):/.test(e))
                                return e;
                            n = new URL(t.codec.decode(e.slice(t.prefix.length)))
                        }
                        return n.href
                    }
                },
                headers: e,
                protocol: function(e) {
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        const s = e[n];
                        "!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(s) && "%" !== s ? t += s : t += "%" + s.charCodeAt(0).toString(16).padStart(2, "0")
                    }
                    return t
                }
            },
            codecs: t,
            BareClient: class {
                data;
                client;
                server;
                ready;
                constructor(e, t) {
                    this.server = new URL(e),
                    this.ready = !1,
                    "object" == typeof t && this.loadData(t)
                }
                loadData(e) {
                    let t = !1;
                    for (const [n,s] of er)
                        if (e.versions.includes(n)) {
                            this.client = new s(this.server),
                            t = !0;
                            break
                        }
                    if (!t)
                        throw new Error("Unable to find compatible client version.");
                    this.data = e,
                    this.ready = !0
                }
                async work() {
                    if (!0 === this.ready)
                        return;
                    const e = await Pa(this.server);
                    if (!e.ok)
                        throw new Error(`Unable to fetch Bare meta: ${e.status} ${await e.text()}`);
                    this.loadData(await e.json())
                }
                async request(e, t, n, s, a, r, o, i, c) {
                    return await this.work(),
                    await this.client.request(e, t, n, s, a, r, o, i, c)
                }
                async connect(e, t, n, s, a) {
                    return await this.work(),
                    this.client.connect(e, t, n, s, a)
                }
                async createWebSocket(e, t={}, n=[]) {
                    const s = t instanceof Headers ? Object.fromEntries(t) : t;
                    e = new URL(e),
                    s.Host = e.host,
                    s.Pragma = "no-cache",
                    s["Cache-Control"] = "no-cache",
                    s.Upgrade = "websocket",
                    s.Connection = "Upgrade",
                    "string" == typeof n && (n = [n]);
                    for (const e of n)
                        if (!xa(e))
                            throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${e}' is invalid.`);
                    return n.length && (t["Sec-Websocket-Protocol"] = n.join(", ")),
                    await this.work(),
                    this.client.connect(t, e.protocol, e.hostname, e.port, e.pathname + e.search)
                }
                async fetch(e, t={}) {
                    let n, s, a, r, o;
                    e instanceof La ? (t || (t = e),
                    e = new URL(e.url)) : e = new URL(e),
                    n = "string" == typeof t.method ? t.method : "GET",
                    void 0 !== t.body && null !== t.body && (s = t.body),
                    a = "object" == typeof t.headers && null !== t.headers ? t.headers instanceof Headers ? Object.fromEntries(t.headers) : t.headers : {},
                    r = "string" == typeof t.cache ? t.cache : "default",
                    t.signal instanceof AbortSignal && (o = t.signal);
                    for (let i = 0; ; i++) {
                        let c;
                        c = "" === e.port ? "https:" === e.protocol ? "443" : "80" : e.port,
                        a.host = e.host;
                        const l = await this.request(n, a, s, e.protocol, e.hostname, c, e.pathname + e.search, r, o);
                        if (l.finalURL = e.toString(),
                        !wa.includes(l.status))
                            return l;
                        switch (t.redirect) {
                        default:
                        case "follow":
                            if (20 > i && l.headers.has("location")) {
                                e = new URL(l.headers.get("location"),e);
                                continue
                            }
                            throw new TypeError("Failed to fetch");
                        case "error":
                            throw new TypeError("Failed to fetch");
                        case "manual":
                            return l
                        }
                    }
                }
            }
            ,
            uuid: function(e, t, n) {
                var s = (e = e || {}).random || (e.rng || cr)();
                if (s[6] = 15 & s[6] | 64,
                s[8] = 63 & s[8] | 128,
                t) {
                    n = n || 0;
                    for (var a = 0; a < 16; ++a)
                        t[n + a] = s[a];
                    return t
                }
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = (Er[e[t + 0]] + Er[e[t + 1]] + Er[e[t + 2]] + Er[e[t + 3]] + "-" + Er[e[t + 4]] + Er[e[t + 5]] + "-" + Er[e[t + 6]] + Er[e[t + 7]] + "-" + Er[e[t + 8]] + Er[e[t + 9]] + "-" + Er[e[t + 10]] + Er[e[t + 11]] + Er[e[t + 12]] + Er[e[t + 13]] + Er[e[t + 14]] + Er[e[t + 15]]).toLowerCase();
                    if (!ur(n))
                        throw TypeError("Stringified UUID is invalid");
                    return n
                }(s)
            }
        }
    }
    )()
}
)();
//# sourceMappingURL=osana.bundle.js.map
//# sourceMappingURL=osana.bundle.js.map