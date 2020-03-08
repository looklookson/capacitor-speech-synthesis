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
}

export interface SupportMatrix {
  /**
   * Does the system support change of volume
   */
  hasVolumeControl: boolean;
}
