import react from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = react.useState([]);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.rates);
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);
};
