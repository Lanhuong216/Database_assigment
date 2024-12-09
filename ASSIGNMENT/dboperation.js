const express = require("express");
const pool = require("./config");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
    const posts = pool.query("SELECT * FROM Employee");
    res.send(posts)
});

app.get("/posts", async (req, res) => {
    const posts = await pool.query("SELECT * FROM Employee");
    res.send({ posts });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


