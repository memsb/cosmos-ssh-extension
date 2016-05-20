(function () {

    var doPoll = function () {
        $("#instances-table > tbody > tr").each(function () {
            var instance = $(this);
            var ip = instance.find("td:nth-child(3)").html();
            var region = instance.find("td:nth-child(4)").html();
            var link = 'ssh://' + ip + ',' + region;

            if (instance.find("a i.icon-ok").length == 0) {
                var button = instance.find("i.icon-ok");
                button.wrap('<a href="' + link + '"></a>');
            }
        });
        setTimeout(doPoll, 500);
    };

    doPoll();
})();
