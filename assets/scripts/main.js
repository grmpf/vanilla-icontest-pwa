

const combinedItems = function combinedItems(arr = []) {
    const res = arr.reduce(function (acc, obj) {
        let found = false;
        for (let i = 0; i < acc.length; i++) {
            if (acc[i].url === obj.url) {
                found = true;
                acc[i].count++;
            };
        }
        if (!found) {
            obj.count = 1;
            acc.push(obj);
        }
        return acc;
    }, []);
    return res;
}




function handleSwReturn() {
    const listElem = document.getElementsByClassName("debugList");

    if ("serviceWorker" in navigator && listElem) {
        const loadedFiles = [
            /* FOR TESTING ONLY
            {url: 'http://localhost:3000/favicon.svg'},
            {url: 'http://localhost:3000/foobar1.svg'},
            {url: 'http://localhost:3000/foobar2.svg'},
            */
        ]
        console.log('INIT main.js');

        navigator.serviceWorker.addEventListener('message', function (event) {


            // TODO:
            // - safe stats for testing more modern approaches (e.g. SVGs)
            // - inject loaded urls into dom for some visual debugging (won't show things like splashscreen images)
            console.warn(event.data.msg, event.data.url);
            if(event.data.type === 'file') {
                loadedFiles.push({
                    url: event.data.url,
                });
                const fileLinks = combinedItems(loadedFiles).map(function (file) {
                    //return '<span>'+ file.count +'&times;</span> ' + file.url.replace(window.location.origin, '');
                    return '<span>'+ file.count +'&times;</span> ' + file.url.replace(window.location.protocol + '//' + window.location.host, '');
                });
                console.log('fileLinks', fileLinks);
                const fileLinksList = /*`<b>Fetched:</b>` +*/ `<ol><li>` + fileLinks.join(`</li><li>`) + `</li></ol>`;

                //listElem.innerHTML = fileLinksList
                Array.prototype.forEach.call(listElem, function(elem) {
                    elem.innerHTML = fileLinksList;
                });
            }
        });

    }
}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        handleSwReturn()
    });
}