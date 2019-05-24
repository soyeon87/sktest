contextPath = "/sktest";

var markerList = [];

var check = 1;
var cadastralLayer = new naver.maps.CadastralLayer();
var sdataList = [];
var sdata = [];
var heatmap;

$(function() {

	$("#regi").click(function() {
		var url =  contextPath + '/register.do';
		window.open(url, "_blank"); 
	});
		
	$("#preferBtn").click(function() {
		if ($("#preferBtn")[0].value == "추천 OFF") {
			$("#preferBtn")[0].value = "추천 ON";
			
			var url =  contextPath + '/selectPreferPositionData.do';
			
			$.ajax({
				type : "POST",
				url : url,
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(d) {
					result = d.resultList;
					console.log(result);
					//지도 리셋하고 추가하는법
				}
			});
		
		}else if ($("#preferBtn")[0].value == "추천 ON") {
			$("#preferBtn")[0].value ="추천 OFF";
			
		}		
	});
	
	$("#weightBtn").click(function() {
		if ($("#weightBtn")[0].value == "가중치 OFF") {
			$("#weightBtn")[0].value = "가중치 ON";
			//console.log("켜기!!!"+ check);
		    check = 0 ;
		   
		    var url =  contextPath + '/selectWeightList.do';
			$.ajax({
				type : "POST",
				url : url,
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(d) {
					result = d.resultList;
					//console.log(result);
					
					sdataList = []; //데이터 넣기
				    for(var j = 0; j < result.length; j++){
				    	sdataList.push({"weight":result[j].dong_score, 
				    		"location": new naver.maps.LatLng(parseFloat(result[j].grd_la), parseFloat(result[j].grd_lo))});
					}
					
				    console.log(sdataList);
				
				    heatmap = new naver.maps.visualization.HeatMap({
						map: map,
						data: sdataList,
						opacity: 0.7,
						radius: 50,
						colorMap: 'COOL'
					});
				}
			});  	    
		}else if ($("#weightBtn")[0].value == "가중치 ON") {
			$("#weightBtn")[0].value ="가중치 OFF";
		    //console.log("끄기!!!" + check);
	        check = 1;
	        heatmap.setMap(null);
	    
		}

	});


});

function getRoomList(updateList){
	
	$("#roomList").html("");
	
	if(updateList.length ==0){
		var str = '<div style = "height : 14px;"></div>';
		str += '<p>  해당 매물이 존재하지 않습니다.  </p>';
		$("#roomList").html(str);
		return;
	}
	
	var url =  contextPath + '/selectRoomData.do';
	var data = {"update":updateList};
	
	jQuery.ajaxSettings.traditional = true;

	$.ajax({
		type : "POST",
		data : data,
		url : url,
		contentType : "application/x-www-form-urlencoded",
		dataType : "json",
		success : function(d) {
			result = d.resultList;
			//console.log(result);
			
			var str = "";
			str += '<div style = "height : 14px;"></div>';
			
			var mark = "";
			
			for(var i = 0; i < result.length; i++){
				if(result[i].grade <= 2){
					mark = '<img src="images/img/logo_final.png" width = "50px" height = "30px" style = "float: right;"></img>';
				}else{
					mark = "";
				}
		
				if(result[i].rent == 0){
					str += '<div class= "roomModel" style = "background-color : #FFFFF8; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">'+
                    '<input type="hidden" class="loc" value="'+result[i].grd_lo+'_'+result[i].grd_la+'">'+
                    '<input type="hidden" class="num" value="'+result[i].num+'">'+
					'<img src="'+result[i].image+'" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>'+
                    //'<div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">월세 150/22</div>'+
					'<div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">보증금/전세 : '+result[i].deposit+'만원'+mark+'</div>'+
					'<div style="color : gray; margin : 0 0 3px 0">'+result[i].address+'</div>'+
                    //'<div style="color : black">집 설명</div></div>';
                    '<div style="color : black">'+result[i].title+'</div></div>';
				}else{
					str += '<div class= "roomModel" style = "background-color : #FFFFF8; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">'+
                    '<input type="hidden" class="loc" value="'+result[i].grd_lo+'_'+result[i].grd_la+'">'+
                    '<input type="hidden" class="num" value="'+result[i].num+'">'+
                    '<img src="'+result[i].image+'" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>'+
                    //'<div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">월세 150/22</div>'+
					'<div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">보증금/월세 : '+result[i].deposit+'/'+result[i].rent+'만원'+mark+'</div>'+
					'<div style="color : gray; margin : 0 0 3px 0">'+result[i].address+'</div>'+
                    //'<div style="color : black">집 설명</div></div>';
                    '<div style="color : black">'+result[i].title+'</div></div>';
			
				}
			}
			
			$("#roomList").html(str);
					
			//룸 hover할떄 마다 마커에 정보 보여주기 
			$('.roomModel').mouseenter(function(event){
				//console.log($(event.target).children(".loc"));
				var tem =  $(event.target).children(".loc")[0].value;
				var loc = tem.split("_");
				var poi = new naver.maps.Point(loc[0],loc[1]);
				
				var index = markerList.indexOf(tem);
				if(index != -1){
					infoWindow = infoWindows[index];
					infoWindow.open(map, poi);
				}
			});
		}
	});	
}
