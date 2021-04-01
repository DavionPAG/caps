'use strict';

const { events } = require('../events.js')
require('../driver.js')
require('../vendor.js')

let order = {
    storeName: 'Puma',
    orderId: 1,
    customerName: 'Joe Ward',
    address: 'New Finland',
};


let logMock;

beforeEach(() => {
    logMock = jest.spyOn(console, 'log').mockImplementation();
})

afterEach(() => logMock.mockRestore())

describe('Console Log Mocks', () => {
    it('newOrder(): Should log an Obj with order details', () => {
        events.emit('order');
        setInterval(() => {
            expect(logMock).toHaveBeenCalledWith({
                Event: 'Order',
                Driver: `New Order Id: ${order.orderId}`,
                Time: new Date().toTimeString()
            })
            
        }, 5000);
    })
    it('pickupOrder(): Should log an Obj with order details', () => {

        events.emit('order');
        setTimeout(() => {
            expect(logMock).toHaveBeenCalledWith({
                Event: 'Intransit',
                Driver: `Picked up order: ${order.orderId}`,
                Time: new Date().toTimeString()
            })
            
        }, 5001);

    })
    it('transitLog(): Should log an Obj with order details', () => {

        events.emit('order')
        setTimeout(() => {
            expect(logMock).toHaveBeenCalledWith({
                Event: 'Delivered',
                Driver: `Delivered order: ${order.orderId}`,
                Time: new Date().toTimeString()
            })
            
        }, 5000);
    })
})