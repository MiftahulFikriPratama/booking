const {connection} = require('../config/Database')

const user = async function (req, res) {
  const conn = await connection.getConnection()
  try {
      const query = await conn.query('SELECT * FROM user' );

      const data = query[0];

      response.status(200).json(data)
      
  } catch (err) {
      console.log(err);
      response.status(500).json({ error: "Internal server error" }); // Send an error response
  } finally {
      conn.release();
  }
}


const insert = async function (req, res){
  const conn = await connection.getConnection()
  try {
    const {nm, em, ps, tgl, jk, al, no} = req.body


      const testing = await conn.query(
        "INSERT INTO user (nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp) VALUES (?, ?, ?, ?, ?, ?, ?) ",
        [nm, em, ps, tgl, jk, al, no]
        );
        
      const data = query[0];

      res.status(200).json('Data User Successfuly Inserted')

    } catch (err) {
      console.log(err);
    } finally {
      conn.release()
    }
}

const update = async function (req, res) {
  const conn = await connection.getConnection()
  try {
    const {nm} = req.body

      const testing = await conn.query(
        "UPDATE user " +
        "SET nama = ? " + 
        "WHERE id = 9;", [nm]
    );

    const data = query[0];
    
    res.status(200).json('Data User Successfuly Inserted')
      
  } catch (err) {
    console.log(err);
  } finally {
    conn.release()
  }
  
}
  


const deleteDate = async function (req, res) {
  const conn = await connection.getConnection();
  const {id} = req.params
  
  try {
    const {id} = req.body

      const testing = await conn.query(
        "DELETE FROM user WHERE id = ?;", [id]
        );

        const data = query[0];

        res.status(200).json('User Successfuly Deleted')

      } catch (err) {
        console.log(err);
      } finally {
        conn.release();
      }
}


module.exports = {
  user,
  insert,
  update,
  deleteDate
};