

const formConversor = document.getElementById('formConversor');
const resultadoElement = document.getElementById('resultado');

formConversor.addEventListener('submit', function (event) {
  event.preventDefault();

  const celsius = parseFloat(document.getElementById('celsius').value);

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  resultadoElement.innerHTML = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
                               Temperatura em Kelvin: ${kelvin.toFixed(2)}K`;
});