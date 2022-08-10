from random import randrange
import tree

# initialize a tree of random integers from 1 to 100
nodes = [randrange(1,101) for i in range(11)]
tree = tree.Node(nodes.pop())
for n in nodes:
    tree.insert(n)
tree.inorder()