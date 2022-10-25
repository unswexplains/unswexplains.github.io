let handle;
let blocks = ["# Heading", "Paragraph"];
let currentBlock;
let editor;
let isDirty = false;
window.onbeforeunload = function(){
  if (isDirty) return "";
};
function showBlocks() {
  let container = document.getElementById("html");
  container.innerHTML = null;
  for (i = 0; i < blocks.length; i++) {
    container.appendChild(newBlock());
    container.appendChild(newBlock(blocks[i]));
  }
  container.appendChild(newBlock());
}
function newBlock(md = "") {
  let elt = document.createElement("div");
  elt.classList.add("block");
  elt.setAttribute("markdown", md);
  if (md) elt.setAttribute("draggable", true);
  elt.addEventListener('dragstart', function(){
    document.querySelectorAll(".block").forEach((elt) => elt.classList.remove("dragging"));
    elt.classList.add("dragging");
  });
  elt.addEventListener('dragenter', function(){
    event.preventDefault();
    elt.style.outline = "thick black dashed";
    elt.style.zIndex = 4;
  });	
  elt.addEventListener('dragleave', function(){
    event.preventDefault();
    elt.style.outline = "";
    elt.style.zIndex = '';
  });
  elt.addEventListener('dragover', function(){
    event.preventDefault();
  });
  elt.addEventListener('drop', function(){
    elt.style.outline = "";
    elt.style.zIndex = '';
    event.preventDefault();
    let dragElt = document.querySelector(".block.dragging");
    moveBlock(dragElt, elt);
  });
  convertBlock(elt);
  elt.onclick = function(){selectBlock(this);}
  elt.ondblclick = function(){editBlock(this)};
  return elt;
}
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
function convertBlock(block) {
  let converter = new showdown.Converter();
  block.innerHTML = converter.makeHtml(block.getAttribute("markdown"));
  // Run code
	block.querySelectorAll("pre code[class*='language-']").forEach(function(elt){
    let language = [...elt.classList.values()].reduce((prev, curr) => curr.startsWith("language-") ? curr.slice(9) : curr, "");
    let code = elt.innerText;
    if (language === 'python' || language === 'r') {
      elt.innerText = "Running code...";
      let data = new FormData();
      data.append('language', language);
      data.append('code', code);
      ajax.request('https://slave.itsy.tech/runCode.php', data, function(req){
        var output = JSON.parse(req.getResponseHeader("output"));
        var fileName = req.getResponseHeader("fileName");
        var mimeType = req.getResponseHeader("Content-Type");
        var blob = window.URL.createObjectURL(req.response);
        elt.innerHTML = output;
        if (mimeType.startsWith('image/')) {
          var img = document.createElement('img');
          img.src = blob;
          elt.appendChild(img);
        }
        else if (fileName) {
          var link = document.createElement('a');
          link.href = blob;
          link.target='_blank';
          link.innerHTML = fileName;
          elt.appendChild(link);
        }
      }, "blob");
    }
  });
  // Parse LaTeX
  renderMathInElement(block, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
    ],
    throwOnError: false
  });
  // Get scripts to fire
  block.querySelectorAll('script').forEach(function(oldScript){
    var newScript = document.createElement('script');
    newScript.innerHTML = oldScript.innerHTML;
    block.removeChild(oldScript);
    block.appendChild(newScript);
  });
}
function getMarkdown() {
  let blocks = [...document.querySelectorAll(".block")];
  blocks = blocks.filter((x) => x.getAttribute("markdown") > "").map((x) => x.getAttribute("markdown"));
  return blocks.join("\n~~~~\n");
}
function editBlock(block) {
  currentBlock = block; //event.target.closest(".block");
  let md = block.getAttribute("markdown");
  //selectBlock(currentBlock);
  document.querySelectorAll("#html, #markdown").forEach((elt) => elt.classList.toggle("hidden"));
  document.getElementById("editTitle").innerText = md ? "Edit block" : "Add a block";
  editor.setValue(md);
  editor.focus();
  editor.navigateFileStart();
  editor.clearSelection();
}
function okEdit() {
  if (!currentBlock.getAttribute("markdown")) {
    currentBlock.parentNode.insertBefore(newBlock(), currentBlock);
    currentBlock.parentNode.insertBefore(newBlock(), currentBlock.nextSibling);
  }
  let newMD =  editor.getValue().trim();
  if (currentBlock.getAttribute("markdown") !== newMD) isDirty = true;
  currentBlock.setAttribute("markdown", newMD);
  convertBlock(currentBlock);
  currentBlock.setAttribute("draggable", true);
  document.querySelectorAll("#html, #markdown").forEach((elt) => elt.classList.toggle("hidden"));
}
function cancelEdit() {
  document.querySelectorAll("#html, #markdown").forEach((elt) => elt.classList.toggle("hidden"));
}
function selectBlock(currentBlock) {
  document.querySelectorAll(".block").forEach((elt) => elt.classList.remove("selected"));
  currentBlock.classList.add("selected");
}
window.addEventListener("load", function(){
  showBlocks();
  editor = ace.edit(document.getElementById("editor"), {
    theme: "ace/theme/textmate",
    mode: "ace/mode/markdown",
    minLines: 20,
    //maxLines: Infinity,
    tabSize: 2,
    printMargin: false,
    fontFamily: "Roboto Mono",
    fontSize: 14,
    wrap: "free",
    highlightActiveLine: false,
    autoScrollEditorIntoView: true,
  });
  editor.on("keydown", function(){
    isDirty = true;
  });
  editor.focus();
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
      e.preventDefault();
      var	selected = document.querySelector(".block.selected");
      if (selected && selected.getAttribute("markdown")) {
        document.querySelectorAll(".block.cut").forEach(x => x.classList.remove("cut"));
        document.querySelectorAll(".block.copied").forEach(x => x.classList.remove("copied"));
        selected.classList.add("cut");
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault();
      var	selected = document.querySelector(".block.selected");
      if (selected && selected.getAttribute("markdown")) {
        document.querySelectorAll(".block.cut").forEach(x => x.classList.remove("cut"));
        document.querySelectorAll(".block.copied").forEach(x => x.classList.remove("copied"));
        selected.classList.add("copied");
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
      e.preventDefault();
      let	fromBlock = document.querySelector(".block.cut, .block.copied");
      let	toBlock = document.querySelector(".block.selected");
      if (fromBlock && toBlock) {
        if (fromBlock.classList.contains("cut")) moveBlock(fromBlock, toBlock);
        else moveBlock(fromBlock, toBlock, true);
      }
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      document.querySelectorAll(".block.cut").forEach(x => x.classList.remove("cut"));
      document.querySelectorAll(".block.copied").forEach(x => x.classList.remove("copied"));
    }
  });
});
function moveBlock(fromBlock, toBlock, copy = false) {
  if (toBlock === fromBlock || toBlock === fromBlock.previousElementSibling || toBlock === fromBlock.nextSibling) return;
  fromBlock.classList.remove("cut");
  fromBlock.classList.remove("copied");
  if (!toBlock.getAttribute("markdown")) {
    if (copy) {
      toBlock.parentNode.insertBefore(newBlock(), toBlock);
      let newbie = newBlock(fromBlock.getAttribute("markdown"));
      toBlock.parentNode.insertBefore(newbie, toBlock);
      selectBlock(newbie);
    }
    else {
      toBlock.parentNode.insertBefore(fromBlock.previousElementSibling, toBlock);
      toBlock.parentNode.insertBefore(fromBlock, toBlock);
      selectBlock(fromBlock);
    }
  }
  else {
    toBlock.setAttribute("markdown", toBlock.getAttribute("markdown").trim()+"\n\n"+fromBlock.getAttribute("markdown").trim());
    toBlock.innerHTML += fromBlock.innerHTML;
    selectBlock(toBlock);
    if (!copy) {
      fromBlock.parentNode.removeChild(fromBlock.previousElementSibling);
      fromBlock.parentNode.removeChild(fromBlock);  
    }
  }
}
async function openFile() {
  if (!editor.isDirty || confirm("You have unsaved changes which will be lost.")) try {
    let request = indexedDB.open("thoreau");
    request.onupgradeneeded = event => event.target.result.createObjectStore("options");
    request.onsuccess = () => {
      request.result.transaction("options").objectStore("options").get("fileHandle").onsuccess = async function(event){
        [handle] = await window.showOpenFilePicker({startIn: event.target.result});
        const file = await handle.getFile();
        const code = await file.text();
        blocks = code.split("~~~~").map((x) => x.trim());
        showBlocks();
        //document.querySelector("#filename").innerHTML = handle.name;
        isDirty = false;
        editor.focus();
        editor.navigateFileStart();
        editor.clearSelection();
        indexedDB.open("thoreau").onsuccess = event => event.target.result.transaction("options", "readwrite").objectStore("options").put(handle, "fileHandle");
      };
    }
  } catch (err) {console.log(err)}
}
async function saveFile() {
  try {
    if (!handle) saveFileAs();
    else {
      //document.querySelector("#status").innerHTML = "Saving...";
      const writable = await handle.createWritable();
      await writable.write(getMarkdown());
      await writable.close();
      isDirty = false;
      editor.focus();
      document.querySelector("#status").innerHTML = "Saved";
    }
  } catch (err) {console.log(err)}
}
async function saveFileAs() {
  try {
    handle = await window.showSaveFilePicker({
      //suggestedName: document.querySelector("#filename").innerText,
    });
    //document.querySelector("#filename").innerHTML = handle.name;
    saveFile();
  } catch (err) {console.log(err)}
}
async function closeFile() {
  if (!isDirty || confirm("You have unsaved changes which will be lost.")) try {
    handle = null;
    //document.querySelector("#filename").innerHTML = "Untitled.js";
    //document.querySelector("#pages").innerHTML = "";
    //editor.setValue("");
    isDirty = false;
    blocks = ["# Heading", "Paragraph"];
    showBlocks();
    //editor.focus();
  } catch (err) {console.log(err)}
}
