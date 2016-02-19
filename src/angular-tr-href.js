(function(){
    angular.module('angular-tr-href', []).directive('trHref', function() {
        return {
            restrict: 'A',
            scope: false,
            compile: function($element) {
                var attributes = ['ng-href', 'ui-sref', 'href'];
                if ($element[0].nodeName === 'TR') {
                    angular.forEach($element[0].childNodes, function(child) {
                        if (child && child.nodeName === 'TD') {
                            var grandChildren = [];
                            while (child.firstChild) {
                                grandChildren.push(
                                    child.removeChild(child.firstChild)
                                );
                            }
                            var a = document.createElement('A');
                            angular.forEach(attributes, function(attribute) {
                                if ($element[0].hasAttribute(attribute)) {
                                    a.setAttribute(attribute, $element[0].getAttribute(attribute));
                                }
                            });
                            child.appendChild(a);
                            angular.forEach(grandChildren, function(grandChild) {
                                child.firstChild.appendChild(grandChild); // aristocrats
                            });
                        }
                    });
                } else {
                    console.warn('tr-href should be put in tr');
                }
            }
        };
    });
})();
