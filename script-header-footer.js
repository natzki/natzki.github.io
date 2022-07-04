function revealEmail() {

  const mailto = "mailto:inf.oio@slmail.me";
  const email = mailto.substring(7);

  let contactLink = document.getElementById("contactEmail");

  if (contactLink.innerText === email) {
    contactLink.href = mailto;
    return false;
  }

  contactLink.innerText = email;

  return false;;
}
