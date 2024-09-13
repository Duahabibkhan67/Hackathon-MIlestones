var togglebutton = document.getElementById("togglebutton");
var skillsdiv = document.getElementById("skills");
if (togglebutton && skillsdiv) {
    togglebutton.addEventListener('click', function () {
        if (skillsdiv.style.display === 'none') {
            skillsdiv.style.display = 'block';
            togglebutton.value = 'Hide Skills';
        }
        else {
            skillsdiv.style.display = 'none';
            togglebutton.value = 'Show Skills';
        }
    });
}
else {
    console.log("Required element not found in the DOM");
}
;
