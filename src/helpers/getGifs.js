export const getGifs = async (appCategory) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(appCategory)}&limit=10&api_key=YOUR_API_KEY`
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    return gifs;
  }