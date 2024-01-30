const {connection} = require('../config/Database')

const user = async function (request, response) {
  const conn = await connection.getConnection()
  try {
      const query = await conn.query('SELECT * FROM booking_cuci_kendaraan' );
      const queryData = await conn.query('SELECT * FROM user');

      const data = query[0];

      response.status(200).json(data)
  } catch (err) {
      console.log(err);
      response.status(500).json({ error: "Internal server error" }); // Send an error response
  } finally {
      conn.release();
  }
}



// user();

const insert = async function (req, res){
  const conn = await connection.getConnection()
  try {
    const {id_user, jenisk, waktub, metode, totalp, status} = req.body


      const testing = await conn.query(
        "INSERT INTO booking_cuci_kendaraan (id_user, jenis_kendaraan, waktu_booking, metode_pembayaran, total_pembayaran, status_booking) VALUES (?, ?, ?, ?, ?, ?) ",
        [id_user,jenisk, waktub, metode, totalp, status]
        );
        
      // console.log(testing[0]); // results contains rows returned by server
 
      res.status(200).json('Data User Successfuly Inserted')
    } catch (err) {
      console.log(err);
    } finally {
      conn.release()
    }
}


async function update (al){
  const conn = await connection.getConnection()
  try {
      const testing = await conn.query(
        "UPDATE booking_cuci_kendaraan " +
        "SET jenis_kendaraan = ? " + 
        "WHERE id = 12;", [al]
    );
    
    
    console.log(testing[0]); // results contains rows returned by server
      
  } catch (err) {
    console.log(err);
  } finally {
    conn.release()
  }
}


const destroy = async function (req, res) {
  // console.log(a)
  // return
  const conn = await connection.getConnection();
  const {id} = req.params
  
  try {
      const testing = await conn.query(
        "DELETE FROM user WHERE id = ?;", [id]
        );

        console.log(testing[0]);

        res.status(200).json('User Successfuly Deleted')
      } catch (err) {
        console.log(err);
      } finally {
        conn.release();
      }
}

const a = async function (req, res) {
  
}

module.exports = {
  user,
  insert,
  destroy,
  a
};