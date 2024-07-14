export const getMessageTime = (isoString) => {
    // Parse the ISO string into a Date object
    const date = new Date(isoString);

    // Extract hours and minutes
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Format hours and minutes to always be two digits
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Return the formatted time
    return `${formattedHours}:${formattedMinutes}`;
};
