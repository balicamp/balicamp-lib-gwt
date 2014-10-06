package id.co.sigma.common.client.lov;



import id.co.sigma.common.client.JSONFriendlyObject;
import id.co.sigma.common.client.util.JSONUtilities;
import id.co.sigma.common.util.json.IJSONFriendlyObject;
import id.co.sigma.common.util.json.ParsedJSONContainer;

import java.util.Date;

import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.storage.client.Storage;


/**
 * master definisi cache lov. cache di client(local storage)
 * @author <a href="mailto:gede.sutarsa@gmail.com">Gede Sutarsa</a>
 * @version $Id
 **/
public class LOVCacheDefinition  implements IJSONFriendlyObject<LOVCacheDefinition>{

	private String cacheId; 
	
	
	private Date cacheTime ;
	
	
	
	/**
	 * versi data
	 **/
	private String version ; 
	/**
	 * hapus cache dari dalam database lokal
	 **/
	public void eraseCache (){
		Storage.getLocalStorageIfSupported().removeItem(cacheId); 
	}
	
	
	
	@Override
	public LOVCacheDefinition instantiateFromJSON(
			ParsedJSONContainer jsonContainer) {
		LOVCacheDefinition retval = new LOVCacheDefinition();
		Double tgl = jsonContainer.getAsNumber("date");
		Date tglDateinstance =  null;
		if (tgl!=null){
			tglDateinstance = new Date();
			
			tglDateinstance.setTime(tgl.longValue());
			retval.setCacheTime(tglDateinstance);
		}
		retval.version = jsonContainer.getAsString("version"); 
		retval.cacheId = jsonContainer.getAsString("cacheId"); 
		return retval;
		
		
		
	}
	
	@Override
	public void translateToJSON(ParsedJSONContainer jsonContainer) {
		jsonContainer.put("cacheId", cacheId); 
		jsonContainer.put("cacheTime", cacheTime.getTime());
		jsonContainer.put("version", version);
	}
	
	
	
	
	
	public String getCacheId() {
		return cacheId;
	}
	public void setCacheId(String cacheId) { 
		this.cacheId = cacheId; 
		
	}
	public Date getCacheTime() {
		return cacheTime;
	}
	public void setCacheTime(Date cacheTime) {
		this.cacheTime = cacheTime;
	}





	/**
	 * versi data
	 **/
	public String getVersion() {
		return version;
	}





	/**
	 * versi data
	 **/
	public void setVersion(String version) {
		this.version = version;
	} 
}
