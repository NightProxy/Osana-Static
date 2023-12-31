(()=>{
    "use strict";
    importScripts("/static/osana/osana.bundle.js"),
    importScripts("/static/osana/osana.config.js"),
    self.OsanaServiceWorker = class {
        constructor() {
            this.config = self.__osana$config,
            this.bundle = self.__osana$bundle,
            this.bareClient = new this.bundle.BareClient(this.config.bare)
        }
        fetch(t) {
            return s = this,
            i = void 0,
            r = function*() {
                const s = this.config.codec.decode(t.request.url.slice((location.origin + this.config.prefix).length)) + new URL(t.request.url).search;
                if (!/^https?:\/\//.test(s))
                    return fetch(t.request.url);
                const i = new URL(s)
                  , n = this.bundle.rewrite.headers.request(Object.fromEntries(t.request.headers.entries()), i);
                if (this.config.blacklist && this.config.blacklist.some((e=>e.test(i.host))))
                    return new e;
                const r = {
                    method: t.request.method,
                    headers: n
                };
                ["GET", "HEAD"].includes(t.request.method) || (r.body = yield t.request.blob());
                const c = yield this.bareClient.fetch(i, r);
                let o = c.rawResponse.status;
                const a = this.bundle.rewrite.headers.response(c.rawHeaders, i);
                let l = a["Content-Type"]
                  , A = "";
                switch (!0) {
                case /text\/html/.test(l):
                    let e = yield c.text();
                    if (e.includes("<head>")) {
                        const t = `<head$1>\n            <script src="${this.config.files.bundle}"><\/script>\n            <script src="${this.config.files.config}"><\/script>\n            <script src="${this.config.files.client}"><\/script>\n            <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBkZAAAAAoAAx9k7/gAAAAASUVORK5CYIIA">\n            <link rel="icon" href="${i.origin}/favicon.ico">\n            ${301 === o && a.location ? `<meta http-equiv="refresh" content="0; url=${this.bundle.rewrite.url.rewriteURL(a.location)}">` : ""}\n          `;
                        A = this.bundle.rewrite.html(yield e, s).replace(/<head(.*?)>/g, t)
                    } else
                        A = `<head>\n            <script src="${this.config.files.bundle}"><\/script>\n            <script src="${this.config.files.config}"><\/script>\n            <script src="${this.config.files.client}"><\/script>\n            <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBkZAAAAAoAAx9k7/gAAAAASUVORK5CYIIA">\n            <link rel="icon" href="${i.origin}/favicon.ico">\n            ${301 === o && a.location ? `<meta http-equiv="refresh" content="0; url=${this.bundle.rewrite.url.rewriteURL(a.location)}">` : ""}\n          </head>`,
                        A += this.bundle.rewrite.html(e, s);
                    break;
                case /text\/css/.test(l) || "style" === t.request.destination:
                    A = this.bundle.rewrite.css(yield c.text(), s);
                    break;
                case /(text|application)\/javascript/.test(l) || "script" === t.request.destination:
                    A = this.bundle.rewrite.js(yield c.text(), s);
                    break;
                default:
                    A = yield c.arrayBuffer()
                }
                return new Response(A,{
                    status: c.rawResponse.status,
                    statusText: c.rawResponse.statusText,
                    headers: a
                })
            }
            ,
            new ((n = void 0) || (n = Promise))((function(e, t) {
                function c(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function a(t) {
                    var s;
                    t.done ? e(t.value) : (s = t.value,
                    s instanceof n ? s : new n((function(e) {
                        e(s)
                    }
                    ))).then(c, o)
                }
                a((r = r.apply(s, i || [])).next())
            }
            ));
            var s, i, n, r
        }
    }
    ;
    class e extends Response {
        constructor() {
            super("Forbidden", {
                status: 403,
                statusText: "Forbidden",
                headers: {
                    "Content-Type": "text/plain"
                }
            })
        }
    }
}
)();
//# sourceMappingURL=osana.worker.js.map
