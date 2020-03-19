export const ucfirst = (text) => {
    return text[0].toUpperCase() + text.slice(1);
};

export const underscoreToSpace = (text) => {
    return text.replace('_',' ');
};