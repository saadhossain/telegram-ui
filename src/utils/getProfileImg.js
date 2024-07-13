export const getProfileImg = (name) => {
    const parts = name?.split(' ');
    if (parts?.length === 1) {
        return parts[0]?.charAt(0);
    } else if (parts?.length === 2) {
        return parts[0]?.charAt(0) + parts[1]?.charAt(0);
    } else if (parts?.length >= 3) {
        return parts[0]?.charAt(0) + parts[parts?.length - 1]?.charAt(0);
    }
}