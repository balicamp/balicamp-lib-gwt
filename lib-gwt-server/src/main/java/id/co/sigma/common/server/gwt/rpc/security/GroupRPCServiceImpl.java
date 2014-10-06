package id.co.sigma.common.server.gwt.rpc.security;



import id.co.sigma.common.data.PagedResultHolder;
import id.co.sigma.common.security.domain.UserGroup;
import id.co.sigma.common.security.rpc.GroupRPCService;
import id.co.sigma.security.server.service.IUserGroupService;




import org.springframework.beans.factory.annotation.Autowired;

/**
 * Group RPC Service Impl
 * @author I Gede Mahendra
 * @since Nov 26, 2012, 4:10:31 PM
 * @version $Id
 */
public class GroupRPCServiceImpl extends BaseSecurityRPCService<GroupRPCService> implements GroupRPCService{

	

	@Autowired
	private IUserGroupService userGroupService;	
	
	@Override
	public String sampleRpc(String comment) {
		return comment;
	}

	

	@Autowired
	public void setUserGroupService(IUserGroupService userGroupService) {
		this.userGroupService = userGroupService;
	}

	@Override
	public void insert(UserGroup parameter) throws Exception {
		userGroupService.insert(parameter);
	}

	@Override
	public void delete(Long parameter) throws Exception {
		userGroupService.delete(parameter);		
	}

	

	@Override
	public void update(UserGroup parameter) throws Exception {
		userGroupService.update(parameter);		
	}

	@Override
	public Class<GroupRPCService> implementedInterface() {
		return GroupRPCService.class;
	}



}