<template>
  <section class="container newsletter slide-in-right">
    <h3>New Episodes Every Week!</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    <form v-on:submit.prevent="sendEmail" class="newsletter__form">
      <input id="email" type="email" v-model="email" />
      <button type="submit">Subscribe <i class="fa fa-arrow-right"></i></button>
    </form>
    <p class="newsletter__error">{{ this.errorMessage }}</p>
    <p class="newsletter__success">{{ this.messageOK.message }}</p>
  </section>
</template>

<script>
import api from "@/store/api.js";
export default {
  name: "NewsLetter",
  data() {
    return {
      email: "",
      errors: [],
      errorMessage: "",
      messageOK: "",
    };
  },
  methods: {
    sendEmail: function (e) {
      if (!this.email) {
        this.errors.push("Email is required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("The Email is invalid.");
      } else {
        api
          .sendEmail(this.email)
          .then((messageOK) =>(this.messageOK = messageOK))
            .catch((errorMessage) =>(this.errorMessage = errorMessage))
         
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();

      this.errorMessage = this.errors[0];
      this.errors = [];
    },

    validEmail(emailTest) {
      const regEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailTest.match(regEmail);
    },
  },
};
</script>
