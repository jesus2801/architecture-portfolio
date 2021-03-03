const functions = {
  showErrorMessage: function (message) {
    //eslint-disable-next-line
    Swal.fire('Error!', message, 'error');
  },
  showSuccessMessage: function (message) {
    //eslint-disable-next-line
    Swal.fire('Success!', message, 'success');
  },
  isEmpty: function (strings) {
    return strings.some(str => str.trim() === '');
  },
};

export default functions;
