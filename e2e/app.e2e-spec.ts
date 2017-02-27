import { BbbPage } from './app.po';

describe('bbb App', () => {
  let page: BbbPage;

  beforeEach(() => {
    page = new BbbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
