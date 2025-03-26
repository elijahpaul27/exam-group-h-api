const express = require("express");
const router = express.Router();


// Hardcoded list of exams
const users = [
    { id: 1, name: "Alice", role: "Student" },
    { id: 2, name: "Bob", role: "Instructor" },
    { id: 3, name: "Charlie", role: "Admin" }
];

router.get("/", (req, res) => {
    res.json({ message: "Group H API" });
});


// get exams users
router.get('/exams', (req, res) => {
       res.json(users)
});

module.exports = router;
