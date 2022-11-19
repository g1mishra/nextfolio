const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const _getDay = (day: number): string => {
  switch (day) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return `${day}th`;
  }
};

export function formatDate(date: Date | string): string {
  date = new Date(date);
  const finaldata = `${weekdays[date.getDay()]}, ${_getDay(date.getDate())} 
  ${months[date.getMonth()]} ${date.getFullYear()}`;

  return finaldata;
}
