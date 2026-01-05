import { useState, useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);

  const currencies = ["USD", "INR", "EUR", "GBP", "AUD", "JPY", "CAD", "CNY"];

  useEffect(() => {
    convert();
  }, [amount, fromCurrency, toCurrency]);

  const convert = async () => {
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await res.json();

      const newRate = data.rates[toCurrency];
      setRate(newRate);
      setResult((amount * newRate).toFixed(2));
    } catch (error) {
      console.error("Conversion Error", error);
    }
  };

  return (
    <>
      <div>
        <div class="custom-shape-divider-bottom-1767279644 animate-pulse">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-blue-300 p-5">
        <BsCurrencyRupee className="absolute text-4xl  animate-bounce" />
        <h1 className="text-3xl ms-10 animate-bounce">Currency Converter</h1>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4 ">
        <div className="bg-blue-100 shadow-xl p-6 rounded-2xl w-full max-w-md space-y-4 ">
          <h1 className="text-2xl font-bold text-center">Currency Converter</h1>

          <div>
            <p className="font-semibold mb-1">Amount</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <p className="font-semibold mb-1">From</p>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-semibold mb-1">To</p>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-gray-200 p-3 rounded-xl text-center text-lg font-bold">
            {result} {toCurrency}
          </div>

          <button
            onClick={convert}
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-800"
          >
            Convert
          </button>

          {/* <p className="text-center text-sm text-gray-500">Rate: 1 {fromCurrency} = {rate} {toCurrency}</p> */}
        </div>
      </div>
    </>
  );
}


// export default convert;
