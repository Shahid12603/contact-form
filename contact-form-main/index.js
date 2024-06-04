document.getElementById('submit-button').addEventListener('click', function (event) {
  event.preventDefault();

  let isValid = true;

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const consent = document.getElementById('consent');
  const queryTypeGeneral = document.getElementById('general-enquiry');
  const queryTypeSupport = document.getElementById('support-request');

  function checkEmptyField(field, mandatoryText) {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      mandatoryText.style.display = 'block';
      isValid = false;
    } else {
      field.style.borderColor = '';
      mandatoryText.style.display = 'none';
    }
  }

  checkEmptyField(firstName, firstName.nextElementSibling);
  checkEmptyField(lastName, lastName.nextElementSibling);
  checkEmptyField(email, email.nextElementSibling);
  checkEmptyField(message, message.nextElementSibling);

  const queryTypeMandatoryText = document.querySelector('.query-container-wrapper .mandatory-text');

  if (!queryTypeGeneral.checked && !queryTypeSupport.checked) {
    queryTypeMandatoryText.style.display = 'block';
    isValid = false;
  } else {
    queryTypeMandatoryText.style.display = 'none';
  }

  const consentMandatoryText = document.querySelector('.submission-checkbox-wrapper .mandatory-text');
  if (!consent.checked) {
    consentMandatoryText.style.display = 'block';
    isValid = false;
  } else {
    consentMandatoryText.style.display = 'none';
  }

  if (isValid) {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 100000);
}
});

document.getElementById('general-enquiry').addEventListener('change', () => {
  document.querySelector('.general-enquiry-container').style.backgroundColor = 'hsl(148, 38%, 91%)';
  document.querySelector('.support-request-container').style.backgroundColor = '';
});

document.getElementById('support-request').addEventListener('change', () => {
  document.querySelector('.support-request-container').style.backgroundColor = 'hsl(148, 38%, 91%)';
  document.querySelector('.general-enquiry-container').style.backgroundColor = '';
});

