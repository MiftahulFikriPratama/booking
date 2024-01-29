const {connection} = require('../config/Database')
async function booking (){
    const conn = await connection.getConnection()
    try {
        const testing = await conn.query(
          'SELECT * FROM `booking_cuci_kendaraan`'
        );
      
        console.log(testing[0]); // results contains rows returned by server
        
      } catch (err) {
        console.log(err);
      } finally {
        conn.release()
      }
}

booking()