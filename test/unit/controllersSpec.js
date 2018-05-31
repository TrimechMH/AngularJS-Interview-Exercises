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
            expect(scope.contactModel).toEqual({});
            expect(scope.contacts).toEqual([{
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            }]);
        })
    );

    it('should update "contact" ',
        inject(function () {
            scope.contactModel = {
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            };
            scope.addContact();
            scope.contacts[0].firstname = 'updated!!';

            expect(scope.contacts).toEqual([{
                'firstname': 'updated!!',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            }]);
        })
    );

    it('should remove "contact" ',
        inject(function () {
            scope.contacts = [{
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            },{
                'firstname': 'TO BE',
                'lastname': 'Removed',
                'phoneNumber': '53183633'
            }];
            scope.removeContact( scope.contacts[1]);
            console.log(scope.contacts);
            expect(scope.contacts).toEqual([{
                'firstname': 'First name',
                'lastname': 'last name',
                'phoneNumber': '53183633'
            }]);
        })
    );


    it('should save "contacts" ',
        inject(function () {
            scope.contacts = [{
                'firstname': 'To BE ',
                'lastname': 'Saved 1',
                'phoneNumber': '53183633'
            },{
                'firstname': 'To BE ',
                'lastname': 'Saved 2',
                'phoneNumber': '53183633'
            }];
            scope.save();
            console.log('localStorage', localStorage.getItem('contacts'));
            expect(JSON.parse(localStorage.getItem('contacts'))).toEqual(scope.contacts);

        })
    );

});
