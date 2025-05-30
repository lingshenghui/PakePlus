 let currentSlide = 0; // 当前显示的轮播图索引

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        
        // 隐藏所有轮播图
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // 显示指定索引的轮播图
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3; // 假设有3张轮播图
        showSlide(currentSlide);
    }
 
    function prevSlide() {
        currentSlide = (currentSlide - 1 + 3) % 3; // 假设有3张轮播图
        showSlide(currentSlide);
    }

    function autoSlide() {
        nextSlide();
    }

    // 设置定时器，每隔一定时间自动切换轮播图
    setInterval(autoSlide, 2000); // 3000毫秒（3秒）切换一次

    // 初始化显示第一张轮播图
    showSlide(currentSlide);
