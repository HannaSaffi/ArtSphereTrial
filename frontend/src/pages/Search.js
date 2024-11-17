import React, { useState } from 'react';
import '../styles/Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showAddArtForm, setShowAddArtForm] = useState(false);
    const [newArt, setNewArt] = useState({
        title: '',
        author: '',
        location: '',
        timePeriod: '',
        image: '',
        educationUrl: ''
    });

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
            const response = await fetch(`http://127.0.0.1:5000/api/art/search?query=${query}`);
            const data = await response.json();

            if (!response.ok) {
                setResults([]);
                setError(data.message || 'No results found.');
                return;
            }

            setResults(data);
        } catch (err) {
            setResults([]);
            setError('Error fetching search results. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleAddArtToggle = () => {
        setShowAddArtForm(!showAddArtForm);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArt({
            ...newArt,
            [name]: value
        });
    };

    const handleSubmitNewArt = (e) => {
        e.preventDefault();
        // Here, you would normally submit the new art to your backend or handle it as needed
        console.log("New Art Added:", newArt);
        // For now, just reset the form and hide it
        setNewArt({
            title: '',
            author: '',
            location: '',
            timePeriod: '',
            image: '',
            educationUrl: ''
        });
        setShowAddArtForm(false);
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

            {/* Add Art Button */}
            <button className="add-art-button" onClick={handleAddArtToggle}>
                {showAddArtForm ? 'Cancel' : 'Add Art'}
            </button>

            {/* Add Art Form */}
            {showAddArtForm && (
                <form onSubmit={handleSubmitNewArt} className="add-art-form">
                    <h2>Add New Art Piece</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newArt.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={newArt.author}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={newArt.location}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="timePeriod"
                        placeholder="Time Period"
                        value={newArt.timePeriod}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={newArt.image}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="educationUrl"
                        placeholder="Education URL"
                        value={newArt.educationUrl}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Search;
