import { useEffect,useState } from "react";

function useCurrencyInfo(currencyCode) {
    const [data,setData]=useState({});
    useEffect(
        () => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`)
                .then((res)=>res.json())
                .then((data)=>setData(data[currencyCode]))
        },
        [currencyCode]
    );
    return data;
}

export default useCurrencyInfo;