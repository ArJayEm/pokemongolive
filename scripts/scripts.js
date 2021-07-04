var last_top_loc = 0;
var linksArr = [
  { description: "Play Where You Are", link: "/en/play-where-you-are/" },
  { description: "LEADERBOARD", link: "/en/leaderboard/" },
  { description: "EVENTS", link: "/en/events/" },
  { description: "UPDATES", link: "/en/post/" },
  {
    description: "SUPPORT",
    link: "https://niantic.helpshift.com/a/pokemon-go/?p=web",
  },
  {
    description: "Offer Redemption",
    link: "https://rewards.nianticlabs.com/pokemongo",
  },
];

$(document).ready(function () {
  $("nav .menu a").off("click").on("click", MenuClick);
  SetNavLinks();
  isMobile();
  //GetNews();
});

$(document).scroll(function () {
  var top_loc = window.scrollY;

  if (top_loc < last_top_loc) {
    $("nav").removeClass("scroll-down");
    $("nav").addClass("scroll-up");
  } else {
    $("nav").removeClass("scroll-up");
    $("nav").addClass("scroll-down");
  }

  last_top_loc = top_loc;
});

$(document).resize(function () {
  //isMobile();
});

function SetNavLinks() {
  var links = "";
  var footerLinks = "<div class='link'><a href='#'>Home</a></div>";
  for (var i = 0; i < linksArr.length; i++) {
    links +=
      '<li><a href="' +
      linksArr[i].link +
      '">' +
      linksArr[i].description +
      "</a></li>";
    footerLinks +=
      "<div class='link'><a href='" +
      linksArr[i].link +
      "'>" +
      linksArr[i].description +
      "</a></div>";
  }
  $("nav .links ul").html(links);
  $(".footer .links").html(footerLinks);
}

function isMobile() {
  var device;
  if (
    /(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|w3c|acs\-|alav|alca|amoi|audi|avan|benq|bird|blac|blaz|brew|cell|cldc|cmd\-|dang|doco|eric|hipt|inno|ipaq|java|jigs|kddi|keji|leno|lg\-c|lg\-d|lg\-g|lge\-|maui|maxo|midp|mits|mmef|mobi|mot\-|moto|mwbp|nec\-|newt|noki|palm|pana|pant|phil|play|port|prox|qwap|sage|sams|sany|sch\-|sec\-|send|seri|sgh\-|shar|sie\-|siem|smal|smar|sony|sph\-|symb|t\-mo|teli|tim\-|tosh|tsm\-|upg1|upsi|vk\-v|voda|wap\-|wapa|wapi|wapp|wapr|webc|winw|winw|xda|xda\-) /i.test(
      navigator.userAgent
    )
  ) {
    if (
      /(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(
        navigator.userAgent
      )
    ) {
      device = "tablet";
    } else {
      device = "mobile";
    }
  } else if (
    /(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i.test(
      navigator.userAgent
    )
  ) {
    device = "tablet";
  } else {
    device = "desktop";
  }

  $("body").addClass(device);
  //document.title = "Pokémon GO++ | " + device;
  console.log(device);

  // if (/Mobi|Android/i.test(navigator.userAgent))
  //   $("body").toggleClass("mobile");
}

function MenuClick() {
  //$("nav .menu").toggleClass("open");
  //$(".links").toggleClass("open");
  $("body").toggleClass("open");
}

var carousel_curr = 0;
var carousel_prev = -1;
var prev_class = "fadeOutLeft",
  next_class = "fadeInRight";
function CarouselButtonClick(attr) {
  if (attr == "left") {
    carousel_curr--;
    carousel_prev = carousel_curr + 1;
    prev_class = "fadeOutRight";
    next_class = "fadeInRight";
  } else {
    carousel_curr++;
    carousel_prev = carousel_curr - 1;
    prev_class = "fadeOutLeft";
    next_class = "fadeInLeft";
  }

  if (carousel_curr <= 0) {
    carousel_curr = 0;
    $(".rocket .carousel_buttons img:eq(0)").attr("aria-disabled", true);
    $(".rocket .carousel_buttons img:eq(1)").attr("aria-disabled", false);
  } else if (carousel_curr >= 2) {
    carousel_curr = 2;
    $(".rocket .carousel_buttons img:eq(0)").attr("aria-disabled", false);
    $(".rocket .carousel_buttons img:eq(1)").attr("aria-disabled", true);
  } else {
    $(".rocket .carousel_buttons img:eq(0)").attr("aria-disabled", false);
    $(".rocket .carousel_buttons img:eq(1)").attr("aria-disabled", false);
  }

  $(".rocket .leaders img:eq(" + carousel_prev + ")")
    .removeClass()
    .addClass(prev_class)
    .delay(500)
    .hide();
  $(".rocket .leaders img:eq(" + carousel_curr + ")")
    .removeClass()
    .addClass(next_class)
    .delay(500)
    .show();
  $(".rocket .names div:eq(" + carousel_prev + ")").addClass("hidden");
  $(".rocket .names div:eq(" + carousel_curr + ")").removeClass();

  console.log(carousel_curr);
}

function GetNews() {
  setTimeout(() => {
    $(".news").addClass("ready");
  }, 3000);
}
