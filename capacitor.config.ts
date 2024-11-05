import { CapacitorConfig } from '@capacitor/cli';
import 'dotenv/config';

const config: CapacitorConfig = {
  appId: 'io.ionic.jon',
  appName: 'capstone',
  webDir: 'build',
  bundledWebRuntime: false,
  appendUserAgent: process.env?.REACT_APP_RELEASE_VERSION || '',
};

export default config;
