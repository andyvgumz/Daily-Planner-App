$(document).ready(function () {

    //Listen for save button clicks

    $(".saveButton").on("click", function () {
        console.log(`Appointment has been saved`);

        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);

        $(".notification").addClass('show');

        setTimeout(function () {
            $(".notifification").removeClass("show");
        }, 5000)
    })

    function hourUpdate() {
        let currentHour = dayjs().format();
        // console.log($(".time-block"));


        for (let i = 0; i < $(".time-block").length; i++) {
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1]);
            console.log(hour)
            console.log(currentHour)

            if (hour < currentHour) {
                $(".time-block")[i].classList.add("past")
            } else if (hour === currentHour) {
                $(".time-block")[i].classList.add("past")
                $(".time-block")[i].classList.remove("present")
            } else {
                $(".time-block")[i].classList.remove("past")
                $(".time-block")[i].classList.remove("present")
                $(".time-block")[i].classList.add("future")
            }
        }

    }

    hourUpdate();

    let interval = setInterval(hourUpdate, 15000);

    $("#hour-0 .description").val(localStorage.getItem("hour-0"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-5 .description").val(localStorage.getItem("hour-5"))
    $("#hour-6 .description").val(localStorage.getItem("hour-6"))
    $("#hour-7 .description").val(localStorage.getItem("hour-7"))
    $("#hour-8 .description").val(localStorage.getItem("hour-8"))
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))



    $("#currentDay").text(dayjs().format("ddd, D, MMM, YYYY"));



})