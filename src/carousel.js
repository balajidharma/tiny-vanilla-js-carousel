export default class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.items = Array.from(this.track.children);
        this.prevButton = container.querySelector('.prev');
        this.nextButton = container.querySelector('.next');
        this.currentIndex = 0;
        this.itemWidth = this.items[0].offsetWidth;
        this.totalItems = this.items.length;

        this.prevButton.addEventListener('click', () => this.move('prev'));
        this.nextButton.addEventListener('click', () => this.move('next'));

        this.update();
    }

    move(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        }
        this.update();
    }

    update() {
        this.track.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
    }
}
