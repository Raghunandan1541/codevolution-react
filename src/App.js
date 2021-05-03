import './App.css';

import './appStyles.css';
import styles from './appStyles.module.css';
// import MainComponent from './component/MainComponent';

function App() {
	return (
		<div className="App">
			<h1 className='error' >Error</h1>
			<h1 className={styles.success} >Success</h1>
			
			
			{/* <MainComponent /> */}
		</div>
	);
}

export default App;
