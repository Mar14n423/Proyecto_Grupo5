import { getConnection, sql, queries} from "../database";

export const getMedicDate = async(req, res) => {
try {
const pool = await getConnection();
const result = await pool.request().query(queries.getAllMedicDates)
res.json(result.recordset)
} catch (error) {
    res.status(500)   
    res.send(error.message) 
}
};

export const createMedicDate = async(req, res) =>
{
    const {Id, FechaHoraCita, MedicoAsignado} = req.body;
    let {MotivoCita} = req.body;

    if (Id == null || FechaHoraCita == null || MedicoAsignado == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'});
    }

    if (MotivoCita == null) MotivoCita = "Consulta General";

    try{
        const pool = await getConnection();
        await pool.request()
        .input('Id', sql.Int, Id)
        .input('FechaHoraCita', sql.VarChar, FechaHoraCita)
        .input('MotivoCita', sql.Text, MotivoCita)
        .input('MedicoAsignado', sql.VarChar, MedicoAsignado)
        .query(queries.addNewMediDate);

        res.json({Id,FechaHoraCita,MotivoCita, MedicoAsignado}); 
    } catch (error) {
        res.status(500)   
        res.send(error.message) 
    }
};
    
export const getPatientById = async (req, res) => {
    const {Id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', Id)
    .query(queries.getPatientById);
    res.send(result.recordset[0]);
    res.send(Id)
}

export const deleteMediDateByIdCita = async (req, res) =>
{
    const {Id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('IdCita', IdCita)
    .query(queries.deleteMediDateByIdCita);

    res.send("Se borro con exito");
};

export const getTotalMedicDates = async (req, res) =>
{
    const {Id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .query(queries.getTotalMedicDates);

    console.log(result);

    res.json(result.recordset[0]);
};

export const updateMedicDateByIdCita = async (req,res) =>
{
    const {Id, FechaHoraCita, MedicoAsignado} = req.body;
    let {MotivoCita} = req.body;

    if (Id == null || FechaHoraCita == null || MedicoAsignado == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    } 
    
    const pool = await getConnection();
    await pool.request()
    .input('Id', sql.Int, Id)
    .input('FechaHoraCita', sql.VarChar, FechaHoraCita)
    .input('MotivoCita', sql.Text, MotivoCita)
    .input('MedicoAsignado', sql.VarChar, MedicoAsignado)
    .query(queries.updateMedicDateByIdCita);

    res.json({Id, FechaHoraCita, MotivoCita, MedicoAsignado}); 
};

