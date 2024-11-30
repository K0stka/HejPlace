from aiohttp import web

# Create a Socket.IO server
sio = socketio.AsyncServer(cors_allowed_origins="*")
app = web.Application()
sio.attach(app)

# Handle events
@sio.event
async def connect(sid, environ):
    print(f"Client {sid} connected")

@sio.event
async def disconnect(sid):
    print(f"Client {sid} disconnected")

@sio.event
async def message(sid, data):
    print(f"Message from {sid}: {data}")
    await sio.emit("reply", {"msg": "Message received"}, to=sid)

# Run the app
if __name__ == "__main__":
    web.run_app(app, port=8080)

