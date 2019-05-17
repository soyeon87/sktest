contextPath = "/sktest";

$(function() {
	var url =  contextPath + '/selectPositionData.do';
	$.ajax({
		type : "POST",
		data : data,
		url : url,
		contentType : "application/x-www-form-urlencoded",
		dataType : "json",
		success : function(d) {
			result = d.resultList;
			console.log(result);
			console.log(homeData.searchResult.homeData);
			homeData.searchResult.homeData = result;
			
			
			var map = new naver.maps.Map('map', {
				   	scaleControl: false,
					logoControl: false,
					mapDataControl: false,
					zoomControl: true,
				    center: new naver.maps.LatLng(37.5664749, 126.9778207),
				    zoom: 10,
				    mapTypeControl: true
			});
			naver.maps.Event.addListener(map, 'idle', function() {
			    updateMarkers(map, make);
			});

			//클러스터 기능 
			var markers = [],
			    data = homeData.searchResult.homeData;
			for (var i = 0, ii = data.length; i < ii; i++) {
			    var spot = data[i],
			        latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo),
			        marker = new naver.maps.Marker({
			            position: latlng,
			            draggable: true
			        });
			    markers.push(marker);
			}
			var htmlMarker1 = {
			        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(images/img/cluster-marker-1.png);background-size:contain;"></div>',
			        size: N.Size(40, 40),
			        anchor: N.Point(20, 20)
			    },
			    htmlMarker2 = {
			        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(images/img/cluster-marker-2.png);background-size:contain;"></div>',
			        size: N.Size(40, 40),
			        anchor: N.Point(20, 20)
			    },
			    htmlMarker3 = {
			        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(images/img/cluster-marker-3.png);background-size:contain;"></div>',
			        size: N.Size(40, 40),
			        anchor: N.Point(20, 20)
			    },
			    htmlMarker4 = {
			        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(images/img/cluster-marker-4.png);background-size:contain;"></div>',
			        size: N.Size(40, 40),
			        anchor: N.Point(20, 20)
			    },
			    htmlMarker5 = {
			        content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(images/img/cluster-marker-5.png);background-size:contain;"></div>',
			        size: N.Size(40, 40),
			        anchor: N.Point(20, 20)
			    };
			var markerClustering = new MarkerClustering({
			    minClusterSize: 2,
			    maxZoom: 8,
			    map: map,
			    markers: markers,
			    disableClickZoom: false,
			    gridSize: 120,
			    icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
			    indexGenerator: [10, 100, 200, 500, 1000],
			    stylingFunction: function(clusterMarker, count) {
			        $(clusterMarker.getElement()).find('div:first-child').text(count);
			    }
			});

			// 검색기능 
			var bounds = map.getBounds(),
			southWest = bounds.getSW(),
			northEast = bounds.getNE(),
			lngSpan = northEast.lng() - southWest.lng(),
			latSpan = northEast.lat() - southWest.lat();

		}
	});
});