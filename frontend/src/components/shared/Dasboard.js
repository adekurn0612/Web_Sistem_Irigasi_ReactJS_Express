import React, {useEffect} from 'react';
import DasboardComp from './dasboardComp.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import humidity from "../../Icon/humidity.png";
import ph from "../../Icon/ph.png";
import potassium from "../../Icon/potassium.png";
import sodium from "../../Icon/sodium.png";
import phosphorus from "../../Icon/phosphorus.png";
import { reqDataBaruLahanDua, reqDataBaruLahanEmpat, reqDataBaruLahanSatu, reqDataBaruLahanTiga } from '../../redux/action/actionReducer.js';

export default function Home(props) {
  const rows = Array(5).fill(null); // Membuat array dengan panjang 3

  const dispatch = useDispatch()

  const { baru_satu } = useSelector((state) => state.dataBaruLahanSatuReducer);
  const { baru_dua } = useSelector((state) => state.dataBaruLahanDuaReducer);
  const { baru_tiga } = useSelector((state) => state.dataBaruLahanTigaReducer);
  const { baru_empat } = useSelector((state) => state.dataBaruLahanEmpatReducer);

  console.log(baru_satu)
  // console.log(baru_dua[0])
  // console.log(baru_tiga[0])
  // console.log(baru_empat[0])

useEffect(() => {
  dispatch(reqDataBaruLahanSatu());
  dispatch(reqDataBaruLahanDua());
  dispatch(reqDataBaruLahanTiga());
  dispatch(reqDataBaruLahanEmpat());

}, []);

// const listMenu = [
//   {
//     name: 'Humidity',
//     icon: humidity,
//     value:[
//       {lahanSatuKelembapan : baru_satu[0].sensor_kelembaban},
//       {lahanDuaKelembapan : baru_dua[0].sensor_kelembaban},
//       {lahanTigaKelembapan : baru_tiga[0].sensor_kelembaban},
//       {lahanEmpatKelembapan : baru_empat[0].sensor_kelembaban}
//     ],
//   },
//   {
//     name: 'Natrium',
//     icon: sodium,
//     value: [
//       {lahanSatuNatrium : baru_satu[0].sensor_n},
//       {lahanDuaNatrium : baru_dua[0].sensor_n},
//       {lahanTigaNatrium : baru_tiga[0].sensor_n},
//       {lahanEmpatNatrium : baru_empat[0].sensor_n}
//     ],
//   },
//   {
//     name: 'Kalium',
//     icon: potassium,
//     value: [
//       {lahanSatuKalium : baru_satu[0].sensor_k},
//       {lahanDuaKalium : baru_dua[0].sensor_k},
//       {lahanTigaKalium : baru_tiga[0].sensor_k},
//       {lahanEmpatKalium : baru_empat[0].sensor_k}
//     ],
//   },
//   {
//     name: 'pH',
//     icon: ph,
//     value: [
//       {lahanSatuPH : baru_satu[0].sensor_ph},
//       {lahanDuaPH : baru_dua[0].sensor_ph},
//       {lahanTigaPH : baru_tiga[0].sensor_ph},
//       {lahanEmpatPH : baru_empat[0].sensor_ph}
//     ],
//   },
//   {
//     name: 'phospat',
//     icon: phosphorus,
//     value: [
//       {lahanSatuPhospat : baru_satu[0].sensor_p},
//       {lahanDuaPhospat : baru_dua[0].sensor_p},
//       {lahanTigaPhospat : baru_tiga[0].sensor_p},
//       {lahanEmpatPhospat : baru_empat[0].sensor_p}
//     ],
//   },
// ];


  return (
    <div>
      <p className="text-gray-700 text-center text-3xl py-3 font-bold"></p>
      {/* {listMenu.map((menu)=>  */}
      {rows.map((_, rowIndex) => (
        <div key={rowIndex}>
          <div className="text-center font-bold mb-2">Lahan {rowIndex + 1}</div>
          <div className="px-3 grid lg:grid-cols-5 gap-5 mb-10">
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              {/* <DasboardComp name={menu.name} icon ={menu.icon} value={menu.value}/> */}
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <DasboardComp ph={ph}/>
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <DasboardComp />
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <DasboardComp />
            </div>
            <div className="rounded bg-blue h-40 shadow-sm py-2">
              <DasboardComp />
            </div>
          </div>
          <div className="flex justify-center">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="text-center inline-block w-10 h-10 bg-blue rounded-full text-white font-bold mx-2"
                >
                  {index + 1}
                </span>
              ))}
          </div>
        </div>
      ))}
      {/* )} */}
    </div>
  );
}
