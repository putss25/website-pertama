function showSurprise() {
    const surpriseContainer = document.getElementById("surprise-container");
    surpriseContainer.style.display = "block";

    // Menyembunyikan tombol setelah diklik
    const surpriseButton = document.getElementById("surprise-button");
    surpriseButton.style.display = "none";
    
    // Mengubah pesan ulang tahun untuk menyertakan nama Windi
    const birthdayMessage = document.getElementById("birthday-message");
    birthdayMessage.innerText = "Selamat Ulang Tahun yang ke-18, Windi!";

    // Memulai animasi confetti
    generateConfetti();

    // Menjalankan ulang animasi fadeIn untuk kue dan pesan
    const cake = document.getElementById("cake");
    const wishMessage = document.getElementById("wish-message");
    
    cake.style.animation = "fadeIn 1.5s ease forwards";
    wishMessage.style.animation = "fadeIn 2s ease forwards";

    // Putaran 3D pada kue
    cake.style.transform = "rotateY(360deg)";
}

function generateConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Memberikan posisi dan warna acak
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        
        confettiContainer.appendChild(confetti);

        // Waktu jatuh dan ukuran confetti acak
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 30 + 10 + 'px';
    }
}

// Fungsi untuk mendapatkan warna acak untuk confetti
function getRandomColor() {
    const colors = ['#ff6699', '#ff3366', '#ffd700', '#00ccff', '#66ff66'];
    return colors[Math.floor(Math.random() * colors.length)];
}
