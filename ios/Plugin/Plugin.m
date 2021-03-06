#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(SpeechSynthesis, "SpeechSynthesis",
           CAP_PLUGIN_METHOD(getSupportMatrix, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(speak, CAPPluginReturnPromise);
)
