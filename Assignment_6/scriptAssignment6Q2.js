const addition = () => {
  const val1 = document.getElementById("val1").value;
  const val2 = document.getElementById("val2").value;
  const res = document.getElementById("res");
  res.value = `${parseInt(val1) + parseInt(val2)}`;
};

const substraction = () => {
  const val1 = document.getElementById("val1").value;
  const val2 = document.getElementById("val2").value;
  const res = document.getElementById("res");
  res.value = `${parseInt(val1) - parseInt(val2)}`;
};

const multiplication = () => {
  const val1 = document.getElementById("val1").value;
  const val2 = document.getElementById("val2").value;
  const res = document.getElementById("res");
  res.value = `${parseInt(val1) * parseInt(val2)}`;
};

const division = () => {
  const val1 = document.getElementById("val1").value;
  const val2 = document.getElementById("val2").value;
  const res = document.getElementById("res");
  res.value = `${parseInt(val1) / parseInt(val2)}`;
};
