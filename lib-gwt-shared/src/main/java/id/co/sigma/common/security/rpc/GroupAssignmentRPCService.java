package id.co.sigma.common.security.rpc;

import id.co.sigma.common.data.PagedResultHolder;
import id.co.sigma.common.rpc.JSONSerializedRemoteService;
import id.co.sigma.common.security.domain.UserGroupAssignment;
import id.co.sigma.common.security.dto.UserGroupAssignmentDTO;


import java.util.List;

/**
 * Group Assignment RPC
 * @author I Gede Mahendra
 * @since Dec 7, 2012, 1:00:37 PM
 * @version $Id
 */
public interface GroupAssignmentRPCService extends JSONSerializedRemoteService{
	
	
	
	/**
	 * Insert data
	 * @param data
	 * @throws Exception
	 */
	public void insert(UserGroupAssignment data) throws Exception;
	
	/**
	 * Delete data
	 * @param data
	 * @throws Exception
	 */
	public void delete(Long data) throws Exception;
	
}