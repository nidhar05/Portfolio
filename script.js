(function () {
    emailjs.init("p_IbG2vGhSMGt3l2P");
})();

function sendMail() {

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_5ozqx15", "template_d1zt74z", params)
        .then(function (res) {

            alert("Message sent successfully!");

        })
        .catch(function (error) {

            alert("Failed to send message");

        });

}