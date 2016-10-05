var days = new Date();
var wDay = days.getDay();
var hourDays = days.getHours();
var minuteDays = days.getMinutes();
var weekday = new Array(7);

document.addEventListener('DOMContentLoaded', function() {
var thingDoc = document.getElementById('docThing');
var thingPres = document.getElementById('presThing');
var thingSheet = document.getElementById('sheetThing');
var lunchThing = document.getElementById('lunch');


  thingDoc.addEventListener('click', function() {
    chrome.tabs.create({'url': "https://docs.google.com/document/create"});
  });
  thingPres.addEventListener('click', function() {
    chrome.tabs.create({'url': "https://docs.google.com/presentation/create"});
  });
  thingSheet.addEventListener('click', function() {
    chrome.tabs.create({'url': "https://docs.google.com/spreadsheets/create"});
  });
  lunchThing.addEventListener('click', function() {
  chrome.tabs.create({'url': "http://www.sagedining.com/menus/beavercountryday/"});
  });

//Stuff with the Date and Time
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
document.getElementById('weekDays').innerHTML = weekday[days.getDay()];
document.getElementById('hourThing').innerHTML = hourDays;
document.getElementById('minuteThing').innerHTML = minuteDays;


//hi z
//closing things for everything. EVERYTHING
});
