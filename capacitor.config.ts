import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.jon',
  appName: 'capstone',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    LiveUpdates: {
      appId: '7beb099c',
      channel: 'prod-0.0.1',
      autoUpdateMethod: 'none',
      maxVersions: 2,
    }
  }
};

export default config;
