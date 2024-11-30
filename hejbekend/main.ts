import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { ImageSyncFrame } from "./types.d.ts";

const io = new Server({
	cors: {
		origin: "http://localhost:3000",
	},
});

const image: ImageSyncFrame = {
	d: Array(100).fill(1),
	w: 10,
	h: 10,
};

io.on("connection", (socket) => {
	console.log(`socket ${socket.id} connected`);

	socket.emit("hejhello", "hejworld");
	socket.emit("hejimage", image);

	socket.on("disconnect", (reason) => {
		console.log(`hejsocket ${socket.id} disconnected due to ${reason}`);
	});
});

await serve(io.handler(), {
	port: 5000,
});
