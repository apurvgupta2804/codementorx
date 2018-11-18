;
(function() {
    'use strict';

    angular
        .module('core')
        .factory('IdeasAPI', IdeasAPI);
    /* @inject */
    function IdeasAPI($http, serverUrl, $q, $storage) {
        // Define Private Variables

        var api = serverUrl;

        var instance = {
            signUp: signUp,
            login: login,
            getUser: getUser,
            refreshToken: refreshToken,
            saveIdea: saveIdea,
            deleteIdea: deleteIdea,
            getIdeas: getIdeas,
            updateIdeas: updateIdeas
        };

        return instance;

        function signUp(name, email, password) {
            return $http({
                url: api + '/users',
                method: 'POST',
                data: {
                    "email": email,
                    "name": name,
                    "password": password
                }
            });
        }

        function login(email, password) {
            return $http({
                url: api + '/access-tokens',
                method: 'POST',
                data: {
                    "email": email,
                    "password": password
                }
            });
        }

        function getUser() {
            return $http({
                url: api + '/me',
                method: 'GET'
            });
        }

        function refreshToken() {
            return $http({
                url: api + '/access-tokens/refresh',
                method: 'POST',
                data: {
                    "refresh_token": $storage.get("refresh_token")
                }
            });
        }

        function saveIdea(content, impact, ease, confidence) {
            return $http({
                url: api + '/ideas',
                method: 'POST',
                data: {
                    "content": content,
                    "impact": impact,
                    "ease": ease,
                    "confidence": confidence
                }
            });
        }

        function deleteIdea(ideaId) {
            return $http({
                url: api + '/ideas/' + ideaId,
                method: 'DELETE'
            });
        }

        function getIdeas() {
            return $http({
                url: api + '/ideas',
                method: 'GET'
            });
        }

        function updateIdeas(id, content, impact, ease, confidence) {
            return $http({
                url: api + '/ideas/' + id,
                method: 'PUT',
                data: {
                    "content": content,
                    "impact": impact,
                    "ease": ease,
                    "confidence": confidence
                }
            });
        }
    }

}).call(this);