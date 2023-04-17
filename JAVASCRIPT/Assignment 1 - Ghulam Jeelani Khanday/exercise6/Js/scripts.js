let num = ["vendorSub", "productSub", "vendor", "maxTouchPoints", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "webkitTemporaryStorage", "webkitPersistanceStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform"];
let arr = " ";
for (let i in num) {
    arr += num[i] + "<br><br>";
}

document.getElementById("result").innerHTML = arr;