import { ChangeEvent,FocusEvent, useEffect, useState } from 'react'
import _styles from './MoneyInput.module.css'

interface Props {
  value?: number;
  locale?: string
}

// - initial value is always 0, then when we type in input, input changes onChange and onBlur (logges in console)
// - but if we provide a number, the input shows the amount in Euro (converts from cent) and we cannot change that
// - to test onChange and onBlur the value prop must be removed
// - I have used label* input to show results on change

// ***If we have an initial value on render only then locale works, to check other functionality we have to remove these ***
// locale is either us for dollars or de for euro

const MoneyInput = ({value, locale='us'}: Props) => {
  
  const [euro, setEuro] = useState<number | string>(0)
  
  
  const formatter = new Intl.NumberFormat(`en-${locale}`, {
    style: 'currency',
    currency: locale === 'de' ? 'EUR' : 'USD',
  });

  useEffect(() => {
    if (value !== undefined && !isNaN(value)) {
      console.log(value) //value we provide initally;
      const converted = (value / 100).toFixed(2)
      setEuro(converted);
    } else {
      return
    }
  }, []);

  const convertToCents = (euroValue: number) =>{
    return Math.round(Number(euroValue) * 100)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)    
    setEuro(convertToCents(inputValue))
    console.log(`Converted value is: ${convertToCents(inputValue)}`); 
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value)    
    setEuro(convertToCents(inputValue))
    console.log(`Converted value is: ${convertToCents(inputValue)} (on blur)`);
  }
  
  return (
  <>
  <nav>&nbsp;</nav>
  <main>
    <section className={_styles.wrapper}>
      <label htmlFor="default" >
        <span className={_styles.labelLength}>State: Default</span>
        <input type="number" onChange={handleChange} onBlur={handleBlur} className={`${_styles.OnFocus} ${_styles.margin}`} placeholder='Text' id='default'/>
      </label>   
      <label htmlFor="hover">
        <span className={_styles.labelLength}>State: Hover</span>
        <input type="text" className={`${_styles.OnHover} ${_styles.margin}`} placeholder='Text' id='hover'/>
      </label>
      <label htmlFor="focus">
        <span className={_styles.labelLength}>State: &nbsp; Focus</span>
        <input type="text" className={`${_styles.focus} ${_styles.margin}`} placeholder='Text' id='focus'/>
      </label>
      <label htmlFor="error">
        <span className={_styles.labelLength}>State: Error</span>
        <input type="text" className={`${_styles.error} ${_styles.margin}`} placeholder='Text' id='error'/>
      </label>
      <label htmlFor="error-hover">
        <span className={_styles.labelLength}>State: Error +&nbsp;Hover</span>
        <input type="text" className={`${_styles.error} ${_styles.margin}`} placeholder='Text' id='error-hover'/>
      </label>
      <label htmlFor="error-focus">
        <span className={_styles.labelLength}>State: Error +&nbsp;Focus</span>
        <input type="text" className={`${_styles.errorAndFocused} ${_styles.margin}`} placeholder='Text' id='error-focus'/>
      </label>
      <label htmlFor="disabled">
        <span className={_styles.labelLength}>State: Disabled</span>
        <input type="text" disabled className={_styles.margin} placeholder='Text' id='disabled'/>
      </label>
      <label htmlFor="disabled-focus">
        <span className={_styles.labelLength}>State: Disabled +&nbsp;Focus</span>
        <input type="text" readOnly tabIndex={0} aria-disabled={true} className={`${_styles.OnFocus} ${_styles.margin}`} placeholder='Text' id='disabled-focus' />
      </label>
    </section>
    <section>
      <label htmlFor="default-label" className={_styles.defaultLabel}>
        <span className={_styles.specialLabel}>Label*</span>
        <input type="text" value={formatter.format(Number(euro))} onChange={handleChange} onBlur={handleBlur} className={_styles.OnFocus} placeholder='Default' id='default-label'/>
      </label>
    </section>
  </main>
  </>
  )
}

export default MoneyInput