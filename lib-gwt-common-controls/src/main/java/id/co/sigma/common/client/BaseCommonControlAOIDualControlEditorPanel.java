package id.co.sigma.common.client;

import java.io.Serializable;

import id.co.sigma.common.client.dualcontrol.BaseDualControlEditorWithAllInOnePanel;
import id.co.sigma.common.data.app.DualControlEnabledData;

/**
 * base class untuk common control base all in one dual control editor
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 */
public abstract class BaseCommonControlAOIDualControlEditorPanel<KEY extends Serializable ,  DATA extends DualControlEnabledData<DATA, KEY>>  extends BaseDualControlEditorWithAllInOnePanel<KEY, DATA>  {
	
}
