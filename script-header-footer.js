function revealEmail() {
  let contactLink = document.getElementById("contactEmail")

  if (contactLink.innerText === "info.synt@slmail.me") {
    contactLink.href = "mailto:info.synt@slmail.me";
    return false;
  }

  contactLink.innerText = "info.synt@slmail.me";

  return false;;
}
