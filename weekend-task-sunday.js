"use strict"
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
const body = document.body;
const table = document.createElement("table");
body.append(table);
const tableHeaderArray = [ "Started At", "Finished At", "Total Time Spent", "Task Given", "Task Finished", "Task Finished %", "Topic"];
const tableBodyArray = [ "startedAt", "finishedAt", "totalTime", "tasksGiven", "tasksFinished", "tasksFinishedPercent", "topic"];

createTableHeader(tableHeaderArray);


for(let object of objArray){
    creatTableRows(object, tableBodyArray);
}

// all the function are below this line
function createTableHeader(headersArray){
    const tr = document.createElement("tr");
    for(let header of headersArray){
        const th = document.createElement("th");
        th.innerText = header;
        tr.append(th);
    }
    table.append(tr);
}

function creatTableRows(object, BodyArray){
    const tr = document.createElement("tr");
    for(let header of BodyArray){
        const td = document.createElement("td");
        if(header === "startedAt" || header === "finishedAt"){
            td.innerText = convertDate(object[header]);
        }
        else{
            td.innerText = object[header];
        }

    // attaching classes    
        if(header === "totalTime"){
            td.className = `${changeBackgroundColorTotalTime(object.totalTime)}`;
        }
        else if(header === "tasksFinishedPercent"){
            td.className = `${changeBackgroundColorTaskFinishedPrecent(object.tasksFinishedPercent)}`;
        }
        else{
            td.className = `${header}`;
        }
         tr.append(td);
    }
    table.append(tr);
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
        return "totalTimeRed";
    }
    else  if(time > 5){
        return "totalTimeOrange";
    }
    else {
        return "totalTimeGreen";
    }
}
function changeBackgroundColorTaskFinishedPrecent(precent){
    if(precent >= 80){
        return "highPrecent";
    }
    else  if(precent > 60){
        return "mediumPrecent";
    }
    else {
        return "lowPrecent";
    }
}
