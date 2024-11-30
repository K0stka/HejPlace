export type Color = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E";

export type DeltaUpdate = {
	x: number;
	y: number;
	c: Color;
};

export type ImageSyncFrame = {
	w: number;
	h: number;
	d: Color[];
};
