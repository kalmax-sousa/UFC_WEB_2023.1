const Temperatura = () => {
    const celsiusParaFahrenheit = (c) => ((9*c+160)/5);
    const fahrenheitParaCelsius = (f) => ((5*f-160)/9);
    const kelvin = (k) => {
        const temperaturas = {
            "celsius": k-273,
            "fahrenheit": (9*k - 9*273 + 160)/5
        }

        return temperaturas;
    }

    const celsiusTemp = 100;
    const fahrenheitTemp = 108;
    const kelvinTemp = 273;

    return(
        <div className="temp">
            <h2>{celsiusTemp}°C em Fahrenheit são {celsiusParaFahrenheit(celsiusTemp)}°F</h2>
            <h2>{fahrenheitTemp}°F em Celsius são {fahrenheitParaCelsius(fahrenheitTemp)}°C</h2>
            <h2>{kelvinTemp}K são {kelvin(kelvinTemp).celsius}°C e {kelvin(kelvinTemp).fahrenheit}°F</h2>
        </div>
    )
}

export default Temperatura;