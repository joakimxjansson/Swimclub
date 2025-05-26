require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { formUrl, fields } = require('./formConfig');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // också bra att ha

app.post('/submit-form', async (req, res) => {
    const formData = new URLSearchParams();

    for (const [fieldName, entryId] of Object.entries(fields)) {
        formData.append(entryId, req.body[fieldName] || '');
    }

    try {
        await axios.post(formUrl, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending form data:', error.message);
        res.status(500).send('Something went wrong');
    }
});

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
