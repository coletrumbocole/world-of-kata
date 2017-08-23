import { AugustPage } from './app.po';

describe('august App', () => {
  let page: AugustPage;

  beforeEach(() => {
    page = new AugustPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
