package id.co.sigma.common.client.jqueryui.grid;

import id.co.sigma.common.client.control.DataProcessWorker;

/**
 * 
 * cell button handler 1 line dengan processor
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public abstract class CellButtonHandlerWithProcessor<DATA> extends CellButtonHandler<DATA> implements DataProcessWorker<DATA>{
	
	
	/**
	 * konstruktor default
	 **/
	public CellButtonHandlerWithProcessor(String buttonCssName , String defaultIconTitle  ){
		super( buttonCssName ,   defaultIconTitle  );
		setDataProcessor(this); 
	}
}
