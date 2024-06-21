
import { Link } from 'react-router-dom';
import { CareTakerData } from '../../Data/Data';


import { HiredCareTaker } from './HiredCareTaker';

export const Profile = () => {
    return (
        <>
            <AboveSection user_data={CareTakerData[0]}/>
            <Navbar />
            {/* <AtteEvents/> */}
            <HiredCareTaker/>
        </>
    )
}

export const AboveSection = ({ user_data }) => {
    return (
        <>
            <div className='flex justify-between m-4'>
                {/* img and data */}
                <div className='flex items-center gap-3'>
                    {/* img */}
                    <div className=''>
                        <img src={user_data.picture_url } alt="tourism 1" className=" aspect-w-2 aspect-h-2 object-cover" />
                    </div>
                    {/* data */}
                    <div className=''>
                        <h4 className=''>{user_data.first_name} {user_data.last_name}</h4>
                        <h4 className=''>{user_data.user_name}</h4>
                        <h4 className=''>{user_data.location}</h4>
                    </div>
                </div>
                {/* two buttons */}
                <div className=''>
                    <div className='mb-3'>
                        <button className="bg-yellow-400 hover:bg-yellow-500 flex p-2 text-center rounded-xl text-white relative">
                            <span className='ms-1'>Edit Profile</span>
                        </button>
                    </div>

                    <div className='mb-3'>
                        <button className="bg-yellow-400 hover:bg-yellow-500 flex p-2 rounded-xl text-white relative">
                            <span className='ms-1'>My Medication</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <nav className="bg-gray-500 p-1">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-1 justify-between space-x-4">
                    <Link 
                        to="/" 
                        className=" text-2xl font-semibold flex-1 text-center hover:bg-[#69D487] p-2 rounded-md active:bg-[#69D487]"
                    >
                        Hired Caretakers
                    </Link>
                    <Link 
                        to="/about" 
                        className=" text-2xl font-semibold flex-1 text-center hover:bg-[#69D487] p-2 rounded-md active:bg-[#69D487]"
                    >
                        Attended Events
                    </Link>
                </div>
            </div>
        </nav>
    );
}

