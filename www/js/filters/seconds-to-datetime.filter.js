app.filter("secondsToDateTime", function () {
     return function(seconds) {
        if (!seconds)
            return "";
         
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
});