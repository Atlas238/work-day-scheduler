var currentTime = moment().format("HHmm");
var currentDay = $("#currentDay");
var nineAmRow = $("#0900");
var nineAmText = $("#9amText");
var tenAmRow = $("#1000");
var tenAmText = $("#10amText");
var elevenAmRow = $("#1100");
var elevenAmText = $("#11amText");
var twelvePmRow = $("#1200");
var twelvePmText = $("#12pmText");
var onePmRow = $("#1300");
var onePmText = $("#1pmText");
var twoPmRow = $("#1400");
var twoPmText = $("#2pmText");
var threePmRow = $("#1500");
var threePmText = $("#3pmText");
var fourPmRow = $("#1600");
var fourPmText = $("#4pmText");
var fivePmRow = $("#1700");
var fivePmText = $("#5pmText");

var rowArr = [
  nineAmRow,
  tenAmRow,
  elevenAmRow,
  twelvePmRow,
  onePmRow,
  twoPmRow,
  threePmRow,
  fourPmRow,
  fivePmRow,
];

var textArr = [
  nineAmText,
  tenAmText,
  elevenAmText,
  twelvePmText,
  onePmText,
  twoPmText,
  threePmText,
  fourPmText,
  fivePmText,
];

let keys = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]; 

var userSave = [];

// This displays the current day (Currently not showing up? Check during 9-5hours?)

console.log(moment().format("dddd [the] Do [of] MMMM YYYY"))

$(document).ready(function(){
    currentDay.textContent = moment().format("dddd [the] Do [of] MMMM  YYYY");
    for (let i = 0; i < keys.length; i++) {
        textArr[i].val(JSON.parse(localStorage.getItem(keys[i])));
    }
})

