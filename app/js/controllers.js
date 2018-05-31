'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('contactCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.contacts = [];
            $scope.contactModel = {};

            $scope.addContact = function () {
                console.log('here', $scope.contactModel);
                var contact = {
                    'firstname': $scope.contactModel.firstname,
                    'lastname': $scope.contactModel.lastname,
                    'phoneNumber': $scope.contactModel.phoneNumber
                };
                $scope.contacts.unshift(contact);
                $scope.contactModel = {};
            };

            $scope.removeContact = function (contact) {
                var index = $scope.contacts.indexOf(contact);
                $scope.contacts.splice(index,1);

            };

            $scope.purge = function () {
                $scope.oldContacts = $scope.contacts;

                $scope.contacts = [];
            };

            $scope.save = function () {
                localStorage.setItem('contacts', JSON.stringify($scope.contacts));
            };
        }
    ]);
