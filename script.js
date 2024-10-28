document.getElementById('downloadBtn').addEventListener('click', function () {
    const frontCard = document.getElementById('businessCardFront');
    const backCard = document.getElementById('businessCardBack');

    html2canvas(frontCard).then(function (canvas) {
        const frontImage = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = frontImage;
        link.download = 'business_card_front.png';
        document.body.appendChild(link); // Append link to body
        link.click();
        document.body.removeChild(link); // Remove link after download
    });

    html2canvas(backCard).then(function (canvas) {
        const backImage = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = backImage;
        link.download = 'business_card_back.png';
        document.body.appendChild(link); // Append link to body
        link.click();
        document.body.removeChild(link); // Remove link after download
    });
});
