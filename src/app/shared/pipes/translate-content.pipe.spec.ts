import { TranslateContentPipe } from './translate-content.pipe';
import { LanguageService } from '../services/language.service';

describe('TranslateContentPipe', () => {
  it('translates a known key for the selected language', () => {
    const languageService = new LanguageService();
    languageService.language = 'en';
    const pipe = new TranslateContentPipe(languageService);

    expect(pipe.transform('title')).toBe('Welcome to DevShop!');
  });

  it('returns the original value when the key is missing', () => {
    const languageService = new LanguageService();
    languageService.language = 'en';
    const pipe = new TranslateContentPipe(languageService);

    expect(pipe.transform('unknown-key')).toBe('unknown-key');
  });
});
