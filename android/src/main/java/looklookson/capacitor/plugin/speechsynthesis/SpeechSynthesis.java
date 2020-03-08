package looklookson.capacitor.plugin.speechsynthesis;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.util.Locale;

import android.content.Context;
import android.media.AudioManager;
import android.speech.tts.TextToSpeech;
import android.util.Log;
import android.os.Bundle;

@NativePlugin()
public class SpeechSynthesis extends Plugin {

    private TextToSpeech tts;

    // @PluginMethod()
    // public void echo(PluginCall call) {
    //     String value = call.getString("value");

    //     JSObject ret = new JSObject();
    //     ret.put("value", value);
    //     call.success(ret);
    // }

    @PluginMethod()
    public void getSupportMatrix(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("hasVolumeControl",true);
        call.success(ret);
    }


    @PluginMethod()
    public void speak(PluginCall call) {

      final String value = call.getString("value");
      final String language = call.getString("language", "en");
      final Float volume = call.getFloat("volume");
      final Locale locale = Locale.forLanguageTag(language);
  
      if (locale == null) {
        call.error("Language was not a valid language tag.");
        return;
      }
  
      tts = new TextToSpeech(getContext(), new TextToSpeech.OnInitListener() {
        @Override
        public void onInit(int status) {
            if (status == TextToSpeech.SUCCESS) {
                int result =tts.setLanguage(locale);

                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.e(getLogTag(), "Language "+locale+" is not supported!");
                }

                if(volume != null) {
                    AudioManager audioManager = (AudioManager) getContext().getSystemService(Context.AUDIO_SERVICE);
                    int currentVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);
                    int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
                    float percent = volume.floatValue();
                    int intVolume = (int) (maxVolume*percent);
                    audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, intVolume, 0);
                }

//                Bundle bundle = new Bundle();
//                bundle.putFloat(TextToSpeech.Engine.KEY_PARAM_VOLUME, 1.0f);

                tts.speak(value, TextToSpeech.QUEUE_FLUSH, null, "capacitorspeech" + System.currentTimeMillis());
            }
            else {
                Log.e(getLogTag(), "TextToSpeech Initialization failed!");
            }

        }
      });

      call.success();

      // Not yet implemented
      // throw new UnsupportedOperationException();
    }


}
