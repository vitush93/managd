$(function () {
    $('#navbar').autoHidingNavbar();

    var $body = $('body');
    var $actionBar = $('#actionBar');
    var $navbar = $('#navbar');

    $('.datepicker').datepicker({
        startDate: '+1d'
    });

    $body.on('click', '.task-icon', function () {
        var task = $(this).parent('.task');
        if (task.hasClass('selected')) {
            task.removeClass('selected');
        } else {
            task.addClass('selected');
        }
        if ($('.task.selected').length > 0) {
            $navbar.hide();
            $actionBar.children('.container').fadeIn();
            $actionBar.show();
        } else {
            $actionBar.hide();
            $actionBar.children('.container').hide();
            $navbar.show();
        }
    });

    $body.on('click', '#task-deselect', function (e) {
        e.preventDefault();
        $('.task').removeClass('selected');
        $actionBar.hide();
        $actionBar.children('.container').hide();
        $navbar.show();
    });

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

    $body.on('click', '.color-pick', function () {
        $('.color-pick').removeClass('active');
        $(this).addClass('active');
        $('.color-input').val($(this).data('color'));
    });

    $.nette.init();

    $body.on('click', '#newTaskModal .assignee-pick', function () {
        $('#newTaskModal .assignee-pick').removeClass('selected');
        $(this).addClass('selected');
        $('.picked-assignee').val($(this).data('user'));
    });
});
