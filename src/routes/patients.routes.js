import {Router} from "express"

import {createPatient, getPatient, getPatientById, getTotalPatients, updatePatientsById, deletePatientById} from "../controllers/patients.controllers"

const router = Router()

router.get("/patients", getPatient);

router.post("/patients", createPatient);

router.get("/patients/count", getTotalPatients);

router.get("/patients/:Id", getPatientById);

router.delete("/patients/:Id", deletePatientById);

router.put("/patients/:Id", updatePatientsById);

export default router