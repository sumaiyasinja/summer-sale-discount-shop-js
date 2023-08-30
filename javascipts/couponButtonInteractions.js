
        let couponCode = document.getElementById("couponCode");

        couponCode.addEventListener("click", function() {
            const tempInput = document.createElement("input");
            tempInput.value = "SELL200"; 

            document.body.appendChild(tempInput);

            tempInput.select();
            tempInput.setSelectionRange(0, 99999); 

            document.execCommand("copy");

            document.body.removeChild(tempInput);

            couponCode.textContent = "Copied!";
            
            setTimeout(() => {
                couponCode.textContent = "SELL200";
            }, 1500);
        });
