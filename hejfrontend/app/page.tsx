"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { socket } from "@/lib/socket";
import Disconnected from "@/components/Disconnected";
import { ImageSyncFrame } from "../../types";

const HejPage: NextPage = () => {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		socket.on("connect", () => setIsConnected(true));
		socket.on("disconnect", () => setIsConnected(false));
		socket.on("hejhello", (message) => console.log(message));
		socket.on("hejimage", (message) => {
			var image: ImageSyncFrame = message;
			// console.log(message);
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
		};
	}, []);

	return (
		<div suppressHydrationWarning>
			socket.connected ? <p>Connected ✅🔥😉👌</p> : <Disconnected />
		</div>
	);
};

export default HejPage;
