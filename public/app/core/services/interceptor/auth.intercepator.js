;
(function() {
  'use strict';
  angular
    .module('core')
    .factory('authInterceptor', authInterceptor);

  /* @inject */
  function authInterceptor($rootScope, $q, $storage, $location) {
    return {
      request: request,
      responseError: responseError      
    };
    // Add authorization token to headers
    function request(config) {
      config.headers = config.headers || {};
      config.headers['x-access-token'] = $storage.get("token");
      return config;
    }

    // Intercept 401s and redirect you to login
    function responseError(response) {
      if (response.status === 401) { // 401 Represents UnAuthorized access
        //$storage.clear();        
        $location.path("/");
        return $q.reject(response);
      } else if(response.status === 403) {
        // TODO : Have to handel this case
        return $q.reject(response);
      }else{
        return $q.reject(response);
      }
    }
    
  }
}).call(this);
