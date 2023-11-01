import React from "react";
import Navbar from "../../component/Navbar";

const Profil = () => {
  return (
    <div>
      <Navbar />

      <div class="preloader" id="preloader">
        <div class="preloader-inner">
          <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>
        </div>
      </div>

      <div class="td-search-popup" id="td-search-popup">
        <form action="index.html" class="search-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search....." />
          </div>
          <button type="submit" class="submit-btn">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div class="body-overlay" id="body-overlay"></div>

      <div class="navbar-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <ul class="topbar-right text-md-start text-center">
                <li class="d-none d-none d-lg-inline-block">
                  <p>
                    <i class="far fa-clock"></i> Opening Hour 9:00am - 10:00pm
                  </p>
                </li>
                <li>
                  <p>
                    <i class="far fa-envelope"></i> exam@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="topbar-right text-md-end text-center">
                <li class="d-none d-none d-lg-inline-block">
                  <p>
                    Hot Line: <span>(+00)-333-444-5555</span>
                  </p>
                </li>
                <li class="social-area">
                  <p class="d-inline-block">Follow Us On:</p>
                  <a href="#">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-area navbar-area-1 navbar-expand-lg">
        <div class="container nav-container navbar-bg">
          <div class="responsive-mobile-menu">
            <button
              class="menu toggle-btn d-block d-lg-none"
              data-target="#Iitechie_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-left"></span>
              <span class="icon-right"></span>
            </button>
          </div>
          <div class="logo">
            <a href="index.html">
              <img src="assets/img/logo.webp" alt="img" />
            </a>
          </div>
          <div class="nav-right-part nav-right-part-mobile">
            <a class="search-bar-btn" href="#">
              <i class="fa fa-search"></i>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="Iitechie_main_menu">
            <ul class="navbar-nav menu-open text-lg-end">
              <li class="menu-item-has-children">
                <a href="/">Home</a>
                <ul class="sub-menu">
                  <li>
                    <a href="index.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 03</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 04</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 05</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Service</a>
                <ul class="sub-menu">
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Single</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Pages</a>
                <ul class="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="project.html">Project</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Blog</a>
                <ul class="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="nav-right-part nav-right-part-desktop align-self-center">
            <a class="search-bar-btn" href="#">
              <i class="fa fa-search"></i>
            </a>
            <a class="btn btn-base" href="#">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style="background-image: url('./assets/img/bg/1.webp');"
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 class="page-title">About Us</h2>
                <ul class="page-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-area pd-top-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-9">
              <div class="about-mask-bg-wrap about-mask-bg-wrap-1 mb-4 mb-lg-0">
                <img
                  class="shape-image-sm top_image_bounce"
                  src="assets/img/about/1sm.webp"
                  alt="img"
                />
                <img
                  class="shape-image"
                  src="assets/img/about/1s.webp"
                  alt="img"
                />
                <div class="thumb">
                  <img src="assets/img/about/1.webp" alt="img" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="section-title px-lg-5 mb-0">
                <h5 class="sub-title right-line">About US</h5>
                <h2 class="title">
                  We execute our ideas form the start to finish.
                </h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque sed imquam nunullam quis
                  ante. Etiam sit amet orci.
                </p>
                <p class="content-strong mt-3">
                  Duis leo. Sed fringilla mauris siamet nibh. odales sagittis
                  magna. Sed consequat
                </p>
                <div class="exp-wrap mt-3">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-exp-inner">
                        <h2>
                          <span class="counter">20</span> <sub>Y</sub>
                        </h2>
                        <h5>Experiences</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-exp-inner">
                        <h2>
                          <span class="counter">41</span> <sub>M</sub>
                        </h2>
                        <h5>Happy client</h5>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-exp-inner">
                        <h2>
                          <span class="counter">20</span> <sub>Y</sub>
                        </h2>
                        <h5>Experiences</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="why-choose pd-top-100 pd-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-9 order-lg-last">
              <div class="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
                <img
                  class="shape-image-sm top_image_bounce"
                  src="assets/img/about/2sm.webp"
                  alt="img"
                />
                <img
                  class="shape-image"
                  src="assets/img/about/2s.webp"
                  alt="img"
                />
                <div class="thumb">
                  <img src="assets/img/about/2.webp" alt="img" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-first align-self-center">
              <div class="section-title px-lg-5 mb-0">
                <h5 class="sub-title right-line">Why Choose Us</h5>
                <h2 class="title">
                  We execute our ideas form the start to finish.
                </h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus semgs semper
                  libero sit amet adipiscingem neque.
                </p>
                <div class="choose-wrap mt-4">
                  <div class="media single-choose-inner">
                    <div class="media-left">
                      <div class="icon">
                        <i class="icomoon-gear"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>Flexible Solutions</h4>
                      <p>
                        Maecenas tempus, tellus eget condime honcus sem quam
                        semper{" "}
                      </p>
                    </div>
                  </div>
                  <div class="media single-choose-inner">
                    <div class="media-left">
                      <div class="icon">
                        <i class="icomoon-time"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>24/7 Unlimited Support</h4>
                      <p>
                        Maecenas tempus, tellus eget condime honcus sem quam
                        semper{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="counter-area bg-overlay-black pd-top-115 pd-bottom-90"
        style="background-image: url('./assets/img/bg/7.webp');"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-title style-white">
                <h2 class="title">We Care About Your Important Things</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <a
                class="video-play-btn mb-5 mb-md-0 video-play-btn-base"
                href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                data-effect="mfp-zoom-in"
              >
                <i class="fa fa-play"></i>
              </a>
            </div>
            <div class="col-md">
              <div class="single-exp-inner style-white">
                <h2>
                  <span class="counter">20</span> <sub>Y</sub>
                </h2>
                <h5>Experiences</h5>
              </div>
            </div>
            <div class="col-md">
              <div class="single-exp-inner style-white">
                <h2>
                  <span class="counter">41</span> <sub>M</sub>
                </h2>
                <h5>Happy client</h5>
              </div>
            </div>
            <div class="col-md">
              <div class="single-exp-inner style-white">
                <h2>
                  <span class="counter">40</span> <sub>M</sub>
                </h2>
                <h5>Project done</h5>
              </div>
            </div>
            <div class="col-md">
              <div class="single-exp-inner style-white">
                <h2>
                  <span class="counter">41</span> <sub>M</sub>
                </h2>
                <h5>Our service area</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-area pd-top-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8 order-lg-last mb-4 mb-lg-0">
              <div class="faq-image-wrap">
                <div class="thumb">
                  <img src="assets/img/about/f1.webp" alt="img" />
                  <img
                    class="img-position-1"
                    src="assets/img/about/f2.webp"
                    alt="img"
                  />
                  <img
                    class="img-position-2 top_image_bounce"
                    src="assets/img/about/f3.webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 pe-xl-5 order-lg-first align-self-center">
              <div class="section-title mb-0">
                <h5 class="sub-title right-line">Faq</h5>
                <h2 class="title">Know more about our it solution</h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque
                </p>
              </div>
              <div class="accordion mt-4" id="accordionExample">
                <div class="accordion-item single-accordion-inner">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Why we are?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What we do for you?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
                <div class="accordion-item single-accordion-inner mb-0">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      100% data security
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Maecenas tempus, tellus eget condime honcus sem quam
                      semper libero sit amet adipiscingem neque sed ipsum.
                      amquam nunc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-area pd-top-115 pd-bottom-90">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Expert Team</h5>
                <h2 class="title">Meet with our expert</h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src="assets/img/team/1.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a href="team-details.html">Karshin Kumar</a>
                    </h4>
                    <p>Founder</p>
                  </div>
                </div>
                <div class="hover-details-wrap">
                  <div class="hover-details-inner">
                    <h4>
                      <a href="team-details.html">Karshin Kumar</a>
                    </h4>
                    <p>Founder</p>
                    <ul class="social-media mt-3">
                      <li>
                        <a class="facebook" href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="instagram" href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a class="youtube" href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src="assets/img/team/2.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a href="team-details.html">Macal Jonsons</a>
                    </h4>
                    <p>Director</p>
                  </div>
                </div>
                <div class="hover-details-wrap">
                  <div class="hover-details-inner">
                    <h4>
                      <a href="team-details.html">Macal Jonsons</a>
                    </h4>
                    <p>Director</p>
                    <ul class="social-media mt-3">
                      <li>
                        <a class="facebook" href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="instagram" href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a class="youtube" href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src="assets/img/team/3.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a href="team-details.html">Estoner William</a>
                    </h4>
                    <p>HR</p>
                  </div>
                </div>
                <div class="hover-details-wrap">
                  <div class="hover-details-inner">
                    <h4>
                      <a href="team-details.html">Estoner William</a>
                    </h4>
                    <p>HR</p>
                    <ul class="social-media mt-3">
                      <li>
                        <a class="facebook" href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="instagram" href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a class="youtube" href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-team-inner text-center">
                <div class="thumb">
                  <img src="assets/img/team/4.webp" alt="img" />
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>
                      <a href="team-details.html">Casses Tomas</a>
                    </h4>
                    <p>IT Maneger</p>
                  </div>
                </div>
                <div class="hover-details-wrap">
                  <div class="hover-details-inner">
                    <h4>
                      <a href="team-details.html">Casses Tomas</a>
                    </h4>
                    <p>IT Maneger</p>
                    <ul class="social-media mt-3">
                      <li>
                        <a class="facebook" href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="instagram" href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a class="youtube" href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-area bg-sky pd-top-115 pd-bottom-90">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">Client Feedback</h5>
                <h2 class="title">Check what’s our client say </h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial-slider-2 style-active-bg slider-control-round owl-carousel">
            <div class="item">
              <div class="single-testimonial-inner style-4">
                <img
                  class="shaddow-img"
                  src="assets/img/testimonial/02.webp"
                  alt="img"
                />
                <div class="details">
                  <p>
                    Duis leo. Sed fringilla maurisamet nibh. odales
                    sagittionsequat leo egetendum sodales augue nec
                    atpellentesque semper
                  </p>
                  <h4>Karshin Kumar</h4>
                  <span class="designation">Founder</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-testimonial-inner style-4">
                <img
                  class="shaddow-img"
                  src="assets/img/testimonial/02.webp"
                  alt="img"
                />
                <div class="details">
                  <p>
                    Duis leo. Sed fringilla maurisamet nibh. odales
                    sagittionsequat leo egetendum sodales augue nec
                    atpellentesque semper
                  </p>
                  <h4>Necola Amar</h4>
                  <span class="designation">HR</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-testimonial-inner style-4">
                <img
                  class="shaddow-img"
                  src="assets/img/testimonial/02.webp"
                  alt="img"
                />
                <div class="details">
                  <p>
                    Duis leo. Sed fringilla maurisamet nibh. odales
                    sagittionsequat leo egetendum sodales augue nec
                    atpellentesque semper
                  </p>
                  <h4>Forgan Arit</h4>
                  <span class="designation">Manager</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-testimonial-inner style-4">
                <img
                  class="shaddow-img"
                  src="assets/img/testimonial/02.webp"
                  alt="img"
                />
                <div class="details">
                  <p>
                    Duis leo. Sed fringilla maurisamet nibh. odales
                    sagittionsequat leo egetendum sodales augue nec
                    atpellentesque semper
                  </p>
                  <h4>Wilton Fork</h4>
                  <span class="designation">Co-Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-area bg-relative pd-top-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-5 mb-5 mb-lg-0">
              <div class="section-title mb-0">
                <h5 class="sub-title left-border">Professional Skill </h5>
                <h2 class="title">
                  Bringing new it business solutions and ideas{" "}
                </h2>
                <p class="content">
                  Maecenas tempus, tellus eget condime honcus sem quam semper
                  libero sit amet adipiscingem neque
                </p>
              </div>
              <div class="skill-progress-area mt-4">
                <div class="single-progressbar">
                  <h6>Web development</h6>
                  <div class="progress-item" id="progress-running">
                    <div class="progress-bg">
                      <div
                        id="progress"
                        class="progress-rate"
                        data-value="75"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="75">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>It solution</h6>
                  <div class="progress-item" id="progress-running-1">
                    <div class="progress-bg">
                      <div
                        id="progress-1"
                        class="progress-rate"
                        data-value="95"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="95">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>Web development</h6>
                  <div class="progress-item" id="progress-running-2">
                    <div class="progress-bg">
                      <div
                        id="progress-2"
                        class="progress-rate"
                        data-value="75"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="75">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-progressbar">
                  <h6>Data Research</h6>
                  <div class="progress-item mb-0" id="progress-running-3">
                    <div class="progress-bg">
                      <div
                        id="progress-3"
                        class="progress-rate"
                        data-value="60"
                      ></div>
                      <div class="progress-count-wrap">
                        <span class="progress-count counting" data-count="60">
                          0
                        </span>
                        <span class="counting-icons">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-lg-5">
              <div class="about-mask-bg-wrap about-mask-bg-wrap-1 mb-4 mb-lg-0">
                <img
                  class="shape-image-sm top_image_bounce"
                  src="assets/img/about/1sm.webp"
                  alt="img"
                />
                <img
                  class="shape-image"
                  src="assets/img/about/1s.webp"
                  alt="img"
                />
                <div class="thumb">
                  <img src="assets/img/about/6.webp" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-area pd-top-115 pd-bottom-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-10">
              <div class="section-title text-center">
                <h5 class="sub-title double-line">blog Post</h5>
                <h2 class="title">Read Our Latest Tips &Tricks</h2>
                <p class="content">
                  Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                  egestas augue atpellentesque laoreet
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-3">
                <div class="thumb">
                  <img src="assets/img/blog/5.webp" alt="img" />
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Stock Exchange Market Foreca 2021-2023
                    </a>
                  </h4>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-btn" href="blog-details.html">
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-3">
                <div class="thumb">
                  <img src="assets/img/blog/6.webp" alt="img" />
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Market Stock Exchange Foreca 2023-2023
                    </a>
                  </h4>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-btn" href="blog-details.html">
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-inner style-3">
                <div class="thumb">
                  <img src="assets/img/blog/7.webp" alt="img" />
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> 25 May 2021
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <h4>
                    <a href="blog-details.html">
                      Foreca Exchange Stock Market 2010-2023
                    </a>
                  </h4>
                  <p>
                    Duis leo. Sed fringilla mauris iamet nibh. odales sagittis
                    magonsequat letendum sodales augue velit
                  </p>
                  <a class="read-more-btn" href="blog-details.html">
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="call-to-action-area pd-top-120 pd-bottom-120 text-center bg-overlay-base"
        style="background-image: url('./assets/img/bg/5.webp');"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
              <div class="single-call-to-action-inner style-white">
                <h5>We are here to answer your questions 24/7</h5>
                <h2>Need for it solution services</h2>
                <a class="btn btn-black mt-3" href="contact.html">
                  Contact With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        class="footer-area bg-black bg-cover"
        style="background-image: url('./assets/img/bg/2.webp');"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title">About company</h4>
                <div class="details">
                  <p>Address</p>
                  <p>Melbourne’s GPO 434 VIC 3074, Australia.</p>
                  <ul class="social-media">
                    <li>
                      <a class="facebook" href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="twitter" href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="instagram" href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a class="youtube" href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Service</h4>
                <ul>
                  <li>
                    <a href="service.html">Web design</a>
                  </li>
                  <li>
                    <a href="service.html">Digital marketing </a>
                  </li>
                  <li>
                    <a href="service.html">It management</a>
                  </li>
                  <li>
                    <a href="service.html">Cloud services</a>
                  </li>
                  <li>
                    <a href="service.html">Machine learning</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Useful link</h4>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team </a>
                  </li>
                  <li>
                    <a href="project.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_subscribe">
                <h4 class="widget-title">Contact us</h4>
                <div class="single-input-inner style-border style-bg-none">
                  <input type="text" placeholder="Your Email" />

                  <button>
                    <i class="fa fa-arrow-right"></i>
                  </button>
                </div>
                <label>
                  <input type="checkbox" />
                  Maecenas tempususcondime honcus sem quam libero
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 align-self-center">
                <p>© 2023. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="back-to-top">
        <span class="back-top">
          <i class="fa fa-angle-up"></i>
        </span>
      </div>

      <div style={{ border: 5 + "px solid black", textAlign: "center" }}>
        <h1>OUR SERVICES</h1>
      </div>
    </div>
  );
};

export default Profil;
