function getFirstSelector(selector) {
  var selected = document.querySelector(selector);
  return selected;
}

function nestedTarget() {
  var targetted = document.querySelector("#nested .target");
  return targetted;
}

function increaseRankBy(n) {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');
  for(let i = 0;i<lis.length;i++){
    let inted = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = (inted + n).toString();
  }
}

function deepestChild() {
  let divs = document
  .getElementById("grand-node")
  .querySelectorAll("div");
  let next = [];
  let length = 0;
  while(length !== 1) {
  length = next.length;
	for(let i =0;i < divs.length;i++) {
		next.push(divs[i]);
	  }
	  divs = next.shift();
  }
return divs;
}