'use strict';

const events = require('./events');

var store = process.env.STORE || 'Puma';

events.on('order', newOrder)
events.on('delivered')

function newOrder() {
    let order = {
        storeName: store,
        orderId: 1,
        customerName: 'Joe Ward',
        address: 'New Finland',
    };
    events.emit('pickup', order)
    console.log('Time: ', new Date().toTimeSctring())
}

module.exports = newOrder;
