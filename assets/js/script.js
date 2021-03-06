var currentDay = document.getElementById("currentDay")
var textareaEl = document.getElementById("text9AM");
var textareaE2 = document.getElementById("text10AM");
var textareaE3 = document.getElementById("text11AM");
var textareaE4 = document.getElementById("text12PM");
var textareaE5 = document.getElementById("text1PM");
var textareaE6 = document.getElementById("text2PM");
var textareaE7 = document.getElementById("text3PM");
var textareaE8 = document.getElementById("text4PM");
var textareaE9 = document.getElementById("text5PM");
var button1 = document.getElementById("submit1");
var button2 = document.getElementById("submit2");
var button3 = document.getElementById("submit3");
var button4 = document.getElementById("submit4");
var button5 = document.getElementById("submit5");
var button6 = document.getElementById("submit6");
var button7 = document.getElementById("submit7");
var button8 = document.getElementById("submit8");
var button9 = document.getElementById("submit9");

$('.saveBtn').on('click', function() {
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  console.log(time);
  console.log(value);
  localStorage.setItem(time, value);
});

function updateColors() {
  var hourNow = moment().hours();
  $('.time-block').each(function() {
    // Recalling local storage
    console.log(window.localStorage.getItem($(this).attr('id')))
    var localStorage = window.localStorage.getItem($(this).attr('id'));
    $(this).find("textarea").text(localStorage);

    console.log($(this))
    var hr = parseInt($(this).attr('id').split('-')[1]);
    if(hr < hourNow) {
      $(this).addClass('past');
    }

    if(hr === hourNow) {
      $(this).removeClass('past');
      $(this).addClass('present');
    }

    if(hr > hourNow) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

updateColors();

var m = moment();
console.log(m.format("dddd, MMMM D"));

function updateDate() {
  // currentDay.textContent = m.format("dddd, MMMM D");
  $('#currentDay').text(m.format("dddd, MMMM D"))
}
updateDate();

function reloadCalendar() {
  var reload 
}