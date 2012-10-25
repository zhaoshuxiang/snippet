var k_cookie = {};

k_cookie.set = function () {
    
};

k_cookie.get = function (name) {
    var reg = new RegExp(name + '=([^;]+);');
    var result = reg.exec(decodeURIComponent(document.cookie));

    return result ? result[1] : result;
};

k_cookie.del = function () {

};

