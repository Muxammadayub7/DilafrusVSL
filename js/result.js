function playResultVideo(wrapper, url) {
    const card = wrapper.closest('.result__card');
    const video = wrapper.querySelector('.result__video');
    const playBtn = wrapper.querySelector('.result__play-btn');

    // Agar video hali yuklanmagan bo'lsa (src yo'q bo'lsa)
    if (!video.src || video.src === "") {
        video.src = url;
        video.load(); // Videoni majburan yuklash
    }

    // Yuklanish jarayonida play tugmasini aylantirib tursang ham bo'ladi
    card.classList.add('playing');
    
    // Video o'ynashga tayyor bo'lishini kutamiz
    video.play().catch(error => {
        console.error("Video yuklashda xato:", error);
        // Agar brauzer ovozli videoni avtomatik qo'ymasa, bezvuk qilib ko'ramiz
        video.muted = true;
        video.play();
    });

    video.controls = true;
}