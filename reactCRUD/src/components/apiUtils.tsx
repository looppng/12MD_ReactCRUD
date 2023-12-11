const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
};

const apiRequest = (url, method, body = null) => {
    const headers = {
        'Content-Type': 'application/json',
        // Add any other headers as needed
    };

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };

    return fetch(url, options)
        .then(handleResponse)
        .catch((error) => {
            console.error('API request failed:', error.message);
            throw error;
        });
};

export default apiRequest;
