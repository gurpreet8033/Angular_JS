(function() {
    'use strict';
   
    angular.module('guri',[])

    .controller('guri_c',function($scope,$filter){
        
        $scope.backcolor = "Black";
        $scope.state = "";

        $scope.Yellow = function(){
            $scope.backcolor="yellow";
            $scope.width= "50px";
        }

        $scope.Red = function(){
            $scope.backcolor="red";
            $scope.width= "200px";
        }

        $scope.handImage=function(){
            $scope.state = "hand.jpg";    //guri_hand.jpg      
        }
        $scope.noHandImage=function(){
            $scope.state = "nohand.jpg";   

        }

        $scope.up=function(){
            var upCase = $filter('uppercase');
            $scope.name=upCase($scope.name);
        };

        $scope.low=function(){

            var lowCase= $filter('lowercase')
            $scope.name2= lowCase($scope.name2);
        };
        $scope.myfunction = function(){
            return "Hi";
        };
    });
    

})();