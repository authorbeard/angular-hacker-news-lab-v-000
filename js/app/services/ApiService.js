var API_URL = 'https://hacker-news.firebaseio.com/v0/'

function ApiService($http){

    this.getTop = function(){
        return $http.get(API_URL + 'topstories.json')
    }

    this.getPost = function(id){
        return $http.get(API_URL + 'item/' + id +'.json')
    }
}

angular 
    .module('app')
    .service('ApiService', ApiService)