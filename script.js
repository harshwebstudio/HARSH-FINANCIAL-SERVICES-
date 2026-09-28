// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Close menu after clicking a navigation link

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

        });

    });


// ================= ACCOUNT OPENING FORM =================

const accountForm =
    document.getElementById("accountForm");


accountForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const mobile =
            document
                .getElementById("mobile")
                .value
                .trim();


        // Check name

        if (name.length < 2) {

            alert("Please enter your name.");

            return;

        }


        // Check mobile number

        if (!/^[0-9]{10}$/.test(mobile)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;

        }


        // WhatsApp message

        const message =
            "Hello Sachin Sir,\n\n" +

            "I want to open an Angel One account " +
            "through Harsh Financial Services.\n\n" +

            "Name: " +
            name +
            "\n" +

            "Mobile: " +
            mobile;


        // Encode complete message

        const whatsappURL =
            "https://wa.me/917559449953?text=" +
            encodeURIComponent(message);


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank"
        );

    }
);
