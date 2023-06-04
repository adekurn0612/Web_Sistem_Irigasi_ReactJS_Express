import ActionType from "../action/actionType";

const initialState ={
    nitrogen: [],
    message : '',
    status : '',
    refresh: '',
}


export default function NitrogenReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        //LAHAN SATU
        case ActionType.LAHAN_SATU_NITROGEN_RESPONSE:
        return { ...state, nitrogen: payload, refresh: true, message: state.message, status: state.status };
        
        //LAHAN2
        case ActionType.LAHAN_DUA_NITROGEN_RESPONSE:
        return { ...state, nitrogen: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN TIGA
        case ActionType.LAHAN_TIGA_NITROGEN_RESPONSE:
        return { ...state, nitrogen: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN EMPAT
        case ActionType.LAHAN_EMPAT_NITROGEN_RESPONSE:
        return { ...state, nitrogen: payload, refresh: true, message: state.message, status: state.status };

      default:
        return state;
    }
  }
