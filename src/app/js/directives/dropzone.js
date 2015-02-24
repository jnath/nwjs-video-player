define(['./module'], function (directives) {
    'use strict';
    directives.directive('dropZone', function () {
        return function (scope, elm) {
        	elm.addClass('bg-primary');
          elm[0].ondragover = function(){
          	elm.removeClass('bg-primary');
 						elm.addClass('bg-success');
           	return false;
          }
          elm[0].ondragleave = function(){
          	elm.removeClass('bg-success');
          	elm.addClass('bg-primary');
          	return false;
          }
          elm[0].ondrop = function(e){
          	elm.removeClass('bg-success');
          	elm.addClass('bg-primary');
          	e.preventDefault();

          	var file = e.dataTransfer.files[0];
          	console.log(file);

          	return false;
          }
        };
    });
});
