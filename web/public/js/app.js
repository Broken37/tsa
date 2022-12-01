
 const dropArea = document.querySelector(".drag-area"),
 dragText = dropArea.querySelector("header"),
 button = dropArea.querySelector("button"),
 input = dropArea.querySelector("input");
 let file; 
 
 
 
 
 button.onclick = function(){
   input.click(); 
 }
 
 
 
 
 input.addEventListener("change", function(){
   file = this.files[0];
   dropArea.classList.add("active");
   showFile(); 
 });
 
 dropArea.addEventListener("dragover", function (event){
   event.preventDefault(); 
   dropArea.classList.add("active");
   dragText.textContent = "Release to Upload File";
 });


 // Show chart
 const orderAddBtn = document.querySelector("#show-chart");
const orderAddWrapper = document.querySelector(".order-add-wrapper");

orderAddBtn.addEventListener("click" , function() {
  orderAddWrapper.classList.add("up");
});


const orderAddCloseBtn = document.querySelector("#order-add-close-btn");
const orderAddCloseCross = document.querySelector("#order-add-close-cross");

orderAddCloseBtn.addEventListener("click" , function () {
  orderAddWrapper.classList.remove("up");
});

orderAddCloseCross.addEventListener("click" , function () {
  orderAddWrapper.classList.remove("up");
});
 
 

 dropArea.addEventListener("dragleave", function(){
   dropArea.classList.remove("active");
   dragText.textContent = "Drag & Drop to Upload File";
 });
 
 
 
 dropArea.addEventListener("drop", function (event){
   event.preventDefault(); 
   file = event.dataTransfer.files[0];
   showFile(); 
 });
 
 
 
 
 function showFile(){
   let fileType = file.type;
   let validExtensions = ["text/csv"]; 
   if(validExtensions.includes(fileType)){ 
     let fileReader = new FileReader(); 
     fileReader.onload = function(){
       let fileURL = fileReader.result; 
       let csvTag = `<csv src="${fileURL}" alt="File">`; 
 attribute
       dropArea.innerHTML = csvTag;
     }
     fileReader.readAsDataURL(file);
   }else{
     alert("This is not an csv File!");
     dropArea.classList.remove("active");
     dragText.textContent = "Drag & Drop to Upload File";
   }
 }