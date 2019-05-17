
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
	
	public Map selectData(HttpServletRequest request) throws Exception{
	      //Sample
	      Map reqMap = new HashMap();
	      String option = request.getParameter("option");
	      reqMap.put("option", option);
	      
	      ArrayList list = (ArrayList) testDao.selectData(reqMap);
	      reqMap.put("sk", list.get(0));
	      return reqMap;
	}   

	
	public Map selectPositionData(HttpServletRequest request) throws Exception{
		
	    Map reqMap = new HashMap();
		Map resultMap = new HashMap();
		ArrayList<Map> list = (ArrayList<Map>) testDao.selectPositionData(reqMap);
		resultMap.put("resultList", list);
		return resultMap;
	}	
}
