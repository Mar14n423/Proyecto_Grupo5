export const  queries = {
    getAllPatients: 'SELECT * FROM Patients',
    addNewPatient: 'INSERT INTO Patients (Nombre, Apellido, FechaNac, Genero, Direccion, Celular, HistorialMed) VALUES (@Nombre, @Apellido, @FechaNac, @Genero, @Direccion, @Celular, @HistorialMed)',
    getPatientById: 'SELECT * FROM Patients Where Id = @Id',
    deletePatientById: "DELETE FROM [FinalProject].[dbo].[Patients] WHERE Id = @Id",
    getTotalPatients: "SELECT COUNT (*) FROM Patients",
    updatePatientsById: "UPDATE Patients SET Nombre = @Nombre, Apellido = @Apellido, FechaNac = @FechaNac, Genero = @Genero, Direccion = @Direccion, Celular = @Celular, HistorialMed = @HistorialMed WHERE Id = @Id",
    getAllMedicDates: 'SELECT * FROM MedicDate',
    addNewMedicDate: 'INSERT INTO MedicDate (Id, FechaHoraCita, MotivoCita, MedicoAsignado) VALUES (@Id, @FechaHoraCita, @MotivoCita, @MedicoAsignado)',
    getPatientByIdPatient: 'SELECT * FROM MedicDate Where Id = @Id'
}