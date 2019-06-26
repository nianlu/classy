import React from 'react';

export const useStateWithLocalStorage = (localStorageKey, defaultValue='') => {
  // console.log('key', localStorageKey);
  // console.log('value', defaultValue);
  // console.log(localStorage.getItem(localStorageKey));

  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
  );

  // console.log('localvalue', value);

  const valueString = JSON.stringify(value);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, valueString);
  }, [value]);

  return [value, setValue];
};