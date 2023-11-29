import { getConnection, sql, queries} from "../database";

export const getPatient = async(req, res) => {
try {
const pool = await getConnection();
const result = await pool.request().query(queries.getAllPatients)
res.json(result.recordset)
} catch (error) {
    res.status(500)   
    res.send(error.message) 
}
};

export const createPatient = async(req, res) =>
{
    const {Nombre, Apellido, FechaNac, Genero, Direccion, HistorialMed} = req.body;
    let {Celular} = req.body;

    if (Nombre == null || Apellido == null || FechaNac == null || Genero == null || Direccion == null || HistorialMed == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'});
    }

    if (Celular == null) Celular = 0;

    try{
        const pool = await getConnection();
        await pool.request()
        .input('Id', sql.Int, Id)
        .input('FechaHoraCita', sql.VarChar, Apellido)
        .input('MotivoCita', sql.Text, FechaNac)
        .input('MedicoAsignado', sql.VarChar, Genero)
        .query(queries.addNewMediDate);

        res.json({Nombre,Apellido,FechaNac,Genero,Direccion,Celular,HistorialMed}); 
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

export const deletePatientById = async (req, res) =>
{
    const {Id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', Id)
    .query(queries.deleteProduct);

    res.send("Se borro con exito");
};

export const getTotalPatients = async (req, res) =>
{
    const {Id} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .query(queries.getTotalPatients);

    console.log(result);

    res.json(result.recordset[0]);
};

export const updatePatientsById = async (req,res) =>
{
    const {Nombre, Apellido, FechaNac, Genero, Direccion, HistorialMed} = req.body;
    let {Celular} = req.body;
    const {Id} = req.params

    if (Nombre == null || Apellido == null || FechaNac == null || Genero == null || Direccion == null || HistorialMed == null)
    {
        return res.status(400).json({msg: 'Bad Request, Please Fill all fields'})
    } 
    
    const pool = await getConnection();
    await pool.request()
    .input('Nombre', sql.VarChar, Nombre)
    .input('Apellido', sql.VarChar, Apellido)
    .input('FechaNac', sql.VarChar, FechaNac)
    .input('Genero', sql.VarChar, Genero)
    .input('Direccion', sql.Text, Direccion)
    .input('Celular', sql.NChar, Celular)
    .input('HistorialMed', sql.Text, HistorialMed)
    .query(queries.updatePatientsById);

    res.json({Nombre,Apellido,FechaNac,Genero,Direccion,Celular,HistorialMed}); 
}