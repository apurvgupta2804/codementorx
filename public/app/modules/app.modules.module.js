;(function(){
'use strict';


  window.modules = [
  ];
  window.ModuleGenerator = ModuleGenerator;
  window.Application = ModuleGenerator();

  function ModuleGenerator(){

    window.AppModule = angular.module('app.modules', window.modules);
    return {
      register:register
    };

    function register(module){
      angular.module(module, ['core']);
      window.modules.push(module);
    }
  }



}).call(this);