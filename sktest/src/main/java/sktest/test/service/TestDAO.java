
package sktest.test.service;

import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("TestDao")
public class TestDAO extends EgovAbstractDAO{
	@Resource(name = "TestSqlMapClient")
	public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {
		super.setSuperSqlMapClient(sqlMapClient);
	}

	public ArrayList<Map> selectPositionData(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.getPositionData", reqMap);
	}
	public ArrayList<Map> selectPreferPositionData(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.getPreferPositionData", reqMap);
	}
	
	public ArrayList<Map> selectRoomData(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.getRoomData", reqMap);
	}
	public ArrayList<Map> selectSubwayPosition(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.getSubwayPosition", reqMap);
	}
	
	public ArrayList<Map> selectWeightList(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.getWeightList", reqMap);
	}
	
	
	//등록 페이지
	public Map selectMaxNum() throws Exception{
		return (Map) select("testDao.getMaxNum");
	}
	public void insertRoom(Map reqMap) throws Exception{
		insert("testDao.insertRoom", reqMap);
	}
}
