describe("publiscriber:", function() {
    var callback;

    beforeEach(function() {
        callback = jasmine.createSpy();
    });

    afterEach(function() {
        publiscriber.subcriptions = [];
    });

    it("should be a function", function() {
        expect(publiscriber).toEqual(jasmine.any(Object))
    });

    describe("on:", function() {
        it("should be a function", function() {
            expect(publiscriber.on).toEqual(jasmine.any(Function))
        });

        it("should subscribe to events", function() {
            publiscriber.on('test', callback);

            expect(publiscriber.subcriptions)
                .toEqual([
                    {
                        eventName: 'test',
                        callback: callback
                    }
                ]);
        });
    });

    describe("emit:", function() {
        it("should be a function", function() {
            expect(publiscriber.emit).toEqual(jasmine.any(Function))
        });

        it("should trigger subscribed events", function() {
            publiscriber.on('test', callback);
            publiscriber.emit('test', 'test');

            expect(callback)
                .toHaveBeenCalledWith('test');
        });

        it("shouldn't trigger any events if there aren't subscribed events", function() {
            publiscriber.on('tests', callback);
            publiscriber.emit('test', 'test');

            expect(callback)
                .not.toHaveBeenCalled();
        });
    });

    describe("off:", function() {
        it("should be a function", function() {
            expect(publiscriber.off).toEqual(jasmine.any(Function))
        });

        it("should unsubscribe events", function() {
            publiscriber.on('test', callback);
            publiscriber.off('test');

            expect(publiscriber.subcriptions)
                .toEqual([]);
        });

        it("should trigger a event callback", function() {
            publiscriber.on('test', callback);
            publiscriber.off('test', callback);

            expect(callback)
                .toHaveBeenCalled();
        });
    });

});
