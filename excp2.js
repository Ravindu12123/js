window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match){ return match[2]}else{return null;}
}
async function run() {
    var getUrl = window.location;
    var ho = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log(ho);
    tgp=await getCookie("tp");
    if(tgp==null){
        alert("tp not in cookies");
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
    }
}
