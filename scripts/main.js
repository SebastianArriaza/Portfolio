// //Add animation
// const $ = (name) =>
//   document.querySelector("." + name).classList.add(name + "-animation");
// const $2 = (name) =>
//   document.querySelector("." + name).classList.remove(name + "-animation");

// function headerAnimation() {
//   if (document.documentElement.scrollTop != 0) {
//     let nav = $("nav");
//     let nav__home = $("nav__home");
//     let nav__menu = $("nav__menu");
//     let nav__projects = $("nav__projects");
//     let nav__about = $("nav__about");
//     let nav__contact = $("nav__contact");
//     let background__video = $("background__video");
//   } else {
//     let nav = $2("nav");
//     let nav__home = $2("nav__home");
//     let nav__menu = $2("nav__menu");
//     let nav__projects = $2("nav__projects");
//     let nav__about = $2("nav__about");
//     let nav__contact = $2("nav__contact");
//     let background__video = $2("background__video");
//   }
// }

// window.addEventListener("scroll", headerAnimation);

// // Contact form
// const form = document.querySelector("#form");

// form.addEventListener("submit", handleSubmit);

// async function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const response = await fetch(this.action, {
//     method: this.method,
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   if (response.ok) {
//     form.reset();
//   }
// }
