// utilizando callbacks

const ul = document.querySelector("[data-js='ul']");

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

let HTMLTemplate = '';

socialNetworks.forEach(socialNetworks => {
  HTMLTemplate += `<li style="color: deeppink;">${socialNetworks}</li>`;
});

ul.innerHTML = HTMLTemplate;
