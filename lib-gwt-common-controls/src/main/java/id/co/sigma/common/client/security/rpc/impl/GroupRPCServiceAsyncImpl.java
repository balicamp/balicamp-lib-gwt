package id.co.sigma.common.client.security.rpc.impl;

import com.google.gwt.user.client.rpc.AsyncCallback;

import id.co.sigma.common.security.rpc.GroupRPCService;
import id.co.sigma.common.client.rpc.ManualJSONSerializeRPCService;
import id.co.sigma.common.client.security.rpc.GroupRPCServiceAsync;

public class GroupRPCServiceAsyncImpl extends ManualJSONSerializeRPCService<GroupRPCService> implements GroupRPCServiceAsync{

	@Override
	protected Class<GroupRPCService> getServiceInterface() {
		return GroupRPCService.class;
	}
	
	@Override
	public void delete(Long parameter, AsyncCallback<Void> callback) {
		this.submitRPCRequestRaw( "insert", new Class<?>[]{
				Long.class, 
				
			}, 
			new Object[]{
				parameter, 
			}, 
			callback);
	}


	public void insert(id.co.sigma.common.security.domain.UserGroup param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "insert", new Class<?>[]{
			id.co.sigma.common.security.domain.UserGroup.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	public void update(id.co.sigma.common.security.domain.UserGroup param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "update", new Class<?>[]{
			id.co.sigma.common.security.domain.UserGroup.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	


	public void sampleRpc(java.lang.String param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.String> callback) {
		this.submitRPCRequestRaw( "sampleRpc", new Class<?>[]{
			java.lang.String.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	




	

}


