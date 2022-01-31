<template>
  <footer>
    <div class="container footer">
      <div class="row">
        <div class="col-md-4 col-sm-6 mt-sm-5">
          <img :src="logoDefault" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          </p>
          <div class="footer__rrss">
            <a href=""><i class="fa fa-facebook-f"></i></a>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-skype"></i></a>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 mt-sm-5">
          <p>Pages</p>
          <ul>
            <li>About</li>
            <li>Episode</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6 mt-sm-5">
          <p>Recent Episode</p>
          <ul>
            <li>Episode 1</li>
            <li>Episode 2</li>
            <li>Episode 3</li>
            <li>Episode 4</li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 mt-sm-5">
            <p>Listen My Podcast Also in</p>
            <Platform />
        </div>
      </div>
    </div>
    <div class="container copyright mt-sm-5">
        <p>@ 2022 NicaSource. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>

import Platform from "@/components/Platform";
import logoDefault from "@/assets/img/logo.png";
export default {
  name: "Footer",
  components: {Platform},
  data(){
      return{
          logoDefault
      }
  }
};
</script>

<style></style>
