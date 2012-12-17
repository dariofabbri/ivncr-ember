package it.dariofabbri.ivncr.service.rest.resource;

import it.dariofabbri.ivncr.service.rest.param.DateParam;

import java.util.Date;

public abstract class BaseResource {

	public Date extractDateParam(DateParam param) {
		
		if(param == null)
			return null;
		
		return param.getValue();
	}
	
}
