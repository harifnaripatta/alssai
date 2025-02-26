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

  jQuery(document).ready(function ($) {
    $(".head-menu li")
      .has("ul")
      .children("a")
      .append(' <i class="fa fa-fw fa-angle-down"></i>');

    // Create the dropdown base
    $("<select />").appendTo(".header");

    // Create default option "Go to..."
    $("<option />", {
      selected: "selected",
      value: "",
      text: "روابط أخرى ...",
    }).appendTo(".header select");

    // Populate dropdown with menu items
    $(".menu-top-bar a").each(function () {
      var el = $(this);
      $("<option />", {
        value: el.attr("href"),
        text: el.text(),
      }).appendTo(".header select");
    });

    $(".header select").change(function () {
      window.location = $(this).find("option:selected").val();
    });

    $(".head-menu ul:first-child").slicknav();

    $("#slider-z").owlCarousel({
      loop: true,
      rtl: true,
      margin: 0,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
    });

    $("#f-box-news-home").owlCarousel({
      loop: true,
      rtl: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });

    $.fn.equalHeights = function () {
      var maxHeight = 0,
        $this = $(this);

      $this.each(function () {
        var height = $(this).innerHeight();

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      return $this.css("height", maxHeight);
    };

    // auto-initialize plugin
    $("[data-equal]").each(function () {
      var $this = $(this),
        target = $this.data("equal");
      $this.find(target).equalHeights();
    });

    $(window).bind("load", function () {
      $(".boxs-home-reas .one-box-reas p").equalHeights();
      $(".post-arch-wrap").equalHeights();
      $(".birth-one").equalHeights();
      $(".event-one").equalHeights();
    });

    var frm = $("#form-add-new-post");
    frm.submit(function (e) {
      $.ajax({
        url: frm.attr("action"),
        type: frm.attr("method"),
        data: new FormData(this),
        processData: false,
        contentType: false,
        beforeSend: function (XHR) {
          $(".loading").show();
          frm.slideToggle(800);
          $("html, body").animate(
            {
              scrollTop: $(".page-cntn").offset().top - 35,
            },
            300
          );
        },
        complete: function (XHR) {
          $(".gooo").show();
          $(".loading").hide();
        },
      });
      e.preventDefault();
    });
  });
}
/*
     FILE ARCHIVED ON 15:56:04 Oct 09, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:01:31 Feb 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.674
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 7.114
  LoadShardBlock: 90.895 (3)
  PetaboxLoader3.datanode: 93.432 (4)
  load_resource: 65.714
  PetaboxLoader3.resolve: 47.65
*/
