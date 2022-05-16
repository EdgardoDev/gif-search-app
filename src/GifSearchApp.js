import React, { useState } from 'react'
import { AddNewCategory } from './components/AddNewCategory';
import { GifTemplate } from './components/GifTemplate';

export const GifSearchApp = () => {

  // Create a category list
  const [appCategories, setAppCategories] = useState(['Birds']);

  return (
    <div>
      <h2>GIF SEARCH APP</h2>
      <AddNewCategory setAppCategories={ setAppCategories } />
      
      <ol>
        {
          appCategories.map(appCategory => (
            <GifTemplate
              key={appCategory}
              appCategory={appCategory}
            />
          ))
        }
      </ol>
    </div>
  )
}
