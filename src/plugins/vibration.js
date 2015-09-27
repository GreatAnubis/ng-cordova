// install   :      cordova plugin add cordova-plugin-vibration
// link      :      https://github.com/apache/cordova-plugin-vibration

angular.module('ngCordova.plugins.vibration', [])

  .factory('$cordovaVibration', [function () {

    return {
      vibrate: function (times) {
        return navigator.vibrate(times);
      },
      vibrateWithPattern: function (pattern) {
        return navigator.vibrate(pattern);
      },
      cancelVibration: function () {
        return navigator.vibrate(0);
      }
    };
  }]);
