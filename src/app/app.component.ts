import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'health-care-system';
  disableLoginButtons = false;
  showImage = true;
  patientPrescription = '';
  loginType = '';
  dataType = '';
  treatments = [
    {
      name : 'Blood Pressure',
      amount: '300',
      currency: 'CAD'
    },
    {
      name : 'Haemoglobin',
      amount: '400',
      currency: 'CAD'
    },
    {
      name : 'Diabetes',
      amount: '1000',
      currency: 'CAD'
    },
    {
      name : 'ECG',
      amount: '1300',
      currency: 'CAD'
    }
  ];
  patientsList = [
    {
      firstName: 'Pranav',
      lastName: 'Aneja',
      age: '24',
      sex: 'Male',
      id: 'D1234'
    },
    {
      firstName: 'Puneet',
      lastName: 'Aggarwal',
      age: '24',
      sex: 'Male',
      id: 'F1235'
    },
    {
      firstName: 'Leslie',
      lastName: 'Williams',
      age: '24',
      sex: 'Female',
      id: 'E1236'
    },
    {
      firstName: 'Aditi',
      lastName: 'Sharma',
      age: '23',
      sex: 'Female',
      id: 'D1237'
    },
    {
      firstName: 'Shreya',
      lastName: 'Sood',
      age: '22',
      sex: 'Female',
      id: 'M1238'
    },
    {
      firstName: 'Mishika',
      lastName: 'Arora',
      age: '25',
      sex: 'Female',
      id: 'S1231'
    },
    {
      firstName: 'Rishi',
      lastName: 'Trehan',
      age: '24',
      sex: 'Male',
      id: 'S1335'
    }
  ]
  getPrescription(event: any) {
    sessionStorage.setItem('prescription', event.target.value);
  }
  openLoginPhysician() {
    this.loginType = 'physician';
    this.showImage = false;
  }
  openLoginPatient() {
    this.loginType = 'patient';
    this.showImage = false;
  }
  showPhysiciansDetails() {
    this.loginType = '';
    this.disableLoginButtons = true;
    this.dataType = 'physician';
  }
  showPatientsDetails() {
    this.loginType = '';
    this.patientPrescription = sessionStorage.getItem('prescription');
    this.disableLoginButtons = true;
    this.dataType = 'patient';
  }
}
