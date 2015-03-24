var parsePlugin = {
    initialize: function(appId, clientKey, successCallback, errorCallback) {
	alert("initialize");
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'initialize',
            [appId, clientKey]
        );
    },
	
	
	getnotifications: function(successCallback, errorCallback) {
	alert("getnotifications");
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'getnotifications',
            []
        );
    },
	
	updatereadStatus: function(id,flag,successCallback, errorCallback) {
	alert("updatereadStatus");
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'updatereadStatus',
            [id,flag]
        );
    },

    getInstallationId: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'getInstallationId',
            []
        );
    },

    getInstallationObjectId: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'getInstallationObjectId',
            []
        );
    },

    getSubscriptions: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'getSubscriptions',
            []
        );
    },

    subscribe: function(channel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'subscribe',
            [ channel ]
        );
    },

    unsubscribe: function(channel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'ParsePlugin',
            'unsubscribe',
            [ channel ]
        );
    }
};
module.exports = parsePlugin;
