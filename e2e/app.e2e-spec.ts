import { GraphAppV1Page } from './app.po';

describe('graph-app-v1 App', () => {
  let page: GraphAppV1Page;

  beforeEach(() => {
    page = new GraphAppV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
