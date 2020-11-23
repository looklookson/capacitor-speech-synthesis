import Foundation
import Capacitor
import SafariServices
import AVFoundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(SpeechSynthesis)
public class SpeechSynthesis: CAPPlugin {
    
    // @objc func echo(_ call: CAPPluginCall) {
    //     let value = call.getString("value") ?? ""
    //     call.success([
    //         "value": value
    //     ])
    // }

    @objc func getSupportMatrix(_ call: CAPPluginCall) {
        call.success([
            "hasVolumeControl": false,
            "hasSpeechRateControl": false,
        ])
    }

    @objc func speak(_ call: CAPPluginCall) {
        guard let value = call.getString("value") else {
            call.error("No value provided")
            return
        }

        let lang = call.getString("language") ?? "en-US"
        let volume = call.getFloat("volume") ?? 0.5
        let speechRate = call.getFloat("speechRate") ?? 0.5

        //UIAccessibility.post(notification: UIAccessibility.Notification.announcement, argument: value)

        let utterance = AVSpeechUtterance(string: value)
        utterance.voice = AVSpeechSynthesisVoice(language: lang)
        utterance.volume = volume
        utterance.rate = speechRate

        let synthesizer = AVSpeechSynthesizer()
        synthesizer.speak(utterance)

        call.success()
    }

}
