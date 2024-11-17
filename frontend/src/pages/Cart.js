import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';  // Optional: You can style the cart with this CSS file

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch the cart from the backend
    const fetchCart = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/art/cart');
            const data = await response.json();
            if (response.ok) {
                setCart(data);
            } else {
                setError('Error fetching cart.');
            }
        } catch (err) {
            setError('Error fetching cart.');
            console.error('Error fetching cart:', err);
        } finally {
            setLoading(false);
        }
    };

    // Remove an item from the cart by ID
    const removeFromCart = async (art_id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:5000/api/art/cart/${art_id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove item from the cart state without needing to refetch
                setCart(cart.filter((item) => item.id !== art_id));
            } else {
                setError('Error removing item from cart.');
            }
        } catch (err) {
            setError('Error removing item from cart.');
            console.error('Error removing item:', err);
        } finally {
            setLoading(false);
        }
    };

    // Add an item to the cart
    const addToCart = async (art_id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/art/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ art_id }),  // Pass the art_id to be added to the cart
            });
            const data = await response.json();
            if (response.ok) {
                setCart([...cart, data.item]);  // Update the cart with the new item
            } else {
                setError(data.message || 'Error adding item to cart.');
            }
        } catch (err) {
            setError('Error adding item to cart.');
            console.error('Error adding item:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch the cart when the component mounts
    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>

            {/* Loading state */}
            {loading && <p>Loading...</p>}

            {/* Error handling */}
            {error && <p className="error-message">{error}</p>}

            {/* Display cart items */}
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.Image || '/path/to/placeholder.jpg'}  // Use placeholder if no image
                                alt={item.Title || 'Art Piece'}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3>{item.Title}</h3>
                                <p>By {item.Author}</p>
                                <p>Time Period: {item["Time Period"]}</p>
                                <p>Location: {item.Location}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
