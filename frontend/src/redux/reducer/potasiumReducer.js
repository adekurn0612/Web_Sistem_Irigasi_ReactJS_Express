import ActionType from "../action/actionType";

const initialState ={
    potasium: [],
    message : '',
    status : '',
    refresh: '',
}


export default function PotasiumReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        //LAHAN SATU
        case ActionType.LAHAN_SATU_POTASIUM_RESPONSE:
        return { ...state, potasium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN2
        case ActionType.LAHAN_DUA_POTASIUM_RESPONSE:
        return { ...state, potasium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN TIGA
        case ActionType.LAHAN_TIGA_POTASIUM_RESPONSE:
        return { ...state, potasium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN EMPAT
        case ActionType.LAHAN_EMPAT_POTASIUM_RESPONSE:
        return { ...state, potasium: payload, refresh: true, message: state.message, status: state.status };


      default:
        return state;
    }
  }
