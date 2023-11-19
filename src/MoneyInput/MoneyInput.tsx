import _styles from './MoneyInput.module.css'

export default function MoneyInput() {
  return (
  <main>
    <section className={_styles.wrapper}>
      <label htmlFor="default" >
        <span className={_styles.labelLength}>State: Default</span>
        <input type="text" className={`${_styles.OnFocus} ${_styles.margin}`} placeholder='Text'/>
      </label>   
      <label htmlFor="hover">
        <span className={_styles.labelLength}>State: Hover</span>
        <input type="text" className={`${_styles.OnHover} ${_styles.margin}`} placeholder='Text'/>
      </label>
      <label htmlFor="focus">
        <span className={_styles.labelLength}>State: &nbsp; Focus</span>
        <input type="text" className={`${_styles.focus} ${_styles.margin}`} placeholder='Text'/>
      </label>
      <label htmlFor="error">
        <span className={_styles.labelLength}>State: Error</span>
        <input type="text" className={`${_styles.error} ${_styles.margin}`} placeholder='Text'/>
      </label>
      <label htmlFor="error-hover">
        <span className={_styles.labelLength}>State: Error +&nbsp;Hover</span>
        <input type="text" className={`${_styles.error} ${_styles.margin}`} placeholder='Text'/>
      </label>
      <label htmlFor="error-focus">
        <span className={_styles.labelLength}>State: Error +&nbsp;Focus</span>
        <input type="text" className={`${_styles.errorAndFocused} ${_styles.margin}`} placeholder='Text' />
      </label>
      <label htmlFor="disabled">
        <span className={_styles.labelLength}>State: Disabled</span>
        <input type="text" disabled className={_styles.margin} placeholder='Text'/>
      </label>
      <label htmlFor="disabled-focus">
        <span className={_styles.labelLength}>State: Disabled +&nbsp;Focus</span>
        <input type="text" readOnly tabIndex={0} aria-disabled={true} className={`${_styles.OnFocus} ${_styles.margin}`} placeholder='Text' />
      </label>
    </section>
    <section>
      <label htmlFor="default-label" className={_styles.defaultLabel}>
        <span className={_styles.specialLabel}><b>Label*</b></span>
        <input type="text" className={_styles.OnFocus} placeholder='Default' />
      </label>
    </section>
  </main>
  )
}


// {`${styles.description} ${styles.yellow}`}