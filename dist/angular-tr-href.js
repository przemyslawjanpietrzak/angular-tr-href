'use strict';

angular.module('angular-tr-href', []).directive('trHref', function () {
  "use strict";

  return {
    restrict: 'A',
    scope: false,
    compile: function compile($element, $attrs) {
      var attributes = ['ngHref', 'uiSref', 'href'];
      if ($element[0].nodeName === 'TR') {
        angular.forEach($element[0].childNodes, function (child) {
          if (child && child.nodeName === 'TD' && !child.hasAttribute('tr-href-ignore')) {
            (function () {
              var grandChildren = [];
              while (child.firstChild) {
                grandChildren.push(child.removeChild(child.firstChild));
              }
              var a = document.createElement('A');
              angular.forEach(attributes, function (attribute) {
                if ($attrs[attribute]) {
                  a.setAttribute($attrs.$attr[attribute], $attrs[attribute]);
                }
              });
              child.appendChild(a);
              angular.forEach(grandChildren, function (grandChild) {
                child.firstChild.appendChild(grandChild); // aristocrats
              });
              if (child.hasAttribute('td-ui-sref')) {
                child.firstChild.setAttribute('ui-sref', child.getAttribute('td-ui-sref'));
              }
            })();
          }
        });
      } else {
        console.warn('tr-href should be put in tr');
      }
    }
  };
});