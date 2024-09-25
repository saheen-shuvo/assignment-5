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

    // Prevent Negative Balance
    if (donateMoney <= 0) {
      alert("Donation Failed. Please Try Again.");
      return;
    }

    // Quota Fund update after donation
    const quotaFund = getTextFieldValueById("quota-total-donation");
    console.log("Quota Fund with parameter", quotaFund);
    if (donateMoney <= balance) {
      const newFund = quotaFund + donateMoney;
      document.getElementById("quota-total-donation").innerText = newFund;
    } else {
      alert("Donation Failed. Please Try Again.");
      return;
    }
    document.getElementById('my_modal_1').showModal();
  });
