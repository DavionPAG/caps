'use strict';

const {events} = require('./events');

events.on('pickup', pickupOrder);
events.on('in-transit', transitLog);

function pickupOrder(order) {
    setTimeout(() => {
        
        events.emit('in-transit', order)
        console.log({
            Event: 'In-transit',
            Driver: `Picked up order: ${order.orderId}`,
            Time: new Date().toTimeString()})
    }, 1000)
}

function transitLog(order) {
    setTimeout(() => {
        console.log({
            Event: 'Delivered',
            Driver: `Delivered order: ${order.orderId}`,
            Time: new Date().toTimeString()
        })
    events.emit('delivered', order)
    }, 3000)
}

module.exports = {pickupOrder, transitLog};
