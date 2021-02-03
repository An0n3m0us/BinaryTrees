var node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

node.prototype.create = function(value) {
    value <= this.data ?
    !this.left ?
    this.left = new node(value) : this.left.create(value)
    :
    !this.right ?
    this.right = new node(value) : this.right.create(value)
}

node.prototype.find = function(value) {
    return value == this.data ?
    !!1
    :
    value < this.data ?
    !this.left ?
    !!0
    :
    this.left.find(value)
    :
    !this.right ?
    !!0
    :
    this.right.find(value)
}

node.prototype.print = function(value) {
    this.left && this.left.print()
    console.log(this.data)
    this.right && this.right.print()
}

// To create a tree with the values [1, 2, 3, 5, 7, 8, 9]
tree = new node(5);
tree.create(8);
tree.create(1);
tree.create(2);
tree.create(9);
tree.create(7);
tree.create(3);

// To check if a given value exists;
console.log(tree.find(0)); // Should return false

// To display the values in the tree in a sorted order;
console.log(tree.print()) // 1, 2, 3, 5, 7, 8, 9
