// import toExcluded from './supportFunctions';

export const changePasswordInInput = (state = '', action, value) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_IN_INPUT':
      return value;
    default:
      return state;
  }
};
