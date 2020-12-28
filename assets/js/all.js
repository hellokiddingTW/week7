"use strict";

var _lax = _interopRequireDefault(require("lax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.onload = function () {
  _lax["default"].setup(); // init


  var updateLax = function updateLax() {
    _lax["default"].update(window.scrollY);

    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
//# sourceMappingURL=all.js.map
