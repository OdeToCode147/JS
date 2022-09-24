function time(){
    var hours=document.getElementById("Hours");
    var minutes=document.getElementById("Minutes");
    var seconds=document.getElementById("Seconds");
    var ampm=document.getElementById("AMPM");
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="AM";
    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }
    if(12 <= hrs && hrs < 24){
        am_pm = "PM"
    }
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;
}
setInterval(time , 1000)
time();

function ui(){
    var time=new Date();
    let hrs=time.getHours();
    if(6 <=hrs && hrs < 12){
        document.getElementById("Messagetext").innerText = "GOOD MORNING!! WAKE UP!!"
        document.getElementById("ActivityText").innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById("ActivityImage").style.backgroundImage= "url('./Component\ 30\ –\ 1.svg')";
    }
    else if(12 <=hrs && hrs < 17){
        document.getElementById("Messagetext").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        document.getElementById("ActivityText").innerText = "LET'S HAVE SOME LUNCH !!"
        document.getElementById("ActivityImage").style.backgroundImage= "url('./Component\ 31\ –\ 1.svg')";
    }
    else if(17 <= hrs && hrs < 19){
        document.getElementById("Messagetext").innerText = "GOOD EVENING !!"
        document.getElementById("ActivityText").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById("ActivityImage").style.backgroundImage= "url('./lunch_image@2x.png')";
    }
    else if(19 <= hrs && hrs < 6){
        document.getElementById("Messagetext").innerText = "GOOD NIGHT !!"
        document.getElementById("ActivityText").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("ActivityImage").style.backgroundImage= "url('./Component\ 32\ –\ 1.svg')";
    }
    hrs=hrs;
}
setInterval(ui , 1000)
ui();


function Execute(){
    let Wake=document.getElementById("Selectmorn").value;
    document.getElementById("WUT").innerText = "Wake-Up Time : "+Wake;

    let lunch=document.getElementById("Selectlunch").value;
    document.getElementById("LT").innerText = "Lunch Time : "+lunch;

    let nap=document.getElementById("Selectnap").value;
    document.getElementById("NT").innerText = "Nap Time : "+nap;

    let night=document.getElementById("Selectnight").value;
    document.getElementById("NIT").innerText = "Night Time : "+night;
}