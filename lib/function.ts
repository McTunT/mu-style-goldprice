import {
  differenceInDays,
  format,
  formatDistance,
  formatISO,
  subDays,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { ISO_DATE_REGEX, THAI_ISO_SUFFIX } from '../lib/constants'

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

export const getThaiDate = () => {
  return utcToZonedTime(new Date(), 'Asia/Bangkok')
}

export const parseThaiDate = (isoDate: any) => {
  if (!isoDate) return getThaiDate()
  if (isoDate.match(ISO_DATE_REGEX)) isoDate += THAI_ISO_SUFFIX
  return utcToZonedTime(new Date(isoDate), 'Asia/Bangkok')
}
