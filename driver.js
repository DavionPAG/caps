'use strict';

const events = require('./events');

events.on('pickup', pickUpOrder);
events.on('in-transit', transitLog);


function pickUpOrder(order) {
    setTimeout(() => {
        let log = `Driver: Picked up ${order}`;
        console.log('Time: ', new Date)
        console.log(log)
        console.log(order)
        events.emit('in-transit', order)
    }, 1000)
}

function transitLog(order) {
    setTimeout(() => {
        console.log('Time: ', new Date)
        console.log('Delivered')
        events.emit('delivered', order)
    }, 3000)
}

module.exports = {pickUpOrder, transitLog};
