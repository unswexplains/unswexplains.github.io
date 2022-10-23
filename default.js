// Set Highcharts options
if (typeof Highcharts !== 'undefined') Highcharts.setOptions({
  credits: {enabled: false},
  title: {text: undefined},
  chart: {/*height: 300, borderWidth: 1, borderColor: "lightgray",*/ style: {"font-family": "inherit"}},
  plotOptions: {series: {animation: false}},
  lang: {thousandsSep: ','},
  colors: [
    "#2daae2", //blue 
    "#3F61C4", //indigo
    "#007882", //teal
    "#ff635d", //red
    "#fa91b6", //pink
    "#1ac987", //green
    "#8a68c8", //purple
    "#ff8200", //orange 
  ]
});
window.addEventListener('load', function(){
  // Check if embedded
  function inIframe () {
    try {return window.self !== window.top}
    catch (e) {return true}
  }
  if (inIframe()) {
    document.documentElement.style.backgroundColor = "white";
    document.body.style.maxWidth = "100%";
    document.getElementById("who").style.display = "none";
    //document.querySelector("header").style.display = "none";
    document.getElementById("reader").style.display = "none";
    document.querySelector("main").style.padding = 0;
    document.querySelector("main").style.paddingRight = "20px";
    document.querySelector("footer").style.display = "none";
    Highcharts.charts.forEach((x) => x.reflow());
  }
  // Set links to open in new window
  document.querySelectorAll("a[href^='http']").forEach(x => x.setAttribute('target', '_blank'));
  // Process maths
  renderMathInElement(document.body, {
    delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}],
    throwOnError: false
  });
  // Process runnable code
  var ajax = {};
  ajax.request = function(url, data, callback, type=null){
    var method = data ? 'POST' : 'GET';
    var req = new XMLHttpRequest();
    if (type) req.responseType = type;
    if (callback) req.onreadystatechange = function(){if (req.readyState === 4 && req.status === 200) callback(req);};
    req.open(method, url, true);
    if (method === 'GET') req.send();
    else req.send(data);
  };
  document.querySelectorAll("pre code[class*='language-']").forEach(function(elt){
    let language = [...elt.classList.values()].reduce((prev, curr) => curr.startsWith("language-") ? curr.slice(9) : curr, "");
    let code = elt.textContent;
    if (language === 'python' || language === 'r') {
      elt.textContent = 'Running code...';
      let data = new FormData();
      data.append('language', language);
      data.append('code', code);
      ajax.request('https://slave.itsy.tech/runCode.php', data, function(req){
        var output = JSON.parse(req.getResponseHeader("output"));
        var fileName = req.getResponseHeader("fileName");
        var mimeType = req.getResponseHeader("Content-Type");
        var blob = window.URL.createObjectURL(req.response);
        if (mimeType.startsWith('image/')) {
          var img = document.createElement('img');
          img.src = blob;
          elt.parentElement.parentElement.insertBefore(img, elt.parentElement.nextElementSibling);
        }
        else if (fileName) {
          var para = document.createElement('p')
          elt.parentElement.parentElement.insertBefore(para, elt.parentElement.nextElementSibling);
          var link = document.createElement('a');
          link.href = blob;
          link.target='_blank';
          link.innerHTML = fileName;
          para.appendChild(link);
        }
        if (output) elt.innerHTML = output;
        else elt.parentElement.parentElement.removeChild(elt.parentElement);
      }, "blob");
    }
  });
});
let reader = {};
let SpeechRecognition = webkitSpeechRecognition
let SpeechGrammarList = webkitSpeechGrammarList
let SpeechRecognitionEvent = webkitSpeechRecognitionEvent
let recognition = new SpeechRecognition();
let commands = ['start', 'stop', 'pause', 'resume'];
let speechRecognitionList = new SpeechGrammarList();
let grammar = '#JSGF V1.0; grammar commands; public <command> = ' + commands.join(' | ') + ' ;'
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.interimResults = false;
recognition.onresult = function(event) {
  let command = event.results[0][0].transcript;
  switch (command) {
    case "stop":
      reader.stop();
      break;
    case "pause":
      reader.pause();
      break;
    case "resume":
      reader.resume();
      break;
    default:
  }
}
reader.readText = function(text) {
  let waitTime = 750;
  let rate = 0.8;
  let sentences = text.split(/[.?!\n]+/);
  speakSentence();
  function speakSentence() {
    if (window.speechSynthesis.cancelled) return;
    if (sentences.length === 0) {reader.stop(); return;}
    let sentence = sentences.shift().trim();
    if (!sentence) speakSentence();
    let utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en';
    utterance.rate = rate;
    utterance.onend = () => {
      if (!window.speechSynthesis.cancelled) setTimeout(speakSentence, waitTime);
    };
    window.speechSynthesis.speak(utterance);
  }
}
reader.start = function() {
  window.speechSynthesis.cancelled = false;
  if (window.getSelection().toString()) reader.readText(window.getSelection().toString());
  else {
    let text = document.querySelector("body > header").textContent + "\n" + document.querySelector("main").textContent;
    reader.readText(text);
  }
  document.getElementById("start").style.display="none";
  document.getElementById("stop").style.display="inline-block";
  document.getElementById("pause").style.display="inline-block";
  document.getElementById("resume").style.display="none";
  //recognition.start();
}
reader.stop = function() {
  window.speechSynthesis.cancel();
  window.speechSynthesis.cancelled = true;
  document.getElementById("start").style.display="inline-block";
  document.getElementById("stop").style.display="none";
  document.getElementById("pause").style.display="none";
  document.getElementById("resume").style.display="none";
  //recognition.stop();
}
reader.pause = function() {
  window.speechSynthesis.pause();
  document.getElementById("start").style.display="none";
  document.getElementById("stop").style.display="inline-block";
  document.getElementById("pause").style.display="none";
  document.getElementById("resume").style.display="inline-block";
}
reader.resume = function() {
  window.speechSynthesis.resume();
  document.getElementById("start").style.display="none";
  document.getElementById("stop").style.display="inline-block";
  document.getElementById("pause").style.display="inline-block";
  document.getElementById("resume").style.display="none";
}
