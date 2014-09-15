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
import id.co.sigma.common.security.domain.UserGroup;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import id.co.sigma.common.client.form.advance.TextBoxWithLabel;

/**
 * editor User group
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public class GroupUserEditorPanel extends BaseCommonControlAOIDualControlEditorPanel<Long, UserGroup> {
	
	private static GroupUserEditorPanelUiBinder uiBinder = GWT
			.create(GroupUserEditorPanelUiBinder.class);
	@UiField TextBoxWithLabel txtGroupCode;
	@UiField TextBoxWithLabel txtGroupName;

	interface GroupUserEditorPanelUiBinder extends
			UiBinder<Widget, GroupUserEditorPanel> {
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
		return "CMNCONTROL::ADMINSTRATION::GROUP";
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
	protected String generateConfirmDeleteDataMessage(UserGroup dataToErase) {
		return "Apakah anda yakin untuk menghapus group : " + dataToErase.getGroupCode() +"(" + dataToErase.getGroupName() +")";
	}

	@Override
	protected BaseColumnDefinition<UserGroup, ?>[] getColumnDefinitions() {
		@SuppressWarnings("unchecked")
		BaseColumnDefinition<UserGroup, ?>[] retval = (BaseColumnDefinition<UserGroup, ?>[]) new BaseColumnDefinition<?, ?>[] {
			new StringColumnDefinition<UserGroup>("Kode grup" , 100 , "adminstration.group.list.groupCode" , "groupCode") {
				@Override
				public String getData(UserGroup data) {
					return data.getGroupCode();
				}
			}, 
			new StringColumnDefinition<UserGroup>("Nama grup" , 250 , "adminstration.group.list.groupName" , "groupName") {
				@Override
				public String getData(UserGroup data) {
					return data.getGroupCode();
				}
			}
			
		}; 
		return retval;
	}

	@Override
	protected void instantiateDataForAddNewTemplate(
			AsyncCallback<UserGroup> callback) {
		UserGroup c = new UserGroup(); 
		callback.onSuccess(c);
		
	}

	@Override
	public Class<UserGroup> getProccessedClass() {
		return UserGroup.class;
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
			ExpensivePanelGenerator<BaseDualControlDataEditor<Long, UserGroup>> callback) {
		GroupUserEditorPanel p = new GroupUserEditorPanel(); 
		callback.onPanelGenerationComplete(p);
		
	}

	@Override
	protected LOVCapabledControl[] getAutomaticRegisteredLOVCapableControls() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void renderDataToControl(UserGroup data, EditorState editorState) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void fetchDataFromControlToObject(UserGroup targetData,
			EditorState editorState) {
		// TODO Auto-generated method stub
		
	}
}
