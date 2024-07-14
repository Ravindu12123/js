const sleep = ms => new Promise(r => setTimeout(r, ms));
var sts=0;mc=null;var nlg;
window.lg=function (nv) {
    nlg.innerText+=`${nv}\n`;
}

async function runE(getUrl) {
    mdv.style.background="orange";
    getUrl = window.location;
    var ho = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    lg(ho);var tgp;
    tgp= await getCookie("tp");
    if(tgp==null){
        mdv.style.background="blue";
        inu=await prompt("can't find tp enter Full url","");
        if(inu==null){
          alert("process canceled!");
          mdv.style.background="black";     
          return 0;    
        }else{
          nurl=new URL(inu);
          tgp=nurl['pathname'].replace("/","");
          lg("tp found from given url!",tgp);
          document.cookie=`tp=${tgp}`;
          mdv.style.background="orange";
        }
    }else{
    d3=`newwpsafelink4=${tgp}`;
    lg(tgp+" , "+d3);
    lg('fetching!!!!!');
    x=await fetch(ho,{
        method:'POST',
        headers:{
         'Content-Type': 'application/x-www-form-urlencoded',
         'Cookie':document.cookie
        },
        body:d3
    }).then(xl=>xl.text());
    ls=x.match(/href="\/(.*?)"/g);
    ls=ls.find(r=>r.includes("open"));
    ls=ls.replace(/href=|"/g,"");
    if(ls==null){
      alert("sorry finding err!");
      mdv.style.background="brown";
      return 0;
    }else{
     lg(`Url Found!: ${ls}`);
     ul=ho+ls;
     lg(ul);
     location.href=ul;
     mdv.style.background="green";
     return 1;
    }
  }
}

async function Allg() {
    vl=document.querySelector('.tal').value;
    console.log(vl);
    uls=vl.match(/http(.*?)( |\n|\r)/g);
    if (uls==null) {
        alert("no urls!!");
    }else{
    console.log(uls);
    for(i=0;i<uls.length;){
       Ul=new URL(uls[i]);
       pn=Ul['pathname'].replace("/","");
       document.cookie=`tp=${pn}`;
       r=await runE(Ul);
       mj=sleep(10000);
       if(r==1){
         xp=await confirm("next?");
         if(xp==true){
           i++;
         }else{
             lg("stopped!!!");
         }
       }else{
           lg("system err!!!");
       }
    }
    }
}

window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match){ return match[2]}else{return null;}
}

var mdv=null;
async function run() {
    mdv.style.background="orange";
    var getUrl = window.location;
    var ho = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log(ho);var tgp;
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
          console.log("tp found from given url!",tgp);
          
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
    ls=x.match(/href="\/(.*?)"/g);
    ls=ls.find(r=>r.includes("open"));
    ls=ls.replace(/href=|"/g,"");
    if(ls==null){
      alert("sorry finding err!");
      mdv.style.background="brown";
    }else{
     console.log(`Url Found!: ${ls}`);
     ul=ho+ls;
     console.log(ul);
     location.href=ul;
     mdv.style.background="green";
    }
  }
}
function start(){
   st=document.createElement('style');
    st.innerHTML=`.cco{z-index:999999;}.fsb{position:fixed;width:50px;height:50px;border-radius:50%;background:red;top:250px;right:100px;}.fsb:hover{background:orange;}.tbl{background:black;color:white;position:fixed;width:100%;max-height:200px;font-size:20px;font-weight:900;bottom:0px;overflow-y:scroll;}.tal{width:100%;background:white;color:black;height:200px;}.stb{background:black;color:white;border-radius:5px;font-weight:900;width:30%;text-align:center;}.stb:hover{background:white;color:red;}.inp{position:fixed;top:0px;width:100%;height:auto;}`;
   document.head.appendChild(st);
   dv=document.createElement('div');
   dv.className='cco';
   dv.innerHTML=`<div class="fsb"></div>
    <div class="inp">
        <textarea class="tal"></textarea>
        <br><div class="stb">Start</div>
    </div>
    <div class="tbl"></div>`;
   document.body.appendChild(dv);
   mc=dv;
   mdv=document.querySelector('.fsb');
   mdv.addEventListener('click',run);
   sta=document.querySelector('.stb');
   nlg=document.querySelector('.tbl');
   sta.addEventListener('click',Allg);
   alert("ready!!!!!");
}
