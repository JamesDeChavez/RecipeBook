import React from 'react'
import ReactPlayer from 'react-player/lazy'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './css/RecipePage.css'

const RecipePage = (props) => {

  return(
    <div className='recipePage'>
      <NavBar />

      <div className='body'>
        <a href='/' className='btn btn-info btn-sm'>Back to Recipes</a>
        <h3>Moo Goo Gai Pan Recipe</h3>
        <div className='player-max'>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/8YyrzyqhaO0'
              width='100%'
              height='100%'
            />
          </div>
        </div>
        <div class="card">
          <div class="card-header instructions">Instructions</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Thinly slice chicken breasts</li>
            <li class="list-group-item">2. Marinate chicken in salt, soy sauce, oyster sauce, cooking wine, baking soda and sesame oil for 20 minutes</li>
            <li class="list-group-item">3. Slice mushrooms and carrots</li>
            <li class="list-group-item">4. Cook chicken on high heat</li>
            <li class="list-group-item">5. Add carrots</li>
            <li class="list-group-item">6. Add garlic, mushrooms, and snow peas</li>
            <li class="list-group-item">7. If it gets dry, add water</li>
            <li class="list-group-item">8. Add soy sauces and oyster sauce</li>
            <li class="list-group-item">9. Lower heat and cook few more minutes</li>
          </ul>
        </div>
        <button type="button" class="btn btn-secondary editButton">Edit Recipe</button>
        <div class="card">
          <div class="card-header ingredients">Ingredients List</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Chicken Breast - 1 lb</li>
            <li class="list-group-item">Salt - 1 tsp</li>
            <li class="list-group-item">Soy Sauce - 2 tbsp</li>
            <li class="list-group-item">Oyster Sauce - 1 tbsp</li>
            <li class="list-group-item">Chinese Cooking Wine - 1/2 tbsp</li>
            <li class="list-group-item">Baking Soda - 1/4 tsp</li>
            <li class="list-group-item">Sesame Oil - 1 tsp</li>
            <li class="list-group-item">Carrots - 3 oz</li>
            <li class="list-group-item">Snow Peas - 3 oz</li>
            <li class="list-group-item">Shitake Mushrooms - 3.5 oz</li>
            <li class="list-group-item">White Mushrooms - 3.5 oz</li>
            <li class="list-group-item">Garlic - 5 cloves</li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary orderButton">Order Ingredients</button>
        <button type="button" class="btn btn-secondary editButton">Edit Ingredients List</button>
      </div>


      <Footer />
    </div>
  )

}

export default RecipePage;
