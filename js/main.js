var model = {
    socket: io(),
    items: [],
    newItem: '',
    errors: {},
    addItem: function(event, view) {
        var newItem = view.newItem ? view.newItem.trim() : '';
        if (view.isOnlyText(newItem)) {
            view.socket.emit('todoAdded', newItem);
            view.newItem = null;
            view.errors.newItem = false;
        } else {
            view.errors.newItem = true;

        }
    },
    removeItem: function(event, view) {
        view.socket.emit('todoRemoved', view.index);
    },
    isOnlyText: function(text) {
        return text && RegExp(/^[a-zA-Z]*(\s)*[a-zA-Z]*$/).test(text)
    },
    initSocketInteraction: function(event, view) {

        view.socket.on('todoAdded', function(newItem) {
            view.items.push(newItem);
        });

        view.socket.on('todoRemoved', function(index) {
            view.items.splice(index, 1);
        });

    }

}


rivets.bind(document.querySelector('#view'), model);
