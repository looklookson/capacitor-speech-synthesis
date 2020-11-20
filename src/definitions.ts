declare module "@capacitor/core" {
  interface PluginRegistry {
    SpeechSynthesis: SpeechSynthesisPlugin;
  }
}

export interface SpeechSynthesisPlugin {

  getSupportMatrix(): Promise<SupportMatrix>;
  speak(options: SpeakOptions): Promise<void>;

}

export interface SpeakOptions {
  /**
   * The string to speak
   */
  value: string;
  /**
   * The language to speak the string in, as its [ISO 639-1 Code](https://www.loc.gov/standards/iso639-2/php/code_list.php) (ex: "en").
   * Currently only supported on Android.
   */
  language?: string;
  /**
   * The volume of speak
   */
  volume?: number;
  /**
   * Speech rate. 1.0 is the normal speech rate, lower values slow down the speech (0.5 is half the normal speech rate), greater values accelerate it (2.0 is twice the normal speech rate).
   */
  speechRate?: number;
}

export interface SupportMatrix {
  /**
   * Does the system support change of volume
   */
  hasVolumeControl?: boolean;
  hasSpeechRateControl?: boolean;
}
