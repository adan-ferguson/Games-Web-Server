PuzzleDefinition.prototype.Puzzle00 = function() {

    this.height = 3;
    this.width = 3;
    this.maxMoves = 2;

    this.description = "Click the arrows to destroy all the diamonds";

    this.initialContents = [
        [1000, 1101, 1000],
        [1101, 1102, 1101],
        [1000, 1101, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle01 = function() {

    this.height = 3;
    this.width = 3;
    this.maxMoves = 2;

    this.description = "Diamonds can't be damaged by their own color";

    this.initialContents = [
        [1000, 1111, 1000],
        [1000, 1121, 1000],
        [1000, 1111, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle02 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 5;

    this.description = "Large blocks can't be broken. Hollow blocks can be.";

    this.initialContents = [
        [1102, 1200, 1000, 1200, 1101],
        [1102, 1200, 1000, 1200, 1101],
        [1211, 1200, 1201, 1000, 1121],
        [1101, 1200, 1101, 1200, 1101],
        [1101, 1200, 1221, 1200, 1101]
    ];
};