;(function(){
'use strict';
  angular
    .module('core')
    .service('$storage', Storage);

  function Storage(){
    this.setObject = function( key, value ){
      if(key === undefined || key === 'undefined') {return;}
      return localStorage.setItem( key, JSON.stringify( value ) );
    };
    this.set = function( key, value ){
      if(key === undefined || key === 'undefined') {return;}
      return localStorage.setItem( key, value);
    };
    this.getObject = function(key){
      var value = localStorage.getItem(key);
      return JSON.parse(value);
    };
    this.get = function(key){
      var value = localStorage.getItem(key);
      return value;
    };
    this.setUser = function(data){
      this.set('user_token', data.authId);
      this.set('activationStatus', data.activationStatus);
      if(typeof data.userPreference !== 'undefined'){
        this.setObject('userPreferenceNotification', data.userPreference.notificationType);
      }
      return this.setObject('user', data.userinfo);
    };
    this.clear = function(key){
      if(key){
        delete localStorage[key];
        return ;
      }
      localStorage.clear();
      return;
    };
    
  }
}).call(this);
