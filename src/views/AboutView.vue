<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue';

import PureCounter from '@srexi/purecounterjs';

onMounted(() => {
  new PureCounter();
});
</script>

<template>
  <br>
  <br>
  <br>
  <br>
   <!-- ======= About Us Section ======= -->
   <section id="about" class="px-10">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> We started with a simple idea: do what is best for the client. </li>
              <li><i class="ri-check-double-line"></i> Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
              <li><i class="ri-check-double-line"></i> Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <p>
              We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals. 
            </p>
            <RouterLink to="/services" class="btn-learn-more">Learn More</RouterLink>
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    
    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
      <div class="container">

        <div class="row">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="http://localhost:5173/src/assets/img/counts-img.svg" alt="" class="img-fluid">
          </div>

          <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="3835039" data-purecounter-duration="2" class="purecounter"></span>
                    <p><strong>Organic Reach</strong> (Global)</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="3" class="purecounter"></span>
                    <p><strong>Campaigns</strong></p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="14081" data-purecounter-duration="3" class="purecounter"></span>
                    <p><strong>Watch Hours</strong> (Asia) </p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="bi bi-globe"></i>
                    <span data-purecounter-start="0" data-purecounter-end="17" data-purecounter-duration="1" class="purecounter"><p>%</p></span>
                    <p><strong>Excellent CTR %</strong> (Asia)</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End Counts Section -->
    <footer id="footer">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="Copyright">
            &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
        </div>
        <div>
          <ul class=" d-flex list-unstyled">
            <li class="px-3"><a href="Terms%20and%20conditions.pdf">Terms and conditions</a></li>
            <li class="px-3"><a href="Refund%20policy.pdf">Refund policy</a></li>
            <li class="px-3"><a href="Privacy%20policy.pdf">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
