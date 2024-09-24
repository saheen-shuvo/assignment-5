// Donation
document.getElementById("btn-donation").addEventListener("click", function () {
  console.log("Show Donation  btn clicked");
  showSectionById("section-donation");
});
// History
document
  .getElementById("btn-donation-history")
  .addEventListener("click", function () {
    console.log("Show Donation Histroy btn clicked");
    showSectionById("section-donation-history");
  });

//   Noakhali Donate Button on click
document
  .getElementById("btn-donate-now")
  .addEventListener("click", function () {
    console.log("Noakhali donate button clicked");

    const donateMoneyNoakhali = getTextFieldStringById("input-donation-amount");
    const floodAtNoakhali = getTextById("flood-at-noakhali");

    const now = new Date();
    const currentDateTime = now.toLocaleString();
    console.log(currentDateTime);
    // Donation History
    // push from card 1
    const div1 = document.createElement("div");
    if (donateMoneyNoakhali > 0) {
      div1.innerHTML = `
          <div class="mx-3 flex flex-col poppins-font justify-center pl-5 lg:mx-56 mt-10 rounded-xl h-32 border-2 border-[#bfbfbf]">
            <h1 class="font-bold">${donateMoneyNoakhali} Taka is Donated ${floodAtNoakhali}</h1>
            <p class="mt-2">Date : ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
          </div>
`;
    } else {
      return;
    }
    const balance = getTextFieldValueById("account-balance");
    console.log(balance);
    console.log(donateMoneyNoakhali);
    if (donateMoneyNoakhali <= balance) {
      document.getElementById("donation-history-container").appendChild(div1);
    } else {
      return;
    }
    if (donateMoneyNoakhali > balance) {
      alert("Donation Failed. Please Try Again.");
      return;
    }
    const newBalance = balance - donateMoneyNoakhali;
    document.getElementById("account-balance").innerText = newBalance;
  });

//   Feni Donate Button on click
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    console.log("Feni donate button clicked");

    const donateMoneyFeni = getTextFieldStringById("input-donate-feni");
    const floodAtFeni = getTextById("flood-at-feni");

    const now = new Date();
    const currentDateTime = now.toLocaleString();
    console.log(currentDateTime);
    // Donation History
    // push from card 2
    const div1 = document.createElement("div");
    if (donateMoneyFeni > 0) {
      div1.innerHTML = `
          <div class="mx-3 flex flex-col poppins-font justify-center pl-5 lg:mx-56 mt-10 rounded-xl h-32 border-2 border-[#bfbfbf]">
            <h1 class="font-bold">${donateMoneyFeni} Taka is Donated ${floodAtFeni}</h1>
            <p class="mt-2">Date : ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
          </div>
`;
    } else {
      return;
    }
    const balance = getTextFieldValueById("account-balance");
    console.log(balance);
    console.log(donateMoneyFeni);
    const donateMoneyNumberFeni = parseFloat(donateMoneyFeni);
    console.log(donateMoneyNumberFeni);
    if (donateMoneyNumberFeni <= balance) {
      document.getElementById("donation-history-container").appendChild(div1);
    } else {
      return;
    }
    if (donateMoneyNumberFeni > balance) {
      alert("Donation Failed. Please Try Again.");
      return;
    }
    const newBalance = balance - donateMoneyNumberFeni;
    document.getElementById("account-balance").innerText = newBalance;
  });

//   Quota Donate Button on click
document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    console.log("Quota donate button clicked");

    const donateMoneyQuota = getTextFieldStringById("input-donate-quota");
    const donateForQuota = getTextById("quota-protest");

    const now = new Date();
    const currentDateTime = now.toLocaleString();
    console.log(currentDateTime);
    // Donation History
    // push from card 3
    const div1 = document.createElement("div");
    if (donateMoneyQuota > 0) {
      div1.innerHTML = `
        <div class="mx-3 flex flex-col poppins-font justify-center pl-5 lg:mx-56 mt-10 rounded-xl h-32 border-2 border-[#bfbfbf]">
          <h1 class="font-bold">${donateMoneyQuota} Taka is Donated ${donateForQuota}</h1>
          <p class="mt-2">Date : ${currentDateTime} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
`;
    } else {
      return;
    }
    const balance = getTextFieldValueById("account-balance");
    console.log(balance);
    console.log(donateMoneyQuota);
    const donateMoneyNumberQuota = parseFloat(donateMoneyQuota);
    console.log(donateMoneyNumberQuota);
    if (donateMoneyNumberQuota <= balance) {
      document.getElementById("donation-history-container").appendChild(div1);
    } else {
      return;
    }
    if (donateMoneyNumberQuota > balance) {
      alert("Donation Failed. Please Try Again.");
      return;
    }
    const newBalance = balance - donateMoneyNumberQuota;
    document.getElementById("account-balance").innerText = newBalance;
  });
