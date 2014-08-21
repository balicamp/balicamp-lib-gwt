package id.co.sigma.common.client.dualcontrol;

import id.co.sigma.common.data.app.DualControlEnabledData;



import com.google.gwt.event.shared.HandlerRegistration;

/**
 * interface dual controlled panel
 *@author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public interface IDualControlEditor<DATA extends DualControlEnabledData<?, ?>>  {
	
	
	
	
	/**
	 * approve data tunggal
	 **/
	public void approveSingleData ( Long approvalId ) ;
	
	
	
	
	/**
	 * switch panel ke dalam read only panel. Yang anda perlu lakukan adalah : 
	 * <ol>
	 * <li>switch control ke mode read only. kalau di perlukan anda perlu ganti textbox dengan span readonly misalnya</li>
	 * <li></li>
	 * </ol>
	 **/
	abstract void switchToViewReadOnlyPanel () ;
	
	/**
	 * menampikan detail dari data. di render dalam mode read only
	 **/
	public void viewSingleDataApprovalDetail ( Long approvalId ) ;
	
	
	
	
	/**
	 * ini untuk menampilkan data approved/ rejected data item
	 */
	public void viewSingleDataRejectedOrApprovedDataDetail ( Long approvalId ) ;
	
	
	
	/**
	 * class yang di handle class ini
	 **/
	public abstract Class<DATA> getProccessedClass () ; 
	
	
	/**
	 * register change handler
	 **/
	public HandlerRegistration addDataChangeHandlers (final DataChangedEventHandler<DATA> handler); 
	
	
	/**
	 * switch dalam mode edit data
	 */
	public void addAndEditNewData(DATA data);
	
	
	
	
	/**
	 * ganti remark menjadi mode readonly
	 */
	public void switchRemarkReadonly ( boolean readonly) ;
	
	
	/**
	 * ganti remark
	 */
	public void setRemarkLabel ( String label ); 

}
