import { sequelize } from "../models/init-models.js";
import ExcelJS from "exceljs";

const excelDownload = async (req, res) => {
    try {
        const { awal, akhir } = req.query; // Menggunakan req.query untuk mendapatkan parameter dari permintaan GET
        const query = `
            SELECT id,timestamp, nama, sensor_kelembaban, sensor_n, sensor_p, sensor_k, sensor_ph 
            FROM coba
            WHERE timestamp <= :akhir AND timestamp >= :awal;
        `;

        const result = await sequelize.query(query, {
            replacements: { awal, akhir },
            type: sequelize.QueryTypes.SELECT
        });

        // Create a new Excel workbook and sheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Data");

        // Define header row
        const headerRow = ["ID","Waktu", "Nama", "Kelembapan", "Sensor N", "Sensor P", "Sensor K", "Sensor pH"];
        worksheet.addRow(headerRow);

        // Populate data rows
        result.forEach(row => {
            const dataRow = [
                row.id, row.timestamp, row.nama, row.sensor_kelembaban,
                row.sensor_n, row.sensor_p, row.sensor_k, row.sensor_ph
            ];
            worksheet.addRow(dataRow);
        });

        // Set response headers for downloading the Excel file
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

        // Send the Excel file as response
        await workbook.xlsx.write(res);

        // End the response
        res.end();
    } catch (error) {
        res.json(error.message);
    }
};

export default { excelDownload };
