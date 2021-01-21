function sendFeedback(event) {
    event.preventDefault();
    var formData = event.srcElement;
  var thankYouHeader = document.getElementById("thankyouMessage").innerText="Tack för ditt meddelande!";
console.log(formData.name.value);
console.log(formData.email.value);
console.log(formData.message.value);
}