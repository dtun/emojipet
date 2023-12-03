import { format } from 'date-fns';

const formatString = 'eee h:mm:ss a';

function formatTimestamp(timestamp: string) {
  return format(new Date(timestamp), formatString);
}

export { formatTimestamp };
