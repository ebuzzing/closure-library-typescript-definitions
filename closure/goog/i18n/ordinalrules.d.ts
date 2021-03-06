declare module goog.i18n.ordinalRules {

    /**
     * Ordinal pattern keyword
     * @enum {string}
     */
    interface Keyword {
        ZERO: string;
        ONE: string;
        TWO: string;
        FEW: string;
        MANY: string;
        OTHER: string;
    }

    /**
     * Selected Ordinal rules by locale.
     */
    var select: any;
}
