var publiscriber = (function() {
    var subcriptions = [];

    function on (eventName, callback) {
        off (eventName);
        subcriptions.push({
            eventName: eventName,
            callback: callback
        });
    }

    function emit (eventName, data) {
        subcriptions.forEach(function(subcription) {
            if (subcription.eventName === eventName) {
                subcription.callback(data);
            }
        });
    }

    function off (eventName, callback) {
        subcriptions.forEach(function(subcription, index) {
            if (subcription.eventName === eventName) {
                subcriptions.splice(index, 1);
            }
        });

        if (callback) {
            callback();
        }
    }

    return {
        on: on,
        emit: emit,
        off: off
    }
})();
