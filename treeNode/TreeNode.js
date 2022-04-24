class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        childToRemove != child? true : false;
      } else {
        if (childToRemove != child.data) {
          return true
        } else {
          return false
        }
      }
    })
            if (this.children.length == length) this.children.forEach(child => child.removeChild(childToRemove))
  }
};

module.exports = TreeNode;