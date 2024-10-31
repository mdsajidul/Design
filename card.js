function updateCard() {
    const name = document.getElementById("name").value.trim();
    const title = document.getElementById("title").value.trim();
    const company = document.getElementById("company").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const website = document.getElementById("website").value.trim();
    const description = document.getElementById("description").value.trim();

    // Update the card fields with current input values or remove them if empty
    document.getElementById("cardName").textContent = name || ""; // Remove text if empty
    document.getElementById("cardTitle").textContent = title || ""; // Remove text if empty
    document.getElementById("cardCompany").textContent = company || ""; // Remove text if empty
    document.getElementById("cardEmailAddress").textContent = email || ""; // Remove text if empty
    document.getElementById("cardPhoneNumber").textContent = phone || ""; // Remove text if empty
    document.getElementById("cardWebsiteLink").textContent = website || ""; // Remove text if empty
    document.getElementById("cardDescription").textContent = description || ""; // Remove text if empty
}

function downloadCard() {
    const cardElement = document.querySelector('.business-cards-container');
    html2canvas(cardElement, {
        scale: 2, // Increase scale for better quality
        backgroundColor: null, // Preserve transparent background
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'business_card.png';
        link.click();
    });
}
