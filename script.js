

var selectedMovie = "";

// certain things will be hidden when the page first loads
// they will display when user makes selections
// do not modify the next three lines
$("#seatsSelection").hide();
$("#checkout").hide();


// TASK 3: write click handlers that will create a border around the movie poster when it is selected
$("#coco").click(function(){
        $(".poster").css("border", "1px solid transparent");
    $("#coco").css("border","solid green 2px");
    $("#seatsSelection").show();
        selectedMovie = "CoCo";
        $("body").css("background","#ff6804	");

});
$("#wrinkleInTime").click(function(){
        $(".poster").css("border", "1px solid transparent");
    $("#wrinkleInTime").css("border","solid green 2px");
    $("#seatsSelection").show();
            $("body").css("background","teal");

});
$("#blackPanther").click(function(){
        $(".poster").css("border", "1px solid transparent");
    $("#blackPanther").css("border","solid green 2px");
    $("#seatsSelection").show();
    $("body").css("background","black");

});
$("#readyplayergo").click(function(){
       $(".poster").css("border", "1px solid transparent");
    $("#readyplayergo").css("border","solid green 2px");
    $("#seatsSelection").show();
        selectedMovie = "Ready Player Go";
    $("body").css("background","#000080");


});

    
// TASK 3: additionally, inside the click handlers, display the available movie show times

$("#blackPanther").click(function() {
    $("#seatsSelection").show();
    selectedMovie = "Black Panther";
});

$("#wrinkleInTime").click(function() {
    $("#seatsSelection").show();
    selectedMovie = "A Wrinkle in Time";
});




// the array below represents what seats are available (true) or not (false)
// do not modify the array
var seatsAvailable = [true, false, false, true, true, false];


// TASK 4: write a loop that will go through the array seatsAvailable to indicate whether a seat is available or not
for(var i=0;i<seatsAvailable.length;i=i+1){
    if(seatsAvailable===true){
       $("#seat" + (i+1) ).css("background", "green");
    }else{
    $("#seat" + (i+1) ).css("background", "red");
    
    }
}

// if a seat is available, it will have a background color of green
// if a seat is NOT available, it will have a background color of red
for (var i = 0; i < seatsAvailable.length; i++) {
    if (seatsAvailable[i] === true){
        $("#seat" + (i+1) ).css("background", "green");
        
        // task 6 below
        $("#seat" + (i+1) ).click(function() {
            $("#checkout").show();
            $("#checkoutMessage").text("Thanks for selecting Moooooove Over Movie Seat Finder! We hope you enjoy the show!");
                        $("#checkoutButton").show();

        });
        
    } else {
        $("#seat" + (i+1) ).css("background", "red");
        
        // task 6 below
        $("#seat" + (i+1) ).click(function() {
            $("#checkout").show();
            $("#checkoutMessage").text("Sorry, that seat is not available for "+selectedMovie+". Please select another.");
            $("#checkoutButton").hide();
        });
    }
}


// TASK 5: if a user selects an available seat, then they have the option to checkout. Display a checkout message and the checkout button.
// If the user selects a seat that is not available, display a message indicating they must choose another seat.
$("#checkoutButton").click(function(){
   $("body").hide();
    $("body").css("background-image","url('https://imgc.allpostersimages.com/img/print/posters/conrad-knutsen-enjoy-the-show_a-G-5121194-0.jpg')");

});
