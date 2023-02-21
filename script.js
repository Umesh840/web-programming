var x= document.getElementById("loc");  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
function getlocation() {  
    if(navigator.geolocation){  
        navigator.geolocation.getCurrentPosition(showPos)  
    }  
    else  
    {  
        alert("Sorry! your browser is not supporting")  
    }  
}  
function showPosition(position){  
             var x = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";  
             document.getElementById("loc").innerHTML = x;  
  }  

  function showPos(position){   
    latt = position.coords.latitude;   
    long = position.coords.longitude;   
    var lattlong = new google.maps.LatLng(latt, long);   
    var myOptions = {   
        center: lattlong,   
        zoom: 15,   
        mapTypeControl: true,   
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}   
    }   
    var maps = new google.maps.Map(document.getElementById("loc"), myOptions);   
    var markers =   new google.maps.Marker({position:lattlong, map:maps, title:"You are here!"});   
}   