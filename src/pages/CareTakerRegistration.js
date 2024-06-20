import React from 'react';
import '../styles/UserRegistration.css';
import '../styles/CareTakerRegistration.css';
export default function CareTakerRegistration() {
  return (
    <div className='UserRegistration-Container'>
      <h2 className='Heading'>Join The Caretakers: Make a Difference Today!</h2>
      <form>
        <div className='TablesContainer'>
          <div className='Tables-fds'>
            <table>
              <tbody>
                <tr>
                  <td><div className='tdLabbless'>Location</div></td>
                  <td><input type="text" id="location" name="location" className='upperInputCSS' required placeholder='One Word'/></td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Mobile No</div></td>
                  <td><input type="text" id="mobileNo" className='upperInputCSS' name="mobileNo" required placeholder='+(91) 123-456-7890' /></td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Age</div></td>
                  <td><input type="number" id="age" className='upperInputCSS' name="age" required placeholder='18-50 years'/></td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Gender</div></td>
                  <td>
                    <select id="gender" className='upperInputCSS' name="gender" required>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Aadhar Card Image</div></td>
                  <td><input type="file" className='upperInputCSS' id="aadharCard" name="aadharCard" accept="image/*" required /></td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Work Experience</div></td>
                  <td><input type="number" id="workExperience" className='upperInputCSS' name="workExperience" required placeholder='in Years'/></td>
                </tr>
                <tr>
                  <td><div className='tdLabbless'>Service Provided</div></td>
                  <td><input type="text" id="serviceProvided" className='upperInputCSS' name="serviceProvided" required placeholder='separate services by “,”'/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <tr>
              <td colSpan="2"  style={{ flexDirection: "row-reverse",
    /* text-align: left; */
    display: "flex",
               }}>
                <button type="submit" className='submit-Btn'><h2>Submit</h2></button>
              </td>
            </tr>
          
        </div>
      </form>
    </div>
  );
}
