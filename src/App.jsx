import { Modal } from './components/ui';
import { ProviderModal } from './contexts';
import { AboutMe, Just, Services } from './layouts';
import { Footer, Header } from './templates';

function App() {
	return (
		<ProviderModal>
			<Header />
			<main className=' bg-light text-dark'>
				<AboutMe />
				<img
					src='/images/waveGray.svg'
					alt=''
					className=' relative -bottom-2 '
				/>
				<Services />
				<img
					src='/images/waveGray.svg'
					alt=''
					className='rotate-180 relative -top-2 '
				/>
				<Just />
			</main>
			<Footer />
			<Modal />
		</ProviderModal>
	);
}

export default App;
