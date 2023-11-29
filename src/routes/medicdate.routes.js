import {Router} from "express"

import {createMedicDate, getPatient, getPatientById, getTotalMedicDates, updateMedicDateByIdCita, deleteMediDateByIdCita, getMedicDate} from "../controllers/medicdate.controllers"

const router = Router()

router.get("/medicdate", getMedicDate);

router.post("/medicdate", createMedicDate);

router.get("/medicdate/count", getTotalMedicDates);

router.get("/medicdate/:Id", getPatientById);

router.delete("/medicdate/:IdCita", deleteMediDateByIdCita);

router.put("/medicdate/:IdCita", updateMedicDateByIdCita);

export default router