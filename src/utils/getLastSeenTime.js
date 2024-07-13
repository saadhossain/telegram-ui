export const getLastSeenTime = (updatedAtString) => {
    const updatedAt = new Date(updatedAtString);
    const now = new Date();
    const differenceMs = now.getTime() - updatedAt.getTime();
    const differenceSeconds = Math.floor(differenceMs / 1000);
    if (differenceSeconds < 60) {
        return `${differenceSeconds} seconds ago`;
    } else if (differenceSeconds < 3600) {
        const minutes = Math.floor(differenceSeconds / 60);
        return `${minutes} minutes ago`;
    } else if (differenceSeconds < 86400) {
        const hours = Math.floor(differenceSeconds / 3600);
        return `${hours} hours ago`;
    } else {
        const days = Math.floor(differenceSeconds / 86400);
        return `${days} days ago`;
    }
};
