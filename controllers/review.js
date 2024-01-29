const {connection} = require('../config/Database')
async function review (){
    const conn = await connection.getConnection()
    try {
        const testing = await conn.query(
          'SELECT * FROM `review_mitra`'
        );
      
        console.log(testing[0]); // results contains rows returned by server
        
      } catch (err) {
        console.log(err);
      }
}

review()