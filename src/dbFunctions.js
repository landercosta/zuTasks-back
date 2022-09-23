const sqlite3 = require('sqlite3').verbose();

const db = dbStart();

function dbStart(){
  const db = dbConnect();
  createTasksTable(db);

  return db;
}

function dbConnect(){
  const db = new sqlite3.Database("./zuTasks.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err){
      return console.error(err.message);
    }
    console.log('Database successfully connected.');
  });

  return db;
}

function createTasksTable(db){
  const sql = "CREATE TABLE IF NOT EXISTS tasks (queue INTEGER UNIQUE NOT NULL, name STRING NOT NULL, numRecurrence INTEGER,unitRecurrence STRING, minDateHour STRING (17), alarm STRING (17), tags STRING, priority INTEGER NOT NULL)";
  db.run(sql);
}

module.exports = {
  
}