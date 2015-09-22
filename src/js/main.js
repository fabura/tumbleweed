(function () {
    var slider = (function () {
        var $slider = $('.slider');
        var $slides = $slider.find('.slide');
        var $loco = $slides.eq(0);
        var $indexes = $slider.find('.index');

        var index = 0;

        var showSlide = function (index) {
            $loco.css('margin-left', '-' + (index * 100) + '%');
            $indexes
                .removeClass('active')
                .eq(index).addClass('active');
        };

        var boundIndex = function () {
            if (index === $slides.length) {
                index = 0;
            }
            if (index === -1) {
                index = $slides.length - 1;
            }
        };

        var next = function () {
            index++;
            boundIndex();
            showSlide(index);
        };

        var prev = function () {
            index--;
            boundIndex();
            showSlide(index);
        };

        showSlide(0);

        $indexes.click(function () {
            index = $indexes.index($(this));
            showSlide(index);
        });

        $slider.find('.arrow-right').click(function () {
            next();
        });

        $slider.find('.arrow-left').click(function () {
            prev();
        });
    })();

    var submitted = false;
    $('.email-form').on('submit', function (event) {
        if (submitted) {
            return;
        }
        event.preventDefault();
        var $form = $(this).find('form');
        var $email = $form.find("input[type='email']");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2,6})?)$/i;

        if (re.test($email.val())) {
            $form.addClass('sending');
            submitted = true;
            $form.submit();


            setTimeout(function () {
                $('.email-form').addClass('sent');
                $('.email-form-response').addClass('show');
                setTimeout(function () {
                    $('.email-form').display = 'none';
                }, 1000);
            }, 1000);

        } else {
            $form.addClass('invalid');

            setTimeout(function () {
                $form.removeClass('invalid');
            }, 1000);
        }
    });

    $('.request button, .request .input').click(function () {
        $(this).closest('.request').addClass('show-response');
    });
})();
