$(document).ready(function () {

    //Listen for save button clicks

    $(".saveButton").on("click", function (){
        console.log(`It has been saved`);

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
        let currentHour = moment().hours();
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

    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))


    $("#currentDay").text(moment().format("dddd, MMMM, Do"))

})