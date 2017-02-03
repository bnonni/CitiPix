$(document).ready(function(){
  $('form').submit(background);
  $('#city-type').focus();
})

var cities = [{
    'class' : 'nyc',
    'names' : ['NEW YORK', 'NY', 'NYC', 'NEW YORK CITY']
},{
    'class' : 'sf',
    'names' : ['SAN FRANCISCO', 'SAN FRAN', 'SF', 'BAY AREA']
},{
    'class' : 'la',
    'names' : ['LA', 'LOS ANGELES', 'LAX', 'LOS ANGELES, CA', ]
},{
    'class' : 'austin',
    'names' : ['AUSTIN', 'AUS', 'ATX', 'AUSTIN,TX', 'AUSTIN, TEXAS']
},{
    'class' : 'sydney',
    'names' : ['SYDNEY', 'SYDNEY, AUS', 'SYDNEY, AUSTRALIA', 'SYD', 'SYD, AUS']
},{
    'class' : 'atl',
    'names' : ['ATL', 'ATLANTA', 'ATLANTA, GA', 'ATLANTA, GEORGIA', 'ATL, GA']
}]

function background() {
    $('body').removeClass();
    event.preventDefault();
    var CityType = $('#city-type').val().toUpperCase();

    for(var i = 0; i < cities.length; i++){
        if ($.inArray(CityType, cities[i].names) !== -1){
            $('body').addClass(cities[i].class);
        }
    }
    $('#city-type').val('');
}
