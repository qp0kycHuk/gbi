import ru from './lang/ru'
// import by from './lang/by'

// @ts-ignore
window.phoneMask = {
  ru,
}

function init(selector: string) {
  const country = ru

  document.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement

    if (!target.matches(selector)) return
    const maskedValue = country.getMaskedValue(target.value)

    target.value = maskedValue

    const blurHandler = () => {
      if (!country.isComplete(target.value)) {
        target.value = ''
      }
    }

    target.addEventListener('blur', blurHandler, { once: true })
  })
}

export default { init }
