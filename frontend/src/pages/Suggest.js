import React, { useState } from 'react';
import '../styles/Suggest.css'; // Assuming the CSS file you provided earlier

function Suggest() {
    // State to store the current random art piece
    const [randomArt, setRandomArt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch a random art piece from the backend
    const fetchRandomArt = async () => {
        setLoading(true);
        setError(null); // Reset error state before making the request

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/art/suggest`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch a random art piece');
            }

            setRandomArt(data); // Update the random art state with the fetched data
        } catch (err) {
            setError(err.message || 'Error fetching random art');
            setRandomArt(null); // Reset the random art state on error
        } finally {
            setLoading(false); // Stop loading spinner after the request is done
        }
    };

    // Initial fetch when the component mounts
    React.useEffect(() => {
        fetchRandomArt();
    }, []);

    return (
        <div className="suggest-container">
            <h1>Welcome to Sphere Suggest</h1>
            <p>Explore a random piece of art from our collection</p>

            {/* Button to trigger a new random piece */}
            <button onClick={fetchRandomArt} className="suggest-button" disabled={loading}>
                {loading ? 'Loading...' : 'Suggest New Art'}
            </button>

            {/* Display loading message */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p className="error-message">{error}</p>}

            {/* Display the current random art */}
            {randomArt ? (
                <div className="art-display">
                    <h2>{randomArt.Title}</h2>
                    <img
                        src={randomArt.Image || '/path/to/placeholder.jpg'}
                        alt={randomArt.Title}
                        className="image"
                    />
                    <p className="art-description">{randomArt.Description || 'No description available.'}</p>
                    <p><strong>Author:</strong> {randomArt.Author || 'Unknown'}</p>
                    <p><strong>Location:</strong> {randomArt.Location || 'Unknown'}</p>
                    <p><strong>Time Period:</strong> {randomArt['Time Period'] || 'Not specified'}</p>
                    {randomArt.Education_URL && (
                        <p>
                            <strong>Learn more: </strong>
                            <a href={randomArt.Education_URL} target="_blank" rel="noopener noreferrer">
                                View Details
                            </a>
                        </p>
                    )}
                </div>
            ) : (
                <p>No art to display.</p>
            )}
        </div>
    );
}

export default Suggest;
