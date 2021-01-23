let objArray = [{topic: "HTML" ,startedAt: new Date("2021-01-21:13:00"),finishedAt: new Date("2021-01-21:18:30"),tasksGiven: 16, tasksFinished: 12},
{topic: "CSS" ,startedAt:new Date("2021-01-20:03:00"),finishedAt: new Date("2021-01-20:12:30"), tasksGiven: 14, tasksFinished: 11},
{topic: "GitHub" ,startedAt: new Date("2021-01-20:16:00"),finishedAt: new Date("2021-01-20:20:00"),tasksGiven: 12, tasksFinished: 7},
{topic: "JavaScript" ,startedAt: new Date("2021-01-19:07:00"),finishedAt: new Date("2021-01-19:17:00"),tasksGiven: 30, tasksFinished: 23},
{topic: "FCC" ,startedAt: new Date("2021-01-18:08:00"),finishedAt: new Date("2021-01-19:20:00"),tasksGiven: 100, tasksFinished: 100},
{topic: "Loops" ,startedAt: new Date("2021-01-19:20:00"),finishedAt: new Date("2021-01-19:23:30"),tasksGiven: 15, tasksFinished: 12},
{topic: "Arrays" ,startedAt: new Date("2021-01-17:06:00"),finishedAt: new Date("2021-01-17:08:00"),tasksGiven: 10, tasksFinished: 4},
{topic: "Cyber4s" ,startedAt: new Date("2021-01-16:01:00"),finishedAt: new Date("2021-01-16:23:00"),tasksGiven: 200, tasksFinished: 199},
{topic: "conditions" ,startedAt: new Date("2021-01-15:10:00"),finishedAt: new Date("2021-01-15:14:30"),tasksGiven: 25, tasksFinished: 19},
{topic: "Objects" ,startedAt: new Date("2021-01-15:16:00"),finishedAt: new Date("2021-01-15:18:30"),tasksGiven: 10, tasksFinished: 8}];

for (let object of objArray){
    object.tasksFinishedPercent = Math.floor(object.tasksFinished / object.tasksGiven *100);
    object.totalTime = timeCalculate(object.startedAt, object.finishedAt);
}
document.write(`<table class ="table"> 
    <tr class = "tableRowHeader">
        <th class ="tableCollomHeader">started At</th> 
        <th class ="tableCollomHeader">finished At</th> 
        <th class ="tableCollomHeader">Total Time Spent</th> 
        <th class ="tableCollomHeader">Tasks Given</th> 
        <th class ="tableCollomHeader">Tasks Finished</th> 
        <th class ="tableCollomHeader">Tasks Finished %</th> 
        <th class ="tableCollomHeader">Topic</th>
    </tr>
 </table>`);

for(let object of objArray){
    creatTableRows(object);
}
function creatTableRows(obj){
   let totalTimeColor = changeBackgroundColorTotalTime(obj.totalTime);
   let PercentColor = changeBackgroundColorTaskFinishedPrecent(obj.tasksFinishedPercent)
    document.write(`<table class ="table"> 
        <tr class = "tableRow">
            <td class ="tableCollom">${convertDate(obj.startedAt)}</td>
            <td class ="tableCollom">${convertDate(obj.finishedAt)}</td> 
            <td class ="tableCollom" style=${totalTimeColor}>${obj.totalTime}</td> 
            <td class ="tableCollom">${obj.tasksGiven}</td> 
            <td class ="tableCollom">${obj.tasksFinished}</td> 
            <td class ="tableCollom" style=${PercentColor}>${obj.tasksFinishedPercent}% </td> 
            <td class ="tableCollom">${obj.topic}</td>   
        </tr>
    </table>`);
}

function timeCalculate(startDate, finishedDate){
    let startTime = startDate.getHours() + (startDate.getMinutes()/60);
    let finishedTime = finishedDate.getHours() + (finishedDate.getMinutes()/60);
    return finishedTime - startTime;
}
function convertDate(date){
    return date.toString().substr(16,5);
}
function changeBackgroundColorTotalTime(time){
    if(time > 10){
        return "background-color:#ec0c0c";
    }
    else  if(time > 5){
        return "background-color:#ec9e0c";
    }
    else {
        return "background-color:#0cec2d";
    }
}
function changeBackgroundColorTaskFinishedPrecent(time){
    if(time >= 80){
        return "background-color:#77056d";
    }
    else  if(time > 60){
        return "background-color:#ec0ce7";
    }
    else {
        return "background-color:#e98fe7";
    }
}
