export declare class LevelCalculator {
    constructor();

    /**
         * Calculates The Total score needed for a certain level
         * @param {number} level Level to target
         * @param {number} currentScore Total score of the user.
         * @returns {number}  If `currentScore` is 0 then will return total score needed, else just the amount needed for that level
         */
    public ScoreLevelCalculator(level: number, currentScore: number = 0): number;

    private bcpow(base: number, exp: number, scale: number);
}

module.exports = typeof LevelCalculator;
