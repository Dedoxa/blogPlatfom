// import toExcluded from './supportFunctions';

export const changePasswordInInput = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_IN_INPUT':
      return action.value;
    default:
      return state;
  }
};

export const changePasswordRepetitionInInput = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_REPETITION_IN_INPUT':
      return action.value;
    default:
      return state;
  }
};
