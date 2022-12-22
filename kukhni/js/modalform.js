$(document).ready(function() {

    
    var overlay = $('#overlay');
    var modall = '';

        $('a.main__btn').click(function() {

            modall = $(this).attr('data-target');
            
            if(modall == ('#myModal')) {
                overlay = $('#overlay');
            } else if(modall == ('#myModalsecond')) {
                overlay = $('#overlay2');
            } else if(modall == ('#myModalthird')) {
                overlay = $('#overlay3');
            } else if(modall == ('#myModalfourth')) {
                overlay = $('#overlay4');
            } else if(modall == ('#myModalfifth')) {
                overlay = $('#overlay5');
            } else if(modall == ('#myModalsixth')) {
                overlay = $('#overlay6');
            } else {
                overlay = $('#overlay7');
            }
            console.log(modall);

            console.log(overlay);
        });



//Валидация и отправка формы


    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    });
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="goToNewPage" - делаем:
                    case 'goToNewPage':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    // Если у формы id="popupResult" - делаем:
                    case 'popupResult':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                setTimeout(function() {
                                    $('#over').fadeOut();
                                    $('.modal-body-after').fadeOut();
                                    $('.modal').modal('hide');
                                }, 400);
                                setTimeout(function() {
                                    overlay.fadeIn();
                                    overlay.removeClass('d-none');
                                    overlay.addClass('d-flex');
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 800);
                                overlay.on('click', function(e) {
                                    $(this).fadeOut();
                                    overlay.addClass('d-none');
                                    overlay.removeClass('d-flex');
                                });

                            });
                            // .always(function(response) {
                            //     setTimeout(function() {
                            //         $('#loader').fadeOut();
                            //     }, 800);
                            //     setTimeout(function() {
                            //         $('#overlay').fadeIn();
                            //         $('#overlay').removeClass('d-none');
                            //         $('#overlay').addClass('d-flex');
                            //         $('#myModal').modal('hide');
                            //         //СЃС‚СЂРѕРєРё РґР»СЏ РѕСЃС‚Р»РµР¶РёРІР°РЅРёСЏ С†РµР»РµР№ РІ РЇ.РњРµС‚СЂРёРєРµ Рё Google Analytics
                            //     }, 1100);
                            //     setTimeout(function() {
                            //         $('#overlay').fadeIn();
                            //         $('#overlay').removeClass('d-flex');
                            //         $('#overlay').addClass('d-none');
                            //         $form.trigger('reset');
                            //     }, 3000);

                            // });
                        break;
                };
                return false;
            }
        })
    };

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });
    
});