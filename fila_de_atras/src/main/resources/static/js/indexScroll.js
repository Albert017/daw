$(document).ready(function() {
	var win = $(window);
	var canLoadMore = true;
	var page = 1;
	$('#loading').hide();
	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if (canLoadMore && ($(document).height() - win.height() == win.scrollTop())) {
			canLoadMore = false;
			$('#loading').show();

			$.ajax({
				url: ('/indexScroll/'+page),
				dataType: 'html',
				success: function(html) {
					$('#postContainer').append(html);
					$('#loading').hide();
					page++;
					canLoadMore = true;
				}
			});
		}
	});
});