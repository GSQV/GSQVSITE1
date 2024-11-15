const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

function getFeedbackData() {
    try {
        const data = fs.readFileSync('feedback.json', 'utf8');
        const parsedData = JSON.parse(data);
        return Array.isArray(parsedData) ? parsedData : [];
    } catch (err) {
        return [];
    }
}

app.post('/submit-feedback', (req, res) => {
    const feedbackData = getFeedbackData();
    feedbackData.push(req.body);

    // Сохраняем данные в основной файл
    fs.writeFileSync('feedback.json', JSON.stringify(feedbackData, null, 2));

    // Дублируем данные в директории `public`
    fs.writeFileSync(path.join(__dirname, 'public', 'feedback_copy.json'), JSON.stringify(feedbackData, null, 2));

    res.json({ message: ':)' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