// Changes the color of table cells based on the time of day
function timeofdayCheck() {
    // 9am block coloring
  // Past...
  if (currentTime > 1000) {
      nineAmText.removeClass();
      nineAmRow.addClass("past");
      nineAmText.addClass("past");
    }

    // Present...
  if (currentTime > 900 && currentTime < 1000) {
      nineAmRow.removeClass();
      nineAmText.removeClass();
      nineAmRow.addClass("present");
      nineAmText.addClass("present");
    }
    // Future...
    if (currentTime < 900) {
        nineAmRow.removeClass();
        nineAmText.removeClass();
        nineAmRow.addClass("future");
        nineAmText.addClass("future");
    }
    
    // 10am block coloring
    // Past...
    if (currentTime > 1100) {
        tenAmRow.removeClass();
        tenAmText.removeClass();
        tenAmRow.addClass("past");
        tenAmText.addClass("past");
    }
    // Present...
    if (currentTime > 1000 && currentTime < 1100) {
        tenAmRow.removeClass();
        tenAmText.removeClass();
        tenAmRow.addClass("present");
        tenAmText.addClass("present");
    }
    // Future...
    if (currentTime < 1000) {
        tenAmRow.removeClass();
        tenAmText.removeClass();
        tenAmRow.addClass("future");
        tenAmText.addClass("future");
    }
    
    // 11am block coloring
    // Past
    if (currentTime > 1200) {
        elevenAmRow.removeClass();
        elevenAmText.removeClass();
        elevenAmRow.addClass("past");
        elevenAmText.addClass("past");
    }
    // Present
    if (currentTime > 1100 && currentTime < 1200) {
        elevenAmRow.removeClass();
        elevenAmText.removeClass();
        elevenAmRow.addClass("present");
        elevenAmText.addClass("present");
    }
    
    // Future
    if (currentTime < 1100) {
        elevenAmRow.removeClass();
        elevenAmText.removeClass();
        elevenAmRow.addClass("future");
        elevenAmText.addClass("future");
    }
    
    // 12pm block coloring
    // Past
    if (currentTime > 1300) {
        twelvePmRow.removeClass();
        twelvePmText.removeClass();
        twelvePmRow.addClass("past");
        twelvePmText.addClass("past");
    }
    // Present
    if (currentTime > 1200 && currentTime < 1300) {
        twelvePmRow.removeClass();
        twelvePmText.removeClass();
        twelvePmRow.addClass("present");
        twelvePmText.addClass("present");
    }
    // Future
    if (currentTime < 1200) {
        twelvePmRow.removeClass();
        twelvePmText.removeClass();
        twelvePmRow.addClass("future");
        twelvePmText.addClass("future");
    }
    
    // 1pm block coloring
    // Past
    if (currentTime > 1400) {
        onePmRow.removeClass();
        onePmText.removeClass();
        onePmRow.addClass("past");
        onePmText.addClass("past");
    }
    // Present
    if (currentTime > 1300 && currentTime < 1400) {
    onePmRow.removeClass();
    onePmText.removeClass();
    onePmRow.addClass("present");
    onePmText.addClass("present");
}
// Future
if (currentTime < 1300) {
    onePmRow.removeClass();
    onePmText.removeClass();
    onePmRow.addClass("future");
    onePmText.addClass("future");
}

// 2pm block coloring
// Past
if (currentTime > 1500) {
    twoPmRow.removeClass();
    twoPmText.removeClass();
    twoPmRow.addClass("past");
    twoPmText.addClass("past");
}
// Present
if (currentTime > 1400 && currentTime < 1500) {
    twoPmRow.removeClass();
    twoPmText.removeClass();
    twoPmRow.addClass("present");
    twoPmText.addClass("present");
}
// Future
if (currentTime < 1400) {
    twoPmRow.removeClass();
    twoPmText.removeClass();
    twoPmRow.addClass("future");
    twoPmText.addClass("future");
}

// 3pm block coloring
// Past
if (currentTime > 1600) {
    threePmRow.removeClass();
    threePmText.removeClass();
    threePmRow.addClass("past");
    threePmText.addClass("past");
}
// Present
if (currentTime > 1500 && currentTime < 1600) {
    threePmRow.removeClass();
    threePmText.removeClass();
    threePmRow.addClass("present");
    threePmText.addClass("present");
}
// Future
if (currentTime < 1500) {
    threePmRow.removeClass();
    threePmText.removeClass();
    threePmRow.addClass("future");
    threePmText.addClass("future");
  }
  
  // 4pm block coloring
  // Past
  if (currentTime > 1700) {
      fourPmRow.removeClass();
      fourPmText.removeClass();
      fourPmRow.addClass("past");
      fourPmText.addClass("past");
    }
    // Present
    if (currentTime > 1600 && currentTime < 1700) {
        fourPmRow.removeClass();
        fourPmText.removeClass();
        fourPmRow.addClass("present");
        fourPmText.addClass("present");
    }
    // Future
    if (currentTime < 1600) {
        fourPmRow.removeClass();
        fourPmText.removeClass();
        fourPmRow.addClass("future");
        fourPmText.addClass("future");
    }
    
    // 5pm block coloring
    // Past
    if (currentTime > 1800) {
        fivePmRow.removeClass();
        fivePmText.removeClass();
        fivePmRow.addClass("past");
        fivePmText.addClass("past");
    }
    // Present
    if (currentTime > 1700 && currentTime < 1800) {
        fivePmRow.removeClass();
        fivePmText.removeClass();
        fivePmRow.addClass("present");
        fivePmText.addClass("present");
    }
    // Future
    if (currentTime < 1700) {
        fivePmRow.removeClass();
        fivePmText.removeClass();
        fivePmRow.addClass("future");
        fivePmText.addClass("future");
    }
}

timeofdayCheck();

$("#9").click(function(){localStorage.setItem("9am", (JSON.stringify(nineAmText.val())))});
$("#10").click(function(){localStorage.setItem("10am", (JSON.stringify(tenAmText.val())))});
$("#11").click(function(){localStorage.setItem("11am", (JSON.stringify(elevenAmText.val())))});
$("#12").click(function(){localStorage.setItem("12pm", (JSON.stringify(twelvePmText.val())))});
$("#1").click(function(){localStorage.setItem("1pm", (JSON.stringify(onePmText.val())))});
$("#2").click(function(){localStorage.setItem("2pm", (JSON.stringify(twoPmText.val())))});
$("#3").click(function(){localStorage.setItem("3pm", (JSON.stringify(threePmText.val())))});
$("#4").click(function(){localStorage.setItem("4pm", (JSON.stringify(fourPmText.val())))});
$("#5").click(function(){localStorage.setItem("5pm", (JSON.stringify(fivePmText.val())))});