document
    .querySelector("Select['name = estado']")
    .addEventListener('change', function (event) {
        console.log(event.target.value)
    })