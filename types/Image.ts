export type Image = string;

export type Images = {
	// Best quality, highest file size
	normal: Image;
	// Medium quality, medium file size
	small: Image;
	// Bad quality, tiny file size
	thumb: Image;
};
