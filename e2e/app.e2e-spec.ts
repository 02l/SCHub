import { LeagueStatsPage } from './app.po';

describe('league-stats App', function() {
  let page: LeagueStatsPage;

  beforeEach(() => {
    page = new LeagueStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
