import { useState,useId,useEffect,useCallback } from 'react'
// useId can be used for generating unique IDs for accessibility attributes like labels and inputs


function InputBox(
    {
        label,
        amount,
        onAmountChange,
        currency,
        onCurrencyChange,
        currencyOptions,
        amountDisabled = false,
        currencyDisabled = false,
        className = '',
    }
) {
    const amountId=useId();
    const currencyId=useId();

  return (
    <>
      <div className={`flex flex-wrap gap-4 items-center bg-amber-200 rounded  ${className}`}>
            <div className='flex flex-col gap-2'>
                    <label htmlFor={amountId} className='color-black font-semibold'>
                        {label}
                    </label>
                    <input type="text" className='border border-gray-300 rounded px-2 py-1' id={amountId} value={amount} onChange={onAmountChange} disabled={amountDisabled} />

            </div>
            
            <div className='flex flex-col gap-2'>
                <label htmlFor={currencyId} className='color-black font-semibold'>
                    Currency
                </label>
                <select name={`currency ${label}`} id={currencyId} value={currency} onChange={onCurrencyChange} disabled={currencyDisabled} className='border border-gray-600 rounded px-2 py-1'>
                    {
                        currencyOptions.map((option)=>(
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
      </div>
    </>
  )
}

export default InputBox
