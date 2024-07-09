window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match){ return match[2]}else{return null;}
}
var mdv=null;
async function run() {
    var getUrl = window.location;
    var ho = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log(ho);
    tgp=await getCookie("tp");
    if(tgp==null){
        mdv.style.background="blue";
        inu=await prompt("can't find tp enter Full url","");
        if(inu==null){
          alert("process canceled!");
          mdv.style.background="black";         
        }else{
          nurl=new URL(inu);
          tgp=nurl['pathname'].replace("/","");
          mdv.style.background="orange";
        }
    }else{
    d3=`newwpsafelink4=${tgp}`;
    console.log(tgp,d3);
    console.log('fetching!!!!!');
    x=await fetch(ho,{
        method:'POST',
        headers:{
         'Content-Type': 'application/x-www-form-urlencoded',
         'Cookie':document.cookie
        },
        body:d3
    }).then(xl=>xl.text());
    ls=/\/(.*?)"/g.exec(x);
    ls= ls==null ? null:ls[1];
    console.log(`Url Found!: ${ls}`);
    ul=ho+ls;
    console.log(ul);
    mdv.style.background="green";
  }
}
function start(){
   st=document.createElement('style');
   st.innerHTML=`.fsb{z-index:99999;position: fixed;width: 50px;height: 50px;border-radius: 50%; background: red;top: 100px;left: 100px;}.fsb:hover{background: orange;}`;
   document.head.appendChild(st);
   dv=document.createElement('div');
   dv.className='fsb';
   document.body.appendChild(dv);
   dv.addEventListener('click',run);
   mdv=dv;
}
