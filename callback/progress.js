var ProgressBar = function() {
  this.startPoint = 0;
  this.endPoint = 100;
  this.start = function(interval){
    this.onStart(interval, this.onProgress, this.onEnd);
  };
  this.onStart = function(interval, progressCallback, endCallback) {
    for(var i = 0; i < 100; i++){
      if(i % interval === 0){
        progressCallback(i);
      }
    }
    endCallback();
  };
  this.onProgress = function(interval){
    console.log(interval + '% completed');
  };
  this.onEnd = function() {
    console.log('done');
  };
};

var pb = new ProgressBar();
pb.start(10);