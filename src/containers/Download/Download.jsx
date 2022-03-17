import { images } from '../../constants'
import './Download.scss';

function Download() {
    return (
        <div className='container flex flex-col gap-24 md:gap-48 items-center'>
            <div className='download-image flex flex-col md:flex-row justify-center'>
                <img src={ images.creditMockup } alt="" className='mockup' />
                {/* Text */ }
                <div className='download-text w-full px-6 md:w-1/3 flex flex-col gap-y-4 md:gap-y-8'>
                    <h2 className='text-4xl font-semibold'>Fonctionnalitées</h2>
                    <p className='text-gray-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis facilis voluptates doloribus libero explicabo harum ratione numquam quam, nam mollitia fuga quasi cumque.</p>
                    <div className='mt-5 md:mt-10 flex justify-center md:justify-start'>
                        <a href="#subscribe" className='bg-primary-color text-white py-4 px-5 rounded-lg hover:bg-purple-700 hover:scale-90 transition ease-in-out delay-100'>Devenir bêta testeur</a>
                    </div>
                </div>
            </div>
            <div className='download-image flex flex-col md:flex-row-reverse justify-center'>
                <img src={ images.forfaitMockup } alt="" className='mockup' />
                {/* Text */ }
                <div className='download-text w-full px-6 md:w-1/3 flex flex-col gap-y-4 md:gap-y-8'>
                    <h2 className='text-4xl font-semibold'>Téléchargement</h2>
                    <p className='text-gray-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis facilis voluptates doloribus libero explicabo harum ratione numquam quam, nam mollitia fuga quasi cumque.</p>
                    <div className='mt-5 md:mt-10 flex justify-center md:justify-start'>
                        <a href="#subscribe" className='hover:scale-90 transition ease-in-out delay-100'><img src={ images.downloadButton } alt="download button" className='h-14' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;