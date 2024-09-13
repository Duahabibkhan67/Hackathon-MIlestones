const togglebutton=document.getElementById(`togglebutton`) as HTMLButtonElement|null;
const skillsdiv=document.getElementById(`skills`) as HTMLDivElement|null;
if(togglebutton && skillsdiv){
 togglebutton.addEventListener('click',()=>{
if(skillsdiv.style.display === 'none'){
 skillsdiv.style.display ='block';
togglebutton.value ='Hide Skills';
} else{
 skillsdiv.style.display ='none';
 togglebutton.value ='Show Skills';
}
 });
}
else{
 console.log("Required element not found in the DOM");
 
};
