import mysql from 'mysql2';

const conexion = mysql.createConnection(
    // host: process.env.
    // user:
    // password:
    // database:
)

const sqlQuery = 'SELECT * FROM actor';

conexion.query(sqlQuery, (queryErr, results) => {
    if (queryErr) {
        console.error("Error ejecutando la consulta:", queryErr)
        return;
    }

    console.log("Resultados:", results);
    
});
