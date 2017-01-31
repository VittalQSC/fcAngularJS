angular.module('articleModule', [])
	.component('article', {
	  templateUrl: '/controllers/article.controller/article.template.html',
	  controller: [ArticleController],
      bindings: {
    	    article: '<' // or key: '<' it depends on what binding you need
      }
	});


function ArticleController() {}
