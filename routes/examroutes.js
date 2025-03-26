const express = require("express");
const router = express.Router();

// Hardcoded list of users
const users = [
    { id: 1, name: "Alice", role: "Student" },
    { id: 2, name: "Bob", role: "Instructor" },
    { id: 3, name: "Charlie", role: "Admin" }
];

// Hardcoded list of exams
const exams = [
    { id: 1, name: "Math Exam", date: "2025-04-10" },
    { id: 2, name: "Science Exam", date: "2025-04-15" }
];

// Root API response
router.get("/", (req, res) => {
    res.json({ message: "Group H API" });
});

// GET /exams - Retrieve list of exams
router.get("/exams", (req, res) => {
    res.json(exams);
});

// POST /exams - Add a new exam
router.post("/exams", (req, res) => {
    const { name, date } = req.body;

    if (!name || !date) {
        return res.status(400).json({ message: "Name and date are required" });
    }

    const newExam = { id: exams.length + 1, name, date };
    exams.push(newExam);

    res.status(201).json({ message: "Exam added successfully!", exam: newExam });
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
