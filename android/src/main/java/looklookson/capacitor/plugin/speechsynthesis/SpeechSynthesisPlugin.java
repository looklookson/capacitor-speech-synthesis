package looklookson.capacitor.plugin.speechsynthesis;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.util.Locale;
import android.speech.tts.TextToSpeech;
import android.util.Log;
@NativePlugin()
public class SpeechSynthesisPlugin extends Plugin {

    private TextToSpeech tts;

    // @PluginMethod()
    // public void echo(PluginCall call) {
    //     String value = call.getString("value");

    //     JSObject ret = new JSObject();
    //     ret.put("value", value);
    //     call.success(ret);
    // }


    @PluginMethod()
    public void speak(PluginCall call) {
      final String value = call.getString("value");
      final String language = call.getString("language", "en");
      final Locale locale = Locale.forLanguageTag(language);
  
      if (locale == null) {
        call.error("Language was not a valid language tag.");
        return;
      }
  
      tts = new TextToSpeech(getContext(), new TextToSpeech.OnInitListener() {
        @Override
        public void onInit(int i) {
          tts.setLanguage(locale);
          tts.speak(value, TextToSpeech.QUEUE_FLUSH, null, "capacitoraccessibility" + System.currentTimeMillis());
        }
      });

      call.success();

    //   // Not yet implemented
    //   throw new UnsupportedOperationException();
    }


}
