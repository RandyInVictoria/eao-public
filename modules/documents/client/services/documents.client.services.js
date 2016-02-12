'use strict';

angular.module('documents')
    .service('Document', serviceDocument);
// -----------------------------------------------------------------------------------
//
// DIRECTIVE: Public Projects Main
//
// -----------------------------------------------------------------------------------
serviceDocument.$inject = ['$http'];
/* @ngInject */
function serviceDocument($http) {

	var getDocumentTypes = function() {
		return [
            {
                "code":"intakeoverview",
                "name":"Project Overview",
                "bucket":"intake"
            },
            {
                "code":"intakeshape",
                "name":"Shape File",
                "bucket":"intake"
            },
            {
                "code":"intakemisc",
                "name":"Supporting File",
                "bucket":"intake"
            }
        ];
	};

    var getAllDocuments = function() {
        return $http({method:'GET',url: '/api/documents'});
    };

    var getProjectDocuments = function(projectId) {
        return $http({method:'GET',url: '/api/documents/' + projectId});
    };

    var getProjectDocumentTypes = function(projectId) {
        return $http({method:'GET',url: '/api/documents/types/' + projectId});
    };

    var getProjectDocumentVersions = function(projectId, type, subtype, folderName, fileName) {
        return $http({  method:'GET',
                        url: '/api/documents/versions/' + projectId,
                        headers: {
                            'projectFolderType': type,
                            'projectFolderSubType': subtype,
                            'projectFolderName': folderName,
                            'documentFileName': fileName,
                            'projectID': projectId,
                        },
                    });
    };

	return {
		getDocumentTypes: getDocumentTypes,
        getAllDocuments: getAllDocuments,
        getProjectDocuments: getProjectDocuments,
        getProjectDocumentTypes: getProjectDocumentTypes,
        getProjectDocumentVersions: getProjectDocumentVersions
	};
}