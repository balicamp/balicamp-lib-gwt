package id.co.sigma.common.security.rpc;

import id.co.sigma.common.data.PagedResultHolder;
import id.co.sigma.common.rpc.JSONSerializedRemoteService;
import id.co.sigma.common.security.domain.UserGroup;
import id.co.sigma.common.security.dto.UserGroupDTO;



/**
 * Group RPC
 * @author I Gede Mahendra
 * @since Nov 26, 2012, 3:57:26 PM
 * @version $Id
 */
public interface GroupRPCService extends JSONSerializedRemoteService{
	
	/**
	 * Sample RPC Service
	 * @param comment
	 * @return String
	 */
	public String sampleRpc(String comment);
	
	
	/**
	 * Insert user group	
	 * @param parameter
	 * @throws Exception
	 */
	public void insert(UserGroup parameter) throws Exception;
	
	/**
	 * Delete user group
	 * @param parameter
	 * @throws Exception
	 */
	public void delete(Long parameter) throws Exception;
	
	/**
	 * Update user group
	 * @param parameter
	 * @throws Exception
	 */
	public void update(UserGroup parameter) throws Exception;
	
	
}