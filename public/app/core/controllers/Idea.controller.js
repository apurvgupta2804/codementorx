;
(function() {
    'use strict';

    angular
        .module('core')
        .controller('IdeaCtrl', IdeaCtrl);

    function IdeaCtrl($location, IdeasAPI, $storage) {

        var vm = this;
        vm.loggedInView = true;
        vm.ideas = [];
        vm.savedIdeas = [];
        vm.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        function init() {
            IdeasAPI.getUser().then(function(response) {
                console.log(response);
                vm.emailAddress = response.data.email;
                vm.name = response.data.name;
                vm.profileImg = response.data.avatar_url;
            }).catch(function(err) {
                $location.path("/");
            });
            getAllIdeas();

        }

        function getAllIdeas() {
            IdeasAPI.getIdeas().then(function(response) {
                vm.savedIdeas = response.data;
            }).catch(function(err) {
                $location.path("/");
            });
        }

        vm.createIdea = function() {
            vm.ideas.push({
                "content": "",
                "impact": 1,
                "ease": 1,
                "confidence": 1
            });
        };

        vm.saveIdea = function(content, impact, ease, confidence, index, id) {
            if (id) {
                IdeasAPI.updateIdeas(id, content, impact, ease, confidence).then(function(response) {
                    vm.savedIdeas.unshift({
                        "id": response.data.id,
                        "content": response.data.content,
                        "impact": response.data.impact,
                        "ease": response.data.ease,
                        "confidence": response.data.confidence,
                        "average_score": response.data.average_score,
                        "created_at": response.data.created_at
                    });
                    vm.removeIdea(index);
                });
            } else {
                IdeasAPI.saveIdea(content, impact, ease, confidence).then(function(response) {
                    vm.savedIdeas.unshift({
                        "id": response.data.id,
                        "content": response.data.content,
                        "impact": response.data.impact,
                        "ease": response.data.ease,
                        "confidence": response.data.confidence,
                        "average_score": response.data.average_score,
                        "created_at": response.data.created_at
                    });
                    vm.removeIdea(index);
                });
            }

        };

        vm.removeIdea = function(index) {
            vm.ideas.splice(index, 1);
            //console.log(index);
        };

        vm.deleteIdea = function(id) {
            IdeasAPI.deleteIdea(id).then(function(response) {
                getAllIdeas();
            });
        };

        vm.editIdea = function(id, content, impact, ease, confidence) {
            vm.savedIdeas= vm.savedIdeas.filter(function(e) {
                return e.id !== id;
            });

            vm.ideas.unshift({
                "content": content,
                "impact": impact,
                "ease": ease,
                "confidence": confidence,
                "id": id
            });
        }

        vm.logout = function() {
            $storage.clear();
            $location.path("/");
        };

        init();
    }
}).call(this);