$(document).ready(function (){

    //Listen for save button clicks

    $(".saveButton").on("click", function(){
        console.log('It has been saved');

        let timeId = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeId);
        console.log(value);

        localStorage.setItem(timeId, value);

        $(".notification").addClass('show');

        setTimeout(function (){
            $('.notifification').removeClass("show");
        }, 5000)
    })

    function hourUpdate(){
        let currentHour = moment().hour();
        console.log(currentHour);
    }

    hourUpdate();

    


























})