$(document).ready(function() {
    var itemsPerPage = 4;
    var $comments = $('.comments-container .col-lg-3');
    var totalPages = Math.ceil($comments.length / itemsPerPage);

    function showPage(page) {
        $comments.hide();
        $comments.slice((page - 1) * itemsPerPage, page * itemsPerPage).show();
    }

    function createPagination() {
        var pagination = $('.pagination');
        pagination.empty();

        for (var i = 1; i <= totalPages; i++) {
            pagination.append('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
        }

        pagination.find('li:first-child').addClass('active');
        pagination.find('a').click(function(e) {
            e.preventDefault();
            var page = $(this).text();
            showPage(page);
            pagination.find('li').removeClass('active');
            $(this).parent().addClass('active');
        });
    }

    showPage(1);
    createPagination();
});