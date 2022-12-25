const formRef = document.querySelector('.login-form');
const onFormSubmit = function (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    window.alert('All fields are required');
  } else {
    const inputData = {
      email: email.value,
      password: password.value,
    };
    formRef.reset();
    console.log(inputData);
  }
};
formRef.addEventListener('submit', onFormSubmit);
