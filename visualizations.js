
/*
 * PLOTTING
 *
*/

// function to create a plot that compares the ratings from the three diferent sources (imdb, rotten tomatoes and metacritic)
function trending() {
    
    // plot setup
        var trace_imdb = {
            x: titles,
            y: imdb_scores.map(function (x) {return x*10}),
            name: 'IMDB',
            type: 'bar',
            };
            
        var trace_rotten = {
            x: titles,
            y: rotten_scores,
            name: 'Rotten Tomatoes',
            type: 'bar'
        };
    
        var trace_meta = {
            x: titles,
            y: meta_scores,
            name: 'Metacritic',
            type: 'bar'
        };
    
        var data = [trace_imdb, trace_rotten, trace_meta];
    
    
        var layout = {
            barmode: 'group',
            title: 'Ratings by Website',
            height: 800,
            width: 1400,
            xaxis: {
            tickangle: -25
            },
            yaxis: {
                title: "Viewer Rating"
            },
            
        };
    
        // plot
        Plotly.newPlot('trending-graph', data, layout);
    
    }
// function to create the 3d scatter plot which compares all three factors of success
function threed_scatter() {
    var average_scores = []

    for (i = 0; i < ratings.length; i++) {
        average_scores.push(((imdb_scores[i] * 10) + rotten_scores[i] + meta_scores[i])/3)        
        }
    
    var trace1 = {
        x: average_scores, y: rois, z: number_awards,
        mode: 'markers',
        text: titles,
        marker: {
            size: 12,
            line: {
            color: 'black',
            width: 0.5
        },
        opacity: 0.8},
        type: 'scatter3d',
    };
    

    var layout = {
        scene:{
            xaxis: {
             backgroundcolor: "rgb(200, 200, 230)",
             gridcolor: "rgb(255, 255, 255)",
             showbackground: true,
             zerolinecolor: "rgb(255, 255, 255)",
             title: 'Viewer Rating'
            }, 
            yaxis: {
             backgroundcolor: "rgb(230, 200,230)",
             gridcolor: "rgb(255, 255, 255)",
             showbackground: true,
             zerolinecolor: "rgb(255, 255, 255)",
             title: 'Return on Investment',
             
            }, 
            zaxis: {
             backgroundcolor: "rgb(230, 230,200)",
             gridcolor: "rgb(255, 255, 255)",
             showbackground: true,
             zerolinecolor: "rgb(255, 255, 255)",
             title: 'Number of Awards and Nominations'
            }},
        height: 800,
        width: 1000,
        autosize: true,
        tickangle: -95,
        margin: {
            l: 0,
            r: 0,
            b: 50,
            t: 50,
            pad: 4
        },
    };

    Plotly.newPlot('ratings-graph', [trace1], layout);
}

// function to create a financial bubble chart 
function bubble() {
    var average_scores = []

    for (i = 0; i < ratings.length; i++) {
        average_scores.push(((imdb_scores[i] * 10) + rotten_scores[i] + meta_scores[i])/3)        
        }
    

    var trace1 = {
        x: budgets,
        y: revenues,
        text: titles,
        mode: 'markers',
        marker: {
          size: average_scores.map(function (x) {return x*0.4})
        }
      };
      
      var data = [trace1];
      
      var layout = {
        title: 'Revenue vs Budget \n Bubble Size = Average Viewer Rating',
        showlegend: false,
        height: 800,
        width: 1000,
        yaxis: {
            title: "Viewer Rating"
        },
        xaxis: {title: "Budget"},
        yaxis: {title: "Revenue"},
        backgroundcolor: "black"
      };
      
      Plotly.newPlot('financial-graph', data, layout);
}

// function created to clear all variables after page has loaded
function empty() {
    
movies_filtered.length = 0;

actors.length = 0;
awards.length = 0;

budgets.length = 0;
directors.length = 0;
 genres.length = 0
 months.length = 0
 ratings.length = 0
 releaseDates.length = 0
 revenues.length = 0
 rois.length = 0
 titles.length = 0
 years.length = 0

 imdb_scores.length = 0
 rotten_scores.length = 0
 meta_scores.length = 0

 number_awards.length = 0

};