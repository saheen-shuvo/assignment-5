document
  .getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Money Donation Input
    const donateMoney = getInputFieldValueById("input-donation-amount");
    // NaN verify
    if (isNaN(donateMoney)) {
      alert("Failed to Donate.");
      return;
    }
    console.log("Donate money with parameter", donateMoney);

    // Balance update after donation
    const balance = getTextFieldValueById("account-balance");
    console.log("Account Balance with parameter", balance);

    // Prevent Negative Balance
    if (donateMoney <= 0) {
      alert("Donation Failed. Please Try Again.");
      return;
    }

    // Noakhali Fund update after donation
    const noakhaliFund = getTextFieldValueById("noakhali-total-donation");
    console.log("Noakhali Fund with parameter", noakhaliFund);
   if (donateMoney !== balance){
    const newFund = noakhaliFund + donateMoney;
    document.getElementById("noakhali-total-donation").innerText = newFund;
    
   }
   else{
    return;
   }
   document.getElementById('my_modal_1').showModal();
  });
