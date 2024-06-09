document.getElementById('telechargerButton').addEventListener('click', function() {
    const dataList = JSON.parse(localStorage.getItem('dataList')) || []; // Retrieve stored data

    if (dataList.length > 0) {


        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Set font type and size
        doc.setFont('helvetica');
        doc.setFontSize(18);

        // Add title
        doc.text('Custom PDF Template', 105, 20, { align: 'center' });

        // Set font size for the content
        doc.setFontSize(12);

        // Add content
        var content = [
        'This is a custom PDF template created using jsPDF.',
        'You can add paragraphs, images, tables, etc., to customize it further.'
        ];

        // Add text content
        doc.text(content, 10, 30);

        // Save the PDF
        doc.save('custom-pdf-template.pdf');




        // const { jsPDF } = window.jspdf;
        // const doc = new jsPDF();
        // doc.text("Table Data", 14, 16);
        // doc.autoTable({
        //     head: [['Nom & Prénom', 'CIN', 'Date', 'Heure', 'Observations']],
        //     body: dataList.map(item => [item.name, item.cin, item.date, item.time, item.observations])
        // });
        // doc.save('table_data.pdf');
    } else {
        alert("No data available to download.");
    }
});
document.getElementById('clearTable').addEventListener('click', function() {
    console.log("Clearing the table and local storage."); // Debugging statement
    localStorage.removeItem('dataList');
    const dataTableBody = document.getElementById('dataTableBody');
    dataTableBody.innerHTML = ''; // Clearing the table


    if (dataList.length > 0) {
        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Set font type and size
        doc.setFont('helvetica');
        doc.setFontSize(18);

        // Add title
        doc.text('Custom PDF Template', 105, 20, { align: 'center' });

        // Set font size for the content
        doc.setFontSize(12);

        // Add introductory text
        doc.text('Suite à votre message n "300 du 23/04/2024 concernant la situation des registres (Dossiers déposés) stop.', 10, 30);
        doc.text('Honneur vous rendre compte les renseignements demandé du 06/05/2024 stop à savoir stop.', 10, 40);

        // Add table data
        doc.autoTable({
            head: [['Nom & Prénom', 'CIN', 'Date', 'Heure', 'Observations']],
            body: dataList.map(item => [item.name, item.cin, item.date, item.time, item.observations]),
            startY: 50 // Starting y position for the table
        });

        // Save the PDF
        doc.save('ANNEX 4 OULED EL HAJ.pdf');
    } else {
        alert("No data available to download.");
    }
});

document.getElementById('clearTable').addEventListener('click', function() {
    console.log("Clearing the table and local storage."); // Debugging statement
    localStorage.removeItem('dataList');
    const dataTableBody = document.getElementById('dataTableBody');
    dataTableBody.innerHTML = ''; // Clearing the table
});
