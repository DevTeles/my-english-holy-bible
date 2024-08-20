import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  android: {
    package: "com.teles.myenglishholybible",
  },
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    apiHost: process.env.EXPO_PUBLIC_API_HOST,
    eas: {
      projectId: "5fbfeb83-0698-416c-81c9-9848706d5d5d"
    }
  },
});
