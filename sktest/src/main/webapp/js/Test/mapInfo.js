var make =[];
var contentList = [];
var lati = [];
var longi = [];
var placeN = [];
var countL = [];


var map = new naver.maps.Map('map', {
	   	scaleControl: false,
		logoControl: false,
		mapDataControl: false,
		zoomControl: true,
	    center: new naver.maps.LatLng(37.566612, 126.97747),
	    zoom: 10,
	    mapTypeControl: true
});
naver.maps.Event.addListener(map, 'idle', function() {
    updateMarkers(map, make);
});

var bounds = map.getBounds(),
southWest = bounds.getSW(),
northEast = bounds.getNE(),
lngSpan = northEast.lng() - southWest.lng(),
latSpan = northEast.lat() - southWest.lat();




function updateMarkers(map, markers) {

    var mapBounds = map.getBounds();
    var marker, position;

    for (var i = 0; i < markers.length; i++) {

        marker = markers[i]
        position = marker.getCenter();
//        position = marker.getPosition();

        if (mapBounds.hasLatLng(position)) {
            showMarker(map, marker);
        } else {
            hideMarker(map, marker);
        }
        
    }

}

function showMarker(map, marker) {

    if (marker.getMap()) return;
    marker.setMap(map);
}



function clickHandler(seq) {
	return function(e) {
		var marker = make[seq], infoWindow = contentList[seq];

		if (infoWindow.getMap()) {
			
			infoWindow.close();
		} else {
			
			infoWindow.open(map, marker.getCenter());
		}
	}
}


function searchAddressToCoordinate(address) {
	
	naver.maps.Service
			.geocode(
					{
						address : address
					},
					
					function(status, response) {
						
						if (status === naver.maps.Service.Status.ERROR) {
							return alert('지도에 표시할 수 없습니다.');
						}

						var item = response.result.items[0], addrType = item.isRoadAddress ? '[도로명 주소]'
								: '[지번 주소]', point = new naver.maps.Point(
								item.point.x, item.point.y);
						var contentString = [
							'<div style="width:200px; padding:10px; line-height:150%;">',
							'<h5><b>'+response.result.userquery+'</b></h5>',
							'<p>'+addrType + ' ' + item.address+'</p>',
							'</div>'
							
						].join('');

						var infoWindow = new naver.maps.InfoWindow({
							anchorSkew: true,
							content : contentString
							
						});
						
						map.setCenter(point);
						infoWindow.open(map, point);
					});
}

function initGeocoder() {

	$('#search').on('keydown', function(e) {
		
		var keyCode = e.which;
		

		if (keyCode === 13) { // Enter Key
			e.preventDefault();
			searchAddressToCoordinate($('#search').val());
		}
	});

	$('#execute').on('click', function(e) {
		e.preventDefault();
		searchAddressToCoordinate($('#search').val());
		
	});
	
}
$(document).ready(function(){
	//getList();
	setInterval(resetData,1000);
});

naver.maps.onJSContentLoaded = initGeocoder;