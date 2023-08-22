
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {MdCottage} from "react-icons/md"
import { BsFillBarChartFill, BsFillDatabaseFill , } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

const SideBar = forwardRef(({showNav}, ref) => {
      const {pathname} = useLocation();
      const listMenu =[
        {to:'/dasboard/', path :'/dasboard/', icon: <MdCottage/> , name :"Home"},
        {to:'logdata', patch:'/dasboard/logdata', icon: <BsFillDatabaseFill/>, name:"LogData"},

        {to:'lahansatu', path :'/dasboard/lahansatu', icon: <BsFillBarChartFill/> , name :"lahan Satu"},
        {to:'lahandua', patch:'/dasboard/lahandua', icon: <BsFillBarChartFill/>, name:"Lahan Dua"},
        {to:'lahantiga', path :'/dasboard/lahantiga', icon: <BsFillBarChartFill/> , name :"Lahan Tiga"},
        {to:'lahanempat', patch:'/dasboard/lahanempat', icon: <BsFillBarChartFill/>, name:"Lahan Empat"},



  ];

  const handleLogout = () => {
    // Lakukan proses logout di sini (misalnya, menghapus token atau sesi)
    // Contoh: panggil fungsi atau aksi untuk melakukan log out pada server

    // Setelah logout, bisa diarahkan kembali ke halaman login atau beranda
    // Contoh: window.location.href = '/login';
  };

  return (
    <div ref={ref} className="fixed w-56 h-full bg-fuchsia-50 shadow-sm">
      <div className="flex justify-center mt-1 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="../../OIP.png"
            alt="company logo"
          />
          </picture>
      </div>
      <div className="flex flex-col ">
      {(listMenu || []).map((mn)=>(
        <Link to={`${mn.to}`}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname === mn.path
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
                {mn.icon}
            </div>
            <div>
              <p>{mn.name}</p>  
            </div>
          </div>
        </Link>
))}
 <button
          onClick={handleLogout}
          className=" py-3 mx-10 rounded-md text-center cursor-pointer mb-3 flex items-center justify-center transition-colors text-gray-400 hover:bg-blue-500 bg-blue-100"
        >
          <div className="flex items-center">
            <HiOutlineLogout className="mr-2" />
            <p className="m-0">Log Out</p>
          </div>
        </button>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";


export default SideBar;
