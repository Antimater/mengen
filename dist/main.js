let elementSubmit = document.getElementById("selectProduct");
elementSubmit.addEventListener("onClick", submitData);

function submitData() {

    console.log(elementSubmit.options[elementSubmit.selectedIndex].value)
}