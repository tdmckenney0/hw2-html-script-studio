import luaparse from 'luaparse';
import { useState, useEffect } from 'react';
import StartWeaponConfig from './Models/Wepn/StartWeaponConfig.js';

function App() {
	const [body, setBody] = useState("");
	const [parsed, setParsed] = useState(null);

	useEffect(() => {
		console.log(parsed);

		if (parsed && parsed.body && Array.isArray(parsed.body)) {
			parsed.body.forEach((v, i, a) => {
				if (v.type && v.type == "CallStatement") {
					try {
						console.log({ "StartWeaponConfig": new StartWeaponConfig(v) });
					} catch (e) {
						console.error(e);
					}
				}
			});
		}
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
