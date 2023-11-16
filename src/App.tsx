import { useState } from 'react'
import { Button } from './components/Button'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='card m-10'>
			<Button
				onClick={() => setCount((count) => count + 1)}
				buttonColor='primary'
				buttonSize='lg'
			>
				Texto: Cliques {count}
			</Button>
		</div>
	)
}

export default App
