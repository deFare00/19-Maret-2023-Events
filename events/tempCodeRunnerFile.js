const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday: ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('message', birthdayEventListener);
myEmitter.emit('message', {name: 'Defa'});