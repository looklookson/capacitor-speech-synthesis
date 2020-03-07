import Foundation
import Capacitor
import SafariServices

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

    @objc func speak(_ call: CAPPluginCall) {
        guard let value = call.getString("value") else {
            call.error("No value provided")
            return
        }

        UIAccessibility.post(notification: UIAccessibility.Notification.announcement, argument: value)

        call.success()
    }

}
