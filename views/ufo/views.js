var couchapp = require('couchapp');
ddoc = {
    _id: '_design/stats'
  , views: {}
}
module.exports = ddoc;

ddoc.views.timeBetweenReporting = {
  map: function(doc) {    
    if (doc.sighted_at != "0000" && doc.reported_at != "0000")
    { 
      var repY = doc.reported_at.substring(0,4);
      var repM = doc.reported_at.substring(4,6);
      var repD = doc.reported_at.substring(6,8);
      var sigY = doc.sighted_at.substring(0,4);
      var sigM = doc.sighted_at.substring(4,6);
      var sigD = doc.sighted_at.substring(6,8);
      var diffY = repY - sigY;
      var diffM = 0;
      var diffD = 0;
      if(repM < sigM) {
	    diffM = sigM - repM;
        diffY -= 1;
      }
	  else
	    diffM = repM - sigM;
	  if((repD < sigD) && (repM == sigM)){  
	    diffD = sigD - repD;
		diffY -= 1;
	  }	
      else if(repD < sigD) {  
	    diffD = sigD - repD;
		diffM -= 1;
	  }
	  else
	    diffD = repD - sigD;
      emit([doc.duration, {years : diffY, months : diffM, days: diffD}], 1);
    }
  },
}
ddoc.views.placeCount = {
  map: function(doc) {
    if (doc.location) {
      emit(doc.location, null);    
    }
  },
}

