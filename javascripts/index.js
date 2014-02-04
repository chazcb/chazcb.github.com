$(function ($) {

    var text = 'Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'.split(' ');

    var $lead = $('[data-role=wild-things]');

    var fillNext = function () {

        if (!text.length)
            return;

        $lead[0].textContent += text.shift() + ' ';

        if (text.length) {
            window.setTimeout(fillNext, 10);
        }
    };

    var startFilling = function () {
        fillNext();
    };

    var $input = $('[data-role=input-wild]');

    $input.on('focus', startFilling);

});
