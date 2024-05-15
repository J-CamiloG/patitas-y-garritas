'use client'
import { useState } from "react";

interface patients {
    name: '',
    weight: '',
    race: '',
    patientConsition: '',
    firstNameProprietary: '',
    lastNameProprietary: '',
    phoneNameProprietary: '',
    emailNameProprietary: '',
}

export default function Admit() {
    const dataBase: patients[] = [];
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});


    // homework for tomorrow ---------------------->
    function handleInput(evento: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = evento.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(inputValues); 
    }
    //<--------------------
    function handleSubmit() {
        
        const newPatient = {
            name: inputValues.namePatient,
            weight: inputValues.weightPatient,
            race: inputValues.racePatient,
            patientConsition: 'true',
            fristNamePropietary: inputValues.firstNamePropitary,
            lastNamePropietary: inputValues.lastNamePropitary,
            phoneNamePropietary: inputValues.phonePropitary,
            emailNamePropietary: inputValues.emailPropitary,
        };
        //pendiente error de typescript por corregir
        dataBase.push(newPatient);
        console.log(dataBase);
        
        
    }
    return(
        
        <section className="w-full h-screen flex justify-center items-center">
            <form className="max-w-md mx-auto" >
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={handleInput}
                        type="email" 
                        name="namePatient" 
                        id="floating_email" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " 
                        required 
                    />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Patient</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={handleInput}
                        type="text" 
                        name="weightPatient" 
                        id="floating_password" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={handleInput}
                        type="text" 
                        name="racePatient" 
                        id="floating_repeat_password" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Race</label>
                </div>
                {/* <div className="relative z-0 w-full mb-5 group">
                    <label  className="block mb-2 text-sm font-medium text-gray-900">Patient's Condition</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Stable</option>
                        <option>Serious</option>
                    </select>
                </div> */}
                <h2 className="">Proprietary data</h2>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            onChange={handleInput}
                            type="text" 
                            name="firstNamePropitary" 
                            id="floating_first_name" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name Proprietary</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            onChange={handleInput}
                            type="text" 
                            name="lastNamePropitary" 
                            id="floating_last_name" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name Proprietary</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            onChange={handleInput}
                            type="tel" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                            name="phonePropitary" 
                            id="floating_phone" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number Proprietary</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            onChange={handleInput}
                            type="text" 
                            name="emailPropitary" 
                            id="floating_company" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Proprietary</label>
                    </div>
                </div>
                <button 
                    onClick={handleSubmit}
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Register
                </button>
            </form>
        </section>
    )
}