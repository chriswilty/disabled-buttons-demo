import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const downIsDisabled = count <= 0;

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => Math.max(prev - 1, 0));

	return (
		<main>
			<section aria-labelledby="count-heading">
				<h1 id="count-heading" className="boxed">
					Counter
				</h1>
				<div aria-live="polite" className="value boxed">
					{count}
				</div>
			</section>
			<div className="control-box">
				<button
					aria-disabled={downIsDisabled}
					aria-describedby={downIsDisabled ? 'why-disabled' : undefined}
					className="boxed"
					onClick={decrement}
				>
					Minus
					<span className="icon" aria-hidden="true">
						-
					</span>
				</button>
				<div role="tooltip" id="why-disabled" className="tooltip">
					<span>Value cannot be negative</span>
				</div>
				<button className="boxed" onClick={increment}>
					<span className="icon" aria-hidden="true">
						+
					</span>
					Plus
				</button>
			</div>
		</main>
	);
}

export default App;
