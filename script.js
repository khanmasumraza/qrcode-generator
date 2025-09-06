const inpBut=document.getElementById("inp");
const butInp=document.getElementById("but");
const qrImage=document.getElementById("qr");


butInp.addEventListener("click",function(){
 let check=inpBut.value.trim();

 if(check===""){
    alert("Please enter url")
 }
 else{
    qrImage.innerHTML="";

    new QRCode(qrImage,{
        text:check,
        width:150,
        height:150,
        colorDark:"#000",
        colorLight:"#fff",
    })
    inpBut.value="";
 }
})