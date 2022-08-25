from random import randrange
import tree

# initialize trees of random integers from 1 to 100
nodes1 = [randrange(1,101) for i in range(11)]
tree1 = tree.Node(nodes1.pop())
for n in nodes1:
    tree1.insert(n)
tree1.inorder()

nodes2 = [randrange(1,101) for i in range(11)]
tree2 = tree.Node(nodes2.pop())
for n in nodes2:
    tree2.insert(n)

# IS SAME TREE
def isSameTree(p,q):
    if p == None and q == None:
        return True
    if p == None or q == None:
        return False
    if p.value != q.value:
        return False

    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

print('Is same tree ', isSameTree(tree1, tree1))
print('Is same tree ', isSameTree(tree1, tree2))

# MAX DEPTH
def maxDepth(root):
    if root == None:
        return 0

    left = maxDepth(root.left)
    right = maxDepth(root.right)

    maximum = max(left, right)
    return maximum + 1

print('Max depth tree 1 is:', maxDepth(tree1))
print('Max depth tree 2 is:', maxDepth(tree2))

# LEVEL ORDER BFS
def levelOrder(root):
    result = []
    queue = []

    if root:
       queue.append(root)

    while len(queue):
        level = []
        count = len(queue) 

        for i in range(count):
            node = queue.pop(0)
            level.append(node.value)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        result.append(level)

    return result

print('Level order BFS\n', levelOrder(tree1))
