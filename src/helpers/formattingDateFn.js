import { formatDistanceToNow } from 'date-fns';

const formattingData = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default formattingData;
