const express = require("express");

const cors = require("cors");
const mysql = require("mysql")
const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zameco"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM announcement";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO announcement (`company`, `date`, `from_time`, `to_time`,  `duration`, `affected_area`, `purpose`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')";
    const values = [
        req.body.company,
        req.body.date,
        req.body.fromTime,
        req.body.toTime,
        req.body.duration,
        req.body.affectedArea, 
        req.body.purpose,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "An error occurred while inserting data." });
        }
        console.log("Data inserted successfully.");
        return res.json(data);
    });
});


app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM announcement WHERE announce_id = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json("Message: 'Error inside Server");
        return res.json(result);
    })
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE announcement SET company = ?, date = ?, from_time = ?, to_time = ?, duration = ?, affected_area = ?, purpose = ?, status = ? WHERE announce_id = ?";
    const values = [
      req.body.company,
      req.body.date,
      req.body.from_time,
      req.body.to_time,
      req.body.duration,
      req.body.affected_area,
      req.body.purpose,
      req.body.status,
    ];
    const id = req.params.id;
  
    db.query(sql, [...values, id], (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ error: "An error occurred while updating data." });
      }
      console.log("Data updated successfully.");
      return res.json(result);
    });
  });

  app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM announcement WHERE announce_id = ?";
    const id = req.params.id;
  
    db.query(sql, [id], (err, result) => {  // Removed the spread operator, using only id
      if (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ error: "An error occurred while deleting data." });
      }
      console.log("Data Deleted successfully.");
      return res.json(result);
    });
  });
  
  

app.listen(8080, () =>{
    console.log("listening")
})