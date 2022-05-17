import { getGifs } from '../../helpers/getGifs';

describe('Tests for getGifs Fetch', () => {
  test('It should fetch atleast 10 items/images', async () => {
    const gifs = await getGifs('Birds');
    expect(gifs.length).toBe(10);
  })

  test('It should fetch atleast 10 items', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  })
})