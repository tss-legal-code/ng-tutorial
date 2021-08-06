import { NgTutorialPage } from './app.po';

describe('ng-tutorial App', () => {
  let page: NgTutorialPage;

  beforeEach(() => {
    page = new NgTutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
