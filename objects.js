var meals {
  breakfast: 'oatmeal';
  lunch: 'burrito';
  dinner: 'steak';
}

meals.snack = 'yogurt';

console.log(meals.snack)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}
