import data from './user_data.json';

export const site_name = data.site_name;
export const tagline = data.tagline;
export const channels = []

Object.keys(data.channels).forEach((key, index) => {
    channels.push({ media: key, link: data.channels[key] })
});

let d = new Date();
export const current_year = d.getFullYear()