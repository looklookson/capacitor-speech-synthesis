declare module "@capacitor/core" {
  interface PluginRegistry {
    SpeechSynthesisPlugin: SpeechSynthesisPluginPlugin;
  }
}

export interface SpeechSynthesisPluginPlugin {
  
  // echo(options: { value: string }): Promise<{value: string}>;

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
}