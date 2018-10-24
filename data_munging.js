ar movies_filtered = [];

var actors = []
var awards = []
var budgets = []
var directors = []
var genres = []
var months = []
var ratings = []
var releaseDates = []
var revenues = []
var rois = []
var titles = []
var years = []

var imdb_scores = []
var rotten_scores = []
var meta_scores = []

var number_awards = []

// create list of filtered movie objects
function filter() {
    movies_filtered = [];
    movies_filtered.push(movies.filter(movies => movies.year.includes(selectedYear) && movies.actor.includes(selectedActor) && movies.month.includes(selectedMonth) && movies.genre.includes(selectedGenre) && movies.director.includes(selectedDirector)))
}

// grab individual aspects of each movie and push into lists 
function format() {
    for (let i = 0; i < movies_filtered[0].length; i++) {
        actors.push(movies_filtered[0][i].actor)
        awards.push(movies_filtered[0][i].awards)
        budgets.push(movies_filtered[0][i].budget)
        directors.push(movies_filtered[0][i].director)
        genres.push(movies_filtered[0][i].genre)
        months.push(movies_filtered[0][i].month)
        ratings.push(movies_filtered[0][i].ratings)
        releaseDates.push(movies_filtered[0][i].releaseDate)
        revenues.push(movies_filtered[0][i].revenue)
        rois.push(movies_filtered[0][i].roi)
        titles.push(movies_filtered[0][i].title)
        years.push(movies_filtered[0][i].year)
    };
}

// separate imdb, rotten tomato and metacritic ratings into individual lists
function separate_ratings() {
    
    for (i = 0; i < ratings.length; i++) {
        if (ratings[i][0].Value && ratings[i][1] && ratings[i][2]){
            imdb_scores.push(parseFloat(ratings[i][0].Value))
            rotten_scores.push(parseFloat(ratings[i][1].Value))
            meta_scores.push(parseFloat(ratings[i][2].Value))
        }
        else if (ratings[i].length < 3) { 
            imdb_scores.push(0)
            rotten_scores.push(0)
            meta_scores.push(0)
            console.log("UNDEFINED")
        }
    
        
    }
}

// from a string containing number of awards and nominations, sum them together to get a single value for "awards and nominations"
function extract_awards() {
    for (var i = 0; i < awards.length; i++) {
        var numbers = []
        var numbers = awards[i].match(/\d+/g).map(Number)
        var sum = 0
        for (var j = 0; j <numbers.length; j++) {
        sum += numbers[j]
        } 
            number_awards.push(sum)
        };
}