// البحث
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert('بحث عن: ' + query);
                // هنا يمكن إضافة البحث الحقيقي
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
    
    // تبديل القائمة في الهاتف
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // تحميل بيانات من API (مثال)
    function loadLatestChapters() {
        // هنا يمكن إضافة API حقيقي
        console.log('تحميل أحدث الفصول...');
    }
    
    loadLatestChapters();
});