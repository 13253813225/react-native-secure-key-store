/**
 * React Native Secure Key Store TurboModule Spec
 * This file defines the interface for the native module
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  set(key: string, value: string, options?: { accessible?: string }): Promise<string>;
  get(key: string): Promise<string>;
  remove(key: string): Promise<string>;
  setResetOnAppUninstallTo(enabled: boolean): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNSecureKeyStore');
