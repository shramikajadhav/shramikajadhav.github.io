(function() {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);


	LunchCheckController.$inject =['$scope'];
	function LunchCheckController($scope) {
		$scope.name = "";
		$scope.message= "";
		$scope.totalitems = 0;
		$scope.setcolor="";

		$scope.DisplayTotalItems = function() {
			var items = calculateItems($scope.name);
			$scope.totalitems = items;
		};



		function calculateItems(string) {
			var NoOfitem= string.split(',').length;
			return NoOfitem;
			};
		
		 $scope.CheckIfTooMuch= function(){
		 	var finalmessage = Check($scope.totalitems);
		 	$scope.message = finalmessage;
		 	$scope.setcolor = color;
		 };


		function Check(string){
			if( string =="" ) {
				return "Enter something first!!";
							}

		    else if (string <= 3){
		  		return "Enjoy";
				}


			
			else{
				return "Too much";
				}
		};

		
		
	}


		
	
})();