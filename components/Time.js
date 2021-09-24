import moment from "moment";

export function secToTime(totalSeconds){
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = Math.floor(totalSeconds % 60);
    return  [hours,minutes,seconds] ;
}

export function addTime(beginDay,seconds){
    const begin = moment(beginDay,"hh:mm");
    return  (begin.add(seconds,'s').format("HH:mm "))
}
