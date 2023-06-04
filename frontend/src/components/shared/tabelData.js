import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reqGetAll } from '../../redux/action/actionReducer';

const TabelData = () => {
  const { data, message, refresh } = useSelector((state) => state.dataReducer);
  // console.log(data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reqGetAll());
  }, [refresh]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Potasium
                  </th>
                  <th scope="col" className="px-6 py-4">
                    PH
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Kalium
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Natrium
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Kelembapan
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Waktu
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-neutral-100 dark:bg-neutral-700" : "bg-white dark:bg-neutral-600"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.nama}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.sensor_p}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.sensor_ph}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.sensor_k}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.sensor_n}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.sensor_kelembaban}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelData;
