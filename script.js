window.addEventListener('scroll', function() {
    // Log the current scroll position
    console.log(window.scrollY);

    if (window.scrollY > 500) {
        console.log('You have scrolled more than 500 pixels');
        this.classList.toggle('active');
    }
  
});