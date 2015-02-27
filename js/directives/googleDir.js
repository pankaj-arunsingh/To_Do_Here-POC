'use strict';  

		App.directive('googlePlaces', function(){
                return {
                    restrict:'E',
                    replace:true,
                    // transclude:true,
                    scope: {location:'='},
		    
		    
                    template: '<input class="form-control" id="google_places_ac" name="google_places_ac" type="text" class="input-block-level"/>',
		    
                    link: function($scope, elm, attrs){
                        var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function() {
                            var place = autocomplete.getPlace();
                            $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
			
                            $scope.$apply();
			


			var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
var latlon =[
{
lat:place.geometry.location.lat(),
lon:place.geometry.location.lng()

}];
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
  var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng())
           
        });
      
        
       
        

        
    }  
    
    createMarker(latlon[0]);

                        });
                    }
                }
            });
