(function(){
    angular.module('angular-tr-href', []).directive('trHref', function() {
        return {
            restrict: 'A',
            scope: false,
            compile: function($element, $attrs) {
                var attributes = ['ngHref', 'uiSref', 'href'];
                if ($element[0].nodeName === 'TR') {
                    angular.forEach($element[0].childNodes, function(child) {
                        if (child && child.nodeName === 'TD' && !child.hasAttribute('tr-href-ignore')) {
                            var grandChildren = [];
                            while (child.firstChild) {
                                grandChildren.push(
                                    child.removeChild(child.firstChild)
                                );
                            }
                            var a = document.createElement('A');
                            angular.forEach(attributes, function(attribute) {
                                if ($attrs[attribute]) {
                                    a.setAttribute($attrs.$attr[attribute], $attrs[attribute]);
                                }
                            });
                            child.appendChild(a);
                            angular.forEach(grandChildren, function(grandChild) {
                                child.firstChild.appendChild(grandChild); // aristocrats
                            });
                            if ($attrs.tdUiSref) {
                                child.setAttribute('ui-sref', $attrs.tdUiSref);
                                child.firstChild.setAttribute('ui-sref', $attrs.tdUiSref);
                            }
                        }
                    });
                } else {
                    console.warn('tr-href should be put in tr');
                }
            }
        };
    });
})();
