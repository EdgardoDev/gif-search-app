import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (appCategory) => {

  const [state, setState] = useState({
    data: [],
    loading: true    
  });

  useEffect(() => {
    getGifs(appCategory)
      .then(images => {
        setState({
          data: images,
          loading: false
        });
    })
  }, [appCategory])

  return state;
}
