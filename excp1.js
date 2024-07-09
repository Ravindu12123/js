async function run() {
    var getUrl = window.location;
    var ho = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log(ho);
    tgg=document.cookie.split(";");
    tgf=tgg.find(er=>er.includes("tp"));
    tgp=tgf.split("=")[1];
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
