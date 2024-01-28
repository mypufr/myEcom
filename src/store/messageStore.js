import { createContext } from 'react';

export const MessageContext = createContext ({})

export const initState = {
  type: '',
  title: '',
  text: '',
}

export const messageReducer = (state, action) => {

switch(action.type){
  case "POST_MESSAGE":
   return {
    ...action.payload
   };

  case "CLEAR_MESSAGE":
    return {
    ...initState,
    };

  default:
    return state
}

}

export function handleSuccessMessage(dispatch, res) {
  dispatch({
    type: 'POST_MESSAGE',
    payload: {
      type: 'success',
      title: 'updated with success',
      text: res.data.message,
    }
  });
  setTimeout(()=> {
    dispatch({
      type: 'CLEAR_MESSAGE',
      });
    }, 3000);
}

export function handleErrorMessage(dispatch, error) {
  dispatch({
    type: 'POST_MESSAGE',
    payload: {
      type: 'danger',
      title: 'failed to update',
      text: Array.isArray(error?.response?.data?.message)
        ? error?.response?.data?.message.join(' ! ')
        : error?.response?.data?.message,
    }
  });
  setTimeout(()=> {
    dispatch({
      type: 'CLEAR_MESSAGE',
      });
    }, 3000);
}