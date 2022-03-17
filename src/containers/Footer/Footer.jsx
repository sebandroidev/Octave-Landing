import { images } from '../../constants'

function Footer() {
    return (
        <div className="bg-primary-color text-white">
            <div className="container flex justify-between py-3">
                <p>Powered by ENNA GROUPE</p>
                <p>Designed by <a href="https://www.instagram.com/devbyseb/">Sébastien NOGBEDJI</a></p>
                <div className='flex flex-row gap-4'>
                    <a href="https://wa.link/bjzff2"><img src={ images.whatsapp } alt="whatsapp" className='h-5' /></a>
                    <a href="https://instagram.com/devbyseb"><img src={ images.instagram } alt="instagram" className='h-5' /></a>
                    <a href="https://github.com/sebandroidev"><img src={ images.github } alt="github" className='h-5' /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;