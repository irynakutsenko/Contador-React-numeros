import React from 'react';
import { useState } from 'react';


//Функция называется так же как и файл компонента и всегда из большой буквы
const Counter = function () {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
		}
	
	function decrement() {
		setCount(count - 1)
		}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button> 
	  		<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Counter;

