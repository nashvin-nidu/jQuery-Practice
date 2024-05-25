//To set css
    $("h1").css("color", "blue");
//To get css
    $("h1").css("color"); $("h1").css("font-size"); //Gives out the Css value
//Add css class
    $("h1").addClass("back-styled front-styled"); //Spaced to add multiple class
//Remove css class
    $("h1").remove("back-styled front-styled")
//To check whether it have class or not 
    $("h1").hasClass("back-styled front-styled")//Returns boolean
//To change the text
    $("h1").text("Hello World");
//To change Html
    $("h1").html("<h2>Hello World </h2>");
//To set or change an atribute
    $("img").attr("src"); //Get
    $("img").attr("src", "./love.png"); //Set 
    $("a").attr("href", "www.linkdin.com");

//Event Listener
$("button").click(function(){
    $("h1").css("color", "blue");
});

$(document).keypress(function(evt){
    $("h1").text(evt.key);
});

$(document).on("mouseover", function(evt){
    $("h1").css("color", "green");
});

//Add and Remove  HTML elements.
$("h1").before("<button>Btn</button"); //Before html
$("h1").after("<button>Btn</button"); //After html
$("h1").prepend("<button>Btn</button"); //Before content in innertext
$("h1").apend("<button>Btn</button");  //After content in innertext

$("h1").remove() //Remove root and sub
$("h1").empty() //Remove the child


//Animate Jquary
$("h1").hide();
$("h1").show();
$("h1").toggle();// Does Hide and show as per click 

$("h1").fadeOut();
$("h1").fadeIn();

$("h1").slideUp();
$("h1").slideDown();
//Custom css animation !!! uses only valued number;
$("h1").animate({opacity: "0.5" , margin: "10px"});
//Chain Up Function
$("h1").slideUp().slideDown().animate({opacity: "0.5" , margin: "10px"});




