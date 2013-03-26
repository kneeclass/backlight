
Backlight = function () {
    var backlightLoadData = new Object();

    $("document").ready(function () {
        $("[data-backlight=true]").each(function () {
            backlightLoadData[$(this).attr("id")] = $(this).html();
        });
        //the browser check is dead in the new jquery
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && history.state != null) {            
            resetState(history.state)
        };

    });

    var resetState = function (state) {
        for (var prop in state) {
            $("#" + prop).html(state[prop]);
        }

    }

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
        if (event.state == null) {
            return;
        }
        resetState(event.state);
    };

} ();

