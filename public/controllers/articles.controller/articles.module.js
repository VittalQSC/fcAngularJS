angular.module('articles', ['articleModule'])
	.controller('ArticlesCtrl', function ($scope, $http) {
		console.log("IM {articles} HERE");
		$scope.ar = "areara";	
	})
	.component('articlesList', {
	  templateUrl: '/controllers/articles.controller/articles.template.html',
	  controller: ['$scope', '$http', function ArticlesListController($scope, $http) {
	  		console.log("ArticlesListController ")
			$http.get('/articles/').then(function (result) {
				$scope.articles = result.data;
			}, function (err) {console.log(err);});		

			$scope.$on('updateArticles', function () {
				$http.get('/articles/').then(function (result) {
					$scope.articles = result.data;
				}, function (err) {console.log(err);});					
			})  		
	    }]
	});