/**
 * 
 */
package id.co.sigma.common.security.rpc;


import id.co.sigma.common.rpc.JSONSerializedRemoteService;
import id.co.sigma.common.security.domain.Application;

import java.util.List;

/**
 * @author Dode
 * @version $Id
 * @since Dec 19, 2012, 2:47:42 PM
 */
public interface ApplicationRPCService extends JSONSerializedRemoteService {
	
	/**
	 * get all application data
	 * @return list application
	 * @throws Exception
	 */
	public List<Application> getApplicationList() throws Exception;
	
	
	
	
}
