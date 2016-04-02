
rivets.binders['on-enter'] = {
    bind: function(el) {
        var model = this.model;
        var action = this.keypath;

        $(el).on('keydown', function(event) {
            if (event.keyCode == 13) {
                model[action](event, model);
            }
        });
    },
    function: true
}

rivets.binders['on-load'] = {
    bind: function(el) {
        var model = this.model;
        var action = this.keypath;
        model[action](event, model);
    },
    function: true
}
