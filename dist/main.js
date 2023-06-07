let elementSubmit = document.getElementById("sendValues");
elementSubmit.addEventListener("onClick", submitData);

function submitData() {

    console.log(elementSubmit.options[elementSubmit.selectedIndex].value)
}