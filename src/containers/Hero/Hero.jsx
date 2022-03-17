import { images } from '../../constants/index'
import './Hero.scss'

function Hero() {
    return (
        <div className="bg-slate-100 container flex flex-col-reverse md:flex-row hero">
            <div className='flex-1 flex flex-col gap-y-10 justify-center items-center md:items-start hero-left-div'>
                <h2 className=''>Pourquoi Octave? 🤔</h2>
                <p className='text-gray-500 leading-8'>Parce que c'est harassant de mémoriser et de saisir des codes USSD kilométriques pour nos tâches quotidiennes😮‍💨. Parce que vous êtes fatigués d'oublier des codes chaques jours et des les rechercher à nouveau.</p>
                <div className='mt-5'>
                    <a href="#download"><img src={ images.downloadButton } alt="Download button" className='h-14 md:h-16' /></a>
                </div>
            </div>
            <div className='hero-bg-image flex-1 grow'>
                <img src={ images.homeMockup } alt="Octave app home" className='mockup-image' />
            </div>
        </div>
    );
}

export default Hero;