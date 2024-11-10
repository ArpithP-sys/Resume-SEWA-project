function welcome() {
    window.open("https://www.youtube.com/watch?v=34MBVXsDOtA&t=2082s");
}

function tree() {
    window.scrollTo({
        top: document.getElementById("box2").offsetTop,
        behavior: "smooth"
    });
}

function showModal() {
    document.getElementById("bookingModal").style.display = "block";
}

function hideModal() {
    document.getElementById("bookingModal").style.display = "none";
}

function showPrice() {
    var priceContent = document.getElementById("price-content");
    if (priceContent.style.display === "none") {
        priceContent.style.display = "block";
    } else {
        priceContent.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('bookingModal').addEventListener('click', function () {
        var form = document.getElementById('bookingModal');
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "block";
            this.style.display = "none";
        }
    });
});