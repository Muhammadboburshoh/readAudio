class Node {
	constructor(data, prev = null, next = null) {
    this.data = data
		this.prev = prev
		this.next = next
	}
}

class LinkedList {

	#size = 0
	head = null
	tail = null

	insert(data) {

		const newNode = new Node(data)

		if (!this.#size) {

			this.head = newNode
			this.tail = newNode

			this.head.next = this.tail
			this.head.prev = this.tail

			this.tail.next = this.head
			this.tail.prev = this.head
		}
		else {

			const head = this.head
			const tail = this.tail

			newNode.next = head
			newNode.prev = tail

			tail.next = newNode

			this.tail = newNode

			head.prev = newNode
		}

		this.#size++
	}

	prepend(data) {

		const newNode = new Node(data)

		if (!this.#size) {
			this.head = newNode
			this.tail = newNode

			this.head.next = this.tail
			this.head.prev = this.tail

			this.tail.next = this.head
			this.tail.prev = this.head
		}
		else {

			const head = this.head
			const tail = this.tail

			newNode.next = head
			newNode.prev = tail

			this.head.prev = newNode
			this.tail.next = newNode

			this.head = newNode
		}
  }
  
  size () {
    return this.#size
  }

	clear () {
		return this.head = null
	}

	findByIndex (data) {
    let head = this.head
		let index = 0

    while(head.next) {
			++index
      if (index - 0 === data) {
				return head.data
      }
      head = head.next
    }
  }


	find(data) {
		let find = this.head

		while (find.data !== data) {
			 find = find.next
		}

		return find
 }

	
  getSize () {
		return this.#size
	}

	findElement(data) {
		let result = this.head

		for (let i = 0; i < data; i++) {
			result = result.next
		}

		return result
 }

 [Symbol.iterator]() {
		let current = this
		let index = 0
		let to = this.#size

		return {
			next: function () {

				return {
					value: current.findElement(index++), 
					done: to < index
				}
			}
		}

	}

}

module.exports.LinkedList = LinkedList
