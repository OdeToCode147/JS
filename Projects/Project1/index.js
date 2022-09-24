function time(){
    var hours=document.getElementById("Hours");
    var minutes=document.getElementById("Minutes");
    var seconds=document.getElementById("Seconds");
    var ampm=document.getElementById("AMPM");
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="PM";
    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
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
    Hours.innerText=hrs;
    Minutes.innerText=mins;
    Seconds.innerText=secs;
    AMPM.innerText=am_pm;
}
setInterval(time , 1000)
time();

function ui(){
    var time=new Date();
    var hrs=time.getHours();
    let mssgtext=document.getElementById("Messagetext")
    let acttext=document.getElementById("ActivityText")
    let actImg=document.getElementById("ActivityImage")
    if(hrs=>6 && hrs<12){
        mssgtext.innerText = "GOOD MORNING!! WAKE UP!!"
        acttext.innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
        actImg.style.backgroundImage= "url('./Component\ 30\ –\ 1.svg')";
    }
    else if(hrs=>12 && hrs<17){
        mssgtext.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        acttext.innerText = "LET'S HAVE SOME LUNCH !!"
        actImg.style.backgroundImage= "url('./Component\ 31\ –\ 1.svg')";
    }
    else if(hrs=>17 && hrs<19){
        mssgtext.innerText = "GOOD EVENING !!"
        acttext.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        actImg.style.backgroundImage= "url('./lunch_image@2x.png')";
    }
    else if(hrs=>19 && hrs<6){
        mssgtext.innerText = "GOOD NIGHT !!"
        acttext.innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
        actImg.style.backgroundImage= "url('./Component\ 32\ –\ 1.svg')";
    }
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