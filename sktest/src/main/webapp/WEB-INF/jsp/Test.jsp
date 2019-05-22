<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap-3.3.2-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap-3.3.2-dist/css/bootstrap-theme.min.css">

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ddyhcaahk1&submodules=geocoder"></script>
<script src="http://code.jquery.com/jquery-3.1.0.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap-3.3.2-dist/js/bootstrap.min.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/Test/test.js" charset='utf-8'></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/Test/MarkerClustering.js"></script>

<title>::���� �Ƚ� ���� �÷���</title>
    <title>���� �Ƚ� ���� �÷���::</title>

    <style>
      @import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
      @import url('https://fonts.googleapis.com/css?family=Jua&subset=korean');
      * { margin: 0; padding: 0; font-family:'Jeju Gothic',Tahoma,Helvetica,sans-serif;}
      li { list-style: none; }
      a { text-decoration: none; color:#353535;}
      img { border: 0; }
    </style>

   <style>
   .footer{
            width: 100%; margin: 0 auto;
            position: relative;
            text-align: center;
            background-color : #FFFFF8;
        }
        
         main{
            width: 100% 
            margin: 0 auto;
            position : relative;
         }
   </style>
   
<!-- ��� -->
    <style>
        header {
            /* �߾� ����*/
            width: 100% 
            margin: 0 auto;
         background-color : #FFFFF8;
            /* ���� ��ǥ */
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
            right: 200px; bottom: 10px;
        }
    </style>
    
    
<!-- ��� > �ΰ� -->
   
   <style>
      .logo {
         float: left;
         width: 55px;
         height: 56px;
         margin: 0 0 0 190px;
         background: url('images/img/logo_s.png'); no-repeat;
          text-indent: -9999px;
          position : absolute;
          left : 40px;
          overflow: hidden;
       }
       
       .addpadding{
          padding : 0 1% 0 5%;
       }
       
       .container-fluid{
          width:80%;
       }
       
       .logo_text{
          float: left;
         width: 220px;
         height: 120px;
         margin: 20px 0 0 240px;
          position : absolute;
          left : 40px;
          
          overflow: hidden;
          font-size : 1.3em;
       }
       
       .container-fluid{
          width : 100%;
          /* height : 600px; */
       }
   </style>    

<!-- ��� > �޴�(1) -->
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
    
<!-- ��� > �޴�(2) -->
    <style>
        #secondNav > ul { overflow: hidden; }
        #secondNav > ul > li { float: left; }
        #secondNav > ul > li > a {
            display: block;
            padding: 10px 40px;
            border-left: 3px solid #dfdfdf;
            font-size:100%;
        }
        #secondNav > ul > li > a:hover {
            background: #dfdfdf;
            color: white;
        }
        #secondNav > ul > li:last-child > a { border-right: 3px solid #dfdfdf; }
    </style>
<!-- ����  -->
<!-- ����>�޴� -->

    <style>
       .main{
         width:100%; margin: 0 auto;
         position: relative;
      }
    </style>

