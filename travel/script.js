document.getElementById('bookingModal').addEventListener('click',function(){;
    var form=document.getElementById('bookingModal');
        if(form.style.display==="none"||form.style.display===""){
            form.style.display="block";
            this.style.display="none;"
        }})
        function showPrice() {
            var priceContent = document.getElementById("price-content");
            if (priceContent.style.display === "none") {
                priceContent.style.display = "block";
            } else {
                priceContent.style.display = "none";
            }
        }