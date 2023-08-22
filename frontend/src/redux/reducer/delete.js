import ActionType from "../action/actionType";

const initialState ={
    data: [],
    message : '',
    status : '',
    refresh: '',
}


export default function DeleteReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
      case ActionType.DELETE_DATA_RESPONSE:
        return { ...state, data: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }