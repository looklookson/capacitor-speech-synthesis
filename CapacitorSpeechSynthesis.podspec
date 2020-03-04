
  Pod::Spec.new do |s|
    s.name = 'CapacitorSpeechSynthesis'
    s.version = '0.0.1'
    s.summary = 'Speech Synthesis plugin for Capacitor.'
    s.license = 'GPL2'
    s.homepage = 'https://github.com/looklookson/capacitor-speech-synthesis'
    s.author = 'looklookson'
    s.source = { :git => 'https://github.com/looklookson/capacitor-speech-synthesis', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end