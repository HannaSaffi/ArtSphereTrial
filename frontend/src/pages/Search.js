import React, { useState } from 'react';
import '../styles/Search.css';


const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!Array.isArray(results)) {
        console.error("Expected results to be an array, but got:", results);
        return null; // or handle the error appropriately
    }
    const handleSearch = async () => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Correct API URL with template literal
            const response = await fetch(`http://127.0.0.1:5000/api/art/search?query=$(query)`);

            const data = await response.json();

            if (!response.ok) {
                setResults([]);
                setError(data.message || 'No results found.');
                return;
            }

            setResults(data);
        } catch (err) {
            console.error('Error fetching data:', err);
            setResults([]);
            setError('Error fetching search results. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Add keypress handler for search input
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <h1>Search Art Pieces</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for art pieces..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {loading && <p>Loading results...</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="results-container">
                {results.length === 0 && !loading && !error ? (
                    <p>Enter a search term to find art pieces.</p>
                ) : (
                    <div className="images-container">
                        {results.map((item, index) => (
                            <div key={index} className="image-item">
                                <img
                                    src={item.Image && item.Image !== 'NaN' ? item.Image : '/path/to/placeholder.jpg'}
                                    alt={item.Title || 'Art Piece'}
                                    className="image"
                                />
                                <p><strong>Title:</strong> {item.Title || 'No title available'}</p>
                                <p><strong>Author:</strong> {item.Author || 'Unknown'}</p>
                                <p><strong>Location:</strong> {item.Location || 'Unknown'}</p>
                                <p><strong>Time Period:</strong> {item["Time Period"] || 'Not specified'}</p>
                                {item.Education_URL && (
                                    <p>
                                        <strong>Learn more: </strong>
                                        <a href={item.Education_URL} target="_blank" rel="noopener noreferrer">
                                            View Details
                                        </a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
