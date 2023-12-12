$(document).ready(function(){
    $(".ht-license-switch-dev").click(function (e) {
        e.preventDefault();
        $(".ht-element-buy-dev").addClass("enabled");
        $(".ht-element-buy-ent").removeClass("enabled");
    });

    $(".ht-license-switch-ent").click(function (e) {
        e.preventDefault();
        $(".ht-element-buy-dev").removeClass("enabled");
        $(".ht-element-buy-ent").addClass("enabled");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(".js-ht-download-link").click(function(e){
        // logging a download
        // e.preventDefault(); // TODO: remove
        var type = $(this).attr('data-type');
        var id = $(this).attr('data-id');

        if (typeof type !== undefined && typeof id !== undefined) {
            var logUrl = '/api/download/' + type + "/" + id;
            console.log("posting to " +logUrl );
            $.post(logUrl, function(data) {
                console.log(data);
            });
        }
    });
});
