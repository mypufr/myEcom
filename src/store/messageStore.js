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
    type: 'danger',
    title: 'success reducer',
    text: 'successful message'
   };

  case "CLEAR_MESSAGE":
    return {
    ...initState,
    };

  default:
    return state
}

}