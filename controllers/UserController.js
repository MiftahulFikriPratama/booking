import { connection } from "../config/Database";

// A simple SELECT query
try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }