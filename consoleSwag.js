
var log = {fontFamily: 'Consolas, Lucida Console, sans-serif'};

var availableColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate",
    "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
    "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturqoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey",
    "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "hondeydew", "hotpink", "indianred",
    "indigo", "ivory", "khaki", "lavendar", "lavendarblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturqoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell",
    "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke",
    "yellow", "green" 
];

// Standard log color function
function logColor (message, color = "white", background = "transparent", size) {
    console.log(`%c${message}`, `color: ${color};background: ${background};font-size: ${size};font-family: ${log.fontFamily}`);
};

// Function to handle font-size
function logSize(size) {
    switch(size){
        case "mini":
            return "1px";
            break;

        case "tiny":
            return "6px";
            break;

        case "small":
            return "10px";
            break;

        case "medium":
            return "12px";
            break;

        case "big":
            return "24px";
            break;

        case "huge":
            return "36px";
            break;

        case "gigantic":
            return "44px";
            break;

        default:
            return size;
            break;
    }
};

// Sets font family
log.setFont = (fontFamily) => {
    log.fontFamily = fontFamily;
};

// Css log using custom values inside array
log.css = (message, css = []) => {
    css = css.join(';');
    console.log(`%c${message}`, `${css}; font-family: ${log.fontFamily}`);
};

// Color log
log.color = (message, color = "white", background = "none", size = "medium") => {
    size = logSize(size);
    logColor(message, color, background, size);
};

// Block log
log.block = (message, color = "white", background ="black", size = "big") => {
    size = logSize(size);
    console.log(`%c${message}`, `color: ${color};background: ${background};font-size: ${size};width: 100%;text-align: center;display: block;font-family: ${log.fontFamily}`);
};

// Row log
log.row = (message, color = "white", background ="black", size = "medium") => {
    size = logSize(size);
    console.log(`%c${message}`, `color: ${color};background: ${background};font-size: ${size};width: 100%;display: block;font-family: ${log.fontFamily}`);
};

// Center Text
log.center = (message, color = "white", size = "medium") => {
    size = logSize(size);
    console.log(`%c${message}`, `color: ${color};font-size: ${size};width: 100%;text-align: center;display: block;font-family: ${log.fontFamily}`);
};

// Creates color specific functions
availableColors.forEach(color => {
    log[color] = (message, background = "none", size = "medium") => {
        logColor(message, color, background, logSize(size));
    };
    log.row[color] = (message, fontColor = "white", color, size = "medium") => {
        log.row(message, fontColor, color, logSize(size));
    };
});


// Available colors
log.available = () => {
    availableColors.forEach(color => log[color](color));
};

// Emojis
log.shrug = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('¯\\_(ツ)_/¯', [`font-size: ${fontSize}`, `color: ${color}`]);
};

log.face = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('( ͡° ͜ʖ ͡°)', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.bear = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('ʕ•ᴥ•ʔ', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.cry = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('(;´༎ຶД༎ຶ`)', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.tableflip = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('(╯°□°）╯︵ ┻━┻', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.tableput = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('┬──┬ ノ( ゜-゜ノ)', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.people = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.fight = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('(ง ͠° ͟ل͜ ͡°)ง', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.stare = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('◉_◉', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.point = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('☝', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.zoidberg = (color = 'white', fontSize = '20px') => {
    fontSize = logSize(fontSize);
    log.css('(/) (°,,,°) (/)', [`font-size: ${fontSize}`, `color: ${color}`]);
}

log.emojis = () => {
    log.center('↓shrug');
    log.shrug();
    log.center('↓face');
    log.face();
    log.center('↓bear');
    log.bear();
    log.center('↓cry');
    log.cry();
    log.center('↓tableflip');
    log.tableflip();
    log.center('↓tableput');
    log.tableput();
    log.center('↓people');
    log.people();
    log.center('↓fight');
    log.fight();
    log.center('↓stare');
    log.stare();
    log.center('↓point');
    log.point();
    log.center('↓zoidberg');
    log.zoidberg();
};

// CMD functions
var resetCode = '\x1b[0m';
var availableCMDColors = [
    {
        name: 'bright',
        text: '\x1b[1m'
    },
    {
        name: 'underscore',
        text: '\x1b[4m'
    },
    {
        name: 'blink',
        text: '\x1b[5m'
    },
    {
        name: 'hidden',
        text: '\x1b[8m'
    },
    {
        name: 'fgBlack',
        text: '\x1b[30m'
    }, 
    {
        name: 'fgRed',
        text: '\x1b[31m'
    },
    {
        name: 'fgGreen',
        text: '\x1b[32m'
    },
    {
        name: 'fgYellow',
        text: '\x1b[33m'
    },
    {
        name: 'fgBlue',
        text: '\x1b[34m'
    },
    {
        name: 'fgMagenta',
        text: '\x1b[35m'
    },
    {
        name: 'fgCyan',
        text: '\x1b[36m'
    },
    {
        name: 'fgWhite',
        text: '\x1b[37m'
    },
    {
        name: 'bgBlack',
        text: '\x1b[40m'
    },
    {
        name: 'bgRed',
        text: '\x1b[41m'
    },
    {
        name: 'bgGreen',
        text: '\x1b[42m'
    },
    {
        name: 'bgYellow',
        text: '\x1b[43m'
    },
    {
        name: 'bgBlue',
        text: '\x1b[44m'
    },
    {
        name: 'bgMagenta',
        text: '\x1b[45m'
    },
    {
        name: 'bgCyan',
        text: '\x1b[46m'
    },
    {
        name: 'bgWhite',
        text: '\x1b[75m'
    },
];

availableCMDColors.forEach((obj, i) => {
    log[obj.name] = (message) => {
        console.log(obj.text, message, resetCode);
    }
});

Object.assign(console, log);