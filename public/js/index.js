//index.js

(function(){
	var app = angular.module('app', [])
	
	app.controller('headerController',['$scope',function($scope){
		$scope.loginClick = function(){
			login = true;
			sign_up = false;
			console.log('log in');
			//show login
		};
		$scope.signUpClick = function(){
			sign_up = true;
			login = false;
			console.log('sign up');
			//show signup
		};
	}])

	app.directive('loginPage', [function(){
		return {
			restict: 'E',
			templateUrl: 'partials/login-page.html'
		}
	}])

	app.controller('tabsController', ['$scope', function($scope){
		this.logged_in = logged_in;
		$scope.setTab = function(num){
			currentTab = num;
			console.log(num);
		}
	}])
	
	app.controller('loginController', ['$scope', '$http',function($scope, $http){
		this.userName;
		this.password;
		this.passwordConfirm;

		$scope.showLogin = function(){
			return (login || sign_up);
		}

		$scope.showSignup = function(){
			return sign_up;
		}

		$scope.showLoginError = function(){
			return login_error;
		}

		this.loginSubmit = function(){
			if(login){
				console.log(this.userName);
				console.log(this.password);
				this.userName = '';
				this.password = '';
				login = false;
			}
			else if (sign_up){
				console.log(this.userName);
				console.log(this.password);
				console.log(this.passwordConfirm);
				sign_up = false;
			}
			//make ajax call with login info?
			//if comesback as valid, hide login and refresh page as user

			//comes back success..

		}

	}])


	
	app.controller('leaderboardController',['$scope','$http',function($scope, $http){
		
		this.show = function(){
			if(currentTab === 0){
				return true;
			}
			return false;
		}

		this.leaderboard = _.sortBy(leaderboard, function(obj){return -obj.ratio()});

		console.log(this.leaderboard);

	}])


	
	app.controller('userPageController', [function(){

		this.show = function(){
			if(currentTab === 1){
				return true;
			}
			return false;
		};

		this.tab = 1;
		this.stats = userStats
	}])

	app.controller('searchUsersController', [function(){
		this.show = function(){
			if(currentTab === 3){
				return true
			}
			return false;
		}
	}])





	var leaderboard = [
	{
		userName: 'john',
		wins: 1,
		losses: 2,
		ratio: function()
			{
				return (''+(this.wins/this.losses)).substring(0,5);
			}
	},
	{
		userName: 'what',
		wins: 1000000,
		losses: 100,
		ratio: function()
			{
				return (''+(this.wins/this.losses)).substring(0,5);
			}
	},
	{
		userName: 'that_guy_at_the_gym',
		wins: 5,
		losses: 6,
		ratio: function()
			{
				return (''+(this.wins/this.losses)).substring(0,5);
			}
	},
	{
		userName: 'your_mom',
		wins: 2,
		losses: 19,
		ratio: function()
			{
				return (''+(this.wins/this.losses)).substring(0,5);
			}
	},
	{
		userName: 'allen_iverson',
		wins: 13,
		losses: 15,
		ratio: function()
			{
				return (''+(this.wins/this.losses)).substring(0,5);
			}
	}
	]

	var userStats = [
	{
		game: 'spelunky',
		opponents: 'none',
		score: '190',
		win_loss: 'L'
	},
	{
		game: 'checkers',
		opponents: 'that_guy_at_the_gym',
		score: 'NA',
		win_loss: 'L'
	}]

	var currentTab = 0;
	var login = false;
	var sign_up = false;
	var login_error = false;
	var logged_in = true;

})();




