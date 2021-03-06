
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
	
	public ArrayList<Map> selectData(Map reqMap) throws Exception{
		return (ArrayList<Map>) list("testDao.selectData", reqMap);
	}
	
}
