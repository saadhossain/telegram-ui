export const getRandomColor = (name) => {
    const colors = [
        '#FF5733', 
        '#33FF57', 
        '#3357FF', 
        '#FF33A1', 
        '#A1FF33', 
        '#5733FF', 
    ];

    const getColorForLetter = (letter) => {
        const index = (letter?.toUpperCase()?.charCodeAt(0) - 65) % colors?.length;
        return colors[index];
    };

    const firstLetter = name?.trim()?.toUpperCase()[0]; 

    if (firstLetter) {
        return getColorForLetter(firstLetter);
    } else {
        return '#10215B';
    }
};
