import { Router } from "express";
import dataControllerAll from "../controller/dataControllerAll.js";
import lahanSatuController from "../controller/lahanSatuController.js";
import lahanDuaController from "../controller/lahanDuaController.js";
import lahanTigaController from "../controller/lahanTigaController.js";
import lahanEmpatController from "../controller/lahanEmpatController.js";
import loginController from "../controller/loginController.js";
import dataBaru from "../controller/dataBaru.js";

const router = Router();


router.get("/data" , dataControllerAll.getlAll);

//user
router.post("/user/createUser" , loginController.createUser)
router.post("/user/login" , loginController.login)

//lahan 1
router.get("/data/lahanSatu/dataKalium" , lahanSatuController.dataKalium);
router.get("/data/lahanSatu/dataNitrogen" , lahanSatuController.dataNitrogen);
router.get("/data/lahanSatu/dataPH" , lahanSatuController.dataPH);
router.get("/data/lahanSatu/dataPotasium" , lahanSatuController.dataPotasium);
router.get("/data/lahanSatu/dataKelembapan" , lahanSatuController.dataKelembapan);
//lahan 2
router.get("/data/lahanDua/dataKalium" , lahanDuaController.dataKalium);
router.get("/data/lahanDua/dataNitrogen" , lahanDuaController.dataNitrogen);
router.get("/data/lahanDua/dataPH" , lahanDuaController.dataPH);
router.get("/data/lahanDua/dataPotasium" , lahanDuaController.dataPotasium);
router.get("/data/lahanDua/dataKelembapan" , lahanDuaController.dataKelembapan);

//lahan 3
router.get("/data/lahanTiga/dataKalium" , lahanTigaController.dataKalium);
router.get("/data/lahanTiga/dataNitrogen" , lahanTigaController.dataNitrogen);
router.get("/data/lahanTiga/dataPH" , lahanTigaController.dataPH);
router.get("/data/lahanTiga/dataPotasium" , lahanTigaController.dataPotasium);
router.get("/data/lahanTiga/dataKelembapan" , lahanTigaController.dataKelembapan);

//lahan 4
router.get("/data/lahanEmpat/dataKalium" , lahanEmpatController.dataKalium);
router.get("/data/lahanEmpat/dataNitrogen" , lahanEmpatController.dataNitrogen);
router.get("/data/lahanEmpat/dataPH" , lahanEmpatController.dataPH);
router.get("/data/lahanEmpat/dataPotasium" , lahanEmpatController.dataPotasium);
router.get("/data/lahanEmpat/dataKelembapan" , lahanEmpatController.dataKelembapan);

//lahan 1 terbaru
router.get("/data/lahanSatu/dataKalium/terbaru" , lahanSatuController.dataKaliumTerbaru);
router.get("/data/lahanSatu/dataNitrogen/terbaru" , lahanSatuController.dataNitrogenTerbaru);
router.get("/data/lahanSatu/dataPH/terbaru" , lahanSatuController.dataPHTerbaru);
router.get("/data/lahanSatu/dataPotasium/terbaru" , lahanSatuController.dataPotasiumTerbaru);
router.get("/data/lahanSatu/dataKelembapan/terbaru" , lahanSatuController.dataKelembapanTerbaru);
//lahan 2 terbaru
router.get("/data/lahanDua/dataKalium/terbaru" , lahanDuaController.dataKaliumTerbaru);
router.get("/data/lahanDua/dataNitrogen/terbaru" , lahanDuaController.dataNitrogenTerbaru);
router.get("/data/lahanDua/dataPH/terbaru" , lahanDuaController.dataPHTerbaru);
router.get("/data/lahanDua/dataPotasium/terbaru" , lahanDuaController.dataPotasiumTerbaru);
router.get("/data/lahanDua/dataKelembapan/terbaru" , lahanDuaController.dataKelembapanTerbaru);

//lahan 3 terbaru
router.get("/data/lahanTiga/dataKalium/terbaru" , lahanTigaController.dataKaliumTerbaru);
router.get("/data/lahanTiga/dataNitrogen/terbaru" , lahanTigaController.dataNitrogenTerbaru);
router.get("/data/lahanTiga/dataPH/terbaru" , lahanTigaController.dataPHTerbaru);
router.get("/data/lahanTiga/dataPotasium/terbaru" , lahanTigaController.dataPotasiumTerbaru);
router.get("/data/lahanTiga/dataKelembapan/terbaru" , lahanTigaController.dataKelembapanTerbaru);

//lahan 4 terbaru
router.get("/data/lahanEmpat/dataKalium/terbaru" , lahanEmpatController.dataKaliumTerbaru);
router.get("/data/lahanEmpat/dataNitrogen/terbaru" , lahanEmpatController.dataNitrogenTerbaru);
router.get("/data/lahanEmpat/dataPH/terbaru" , lahanEmpatController.dataPHTerbaru);
router.get("/data/lahanEmpat/dataPotasium/terbaru" , lahanEmpatController.dataPotasiumTerbaru);
router.get("/data/lahanEmpat/dataKelembapan/terbaru" , lahanEmpatController.dataKelembapanTerbaru);


router.get("/dataBaruLahanSatu" , dataBaru.dataBaruLahanSatu);
router.get("/dataBaruLahanDua" , dataBaru.dataBaruLahanDua);
router.get("/dataBaruLahanTiga" , dataBaru.dataBaruLahanTiga);
router.get("/dataBaruLahanEmpat" , dataBaru.dataBaruLahanEmpat);
export default router