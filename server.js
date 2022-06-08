const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

app.use(express.static('public'))




const players = {
    'wayne rooney': {
        'club': 'Manchester United',
        'nationality': 'English',
        'position': 'Striker',
        'age': 36,
        'imgUrl': 'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687700/Legends-Profile_Wayne-Rooney1523460268000.jpg',
        'birthLocation': 'Livepool, England',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 1,
            'preimerLeague': 5,
            'englishLeagueCup': 4,
            'superLeague': 4,
            'englishSuperCup': 4,
            'faCup': 1
        },
        'wages': 200000,
        'goals': 366,
        'assists': 103,
        'marketvalue': 70000000
    },
    'didier drogba': {
        'club': 'Chelsea',
        'nationality': 'Ivory Coast',
        'position': 'Striker',
        'age': 44,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/3924-1524305788.jpg?lm=1',
        'birthLocation': 'Abidjan, Ivory Coast',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 1,
            'preimerLeague': 4,
            'englishLeagueCup': 3,
            'superLeague': 4,
            'englishSuperCup': 4,
            'faCup': 4
        },
        'wages': 210000,
        'goals': 201,
        'assists': 96,
        'marketvalue': 65000000
    },
    'luis suarez': {
        'club': 'Liverpool',
        'nationality': 'Uruguayian',
        'position': 'Striker',
        'age': 44,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/44352-1453896733.jpg?lm=1',
        'birthLocation': 'Salto, Uruguay',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 1,
            'preimerLeague': 0,
            'englishLeagueCup': 1,
            'superLeague': 0,
            'englishSuperCup': 0,
            'faCup': 0
        },
        'wages': 250000,
        'goals': 82,
        'assists': 46,
        'marketvalue': 60000000
    },
    'frank lampard': {
        'club': 'Chelsea',
        'nationality': 'English',
        'position': 'Center Midfield',
        'age': 43,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/3163-1464162968.jpg?lm=1',
        'birthLocation': 'London, England',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 1,
            'preimerLeague': 3,
            'englishLeagueCup': 2,
            'superLeague': 0,
            'englishSuperCup': 2,
            'faCup': 4
        },
        'wages': 300000,
        'goals': 177,
        'assists': 102,
        'marketvalue': 50000000
    },
    'fernando torres': {
        'club': 'Liverpool',
        'nationality': 'Spanish',
        'position': 'Striker',
        'age': 38,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/7767-1447152963.jpg?lm=1',
        'birthLocation': 'Fuenlabrada, Madrid',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 1,
            'preimerLeague': 0,
            'englishLeagueCup': 0,
            'superLeague': 0,
            'englishSuperCup': 0,
            'faCup': 1
        },
        'wages': 300000,
        'goals': 84,
        'assists': 39,
        'marketvalue': 80000000
    },
    'ryan giggs': {
        'club': 'Manchester United',
        'nationality': 'Welsh',
        'position': 'Winger',
        'age': 48,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/3406-1589198838.jpg?lm=1',
        'birthLocation': 'Cardiff, Wales',
        'dominantFoot': 'left',
        'trophies': {
            'championsLeague': 2,
            'preimerLeague': 13,
            'englishLeagueCup': 4,
            'superLeague': 9,
            'englishSuperCup': 1,
            'faCup': 4
        },
        'wages': 275000,
        'goals': 109,
        'assists': 164,
        'marketvalue': 70000000
    },
    'eric cantona': {
        'club': 'Manchester United',
        'nationality': 'French',
        'position': 'Striker',
        'age': 56,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/12000-1464096577.jpg?lm=1',
        'birthLocation': 'Marsielle, France',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 0,
            'preimerLeague': 5,
            'englishLeagueCup': 0,
            'superLeague': 0,
            'englishSuperCup': 6,
            'faCup': 2
        },
        'wages': 205000,
        'goals': 70,
        'assists': 55,
        'marketvalue': 50000000
    },
    'alan shearer': {
        'club': 'Newcastle',
        'nationality': 'Engish',
        'position': 'Striker',
        'age': 51,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/3110-1485180006.jpg?lm=1',
        'birthLocation': 'Newcastle upon Tyne, England',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 0,
            'preimerLeague': 1,
            'englishLeagueCup': 0,
            'superLeague': 0,
            'englishSuperCup': 0,
            'faCup': 0
        },
        'wages': 205000,
        'goals': 260,
        'assists': 65,
        'marketvalue': 60000000
    },
    'sergio aguero': {
        'club': 'Manchester City',
        'nationality': 'Argentinian',
        'position': 'Striker',
        'age': 34,
        'imgUrl': 'https://img.a.transfermarkt.technology/portrait/header/26399-1580460866.jpg?lm=1',
        'birthLocation': 'Quilmes, Argentina',
        'dominantFoot': 'right',
        'trophies': {
            'championsLeague': 0,
            'preimerLeague': 5,
            'englishLeagueCup': 6,
            'superLeague': 1,
            'englishSuperCup': 3,
            'faCup': 6
        },
        'wages': 305000,
        'goals': 184,
        'assists': 55,
        'marketvalue': 85000000
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}


app.listen(PORT, () => {
    console.log(`Port running on port: ${PORT}`)
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/:player', (req, res) => {
    const playerName = req.params.player.toLowerCase()

    if (players[playerName]) {
        res.json(players[playerName])
    } else {
        res.json(players['unknown'])
    }

})