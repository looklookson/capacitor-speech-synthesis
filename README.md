# Capacitor Speech Synthesis Plugin


## Installation

```bash
$ npm i --save capacitor-speech-synthesis
```

## Android configuration

In file `android/app/src/main/java/**/**/MainActivity.java`, add the plugin to the initialization list:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
  [...]
  add(looklookson.capacitor.plugin.speechsynthesis.SpeechSynthesis.class);
  [...]
}});
```

## API 

### speak

```ts
import { Plugins } from '@capacitor/core';
import {SpeechSynthesis} from 'capacitor-speech-synthesis';

SpeechSynthesis.load();

Plugins.SpeechSynthesis.speak(
    {
    value: "Hello",
    volume: 0.75,
    }
);

```
