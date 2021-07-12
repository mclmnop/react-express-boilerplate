//https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster donne le nom  des joueurs
//canadiens https://statsapi.web.nhl.com/api/v1/teams/8?expand=team.roster

const request = require('request');


const fetchBreedDescription = function(race, callback) {
  request(`https://statsapi.web.nhl.com/api/v1/people/8473419/stats?stats=statsSingleSeasonPlayoffs`, function(error, response, body) {

    const data = JSON.parse(body);
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const errorNotOK = 'URL not found';
      return callback(errorNotOK, null);
    }
    if (Object.keys(data).length === 0) {
      const errorMessage = 'race not found';
      return callback(errorMessage, null);
    }
    //console.log(data.results[0]);
    console.log(data.stats[0].type.displayName);
    console.log(data.stats[0].splits[0].stat.assists);
  });
};

//fetchBreedDescription();
//gets all players id for specified team.
const getPlayers = function(teamID) {
  request(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}?expand=team.roster`, function(error, response, body) {

    const data = JSON.parse(body);

    //console.log(data.results[0]);

    //console.log(data.teams[0].roster.roster[0]);
    for ( let player of data.teams[0].roster.roster){
      console.log(player.person.id)
    }

  });
}
//getPlayers(8);

const getPlayerStats = function(playerID){
  request(`https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=statsSingleSeasonPlayoffs`, function(error, response, body) {

    const data = JSON.parse(body);
/*     if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const errorNotOK = 'URL not found';
      return callback(errorNotOK, null);
    }
    if (Object.keys(data).length === 0) {
      const errorMessage = 'player not found';
      return callback(errorMessage, null);
    } */
    console.log(data.stats[0].splits[0].stat.timeOnIce)
/*     for ( let player of data.teams[0].roster.roster){
      console.log(player.person.id)
    } */
  });
}
getPlayerStats(8480018);
const savePlayerStats = function(stats){
  
}