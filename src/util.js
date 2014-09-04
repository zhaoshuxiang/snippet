/**
 * @desc 工具类方法
 * @author shuxiang
 * @email zhaoshuxiang@conew.com
 * @date 2014/09/03
 *
 */

var Util = {

    convert: function(bytes, precision) {
        bytes = parseInt(bytes, 10);
        precision = precision || 0;

        if (!isNaN(bytes)) {
            if (bytes >= 1024 * 1024 * 1024) {
                return (bytes / (1024 * 1024 * 1024)).toFixed(precision) + 'GB';
            } else if (bytes >= 1024 * 1024) {
                return (bytes / (1024 * 1024)).toFixed(precision) + 'MB';
            } else if (bytes >= 1024) {
                return (bytes / 1024).toFixed(precision) + 'KB';
            } else if (bytes === 0) {
                return '';
            } else {
                return bytes + 'B';
            }
        } else {
            return '';
        }
    },

    getUrlPara: function(name) {
        return this.getUrlParams(window.location.search, name);
    },

    getUrlParams: function(search, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = (unescape(decodeURI(search))).substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    },

    byteLength: function(strParam) {
        return strParam.replace(/[^\x00-\xff]/g, "**").length;
    },

    subStr: function(strParam, maxBytesLen) {
        var len = maxBytesLen;
        var result = strParam.slice(0, len);

        while (Util.byteLength(result) > maxBytesLen) {
            result = result.slice(0, --len);
        }

        return result;
    }
};