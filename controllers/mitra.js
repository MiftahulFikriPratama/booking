const {connection} = require('../config/Database')
async function mitra (){
    const conn = await connection.getConnection()
    try {
        const testing = await conn.query(
          'SELECT * FROM `mitra_cuci_kendaraan`'
        );
      
        console.log(testing[0]); // results contains rows returned by server
        
      } catch (err) {
        console.log(err);
      }
}

mitra()