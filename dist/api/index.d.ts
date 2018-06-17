//#region Functions and main class
export declare class APIWrapper {
    private _baseUrl;
    constructor();

    private apiCall(url, options);
    /**
     * 
     * @param ltr Level To Reach
     * @link https://github.com/thehowl/OsuLevelCalculator/wiki/API-for-the-lazy
     */
    calculateLevelSIM(ltr: number): Promise<{ result: number }>;

    /**
     * 
     * @param curscore Current user total score
     * @param tlvl Level to reach
     * @link https://github.com/thehowl/OsuLevelCalculator/wiki/API-for-the-lazy
     */
    calculateLevelCOM(curscore: number, tlvl: number): Promise<{ result: number }>;
}
export declare function api(): APIWrapper;
//#endregion
