document.querySelectorAll(".blog-post").forEach(function (post) {
    var readMore = post.querySelector(".read-more");
    var hiddenContent = post.querySelector(".hidden-content");

    readMore.addEventListener("click", function () {
            if (hiddenContent.style.display === "none") {
                hiddenContent.style.display = "block";
                readMore.innerText = "Read Less";
            } else {
                hiddenContent.style.display = "none";
                readMore.innerText = "Read More...";
            }
        });
    });
const form=document.querySelector('form');
const firstName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');
const email=document.getElementById('email');
const sub=document.getElementById('subject');
const message=document.getElementById('message');
function sendEmail(){
const bodyMessage=`First Name: $(firstName.value) <br> Email:$(email)<br>
    Message:$(message)`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pavaibabu7@gmail.com",
        Password : "03A7AA209860E5ED5F617851538EA6DE8407",
        To : 'pavaibabu7@gmail.com',
        From : "pavaibabu7@gmail.com",
        Subject : sub.value,
        Body : bodyMessage,
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
            
                console.error("Email sending failed:", message);
                Swal.fire({
                    title: "Error",
                    text: "Failed to send the email. Please try again.",
                    icon: "error"
                });
            }
        }
    );
    
   }
   form.addEventListener('submit',(e)=>
   
   {e.preventDefault();
    sendEmail();

   });
