const form_id = 35;
const url = `http://api.nicasource-podcast.online/wp-json/contact-form-7/v1/contact-forms/${form_id}/feedback`;

const sendEmail = (email) =>
  new Promise((resolve, reject) => {
    var details = {
      "your-email": email,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export default {
  sendEmail,
};
