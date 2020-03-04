import { WebPlugin } from '@capacitor/core';
import { SpeechSynthesisPluginPlugin } from './definitions';

export class SpeechSynthesisPluginWeb extends WebPlugin implements SpeechSynthesisPluginPlugin {
  constructor() {
    super({
      name: 'SpeechSynthesisPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SpeechSynthesisPlugin = new SpeechSynthesisPluginWeb();

export { SpeechSynthesisPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SpeechSynthesisPlugin);
