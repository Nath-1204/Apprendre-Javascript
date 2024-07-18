// JavaScript source code
var button_code_bar = document.getElementById('button_code_bar');
var text = document.getElementById('text');
var box = document.getElementById('box');
var pdf_box = document.getElementById('pdf_box');

button_code_bar.onclick = function () {
    if (text.value.length > 0) {
        if (text.value.length < 50) {
            //g�n�rer le code-barrres
            box.innerHTML = "<svg id='barcode'></svg>";
            JsBarcode("#barcode", text.value);
            box.style.border = "1px solid #999";

            //cr�er un button pour t�l�charger le code bar
            pdf_box.innerHTML = "<button onclick='genererPDF()'>T�l�charger le code bar</button>"

            //styliser le bo�te du boutton pdf
            pdf_box.style.marginTop = "10px";
            pdf_box.style.display = "flex";

        } else {
            box.style.border = "0";
            box.innerHTML = "<p class='error'>Le texte est trop long ! </p>";
            pdf_box.style.display = "none";
        }
    } else {
        box.style.border = "0";
        box.innerHTML = "<p class='error'>Remplissez le champ! </p>";
        pdf_box.style.display = "none";
    }
}

//generer le pdf
/*
function genererPDF() {
    var opt = {
        margin: 1,
        filename: ${ text.value }.pdf,
        image: { type: 'jpeg', quality: 0.98},
        html2Canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a6', orientation: '1' };
    };

//New Promise-based usage
html2pdf().set(opt).from(box).save();

//Did monolithic-style usage;
html2pdf(box, opt);
*/