var couchapp = require('couchapp');
ddoc = {
    _id: '_design/statistics'
  , views: {}
}
module.exports = ddoc;

ddoc.views.countryCount = {
  map: function(doc) {
    if(doc.country_of_origin != "unknown"){    
      var words = doc.country_of_origin.split(",");
      for (var i = 0, len = words.length; i < len; i++) {
        var word = words[i];
          emit(word, 1);
      }
    }
  },
  reduce: "_count"
}
ddoc.views.programHoursCount = {
  map: function(doc) {
    if(doc.episode_running_time != "" && doc.number_of_episodes != "")
      emit(doc.name, doc.episode_running_time * doc.number_of_episodes / 60 );    
  },  
}