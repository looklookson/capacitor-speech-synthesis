import { WebPlugin } from '@capacitor/core';
import { SpeechSynthesisPlugin, SpeakOptions } from './definitions';
import { registerWebPlugin } from '@capacitor/core';
export class SpeechSynthesisWeb extends WebPlugin implements SpeechSynthesisPlugin {
  constructor() {
    super({
      name: 'SpeechSynthesis',
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
    if (options.volume) {
      utterance.volume = options.volume;
    }

    window.speechSynthesis.speak(utterance);
    return Promise.resolve();
  }

}

const SpeechSynthesis = new SpeechSynthesisWeb();
registerWebPlugin(SpeechSynthesis);

export { SpeechSynthesis };



