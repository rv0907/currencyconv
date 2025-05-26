import react from "react";
import { useEffect, useState } from "react";
const useCurrencyInfo = (from, to) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.rates);
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [from, to]);

  return data;
};

export default useCurrencyInfo;
