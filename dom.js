const showUserDetails = () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const container = document.querySelector("#user-details");

  container.innerHTML = name.value + " " + email.value;
};
