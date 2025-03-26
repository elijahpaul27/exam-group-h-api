const express = require("express");
const app = express();
const port = 3000;

// Import Routes
const examGroupRoutes = require("./routes/examGroupRoutes");

// Use Routes
app.use("/exam-group", examGroupRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
