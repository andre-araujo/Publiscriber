var publiscriber = (function() {

    return {
        on: on,
        emit: emit,
        off: off,
        subcriptions: []
    };

    function on (eventName, callback) {
        off.call (this, eventName);
        this.subcriptions.push({
            eventName: eventName,
            callback: callback
        });
    }

    function emit (eventName, data) {
        this.subcriptions.forEach(function(subcription) {
            if (subcription.eventName === eventName) {
                subcription.callback(data);
            }
        });
    }

    function off (eventName, callback) {
        var that = this;

        this.subcriptions.forEach(function(subcription, index) {
            if (subcription.eventName === eventName) {
                that.subcriptions.splice(index, 1);
            }
        });

        if (callback) {
            callback();
        }
    }

})();
