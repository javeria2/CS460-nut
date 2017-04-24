String.prototype.hashCode() = function(){
  var hash = 0, char;

  for(var i = 0; i < this.length; i++){
      char = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
  }  
  return hash;
};
