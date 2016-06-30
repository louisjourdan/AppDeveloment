var audioFile;
var storyImg;

window.onload = function(){
    document.addEventListener('deviceready', init, false);
    init();
}

function init(){
    var btnPlay = document.getElementById('btnPlay');
    var btnPause = document.getElementById('btnPause');
    var btnStop = document.getElementById('btnStop');
    
    btnPlay.addEventListener('click', playAudio, false);
    btnPause.addEventListener('click', pauseAudio, false);
    btnStop.addEventListener('click', stopAudio, false);
    
    //audioFile = document.getElementById('audioFile');
    var src = cordova.file.applicationDirectory + "www/assets/threepigs.mp3";
    audioFile = new Media(src);
    storyImg = document.getElementById('storyImg');
}

function playAudio(){
    audioFile.play();
    //startTimer();
}

function pauseAudio(){
    audioFile.pause();
}

function stopAudio(){
    //pauseAudio();
    //audioFile.currentTime = 0;
    audioFile.stop();
   //stopTimer();
}

function changeStory(story){
    var src = cordova.file.applicationDirectory + "www/assets/" + story + ".mp3";
    audioFile = new Media(src);
    
    document.getElementById('storyImg').src = "img/" + story + ".jpg";
}

var intv;

function startTimer(){
    intv = setInterval(updateTime,1000);
}

function stopTimer(){
    clearInterval(intv);
    updateTime();
}

function updateTime(){
    document.getElementById('timeOut').innerHTML = "Elapsed Time: " + secsToMins(audioFile.currentTime);
}

function secsToMins(seconds){
    var minutes = Math.floor(seconds/60);
    var theSeconds = seconds-minutes*60;
    if(theSeconds>9)
        return minutes + ":" + Math.round(theSeconds);
    else
        return minutes + ":0" + Math.round(theSeconds);
}