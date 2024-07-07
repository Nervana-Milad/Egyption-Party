$(".icon").on("click", function () {
  $("ul").animate({ width: 250 }, 500);
  $(".icon").animate({ marginLeft: 250 }, 500);
});

$(".closeBtn").on("click", function () {
  $("ul").animate({ width: 0 }, 500);
  $(".icon").animate({ marginLeft: 0 }, 500);
});

$("#home ul li a").on("click", function (e) {
  const secId = $(e.target).attr("href");
  const secTop = $(secId).offset().top;
  $("html, body").animate({ scrollTop: secTop }, 1000);
});

$(".singers h3").on("click", function (e) {
  $(".singerInfo").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

function EventDate(date) {
  const counter = setInterval(function () {
    const nowDate = new Date();
    const eventDate = new Date(date);

    const reminderDuration = eventDate - nowDate;

    let days = Math.floor(reminderDuration / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (reminderDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor(
      (reminderDuration % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((reminderDuration % (1000 * 60)) / 1000);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${minutes} M`);
    $(".seconds").html(`${seconds} S`);

    if (reminderDuration < 0) {
      clearInterval(counter);
      $(".days").html(`EXPIRED`);
      $(".hours").html(`--`);
      $(".minutes").html(`--`);
      $(".seconds").html(`--`);
    }
  }, 1000);
}

EventDate("Oct 20, 2024 12:00:00");

$("textarea").on("input", function () {
  const remainderLetters = 100 - $(this).val().length;

  $("#chars").html(remainderLetters);
  if (remainderLetters > 0) {
    $("#chars").html(remainderLetters);
  } else {
    $("form p").html(`Your available character finished`);
    $("form p").css({ color: "rgb(214, 46, 51)" });
  }
});
