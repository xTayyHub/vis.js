function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

function loadSound(url) {
    var request = createCORSRequest('GET', "https://vis.caseif.net/content/uc?export&id=0B8_nDMQp-qqCdW54RndSN2laVWs");//url);
    request.responseType = 'arraybuffer';

    request.onload = () => {
        context.decodeAudioData(request.response, function(buffer) {
            playSound(buffer);
        }, onError);
    };
    request.send();
}
