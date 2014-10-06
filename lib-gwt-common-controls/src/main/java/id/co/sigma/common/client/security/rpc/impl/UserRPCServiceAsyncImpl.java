package id.co.sigma.common.client.security.rpc.impl;



import com.google.gwt.user.client.rpc.AsyncCallback;


import id.co.sigma.common.security.rpc.UserRPCService;
import id.co.sigma.common.client.rpc.ManualJSONSerializeRPCService;
import id.co.sigma.common.client.security.rpc.UserRPCServiceAsync;

public class UserRPCServiceAsyncImpl extends ManualJSONSerializeRPCService<UserRPCService> implements UserRPCServiceAsync{

	@Override
	protected Class<UserRPCService> getServiceInterface() {
		return UserRPCService.class;
	}
	
	@Override
	public void remove(Long id, AsyncCallback<Void> callback) throws Exception {
		this.submitRPCRequestRaw( "remove", new Class<?>[]{
				Long.class, 
				
			}, 
			new Object[]{
				 id 
			}, 
			callback); 	
		
	}	


	public void insert(id.co.sigma.common.security.domain.User param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "insert", new Class<?>[]{
			id.co.sigma.common.security.domain.User.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	public void update(id.co.sigma.common.security.domain.User param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "update", new Class<?>[]{
			id.co.sigma.common.security.domain.User.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	
	
	
	


	public void getUserByFilter(id.co.sigma.common.data.query.SimpleQueryFilter[] param0,int param1,int param2,com.google.gwt.user.client.rpc.AsyncCallback<id.co.sigma.common.data.PagedResultHolder<id.co.sigma.common.security.domain.User>> callback) {
		this.submitRPCRequestRaw( "getUserByFilter", new Class<?>[]{
			id.co.sigma.common.data.query.SimpleQueryFilter[].class,int.class,int.class, 
			
		}, 
		new Object[]{
			 param0, param1, param2, 
		}, 
		callback); 	
	}


	public void resetPassword(id.co.sigma.common.security.domain.User param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "resetPassword", new Class<?>[]{
			id.co.sigma.common.security.domain.User.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}


	public void getCurrentUserLogin(com.google.gwt.user.client.rpc.AsyncCallback<id.co.sigma.common.security.dto.UserDetailDTO> callback) {
		this.submitRPCRequestRaw( "getCurrentUserLogin", new Class<?>[]{
			 
			
		}, 
		new Object[]{
			 
		}, 
		callback); 	
	}

	@Override
	public void lockUser(Long userId, AsyncCallback<Void> callback) {
		this.submitRPCRequestRaw( "lockUser", new Class<?>[]{
				Long.class, 
				
			}, 
			new Object[]{
				userId, 
			}, 
			callback); 	
		
	}

	@Override
	public void unlockUser(Long userId, AsyncCallback<Void> callback) {
		this.submitRPCRequestRaw( "unlockUser", new Class<?>[]{
				Long.class, 
				
			}, 
			new Object[]{
				userId, 
			}, 
			callback); 	
		
	}




	

}


