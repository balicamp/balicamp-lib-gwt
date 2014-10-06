package id.co.sigma.common.client.security.rpc.impl;

import com.google.gwt.user.client.rpc.AsyncCallback;

import id.co.sigma.common.security.rpc.BranchRPCService;
import id.co.sigma.common.client.rpc.ManualJSONSerializeRPCService;
import id.co.sigma.common.client.security.rpc.BranchRPCServiceAsync;

public class BranchRPCServiceAsyncImpl extends ManualJSONSerializeRPCService<BranchRPCService> implements BranchRPCServiceAsync{

	@Override
	protected Class<BranchRPCService> getServiceInterface() {
		return BranchRPCService.class;
	}
	@Override
	public void remove(Long id, AsyncCallback<Void> callback) {
		this.submitRPCRequestRaw( "remove", new Class<?>[]{
			Long.class, 
			
		}, 
		new Object[]{
			 id, 
		}, 
		callback); 	
	}



	public void saveOrUpdateBranch(id.co.sigma.common.security.domain.Branch param0,com.google.gwt.user.client.rpc.AsyncCallback<java.lang.Void> callback) {
		this.submitRPCRequestRaw( "saveOrUpdateBranch", new Class<?>[]{
			id.co.sigma.common.security.domain.Branch.class, 
			
		}, 
		new Object[]{
			 param0, 
		}, 
		callback); 	
	}




	

}

