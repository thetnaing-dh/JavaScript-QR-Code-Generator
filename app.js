let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

let generateQR = () => { 
    if(qrText.value.length > 0){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")
        qrText.value = ""
    } else{
        alert ("Please input Text or URL.")
        imgBox.classList.remove("show-img")
        qrImage.src = ""
    }   
}