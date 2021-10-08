import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de'

dayjs.locale('de')
dayjs.extend(relativeTime)

export const convertDate = (dateString: string): string => {
  return dayjs(dateString).format('YYYY/MM/DD HH:mm')
}

export { dayjs }
