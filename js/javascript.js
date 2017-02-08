$(function () {
  
    $('.button-followers').click(function () {
        $(this).next('.alert-unFollowUser').css('visibility', 'inherit');
    });

    $('.alert-unFollowUser > .btn-danger').click(function () {
        $(this).parents('.alert-unFollowUser').css('visibility', 'hidden');
    });

    $('.alert-unFollowUser > .btn-success').click(function () {
        $(this).parent().next('.alert-unFollowUser').css('visibility', 'hidden');
        $(this).parents('.panel panel-default').remove();
    });
});
