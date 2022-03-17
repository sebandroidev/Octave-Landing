import { images } from '../../constants'
import './Usage.scss'
import { motion } from 'framer-motion'

function Usage() {

    const tutorialData = [
        {
            "title": "Télécharger",
            "image": `${images.install}`,
            'description': 'Rendez-vous sur Playstore pour installer Octave.',
        },
        {
            "title": "Accorder les permissions",
            "image": `${images.permission}`,
            'description': 'Accordez les permissions dès le lancement de l\'application. Cela ne se fait qu\'une seule fois.',
        },
        {
            "title": "Savourer",
            "image": `${images.use}`,
            'description': 'Voila! Maintenant tirez parti de votre application. Payez votre premier forfait sans taper un seul code.',
        },
    ];
    return (
        <div className='container pt-24 md:pt-64' id='tutoriel'>
            <div className='text-center mb-12 md:mb-24'>
                <h1 className='font-bold text-4xl mb-6'>Comment ca fonctionne ?</h1>
                <p className='w-2/3 md:w-2/4 mx-auto text-gray-400'>Portée sur la facilité d'utilisation et l'intuitivité, prendre en main Octave se fait en seulement 3 étapes.</p>
            </div>
            <div className='flex justify-around items-center md:items-start flex-col md:flex-row md:flex-wrap'>
                {
                    tutorialData.map((item, index) => (
                        <motion.div
                            whileInView={ { opacity: 1 } }
                            whileHover={ { scale: 1.1 } }
                            transition={ { duration: 0.5, type: "tween" } }
                            key={ item.title + index }
                            className='w-64 text-center m-8'
                        >
                            <div className='p-6 bg-slate-100 rounded-xl'>
                                <img src={ item.image } alt={ item.title } className='h-36 w-100% object-fill' />
                            </div>
                            <h2 className='text-lg font-semibold mt-6 md:mt-12'>{ item.title }</h2>
                            <p className='text-gray-500 text-xs mt-2 leading-5'>{ item.description }</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

export default Usage;