const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { url } = req.query;

    // Check if URL is provided
    if (!url) {
        return res.status(400).send('URL is required');
    }

    try {
        // Fetch HTML from the specified URL
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        
        const html = await response.text(); // Get HTML as text
        res.setHeader('Content-Type', 'text/html'); // Set content type to HTML
        res.send(html); // Send HTML back in response
    } catch (error) {
        res.status(500).send(`Error fetching HTML: ${error.message}`);
    }
};
