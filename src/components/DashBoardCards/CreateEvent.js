import React from 'react'
import '../../styles/DashBoardCardsCSS/CreateEvent.css';

export default function CreateEvent() {
  return (
    // Note Here we are useing AttendEvent CSS
    <div className='CreateEventContainer'>
     <div>
    <h3>Add Title Here - This is an input box</h3>
  </div>
  <div>
    <p>
    Add Description Here - this is a textArea element
    </p>
  </div>

  <div>
  <form>
    <div className='TablesContainer'>
        <table>
            <tbody className='tbs'>
                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Location</div></td>
                    <td><input type="text" id="location" name="location" className='upperInputCSS' required 
                    placeholder='Ranjangaon'/></td>
                </tr>
                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Date</div></td>
                    <td><input type="text" id="Date" name="Date" className='upperInputCSS' required 
                    placeholder='25th June 2024, Tuesday'/></td>
                </tr>
                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Time</div></td>
                    <td><input type="time" id="time" name="time" className='upperInputCSS' required 
                    placeholder='time'/></td>
                </tr>

                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Duration</div></td>
                    <td><input type="text" id="Duration" name="Duration" className='upperInputCSS' required 
                    placeholder='7 Hours'/></td>
                </tr>

                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Last Date to Enroll</div></td>
                    <td><input type="text" id="DateAndTime" name="DateAndTime" className='upperInputCSS' required 
                    placeholder='20th June 2024, Thursday'/></td>
                </tr>

                <tr className='Tables-fds'>
                    <td><div className='tdLabels'>Cost</div></td>
                    <td><input type="text" id="Cost" name="Cost" className='upperInputCSS' required 
                    placeholder='INR 599/-'/></td>
                </tr>
            </tbody>
        </table>
    </div>
</form>
  </div>
  <div className='NeedHelpContainer'>
<div className='BtnNeedHelps'>
  <button type="button" className='CreateEventBtn'>CALL NOW</button>
  {/* <button type="button" className='CallNowButton'>ENROLL NOW</button> */}
</div>
  </div>
    </div>
  )
}
