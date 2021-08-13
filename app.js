class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true
        }
    }

    getAverageRating() {
        const result = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
        return result / this.ratings.length;
    }

    addRating(rating) {
        this.ratings.push(rating)
    }

}

class Book extends Media {
    constructor(author, title, pages) {
        super(title)
        this._author = author;
        this._pages = 1;

    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {

    constructor(director, title, runtime) {
        super(title)

        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }
    get runtime() {
        return this._runtime;
    }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

const speed = new Movie('Jan de Bont', 'Speed', 116)

historyOfEverything.toggleCheckOutStatus()
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

// console.log(historyOfEverything.getAverageRating())
// console.log(historyOfEverything)

speed.toggleCheckOutStatus()
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed)
console.log(speed.getAverageRating())