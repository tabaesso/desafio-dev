import { format, parseISO } from 'date-fns'

const formatDate = (value: string | undefined): string => {
  if (!value) {
    return '';
  }

  return format(parseISO(value.substring(0, 10)), 'dd/MM/yyyy');
}

export default formatDate;