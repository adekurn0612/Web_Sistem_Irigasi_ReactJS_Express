import {takeEvery , all} from 'redux-saga/effects'
import ActionType from '../action/actionType'
import { handleGetAllData } from './dataAllSaga'
import { handleGetDataLahanSatuKalium, handleGetDataLahanSatuKelembapan, handleGetDataLahanSatuNitrogen, handleGetDataLahanSatuPh, handleGetDataLahanSatuPotasium } from './dataLahanSatuSaga';
import { handleGetDataLahanDuaKalium, handleGetDataLahanDuaKelembapan, handleGetDataLahanDuaNitrogen, handleGetDataLahanDuaPh, handleGetDataLahanDuaPotasium } from './dataLahanDuaSaga';
import { handleGetDataLahanTigaKalium, handleGetDataLahanTigaNitrogen, handleGetDataLahanTigaPh, handleGetDataLahanTigaPotasium } from './dataLahanTigaSaga';
import { handleGetDataLahanEmpatKalium, handleGetDataLahanEmpatKelembapan, handleGetDataLahanEmpatNitrogen, handleGetDataLahanEmpatPh, handleGetDataLahanEmpatPotasium } from './dataLahanEmpatSaga';
import { handleGetDatabaruLahanDua, handleGetDatabaruLahanEmpat, handleGetDatabaruLahanSatu, handleGetDatabaruLahanTiga } from './dataBaruSaga';


function* watchAll(){
    yield all([
        //semua data
        takeEvery(ActionType.All,handleGetAllData),
        //lahan satu
        takeEvery(ActionType.LAHAN_SATU_KALIUM,handleGetDataLahanSatuKalium),
        takeEvery(ActionType.LAHAN_SATU_KELEMBAPAN,handleGetDataLahanSatuKelembapan),
        takeEvery(ActionType.LAHAN_SATU_NITROGEN,handleGetDataLahanSatuNitrogen),
        takeEvery(ActionType.LAHAN_SATU_PH,handleGetDataLahanSatuPh),
        takeEvery(ActionType.LAHAN_SATU_POTASIUM,handleGetDataLahanSatuPotasium),
        //lahan dua
        takeEvery(ActionType.LAHAN_DUA_KALIUM,handleGetDataLahanDuaKalium),
        takeEvery(ActionType.LAHAN_DUA_KELEMBAPAN,handleGetDataLahanDuaKelembapan),
        takeEvery(ActionType.LAHAN_DUA_NITROGEN,handleGetDataLahanDuaNitrogen),
        takeEvery(ActionType.LAHAN_DUA_PH,handleGetDataLahanDuaPh),
        takeEvery(ActionType.LAHAN_DUA_POTASIUM,handleGetDataLahanDuaPotasium),
        //lahan tiga
        takeEvery(ActionType.LAHAN_TIGA_KALIUM,handleGetDataLahanTigaKalium),
        takeEvery(ActionType.LAHAN_TIGA_KELEMBAPAN,handleGetDataLahanTigaNitrogen),
        takeEvery(ActionType.LAHAN_TIGA_NITROGEN,handleGetDataLahanTigaNitrogen),
        takeEvery(ActionType.LAHAN_TIGA_PH,handleGetDataLahanTigaPh),
        takeEvery(ActionType.LAHAN_TIGA_POTASIUM,handleGetDataLahanTigaPotasium),
        //lahan empat
        takeEvery(ActionType.LAHAN_EMPAT_KALIUM,handleGetDataLahanEmpatKalium),
        takeEvery(ActionType.LAHAN_EMPAT_KELEMBAPAN,handleGetDataLahanEmpatKelembapan),
        takeEvery(ActionType.LAHAN_EMPAT_NITROGEN,handleGetDataLahanEmpatNitrogen),
        takeEvery(ActionType.LAHAN_EMPAT_PH,handleGetDataLahanEmpatPh),
        takeEvery(ActionType.LAHAN_EMPAT_POTASIUM,handleGetDataLahanEmpatPotasium),

        //baru
        takeEvery(ActionType.DATA_BARU_LAHAN_SATU, handleGetDatabaruLahanSatu),
        takeEvery(ActionType.DATA_BARU_LAHAN_DUA,handleGetDatabaruLahanDua),
        takeEvery(ActionType.DATA_BARU_LAHAN_TIGA,handleGetDatabaruLahanTiga),
        takeEvery(ActionType.DATA_BARU_LAHAN_EMPAT,handleGetDatabaruLahanEmpat),
    ])
}

export default watchAll;