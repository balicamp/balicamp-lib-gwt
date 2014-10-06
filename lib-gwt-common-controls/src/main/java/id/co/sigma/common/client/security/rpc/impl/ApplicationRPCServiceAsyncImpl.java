/**
 * 
 */
package id.co.sigma.common.client.security.rpc.impl;

import id.co.sigma.common.security.rpc.ApplicationRPCService;
import id.co.sigma.common.client.rpc.ManualJSONSerializeRPCService;
import id.co.sigma.common.client.security.rpc.ApplicationRPCServiceAsync;

public class ApplicationRPCServiceAsyncImpl extends ManualJSONSerializeRPCService<ApplicationRPCService> implements ApplicationRPCServiceAsync{

	@Override
	protected Class<ApplicationRPCService> getServiceInterface() {
		return ApplicationRPCService.class;
	}
	
		


	public void getApplicationList(com.google.gwt.user.client.rpc.AsyncCallback<java.util.List<id.co.sigma.common.security.domain.Application>> callback) {
		this.submitRPCRequestRaw( "getApplicationList", new Class<?>[]{
			 
			
		}, 
		new Object[]{
			 
		}, 
		callback); 	
	}


	


	
}