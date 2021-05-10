import Game from '.';

describe('#Game', () => {
  const game: Game = new Game();

  test('initialized game returns a score of 0', () => {
    expect(game.score).toBe(0);
  });
});