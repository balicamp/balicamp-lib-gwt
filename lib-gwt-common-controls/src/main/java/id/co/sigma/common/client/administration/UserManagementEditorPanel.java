package id.co.sigma.common.client.administration;

import id.co.sigma.common.client.BaseCommonControlAOIDualControlEditorPanel;
import id.co.sigma.common.client.common.ITitleAndSearchPanelFilter;
import id.co.sigma.common.client.control.ExpensivePanelGenerator;
import id.co.sigma.common.client.dualcontrol.BaseDualControlDataEditor;
import id.co.sigma.common.client.form.exception.CommonFormValidationException;
import id.co.sigma.common.client.jqueryui.grid.cols.BaseColumnDefinition;
import id.co.sigma.common.client.jqueryui.grid.cols.StringColumnDefinition;
import id.co.sigma.common.client.lov.LOVCapabledControl;
import id.co.sigma.common.client.widget.EditorState;
import id.co.sigma.common.security.domain.UserWithoutPassword;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import id.co.sigma.common.client.widget.SpanLabel;
import id.co.sigma.common.client.form.advance.TextBoxWithLabel;

/**
 * 
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public class UserManagementEditorPanel extends BaseCommonControlAOIDualControlEditorPanel<Long, UserWithoutPassword> {
	
	private static UserManagementEditorPanelUiBinder uiBinder = GWT
			.create(UserManagementEditorPanelUiBinder.class);
	@UiField SpanLabel lblTitle;
	@UiField TextBoxWithLabel txtUserName;
	@UiField TextBoxWithLabel txtRealName;
	@UiField TextBoxWithLabel txtEmail;

	interface UserManagementEditorPanelUiBinder extends
			UiBinder<Widget, UserManagementEditorPanel> {
	}

	
	@Override
	public void switchToViewReadOnlyPanel() {
		// TODO Auto-generated method stub
		
	}
	@Override
	protected void switchEditablePanel(boolean addNew) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getPanelShortCode() {
		return "CMNCONTROL::ADMINSTRATION::USER";
	}

	@Override
	protected ITitleAndSearchPanelFilter generateHeaderAndSearchFilterPanel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected Widget generateFooterPanel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected String generateConfirmDeleteDataMessage(
			UserWithoutPassword dataToErase) {
		return "Apakah anda yakin untuk mengapus user : " + dataToErase.getUserCode() +"?";
	}

	@Override
	protected BaseColumnDefinition<UserWithoutPassword, ?>[] getColumnDefinitions() {
		@SuppressWarnings("unchecked")
		BaseColumnDefinition<UserWithoutPassword, ?>[] retval = (BaseColumnDefinition<UserWithoutPassword, ?>[]) new BaseColumnDefinition<?, ?>[] {
			new StringColumnDefinition<UserWithoutPassword>("Username" ,100 , "adminstration.user.list.username" , "userCode" ) {
				@Override
				public String getData(UserWithoutPassword data) {
					return data.getUserCode();
				}
			}  , 
			new StringColumnDefinition<UserWithoutPassword>("Nama User" ,200 , "adminstration.user.list.realName" , "realName" ) {
				@Override
				public String getData(UserWithoutPassword data) {
					return data.getRealName();
				}
			}  ,
			new StringColumnDefinition<UserWithoutPassword>("Email" ,100 , "adminstration.user.list.email" , "email" ) {
				@Override
				public String getData(UserWithoutPassword data) {
					return data.getEmail();
				}
			}  ,
			new StringColumnDefinition<UserWithoutPassword>("Kode Cabang" ,100 , "adminstration.user.list.branchCode" , "defaultBranchCode" ) {
				@Override
				public String getData(UserWithoutPassword data) {
					return data.getDefaultBranchCode();
				}
			} 
		}; 
		return retval;
	}

	@Override
	protected void instantiateDataForAddNewTemplate(
			AsyncCallback<UserWithoutPassword> callback) {
		UserWithoutPassword pwd = new UserWithoutPassword(); 
		callback.onSuccess(pwd);
	}

	@Override
	public Class<UserWithoutPassword> getProccessedClass() {
		return UserWithoutPassword.class;
	}

	

	@Override
	protected void validateSaveForApproval()
			throws CommonFormValidationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected Widget instantiateEditorPanel() {
		return uiBinder.createAndBindUi(this);
	}

	@Override
	public void makeClone(
			ExpensivePanelGenerator<BaseDualControlDataEditor<Long, UserWithoutPassword>> callback) {
		callback.onPanelGenerationComplete(new UserManagementEditorPanel());
		
	}

	@Override
	protected LOVCapabledControl[] getAutomaticRegisteredLOVCapableControls() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void renderDataToControl(UserWithoutPassword data,
			EditorState editorState) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void fetchDataFromControlToObject(UserWithoutPassword targetData,
			EditorState editorState) {
		// TODO Auto-generated method stub
		
	}
}
