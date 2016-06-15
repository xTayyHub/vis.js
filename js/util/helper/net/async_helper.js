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
    console.log("REQUEST: " + url);
    console.log("GET REQUEST");
    var request = createCORSRequest('GET', "https://vis.caseif.net/content/uc?export=download&id=0B8_nDMQp-qqCMWxLUFl5SE9KeTA");//url);
    request.responseType = 'arraybuffer';

    request.onload = () => {
        context.decodeAudioData(request.response, function(buffer) {
            playSound(buffer);
        }, onError);
    };
    request.send();
    
    /*$.ajax({
        url:        "https://vis.caseif.net/content/uc?export=download&id=0B8_nDMQp-qqCMWxLUFl5SE9KeTA",
        crossDomain: true,
        success:    mp3 => {
                        playSound(mp3);
                    },
        async:        false
    });*/
}
