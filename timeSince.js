//timeSince open source function
//Slightly modified to account for singular minutes/seconds and "Just now" return val
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " m";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " h";
    }
    interval = Math.floor(seconds / 60);
    if (interval === 1) {
        return "about a minutes";
    }
    if (interval > 1) {
        return interval + " minutes";
    }
    if (seconds <= 5) {
        return "less than a minute";
    }    
    return  seconds + " seconds";
}