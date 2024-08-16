import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
    apiHost: process.env.API_HOST,
  },
});
