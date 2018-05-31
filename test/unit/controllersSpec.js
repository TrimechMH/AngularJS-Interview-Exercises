'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    var scope, ctrl, $httpBackend;

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('contactCtrl', {$scope: scope});
    }));

    it('should define the controller', inject(function () {
        expect(ctrl).toBeDefined();
    }));

    it('should "initialize" model with empty contacts',
        inject(function () {
            expect(scope.contactModel).toEqual({});
            expect(scope.contacts).toEqual([]);
        })
    );


    it('should create "contact" ',
        inject(function () {
            scope.contactModel = {
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            };
            scope.addContact();
            console.log(scope.contacts);
            expect(scope.contactModel).toEqual({});
            expect(scope.contacts).toEqual([{
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            }]);
        })
    );

});
