//windowReady(function(event) {
//    alert("win is ready!");
//});
//domReady(function(event) {
//    alert("dom is ready!");
//});
//window.addEventListener('DOMContentLoaded', (event) => {
//    alert('DOM fully loaded and parsed');
//});
//window.addEventListener('load', (event) => {
//    alert('DOM2 fully loaded and parsed');
//});



const domReady = function domReady(callBack) {
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', callBack);
    }
    else {
        callBack();
    }
}

const windowReady = function windowReady(callBack) {
    if (document.readyState === 'complete') {
        callBack();
    }
    else {
        window.addEventListener('load', callBack);
    }
}