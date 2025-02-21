const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input" });
  }

  const user_id = "your_name_ddmmyyyy"; // Replace with your details
  const email = "your_email@example.com";
  const roll_number = "your_roll_number";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
