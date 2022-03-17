function Subscribe() {
    return (
        <div className="container px-6 md:px-0 flex flex-col mb-24" id="subscribe">
            <div className='text-center mb-12 md:mb-24'>
                <h1 className='font-bold text-4xl mb-6'>Deviens bêta testeur 🚀</h1>
                <p className='w-2/3 md:w-2/4 mx-auto text-gray-400'>Entre ton email et obtiens toutes les mises à jour en avant tout le monde.</p>
            </div>

            <div className="flex flex-col gap-4 items-center">
                <div className="md:w-1/4">
                    <input type="text" id="firstName" name="firstName" placeholder="Entrer votre prénom" className="bg-slate-100 border p-4 w-full rounded-md" />
                </div>

                <div className="md:w-1/4">
                    <input type="email" id="email" name="email" placeholder="Entrer votre email" className="bg-slate-100 border p-4 w-full rounded-md" />
                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Je m'inscris" className="bg-primary-color text-white p-4 w-full md:w-auto rounded-md cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Subscribe;