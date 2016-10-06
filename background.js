//creates an alarm that goes off every .25 minutes for .5 minutes. Total of .75 minutes between alarm fires
// chrome.alarms.create("Alarmssssss", {
//     delayInMinutes: 0.25,
//     periodInMinutes: 0.5
// });

// on alarm fire calls the function time thing
//chrome.alarms.onAlarm.addListener(timeThing);


//function time thing contains all of the time based events. Notification popping up and such. Classes and what not.
function timeThing() {

        //this is to call the infor from the storage function. This was annoying to get working but this is how to make that work.
    chrome.storage.sync.get({
        'firstClass': 'wdawddaw',
        'secondClass': 'Mathqw',
        'thirdClass': 'freeee',
        'fourthClass': 'trhththth'
    }, function(items) {
        var classA = items.firstClass;
        var classB = items.secondClass;
        var classC = items.thirdClass;
        var classD = items.fourthClass;
        console.log("alarm");
        var days = new Date();
        var wDay = days.getDay();
        var hourDays = days.getHours();
        var minuteDays = days.getMinutes();
        console.log(wDay);

        //document.addEventListener('DOMContentLoaded', function() {


            //Add all of the if statements here. Notifications as well as the next class push on the popup.html. Still need to add that
            //More grunt coding in the near future.

            //repeat this section to add more repeats

            //Lunch notification.
            if (hourDays == 12 && minuteDays == 5) {
                if (Notification.permission === "granted") {
                    var notification = new Notification('Lunch', {
                        icon: "icon128tr.png",
                        body: "Click on me to see what is for lunch today",
                    });
                    notification.onclick = function() {
                        window.open("http://www.sagedining.com/menus/beavercountryday/");
                        setTimeout(notification.close.bind(notification), 200);
                    };
                }
            }

            //Monday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (wDay == 1) {
                //Block one - A
                if (hourDays == 9 && minuteDays == 0) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classA, {
                            icon: "icon128tr.png",
                            body: "Is your first class",
                        });
                    }
                }

                //next block 2 update -B
                if (hourDays == 9 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classB;
                }


                //Block two - B
                if (hourDays == 10 && minuteDays == 35) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classB, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block three - C
                if (hourDays == 13 && minuteDays == 5) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classC, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }



                //Block four - D
                if (hourDays == 14 && minuteDays == 10) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classD, {
                            icon: "icon128tr.png",
                            body: "Is your X-Block class",
                        });
                    }
                }


                //next block 2 update -B
                if (hourDays == 9 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classB;
                }

                //next block 3 update -C
                if (hourDays == 11 && minuteDays == 0) {
                    document.getElementById('nextClass').innerHTML = classC;
                }

                //next block 4 update -D
                if (hourDays == 13 && minuteDays == 35) {
                    document.getElementById('nextClass').innerHTML = classD;
                }

            }
            //Tuesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (wDay == 2) {
                //Block one - C
                if (hourDays == 8 && minuteDays == 0) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classC, {
                            icon: "icon128tr.png",
                            body: "Is your first class",
                        });
                    }
                }

                //Block two - D
                if (hourDays == 10 && minuteDays == 35) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classD, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block three - A
                if (hourDays == 13 && minuteDays == 5) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classA, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block four - B
                if (hourDays == 14 && minuteDays == 10) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classB, {
                            icon: "icon128tr.png",
                            body: "Is your X-Block class",
                        });
                    }
                }


                //next block 2 update -D
                if (hourDays == 8 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classD;
                }

                //next block 3 update -A
                if (hourDays == 11 && minuteDays == 0) {
                    document.getElementById('nextClass').innerHTML = classA;
                }

                //next block 4 update -B
                if (hourDays == 13 && minuteDays == 35) {
                    document.getElementById('nextClass').innerHTML = classB;
                }




            }
            //Wednesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (wDay === 3) {
                console.log("today is Wednesday");
                //Block one - B
                if (hourDays == 8 && minuteDays == 0) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classB, {
                            icon: "icon128tr.png",
                            body: "Is your first class",
                        });
                    }
                }

                //Block two - D
                if (hourDays == 10 && minuteDays == 35) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classD, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block three - A
                if (hourDays == 13 && minuteDays == 5) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classA, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block four - C
                if (hourDays == 14 && minuteDays == 10) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classC, {
                            icon: "icon128tr.png",
                            body: "Is your X-Block class",
                        });
                    }
                }



                //next block 2 update -D
                if (hourDays == 8 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classD;
                }

                //next block 3 update -A
                if (hourDays == 11 && minuteDays == 0) {
                    document.getElementById('nextClass').innerHTML = classA;
                }

                //next block 4 update -C
                if (hourDays == 20 && minuteDays == 12) {
                    console.log("Its C on Wendesayswdwd");
                    document.getElementById('nextClass').innerHTML = classC;
                }



            }
            //Thursday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (wDay == 1) {
                //Block one - D
                if (hourDays == 8 && minuteDays == 0) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classD, {
                            icon: "icon128tr.png",
                            body: "Is your first class",
                        });
                    }
                }

                //Block two - C
                if (hourDays == 10 && minuteDays == 35) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classC, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block three - B
                if (hourDays == 13 && minuteDays == 5) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classB, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block four - A
                if (hourDays == 14 && minuteDays == 10) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classA, {
                            icon: "icon128tr.png",
                            body: "Is your X-Block class",
                        });
                    }
                }



                //next block 2 update -C
                if (hourDays == 8 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classC;
                }

                //next block 3 update -B
                if (hourDays == 11 && minuteDays == 0) {
                    document.getElementById('nextClass').innerHTML = classB;
                }

                //next block 4 update -A
                if (hourDays == 13 && minuteDays == 35) {
                    document.getElementById('nextClass').innerHTML = classA;
                }

            }
            //Friday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (wDay == 5) {
                //Block one - A
                if (hourDays == 8 && minuteDays == 0) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classA, {
                            icon: "icon128tr.png",
                            body: "Is your first class",
                        });
                    }
                }
                //Block two update -C



                //Block two - C
                if (hourDays == 10 && minuteDays == 35) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classC, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block three - B
                if (hourDays == 13 && minuteDays == 5) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classB, {
                            icon: "icon128tr.png",
                            body: "Is your next class",
                        });
                    }
                }

                //Block four - D
                if (hourDays == 14 && minuteDays == 10) {
                    if (Notification.permission === "granted") {
                        var notification = new Notification(classD, {
                            icon: "icon128tr.png",
                            body: "Is your X-Block class",
                        });
                    }
                }



                //next block 2 update -C
                if (hourDays == 8 && minuteDays == 30) {
                    document.getElementById('nextClass').innerHTML = classC;
                }

                //next block 3 update -B
                if (hourDays == 11 && minuteDays == 0) {
                    document.getElementById('nextClass').innerHTML = classB;
                }

                //next block 4 update -D
                if (hourDays == 13 && minuteDays == 35) {
                    document.getElementById('nextClass').innerHTML = classD;
                }

            }

      //  }); //closing for the load document
    }); //Closing for the get storage sync

} //Close for the function timeThing
