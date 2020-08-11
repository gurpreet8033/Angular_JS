(function() {
    'use strict'

    
    angular.module('mod1',[])

    .controller('cont1',function($scope){

        $scope.fruits=""; 
        $scope.msg="";  
        $scope.color="black";    

        $scope.Check=function(){ 
            
            var arr = $scope.fruits.split(","); 
            evaluate(arr);

        };
        function evaluate(arr)
        { 
            var ctr=0;
            for(var i=0;i<arr.length;i++)
                if(arr[i].trim()!="")
                    ctr++;
            if(ctr==0)
            {
                $scope.msg = "Please enter data first";
                $scope.color="Red";
            }
            else if(ctr<=3)
            {
                $scope.msg="Enjoy!";
                
                $scope.color="Green";
            } 
            else    {
                $scope.msg = "Too much!";
                $scope.color="Green";
            }
        };
    });
})();