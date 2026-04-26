export const dietPlans = {
  "fat loss": {
    "non-veg": {
      breakfast: { name: "Protein Oatmeal & Berries", calories: 350, macros: { p: 25, c: 45, f: 8 }, items: ["1/2 cup Oats", "1 scoop Whey Protein", "Mixed Berries"], icon: "coffee" },
      lunch: { name: "Grilled Chicken Salad", calories: 450, macros: { p: 40, c: 20, f: 15 }, items: ["150g Chicken Breast", "Mixed Greens", "Cherry Tomatoes"], icon: "sun" },
      dinner: { name: "Baked Salmon & Veggies", calories: 500, macros: { p: 35, c: 15, f: 20 }, items: ["150g Salmon", "Asparagus", "Zucchini"], icon: "moon" },
      snacks: { name: "Greek Yogurt", calories: 200, macros: { p: 15, c: 10, f: 12 }, items: ["100g Greek Yogurt", "15g Almonds"], icon: "apple" }
    },
    "veg": {
      breakfast: { name: "Tofu Scramble & Avocado", calories: 350, macros: { p: 22, c: 20, f: 18 }, items: ["150g Firm Tofu", "1/4 Avocado", "Spinach"], icon: "coffee" },
      lunch: { name: "Quinoa Chickpea Salad", calories: 450, macros: { p: 18, c: 55, f: 15 }, items: ["1/2 cup Quinoa", "100g Chickpeas", "Cucumber & Tomato"], icon: "sun" },
      dinner: { name: "Lentil Soup & Roasted Veg", calories: 500, macros: { p: 25, c: 60, f: 10 }, items: ["1.5 cup Lentil Soup", "Roasted Broccoli", "Carrots"], icon: "moon" },
      snacks: { name: "Protein Shake & Almonds", calories: 200, macros: { p: 25, c: 5, f: 10 }, items: ["1 scoop Plant Protein", "15g Almonds"], icon: "apple" }
    }
  },
  "muscle gain": {
    "non-veg": {
      breakfast: { name: "Mass Gainer Shake & Eggs", calories: 700, macros: { p: 45, c: 80, f: 20 }, items: ["3 Whole Eggs", "2 Slices Toast", "Banana Shake"], icon: "coffee" },
      lunch: { name: "Beef & Rice Bowl", calories: 850, macros: { p: 50, c: 100, f: 25 }, items: ["200g Lean Beef", "1.5 cup White Rice", "Broccoli"], icon: "sun" },
      dinner: { name: "Chicken Pasta", calories: 750, macros: { p: 55, c: 85, f: 15 }, items: ["200g Chicken", "1.5 cup Pasta", "Marinara"], icon: "moon" },
      snacks: { name: "Peanut Butter Bagel", calories: 400, macros: { p: 15, c: 55, f: 18 }, items: ["1 Bagel", "2 tbsp Peanut Butter"], icon: "apple" }
    },
    "veg": {
      breakfast: { name: "High-Protein Oatmeal", calories: 700, macros: { p: 35, c: 90, f: 20 }, items: ["1 cup Oats", "2 tbsp Chia Seeds", "Soy Milk", "Peanut Butter"], icon: "coffee" },
      lunch: { name: "Tempeh & Sweet Potato Bowl", calories: 850, macros: { p: 45, c: 110, f: 25 }, items: ["200g Tempeh", "250g Sweet Potato", "Tahini Dressing"], icon: "sun" },
      dinner: { name: "Edamame Pasta", calories: 750, macros: { p: 50, c: 90, f: 18 }, items: ["100g Edamame Pasta", "Tofu Chunks", "Pesto Sauce"], icon: "moon" },
      snacks: { name: "Protein Bar & Nuts", calories: 400, macros: { p: 20, c: 35, f: 22 }, items: ["Vegan Protein Bar", "Handful of Walnuts"], icon: "apple" }
    }
  },
  "maintenance": {
    "non-veg": {
      breakfast: { name: "Avocado Toast & Eggs", calories: 450, macros: { p: 20, c: 35, f: 25 }, items: ["2 Slices Sourdough", "1/2 Avocado", "2 Eggs"], icon: "coffee" },
      lunch: { name: "Turkey Sandwich", calories: 550, macros: { p: 35, c: 50, f: 18 }, items: ["Turkey Slices", "Whole Grain Bread", "Cheese"], icon: "sun" },
      dinner: { name: "Steak and Potatoes", calories: 600, macros: { p: 40, c: 45, f: 22 }, items: ["150g Sirloin Steak", "1 Baked Potato", "Green Beans"], icon: "moon" },
      snacks: { name: "Protein Bar & Fruit", calories: 300, macros: { p: 20, c: 35, f: 8 }, items: ["1 Protein Bar", "1 Apple"], icon: "apple" }
    },
    "veg": {
      breakfast: { name: "Avocado Toast & Tofu", calories: 450, macros: { p: 18, c: 38, f: 24 }, items: ["2 Slices Sourdough", "1/2 Avocado", "50g Scrambled Tofu"], icon: "coffee" },
      lunch: { name: "Hummus Wrap", calories: 550, macros: { p: 20, c: 65, f: 22 }, items: ["Whole Wheat Wrap", "Hummus", "Falafel", "Veggies"], icon: "sun" },
      dinner: { name: "Paneer / Tofu Curry", calories: 600, macros: { p: 30, c: 50, f: 28 }, items: ["150g Tofu/Paneer", "1 cup Basmati Rice", "Curry Sauce"], icon: "moon" },
      snacks: { name: "Fruit Bowl & Seeds", calories: 300, macros: { p: 8, c: 45, f: 12 }, items: ["Mixed Fruits", "Pumpkin Seeds"], icon: "apple" }
    }
  }
};
