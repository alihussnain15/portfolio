document.querySelector('.icon1').addEventListener('click', function() {
    window.open('https://www.instagram.com/aly_husnain_15/', '_blank');
});

document.querySelector('.icon2').addEventListener('click', function() {
    window.open('https://www.facebook.com/virat.ali.372', '_blank');
});

document.querySelector('.icon3').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/ali-zulfiqar-7bb25a2a4/', '_blank');
});
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.querySelector(".responsive-btn1").addEventListener("click", function () {
    const cvUrl = "./my%20cv.pdf"; 
    window.open(cvUrl, "_blank"); 
});

document.getElementsByClassName("responsive2-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {  
        alert("Please fill out all fields!");
        return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`);
    const mailtoLink = `mailto:your_email@example.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});
