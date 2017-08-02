import { Angularjs4blogPage } from './app.po';

describe('angularjs4blog App', () => {
  let page: Angularjs4blogPage;

  beforeEach(() => {
    page = new Angularjs4blogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
