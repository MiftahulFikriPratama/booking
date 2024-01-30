// const {connection} = require('../config/Database')

// async function user (){
//     const conn = await connection.getConnection()
//     try {
//         const testing = await conn.query(
//           'SELECT * FROM booking_cuci_kendaraan'
//         );
      
//         console.log(testing[0]); // results contains rows returned by server
        
//       } catch (err) {
//         console.log(err);
//       } finally {
//         conn.release()
//       }
// }

// // user();

// async function insert (a,b,c,d,e,f){
//   const conn = await connection.getConnection()
//   try {
//       const testing = await conn.query(
//         "INSERT INTO booking_cuci_kendaraan (id_user, jenis_kendaraan, waktu_booking, metode_pembayaran, total_pembayaran, status_booking) VALUES (?, ?, ?, ?, ?, ?) ",
//             [a,b,c,d,e,f]
//         );
    
//       console.log(testing[0]); // results contains rows returned by server
 
//     } catch (err) {
//       console.log(err);
//     } finally {
//       conn.release()
//     }
// }

// insert('9', 'pesawat', '2024-01-26 05:30:13', 'tunai', '1000.000', 'Selesai');


// async function update (al){
//   const conn = await connection.getConnection()
//   try {
//       const testing = await conn.query(
//         "UPDATE booking_cuci_kendaraan " +
//         "SET jenis_kendaraan = ? " + 
//         "WHERE id = 12;", [al]
//     );
    

//       console.log(testing[0]); // results contains rows returned by server
      
//     } catch (err) {
//       console.log(err);
//     } finally {
//       conn.release()
//     }
// }

// // update('becak');


// async function deleteData(id) {
//   const conn = await connection.getConnection();
//   console.log(id)
//   try {
//       const testing = await conn.query(
//           "DELETE FROM booking_cuci_kendaraan WHERE id = ?;", [id]
//           );

//       console.log(testing[0]);
//   } catch (err) {
//       console.log(err);
//   } finally {
//       conn.release();
//   }
// }

// // deleteData(6);