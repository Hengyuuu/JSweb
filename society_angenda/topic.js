let topic = [
    "停課-尚未開學",
    "停課-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];


let startDate = new Date();
function setMonthAndDay(setMonthAndDay,startDate){
    startDate.setMonth(setMonthAndDay-1,startDate);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}

setMonthAndDay(4,1);