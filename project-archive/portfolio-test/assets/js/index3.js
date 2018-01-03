$(document).ready(function() {


// Add jQuery here


        function hasClass(el, cls) {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }

        function accordianLink(link) {
        if (link.nextElementSibling.getAttribute('data-status') == 'open') {
        closeAccordian(link.nextElementSibling);
        } else {
        if (closeOpenAccordian()) {
        setTimeout(function() {
          openAccordian(link);
          if (link.getAttribute('data-link') === 'info') document.getElementById('email').style.display = 'block';
        }, 320);
        } else {
        openAccordian(link);
        if (link.getAttribute('data-link') === 'info') document.getElementById('email').style.display = 'block';
        }
        }
        }

        function closeOpenAccordian() {
        if (document.querySelector('.content[data-status="open"]')) {
        closeAccordian(document.querySelector('.content[data-status="open"]'));
        return true;
        } else {
        return false;
        }
        }

        function closeAccordian(el) {
        if (document.querySelector('.content[data-status="open"]').previousElementSibling.getAttribute('data-link') === 'info') document.getElementById('email').style.display = 'none';
        $('.content[data-status="open"]').animate({
        height: 0
        }, 260);
        var currentVideos = document.querySelectorAll('.content[data-status="open"] video');
        el.setAttribute('data-status', '');
        setTimeout(function() {
        for (var i = 0; i < currentVideos.length; i += 1) {
        if (!currentVideos[i].paused) {
          currentVideos[i].pause();
          currentVideos[i].currentTime = 0;
        }
        }
        }, 260);
        }

        function calcHeightbyChildren(el) {
        var contents = el.children;
        var height = 0;
        for (var c = 0; c < contents.length; c += 1) {
        height += contents[c].offsetHeight;
        }
        return height;
        }

        function setScrollToItem() {
        setTimeout(function() {
        $("html, body").animate({ scrollTop: $('.content[data-status="open"]').prev().parent().position().top + 1}, 280);
        }, 180);
        }

        function openAccordian(link) {
        link.nextElementSibling.setAttribute('data-status', 'open');
        var height = calcHeightbyChildren(link.nextElementSibling);
        loadMedia();
        $('.content[data-status="open"]').animate({ height: height }, 260);
        var videos = document.querySelectorAll('.content[data-status="open"] video');
        setScrollToItem();
        setTimeout(function() {
        for (var i = 0; i < videos.length; i += 1) {
        // If video already loaded
        if (videos[i].getAttribute('src') !== null) {
          if (videos[i].paused) {
            videos[i].play();
          }
        }
        }

        }, 260);
        }

        function loadMedia() {
        loadImages();
        loadVideos();
        }

        function loadVideos() {
        var videos = document.querySelectorAll('.content[data-status="open"] video');
        for (var i = 0; i < videos.length; i += 1) {
        if (videos[i].getAttribute('src') === null) {
        videos[i].setAttribute('src', videos[i].getAttribute('data-src'));
        videos[i].load();
        videos[i].play();
        }
        }
        }

        function loadImages() {
        var images = document.querySelectorAll('.content[data-status="open"] img');
        for (var i = 0; i < images.length; i += 1) {
        lazyLoadImage(images[i]);
        }
        }

        function getActiveImage(images) {
        for (var i = 0; i < images.length; i += 1) {
        if (hasClass(images[i], 'active')) {
        return {
          el: images[i],
          index: i
        }
        }
        }
        }

        function nextImageClick(link) {
        var group = link.parentElement.children[2];
        if (group.children.length > 1) {
        var activeImage = getActiveImage(group.children);
        if (activeImage.index < group.children.length - 1) {
        activeImage.el.classList.remove('active');
        activeImage.el.nextElementSibling.classList.add('active');
        link.parentElement.nextElementSibling.innerHTML = (activeImage.index + 2) + '/' + group.children.length;
        } else {
        activeImage.el.classList.remove('active');
        group.children[0].classList.add('active');
        link.parentElement.nextElementSibling.innerHTML = '1/' + group.children.length;
        }
        }
        }

        function prevImageClick(link) {
        var group = link.parentElement.children[2];
        if (group.children.length > 1) {
        var activeImage = getActiveImage(group.children);
        if (activeImage.index == 0) {
        activeImage.el.classList.remove('active');
        group.children[group.children.length - 1].classList.add('active');
        link.parentElement.nextElementSibling.innerHTML = group.children.length + '/' + group.children.length;
        } else {
        activeImage.el.classList.remove('active');
        activeImage.el.previousElementSibling.classList.add('active');
        link.parentElement.nextElementSibling.innerHTML = (activeImage.index) + '/' + group.children.length;
        }
        }
        }

        var imageGroups = document.querySelectorAll('.nextImage');
        for (var i = 0; i < imageGroups.length; i += 1) {
        imageGroups[i].addEventListener('click', function(e) {
        nextImageClick(this);
        });
        }

        var imageGroups = document.querySelectorAll('.prevImage');
        for (var i = 0; i < imageGroups.length; i += 1) {
        imageGroups[i].addEventListener('click', function(e) {
        prevImageClick(this);
        });
        }

        var workLinks = document.querySelectorAll('h1.link');
        for (var l = 0; l < workLinks.length; l += 1) {
        workLinks[l].addEventListener('click', function(e) {
        accordianLink(this);
        }.bind(workLinks[l]));
        }

        var vimeos = document.querySelectorAll('.vimeo');
        for (var v = 0; v < vimeos.length; v += 1) {
        console.log(vimeos[v]);
        //vimeos[v].style.height = parseInt(vimeos[v].clientWidth * (9 / 16)) + 'px';
        }

        var videos = document.querySelectorAll('video');
        for (var v = 0; v < videos.length; v += 1) {
        videos[v].addEventListener('click', function(e) {
        if (this.paused) {
        this.play();
        } else {
        this.pause();
        }
        });
        }









        function lazyLoadImage(img) {
        if (img.getAttribute('data-src') !== null) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
        }
        }

        function loadInitialMedia() {
        var sectionImages = document.querySelectorAll('article img.active');
        for (var i = 0; i < sectionImages.length; i += 1) {
        lazyLoadImage(sectionImages[i]);
        }
        var sectionImages = document.querySelectorAll('img.init-load');
        for (var i = 0; i < sectionImages.length; i += 1) {
        lazyLoadImage(sectionImages[i]);
        }
        }

        loadInitialMedia();

























  });
