package sktest.test.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sf.json.JSONArray;
import sktest.test.service.TestService;

@Controller
public class TestController {
		
	@Resource(name = "TestService")
	private TestService testService;

	@RequestMapping(value = "/main.do")
	public String getMain(HttpServletRequest request, Model model) throws Exception{
		Map resultMap = testService.selectPositionData(request);
		//model.addAttribute("resultList",resultMap.get("resultList"));
		JSONArray jsonArray = new JSONArray();
		model.addAttribute("resultList", jsonArray.fromObject(resultMap.get("resultList")));
		return "/Test";
	}
	
	@RequestMapping(value = "/register.do")
	public String register(HttpServletRequest request, Model model) throws Exception{
		return "/register";
	}
	
	@RequestMapping(value = "/selectPositionData.do")
	@ResponseBody
	public Object selectPositionData(HttpServletRequest request){
		try {
			Map resultMap = testService.selectPositionData(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/selectPreferPositionData.do")
	@ResponseBody
	public Object selectPreferPositionData(HttpServletRequest request){
		try {
			Map resultMap = testService.selectPreferPositionData(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/selectRoomData.do")
	@ResponseBody
	public Object selectRoomData(HttpServletRequest request){
		try {
			Map resultMap = testService.selectRoomData(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/selectSubwayPosition.do")
	@ResponseBody
	public Object selectSubwayPosition(HttpServletRequest request){
		try {
			Map resultMap = testService.selectSubwayPosition(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@RequestMapping(value = "/selectWeightList.do")
	@ResponseBody
	public Object selectWeightList(HttpServletRequest request){
		try {
			Map resultMap = testService.selectWeightList(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	//등록페이지
	@RequestMapping(value = "/insertRoom.do")
	@ResponseBody
	public String insertRoom(HttpServletRequest request){
		try {
			String result = testService.insertRoom(request);
			return result;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
