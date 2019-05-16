


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ddyhcaahk1&submodules=geocoder"></script>
<script src="http://code.jquery.com/jquery-3.1.0.js"></script>
<title>::여성 안심 거주 플랫폼</title>
    <title>여성 안심 거주 플랫폼::</title>

    <style>
      @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
         * { margin: 0; padding: 0; font-family:'Jeju Gothic',Tahoma,Helvetica,sans-serif;}
        li { list-style: none; }
        a { text-decoration: none; color:#353535;}
        img { border: 0; }
    </style>

   <!-- 메인 -->
   <style>
   .footer{
            width: 1200px; margin: 0 auto;
            height: 50px;
            position: relative;
            text-align: center;
            padding-top: 10px;
        }
        
         main{
            width: 1349px; 
            margin: 0 auto;
            position : relative;
         }
   </style>
   
<!-- 헤더 -->
    <style>
        header {
            /* 중앙 정렬*/
            width: 1200px; 
            margin: 0 auto;

            /* 절대 좌표 */
            height: 100px;
            position: relative;
        }
        header>a {
            position: absolute;
            left: 30px; top: 30px;
        }
        header > #firstNav {
            position: absolute;
            right: 0; top: 5px;
        }
        header > #secondNav {
            position: absolute;
            right: 0; bottom: 10px;
        }
    </style>
    
    
<!-- 헤더 > 로고 -->
   <style>
   /*
   <!-- <img alt="이미지가없어요" src="img/logo.png" width = "350" height = "200";
      style="position: absolute;" onclick = "location.href = 'main.html'"> -->
   */
      .logo {
      float: left;
      width: 489px;
      height: 95px;
      margin: 10px 0 0 0;
      background: url('images/img/logo.png'); no-repeat;
       text-indent: -9999px;
       position : absolute;
       left : 40px;
       top : 10px;
       overflow: hidden;
       }
   </style>    
   
   
	<style>
	/*
	<!-- <img alt="이미지가없어요" src="img/logo.png" width = "350" height = "200";
		style="position: absolute;" onclick = "location.href = 'main.html'"> -->
	*/
		.logo {
		float: left;
		width: 489px;
		height: 95px;
		margin: 10px 0 0 0;
		background: url('images/img/logo.png'); no-repeat;
	 	text-indent: -9999px;
	 	position : absolute;
	 	left : 40px;
	 	top : 10px;
 		overflow: hidden;
 		}
	</style>    
	
	
<!-- 헤더 > 메뉴(1) -->
    <style>
        #firstNav > ul { overflow: hidden; } 
        #firstNav > ul > li { float: left; } 
        #firstNav > ul > li > a {
            display: block;
            padding: 2px 10px;
            border-left: 2px solid #dfdfdf;
         font-size:110%;
        }
        #firstNav > ul > li > a:hover {
            background: #dfdfdf;
            color: white;
        }
      #firstNav > ul > li:last-child > a { border-right: 2px solid #dfdfdf; }
    </style>
    
    
<!-- 헤더 > 메뉴(2) -->
    <style>
        #secondNav > ul { overflow: hidden; }
        #secondNav > ul > li { float: left; }
        #secondNav > ul > li > a {
            display: block;
            padding: 5px 20px;
            border-left: 3px solid #dfdfdf;
         font-size:100%;
        }
        #secondNav > ul > li > a:hover {
            background: #dfdfdf;
            color: white;
        }
        #secondNav > ul > li:last-child > a { border-right: 3px solid #dfdfdf; }
    </style>
<!-- 메인  -->
<!-- 메인>메뉴 -->

    <style>
       .main{
         width:1200px; margin: 0 auto;
         position: relative;
      } 
    </style>

<!-- 푸터 -->
   <style>
      footer{
            width: 1200px; margin: 0 auto;
            height: 50px;
            position: relative;
        }
        footer>#footerNav{
            position: absolute;
            left: 0; bottom: 10px;
        }
        footer > p {
            position: absolute;
            right: 0; bottom: 10px;
        }
   </style>
<!-- 푸터 > 메뉴 -->
    <style>
        #footerNav > ul { overflow: hidden; } 
        #footerNav > ul > li { float: left; } 
        #footerNav > ul > li > a {
            display: block;
            padding: 2px 10px;
            border-left: 2px solid #dfdfdf;
         font-size:100%;
        }
      #firstNav > ul > li:last-child > a { border-right: 2px solid #dfdfdf; }
    </style>
</head>
<body>
   
   <header>
      <!-- <img alt="이미지가없어요" src="img/logo.png" width = "350" height = "200";
      style="position: absolute;" onclick = "location.href = 'main.html'"> -->
      <a href= "main.html" class="logo">Logo</a>
      
      
      <nav id="firstNav">
         <ul>
         </ul>
      </nav>
      <nav id="secondNav">
         <ul>
            <li><a href="Home.html">홈으로</a>
            <li><a href="dlstk.html">인사말</a>
            <li><a href="dhtl.html">오시는 길</a></li>
            <li><a href="emdfhr.html">등록절차</a></li>
            <li><a href="rkdlq.html">가입안내</a></li>
            <li><a href="mail.jsp">문의하기</a></li>
         </ul>
      </nav>
   </header>
   <br/>
   <br/>
   
   <div class = "main" style = "background-image: url('images/img/back.png'); width: 1349px; height: 500px;">
      <div class = "main" style = "background-image: url('images/img/Bridge.png'); width: 1300px; height: 500px;">
         <div style="width:900px">
            <div style="font-size:100%;color:#FFE400; position : relative; top : 25px; left : 285px;">서울특별시 종로구 종로 47 (공평동 100) SC제일은행본점빌딩 7층 :: 
               <br/> 여성 안심 거주 지향 남성연대 대표 김규서 ::
            </div>
            <div style = "position: relative; top : 55px; left : 290px;">

                <!--지도 자리-->    
                <div class="container-fluid">
                        <div class="col-md-3" id="placeDiv">
                            <form>
                                <div class="form-inline">
                                    
                                    <input type="text" id="search" class="form-control" name="search"
                                        placeholder="검색">
                                    <input type="button" id="execute"
                                        class="form-control btn btn-default" value="확인">
                                
                                </div>
                            </form>
                        </div>
                        <div class="col-md-9">
                            <div id="map" style="width:80%;height:300px;"></div>
                        </div>
                </div>
                <script type="text/javascript" src="${pageContext.request.contextPath}/js/Test/mapInfo.js"></script>        
                <!---->
            </div>
         </div>
      </div>
   </div>
   <div style = "background-image: ../img/back.png">
   </div>
   
   <br/>
   <br/>
   
   <div align = "center" class="footer">
   상호 : <font color="orange"><b>여성 안심 거주 플랫폼</b></font> 대표자 : <font color = "orange"><b>김규서</b></font> 사업자 등록번호 : <font color = "orange"><b>119-18-72711</b></font> <br/>
   부동산업 신고번호 : <font color = "orange"><b>정자동140003</b></font> 인·허가 보증보험 증권번호 : <font color = "orange"><b>100-000-201403631618</b></font> <br/> 이메일 : <font color="orange"><b>Sea31230@naver.com</b></font> 전화 : <font color="orange"><b>02-554-8763</b></font> 핸드폰 : <font color="orange"><b>010-4447-7540</b></font>
   </div>

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="js/jquery.slides.min.js"></script>
   

</body>
</html>