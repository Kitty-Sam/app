export const getWeatherInfo = async (title: string) => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${title}&lang=ru&units=metric&appid=ef8dbe91097853f46a4f5c2d9130a67d`;
  const response = await fetch(weatherURL);
  return await response.json();
};
