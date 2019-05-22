var make =[];
var contentList = [];
var lati = [];
var longi = [];
var placeN = [];
var countL = [];

var homeData = {
	     "searchResult": {
	          "homeData": []
	         },
	       "resultCode": "Success"
	}

var map = new naver.maps.Map('map', {
	   	scaleControl: false,
		logoControl: false,
		mapDataControl: false,
		zoomControl: true,
		center: new naver.maps.LatLng(37.5657037, 126.9768616),
		minZoom : 1,
	    zoom: 10,
	    mapTypeControl: true
});


var infoWindows = []; // 마커 정보창 정보가 담길 배열 

//서버에서 받아온 정보 저장 - 건물 위치
var positionList = $("#positionList").val();
homeData.searchResult.homeData = JSON.parse(positionList);

//마커에 대한 설정 - 위치 및 정보창 
var markers = [],
    data = homeData.searchResult.homeData;
for (var i = 0, ii = data.length; i < ii; i++) {
    var spot = data[i],
        latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo),
        marker = new naver.maps.Marker({
            position: latlng
        });
    
    //각각의 마커정보 
    var infoWindow = new naver.maps.InfoWindow({
        content: '<div style="width:200px;text-align:center;padding:10px;">이름 : '
        	+spot.name+'<br>주소 : '+spot.address+'</div>'
    });

    markers.push(marker);
    infoWindows.push(infoWindow);
    
}

//클러스터링 설정
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
    minClusterSize: 1,
    maxZoom: 15,
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

updateMarkers(map, markers);

//상단 설정 정보 업데이트
naver.maps.Event.addListener(map, 'idle', function() {
    updateMarkers(map, markers);
});

function updateMarkers(map, markers) {
    var mapBounds = map.getBounds();
    var marker, position;

    var updateList = [];
    
    for (var i = 0; i < markers.length; i++) {
        marker = markers[i]
        position = marker.getPosition();
        
        if (mapBounds.hasLatLng(position)) {
        	//집 정보 불러와서 업데이트 목록
        	var temp = String(position.x);
        	var com1 = temp.split(".");
        	if(com1[1].length < 7){
        		for(var j = 0; j < (7 - com1[1].length) ; j++){
        			com1[1] += "0";
        		}
        	}
        	
        	var temp2 = String(position.y);
        	var com2 = temp2.split(".");
        	
        	if(com2[1].length < 7){
        		for(var j = 0; j < (7 - com2[1].length); j++){
        			com2[1] += "0";
        		}
        	}
        	
        	updateList.push(com2[0]+"."+com2[1]+com1[0]+"."+com1[1]);
        }
    }
    //매물 목록 불러오기 함수 실행
    getRoomList(updateList);
}

//해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환
function getClickHandler(seq) {
    return function(e) {
        var marker = markers[seq],
            infoWindow = infoWindows[seq];

        if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker);
        }
    }
}

for (var i=0, ii=markers.length; i<ii; i++) {
    naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
}

// 검색기능 
var bounds = map.getBounds(),
southWest = bounds.getSW(),
northEast = bounds.getNE(),
lngSpan = northEast.lng() - southWest.lng(),
latSpan = northEast.lat() - southWest.lat();

//검색 함수
//검색기능
function searchAddressToCoordinate(address) {
	
	naver.maps.Service.geocode(	
					{ address : address },
					function(status, response) {
						
						if (status === naver.maps.Service.Status.ERROR) {
							return alert('잘못된 검색어 입니다.');
						}
						//검색 반응 
						var find = response.result.userquery.replace(/ /gi,"");
						
						var location;
						var url =  contextPath + '/selectSubwayPosition.do';
						var data = {"value" : find};
						
						if (find.length <= 1) { // 잘못된 입력값일때 
							return alert('잘못된 검색어 입니다.');
						}
						
						$.ajax({
							type : "POST",
							data : data,
							url : url,
							contentType : "application/x-www-form-urlencoded",
							dataType : "json",
							success : function(d) {
								var result = d.resultList;
								
								var point;
								//var contentString; 
								var item;
								
								if(result.length > 0){
									
									 point = new naver.maps.Point(result[0].longitude,result[0].latitude);
						
									 /*contentString = [
										'<div style="width:200px; padding:10px; line-height:150%;">',
										'<h5><b>'+result[0].name+'</b></h5>',
										'</div>'
									 ].join('');*/
									
								}else{
									
									if (response.result.items.length === 0) { // 잘못된 입력값일때 
										return alert('잘못된 검색어 입니다.');
									}
									
									item = response.result.items[0];
									var addrType = item.isRoadAddress ? '[도로명 주소]': '[지번 주소]', 
										point = new naver.maps.Point(item.point.x, item.point.y);
									

									/*contentString = [
										'<div style="width:200px; padding:10px; line-height:150%;">',
										'<h5><b>'+response.result.userquery+'</b></h5>',
										'<p>'+addrType + ' ' + item.address+'</p>',
										'</div>'
										
									].join('');*/
									
								}
								
								/*var infoWindow = new naver.maps.InfoWindow({
									anchorSkew: true,
									content : contentString
								});*/
								
								map.setCenter(point);
								//infoWindow.open(map, point);
							}
						});				
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

naver.maps.onJSContentLoaded = initGeocoder;