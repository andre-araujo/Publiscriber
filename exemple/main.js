(function() {
    var publishBtn = document.getElementById('publish'),
        counter = document.getElementById('counter'),
        subscribe = document.getElementById('subscribe'),
        unsubscribe = document.getElementById('unsubscribe'),
        total = 0;

    publishBtn.addEventListener('click', function() {
        total ++;
        publiscriber.emit('addToCounter', total);
    });

    subscribe.addEventListener('click', function() {
        doSubscription();
    });

    unsubscribe.addEventListener('click', function() {
        publiscriber.off('addToCounter', function() {
            total = 0;
            console.log('cleaning ...');
        });
    });

    function doSubscription() {
        total = 0;

        publiscriber.on('addToCounter', function(data) {
            counter.innerHTML = data;
        });
    }

    doSubscription();
})();
