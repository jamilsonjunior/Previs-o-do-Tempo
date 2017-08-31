import { PrevisaoDoTempoPage } from './app.po';

describe('previsao-do-tempo App', () => {
  let page: PrevisaoDoTempoPage;

  beforeEach(() => {
    page = new PrevisaoDoTempoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
