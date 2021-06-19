$(document).ready(function() {


  class Header extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `


  <div class="header-content__container">

    <div class="flex-item--left header-item--left">
      <a class="nav-link nav-link--home" href="./index.html">Helena Dong</a>
    </div>

    <div class="flex-item--right header-item--right">
      <span class="nav-link nav-link--work mobile-nav-link">Work</span>
      <a class="nav-link nav-link--exhibitions" href="./filter.html">Index</a>
      <a class="nav-link nav-link--about" href="./about.html">About</a>
    </div>

  </div>

  <div class='slider'>
    <ul class="slide__container">
      <li class="slide-item" >
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>

    </ul>
  </div>


  <div class="popup__container--work-nav">
    <div class="flex-item--left work-item--left">
        <span class="nav-link nav-link--close">Close X</span><br><br><br>
        <!-- <span class="up--title">Work</span> <br><br><br> -->
        <span class="up--title work-category">Selected Client Projects</span><br><br>
        <a class="side-nav-item__link" href="./project-test.html">Chalayan / Archives</a><br>
        <a class="side-nav-item__link" href="./project-test.html">Commission / Home Office System</a><br>
        <a class="side-nav-item__link" href="./project-test.html">Florist New York / Blossoms</a><br>
        <a class="side-nav-item__link" href="./project-test.html">Idyl / Earrings</a><br>
        <a class="side-nav-item__link" href="./project-test.html">YAY!</a><br>
    </div>

    <!-- <div class="flex-item--right work-item--right">
      <span class="nav-link nav-link--close">Close X</span>
    </div> -->

  </div>



  `;
  }
  }


  customElements.define('main-header', Header);









  class Sidebar extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `

        <div class="side-nav-item__container">
          <div class="spacer">
            <span class="up--title large">Work</span> <br><br><br>
            <span class="up--title work-category">Selected Client Projects</span><br><br>
            <a class="side-nav-item__link" href="./project-test.html">Chalayan / Archives</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Commission / Home Office System</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Florist New York / Blossoms</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Idyl / Earrings</a><br>
            <a class="side-nav-item__link" href="./project-test.html">YAY!</a><br>
          </div>
        </div>

  `;
  }
  }


  customElements.define('sidebar-content', Sidebar);








  // MOBILE WORK NAV POPUP

  $('.nav-link--work').click(function() {
      $('.header-content__container').addClass('hide');
      $('.slider').addClass('hide');
      $('.main-content__container').addClass('hide');
      $('.popup__container--work-nav').addClass('show');
      $('body').addClass('bg-color-change');

  });

  $('.nav-link--close').click(function() {
      $('.popup__container--work-nav').removeClass('show');
      $('.header-content__container').removeClass('hide');
      $('.slider').removeClass('hide');
      $('.main-content__container').removeClass('hide');
      $('body').removeClass('bg-color-change');
  });




});
