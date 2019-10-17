/*=== Node class ===*/
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

/*=== LinkedList class ===*/
class LinkedList {
  constructor() {
    this.head = null 
  }
  //
  getAt(index) {
    let node = this.head
    let counter = 0
    
    while(node) {
      if(counter === index) {
        return node
      }
      
      counter++
      node = node.next
    }
    
    return null
  }
  //
  removeAt(index) {
    if(!this.head) {
      return
    }
    
    if(index === 0) {
      this.head = this.head.next
      return
    }
    
    const prev = this.getAt(index - 1)
    if(!prev || !prev.next) {
      return
    }
    prev.next = prev.next.next 
  }
  //
  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data)
      return
    }
    
    if(index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    
    const prev = this.getAt(index - 1) || this.getAt(this.size() - 1)
    const node = new Node(data, prev.next)
    prev.next = node
  }
 //
  size() {
    let counter = 0
    let node = this.head
    
    while(node) {
      counter++
      node = node.next
    }
    
    return counter
  }
}

/*=== "tests" ===*/
const list = new LinkedList()
list.head = new Node(123)
list.insertAt(15, 0)

console.log(list)