<!-- Ǫ�� -->
   <style>
         footer{
            width: 100%; margin: 0 auto;
            height: 100%;
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
   
<!-- Ǫ�� > �޴� -->
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
<body style = "background-color : #FFFFFF">
   
   <input type="hidden" id="positionList" value='${resultList}'/>
   
   <header style = "position : relative">
      <a href= "main.html" class="logo">Logo</a>
      <a class="logo_text">&nbsp;&nbsp;���� �Ƚ� <br/>���� �÷���</a>
      
      <nav id="firstNav">
         <ul>
         </ul>
      </nav>
      <nav id="secondNav">
         <ul>
            <li><a href="Home.html">Ȩ����</a>
            <li><a href="dlstk.html">�λ縻</a>
            <li><a href="dhtl.html">���ô� ��</a></li>
            <li><a href="emdfhr.html">�������</a></li>
            <li><a href="rkdlq.html">���Ծȳ�</a></li>
            <li><a href="mail.jsp">�����ϱ�</a></li>
         </ul>
      </nav>
   </header>
   
   <div class = "main" style = "background-color : #FFF7D4; height: 560px;">
   <!-- <div class = "main" style = "background-image: url('images/img/Bridge.png'); width: 1300px; height: 500px;"> -->
         <!-- <div style="width:100%">  -->
            <div>
                <!--���� �ڸ�-->    
                <div class="container-fluid" id="placeDiv" style = "width : 80%">
                        
                        <div class="col-md-7">
                               <div id="map" style="width:100%; height:500px; margin:20px 0 0 0px; padding: 0px 20px 0px 20px;"></div>
                        </div>
                        <br/>
                        <div class="col-md-5" id="placeDiv">
                           <form>
                                <div class="form-inline">
                                    <input type="text" id="search" style = "margin : 0 0 0 3%;" class="form-control" name="search"
                                        placeholder="���ϴ� ������, ����ö���� �Է����ּ���." autocomplete=off/>
                                    <input type="button" id="execute"
                                        class="form-control btn btn-default" value="Ȯ��"/>
                                   	<div class="btn-group" role="group" aria-label="..." style="float:left">
                                		<button type="button" class="btn btn-default">��õOn</button>
                               			<button type="button" class="btn btn-default">��õOff</button>
                           			</div>        
                                </div>
                               <div style = "margin:0 0 3px 0;">
                               </div>
                     		</form>
                       	<div id="roomList" style = "overflow:auto; border: 1.5px solid #660033; height : 467px;">
                             <div style = "height : 14px;"></div>
                            
                            <div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">
                              <img src="images/img/room1.jpg" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>
                              <div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">���� 150/22</div>
                              <div style="color : gray; margin : 0 0 3px 0">��⵵ ȭ���� �汳�� ����</div>
                              <div style="color : black">�������� ������ ���� ��������, �����ڱݡ��������������������</div>
                           </div>
                           
                            <div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">
                              <img src="images/img/room2.jpg" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>
                              <div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">���� 150/22</div>
                              <div style="color : gray; margin : 0 0 3px 0">��⵵ ȭ���� �汳�� ����</div>
                              <div style="color : black">�������� ������ ���� ��������, �����ڱݡ��������������������</div>
                           </div>
                           
                            <div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">
                              <img src="images/img/room3.jpg" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>
                              <div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">���� 150/22</div>
                              <div style="color : gray; margin : 0 0 3px 0">��⵵ ȭ���� �汳�� ����</div>
                              <div style="color : black">�������� ������ ���� ��������, �����ڱݡ��������������������</div>
                           </div>
                           
                            <div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">
                              <img src="images/img/room4.png" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>
                              <div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">���� 150/22</div>
                              <div style="color : gray; margin : 0 0 3px 0">��⵵ ȭ���� �汳�� ����</div>
                              <div style="color : black">�������� ������ ���� ��������, �����ڱݡ��������������������</div>
                           </div>
                           
                            <div class= "roomModel" style = "background-color : #E6FFFF; width : 100%; height : 120px; padding : 10px 10px 10px 7px; margin : 0 0 15px 0;">
                              <img src="images/img/room5.jpg" width = "100px" height = "100px" style = "float: left; margin : 0 10px 0 3px;" ></img>
                              <div style="color : black; font-size : 1.5em; font-weight:bold; margin : 0 0 3px 0">���� 150/22</div>
                              <div style="color : gray; margin : 0 0 3px 0">��⵵ ȭ���� �汳�� ����</div>
                              <div style="color : black">�������� ������ ���� ��������, �����ڱݡ��������������������</div>
                           </div>
                           
                        </div>
                        </div>
                </div>
                
                <script type="text/javascript" src="${pageContext.request.contextPath}/js/Test/mapInfo.js" charset='utf-8'></script>        
                <!---->
            </div>
           
         <!-- </div>  -->
      <!-- </div>  -->
   </div>
   
   <div align = "center" class="footer">
   <br/>
   ��ȣ : <font color="orange"><b>���� �Ƚ� ���� �÷���</b></font> ��ǥ�� : <font color = "orange"><b>��Լ�</b></font> ����� ��Ϲ�ȣ : <font color = "orange"><b>119-18-72711</b></font> <br/>
   �ε���� �Ű��ȣ : <font color = "orange"><b>���ڵ�140003</b></font> �Ρ��㰡 �������� ���ǹ�ȣ : <font color = "orange"><b>100-000-201403631618</b></font> <br/> �̸��� : <font color="orange"><b>Sea31230@naver.com</b></font> ��ȭ : <font color="orange"><b>02-554-8763</b></font> �ڵ��� : <font color="orange"><b>010-4447-7540</b></font>
   ���� 110-383-564414
   <br/>
   <br/>
   </div>

</body>
</html>