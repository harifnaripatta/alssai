var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  !(function (d, l) {
    "use strict";
    var e = !1,
      n = !1;
    if (l.querySelector) if (d.addEventListener) e = !0;
    if (((d.wp = d.wp || {}), !d.wp.receiveEmbedMessage))
      if (
        ((d.wp.receiveEmbedMessage = function (e) {
          var t = e.data;
          if (t)
            if (t.secret || t.message || t.value)
              if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                for (
                  var r,
                    i,
                    a,
                    s = l.querySelectorAll(
                      'iframe[data-secret="' + t.secret + '"]'
                    ),
                    n = l.querySelectorAll(
                      'blockquote[data-secret="' + t.secret + '"]'
                    ),
                    o = new RegExp("^https?:$", "i"),
                    c = 0;
                  c < n.length;
                  c++
                )
                  n[c].style.display = "none";
                for (c = 0; c < s.length; c++)
                  if (((r = s[c]), e.source === r.contentWindow)) {
                    if ((r.removeAttribute("style"), "height" === t.message)) {
                      if (1e3 < (a = parseInt(t.value, 10))) a = 1e3;
                      else if (~~a < 200) a = 200;
                      r.height = a;
                    }
                    if ("link" === t.message)
                      if (
                        ((i = l.createElement("a")),
                        (a = l.createElement("a")),
                        (i.href = r.getAttribute("src")),
                        (a.href = t.value),
                        o.test(a.protocol))
                      )
                        if (a.host === i.host)
                          if (l.activeElement === r)
                            d.top.location.href = t.value;
                  }
              }
        }),
        e)
      )
        d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
          l.addEventListener("DOMContentLoaded", t, !1),
          d.addEventListener("load", t, !1);
    function t() {
      if (!n) {
        n = !0;
        for (
          var e,
            t,
            r = -1 !== navigator.appVersion.indexOf("MSIE 10"),
            i = !!navigator.userAgent.match(/Trident.*rv:11\./),
            a = l.querySelectorAll("iframe.wp-embedded-content"),
            s = 0;
          s < a.length;
          s++
        ) {
          if (!(e = a[s]).getAttribute("data-secret"))
            (t = Math.random().toString(36).substr(2, 10)),
              (e.src += "#?secret=" + t),
              e.setAttribute("data-secret", t);
          if (r || i)
            (t = e.cloneNode(!0)).removeAttribute("security"),
              e.parentNode.replaceChild(t, e);
        }
      }
    }
  })(window, document);
}
/*
     FILE ARCHIVED ON 15:58:38 Oct 09, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:01:31 Feb 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.619
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 7.225
  LoadShardBlock: 106.127 (3)
  PetaboxLoader3.datanode: 99.279 (4)
  PetaboxLoader3.resolve: 120.948 (2)
  load_resource: 121.088
*/
