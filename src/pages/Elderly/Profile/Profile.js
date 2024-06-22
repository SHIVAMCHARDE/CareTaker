import React,{useState} from 'react'
import { CareTakerData } from '../../../Data/Data';
import { HiredCareTaker } from './HiredCareTaker';
import { AtteEvents } from './AtteEvents';

export const Profile = () => {
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (option) => {
      setActiveOption(option);
    };
  
    const renderContent = () => {
      switch (activeOption) {
        case 'Caretaker':
          return <HiredCareTaker/>
          ;
        case 'Events':
          return <AtteEvents/>;
        default:
          return <HiredCareTaker/>
      }
    };
    return (
        <>
            <AboveSection user_data={CareTakerData[0]}/>
            <Navbar  handleOptionClick={handleOptionClick}/>
            <div>{renderContent()}</div>
        </>
    )
}

export const AboveSection = ({ user_data }) => {
    return (
        <>
            <div className='flex justify-between m-4'>
                {/* img and data */}
                <div className='flex items-center gap-5'>
                    {/* img */}
                    <div className=''>
                        <img src={user_data.picture_url } alt="tourism 1" className=" w-40 h-40 object-cover" />
                    </div>
                    {/* data */}
                    <div className='ms-3'>
                        <h4 className='my-2 text-xl '>{user_data.first_name} {user_data.last_name}</h4>
                        <h4 className='my-2 text-xl '>{user_data.user_name}</h4>
                        <h4 className='my-2 text-xl '>{user_data.location}</h4>
                    </div>
                </div>
                {/* two buttons */}
              <div className='me-20 '>
                  <div className='my-5'>
                      <button className="bg-yellow-400  hover:bg-yellow-500 flex p-2  rounded-xl text-white w-36 justify-center relative">
                          <span className='ms-1'>Edit Profile</span>
                      </button>
                  </div>

                  <div className='my-5'>
                      <button className="bg-yellow-400 hover:bg-yellow-500 flex p-2 rounded-xl text-white w-36 justify-center relative">
                          <span className='ms-1'>My Medication</span>
                      </button>
                  </div>
              </div>
            </div>
        </>
    )
}

const Navbar = ({handleOptionClick}) => {
    return (
        <nav className="bg-gray-300 p-1 mx-1 rounded-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-1 justify-between space-x-4">
                    <div
                        onClick={() => handleOptionClick('Caretaker')}
                        className=" text-2xl font-semibold flex-1 text-center hover:bg-[#69D487] p-2 rounded-md active:bg-[#69D487]"
                    >
                        Hired Caretakers
                    </div>
                    <div 
                        onClick={() => handleOptionClick('Events')}
                        className=" text-2xl font-semibold flex-1 text-center hover:bg-[#69D487] p-2 rounded-md active:bg-[#69D487]"
                    >
                        Attended Events
                    </div>
                </div>
            </div>
        </nav>
    );
}