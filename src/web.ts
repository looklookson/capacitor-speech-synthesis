import { WebPlugin } from '@capacitor/core';
import { SpeechSynthesisPluginPlugin, SpeakOptions } from './definitions';

export class SpeechSynthesisPluginWeb extends WebPlugin implements SpeechSynthesisPluginPlugin {
  constructor() {
    super({
      name: 'SpeechSynthesisPlugin',
      platforms: ['web']
    });
  }

  // async echo(options: { value: string }): Promise<{value: string}> {
  //   console.log('ECHO', options);
  //   return options;
  // }

  async speak(options: SpeakOptions): Promise<void> {
    if (!('speechSynthesis' in window)) {
      return Promise.reject('Browser does not support the Speech Synthesis API');
    }

    var utterance = new SpeechSynthesisUtterance(options.value);
    if (options.language) {
      utterance.lang = options.language;
    }
    window.speechSynthesis.speak(utterance);
    return Promise.resolve();
  }


}

const SpeechSynthesisPlugin = new SpeechSynthesisPluginWeb();

export { SpeechSynthesisPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SpeechSynthesisPlugin);
