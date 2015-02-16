var var_map;
var var_location = new google.maps.LatLng(9.9492747, -84.0512574,15);
	
     function map_init() {		 	
			
            var var_mapoptions = {
              center: var_location,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
            };
            var_map = new google.maps.Map(document.getElementById("map-container"),
                var_mapoptions);
      
          var contentString = 
				'<div id="mapInfo">'+
				'<p><strong>Bneinoaj Costa Rica</strong><br><br>'+
				'Guadalupe centro<br>' +
				'San Jose<br>Costa Rica<br>'+
				'Tel&eacute;fono: (+506) 8338 - 0084</p>'+
				'<a href="https://www.youtube.com/user/OR7Noajidas" target="_blank">Visite nuestro canal de youtube</a> <br>'+
              '<a href="https://www.facebook.com/Jabadnik?fref=ts" target="_blank">Visitenos en Facebook</a>'+
				'</div>';
 
          var var_infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          
          var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Click for information about the Guggenheim museum in Venice",
                  maxWidth: 200,
                  maxHeight: 200
          });
 
          google.maps.event.addListener(var_marker, 'click', function() {
             var_infowindow.open(var_map,var_marker);
          });
      }
 
          google.maps.event.addDomListener(window, 'load', map_init);
      
      //start of modal google map
      $('#contactenosModal').on('shown.bs.modal', function () {
          google.maps.event.trigger(var_map, "resize");
          var_map.setCenter(var_location);
      });