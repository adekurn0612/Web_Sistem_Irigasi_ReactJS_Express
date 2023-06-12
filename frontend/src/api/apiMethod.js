import axios from '../config/endpoint';

//semua data
const getallData = () => {
    return axios.get('data')
    //   .then(response => {
    //     console.log(response.data); // Tampilkan data ke konsol
    //     return response.data;
    //   })
    //   .catch(error => {
    //     console.log(error); // Tampilkan error ke konsol jika terjadi masalah
    //     throw error;
    //   });
    }  


//lahan satu
const dataKaliumLahanSatu= () => {
    return axios.get('data/lahanSatu/dataKalium')
    // .then(response => {
    //     console.log(response.data); // Tampilkan data ke konsol
    //     return response.data;
    //   })
    //   .catch(error => {
    //     console.log(error); // Tampilkan error ke konsol jika terjadi masalah
    //     throw error;
    //   });
   }

   const dataKaliumLahanSatuBaru= () => {
    return axios.get('data/lahanSatu/dataKalium/terbaru')
   }

const dataPhLahanSatu = ()=>{
    return axios.get('/data/lahanSatu/dataPH')
   }
   const dataPhLahanSatuBaru = ()=>{
    return axios.get('/data/lahanSatu/dataPH/terbaru')
   }

const dataNitrogenLahanSatu=()=>{
    return axios.get('/data/lahanSatu/dataNitrogen')
}
const dataNitrogenLahanSatuBaru=()=>{
    return axios.get('/data/lahanSatu/dataNitrogen/terbaru')
}

const dataPotasiumLahanSatu=()=>{
    return axios.get('/data/lahanSatu/dataPotasium')
}
const dataPotasiumLahanSatuBaru=()=>{
    return axios.get('/data/lahanSatu/dataPotasium/terbaru')
}

const dataKelembapanLahanSatu =()=>{
    return axios.get('/data/lahanSatu/dataKelembapan')
}
const dataKelembapanLahanSatubaru =()=>{
    return axios.get('/data/lahanSatu/dataKelembapan/terbaru')
}


//lahan dua
const dataKaliumLahanDua= () => {
    return axios.get('data/lahanDua/dataKalium')
   }
   const dataKaliumLahanDuaBaru= () => {
    return axios.get('data/lahanDua/dataKalium/terbaru')
   }

const dataPhLahanDua = ()=>{
    return axios.get('/data/lahanDua/dataPH')
   }

   const dataPhLahanDuabaru = ()=>{
    return axios.get('/data/lahanDua/dataPH/terbaru')
   }

const dataNitrogenLahanDua=()=>{
    return axios.get('/data/lahanDua/dataNitrogen')
}
const dataNitrogenLahanDuaBaru=()=>{
    return axios.get('/data/lahanDua/dataNitrogen/terbaru')
}

const dataPotasiumLahanDua=()=>{
    return axios.get('/data/lahanDua/dataPotasium')
}

const dataPotasiumLahanDuaBaru=()=>{
    return axios.get('/data/lahanDua/dataPotasium/terbaru')
}

const dataKelembapanLahanDua =()=>{
    return axios.get('/data/lahanDua/dataKelembapan')
}

const dataKelembapanLahanDuaBaru =()=>{
    return axios.get('/data/lahanDua/dataKelembapan/terbaru')
}
//lahan tiga
const dataKaliumLahanTiga= () => {
    return axios.get('data/lahanTiga/dataKalium')
   }
   const dataKaliumLahanTigaBaru= () => {
    return axios.get('data/lahanTiga/dataKalium/terbaru')
   }

const dataPhLahanTiga = ()=>{
    return axios.get('/data/lahanTiga/dataPH')
   }

   const dataPhLahanTigabaru = ()=>{
    return axios.get('/data/lahanTiga/dataPH/terbaru')
   }

const dataNitrogenLahanTiga=()=>{
    return axios.get('/data/lahanTiga/dataNitrogen')
}
const dataNitrogenLahanTigaBaru=()=>{
    return axios.get('/data/lahanTiga/dataNitrogen/terbaru')
}

