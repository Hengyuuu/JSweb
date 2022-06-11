$(function(){
    // console.log("Yo")
    $("input").on("click",function(){
        // alert("hi").text("Hello");
        
        let numberOfListItem = $("li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});