function searchGig() {
    const searchQuery = document.getElementById('search').value;
    if (searchQuery) {
        alert(`You searched for "${searchQuery}".`);
    } else {
        alert('Please enter something to search.');
    }
}

function viewService(service) {
    alert(`You want to view details for the "${service}" service.`);
}
