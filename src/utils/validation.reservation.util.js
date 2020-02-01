//Alle validatie van de reserveringsysteem

export const validateText = (params, value) => {
  const min = params.min;
  const max = params.max;
  const trimmedValue = value.toString().trim();
  if (trimmedValue == '') {
    return '*Voor uw naam in.';
  }
  if (trimmedValue.length < min || trimmedValue.length > max) {
    return '*Vul uw naam correct in.';
  }
  return '';
};

export const validateNumber = (params, value) => {
  const min = params.min;
  const max = params.max;
  const trimmedValue = value.trim();
  const numberRegex = /^\d+$/.test(trimmedValue);
  if (trimmedValue == '') {
    return '*Nummer niet correct ingevoerd.';
  }
  if (!numberRegex || trimmedValue.length !== max || trimmedValue.length !== min) {
    return '*Het nummer is niet correct.';
  }
  return '';
}

export const validateEmail = (value) => {
  const trimmedValue = value.toString().trim();
  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  if (trimmedValue == '') {
    return '*Email niet correct ingevoerd';
  }
  if (!emailRegex.test(value)) {
    return '*Voer uw email adres correct in.';
  }
  return '';
};
