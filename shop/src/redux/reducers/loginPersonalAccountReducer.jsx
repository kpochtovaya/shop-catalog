import {
  ENTER, LOGIN, ENTEREMAIL,
} from '../actions/loginPersonalAccountActions';

const initialState = {
  loginIsVisible: true,
  personAccountIsVisible: false,
  loginFormIsVisible: false,
  loginFormLoginPageIsVisible: false,
  loginFormForgetPasswordIsVisible: false,
  clientEmail: '',
};

const loginPersonalAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER.type: {
      return {
        ...state,
        loginIsVisible: action.payload.loginIsVisible,
        personAccountIsVisible: action.payload.personAccountIsVisible,
      };
    }

    case LOGIN.type: {
      return {
        ...state,
        loginFormIsVisible: action.payload.loginFormIsVisible,
        loginFormLoginPageIsVisible: action.payload.loginFormLoginPageIsVisible,
        loginFormForgetPasswordIsVisible: action.payload.loginFormForgetPasswordIsVisible,
      };
    }

    case ENTEREMAIL.type: {
      return {
        ...state,
        clientEmail: action.payload.clientEmail,
      };
    }

    default:
      return state;
  }
};

export default loginPersonalAccountReducer;
