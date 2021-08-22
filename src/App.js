import luaparse from 'luaparse';
import { useState } from 'react';

function App() {
	const [body, setBody] = useState("");

	const parseIt = (e) => {
		e.preventDefault();

		try {
			console.log(luaparse.parse(body));
		} catch (e) {
			console.error(e);
		}		
	};

	return <section className="section">
		<div className="container">
			<h1 className="title">
				Homeworld Script Editor!
			</h1>
			<form>
				<textarea className="textarea" placeholder="Put your script here..." onChange={(e) => setBody(e.target.value)} value={body}></textarea>
				
				<button className="button is-primary" onClick={parseIt}>Parse!</button>
			</form>
		</div>
	</section>
}

export default App;
