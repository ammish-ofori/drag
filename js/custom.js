tabs = document.querySelectorAll(".block .tab");
blocks = document.querySelectorAll(".block");

Array.prototype.forEach.call(blocks, function(receiver){
	receiver.addEventListener('dragover', dragoverhandler);
	receiver.addEventListener('dragenter', dragenterhandler);
	receiver.addEventListener('dragleave', dragleavehandler);
	receiver.addEventListener('drop', drophandler);
});

Array.prototype.forEach.call(tabs, function(transfer){
	transfer.addEventListener('dragstart', dragstarthandler);
	transfer.addEventListener('dragend', dragendhandler);
});

var tabcontainer;

function dragoverhandler(a){
	/*remove default behaviour to enable dragging starts*/
	if(a.preventDefault){
		a.preventDefault();
	}
	/* does the same thing*/
	return false;
}
/*handler for starting drag event*/
function dragstarthandler(b){
	tabcontainer = this.parentNode;
	this.classList.add('start-dragging');
}
/*handler for ending drag event*/
function dragendhandler(c){
	Array.prototype.forEach.call(tabs,function(d){
		d.classList.remove('start-dragging');
		d.classList.remove('end-dragging');
	});
	Array.prototype.forEach.call(blocks,function(d){
		d.classList.remove('end-dragging');
	});
}
/*handler for drop event*/
//tabs
function tabdrophandler(e){
	//remove browser's default drop behaviour
	if(e.stopPropagation){
		e.stopPropagation();
	}
	if (tabcontainer !== this.parentNode){
		tabcontainer.parentNode.removeChild(tabcontainer);
		this.parentNode.parentNode.appendChild(tabcontainer);
	}
	return false;
}
//blocks
function drophandler(f){
	if(f.stopPropagation){
		f.stopPropagation();
	}
	tabcontainer.parentNode.removeChild(tabcontainer);
	this.appendChild(tabcontainer);
	return false;
}
/*dropzones*/
function dragenterhandler(g){
	this.classList.add('dropzone')
};
function dragleavehandler(h){
	this.classList.remove('dropzone')
};