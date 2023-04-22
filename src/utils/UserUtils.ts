export const getInitials = (name: string) => {
  const { firstName, lastName } = splitName(name);
  return firstName.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();
}

// private 

function splitName(name: string): { firstName: string; lastName: string; } {
  const nameArr = name.split(' ');
  const firstName = nameArr[0];
  const lastName = (nameArr.length > 1) ? nameArr[nameArr.length - 1] : '';
  return { firstName, lastName };
}

