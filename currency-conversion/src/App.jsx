import { useState, useCallback,useEffect } from 'react'
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components/index.js';


function App() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState('');
  const [FromAmountDisabled,setFromAmountDisabled]=useState(false);
  const [ToAmountDisabled,setToAmountDisabled]=useState(true);
  const [FromCurrencyDisabled,setFromCurrencyDisabled]=useState(false);
  const [ToCurrencyDisabled,setToCurrencyDisabled]=useState(false);



  const data=useCurrencyInfo(fromCurrency);


  const swap=(e)=>{
    e.preventDefault();
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount === undefined ? '' : String(convertedAmount));
    setConvertedAmount(amount === undefined ? '' : String(amount));
  }

  const onAmountChange=(e)=>{ // still values changing on conntinuos swaps
    const value = e.target.value;
    // Allow only up to 5 decimal places
    

    // i can still optimise more to avoid extra symbols
    if (value.includes('.')) {
      if(value.split('.').length>2){ // i optimised more as i might still had multiple decimals in input but now handled
        value=value.replace(/\.+$/,''); // remove extra decimals at end
      }
      const [intPart, decPart] = value.split('.');
      if (decPart.length > 5) {
        setAmount(intPart + '.' + decPart.slice(0, 5));
        return;
      }
    }
    setAmount(value);
  }
  const onCurrencyChange=(e)=>{
    if(e.target.name==='currency From'){
      // data=useCurrencyInfo(e.target.value); // no need hook re runs automatically when fromCurrency changes
      setFromCurrency(e.target.value); // i think i should call useCurrencyInfo before setFromCurrency because useEffect for calling convert will be called after setFromCurrency so before it data should be updated
    } else{
      setToCurrency(e.target.value);
    }
  }

  const convert=useCallback(() => {
    if (!data[toCurrency] || amount === '' || isNaN(Number(amount))) {
      setConvertedAmount('');
      return;
    }
    const result = Number(amount) * Number(data[toCurrency]);
    setConvertedAmount(isNaN(result) ? '' : result.toFixed(5));
  }, [amount, data, toCurrency]);
  useEffect( // only include this to auto convert when any dependency changes
    ()=>{
      convert();
    },
    [amount,toCurrency,data,convert] // do not use fromCurrency here because data is already changing when fromCurrency changes (due to useCurrencyInfo hook) and we need data to be changed then we will call convert
  )
  return (
    <>
      <div className='flex flex-wrap gap-4 items-center space-x-12 min-h-screen bg-gray-500'
            style={{
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    
                  }}  
      >
              <div className='h-200 w-150 flex items-center justify-center overflow-hidden rounded-lg shadow-lg'>
                    <img src="https://images.pexels.com/photos/7567224/pexels-photo-7567224.jpeg" alt="currency"  className='w-full h-full object-cover' />
              </div>
              <div className='relative flex flex-col gap-4 items-center bg-white p-8 rounded-lg shadow-lg min-h-100 min-w-200'>
                    <form className='relative flex flex-col gap-12 w-4/5'>
                        <InputBox 
                            label="From"
                            amount={amount}
                            onAmountChange={onAmountChange}
                            currency={fromCurrency}
                            onCurrencyChange={onCurrencyChange}
                            currencyOptions={Object.keys(data || {})}
                            amountDisabled={FromAmountDisabled}
                            currencyDisabled={FromCurrencyDisabled}
                            className=''
                        />
                        <InputBox 
                            label="To"
                            amount={convertedAmount}
                            currency={toCurrency}
                            onCurrencyChange={onCurrencyChange}
                            currencyOptions={Object.keys(data || {})}
                            amountDisabled={ToAmountDisabled}
                            currencyDisabled={ToCurrencyDisabled}
                        />
                    <button 
                              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 px-4 py-2 rounded-full bg-blue-600 text-white'
                  onClick={swap}
                  type="button"
                    >
                      swap
                    </button>
                    </form>
                    <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 absolute bottom-4 w-3/4' onClick={convert}>
                      convert {fromCurrency} to {toCurrency}
                    </button>
              </div>
      </div>
    </>
  )
}

export default App
