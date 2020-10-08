import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './css/HomePage.css'

const HomePage = (props) => {

  return(
    <div className="homePage">
      <NavBar />
      <div className='body'>

        <div className='filtersColumn'>
          <h4>Recipe Filters:</h4>
          <div className='filterButtons'>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>
            <div className='filterGrouping'>
              <Link className='filterLink' to='/'>
                <img src='/images/chicken.png' className='filterImage' />
              </Link>
              <p>Chicken</p>
            </div>


          </div>
        </div>

        <div className='recipesColumn'>
          <Link className='recipeLink' to='/recipe'>
            <div className='recipeDiv'>
              <img
                src="https://i.ytimg.com/vi/8YyrzyqhaO0/maxresdefault.jpg"
                className='recipeImage'
                alt="RecipeImage"
              />
            <h4>Moo Goo Gai Pan</h4>
            <p>Main Ingredients: Chicken, Mushrooms, Carrots, Snow Peas</p>
            <p>Calories: 500 kcal, Protein: 40g, Carbs: 200g, Fat: 40g</p>
            </div>
          </Link>
          <Link className='recipeLink' to='/recipe'>
            <div className='recipeDiv'>
              <img
                src="https://i.ytimg.com/vi/8YyrzyqhaO0/maxresdefault.jpg"
                className='recipeImage'
                alt="RecipeImage"
              />
            <h4>Moo Goo Gai Pan</h4>
            <p>Main Ingredients: Chicken, Mushrooms, Carrots, Snow Peas</p>
            <p>Calories: 500 kcal, Protein: 40g, Carbs: 200g, Fat: 40g</p>
            </div>
          </Link>
          <Link className='recipeLink' to='/recipe'>
            <div className='recipeDiv'>
              <img
                src="https://i.ytimg.com/vi/8YyrzyqhaO0/maxresdefault.jpg"
                className='recipeImage'
                alt="RecipeImage"
              />
            <h4>Moo Goo Gai Pan</h4>
            <p>Main Ingredients: Chicken, Mushrooms, Carrots, Snow Peas</p>
            <p>Calories: 500 kcal, Protein: 40g, Carbs: 200g, Fat: 40g</p>
            </div>
          </Link>
          <Link className='recipeLink' to='/recipe'>
            <div className='recipeDiv'>
              <img
                src="https://i.ytimg.com/vi/8YyrzyqhaO0/maxresdefault.jpg"
                className='recipeImage'
                alt="RecipeImage"
              />
            <h4>Moo Goo Gai Pan</h4>
            <p>Main Ingredients: Chicken, Mushrooms, Carrots, Snow Peas</p>
            <p>Calories: 500 kcal, Protein: 40g, Carbs: 200g, Fat: 40g</p>
            </div>
          </Link>

        </div>

      </div>
      <Footer />
    </div>
  )

}

export default HomePage;
