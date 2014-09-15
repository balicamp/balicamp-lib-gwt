package id.co.sigma.common.client.administration;

import id.co.sigma.common.client.BaseCommonControlAOIDualControlEditorPanel;
import id.co.sigma.common.client.common.ITitleAndSearchPanelFilter;
import id.co.sigma.common.client.control.ExpensivePanelGenerator;
import id.co.sigma.common.client.dualcontrol.BaseDualControlDataEditor;
import id.co.sigma.common.client.form.exception.CommonFormValidationException;
import id.co.sigma.common.client.jqueryui.grid.cols.BaseColumnDefinition;
import id.co.sigma.common.client.lov.LOVCapabledControl;
import id.co.sigma.common.client.widget.EditorState;
import id.co.sigma.common.data.app.SimpleDualControlData;
import id.co.sigma.common.security.domain.Branch;

import com.google.gwt.core.client.GWT;
import com.google.gwt.editor.client.adapters.SimpleEditor;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

/**
 * 
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public class BranchEditorPanel extends BaseCommonControlAOIDualControlEditorPanel<Long,  Branch> {
	
	

	private static BranchEditorPanelUiBinder uiBinder = GWT
			.create(BranchEditorPanelUiBinder.class);

	interface BranchEditorPanelUiBinder extends
			UiBinder<Widget, BranchEditorPanel> {
	}

	@Override
	public void switchToViewReadOnlyPanel() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getPanelShortCode() {
		// TODO Auto-generated method stub
		return null;
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
	protected String generateConfirmDeleteDataMessage(Branch dataToErase) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected BaseColumnDefinition<Branch, ?>[] getColumnDefinitions() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void instantiateDataForAddNewTemplate(
			AsyncCallback<Branch> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Class<Branch> getProccessedClass() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void switchEditablePanel(boolean addNew) {
		// TODO Auto-generated method stub
		
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
			ExpensivePanelGenerator<BaseDualControlDataEditor<Long, Branch>> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected LOVCapabledControl[] getAutomaticRegisteredLOVCapableControls() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void renderDataToControl(Branch data, EditorState editorState) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void fetchDataFromControlToObject(Branch targetData,
			EditorState editorState) {
		// TODO Auto-generated method stub
		
	}

	
}
