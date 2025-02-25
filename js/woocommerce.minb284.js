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

  jQuery(function (i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function () {
      i(this).closest("form").submit();
    }),
      i("input.qty:not(.product-quantity input.qty)").each(function () {
        var o = parseFloat(i(this).attr("min"));
        0 <= o && parseFloat(i(this).val()) < o && i(this).val(o);
      }),
      i(".woocommerce-store-notice__dismiss-link").click(function () {
        Cookies.set("store_notice", "hidden", { path: "/" }),
          i(".woocommerce-store-notice").hide();
      }),
      "hidden" === Cookies.get("store_notice")
        ? i(".woocommerce-store-notice").hide()
        : i(".woocommerce-store-notice").show(),
      i(document.body).on("click", function () {
        i(".woocommerce-input-wrapper span.description:visible")
          .prop("aria-hidden", !0)
          .slideUp(250);
      }),
      i(".woocommerce-input-wrapper").on("click", function (o) {
        o.stopPropagation();
      }),
      i(".woocommerce-input-wrapper :input")
        .on("keydown", function (o) {
          var e = i(this).parent().find("span.description");
          if (27 === o.which && e.length && e.is(":visible"))
            return (
              e.prop("aria-hidden", !0).slideUp(250), o.preventDefault(), !1
            );
        })
        .on("click focus", function () {
          var o = i(this).parent(),
            e = o.find("span.description");
          o.addClass("currentTarget"),
            i(
              ".woocommerce-input-wrapper:not(.currentTarget) span.description:visible"
            )
              .prop("aria-hidden", !0)
              .slideUp(250),
            e.length &&
              e.is(":hidden") &&
              e.prop("aria-hidden", !1).slideDown(250),
            o.removeClass("currentTarget");
        }),
      (i.scroll_to_notices = function (o) {
        o.length &&
          i("html, body").animate({ scrollTop: o.offset().top - 100 }, 1e3);
      });
  });
}
/*
     FILE ARCHIVED ON 15:57:01 Oct 09, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:01:29 Feb 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.569
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 12.376
  LoadShardBlock: 220.672 (3)
  PetaboxLoader3.datanode: 91.256 (4)
  PetaboxLoader3.resolve: 126.14 (2)
  load_resource: 78.535
*/
