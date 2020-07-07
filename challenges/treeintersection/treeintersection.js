


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
 
  
    while (true) 
    { 
        if (root1 != null) 
        { 
            s1.Push(root1); 
            root1 = root1.left; 
        } 
  
        else if (root2 != null) 
        { 
            s2.Push(root2); 
            root2 = root2.left; 
        } 
  
        else if (s1.Count > 0 && s2.Count > 0) 
        { 
            root1 = s1.Peek(); 
            root2 = s2.Peek(); 
  
            if (root1.key == root2.key) 
            { 
                s1.Pop(); 
                s2.Pop(); 
  
                // move to the inorder successor  
                root1 = root1.right; 
                root2 = root2.right; 
            } 
  
            else if (root1.key < root2.key) 
            { 
                s1.Pop(); 
                root1 = root1.right; 
  
            
                root2 = null; 
            } 
            else if (root1.key > root2.key) 
            { 
                s2.Pop(); 
                root2 = root2.right; 
                root1 = null; 
            } 
        } 
  
        else
        { 
            break; 
        } 
    } 
} 