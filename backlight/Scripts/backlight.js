

var backlightLoadData = new Object();

$("document").ready(function () {


    $("[data-backlight=true]").each(function () {
        backlightLoadData[$(this).attr("id")] = $(this).html();
    });

});

window.onbeforeunload = function () {


    var itemToSave = {};

    $("[data-backlight=true]").each(function () {
        var onLoadHtml = backlightLoadData[$(this).attr("id")];

        var nowHtml = $("#" + $(this).attr("id"));

        if (onLoadHtml != nowHtml) {
            itemToSave[$(this).attr("id")] = nowHtml.html();
        }


    });

    history.pushState(itemToSave, "");

};

window.onpopstate = function (event) {


    console.log('popstate fired!');     

};