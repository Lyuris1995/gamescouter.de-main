const apiKey = '9y053u5loiqscf41ud9wfoppijb1yk';
const clientId = 'p89nnr4w2x17dxmebb0f19f9bo272z';

async function getRequest() {
    const response = await fetch("https://api.igdb.com/v4/games", {
        headers: {
            "Client-ID": clientId,
            "Authorization": "Bearer " + apiKey,
        },
    });

    const games = await response.json();

    for (const game of games) {
        console.log(game.name);
    }
}

getRequest();