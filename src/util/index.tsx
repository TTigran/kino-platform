export const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const hoursPart = hours > 0 ? `${hours}h` : '';
    const minutesPart = minutes > 0 ? `${minutes}m` : '';
    return `${hoursPart} ${minutesPart}`;
};