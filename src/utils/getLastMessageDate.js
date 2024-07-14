export const getLastMessageDate = (dateString) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    ;
    const date = new Date(dateString);

    const today = new Date();
    const isToday = date.getUTCFullYear() === today.getUTCFullYear() &&
        date.getUTCMonth() === today.getUTCMonth() &&
        date.getUTCDate() === today.getUTCDate();

    if (isToday) {
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const strMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${strMinutes}${ampm}`;
    } else {
        const month = months[date.getUTCMonth()];
        const day = date.getUTCDate();
        return `${month} ${day}`;
    }
}