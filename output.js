document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('table tbody');
    const rows = JSON.parse(localStorage.getItem('tableRows')) || [];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        const wordTd = document.createElement('td');
        const meaningTd = document.createElement('td');

        wordTd.textContent = row.word;
        meaningTd.textContent = row.meaning;

        tr.appendChild(wordTd);
        tr.appendChild(meaningTd);
        tableBody.appendChild(tr);
    });
});

function update() {
    const word = document.getElementById("word").value;
    const meaning = document.getElementById("meaning").value;

    const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow(); // Create a new row

    const wordCell = newRow.insertCell(0); // First cell
    const meaningCell = newRow.insertCell(1); // Second cell

    wordCell.innerText = word;
    meaningCell.innerText = meaning;
}