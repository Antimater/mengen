let elementSubmit = document.getElementById("sendValues");
elementSubmit.addEventListener("click", submitData);
function submitData() {
    let selectedProduct = document.getElementById("selectProduct").value;
    let inputAmount = document.getElementById("inputMenge").value;
    let inputPassword = document.getElementById("inputPassword").value;
    console.log(selectedProduct);
    console.log(inputAmount);
    console.log(inputPassword);
}