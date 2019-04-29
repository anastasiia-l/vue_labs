export class OpenDotaClient {
    constructor() {
        this.matches = [];
        this.teams = [];
        this.format = []
    }

    getMatches() {
        let url = 'https://api.opendota.com/api/proMatches';
        return  fetch(url)
            .then(
                function (response) {
                    return response.json()
                }
            )
            .then(matches => {
                this.matches = matches;
                return matches
            });

    }

    getTeams() {
        let url = 'https://api.opendota.com/api/teams';
        return fetch(url)
            .then(
                function (response) {
                    return response.json()
                }
            )
            .then(teams => {
                this.teams = teams;
                return teams;
            });


    }

    formatMatches(matches, teams) {
        for (let i = 0; i < matches.length; i++) {
            console.log(i)
            let radiant_team_index = teams.find(x => x.team_id == matches[i].radiant_team_id);
            let dire_team_index = teams.find(x => x.team_id == matches[i].dire_team_id);
//TODO: не все команды отдает апи, нужно запросами вытаскивать
            if (dire_team_index && radiant_team_index) {
                let temp = {
                    id: matches[i].match_id,
                    start_time: matches[i].start_time,
                    duration: matches[i].duration,
                    league_name: matches[i].league_name,
                    radiant_win: matches[i].radiant_win,
                    radiant: {
                        id: radiant_team_index.team_id,
                        logo_url: radiant_team_index.logo_url,
                        name: radiant_team_index.name,
                        rating: radiant_team_index.rating,
                        wins: radiant_team_index.wins,
                        losses: radiant_team_index.losses,
                    },
                    dire: {
                        id: dire_team_index.team_id,
                        logo_url: dire_team_index.logo_url,
                        name: dire_team_index.name,
                        rating: dire_team_index.rating,
                        wins: dire_team_index.wins,
                        losses: dire_team_index.losses,
                    }
                };
                this.format.push(temp);
                console.log(temp);
            }

        }
        return this.format
    }


}