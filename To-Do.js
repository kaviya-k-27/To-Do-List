function clicked(){
  var input=document.getElementById("toDoInput").value;
  if(input!==""){
    var createDiv=document.createElement("div");
  createDiv.className = "my-data";
  var createDiv1=document.createElement("div");
  var createDiv2=document.createElement("div");
  createDiv.append(createDiv1,createDiv2);
  createDiv1.style.border="1px solid yellow";
  createDiv1.className="mindiv1";
  createDiv2.className="mindiv2";
  var createH1=document.createElement("h2");
  createH1.innerHTML=input;
  createDiv1.append(createH1);
  var createButton=document.createElement("button");
  createButton.onclick=function(){
    createDiv.remove();
  }
  createButton.innerHTML="Remove";
  createDiv2.append(createButton);
  document.getElementById("mainbox").append(createDiv);
 document.getElementById("toDoInput").value="";
  }
  else{
    alert("Fill the field");
  }

}
document.getElementById("toDoInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    clicked(); 
  }
});

// document.addEventListener("keypress", function (event){
//   console.log("keypree")
//                console.log(event.key);
// })
// document.addEventListener("keydown", function (event){
//   console.log("key down")
//                console.log(event.key);
// })



