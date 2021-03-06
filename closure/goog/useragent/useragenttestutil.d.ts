declare module goog.userAgentTestUtil {

    /**
     * Browser definitions.
     * @enum {string}
     */
    interface UserAgents {
        GECKO: string;
        IE: string;
        OPERA: string;
        WEBKIT: string;
    }

    /**
     * Rerun the initialization code to set all of the goog.userAgent constants.
     * @suppress {accessControls}
     */
    function reinitializeUserAgent(): void;

    /**
     * Return whether a given user agent has been detected.
     * @param {string} agent Value in UserAgents.
     * @return {boolean} Whether the user agent has been detected.
     */
    function getUserAgentDetected(agent: string): boolean;
}
