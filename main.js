var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";

    recognition.start();
}
    recognition.onresult=function(event){
        console.log(event);

        var content=event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML=content;

        if(content=="take my selfie"){
            console.log("talking selfie");
            speak();
        }
        
        
        
    }


function speak(){
    var syndh=window.speechSynthesis;
    speak_data="talking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    syndh.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        takesnapshot();
        save();
        },5000);
}


Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");


function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}


function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}