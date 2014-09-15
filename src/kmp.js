/**
 * @desc 字符串匹配算法KMP
 * @author shuxiang
 * @email zhaoshuxiang2010@gmail.com
 * @date 2014/09/15
 *
 */

(function() {

    function indexOf(tagStr, mStr) {
        var dict = getDict(mStr);
        var i = 0;
        var matchNum;

        while (i + mStr.length <= tagStr.length) {
            matchNum = match(tagStr, mStr, i);

            if (matchNum === true) {
                return i;
            } else {
                if (matchNum > 0) {
                    i = i + next(dict, matchNum);
                } else {
                    i = i + 1;
                }
            }
        }

        return -1;
    }

    function match(tagStr, mStr, begin) {
        var i = 0;
        var len = mStr.length;

        for (; i < len; i++) {
            if (tagStr.charAt(begin) !== mStr.charAt(i)) {
                return i;
            }

            begin = begin + 1;
        }

        return true;
    }

    function next(dict, matchNum) {
        return matchNum - dict[matchNum - 1] > 1 ? matchNum - dict[matchNum - 1] : 1;
    }

    function getDict(mStr) {
        var len = mStr.length;
        var i = 1;
        var subStr, priex, suffix, val;
        var dict = [];

        for (; i <= len; i++) {
            subStr = mStr.substr(0, i);

            if (subStr.length > 1) {
                priex = getPriex(subStr);
                suffix = getSuffix(subStr);
                val = getDictVal(priex, suffix);
                // console.log(priex, suffix);
                // console.log(val);
                dict.push(val);
            } else {
                dict.push(0);
            }
        }

        return dict;
    }

    function getPriex(str) {
        var priex = [];
        var i = 1;
        var len = str.length - 1;

        for (; i <= len; i++) {
            priex.push(str.substr(0, i));
        }

        return priex;
    }

    function getSuffix(str) {
        var suffix = [];
        var i = 1;
        var len = str.length;

        for (; i < len; i++) {
            suffix.push(str.slice(i, len));
        }

        return suffix;
    }

    function getDictVal(priex, suffix) {
        var i = 0;
        var iLen = priex.length;
        var j = 0;
        var jLen = suffix.length;
        var len = 0;

        for (; i < iLen; i++) {
            for (j = 0; j < jLen; j++) {
                if (priex[i] === suffix[j]) {
                    len = priex[i].length > len ? priex[i].length : len;
                }
            }
        }

        return len;
    }


    var res = indexOf('BBC ABCDAB ABCDABCDABDE', 'ABCDABD');
    console.log(res);

})();