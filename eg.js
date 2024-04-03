document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            var nameInput = document.getElementById('name');
            var rollNoInput = document.getElementById('rno');
            var outputDiv = document.getElementById('output');
            // Check if all required elements exist
            if (nameInput && rollNoInput && outputDiv) {
                var name_1 = nameInput.value;
                var rollNo = rollNoInput.value;
                // Update output in the outputDiv
                outputDiv.innerHTML = "<p>Name: ".concat(name_1, "</p><p>Roll No: ").concat(rollNo, "</p>");
            }
            else {
                console.error('Required elements not found.');
            }
        });
    }
    else {
        console.error('Submit button not found.');
    }
});
