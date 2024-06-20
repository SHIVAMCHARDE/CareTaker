import React from 'react';
import '../styles/UserRegistration.css';
export default function UserRegistration() {
  return (
    <div className='UserRegistration-Container'>
      <h2 className='Heading'>Join Old Citizens: Embrace a Community That Cares!</h2>
      <form>
        <table>
          <tbody>
            <div className='TablesContainer'>
          <div className='Tables-fds'>
            <tr>
              <td><div className='tdLabbles'>Location</div></td>
              <td><input type="text" id="location" name="location" className='upperInputCSS' required /></td>
            </tr>
            <tr>
              <td><div className='tdLabbles'>Mobile No</div></td>
              <td><input type="text" id="mobileNo" className='upperInputCSS' name="mobileNo" required /></td>
            </tr>
            <tr>
              <td><div className='tdLabbles'>Age</div></td>
              <td><input type="number" id="age" className='upperInputCSS' name="age" required /></td>
            </tr>
            <tr>
              <td><div className='tdLabbles'>Gender</div></td>
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
              <td><div className='tdLabbles'>Aadhar Card Image</div></td>
              <td><input type="file" className='upperInputCSS' id="aadharCard" name="aadharCard" accept="image/*" required /></td>
            </tr>
          </div >
          <div className='UserRegistration-LowerSection flex'>
            <div className='secondcontainer'>
            <tr>
              <td><div className='secondTable'><h3 className='headingtable'>Medical History</h3></div></td>
              <td><div className='plus'><h3 className='pluss'>+</h3></div></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Condition</div></td>
              <td><input type="text" className='lowerInputCSS' name="condition" required /></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Diagnosis Date </div></td>
              <td><input type="date" className='lowerInputCSS' name="diagnosisDate" required /></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Treatment </div></td>
              <td><input type="text" className='lowerInputCSS' name="treatment" required /></td>
            </tr>
            </div>

            <div className='secondcontainer'>
            <tr>
              <td><div className='secondTable'><h3 className='headingtable'>Medication</h3></div></td>
              <td><div className='plus'><h3 className='pluss'>+</h3></div></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Name</div></td>
              <td><input type="text" className='lowerInputCSS'  name="name" required /></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Dose</div></td>
              <td><input type="text" className='lowerInputCSS' name="dose" required /></td>
            </tr>
            <tr>
              <td><div className='secondTablelable'>Frequency </div></td>
              <td><input type="number" className='lowerInputCSS' name="Frequency" required /></td>
            </tr>
            </div>

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
          </tbody>
        </table>
      </form>
    </div>
  );
}
