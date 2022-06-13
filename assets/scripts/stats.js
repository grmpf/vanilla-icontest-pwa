
function jsonLdStats() {
    const pageJsonLd = document.getElementsByClassName("jsonld-schema-graph")
    if(pageJsonLd.length > 0) {
        var dataLayer = dataLayer || [];
        Array.prototype.forEach.call(pageJsonLd, function (el) {
            var json = JSON.parse(el.innerHTML);
            var layer = {};
            Array.prototype.forEach.call(json["@graph"], function (piece) {
                if (Array.isArray(piece["@type"])) {
                    Array.prototype.forEach.call(piece["@type"], function (p) {
                        var pieceName = p.toLowerCase();
                        layer[pieceName] = piece;
                    });
                } else {
                    var pieceName = piece["@type"].toLowerCase();
                    layer[pieceName] = piece;
                }
            });
            dataLayer.push({"jsonld_schema": layer});

            // TODO: dataLayer could be added to custom stats as extra debug data
            console.info('dataLayer', layer)
            //console.info('dataLayer', dataLayer)
        });
    }
}



function navigatorStats() {
    const listElem = document.getElementsByClassName("debugListX");

    if ("platform" in navigator && listElem) {
        console.log('INIT stats.js');

        //console.log('navigator.platform', navigator.platform)
        const platformData = [
            '<span style="text-decoration: underline;">Online: ' + navigator.onLine + '</span>',
            //'AppName: ' + navigator.appName,
            'Platform: ' + navigator.platform,
            'AppCodeName: ' + navigator.appCodeName,
            'AppVersion: ' + navigator.appVersion,
            'Lang: ' + navigator.language,
            'Langs: ' + navigator.languages.join(', '),
            //'UserAgent: ' + navigator.userAgent,
            //'Vendor: ' + navigator.vendor,
        ]

        const platformList = /*`<b>Navigator:</b>` +*/ `<ul><li>` + platformData.join(`</li><li>`) + `</li></ul>`;

        //listElem.innerHTML = platformList
        Array.prototype.forEach.call(listElem, function(elem) {
            elem.innerHTML = platformList;
        });

    }
}



window.addEventListener('load', function () {
    navigatorStats()
    //jsonLdStats()
});
