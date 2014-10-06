/**
 * 
 */
package id.co.sigma.common.server.gwt.rpc.security;


import id.co.sigma.common.security.domain.Application;
import id.co.sigma.common.security.rpc.ApplicationRPCService;
import id.co.sigma.security.server.service.IApplicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Dode
 * @version $Id
 * @since Dec 19, 2012, 2:54:06 PM
 */
public class ApplicationRPCServiceImpl extends /*BaseSelfRegisteredRPCService*/BaseSecurityRPCService<ApplicationRPCService>
		implements ApplicationRPCService {

	/**
	 * 
	 */
	private static final long serialVersionUID = -616116232677492291L;
	
	@Autowired
	private IApplicationService applicationService;

	@Override
	public List<Application> getApplicationList() throws Exception {
		return applicationService.getApplicationList();
	}


	@Override
	public Class<ApplicationRPCService> implementedInterface() {
		return ApplicationRPCService.class;
	}
}
