document.addEventListener('DOMContentLoaded', function() {
    // التحكم في التكبير
    let zoomLevel = 1;
    const readerContent = document.getElementById('readerContent');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            if (zoomLevel < 2) {
                zoomLevel += 0.1;
                readerContent.style.transform = `scale(${zoomLevel})`;
            }
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            if (zoomLevel > 0.5) {
                zoomLevel -= 0.1;
                readerContent.style.transform = `scale(${zoomLevel})`;
            }
        });
    }
    
    // الوضع الليلي
    const darkModeBtn = document.getElementById('darkMode');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
    
    // الشاشة الكاملة
    const fullscreenBtn = document.getElementById('fullscreen');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        });
    }
    
    // التنقل بين الفصول
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevChapter = document.getElementById('prevChapter');
    const nextChapter = document.getElementById('nextChapter');
    const chapterSelect = document.getElementById('chapterSelect');
    
    function goToChapter(chapter) {
        window.location.href = `chapter.html?series=1&chapter=${chapter}`;
    }
    
    if (prevBtn) prevBtn.addEventListener('click', () => goToChapter(124));
    if (nextBtn) nextBtn.addEventListener('click', () => goToChapter(126));
    if (prevChapter) prevChapter.addEventListener('click', () => goToChapter(124));
    if (nextChapter) nextChapter.addEventListener('click', () => goToChapter(126));
    
    if (chapterSelect) {
        chapterSelect.addEventListener('change', function() {
            goToChapter(this.value);
        });
    }
    
    // التنقل بالسهمين
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            goToChapter(124); // السابق
        } else if (e.key === 'ArrowLeft') {
            goToChapter(126); // التالي
        }
    });
});