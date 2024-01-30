// const {connection} = require('../config/Database')

// async function user (){
//     const conn = await connection.getConnection()
//     try {
//         const testing = await conn.query(
//           'SELECT * FROM `user`'
//         );
      
//         console.log(testing[0]); // results contains rows returned by server
        
//       } catch (err) {
//         console.log(err);
//       } finally {
//         conn.release()
//       }
// }

// // user();

// async function insert (){
//   const conn = await connection.getConnection()
//   try {
//       const testing = await conn.query(
//         "INSERT INTO user (id, nama, email, password, tanggal_lahir, jenis_kelamin, alamat, no_hp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//             ['5', 'botol', 'botol@gmail.com', '1234567890', '1990-01-01', 'Laki Laki', 'pt botol', '089463712176']
//         );
    
//       console.log(testing[0]); // results contains rows returned by server
      
//     } catch (err) {
//       console.log(err);
//     } finally {
//       conn.release()
//     }
// }

// insert();


// async function update (){
//   const conn = await connection.getConnection()
//   try {
//       const testing = await conn.query(
//         "UPDATE user " +
//         "SET alamat = 'p login' " + 
//         "WHERE id = 5;" 
//     );
    
//       console.log(testing[0]); // results contains rows returned by server
      
//     } catch (err) {
//       console.log(err);
//     } finally {
//       conn.release()
//     }
// }

// // update();


// async function deleteData() {
//   const conn = await connection.getConnection();
//   try {
//       const testing = await conn.query(
//           "DELETE FROM user WHERE id = 5;"
//       );

//       console.log(testing[0]);
//   } catch (err) {
//       console.log(err);
//   } finally {
//       conn.release();
//   }
// }

// // deleteData();