package sktest.test.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import sktest.test.service.TestService;

@Controller
public class TestController {
		
	@Resource(name = "TestService")
	private TestService testService;

	@RequestMapping(value = "/main.do")
	public String getMain(HttpServletRequest request, Model model) throws Exception{
		Map resultMap = testService.selectData(request);
		model.addAttribute("sk", resultMap.get("sk"));
		return "/Test";
	}
	
	@RequestMapping(value = "/selectData.do")
	@ResponseBody
	public Object selectData(HttpServletRequest request){
		try {
			Map resultMap = testService.selectData(request);
			return resultMap;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}
