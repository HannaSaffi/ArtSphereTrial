from flask import Flask

def create_app():
    """Create and configure the Flask app."""
    app = Flask(__name__)

    # Register the art blueprint
    from app.controllers.art_controller import art_bp
    app.register_blueprint(art_bp, url_prefix="/api/art")

    return app
