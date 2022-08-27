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
    
    def print(self, padding = '', pipe = False, pointer = '   '):

        print(padding + pointer + str(self.value))

        if pipe:
            padding += '│  '
        else:
            padding += '   '

        if self.left is not None:
            self.left.print(padding, True if self.right else False, '├──' if self.right else '└──')

        if self.right is not None:
            self.right.print(padding, False, '└──')
