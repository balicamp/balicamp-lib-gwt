/**
 * 
 */
package id.co.sigma.common.client.security.rpc;

import id.co.sigma.common.security.domain.Application;
import id.co.sigma.common.client.security.rpc.impl.ApplicationRPCServiceAsyncImpl;
import id.co.sigma.common.data.PagedResultHolder;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * @author Dode
 * @version $Id
 * @since Dec 19, 2012, 2:50:14 PM
 */
public interface ApplicationRPCServiceAsync {

	public static class Util {
		private static ApplicationRPCServiceAsync instance ; 
		
		public static ApplicationRPCServiceAsync getInstance() {
			if (instance==null){
				instance = GWT.create(ApplicationRPCServiceAsyncImpl.class);
			}			 
			return instance;
		}
	}
	
	/**
	 * get all application data
	 * @return list application
	 * @throws Exception
	 */
	public void getApplicationList(AsyncCallback<List<Application>> callback) throws Exception;
	
	
	
}
