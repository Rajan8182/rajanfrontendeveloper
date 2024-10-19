const records = [
    { name: 'Pillow', description: 'Sleeping well is important.', price: '$8.99', category: 'Personal' },
    { name: 'Earphone', description: 'You need this one if you love music.', price: '$9.00', category: 'Personal' },
    { name: 'Mouse', description: 'Very useful if you love your computer.', price: '$11.35', category: 'Personal' },
    { name: 'Trash Can', description: 'It will help you maintain cleanliness.', price: '$3.95', category: 'Sports' },
    { name: 'Eye Glasses', description: 'It will make you read better.', price: '$6.00', category: 'Sports' }
];

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#recordTable tbody');
    
    // Populate the table with data
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td data-label="Name">${record.name}</td>
            <td data-label="Description">${record.description}</td>
            <td data-label="Price">${record.price}</td>
            <td data-label="Category">${record.category}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Handle delete button
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const row = e.target.closest('tr');
            tbody.removeChild(row);
        }
    });
    
    // Handle search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = tbody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const nameCell = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            row.style.display = nameCell.includes(filter) ? '' : 'none';
        });
    });
});
