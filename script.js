document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // 显示或隐藏“回到顶部”按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // 平滑滚动到顶部
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 统计链接点击次数
    const linkBlocks = document.querySelectorAll('.link-block');
    linkBlocks.forEach(link => {
        link.addEventListener('click', () => {
            const linkName = link.getAttribute('data-name');
            console.log(`${linkName} 链接被点击了`);
        });
    });
});