from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
# Initialize Socket.IO
socketio = SocketIO(app)

# Handle client connection
@socketio.on('connect')
def handle_connect():
    print("Client connected")

# Handle client disconnect
@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnected")

# Handle custom messages
@socketio.on('message')
def handle_message(data):
    print(f"Message received: {data}")
    socketio.send("Reply from server")

# Default route
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    # Run the app with Socket.IO support
    socketio.run(app, host='0.0.0.0', port=5000)
