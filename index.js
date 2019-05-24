//adds reverse fun to String
String.prototype.reverse = function() {
    return Array.from(this).reverse().join(''); 
    //above better, works with emojis
    //return string.split('').reverse().join('');
};

String.prototype.blank = function() {
    // why didnt, this === ''; work? 
    if (this.match(/\S+/)) {
        return false;
    }
    else {
        return true;
    }
};

Array.prototype.last = function() {
    return this.slice(-1);
};

function Phrase(content) {
    this.content = content;
    this.test;
    this.const = 'constant';
    
    //first name matters not the one after funtion
    this.quiet = function quiet() {
        return this.content.toLowerCase();
    };
    
    //
    this.palindrome = function palindrome( sens = true) {
    if (sens) {
        return this.quiet() === this.quiet().reverse();
    }
    else {
    return content === this.content.reverse();
    }
};

    //works without this
    this.louder = function louder() {
        return this.content.toUpperCase();
    };
}

//doesnt work with case sensitive
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.copy = content;
    this.mode = true;

//test if need to repeat name in funtion
//NOPE
    this.changeMode = function changeMode() {
        if (this.mode) {
        this.content = this.translation;
        this.translation = this.copy;
        this.mode = false;
        }
        else {
            this.translation = this.content;
            this.content = this.copy;
            this.mode = true;
        }
    };
    //this.quiet = function quiet() {
    //    return this.translation.toLowerCase();
    //};
}

TranslatedPhrase.prototype = new Phrase();

console.log((new Phrase('Bab bab')).palindrome(false));

function emailMaker(username, domain = "example") {
    return `${username.toLowerCase()}@${domain.toLowerCase()}.com`;
}
function emailParts(email) {
    //email.split(/\w+/);
    if (!email.includes('@')||!email.includes('.com')) {
        console.log('please enter a valid email');
    }
    let username = email.slice(0,email.indexOf('@')).toLocaleLowerCase();
    let domain = email.slice(email.indexOf('@')+1,email.indexOf('.com')).toLocaleLowerCase();
    return [username, domain];
}