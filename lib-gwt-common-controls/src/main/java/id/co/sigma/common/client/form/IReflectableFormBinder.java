package id.co.sigma.common.client.form;

/**
 * binder form dari control ke form dan sebaliknya. 
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public interface IReflectableFormBinder<EDITOR , DATA > {
	
	
	/**
	 * bind data ke dalam control di form
	 * @param editor editor reference
	 * @param dataToBind data yang hendak di bind ke dalam control
	 */
	public void bindToControl (EDITOR editor , DATA dataToBind ) ;
	
	
	/**
	 * membaca data dari control
	 */
	public void fetchDataFromControl (EDITOR editor , DATA targetForBind ); 
	
	
	
	
	
}
