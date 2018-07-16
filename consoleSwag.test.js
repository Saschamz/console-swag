console = require('./consoleSwag.js');

if(!console.fontFamily) {
    throw new Error('Could not find console fontFamily');
}

if(!console.color) {
    throw new Error('Could not find color function');
}

if(!console.block) {
    throw new Error('Could not find block function');
}

if(!console.center) {
    throw new Error('Could not find center function');
}

if(!console.red) {
    throw new Error('Could not find console[COLOR] function');
}

if(!console.emojis) {
    throw new Error('Could not find emoji function');
}

if(!console.css) {
    throw new Error('Could not find css function');
}

if(!console.bright || !console.blink || !console.underscore || !console.hidden) {
    throw new Error('Could not find one of the CMD functions');
}