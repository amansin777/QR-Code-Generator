const input = document.getElementById("input");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBody = document.querySelector(".body");




let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    input.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}


downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});


function generateQRCode(){
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text:input.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}