const dataPotasiumLahanTiga=()=>{
    return axios.get('/data/lahanTiga/dataPotasium')
}

const dataPotasiumLahanTigaBaru=()=>{
    return axios.get('/data/lahanTiga/dataPotasium/terbaru')
}

const dataKelembapanLahanTiga =()=>{
    return axios.get('/data/lahanTiga/dataKelembapan')
}

const dataKelembapanLahanTigaBaru =()=>{
    return axios.get('/data/lahanTiga/dataKelembapan/terbaru')
}

//lahan empat
const dataKaliumLahanEmpat= () => {
    return axios.get('data/lahanEmpat/dataKalium')
   }
   const dataKaliumLahanEmpatBaru= () => {
    return axios.get('data/lahanEmpat/dataKalium/terbaru')
   }

const dataPhLahanEmpat = ()=>{
    return axios.get('/data/lahanEmpat/dataPH')
   }

   const dataPhLahanEmpatbaru = ()=>{
    return axios.get('/data/lahanEmpat/dataPH/terbaru')
   }

const dataNitrogenLahanEmpat=()=>{
    return axios.get('/data/lahanEmpat/dataNitrogen')
}
const dataNitrogenLahanEmpatBaru=()=>{
    return axios.get('/data/lahanEmpat/dataNitrogen/terbaru')
}

const dataPotasiumLahanEmpat=()=>{
    return axios.get('/data/lahanEmpat/dataPotasium')
}

const dataPotasiumLahanEmpatBaru=()=>{
    return axios.get('/data/lahanEmpat/dataPotasium/terbaru')
}

const dataKelembapanLahanEmpat =()=>{
    return axios.get('/data/lahanEmpat/dataKelembapan')
}

const dataKelembapanLahanEmpatBaru =()=>{
    return axios.get('/data/lahanEmpat/dataKelembapan/terbaru')
}

const login =(data)=>{
    console.log(data)
    return axios.post('user/login' , data)
}

//baruu

const databaruLahanSatu=()=>{
    return axios.get('dataBaruLahanSatu')
}
const databaruLahanDua=()=>{
    return axios.get('dataBaruLahanDua')
}
const databaruLahanTiga=()=>{
    return axios.get('dataBaruLahanTiga')
}
const databaruLahanEmpat=()=>{
    return axios.get('dataBaruLahanEmpat')
}

export default  {
    getallData,
    dataKaliumLahanSatu,
    dataKaliumLahanDuaBaru,
    dataPhLahanSatu,
    dataPhLahanSatuBaru,
    dataNitrogenLahanSatu,
    dataNitrogenLahanSatuBaru,
    dataPotasiumLahanSatu,
    dataPotasiumLahanSatuBaru,
    dataKelembapanLahanSatu,
    dataKelembapanLahanSatubaru,
    dataKaliumLahanDua,
    dataKaliumLahanDuaBaru,
    dataPhLahanDua,
    dataPhLahanDuabaru,
    dataNitrogenLahanDua,
    dataNitrogenLahanDuaBaru,
    dataPotasiumLahanDua,
    dataPotasiumLahanDuaBaru,
    dataKelembapanLahanDua,
    dataKelembapanLahanDuaBaru,
    dataKaliumLahanTiga,
    dataKaliumLahanTigaBaru,
    dataPhLahanTiga,
    dataPhLahanTigabaru,
    dataNitrogenLahanTiga,
    dataNitrogenLahanTigaBaru,
    dataPotasiumLahanTiga,
    dataPotasiumLahanTigaBaru,
    dataKelembapanLahanTiga,
    dataKelembapanLahanTigaBaru,
    dataKaliumLahanEmpat,
    dataKaliumLahanEmpatBaru,
    dataPhLahanEmpat,
    dataPhLahanEmpatbaru,
    dataNitrogenLahanEmpat,
    dataNitrogenLahanEmpatBaru,
    dataPotasiumLahanEmpat,
    dataPotasiumLahanEmpatBaru,
    dataKelembapanLahanEmpat,
    dataKelembapanLahanEmpatBaru,
    login,
    databaruLahanSatu,
    databaruLahanDua,
    databaruLahanTiga,
    databaruLahanEmpat,

   
}
