export const FORM_ACTIONS = [
  {
    id: 1,
    name: 'Email',
    type: 'email',
    requiredLabel: '*',
  },
  {
    id: 2,
    name: 'Display name',
    type: 'text',
    msg: 'This is how others see you. You can use special characters and emoji.',
  },
  {
    id: 3,
    name: 'Username',
    type: 'text',
    requiredLabel: '*',
    msg: 'Please only use numbers, letters, underscores _ .',
  },
  {
    id: 4,
    name: 'Password',
    type: 'password',
    requiredLabel: '*',
  },
];
