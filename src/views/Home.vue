<template>
<div class="home"  >
  <navbar-component />
  <!-- Welcome Area-->
  <heropage-component />
  <!-- Welcome Area-->
   <div class="container section-padding-120-70">
        <div class="row justify-content-center pt-8">
          <div class="col-12 col-lg-10">
            <div class="section-heading text-center">
              <h2>Enjoy free coupons from Udemy, Get access to the Github student developer pack, Network with industry players, and much more.</h2>
              <a class="btn radix-btn white-btn mt-3 primary-color" href="#">Join Us</a>
            </div>
          </div>
        </div>
      </div>
  <!-- About Area-->
    <section class="about-area about2 section-padding-70">
      <div class="container">
        <P></P>
        <div class="row align-items-center justify-content-md-center justify-content-lg-between">
          <!-- About Thumbnail Area-->
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="aboutUs-thumbnail mt-120 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms"><img class="w-100" src="img/event/team-1.JPG" alt=""></div>
          </div>
          <!-- About Us Content Area-->
          <div class="col-12 col-md-8 col-lg-6">
            <div class="aboutUs-content mt-120 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1000ms">
              <div class="section-heading mb-5">
                <h6>Developer Student Clubs, Landmark University</h6>
                <h2>We Focus On Growth And Innovations.</h2>
                <p>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
              </div>
              <p>LMUCON is an annual event to showcase different knowledge and skills around the world to the student developers all over Nigerian universities, we aim to bring different technological exposure and opportunities  to the student developer communities in Nigeria.</p><router-link :to="{name:'Schedule' }" class="btn radix-btn mt-5 primary-color">Discover More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features Area-->

    <div class="our-partner-area section-padding-0-120 partner2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center text-4xl text-semibold py-4 primary-text">Our Sponsors</p>
            <div class="our-partner-slides">
              <carousel :autoplay="true" :nav="false">
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/1.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/2.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/3.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/4.svg" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/5.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/6.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/1.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/2.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/3.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/4.png" alt=""></div>
              <div class="single-partner"><img class="h-6 w-6 md:h-12 md:w-12" src="/img/partner-img/5.png" alt=""></div>
              <div class="single-partner"><img src="/img/partner-img/6.png" alt=""></div>
            </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent'
import HeropageComponent from '@/components/HeropageComponent'

export default {
  name: 'Home',
  components: { NavbarComponent, HeropageComponent },
  data () {
    return {
      componentKey: 0
    }
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
      this.$forceUpdate()
    }
  },
  created () {
    this.forceRerender()
  }
}
</script>
<style lang="scss">
.owl-carousel .owl-item img {
    width: auto !important;
    margin: auto !important;
  }
</style>
