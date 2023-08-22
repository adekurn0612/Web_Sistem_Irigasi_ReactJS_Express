import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reqExcel, reqGetAll, reqdelete } from '../../redux/action/actionReducer';

const TabelData = () => {
  const { data, message, refresh } = useSelector((state) => state.dataReducer);
  // console.log(data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reqGetAll());
  }, [refresh]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const formatDateToCustom = (dateString) => {
    const [year, day, month] = dateString.split('-');
    return `${year}-${day}-${month}`;
  };

  const formatDateToInput = (formattedDate) => {
    const [year, day, month] = formattedDate.split('-');
    return `${year}-${month}-${day}`;
  };

  const handleDownload = (event) => {
    event.preventDefault();
    if (startDate && endDate) {
      const awal = formatDateToCustom(startDate);
      const akhir = formatDateToCustom(endDate);
      dispatch(reqExcel(awal, akhir));
    } else {
      console.log('Please select both start and end dates.');
    }
  };

  const handleDelete = (event)=>{
    dispatch(reqdelete())
  }
  
  return (
    <>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
              <div className="flex justify-end">
              <div className="flex -center">
      <div classnName="mr-2">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="mr-2">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
                <button onClick={handleDownload}
                  className="flex bg-blue-700 hover:bg-purple-500 text-white font-bold py-1 px-2 rounded-full">
                  Download
                </button>
                <button onClick={handleDelete}
                  className="flex bg-blue-700 hover:bg-purple-500 text-white font-bold py-1 px-2 rounded-full">
                  Delete
                </button>
              </div>
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
  {data && data.length > 0 ? (
    data.map((item, index) => (
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
    ))
  ) : (
    <tr>
      <td className="px-6 py-4" colSpan="8">
        Data Kosong
      </td>
    </tr>
  )}
</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );           
};

export default TabelData;
