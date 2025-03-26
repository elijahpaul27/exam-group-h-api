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

// POST /exams - Add a new exam
router.post("/exams", (req, res) => {
    const { name, date } = req.body;

    if (!name || !date) {
        return res.status(400).json({ message: "Name and date are required" });
    }

    const newExam = { id: exams.length + 1, name, date };
    exams.push(newExam);

    res.status(201).json(newExam);
});

// PUT /exams/:id - Update an existing exam
router.put("/exams/:id", (req, res) => {
    const { id } = req.params;
    const { name, date } = req.body;

    // Find the exam by ID
    const examIndex = exams.findIndex(exam => exam.id === parseInt(id));

    if (examIndex === -1) {
        return res.status(404).json({ message: "Exam not found" });
    }

    if (!name || !date) {
        return res.status(400).json({ message: "Name and date are required" });
    }

    // Update the exam
    exams[examIndex] = { id: parseInt(id), name, date };

    res.json({ message: "Exam successfully updated!", exam: exams[examIndex] });
});

module.exports = router;
