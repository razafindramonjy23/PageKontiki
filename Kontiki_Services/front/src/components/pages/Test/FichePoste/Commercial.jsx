import React from 'react'
import {Link} from 'react-router-dom'

const Commercial = () => {
    return (
        <>
            <div className="py-10 bg-gray-100">
                {/* element decoratif */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute bg-blue-500 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-0 rounded-full -left-4 w-72 h-72 bg-amber-300 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bg-blue-400 rounded-full -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-5xl p-6 mx-auto bg-white rounded-lg shadow-lg">

                    <div className="relative mb-8 text-center">
                        <h1 className="text-4xl font-bold text-blue-950 md:text-5xl">Département Commércial</h1>
                        <div className="flex justify-center mt-4">
                            <div className="w-32 h-2 rounded-full bg-amber-400"></div>
                        </div>
                        <p className="mt-4 text-lg text-blue-900">
                            Département Commércial
                        </p>
                    </div>

                    {/* Description du poste */}
                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-primary">Fiche de Poste</h2>
                        <p className="text-gray-700">
                            Kontiki Service Solutions recrute un Responsable en
                            Marketing...
                        </p>
                    </div>


                    <div className="col-span-2 text-center">

                        <Link to="/contact">
                            <button
                                type="submit"
                                className="px-6 py-2 text-white transition rounded-lg bg-primary hover:bg-blue-800"
                            >
                                Postuler
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Commercial