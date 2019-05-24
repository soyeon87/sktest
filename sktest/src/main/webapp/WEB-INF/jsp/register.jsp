<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>니가 사는 그집 - 매물 등록</title>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript"
	src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ddyhcaahk1&submodules=geocoder"></script>

<style type="text/css">
html, body {
	width: 100%;
	height: 1300px;
	background-color: #f5f5f5;
	padding: 2% 5% 5% 2%;
	margin: 0;
	overflow: auto;
}
section {
	height:100%;
	width: 80%;
	background-color: white;
	border: 1px solid black;
	padding-left: 8%;
	padding-bottom: 3%;
	
	
}

button{
	clear:both;
	margin-left:0%;
	width:180px;
	height:50px;
	text-align:center;
	line-height:31px;
	background-color:#FF7F00;
	color:#FFFFFF;
	font-size:20px;
	font-weight:bold;
	font-family:tahoma;
}

#button_div{
  text-align: center;
  margin-right:8%; 
  padding-top:2%; 
  
}

</style>
<title>Insert title here</title>
<style>
/* UI Object */
.tbl_type, .tbl_type th, .tbl_type td {
	border: 0
}

.tbl_type {
	width: 90%;
	border-bottom: 2px solid #dcdcdc;
	font-family: '돋움', dotum;
	font-size: 12px;
	text-align: center;
	border-collapse: collapse
}

.tbl_type th {
	padding: 7px 0 4px;
	border-top: 2px solid #dcdcdc;
	/* 	border-right: 1px solid #dcdcdc;
	border-left: 1px solid #dcdcdc; */
	background-color: #f5f7f9;
	color: #666;
	font-family: '돋움', dotum;
	font-size: 12px;
	font-weight: bold
}

.tbl_type td {
	padding-left: 10px;
	border: 1px solid #e5e5e5;
	border-right: none;
	color: #4c4c4c;
	text-align: left;
}

