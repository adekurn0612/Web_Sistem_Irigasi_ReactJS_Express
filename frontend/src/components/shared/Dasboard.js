import React, {useEffect} from 'react';
import DasboardComp from './dasboardComp.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import humidity from "../../Icon/humidity.png";
import ph from "../../Icon/ph.png";
import potassium from "../../Icon/potassium.png";
import sodium from "../../Icon/sodium.png";
import phosphorus from "../../Icon/phosphorus.png";
import { Link } from 'react-router-dom';
import { reqDataBaruLahanDua, reqDataBaruLahanEmpat, reqDataBaruLahanSatu, reqDataBaruLahanTiga } from '../../redux/action/actionReducer.js';

export default function Home(props) {
  const rows = Array(4).fill(null); // Membuat array dengan panjang 3

  const dispatch = useDispatch()

  const { baru_satu ,refresh } = useSelector((state) => state.dataBaruLahanSatuReducer);
  const { baru_dua } = useSelector((state) => state.dataBaruLahanDuaReducer);
  const { baru_tiga } = useSelector((state) => state.dataBaruLahanTigaReducer);
  const { baru_empat } = useSelector((state) => state.dataBaruLahanEmpatReducer);

  // console.log('satu',baru_satu[0][0].sensor_kelembaban)

useEffect(() => {
  dispatch(reqDataBaruLahanSatu());
  dispatch(reqDataBaruLahanDua());
  dispatch(reqDataBaruLahanTiga());
  dispatch(reqDataBaruLahanEmpat());

}, [refresh]);

const icons = [humidity, ph, potassium, sodium, phosphorus];
const name = ['Kelembapan', 'ph', 'Potassium', 'Natrium', 'Phosphorus'];

const values = [
  [
    baru_satu[0]?.[0]?.sensor_kelembaban,
  baru_satu[0]?.[0]?.sensor_ph,
  baru_satu[0]?.[0]?.sensor_p,
  baru_satu[0]?.[0]?.sensor_n,
  baru_satu[0]?.[0]?.sensor_k,
  ],
  [
    baru_dua[0]?.[0]?.sensor_kelembaban,
  baru_dua[0]?.[0]?.sensor_ph,
  baru_dua[0]?.[0]?.sensor_p,
  baru_dua[0]?.[0]?.sensor_n,
  baru_dua[0]?.[0]?.sensor_k,
  ],
  [
    baru_tiga[0]?.[0]?.sensor_kelembaban,
  baru_tiga[0]?.[0]?.sensor_ph,
  baru_tiga[0]?.[0]?.sensor_p,
  baru_tiga[0]?.[0]?.sensor_n,
  baru_tiga[0]?.[0]?.sensor_k,],
  [
    baru_empat[0]?.[0]?.sensor_kelembaban,
  baru_empat[0]?.[0]?.sensor_ph,
  baru_empat[0]?.[0]?.sensor_p,
  baru_empat[0]?.[0]?.sensor_n,
  baru_empat[0]?.[0]?.sensor_k,
  ],
];

return (
  <div>
    <p className="text-gray-700 text-center text-3xl py-3 font-bold"></p>
    {rows.map((_, rowIndex) => (
      <div key={rowIndex}>
        <div className="text-center font-bold mb-2">Lahan {rowIndex + 1}</div>
        <div className="px-3 grid lg:grid-cols-5 gap-5 mb-10">
          {icons.map((icon, index) => (
            <div key={index} className="rounded bg-blue h-40 shadow-sm py-2">
              <Link to={`/dashboard_lahan${rowIndex + 1}`}>
                <DasboardComp icon={icon} name={name[index]} value={values[rowIndex % values.length][index]} />
              </Link>
            </div>
          ))}
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
  </div>
);


}
