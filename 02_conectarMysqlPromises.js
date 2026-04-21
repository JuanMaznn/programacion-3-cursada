import mysql from 'mysql2/promise';

const conexion = mysql.createConnection(
    // host: process.env
    // user:
    // password:
    // database:
)

async function getAllActors() {
  try {
    // Creo la conexión
    const conexion = await mysql.createConnection({
    // host: process.env
    // user:
    // password:
    // database:
    });

    // Defino el string de consulta
    const sqlQuery = 'SELECT * FROM actor';

    // Ejecuto la consulta
    const [rows] = await conexion.query(sqlQuery);

    console.log('Query results:', rows);

    await conexion.end();

  } catch (err) {
    console.error('Error executing SELECT query:', err);
  }
}

getAllActors();