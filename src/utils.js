export const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const waitResponse = (ms, data) => new Promise(resolve => setTimeout(resolve(data), ms));
