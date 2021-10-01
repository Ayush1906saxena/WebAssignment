let para1 = document.getElementById("para1");
para1.addEventListener("mouseover", function run() {
  para1.style.color = "red";
});

para1.addEventListener("mouseleave", function run() {
  para1.style.color = "black";
});

function enlargeImage(x){
    x.style.height="50%";
}

function normalImage(x){
    x.style.width="80%";
}

var video=document.getElementById("ASeriesVideo");
video.onpause = function(){
    alert("The video has not been paused");
}

function checkForm(){
  //passwordValidate();
  //validate();
  emptyItems();
}

function validate(){
  var form=document.getElementById('theForm');
  for(var i=0; i<form.elements.length; i++){
    if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){

      // First of checking whether a required field is left empty
      alert("there are some required fields");
      return false;

      //Now also checking the pattern for password
    }
  }
}

function emptyItems(){
  var form=document.getElementById('theForm');
  var array=[];
  for(var i=0; i<form.elements.length-2; i++){
    if(form.elements[i].value === ''){
      array.push(form.elements[i].id);
    }
  }

  alert(JSON.stringify(array));
}

function passwordValidate(){
  var ele=document.getElementById("Password1");
  if(ele.value === '')
  {
    alert("Password field is empty");
  }
  var regex=/^[a-zA-Z0-9!@#$%^&*]$/;

  if(!regex.test(ele.value))
  {
    alert("Password pattern not matching");
  }
}

function report(model){
  if(model !== ''){
    document.getElementById('carColor').disabled=false;
  }
}
