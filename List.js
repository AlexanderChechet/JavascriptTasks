function Node(data)
{
	if (!(this instanceof Node))
		return new Node(data);
	this.data = data;
    this.next = null;
    this.prev = null;
	return this;
}


function List()
{
	if (!(this instanceof List))
		return new List()
	this.first = null;
	this.last = null;
	this.count = 0;
	return this;
}

List.prototype = {
	head : function() {
		return this.first;
	},
	
	tail : function() {
		return this.last;
	},
	
	append : function(data) {
		if (this.first == null)
		{
			this.first = new Node(data);
			this.last = this.first;
			this.count = 1;
		}
		else
		{
			var temp = new Node(data);
			this.last.next = temp;
			temp.prev = this.last;
			this.last = temp;
			this.count++;
		}
		return this;
	},
	
	at : function(index) {
		if (index < 0 || index >= this.count)
			throw 42;
		else
		{
			var temp = this.first;
			var counter = 0;
			while (counter != index)
			{
				temp = temp.next;
				counter++;
			}
			return temp;
		}
	},
	
	deleteAt : function(index) {
		var item = this.at(index);
		if (this.count == 1)
		{
			this.first = null;
			this.last = null;
		}
		else if (item.prev == null)
		{
			this.first = item.next;
			item.next.prev = null;
			
		}
		else if (item.next == null)
		{
			this.last = item.prev;
			item.prev.next = null;
		}
		else
		{
			item.prev.next = item.next;
			item.next.prev = item.prev;
		}
		delete item;
		this.count--;
		return this;
	},
	
	insertAt : function(value, index) {
		var item = this.at(index);
		var node = new Node(value);
		if (item.prev == null)
		{
			node.next = item;
			item.prev = node;
			this.first = node;
		}
		else
		{
			node.prev = item.prev;
			node.next = item;
			item.prev.next = node;
			item.prev = node;
		}
		this.count++;
		return this;
	},
	
	reverse : function() {
		var temp = this.first;
		this.first = this.last;
		this.last = temp;
		while (temp != null)
		{
			var tmp = temp.next;
			temp.next = temp.prev;
			temp.prev = tmp;
			temp = temp.prev;
		}
		return this;
	},
	
	indexOf : function(item) {
		var temp = this.first;
		var index = 0;
		while (temp.next != null && temp.data != item)
		{
			temp = temp.next;
			index++;
		}
		if (temp.data == item)
			return index;
		else
			return -1;
	},
	
	each : function(func) {
		var temp = this.first;
		while (temp != null)
		{
			temp.data = func.call(this, temp.data);
			temp = temp.next;
		}
		return this;
	}
	
}	

function test(value){
	return value * value;
}

var list = List();
list.append(2).append(5).append(7).append(9).append(11);
console.log(list);

