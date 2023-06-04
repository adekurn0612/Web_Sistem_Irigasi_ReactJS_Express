import React, { useEffect } from 'react';
import MyChart from '../components/shared/chart';
import { useDispatch, useSelector } from 'react-redux';
import {reqGetLahanEmpatKalium, reqGetLahanEmpatKelembapan, reqGetLahanEmpatNitrogen, reqGetLahanEmpatPh, reqGetLahanEmpatPotasium} from '../redux/action/actionReducer';

export default function LahanEmpat() {
  const { kalium, kaliumMessage, kaliumRefresh } = useSelector((state) => state.kaliumReducer);
  const { ph, phMessage, phRefresh } = useSelector((state) => state.phReducer);
  const { kelembapan, kelembapanMessage, kelembapanRefresh } = useSelector((state) => state.kelembapanReducer);
  const { nitrogen, nitrogenMessage, nitrogenRefresh } = useSelector((state) => state.nitrogenReducer);
  const { potasium, potasiumMessage, potasiumRefresh } = useSelector((state) => state.potasiumReducer);
  
  console.log(kalium)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reqGetLahanEmpatKalium());
    dispatch(reqGetLahanEmpatPh());
    dispatch(reqGetLahanEmpatKelembapan());
    dispatch(reqGetLahanEmpatPotasium());
    dispatch(reqGetLahanEmpatNitrogen());

  }, []);

  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white h-60 shadow-sm">
        <MyChart xValues={kalium.date} yValues={kalium.avg_sensor_k_perHari} /> 
        </div>
         <div className="rounded bg-white h-60 shadow-sm">
         <MyChart xValues={nitrogen.date} yValues={nitrogen.avg_sensor_n_perHari} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white h-60 shadow-sm">
        <MyChart xValues={ph.date} yValues={ph.avg_sensor_ph_perHari} />
        </div>
        <div className="rounded bg-white h-60 shadow-sm">
        <MyChart xValues={potasium.date} yValues={potasium.avg_sensor_p_perHari} />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white h-60 shadow-sm">
        <MyChart xValues={kelembapan.date} yValues={kelembapan.avg_sensor_kel_perHari} />
        </div>
        </div>
    </>
  );
}
