var wrapperEle = document.body;

var numbers=[-30, 14, 66, 21, 72, -4];

var practical = [];

function whack(whackyNum){
  var that = this;
  
  this.num = whackyNum;
  
  this.ele = document.createElement("div");
  this.numEle = document.createElement("h4");
  this.mesEle = document.createElement("div");
  
  this.numEle.innerHTML = "The number is: "+this.num;
  
  if (whackyNum < 0)
    {
      this.mesEle.innerHTML= " That number is less than 0";
    }
  else if (whackyNum > 50)
    {
      this.mesEle.innerHTML = " That number is greater than 50";
    }
  else if (whackyNum === 14)
    {
    this.mesEle.innerHTML = " That number is 14";
    }
  
  this.ele.appendChild(this.numEle);
  this.ele.appendChild(this.mesEle);
  document.body.appendChild(this.ele);
  
  this.numEle.addEventListener("click", function(){
    that.numberUp();
  })
}

whack.prototype.numberUp = function(){
  this.num = this.num+1;
  this.numEle.innerHTML = "The number is: "+this.num;
}

for (var i=0; i<numbers.length; i++){
  practical.push(new whack(numbers[i]));
}