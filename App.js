import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';


function App() {
	// 2. Теперь давайте этот счетчик создадим 
	//let likes = 5;
	//4. Теперь давайте создадим функции для того что бы они отрабатывалисьб так как после 3 пунка значение лайков не меняется
	//function increment() {
	//	likes += 1;
	//	console.log(likes);
	//5. Позже эту функцию передает в слушатель события - в button
	
	//6. Создадим константу теперь, все предыдущие шаги удаляем, в даном случае они закоментированы
	
	const [value, setValue] = useState("Texto en el input")
	
	
	//7. Здесь мы выводили в консоле, теперь это закоментируем и создадим функцию
	// console.log(count),
	// console.log(setCount)

	//8. Создаем функции 

	// 10. Мы не вызываем значение, а указываем функцию которая для это предзназначена
	
	
	return (
		<>
    	<div className="App">
	{/*1. Кнопки для того что бы увеличивать или уменшать на единицу какой нибудь счетчик */}
	{/* 3. При нажатии на кнопку количество лайков увеличивается и уменьшается на единицу */}
	{/* 9. Функцию декремента мы не вызываем а просто передаем как ссылку */}
	{/* 11. Сделаем ещё один заголовок и добавим к нему значение, второй h1 и добавляем к нему значение value которое мы создалит раньше*/}
	
		<div className="post">
			<div className="post__content">
				<strong>1. Javascript</strong>
				<div>
					Jacascript - язык програмирования.
				</div>
				<div className="post__btns">
					<button>Удалить</button>
				</div>
			</div>
		</div>
    	</div>
	</>
  );
}


export default App;
