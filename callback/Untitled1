var ControlPanel = function() {
    this.onClickCallback = null;
};

ControlPanel.prototype.onClick = function(callback) {
    console.log('Registered click callback');
    this.onClickCallback = callback;
};

ControlPanel.prototype.click = function(buttonColor) {
    if (!this.onClickCallback) {
        return;
    }

    if (buttonColor === 'green') {
        this.onClickCallback('All okay');
    }
    else if (buttonColor === 'red') {
        this.onClickCallback('Panic!!!');
    }
};

var controlPanel = new ControlPanel();
controlPanel.onClick(function(status) {
    console.log('Received click callback');
    console.log(status);
});

controlPanel.click('green');
controlPanel.click('red');