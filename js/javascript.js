$(function () {
    $('.button-followers').mouseenter(function () {
        $(this).text("Unfollow ");
        $(this).append("<i class =\"fa fa-times\" aria-hidden=\"true\"></i>");
        $(this).removeClass("btn-success").addClass("btn-danger");
    }).mouseleave(function () {
        $(this).text("Following");
        $(this).removeClass("btn-danger").addClass("btn-success");
    });

    $('.button-follow-user').click(function () {
        $(this).remove();
    });
});
