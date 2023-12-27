import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test_vue3-ionic-only',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
