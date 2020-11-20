import { WebPlugin } from '@capacitor/core';
import { SpeechSynthesisPlugin, SpeakOptions, SupportMatrix } from './definitions';
import { registerWebPlugin } from '@capacitor/core';

// const supportSpeechSynthesis = ('speechSynthesis' in window);
export class SpeechSynthesisWeb extends WebPlugin implements SpeechSynthesisPlugin {
  constructor() {
    super({
      name: 'SpeechSynthesis',
      platforms: ['web']
    });
  }

  async getSupportMatrix(): Promise<SupportMatrix> {
    return {
      hasVolumeControl: ('speechSynthesis' in window)
    };
  }

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
    if (options.speechRate) {
      utterance.rate = options.speechRate;
    }
    window.speechSynthesis.speak(utterance);
    return Promise.resolve();
  }

}

const SpeechSynthesis = new SpeechSynthesisWeb();
registerWebPlugin(SpeechSynthesis);

export { SpeechSynthesis };



