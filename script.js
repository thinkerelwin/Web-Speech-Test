if (!("webkitSpeechRecognition" in window)) {
  console.error("can't use webkitSpeechRecognition");
} else {
  var recognition = new webkitSpeechRecognition();
  console.log("recognition", recognition);

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "cmn-Hant-TW";

  recognition.onstart = function() {
    console.log("recognition, 開始辨識...");
  };
  recognition.onend = function() {
    console.log("recognition, 停止辨識!");
  };

  recognition.onresult = function(event) {
    console.log("recognition", event);
  };

  var show = document.getElementById("show");

  recognition.onresult = function(event) {
    var i = event.resultIndex;
    var j = event.results[i].length - 1;
    show.innerHTML = event.results[i][j].transcript;
  };

  recognition.start();
}
