class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize(this.capacity * 2); // Double the capacity
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    const poppedValue = this.data[this.length - 1];
    this.data[this.length - 1] = undefined; // Remove the last element
    this.length--;
    return poppedValue;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftedValue = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // Shift elements to the left
    }
    this.data[this.length - 1] = undefined; // Remove the last element
    this.length--;
    return shiftedValue;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize(this.capacity * 2); // Double the capacity
    }
    // Shift existing elements to the right to make space for the new element
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val; // Add the new element at the beginning
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1; // Element not found
  }

  resize(newCapacity) {
    const doubledCapacity = newCapacity || this.capacity * 2;
    const newData = new Array(doubledCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i]; // Copy existing elements
    }
    this.data = newData;
    this.capacity = doubledCapacity; // Update the capacity property
  }
}

module.exports = DynamicArray;
