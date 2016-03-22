"use strict";
describe('anguler-tr-href test', function() {


    it("test test", function() {
        expect(2).toBe(
            2
        );
    });
});

describe('MyApp Tabs', function() {
    var elm, scope, elmWithIgnore, elmWithTDUiSref;

    beforeEach(module('angular-tr-href'));

    beforeEach(inject(function($rootScope, $compile) {
        elm = angular.element(
                `<table>
                    <tr tr-href ui-sref="some/ui/sref">
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </table>`
            );
        elmWithIgnore =  angular.element(
                `<table>
                    <tr tr-href ui-sref="some/ui/sref">
                        <td>1</td>
                        <td>2</td>
                        <td tr-href-ignore>3</td>
                    </tr>
                </table>`
            );

        elmWithTDUiSref =  angular.element(
                `<table>
                    <tr tr-href ui-sref="some/ui/sref">
                        <td>1</td>
                        <td>2</td>
                        <td td-ui-sref="diffrent/url">3</td>
                    </tr>
                </table>`
            );

        scope = $rootScope;
        $compile(elm)(scope);
        $compile(elmWithIgnore)(scope);
        $compile(elmWithTDUiSref)(scope);
        scope.$digest();
    }));

    it('should create clickable titles', function() {

        let table = document.createElement('table');
        table.classList.add('ng-scope');
        expect(elm[0].outerHTML).toEqual(
`<table class="ng-scope">
                    <tbody><tr tr-href="" ui-sref="some/ui/sref">
                        <td><a ui-sref="some/ui/sref">1</a></td>
                        <td><a ui-sref="some/ui/sref">2</a></td>
                        <td><a ui-sref="some/ui/sref">3</a></td>
                    </tr>
                </tbody></table>`
        );
    });

    it('should ignore with tr-ignore-flag', function() {

        let table = document.createElement('table');
        table.classList.add('ng-scope');
        expect(elmWithIgnore[0].outerHTML).toEqual(
`<table class="ng-scope">
                    <tbody><tr tr-href="" ui-sref="some/ui/sref">
                        <td><a ui-sref="some/ui/sref">1</a></td>
                        <td><a ui-sref="some/ui/sref">2</a></td>
                        <td tr-href-ignore="">3</td>
                    </tr>
                </tbody></table>`
        );
    });

    it('should add diffrent url with td-ui-sref', function() {

        let table = document.createElement('table');
        table.classList.add('ng-scope');
        expect(elmWithTDUiSref[0].outerHTML).toEqual(
`<table class="ng-scope">
                    <tbody><tr tr-href="" ui-sref="some/ui/sref">
                        <td><a ui-sref="some/ui/sref">1</a></td>
                        <td><a ui-sref="some/ui/sref">2</a></td>
                        <td td-ui-sref="diffrent/url"><a ui-sref="diffrent/url">3</a></td>
                    </tr>
                </tbody></table>`
        );
    });
});
