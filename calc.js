const express = require('express');
const app = express();
const PORT = 9000;

app.use(express.json());

app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: "Cannot divide by zero" });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operation" });
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`processing... http://localhost:${PORT}`);
});
