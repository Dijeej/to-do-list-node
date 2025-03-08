const closeMessage = document.getElementById("close-message");
const message = document.querySelector(".message");
if (message && closeMessage) {
    closeMessage.addEventListener("click", () => {
        message.style.display = "none"; 
    });

    setTimeout(() => {
        message.style.display = "none";
    }, 5000);
}