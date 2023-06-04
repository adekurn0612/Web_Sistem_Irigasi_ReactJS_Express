import React from 'react';
import foto from "../../Icon/Khusus_Karyawan.png";

const BelumLogin = () => {
  return (
    <div>
      {/* <button className='flex rounded-xl px-3 bg-blue-300 items-center'> Login</button> */}
    <div className='flex justify-center items-center h-screen text-5xl' style={{ textAlign: 'center' }}>
      <span className=''>
        <img className='w-80 h-auto' src={foto} alt="Profile" />
      </span>
    </div>
    
    </div>
  );
};

export default BelumLogin;
