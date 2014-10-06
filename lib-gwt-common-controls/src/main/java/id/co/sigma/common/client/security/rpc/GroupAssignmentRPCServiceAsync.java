package id.co.sigma.common.client.security.rpc;

import id.co.sigma.common.security.domain.UserGroupAssignment;
import id.co.sigma.common.client.security.rpc.impl.GroupAssignmentRPCServiceAsyncImpl;



import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * Group Assignment RPC Async
 * @author I Gede Mahendra
 * @since Dec 7, 2012, 1:01:52 PM
 * @version $Id
 */
public interface GroupAssignmentRPCServiceAsync {
	
	public static class Util {
		private static GroupAssignmentRPCServiceAsync instance ; 
		
		public static GroupAssignmentRPCServiceAsync getInstance() {
			if (instance==null){
				instance = GWT.create(GroupAssignmentRPCServiceAsyncImpl.class);
//				CommonGlobalVariableHolder.getInstance().fixTargetUrl((ServiceDefTarget)instance);
			}			 
			return instance;
		}
	}
	
	
	
	/**
	 * Insert data
	 * @param data
	 * @param callback
	 */
	void insert(UserGroupAssignment data, AsyncCallback<Void> callback);
	
	/**
	 * Delete data
	 * @param data
	 * @param callback
	 */
	void delete(Long data, AsyncCallback<Void> callback);
	
	
}