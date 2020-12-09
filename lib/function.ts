export const IntlFormatNumber = (gold: any) => {
  return new Intl.NumberFormat('th-TH').format(gold.toFixed())
}

export const IntlDateTimeFormat = (date: any) => {
  const opt = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Intl.DateTimeFormat('en-US', opt).format(date)
}
