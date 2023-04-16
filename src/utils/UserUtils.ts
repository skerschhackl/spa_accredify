export default {   
  getUserName: (firstName: string, lastName: string) => {
    return firstName + ' ' + lastName;
  },

  getInitials: (firstName: string, lastName: string) => {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  }
}
