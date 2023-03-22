function tempConverter(celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32;
  return [kelvin, fahrenheit];
}

console.log(tempConverter(36.5));
