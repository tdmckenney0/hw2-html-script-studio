import luaparse from 'luaparse';
import { useState, useEffect } from 'react';

function App() {
	const [body, setBody] = useState("");
	const [parsed, setParsed] = useState(null);

	useEffect(() => {
		console.log(parsed);
	});

	const parseIt = (e) => {
		e.preventDefault();

		try {
			setParsed(luaparse.parse(body, {
				comments: false
			}));
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
