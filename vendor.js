'use strict';

const {events} = require('./events');

var store = process.env.STORE || 'Puma';

events.on('order', newOrder)
events.on('delivered', () => console.log('Vendor: Thank you!'))

function newOrder() {
    let order = {
        storeName: store,
        orderId: 1,
        customerName: 'Joe Ward',
        address: 'New Finland',
    };
    events.emit('pickup', order)
    console.log({

        Event: 'Order',
        Driver: `New Order Id: ${order.orderId}`,
        Time: new Date().toTimeString()})
}

module.exports = newOrder;
