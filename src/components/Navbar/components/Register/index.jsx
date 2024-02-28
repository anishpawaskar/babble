import React, { useState } from 'react';
import { RegisterPresentation } from './Presentation';
import { FORM_ACTIONS } from './registerForm.constant';

export const Register = () => {
  //const [formActionItems, setFormActionItems] = useState(FORM_ACTIONS);
  const [formActionInputs, setFormActionInputs] = useState(FORM_ACTIONS);
  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    username: '',
    password: '',
  });

  const handleFormActions = (e) => {
    switch (e.target.name) {
      case 'Email': {
        if (e.target.value === '') {
          const newFormActionInputs = formActionInputs.map((action) =>
            action.name === e.target.name
              ? { ...action, requiredLabel: '- Required' }
              : action,
          );

          setFormActionInputs(newFormActionInputs);
        }
        setFormData({ ...formData, email: e.target.value });
        break;
      }

      case 'Display name': {
        setFormData({ ...formData, displayName: e.target.value });
        break;
      }

      case 'Username': {
        if (e.target.value === '') {
          const newFormActionInputs = formActionInputs.map((action) =>
            action.name === e.target.name
              ? { ...action, requiredLabel: '- Required' }
              : action,
          );

          setFormActionInputs(newFormActionInputs);
        }
        setFormData({ ...formData, username: e.target.value });
        break;
      }

      case 'Password': {
        if (e.target.value === '') {
          const newFormActionInputs = formActionInputs.map((action) =>
            action.name === e.target.name
              ? { ...action, requiredLabel: '- Required' }
              : action,
          );

          setFormActionInputs(newFormActionInputs);
        }
        setFormData({ ...formData, password: e.target.value });
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormActionInputs = formActionInputs.map((action) => {
      switch (action.name) {
        case 'Email': {
          if (formData.email !== '') {
            return { ...action, requiredLabel: '*' };
          } else {
            return { ...action, requiredLabel: '- Required' };
          }
        }

        case 'Display name': {
          return action;
        }

        case 'Username': {
          if (formData.username !== '') {
            return { ...action, requiredLabel: '*' };
          } else {
            return { ...action, requiredLabel: '- Required' };
          }
        }

        case 'Password': {
          if (formData.password !== '') {
            return { ...action, requiredLabel: '*' };
          } else {
            return { ...action, requiredLabel: '- Required' };
          }
        }
      }
    });
    setFormActionInputs(newFormActionInputs);
  };

  return (
    <RegisterPresentation
      handleFormActions={handleFormActions}
      handleSubmit={handleSubmit}
      formActionInputs={formActionInputs}
    />
  );
};
