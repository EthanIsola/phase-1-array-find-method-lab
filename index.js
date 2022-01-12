// code your solution here
function superbowlWin(record){
    const winYear = record.find(function win(record){
        return record.result === "W";
    });
    if(winYear != undefined){
        return winYear.year;
    }
    else{
        return undefined;
    }
}
