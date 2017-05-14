import { MaohsuitePage } from './app.po';

describe('maohsuite App', () => {
  let page: MaohsuitePage;

  beforeEach(() => {
    page = new MaohsuitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
