export default class Settings {
  constructor() {
    this.defaultSet = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
    this.playaSet = new Map();
  }

  setPlayerSetting(name, value) {
    if (this.defaultSet.has(name)) {
      if (this.defaultSet.get(name).includes(value)) {
        this.playaSet.set(name, value);
      }
    } else {
      throw new Error('Invalid settings');
    }
  }

  get settings() {
    if (this.defaultSet.size !== this.playaSet.size) {
      for (const opt of this.defaultSet.keys()) {
        if (!this.playaSet.has(opt)) {
          this.playaSet.set(opt, this.defaultSet.get(opt)[0]);
        }
      }
    }
    return this.playaSet;
  }
}
