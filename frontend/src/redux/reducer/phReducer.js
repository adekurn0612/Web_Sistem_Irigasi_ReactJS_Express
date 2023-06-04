import ActionType from "../action/actionType";

const initialState ={
    ph: [],
    message : '',
    status : '',
    refresh: '',
}


export default function PHReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        //LAHAN SATU
        case ActionType.LAHAN_SATU_PH_RESPONSE:
        return { ...state, ph: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN2
        case ActionType.LAHAN_DUA_PH_RESPONSE:
        return { ...state, ph: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN TIGA
        case ActionType.LAHAN_TIGA_PH_RESPONSE:
        return { ...state, ph: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN EMPAT
        case ActionType.LAHAN_EMPAT_PH_RESPONSE:
        return { ...state, ph: payload, refresh: true, message: state.message, status: state.status };

      default:
        return state;
    }
  }
