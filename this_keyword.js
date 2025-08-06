const parson = {
  firstName: "dalim",
  lastName: "kazi",
  class: "11",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const x = 10;
function f(x) {
  return x + 3;
}
function g(x) {
  return x * 2;
}

function composite(params) {
  return f(g(params));
}

const result = composite(2);
console.log(result);
console.log(parson.fullName());
