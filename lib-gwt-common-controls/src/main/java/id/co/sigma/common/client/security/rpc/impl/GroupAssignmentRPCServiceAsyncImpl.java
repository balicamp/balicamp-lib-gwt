package id.co.sigma.common.client.security.rpc.impl;


import id.co.sigma.common.security.rpc.GroupAssignmentRPCService;
import id.co.sigma.common.client.rpc.ManualJSONSerializeRPCService;
import id.co.sigma.common.client.security.rpc.GroupAssignmentRPCServiceAsync;

public class GroupAssignmentRPCServiceAsyncImpl extends ManualJSONSerializeRPCService<GroupAssignmentRPCService> implements GroupAssignmentRPCServiceAsync{

	@Override
	protected Class<GroupAssignmentRPCService> getServiceInterface() {
		return GroupAssignmentRPCService.class;
	}
	
	public void delete(Long id,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "delete", new Class<?>[]{
			Long.class, 
			
		}, 
		new Object[]{
			 id, 
		}, 
		callback); 	
	}


	public void insert(id.co.sigma.common.security.domain.UserGroupAssignment param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "insert", new Class<?>[]{
			id.co.sigma.common.security.domain.UserGroupAssignment.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}

	




	

}

