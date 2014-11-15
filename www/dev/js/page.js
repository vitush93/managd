$(function() {
    $('#navbar').autoHidingNavbar();

    var $body = $('body');

    $body.on('click', '.task-icon', function () {
        var task = $(this).parent('.task');
        if (task.hasClass('selected')) {
            task.removeClass('selected');
        } else {
            task.addClass('selected');
        }
    })

    $body.on('click', '.avatar-pick', function () {
        $('.avatar-pick').removeClass('selected');
        if (!$(this).hasClass('selected')) {
            $('.avatar-input').val($(this).data('avatar'));
            $(this).addClass('selected');
        }
    });

    var $pf = $('.project-follower');
    if ($pf.length > 0) {
        $pf.tooltip();
    }

    $.nette.init();

    /*
     $.datepicker.regional['cs-CZ'] = {
     "Name": "cs-CZ",
     "closeText": "Close",
     "prevText": "Prev",
     "nextText": "Next",
     "currentText": "Today",
     "monthNames": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec", ""],
     "monthNamesShort": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ""],
     "dayNames": ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
     "dayNamesShort": ["ne", "po", "út", "st", "čt", "pá", "so"],
     "dayNamesMin": ["ne", "po", "út", "st", "čt", "pá", "so"],
     "dateFormat": "dd.mm.yy",
     "firstDay": 1,
     "isRTL": false
     };
     $.datepicker.setDefaults($.datepicker.regional['cs-CZ']);


     $('.datepicker').datepicker({
     changeMonth: true,
     changeYear: true
     });
     */
});
