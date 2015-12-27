angular.module('buttons.controller', [])
  .controller('ButtonsController', ButtonsController);

ButtonsController.$inject = ['colorClasses'];

function ButtonsController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
