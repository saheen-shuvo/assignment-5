document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Money Donation Input
    const donateMoney = getInputFieldValueById("input-donate-quota");
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

    // Quota Fund update after donation
    const quotaFund = getTextFieldValueById("quota-total-donation");
    console.log("Quota Fund with parameter", quotaFund);
    const newFund = quotaFund + donateMoney;
    document.getElementById("quota-total-donation").innerText = newFund;
  });
