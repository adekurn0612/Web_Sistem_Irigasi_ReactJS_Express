import React from 'react';
import { Link } from 'react-router-dom';

const DashboardComp = (props) => {
  return (
    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg p-5">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <img src={props.icon} alt="Icon" className="w-12 h-12" />
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">{props.name}</h2>
          <p className="font-bold text-3xl">
            {props.value}
            <span className="text-green-500">
              <i className="fas fa-caret-up"></i>
            </span>
          </p>
        </div>
      </div>
      <Link to={props.link}
         className="bg-blue-200 mt-4 flex select-none items-center justify-center gap-2 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full" type="button" data-ripple-dark="true">
          Lihat 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        
      </Link>
    </div>
  );
};

export default DashboardComp;
