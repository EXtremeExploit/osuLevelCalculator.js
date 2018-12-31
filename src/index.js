class LevelCalculator {
    constructor() { }

    /**
         * Calculates The Total score needed for a certain level
         * @param {number} level Level to target
         * @param {number} currentScore Total score of the user.
         * @returns {number}  If `currentScore` is 0 then will return total score needed, else just the amount needed for that level
         */
    ScoreLevelCalculator(level, currentScore = 0) {
        var result;
        if (level <= 100) {
            if (level >= 2) {
                result = 5000 / 3 * (4 * this.bcpow(level, 3, 0) - 3 * this.bcpow(level, 2, 0) - level) + 1.25 * this.bcpow(1.8, level - 60, 0);
            }
            else if (level == 0 || level == 1) {
                result = 0;
            }
            else if (level < 0) {
                new Error("Level Should be a number between 0 and Infinity")
            }
        }
        else if (level >= 101) {
            result = 26931190829 + 100000000000 * (level - 100);
        }
        else {
            new Error("Level Should be a number between 0 and Infinity")
        }
        return Math.floor(result - currentScore);
    }

    /**
     * 
     * @param {number} base 
     * @param {number} exp 
     * @param {number} scale 
     */
    bcpow(base, exp, scale) {
        var powered = Math.pow(base, exp);
        return powered % 1 === 0 ? powered : powered.toFixed(scale);
    }
}
exports.LevelCalculator = LevelCalculator;
