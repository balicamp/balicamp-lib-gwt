package id.co.sigma.common.client.jqueryui.menu;



/**
 * interface menu click
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 * @version $id
 **/
public interface MenuClickHandler<MENUDATA> {
	
	
	
	/**
	 * handler click menu
	 * @param data data menu
	 **/
	public void execute(MENUDATA data); 

}