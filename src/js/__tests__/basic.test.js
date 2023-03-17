import Settings from '../basic';

const rep1 = new Settings();
rep1.setPlayerSetting('theme', 'light');

console.log(rep1.settings);

test('map* test', () => {
  expect(rep1.settings.get('theme')).toMatch('light');
  expect(rep1.settings.get('music')).toMatch('trance');
  rep1.setPlayerSetting('difficulty', 'hard1');
  expect(rep1.settings.get('difficulty')).toMatch('easy');
  expect(() => (rep1.setPlayerSetting('theme1', 'light'))).toThrow(Error);
});
