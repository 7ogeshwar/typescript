

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');

    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const nameInput = document.getElementById('name') as HTMLInputElement;
            const rollNoInput = document.getElementById('rno') as HTMLInputElement;
            const outputDiv = document.getElementById('output');

            // Check if all required elements exist
            if (nameInput && rollNoInput && outputDiv) {
                const name = nameInput.value;
                const rollNo = rollNoInput.value;

                // Update output in the outputDiv
                outputDiv.innerHTML = `<p>Name: ${name}</p><p>Roll No: ${rollNo}</p>`;
            } else {
                console.error('Required elements not found.');
            }
        });
    } else {
        console.error('Submit button not found.');
    }
});


