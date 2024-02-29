// scroll sections
let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const form = document.querySelector('form');
const fullName =document.getElementById("name");
const email =document.getElementById("email");
const subject =document.getElementById("subject");
const message =document.getElementById("message");


function sendEmail(event) {
    event.preventDefault();
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "elifffbaserrr@gmail.com",
        Password: "195D9955B8419DE083C9488FBE03552246D5",
        To: 'elifffbaserrr@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    ).catch(
        error => console.error("Error sending email:", error)
    );
}



fullName.value = '';
email.value = '';
message.value = '';
subject.value = '';

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    sendEmail();
})

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}




let sections= document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
 

            });    
            
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }        
        // animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');

        }
});


    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');

    

}
