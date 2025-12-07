/**
 * React Native Secure Key Store Package
 * HarmonyOS Implementation
 */

import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from './generated/ts';
import { RNSecureKeyStoreTurboModule } from './RNSecureKeyStoreTurboModule';

class RNSecureKeyStoreTurboModulesFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (name === TM.RNSecureKeyStore.NAME) {
      return new RNSecureKeyStoreTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.RNSecureKeyStore.NAME;
  }
}

export class RNSecureKeyStorePackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new RNSecureKeyStoreTurboModulesFactory(ctx);
  }
}
