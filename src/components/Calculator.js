import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [cups, setCups] = useState(1);
  const [sugarLevel, setSugarLevel] = useState("normal");

  const baseRecipe = {
    water: 110,
    milk: 100,
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

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">How to make Masala Chai</h2>
              <p className="text-center mb-4">Using ChaiPour Speciality Masala Chai Mix</p>
              
              <div className="mb-4">
                <label className="form-label">
                  Number of Cups
                  <input
                    type="number"
                    className="form-control mt-2"
                    min="1"
                    value={cups}
                    onChange={(e) => setCups(Math.max(1, parseInt(e.target.value) || 1))}
                    aria-label="Number of Cups"
                  />
                </label>
              </div>

              <div className="card bg-light mb-4">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">Recipe Results</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-droplet-fill me-2"></i>Water</span>
                      <span className="badge bg-secondary rounded-pill">{ingredients.water}ml</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-cup-fill me-2"></i>Milk</span>
                      <span className="badge bg-secondary rounded-pill">{ingredients.milk}ml</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-box-fill me-2"></i>Chai Mix</span>
                      <span className="badge bg-secondary rounded-pill">{ingredients.chaiMix}g</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-cup-straw me-2"></i>Sugar</span>
                      <span className="badge bg-secondary rounded-pill">{ingredients.sugar}g</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">Instructions</h3>
                  <ol className="list-group list-group-numbered">
                    {instructions.map((step, index) => (
                      <li key={index} className="list-group-item">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
