
package sktest.test.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service("TestService")
public class TestService {

	@Resource(name="TestDao")
	TestDAO testDao; 

	public Map selectPositionData(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectPositionData(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}	
	
	public Map selectPreferPositionData(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectPreferPositionData(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}
	
	public Map selectRoomData(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
	    String[] req = request.getParameterValues("update"); 
	    reqMap.put("location", req);

		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectRoomData(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}
	
	public Map selectSubwayPosition(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
	    String inputS = request.getParameter("value");
	    inputS = inputS.trim();
	    reqMap.put("value",inputS);
	    
		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectSubwayPosition(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}
	
	public Map selectWeightList(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectWeightList(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}
	
	
	//등록 페이지
	public String insertRoom(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
	    Map resultMap = testDao.selectMaxNum();
	    
	    int num = (int)resultMap.get("num_cnt");
	    int code = Integer.parseInt((String)resultMap.get("code_cnt"));
	  
	    reqMap.put("num",num+1);
	    reqMap.put("code", String.valueOf(code+1));
	    reqMap.put("x",Double.parseDouble(request.getParameter("x")));
	    reqMap.put("y",Double.parseDouble(request.getParameter("y")));
	    reqMap.put("address",request.getParameter("address"));
	    reqMap.put("cctv",request.getParameter("cctv"));
	    reqMap.put("doorlock",request.getParameter("doorlock"));
	    reqMap.put("security",request.getParameter("security"));
	    reqMap.put("window_guard",request.getParameter("window_guard"));
	    
	    //파이썬 연동해서 값 받아오기 
	    reqMap.put("subway_dist",0);
	    reqMap.put("csv_dist",0);
	    reqMap.put("pol_dist",0);
	    reqMap.put("wroad_yn","1");
	    reqMap.put("grade",4);
	    
	    reqMap.put("building_type",request.getParameter("building_type"));
	    reqMap.put("deposit",request.getParameter("deposit"));
	    reqMap.put("floor",request.getParameter("floor"));
	    reqMap.put("floor_all",request.getParameter("floor_all"));
	    reqMap.put("image",request.getParameter("image"));
	    reqMap.put("rent",request.getParameter("rent"));
	    reqMap.put("room_type",request.getParameter("room_type"));
	    reqMap.put("title",request.getParameter("title"));
	    reqMap.put("location",request.getParameter("location"));
	    
		testDao.insertRoom(reqMap);
		return "1";
	}
}
