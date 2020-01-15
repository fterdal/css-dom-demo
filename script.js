// console.log('HELLO WORLD!')

const container = document.getElementById('container')

// console.log(container)

const eventListener = (event) => {
  console.count('calling event listener')

  console.log('event Target', event.target)
  console.log('this:', this)
}

const someObj = {
  name: 'Finn',
  favColor: 'gren'
}

const boundEventListener = eventListener.bind(someObj)

// Option 1
// eventListener({ target: 'hello there' })

// Option 2
// document.appendChild(eventListener)

// Option 3
container.addEventListener('click', boundEventListener)

document.addEventListener('click', boundEventListener)
