import React from 'react';
import '../../styles/DashBoardCardsCSS/Medication.css'
const medications = [
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  },
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  },
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  },
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  },
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  },
  {
    name: "ABC",
    dosage: "125mg",
    frequency: "Morning-Noon-Night"
  }

];

export default function Medication() {
  return (
    <div>
      <div className="MedicationUpper">
        <div className="Ordermedicine">Order Medicine Here</div>
        <div className='Meds'>
          <div className="Med">JanAushadi</div>
          <div className="Med">MedPlus</div>
          <div className="Med">Wellness</div>
        </div>
      </div>
      <div className='MainLowerMedi'>
      {medications.map((med, index) => (
         
        <div className="MedicationLower" key={index}>
         
          <div>
            <div className="NameMed">Name</div>
            <div className="DosageMed">Dosage</div>
            <div className="FrequencyMed">Frequency</div>
          </div>
          <div>
            <div className="MedicineName">{med.name}</div>
            <div className="MedicineDose">{med.dosage}</div>
            <div className="MedicineTime">{med.frequency}</div>
          </div>
        </div>
      
      ))}
        </div>
    </div>
  );
}
