function sendMail(contactForm) {
    emailjs.send("service_8spcp76", "Rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
        function (error) {
                console.log("Failed", error);
            });
    return false;
};
