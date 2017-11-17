"use strict";
define(['application-configuration', 'utility'], function (app) {
    app.register.service('brandPerceptionService', ['$q', '$filter', 'ajaxService', 'restResources',
        function ($q, $filter, ajaxService, restResource) {
        this.fetchTweets = function() {
            return ajaxService.AjaxGet(restResource.fetchTweets());
        }
    }]);
});