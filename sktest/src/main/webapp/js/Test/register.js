contextPath = "/sktest";

var in_room_x;
var in_room_y;
var in_address = "";

var map = new naver.maps.Map('map', {
	zoom : 12,
	center : new naver.maps.LatLng(37.3614483, 127.1114883)
});

var infoWindow = new naver.maps.InfoWindow({
    anchorSkew: true
});

//@@@@@@ 마커 생성, 위치 반환 
var markerList = [];
var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');

map.getPanes().floatPane.appendChild(menuLayer[0]);

naver.maps.Event.addListener(map, 'click', function(e) {
	 
	var marker = new naver.maps.Marker({
		position : e.coord,
		map : map
	});
	if (markerList.length != 0) {
		for (var i = 0, ii = markerList.length; i < ii; i++) {
			markerList[i].setMap(null);
		}
	}
	in_room_x = marker.position.x;
	in_room_y = marker.position.y;
	
	markerList.push(marker);
});


function searchAddressToCoordinate(address) {

	naver.maps.Service.geocode(
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

						var infoWindow = new naver.maps.InfoWindow({
							anchorSkew : true,
						});
						map.setCenter(point);
					});
}
function searchCoordinateToAddress(latlng) {

    infoWindow.close();

    naver.maps.Service.reverseGeocode({
        coords: latlng,
        orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR
        ].join(',')
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        var items = response.v2.results,
            address = '',
            htmlAddresses = [];

        for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
            item = items[i];
            address = makeAddress(item) || '';
            addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

            htmlAddresses.push(addrType +' '+ address);
            if(i==0){
            	in_address = address;
            }
        }
        
        infoWindow.setContent([
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            htmlAddresses.join('<br />'),
            '</div>'
        ].join('\n'));

        infoWindow.open(map, latlng);
    });
}


function initGeocoder() {
	map.addListener('click', function(e) {
        searchCoordinateToAddress(e.coord);
    });

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

function makeAddress(item) {
    if (!item) {
        return;
    }

    var name = item.name,
        region = item.region,
        land = item.land,
        isRoadAddress = name === 'roadaddr';

    var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

    if (hasArea(region.area1)) {
        sido = region.area1.name;
    }

    if (hasArea(region.area2)) {
        sigugun = region.area2.name;
    }

    if (hasArea(region.area3)) {
        dongmyun = region.area3.name;
    }

    if (hasArea(region.area4)) {
        ri = region.area4.name;
    }

    if (land) {
        if (hasData(land.number1)) {
            if (hasData(land.type) && land.type === '2') {
                rest += '산';
            }

            rest += land.number1;

            if (hasData(land.number2)) {
                rest += ('-' + land.number2);
            }
        }

        if (isRoadAddress === true) {
            if (checkLastString(dongmyun, '면')) {
                ri = land.name;
            } else {
                dongmyun = land.name;
                ri = '';
            }

            if (hasAddition(land.addition0)) {
                rest += ' ' + land.addition0.value;
            }
        }
    }

    return [sido, sigugun, dongmyun, ri, rest].join(' ');
}

function hasArea(area) {
    return !!(area && area.name && area.name !== '');
}

function hasData(data) {
    return !!(data && data !== '');
}

function checkLastString (word, lastString) {
    return new RegExp(lastString + '$').test(word);
}

function hasAddition (addition) {
    return !!(addition && addition.value);
}

naver.maps.onJSContentLoaded = initGeocoder;


$(function() {

	$("#registerBtn").click(function() {
		//$(test1).prop("checked");
		var security = ["0","0","0","0"];
		var items = [];
		$('input:checkbox[name=security]:checked').each(function () {
		    items.push($(this).val());
		});
		
		for(var i = 0; i < security.length; i++){
			if(items.indexOf(String(i+1)) != -1){
				security[i] = "1";
			}
		}
		
		var building_type = $("#building_type option:selected").val();
		var deposit = parseInt($("#deposit").val());
		var rent = parseInt($("#rent").val());
		var floor = $("#floor option:selected").val(); 
		var floor_all = $("#floor_all option:selected").val();
		var image = "https://imgur.com/4awgNgk.png";
		var room_type = $("#room_type option:selected").val();
		var title = $("#title").val();
		
		var temp = String(in_room_x);
    	var com1 = temp.split(".");
    	if(com1[1].length < 7){
    		for(var k = com1[1].length+1 ; k <= 7 ; k++){
    			com1[1] += "0";
    		}
    	}
    	
    	var temp2 = String(in_room_y);
    	var com2 = temp2.split(".");
    	
    	if(com2[1].length < 7){
    		for(var k = com2[1].length+1 ; k <= 7 ; k++){
    			com2[1] += "0";
    		}
    	}
    	var loc = com1[0]+"."+com1[1]+com2[0]+"."+com2[1];
		
		var dataList = {"x" : in_room_x, "y": in_room_y, "address": in_address, "doorlock":security[0],
				"security": security[1], "cctv":security[2], "window_guard":security[3], "building_type":building_type,
				"deposit":deposit, "rent":rent, "floor":floor, "floor_all":floor_all, "image":image,
				"room_type": room_type, "title":title, "location":loc};
		
		console.log(dataList);
		
		//ajax 데이터 전달
		var url =  contextPath + '/insertRoom.do';
		$.ajax({
			type : "POST",
			url : url,
			data : dataList,
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(d) {
				result = d;
				alert("등록이 완료되었습니다.");
				self.close();
			}
		});

		
		
	});
});