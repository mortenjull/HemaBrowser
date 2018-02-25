import { HemaBrowserPage } from './app.po';

describe('hema-browser App', () => {
  let page: HemaBrowserPage;

  beforeEach(() => {
    page = new HemaBrowserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
