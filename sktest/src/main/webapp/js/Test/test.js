contextPath = "/sktest";

$(function() {

	
	//지도 내용 가져와서 표시하기
	/*var url =  contextPath + '/selectPositionData.do';
	$.ajax({
		type : "POST",
		//data : data,
		url : url,
		contentType : "application/x-www-form-urlencoded",
		dataType : "json",
		success : function(d) {
			result = d.resultList;
			//console.log(result);
			//console.log(homeData.searchResult.homeData);
			homeData.searchResult.homeData = result;

						
		}
	});
*/	
	
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
			console.log(result);
			
			var str = "";
			str += '<div style = "height : 14px;"></div>';
			
			for(var i = 0; i < result.length; i++){
				str += '<div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">'+
                    '<input type="hidden" class="loc" value="'+result[i].grd_la+'_'+result[i].grd_lo+'">'+
					'<img src="'+result[i].image+'" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>'+
                    '<div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">월세 150/22</div>'+
                    '<div style="color : gray; margin : 0 0 3px 0">'+result[i].address+'</div>'+
                    '<div style="color : black">집 설명</div></div>';
			}
			
			$("#roomList").html(str);
			
			$('.roomModel').mouseenter(function(event){
				console.log($(event.target).children(".loc")[0].value);
				var tem =  $(event.target).children(".loc")[0].value;
				var loc = tem.split("_");
				var poi = new naver.maps.Point(loc[1],loc[0]);
				infoWindow.open(map, poi);
				/*var mark = new naver.maps.Marker({
		            position: poi
		        });
				naver.maps.Event.trigger(mark, 'click'); 
				*/
				
			});
			
		}
	});	
}
