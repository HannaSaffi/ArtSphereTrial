import React, { useState } from 'react';
import '../styles/Suggest.css'; // Assuming the CSS file you provided earlier

// Array of art pieces (this can be replaced with your actual art data)
const artPieces = [
    {
        title: "Starry Night",
        description: "A famous painting by Vincent van Gogh, depicting a starry night over a quiet village.",
        image: "starry-night.jpg"  // Replace with the actual image path
    },
    {
        title: "Mona Lisa",
        description: "The iconic portrait by Leonardo da Vinci, known for its enigmatic expression.",
        image: "mona-lisa.jpg"  // Replace with the actual image path
    },
    {
        title: "The Persistence of Memory",
        description: "A surrealist painting by Salvador Dalí, featuring melting clocks in a dreamlike landscape.",
        image: "persistence-of-memory.jpg"  // Replace with the actual image path
    },
    {
        title: "The Scream",
        description: "A famous painting by Edvard Munch, representing an agonized figure against a turbulent sky.",
        image: "the-scream.jpg"  // Replace with the actual image path
    },
    {
        title: "Guernica",
        description: "A large black and white painting by Pablo Picasso, symbolizing the tragedies of war.",
        image: "guernica.jpg"  // Replace with the actual image path
    },
    {
        title: "The Kiss",
        description: "A stunning piece by Gustav Klimt, featuring a couple in an intimate embrace.",
        image: "the-kiss.jpg"  // Replace with the actual image path
    }
];

function Suggest() {
    // State to store the current random art piece
    const [randomArt, setRandomArt] = useState(getRandomArt());

    // Function to get a random art piece
    function getRandomArt() {
        const randomIndex = Math.floor(Math.random() * artPieces.length);
        return artPieces[randomIndex];
    }

    // Handler to suggest a new random art piece when clicked
    const suggestNewArt = () => {
        setRandomArt(getRandomArt());
    };

    return (
        <div className="suggest-container">
            <h1>Welcome to Sphere Suggest</h1>
            <p>Explore a random piece of art from our collection</p>

            {/* Button to trigger a new random piece */}
            <button onClick={suggestNewArt} className="suggest-button">Suggest New Art</button>

            {/* Display the current random art */}
            <div className="art-display">
                <h2>{randomArt.title}</h2>
                <img src={randomArt.image} alt={randomArt.title} className="image" />
                <p className="art-description">{randomArt.description}</p>
            </div>
        </div>
    );
}

export default Suggest;
