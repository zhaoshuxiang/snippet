var Event = {};

Event.on = function(eventName, callback) {
    var callbacks = this.callbacks = this.callbacks || {};

    if ('string' === typeof eventName && 'function' === typeof callback) {
        (callbacks[eventName] || (callbacks[eventName] = [])).push(callback);
    }

    return this;
};

Event.trigger = function() {
    var i = 0,
        len, callbackArray;
    var args = Array.prototype.slice.call(arguments, 0);
    var eventName = args.shift();

    if ('string' === typeof eventName && this.callbacks &&
        this.callbacks[eventName]) {

        callbackArray = this.callbacks[eventName];
        len = callbackArray.length;

        for (; i < len; i++) {
            callbackArray[i].apply(this, args);
        }
    }

    return this;
};

Event.off = function() {
    var eventName = arguments[0];

    if (eventName && this.callbacks[eventName]) {
        this.callbacks[eventName] = undefined;
    }

    return this;
};