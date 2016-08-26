var MYAPP = {

    addCopyLinks: function () {
        var that = this;
        $("#instances-table > tbody > tr").each(function (i) {
            var instance = $(this);

            var ip_td = instance.find("td:nth-child(3)")
            var region_td = instance.find("td:nth-child(4)")

            var ip = ip_td.html();
            var region = region_td.html();

            ip_td.html(that.makeButton('ip-' + i, ip));
            region_td.html(that.makeButton('machine-' + i, ip + ',' + region));
        });

        new Clipboard('.btn');
    },

    makeButton: function (id, text) {
        return "<button class='btn' data-clipboard-target='#" + id + "' style='padding-left: 3px; padding-right: 2px; margin-right: 0.5em;'>" +
            "<img src='https://clipboardjs.com/assets/images/clippy.svg' alt='Copy to clipboard' style='width: 12px; height: 12px;'>" +
            "</button>" +
            "<span class='copy' id='" + id + "'>" + text + "</span>";
    },

    doPoll: function () {
        var that = this;
        $("#instances-table > tbody > tr").each(function (i) {
            var instance = $(this);
            var machine_address = instance.find("#machine-" + i).text();
            var link = 'ssh://' + machine_address;

            if (instance.find("a i.icon-ok").length == 0) {
                var button = instance.find("i.icon-ok");
                button.wrap('<a href="' + link + '"></a>');
            }
        });
        setTimeout(function () {
            that.doPoll()
        }, 500);
    }

};

MYAPP.addCopyLinks();
MYAPP.doPoll();

