function Node(data)
{
	if (!(this instanceof Node))
		return new Node(data);
	this.data = data;
	this.left = new BinaryTree();
	this.right = new BinaryTree();
	return this;
}

function BinaryTree()
{
	if (!(this instanceof BinaryTree))
		return new BinaryTree();
	this.root = null;
	return this;
}


BinaryTree.prototype = 
{
	AddNode : function(data)
	{
		if (this.root == null)
		{
			this.root = new Node(data);
		}
		else
		{
			if (data < this.root.data)
			{
				this.root.left.AddNode(data);
			}
			else
			{
				this.root.right.AddNode(data);
			}
		}
	},
	
	RemoveNode : function(data)
	{
		if (this.root == null)
			throw 42;
		if (this.root.data == data)
		{
			var current = this.root;
			if (current.left.root == null && current.right.root == null)
			{
				this.root = null;
				delete current;
			}
			else if (current.left.root == null)
			{
				this.root = current.right.root;
				delete current;
			}
			else if (current.right.root == null)
			{
				this.root = current.left.root;
				delete current;
			}
			else
			{
				var temp = current.right.root;
				while (temp.left.root != null)
				{
					temp = temp.left.root;
				}
				this.root.data = temp.data;
				delete temp;
			}
		}
		else if (data < this.root.data)
		{
			this.root.left.RemoveNode(data);
		}
		else
		{
			this.root.right.RemoveNode(data);
		}
	}
}

var tree = BinaryTree();
tree.AddNode(8);
tree.AddNode(4);
tree.AddNode(12);
tree.AddNode(2);
tree.AddNode(6);
tree.AddNode(10);
tree.AddNode(14);
tree.RemoveNode(4);
console.log(tree);