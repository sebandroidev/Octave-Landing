import { images } from '../../constants'

function Pricing() {
    const pricingFeatures = ["Obtention de l'application", "Exécution de codes USSD", "Création de codes personnalisés"];
    return (
        <div className="container pt-48 md:pt-64 flex flex-col" id="tarifs">
            <div className='text-center mb-12 md:mb-24'>
                <h1 className='font-bold text-4xl mb-6'>Tarifs</h1>
                <p className='w-2/3 md:w-2/4 mx-auto text-gray-400'>Voici combien vous devez débourser pour obtenir l'application.</p>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="bg-slate-100 p-8 rounded-2xl">
                    <div className='flex items-center justify-between'>
                        <h2 className="text-lg font-semibold text-gray-700">Offre unique</h2>
                        <p className='text-primary-color font-bold uppercase'>Gratuit</p>
                    </div>
                    <hr className="my-4" />
                    <div className='flex flex-col gap-4'>
                        {
                            pricingFeatures.map((item, index) => (
                                <div key={ item + index }>
                                    <div className="flex flex-row gap-3 items-center">
                                        <img src={ images.check } alt="check" className='h-6' />
                                        <p>{ item }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr className='mt-8 mb-4' />
                    {/* Download Button */ }
                    <a href="#subscribe" className='bg-primary-color text-white w-full flex py-4 px-4 justify-center rounded-lg hover:scale-90 transition ease-in-out delay-100'>Télécharger</a>
                </div>
            </div>
        </div>
    );
}

export default Pricing;