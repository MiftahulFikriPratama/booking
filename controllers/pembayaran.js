const {connection} = require('../config/Database')
async function pembayaran (){
    const conn = await connection.getConnection()
    try {
        const testing = await conn.query(
          'SELECT * FROM `pembayaran_cuci_kendaraan`'
        );
      
        console.log(testing[0]); // results contains rows returned by server
        
      } catch (err) {
        console.log(err);
      }
}

pembayaran()