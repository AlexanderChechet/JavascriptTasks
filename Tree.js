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


BinaryTree.prototype = {
	AddNode : function(data)
	{
		if (this.root == null)
		{
			this.root = new Node(data);
		}
		else
		{
			if (this.root.data < data)
			{
				this.root.left.AddNode(data);
			}
			else
			{
				this.root.right.AddNode(data);
			}
		}
	}
}

var tree = BinaryTree();
tree.AddNode(10);
tree.AddNode(5);
tree.AddNode(15);
tree.AddNode(12);
tree.AddNode(7);
tree.AddNode(2);
console.log(tree);