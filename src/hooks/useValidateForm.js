import React from 'react';

const useValidateForm = () => {
   const [values, setValues] = React.useState({});
   const [errors, setErrors] = React.useState({});
   const [isValid, setIsValid] = React.useState(false);

   const handleChange = (e) => {
      const input = e.target;
      const name = input.name;
      const value = input.value;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: input.validationMessage });
      setIsValid(input.closest('form').checkValidity());
   };

   const resetForm = React.useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
         setValues(newValues);
         setErrors(newErrors);
         setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
   );

   return {
      values,
      errors,
      isValid,
      handleChange,
      setValues,
      resetForm
   };
}

export default useValidateForm;