declare module "@capacitor/core" {
  interface PluginRegistry {
    SpeechSynthesisPlugin: SpeechSynthesisPluginPlugin;
  }
}

export interface SpeechSynthesisPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
