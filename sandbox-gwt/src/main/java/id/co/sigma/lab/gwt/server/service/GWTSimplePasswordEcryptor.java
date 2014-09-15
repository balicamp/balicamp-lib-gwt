package id.co.sigma.lab.gwt.server.service;

import id.co.sigma.common.server.service.system.ISimpleParameterEncryption;

/**
 * 
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public class GWTSimplePasswordEcryptor implements ISimpleParameterEncryption{
	static final org.slf4j.Logger logger = org.slf4j.LoggerFactory
			.getLogger(GWTSimplePasswordEcryptor.class.getName());

	@Override
	public String decrypt(String raw) {
		// TODO Auto-generated method stub
		return raw;
	}

	@Override
	public String encrypt(String raw) {
		// TODO Auto-generated method stub
		return raw;
	}
}
