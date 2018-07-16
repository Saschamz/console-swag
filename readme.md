# console-swag

```javascript
console = require('console-swag'); // ES5 Syntax
import console from 'console-swag'; // ES6 Syntax

console.coral('Wow I can easily change things like text color inside the console!');
```

## Installation
Before downloading make sure you have [node installed]("https://nodejs.org/en/download/"). Then inside your terminal run:
```
$ npm install --save console-swag
```

***

## Features
- **Easily** add custom CSS to your `console.log()`.
- Available commands for **both** *browser* console and *cmd* console.
- Access a variety of **preset** functions packed with different styling.
- Finally got something to work? Celebrate by logging one of our built 
in text **emojis**!

***

## Usage

### Customizing your CSS
```javascript
console.css('TEXT', ['property1:value1', 'property2:value2']);
```

***

### Preset text colors
For preset text colors you can use any color that you could write in your css such as "beige", "red", "coral" and so on.
To get a complete list run `console.available();`.

#### Examples:
```javascript
console.red('hello'); // Outputs hello in red color
console.blue('hello'); // Outputs hello in blue color
console.indigo('hello'); // Outputs hello in indigo color
```

***

### Preset text styling
In addition to the preset text colors using `text[COLOR]`syntax there are three useful default styling functions.

#### Examples:
```javascript
console.color(); // Takes color value as second argument
console.block(); // Full width, centered text, black background
console.center(); // Full width, centered text, NO background
```

***

### Changing font-family

You can change the font-family used in the console by running `console.setFont('name of font-family');`. You can also check the current font being used by running `console.fontFamily;`.

***

### Arguments
Let's talk about what arguments we can send in to each function!
This is where the real customization begins.
`message` is always the first argument to provide a function with the rest of the arguments being **optional**.

#### Size argument (*string*)
For the size argument we can send in a valid css size such as **42px or 1.3rem**. Allowed string values that translate into default pixel values are: 
```
mini: 1px
tiny: 6px
small: 10px
medium: 12px
big: 24px
huge: 36px
gigantic: 44px
```

#### Color & Background argument (*string*)
For these two arguments we can send in any valid css color value such as **red, #d0d0d0, hsl(0,0%,100%), rgba(255,255,255,0.6)** etc.

#### Full list of arguments (exluding emojis)

```javascript
console.color(message, color, background, size);
console[COLOR](message, background, size);
console.block(message, color, background, size);
console.center(message, color, size);)
```

***

## Emojis
Yes, it's true. We have **emojis**. They each have their own function, for example `console.tableflip();`. You can output a full list of the available emojis by running:
```javascript
console.emojis(color, size);
```
Keep in mind that some browsers/fonts may display these very poorly, some characters may also be missing from the font and will then appear as a box.

***

## CMD
All of the above has been for manipulating the browser console. But what about inside a *CMD*? **Good news!** We got support for that also.
The functions above will not work, the ones for *CMD* look a little bit different. For text color, prefix the function name with `fg` and for background color `bg`. Available colors are: **Black, Red, Green, Yellow, Blue, Magenta, Cyan, White**. For example:
```javascript
console.fgRed('This text is red inside the CMD');
```
Additionally there are some cool effects that we can do using these functions:
```javascript
console.bright(); // Bold text
console.underscore(); // Text with underscore
console.blink(); // Blinking text
console.hidden(); // Hidden text
```

***

## Userscript
Want to use **console-swag** as a userscript?
Check out my [userscript repo]("https://github.com/Saschamz/userscripts").