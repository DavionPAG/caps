'use strict';

const events = require('./events')

require('./driver.js')
require('./vendor.js')

setInterval(() => {
    events.emit('order');
}, 5000)