// array variable for tasks and time
var tasks = [
    {
        id: 8,
        txtHour: "8AM",
        hour: 08,
        txtTask: ""
    },
    {
        id: 9,
        txtHour: "9AM",
        hour: 09,
        txtTask: ""
    },
    {
        id: 10,
        txtHour: "10AM",
        hour: 10,
        txtTask: ""
    },
    {
        id: 11,
        txtHour: "11AM",
        hour: 11,
        txtTask: ""
    },
    {
        id: 12,
        txtHour: "12PM",
        hour: 12,
        txtTask: ""
    },
    {
        id: 1,
        txtHour: "1PM",
        hour: 13,
        txtTask: ""
    },
    {
        id: 2,
        txtHour: "2PM",
        hour: 14,
        txtTask: ""
    },
    {
        id: 3,
        txtHour: "3PM",
        hour: 15,
        txtTask: ""
    },
    {
        id: 4,
        txtHour: "4PM",
        hour: 16,
        txtTask: ""
    },
    {
        id: 5,
        txtHour: "5PM",
        hour: 17,
        txtTask: ""
    },

]
// save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// display tasks from local storage
function displayTasks() {
    tasks.forEach(function(currentHour) {
        $("#" + currentHour.id). val(currentHour.txtTask)
    })
}

// current date
var now = moment().format("MMMM Do YYYY");


// set current date to "#currentDay"
$("#currentDay").text(now);

tasks.forEach(function(dayHour) {

   // parent row <div>
  var timeRow =  $("<div>").attr({"class": "row no-gutters time-block"});

  // first column - time 
  var timeCol = $("<div>").text(dayHour.txtHour).attr({"class": "col-2 hour"});

  // second column text area for tasks
  var taskCol = $("<div>").attr({"class": "col-8 hour"});

  // third column - save button
  var saveCol = $("<div>").attr({"class": "col-2 hour"}).append($("<button>").attr({"class": "saveBtn h-100 w-100"}).append($("<i>").attr({"class": "oi oi-bookmark"})));

  // check if time in array less than cirrent - set the class to past and set the ID of the textarea to match object array ID

  if (dayHour.hour < moment().format("HH")) {
      taskCol.append($("<textarea>").attr({"class": "past h-100 w-100", "id": dayHour.id}));
}
// check if time in array is same as current - set the class to past and id to match object array ID
   else if (dayHour.hour == moment().format("HH")) {
       taskCol.append($("<textarea>").attr({"class": "present h-100 w-100","id":dayHour.id}));
   }
   // check if time in array is after current, set class to future and set id to in text to match array id
   else if (dayHour.hour > moment().format("HH")) {
      taskCol.append($("<textarea>").attr( {"class": "future h-100 w-100", "id": dayHour.id}));    
   }

   // append timeRow column to the parent
   $(".container").append(timeRow);
   

})