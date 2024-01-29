const {connection} = require('../config/Database')
async function notifikasi (){
    const conn = await connection.getConnection()
    try {
        const testing = await conn.query(
          'SELECT * FROM `notifikasi_cuci_kendaraan`'
        );
      
        console.log(testing[0]); // results contains rows returned by server
        
      } catch (err) {
        console.log(err);
      }
}

notifikasi()