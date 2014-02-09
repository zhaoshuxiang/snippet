var Cookie = {};

Cookie.set = function() {

};

Cookie.get = function(name) {
    var reg = new RegExp(name + '=([^;]+);');
    var result = reg.exec(decodeURIComponent(document.cookie));

    return result ? result[1] : result;
};

Cookie.del = function() {

};