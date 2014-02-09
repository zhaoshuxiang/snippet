var Util = {};

Util.convert = function(bytes) {
    bytes = parseInt(bytes, 10);

    if (bytes > 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
    } else if (bytes > 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + 'MB';
    } else if (bytes > 1024) {
        return (bytes / 1024).toFixed(2) + 'KB';
    } else if (bytes === 0) {
        return '';
    } else {
        return bytes + 'B';
    }
};

Util.getUrlParams = function() {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = (unescape(decodeURI(window.location.search))).substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};