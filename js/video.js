function playMe(card, url) {
    const video = card.querySelector('.card-video');

    // 1. Boshqa ochiq videolarni yopish
    document.querySelectorAll('.video-card.playing').forEach(el => {
        el.classList.remove('playing');
        el.querySelector('video').pause();
    });

    // 2. Videoni yuklash va klass qo'shish
    if (!video.src || video.src === "") {
        video.src = url;
    }
    
    card.classList.add('playing');
    video.muted = false; // Ovozni yoqish
    video.controls = true; // To'xtatish tugmalari chiqishi uchun
    
    video.play().catch(err => {
        console.log("Video qo'yilmadi:", err);
        video.muted = true; // Brauzer bloklasa, bezvuk qo'yadi
        video.play();
    });
}

