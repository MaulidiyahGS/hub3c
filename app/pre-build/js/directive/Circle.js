app.directive("circle", function($interval){
	return {
		restrict: 'E',
		scope: {
	      mdl: '='
	    },
		templateUrl : 'views/directive/circle.html',
		controller : function($scope) {
			//console.log($scope.mdl);
			$scope.activeIndex = 0;
			$scope.promise = null

			$scope.start = function(){
				$scope.promise = $interval(function(){
					$scope.activeIndex++;
					$scope.activeIndex = $scope.activeIndex % $scope.mdl.length;
				}.bind(this), 4000);
			}

			$scope.stop = function(){
				$interval.cancel($scope.promise);
				$scope.promise = null;
			}

			$scope.goPrev = function(){
				//console.log('prev');
				$scope.stop();

				$scope.activeIndex--;
				if($scope.activeIndex < 0) $scope.activeIndex = $scope.mdl.length - 1;

				$scope.start();
			}

			$scope.goNext = function(){
				//console.log('nex');
				$scope.stop();

				$scope.activeIndex++;
				$scope.activeIndex = $scope.activeIndex % $scope.mdl.length;

				$scope.start();
			}

			$scope.setIndex = function(i){
				//console.log('set to '+i);
				$scope.stop();

				$scope.activeIndex = i;

				$scope.start();
			}

			$scope.start();
		}
	}
});