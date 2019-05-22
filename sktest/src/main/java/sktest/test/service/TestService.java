
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
}
