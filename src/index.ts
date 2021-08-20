import { registerPlugin } from '@capacitor/core';
import type { SpeechSynthesisPlugin } from './definitions';

const SpeechSynthesis = registerPlugin<SpeechSynthesisPlugin>('MySpeechSynthesisPlugin', {
    web: () => import('./web').then(m => new m.SpeechSynthesisWeb()),
  });
  
export * from './definitions';
export { SpeechSynthesis };
  