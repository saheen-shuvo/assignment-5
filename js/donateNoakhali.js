document
  .getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Money Donation Input
    const donateMoney = getInputFieldValueById("input-donation-amount");
    // NaN verify
    if (isNaN(donateMoney)) {
      alert("Failed to Cash Out.");
      return;
    }
    console.log("Donate money with parameter", donateMoney);

    // Balance update after donation
    const balance = getTextFieldValueById("account-balance");
    console.log("Account Balance with parameter", balance);
    const newBalance = balance - donateMoney;
    // Prevent Negative Balance
    if (donateMoney > balance) {
      alert("You have insufficient balance.");
      return;
    }
    document.getElementById("account-balance").innerText = newBalance;

    // Noakhali Fund update after donation
    const noakhaliFund = getTextFieldValueById("noakhali-total-donation");
    console.log("Noakhali Fund with parameter", noakhaliFund);
    const newFund = noakhaliFund + donateMoney;
    document.getElementById("noakhali-total-donation").innerText = newFund;
  });
