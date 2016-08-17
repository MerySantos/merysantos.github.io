for (index = 0; index < divs.length; index++) {
    if (pos < divs[index]) {
      break;
    }
  }
  $(".menu li:nth-child(" + index + ") a").addClass("active");
};

$(window).scroll(function() {
  scrollSpy();
});
$(document).ready(function() {
  scrollSpy();
});