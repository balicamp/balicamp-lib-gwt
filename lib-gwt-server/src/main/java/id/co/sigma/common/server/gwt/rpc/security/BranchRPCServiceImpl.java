package id.co.sigma.common.server.gwt.rpc.security;

import id.co.sigma.common.data.PagedResultHolder;
import id.co.sigma.common.data.query.SimpleQueryFilter;
import id.co.sigma.common.security.domain.Branch;
import id.co.sigma.common.security.rpc.BranchRPCService;
import id.co.sigma.security.server.service.IBranchService;



import org.springframework.beans.factory.annotation.Autowired;


public class BranchRPCServiceImpl extends  BaseSecurityRPCService<BranchRPCService> implements BranchRPCService{
	
	

	@Autowired
	private IBranchService branchService;
	

	@Override
	public void saveOrUpdateBranch(Branch data) throws Exception {
		branchService.saveOrUpdate(data);
	}

	@Override
	public void remove(Long id) throws Exception {
		branchService.remove(id);
	}

	@Override
	public Class<BranchRPCService> implementedInterface() {
		return BranchRPCService.class;
	}
}