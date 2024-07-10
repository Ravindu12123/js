const searchParams = new URLSearchParams(window.location.search);
console.log(l=searchParams.get('l')); // 
console.log(searchParams.has('l')); // true
if(searchParams.has('l')==true){
    document.querySelector('.vid').src=l;
}else {
    alert("please give me a link for video");
}
function g() {
    x=window.location.href;
    location.href=x+"?l=jjjjj";
}
