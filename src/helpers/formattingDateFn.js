import { formatDistanceToNow, format } from 'date-fns';

const formattingData = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formatCryptoDate = date => {
  return format(new Date(date), 'Pp');
};
export default formattingData;
