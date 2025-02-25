function isClickable(webelement) {
  if (webelement.size > 0 && webelement.type === "input") {
    return true;
  } else {
    return false;
  }
}

let firstNameBtn = {
  id: "First Name",
  type: "input",
  size: 20,
};

if (isClickable(firstNameBtn)) {
  console.log(`Web Element ${firstNameBtn.id} is clickable!`);
} else {
  console.log(`Web Element ${firstNameBtn.id} is not clickable!`);
}
