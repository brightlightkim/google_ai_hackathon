import axios from "axios";

export const uploadImage = async (img, maxWidth = 900, maxHeight = 900, quality = 0.7) => {
    const image = new Image();
    image.src = URL.createObjectURL(img);

    let imgUrl = null;

    // Wait for the image to load
    await new Promise((resolve) => image.onload = resolve);

    // Set up canvas for resizing
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Calculate new size maintaining aspect ratio
    const ratio = Math.min(maxWidth / image.width, maxHeight / image.height);
    const newWidth = image.width * ratio;
    const newHeight = image.height * ratio;

    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the image on canvas
    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    // Convert canvas to blob with quality parameter
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", quality));

    // Get the upload URL from your server
    const { data: { uploadURL } } = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url");

    // Upload the resized and compressed image
    try {
        await axios({
            method: 'PUT',
            url: uploadURL,
            headers: { "Content-Type": "image/jpeg" },
            data: blob
        });
        imgUrl = uploadURL.split("?")[0];
    } catch (err) {
        throw new Error(err);
    }

    return imgUrl;
}
