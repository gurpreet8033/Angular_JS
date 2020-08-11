(function(){
    'use strict';
    angular.module("mod_1",[])
    .controller("cont_1",function($scope){ 
     $scope.name="saum";
     $scope.totalValue=0;

     $scope.display_n=function(){
         var total_n= calculate( $scope.name );
         $scope.totalValue=total_n;
     };

     function calculate(string){
         var total_s_v=0;
         for ( var i = 0 ; i < string.length ; i++ ) {
             total_s_v += string . charCodeAt ( i );
             
         }

         return total_s_v;
     }
    });
})();