(function () {
    var $slider = $('.slider');

    $slider.find('.arrow-right').click(function () {
      $slider.find('.slide:first').css('margin-left', '-100%');
    });
})();