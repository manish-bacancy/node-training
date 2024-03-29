const trainees = {
    ROR: [
      {
        _id: 1,
        fullName: 'Aayush Adeshara',
        college: 'Government Engineering College, Gandhinagar',
        technologyAssigned: 'ROR'
      },
      {
        _id: 11,
        fullName: 'Kalpin Gajjar',
        college: 'GEC, Gandhinagar',
        technologyAssigned: 'ROR'
      },
      {
        _id: 12,
        fullName: 'Khushbu Rajgor',
        college: 'LJ institute of Computer Applications',
        technologyAssigned: 'ROR'
      },
      {
        _id: 18,
        fullName: 'Pranav Dodiya',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'ROR'
      },
      {
        _id: 19,
        fullName: 'Priyanka Manna',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'ROR'
      },
      {
        _id: 21,
        fullName: 'Raj Panchal',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'ROR'
      },
      {
        _id: 24,
        fullName: 'Smit Akhani',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'ROR'
      },
      {
        _id: 26,
        fullName: 'Vaisvik Chaudhary',
        college: 'Nirma Uniersity',
        technologyAssigned: 'ROR'
      },
      {
        _id: 28,
        fullName: 'Vinayak Varsani',
        college: 'BHGCET Rajkot',
        technologyAssigned: 'ROR'
      }
    ],
    DevOps: [
      {
        _id: 2,
        fullName: 'Akshit Modi',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'DevOps'
      }
    ],
    NodeJS: [
      {
        _id: 3,
        fullName: 'Apexa Patel',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'NodeJS'
      },
      {
        _id: 9,
        fullName: 'Jaykumar Bhatt',
        college: 'Marwadi University, Rajkot',
        technologyAssigned: 'NodeJS'
      },
      {
        _id: 13,
        fullName: 'Krushit Dudhat',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'NodeJS'
      },
      {
        _id: 14,
        fullName: 'Lav Panchal',
        college: 'K S School of business management',
        technologyAssigned: 'NodeJS'
      },
      {
        _id: 15,
        fullName: 'Manish Rathod',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'NodeJS'
      },
      {
        _id: 27,
        fullName: 'Vinayak Chavan',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'NodeJS'
      }
    ],
    Flutter: [
      {
        _id: 4,
        fullName: 'Bhargav Dobariya',
        college: 'VVPEC, Rajkot',
        technologyAssigned: 'Flutter'
      }
    ],
    VueJS: [
      {
        _id: 5,
        fullName: 'Chetan Punani',
        college: 'LDCE, Navrangpura',
        technologyAssigned: 'VueJS'
      },
      {
        _id: 8,
        fullName: 'Ishita Shah',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'VueJS'
      },
      {
        _id: 10,
        fullName: 'Jemis Maru',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'VueJS'
      },
      {
        _id: 17,
        fullName: 'Mohit Shah',
        college: 'LJIET, Sarkhej',
        technologyAssigned: 'VueJS'
      },
      {
        _id: 23,
        fullName: 'Rutvik Patel',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'VueJS'
     }
    ],
    UI_UX: [
      {
        _id: 6,
        fullName: 'Dhruval Mayavanshi',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'UI/UX'
      },
      {
        _id: 20,
        fullName: 'Rahul Shah',
        college: 'K S School Of Business Management',
        technologyAssigned: 'UI/UX'
      }
    ],
    ReactNative: [
      {
        _id: 7,
        fullName: 'Divyansh Bhatnagar',
        college: 'ADIT, Anand',
        technologyAssigned: 'ReactNative'
      }
    ],
    ReactJS: [
      {
        _id: 16,
        fullName: 'Meet Acharya',
        college: 'TIMSCDR',
        technologyAssigned: 'ReactJS'
      },
      {
        _id: 22,
        fullName: 'Rohan Deshpande',
        college: 'VGEC, Chandkheda',
        technologyAssigned: 'ReactJS'
      },
      {
        _id: 25,
        fullName: 'Sumit Kadiya',
        college: 'Government Engineering college',
        technologyAssigned: 'ReactJS'
      }
    ]
}

const generateArr = obj => {
  for(key in obj){
    eval(key + "=" + JSON.stringify(obj[key]) + ";");
  }
}

generateArr(trainees)

console.log("ROR Trainees : ", ROR);
console.log("DevOps Trainees : ", DevOps);
console.log("Flutter Trainees : ", Flutter);
console.log("VueJS Trainees : ", VueJS);
console.log("UI_UX Trainees : ", UI_UX);
console.log("ReactNative Trainees : ", ReactNative);
console.log("ReactJS Trainees : ", ReactJS);