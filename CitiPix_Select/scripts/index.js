//pseudo code
//add cities to drop down list
//select city
//display city image in background

$(document).ready(function(){
   cityType.on('change', background);
})

var cities = ['New York City', 'San Francisco', 'Los Angeles', 'Austin', 'Sydney', 'Atlanta', 'Chicago', 'Washington D.C.']

var cityType = $('#city-type');

for (var i = 0; i < cities.length; i++){
    cityType.append('<option id="cities">' + cities[i] + '</option>');
}

function background() {
     $('body').removeClass();
    event.preventDefault();
    console.log('event works?');
    if (cityType.val() === 'New York City'){
        $('body').addClass('nyc');
    }
    else if (cityType.val() === 'San Francisco'){
        $('body').addClass('sf');
    }
    else if (cityType.val() === 'Los Angeles'){
        $('body').addClass('la');
    }
     else if (cityType.val() === 'Austin'){
        $('body').addClass('austin');
    } 
    else if (cityType.val() === 'Sydney'){
        $('body').addClass('sydney');
    }
     else if (cityType.val() === 'Atlanta'){
        $('body').addClass('atl');
    }
    else if (cityType.val() === 'Chicago'){
        $('body').addClass('chi');
    }
    else if (cityType.val() === 'Washington D.C.'){
        $('body').addClass('dc');
    }
    else (alert('No City Selected'))
}

