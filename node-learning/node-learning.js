
var stringi = '';

for(var i=0; i<5; i++) {
    stringi = stringi + i;
    if (i < 2) {
        console.log('Hello World! ' + i);
    } else {
        console.log('bonjour! ' + i);
    }
    /*if (stringi === '01234') {
        console.log(stringi);
    }*/
    /*if (i === 4) {
        console.log(stringi);
    }*/
}

console.log(stringi);
