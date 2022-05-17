import './styles.css';

import About from './About/About';
import MaterialSelection from './MaterialSelection/MaterialSelection';
import Mounting from './Mounting/Mounting';
import Production from './Production/Production';


export default function Info() {
    return (
        <section className="main-info">
            <div className="main-info__row">
                <About />
            </div>
            <div className="main-info__row">
                <Production />
            </div>
            <div className="main-info__row">
                <MaterialSelection />
            </div>
            <div className="main-info__row">
                <Mounting />
            </div>
        </section>
    );
}
