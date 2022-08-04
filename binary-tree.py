from random import randrange
from sys import setdlopenflags

# binary tree node class
class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = Node(value)
            else:
                self.left.insert(value)
        elif value > self.value:
            if self.right is None:
                self.right = Node(value)
            else:
                self.right.insert(value)
    
    def inorder(self):
        if self.left is not None:
            self.left.inorder()
        print(self.value)
        if self.right is not None:
            self.right.inorder()

# initialize a tree of random integers from 1 to 100
nodes = [randrange(1,101) for i in range(11)]
tree = Node(nodes.pop())
for n in nodes:
    tree.insert(n)
tree.inorder()