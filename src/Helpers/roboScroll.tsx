export const roboScroll = (isDragging = false) => {
    const roboList: HTMLElement | null = document.querySelector('.robolist');
    if (roboList === null) {
        return;
    }
    if (roboList !== null) {
        let currentX;
        let initialX: number;
        let xOffset = 0;

        roboList.addEventListener('mousedown', (e: any) => {
            initialX = e.clientX - xOffset;
            isDragging = true;
        });

        roboList.addEventListener('mouseup', () => {
            isDragging = false;
        });

        roboList.addEventListener('mousemove', (e: any) => {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                xOffset = currentX;
                roboList.style.transform = `translateX(${currentX}px)`;
                roboList.style.cursor = 'grabbing';
            }
            if (!isDragging) {
                roboList.style.cursor = 'grab';
            }
        });
    }
};
