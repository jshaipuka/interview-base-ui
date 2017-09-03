import { InterviewBasePage } from './app.po';

describe('interview-base App', () => {
  let page: InterviewBasePage;

  beforeEach(() => {
    page = new InterviewBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
