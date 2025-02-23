let your_height_in_cm = 170;
let pefect_weight, maximum_weight, minimum_weight;

pefect_weight = ((your_height_in_cm % 100) * 9) / 10;
maximum_weight = your_height_in_cm % 100;
minimum_weight = ((your_height_in_cm % 100) * 8) / 10;

console.log(
  "Cân nặng lý tưởng = " +
    pefect_weight +
    ", Cân nặng tối đa = " +
    maximum_weight +
    ", Cân nặng tối thiểu = " +
    minimum_weight
);