/* //UI Object */
</style>
</head>
<body>
	<main>
	<section>
		<form>
			<!--ui object -->
			<h3>상세정보</h3>
			<table class="tbl_type" border="0.1" cellspacing="0">
				<tr>
					<th abbr=보증금 scope="col">보증금</th>
					<td><input class="login" type="text" id="deposit" name="deposit" /> 만원</td>
				</tr>
				<tr>
					<th abbr=월세 scope="col">월세</th>
					<td><input class="login" type="text" id="rent" name="rent" /> 만원</td>
				</tr>
				<tr>
					<th abbr=방구조 scope="col">방구조</th>
					<td><select id="room_type" name="room_type">
							<option value="원룸(오픈형)">원룸(오픈형)</option>
							<option value="원룸(분리형)">원룸(분리형)</option>
							<option value="원룸(복층형)">원룸(복층형)</option>
							<option value="투룸">투룸</option>
							<option value="쓰리룸+">쓰리룸+</option>
					</select></td>
				</tr>
				<tr>
					<th abbr=건물형태 scope="col">건물형태</th>
					<td><select id="building_type" name="building_type">
							<option value="다세대건물">다세대건물</option>
							<option value="빌라">빌라</option>
							<option value="오피스텔,도생">오피스텔,도생</option>
					</select></td>
				</tr>
				<tr>
					<th abbr=관리비 scope="col">관리비</th>
					<td><input class="login" type="text" name="manage" /> 만원
						/ <input type="checkbox" name="vehicle1" value="Bike">없음 <br>
						<div>
							<strong>관리비 포함 항목</strong> <input type="checkbox" name="manage1"
								value="Bike">전기세 <input type="checkbox" name="manage1"
								value="Bike">가스 <input type="checkbox" name="manage1"
								value="Bike">수도 <input type="checkbox" name="manage1"
								value="Bike">인터넷 <input type="checkbox" name="manage1"
								value="Bike">TV
						</div>
				</tr>
				<tr>
					<th abbr=크기 scope="col">크기</th>
					<td>전용면적 : <input class="login" type="text" id="room_size" name="room_size" />
						m^2
					</td>
				</tr>
				<tr>
					<th abbr=층수 scope="col">층수</th>
					<td>건물 층 수: <select id="floor" name="floor">
							<option value="1층">1층</option>
							<option value="2층">2층</option>
							<option value="3층">3층</option>
							<option value="4층">4층</option>
							<option value="5층">5층</option>
					</select> / 해당 층 : <select id="floor_all" name="floor_all">
							<option value="1층">1층</option>
							<option value="2층">2층</option>
							<option value="3층">3층</option>
							<option value="4층">4층</option>
							<option value="5층">5층</option>
					</select>
					</td>
				</tr>
				<tr>
					<th abbr=방향 scope="col">방향</th>
					<td><select id="compass" name="compass">
							<option value="1">동향</option>
							<option value="2">서향</option>
							<option value="3">남향</option>
							<option value="4">북향</option>
					</select></td>
				</tr>
				<tr>
					<th abbr=옵션 scope="col">옵션</th>
					<td><input type="checkbox" name="option" value="11">에어컨
						<input type="checkbox" name="option" value="12">냉장고 <input
						type="checkbox" name="option" value="1">세탁기 <input
						type="checkbox" name="option" value="2">가스레인지 <input
						type="checkbox" name="option" value="3">인덕션 <br> <input
						type="checkbox" name="option" value="4">전자레인지 <input
						type="checkbox" name="option" value="5">책상 <input
						type="checkbox" name="option" value="6">책장 <input
						type="checkbox" name="option" value="7">침대 <input
						type="checkbox" name="option" value="8">옷장 <br> <input
						type="checkbox" name="option" value="9">신발장 <input
						type="checkbox" name="option" value="10">싱크대</td>
				</tr>
				<tr>
					<th abbr=안전장치 scope="col">안전장치유무</th>
					<td><input
						type="checkbox" name="security" value="1">현관전자도어락 <input
						type="checkbox" name="security" value="2">경비원 <input
						type="checkbox" name="security" value="3">CCTV <input
						type="checkbox" name="security" value="4">방범창
				</tr>
				<tr>
					<th abbr=전세대출 scope="col">전세대출</th>
					<td><input type="radio" name="A" value="1" checked="checked" />
						가능 <input type="radio" name="A" value="2" /> 불가능 <input
						type="radio" name="A" value="3" /> 확인필요</td>
				</tr>
				<tr>
					<th abbr=반려동물 scope="col">반려동물</th>
					<td><input type="radio" name="B" value="1" checked="checked" />
						가능 <input type="radio" name="B" value="2" /> 불가능 <input
						type="radio" name="B" value="3" /> 고양이만 <input type="radio"
						name="B" value="4" /> 확인필요</td>
				</tr>
				<tr>
					<th abbr=주차 scope="col">주차</th>
					<td><input type="radio" name="C" value="1" checked="checked" />
						가능 <input type="radio" name="C" value="2" /> 없음</td>
				</tr>

				<tr>
					<th abbr=입주가능일 scope="col">입주가능일</th>
					<td><input class="login" type="text" name="student_id"
						style="text-align: center; width: 84%; height: 20px;"/></td>
				</tr>
				<tr>
					<th abbr=제목 scope="col">제목</th>
					<td><input class="login" type="text" name="title" id = "title"
						style="text-align: center; width: 84%; height: 20px;" /></td>
				</tr>
				<tr>
					<th abbr=상세설명 scope="col">상세설명</th>
					<td><textarea style="width: 84%;" name="content" cols="80" rows="10"
							placeholder="해당 방에 대한 특징과 소개를 최소 50자 이상 입력해야 합니다.
	방의 위치와 교통, 주변 편의시설, 방의 특징과 장점, 보안시설, 옵션, 주차, 전체적인
	방의 느낌 등을 작성해 주세요.
	
	다른 방에 대한 설명, 연락처, 홍보 메시지 등 해당 방과 관련없는 내용을 입력하거나
	해당 방에 대한 설명이 부적절할 경우 광고가 종료될 수 있습니다."></textarea></td>
				</tr>
				<tr>
					<th abbr=중개사메세지 scope="col">중개사에게 남기는 메세지</th>
					<td><textarea style="width: 84%;" name="content" cols="80" rows="5"
							placeholder="중개사에게만 보여 집니다. 상세한 조건 등 중개사에게 전달할 말을 적어 주세요."></textarea></td>
				</tr>
			</table>
			<!--//ui object -->
		</form>

		<h3>위치정보</h3>
		<table class="tbl_type" border="0.1" cellspacing="0">
			<form>
				<tr>
					<th abbr=위치 scope="col">위치</th>
					<td><input type="text" id="search" class="form-control"
						name="search" placeholder="검색" autocomplete=off> <input type="button"
						id="execute" class="form-control btn btn-default" value="위치 검색하기">
						<strong>건물위치를 직접 선택 해주세요!</strong>
					</td>
				</tr>
			</form>
		</table>
		<div id="map" style="width:90%; height:300px;"></div>
	</section>
	<div id="button_div"><button id="registerBtn">방내놓기</button></div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/Test/register.js" charset='utf-8'></script>        
                	
 </main>
</body>
</html>