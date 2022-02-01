# Nicasource Podcast

This is a recruitment project for NicaSouce, it is a project where in an application made with the  [VUE](https://vuejs.org/)  Framework we consume an api with [WordPress](https://wordpress.org/)

It was developed by [Alexander Sanchez](https://www.linkedin.com/in/alexandersr92/) 

### Installation

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a API at https://github.com/alexandersr92/NicaSource_backend.git
2. Clone the repo
   ```sh
   git clone https://github.com/alexandersr92/nicasource_front
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `src/storage/index.js`
   ```js
   const DOMAIN = "ENTER YOUR API URL";
   ```
5. Enter your API in `src/storage/API.js`
   ```js
    const form_id = ENTER YOU FROM ID // This is for Contact Form 7 Plugin;
    const DOMAIN = "ENTER YOUR API URL";
    const url = `${const DOMAIN}wp-json/contact-form-7/v1/contact-forms/${form_id}/feedback`;
   ```
6. Compiles and minifies for production
   ```sh
  npm run build
   ```
  ### Public Example
  
  You can see a publis site here
  
http://nicasource-podcast.online/