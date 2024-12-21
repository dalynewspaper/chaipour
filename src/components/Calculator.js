import React, { useState } from "react";
import "./Calculator.css";
import { motion } from 'framer-motion';

const Calculator = () => {
  const [cups, setCups] = useState(1);

  const baseRecipe = {
    water: 220,
    milk: 120,
    chaiMix: 8,
    sugar: 5,
  };

  const calculateIngredients = () => {
    return {
      water: baseRecipe.water * cups,
      milk: baseRecipe.milk * cups,
      chaiMix: baseRecipe.chaiMix * cups,
      sugar: baseRecipe.sugar * cups,
    };
  };

  const ingredients = calculateIngredients();

  const generateInstructions = () => {
    return [
      `Boil ${ingredients.water}ml of water in a pot.`,
      `Add ${ingredients.chaiMix}g of chai mix to the boiling water.`,
      `Let it simmer for 2-3 minutes.`,
      `Add ${ingredients.milk}ml of milk to the pot.`,
      `Stir in ${ingredients.sugar}g of sugar, or adjust to taste.`,
      `Bring the mixture to a boil and then reduce the heat.`,
      `Simmer for another 2-3 minutes.`,
      `Strain the chai into cups and serve hot.`,
    ];
  };

  const instructions = generateInstructions();

  const handleNumberChange = (value) => {
    const newValue = Math.max(1, value); // Ensure minimum of 1
    setCups(newValue);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <motion.div 
            className="calculator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3>How to make Masala Chai</h3>
            <p className="subtitle">Using Chaipour's Speciality Masala Chai Mix</p>
            
            <div className="input-section">
              <label>Number of Cups</label>
              <div className="number-input">
                <button 
                  className="number-button"
                  onClick={() => handleNumberChange(cups - 1)}
                  aria-label="Decrease cups"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={cups}
                  onChange={(e) => handleNumberChange(parseInt(e.target.value) || 1)}
                  onFocus={(e) => e.target.select()}  // Selects all text when focused
                  aria-label="Number of Cups"
                />
                <button 
                  className="number-button"
                  onClick={() => handleNumberChange(cups + 1)}
                  aria-label="Increase cups"
                >
                  +
                </button>
              </div>
            </div>

            <div className="recipe-results">
              <h4>Recipe Results</h4>
              <div className="recipe-item">
                <span>Water</span>
                <div className="amount">{ingredients.water}ml</div>
              </div>
              <div className="recipe-item">
                <span>Milk</span>
                <div className="amount">{ingredients.milk}ml</div>
              </div>
              <div className="recipe-item">
                <span>Chai Mix</span>
                <div className="amount">{ingredients.chaiMix}g</div>
              </div>
              <div className="recipe-item">
                <span>Sugar</span>
                <div className="amount">{ingredients.sugar}g</div>
              </div>
            </div>

            <div className="instructions">
              <h4>Instructions</h4>
              <ol>
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
