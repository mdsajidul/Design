document.getElementById('downloadBtn').addEventListener('click', function () {
    const frontCard = document.getElementById('businessCardFront');
    const backCard = document.getElementById('businessCardBack');
    
    html2canvas(frontCard, { scale: 2 }).then(function (canvas) { // scale: 2 to ensure high-quality PNG
        canvas.toBlob(function (blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'business_card_front.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 'image/png'); // specify PNG format
    });

    html2canvas(backCard, { scale: 2 }).then(function (canvas) {
        canvas.toBlob(function (blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'business_card_back.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 'image/png');
    });
});
