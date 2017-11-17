"use strict";
define(['application-configuration'],
    function () {

        var app = angular.module('RestResources', []);

        app.factory('restResources', [
            function () {
                var baseUrl = "";
                var getExternalUrl = function (url) {
                    return baseUrl + url;
                };

                return {
                    fetchTweets: function () {
                        return getExternalUrl("/fetchTweets");
                    }
                }
            }
        ]);
    });
