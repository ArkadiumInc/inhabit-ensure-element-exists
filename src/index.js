export default class ElementChecker {
    /**
     *
     * @param $ - jQuery
     * @param maxTime - max time ms
     * @param frequency - frequency ms
     */
    constructor($,maxTime,frequency){
        this.$ = $;
        this.maxTime = maxTime || 5000;
        this.frequency = frequency || 100;
        this.attemptsAmount = Math.floor(this.maxTime/this.frequency);
    }

    /**
     *
     * @param query
     * @returns {*}
     */
    checkElement(query){
        let main = this;
        let attempts = 0;
        let deffered = this.$.Deferred();
        repeat();
        return deffered;
        function repeat()
        {
            if (main.attemptsAmount > 0 && attempts++ >= main.attemptsAmount){
                deffered.reject();
            } else {
                setTimeout(function () {
                    if (main.$(query).length > 0){
                        deffered.resolve()
                    }
                    else if(deffered.state !== "pending") {
                        repeat();
                    }
                },main.frequency);
            }
        }
    }
}