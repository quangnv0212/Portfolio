import './App.css';
import { NavBar } from '~/components/NavBar/NavBar';
import { Banner } from '~/components/Banner/Banner';
import { Skills } from '~/components/Skills/Skills';
import { Projects } from '~/components/Projects/Projects';
import { Contact } from '~/components/Contact/Contact';
import { Footer } from '~/components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
