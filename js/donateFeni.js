document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Money Donation Input
    const donateMoney = getInputFieldValueById("input-donate-feni");
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

    // Feni Fund update after donation
    const feniFund = getTextFieldValueById("feni-total-donation");
    console.log("Feni Fund with parameter", feniFund);
    const newFund = feniFund + donateMoney;
    document.getElementById("feni-total-donation").innerText = newFund;
  });
