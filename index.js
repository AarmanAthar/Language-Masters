document.getElementById('wordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const word = document.getElementById('word').value;
    const meaning = document.getElementById('meaning').value;

    // Store the data in localStorage
    const newRow = { word, meaning };
    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];
    rows.push(newRow);
    localStorage.setItem('tableRows', JSON.stringify(rows));

    // Clear the form
    document.getElementById('wordForm').reset();

    alert('Row added! Open table.html to see the updated table.');
});