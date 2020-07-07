


class Node
{
    constructor(value,left=null,right=null)
    {
        this.value=value;
        this.left=left;
        this.right=right;
    }
}

function printCommon(root1,root2) 
{ 
    Stack<Node> s1 = new Stack<Node> (); 
    Stack<Node> s2 = new Stack<Node> (); 
  
    while (true) 
    { 
        // push the Nodes of first tree in stack s1  
        if (root1 != null) 
        { 
            s1.Push(root1); 
            root1 = root1.left; 
        } 
  
        // push the Nodes of second tree in stack s2  
        else if (root2 != null) 
        { 
            s2.Push(root2); 
            root2 = root2.left; 
        } 
  
        // Both root1 and root2 are NULL here  
        else if (s1.Count > 0 && s2.Count > 0) 
        { 
            root1 = s1.Peek(); 
            root2 = s2.Peek(); 
  
            // If current keys in two trees are same  
            if (root1.key == root2.key) 
            { 
                Console.Write(root1.key + " "); 
                s1.Pop(); 
                s2.Pop(); 
  
                // move to the inorder successor  
                root1 = root1.right; 
                root2 = root2.right; 
            } 
  
            else if (root1.key < root2.key) 
            { 
                // If Node of first tree is smaller, than that of  
                // second tree, then its obvious that the inorder  
                // successors of current Node can have same value  
                // as that of the second tree Node. Thus, we pop  
                // from s2  
                s1.Pop(); 
                root1 = root1.right; 
  
                // root2 is set to NULL, because we need  
                // new Nodes of tree 1  
                root2 = null; 
            } 
            else if (root1.key > root2.key) 
            { 
                s2.Pop(); 
                root2 = root2.right; 
                root1 = null; 
            } 
        } 
  
        // Both roots and both stacks are empty  
        else
        { 
            break; 
        } 
    } 
} 