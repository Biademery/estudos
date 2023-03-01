const cityForm = document.querySelector('[data-js="change-location"]');

cityForm.addEventListener('subimt', async event => {
  event.preventDefault();

  const inputValue = event.target.city;
  const [{ Key, localizedName }] = await getCityData(inputValue);
  const [{ WeatherText, Temperature }] = await getCityWeather(Key);

  console.log(Key, localizedName);
  cityForm.reset();
});
