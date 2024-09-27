// formReducer.js

export const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false,
  },
  userList: [],
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'ADD_USER':
      return {
        ...state,
        userList: [...state.userList, state.formData],
        formData: initialState.formData, // รีเซ็ตฟอร์ม
      };
    case 'TOGGLE_SWITCH':
      return {
        ...state,
        formData: {
          ...state.formData,
          agreeToPolicy: action.payload,
        },
      };
    default:
      return state;
  }
}
