const parson = {
  firstName: "dalim",
  lastName: "kazi",
  class: "11",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(parson.fullName());
