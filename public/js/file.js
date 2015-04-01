(function(){

	

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

	var currentTab;
	var login = false;
	var login_error = false;


})();