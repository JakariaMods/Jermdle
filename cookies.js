export function setCookie(key, value, days){
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60));
    document.cookie = key + '=' + value + ";expires=" + date.toUTCString();
}

export function getCookie(key){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    var result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(key) == 0){
            result = element.substring(key.length + 1)
        }
    })
    return result;
}