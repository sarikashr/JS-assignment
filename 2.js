
const students = [
    {
        name: "Khabib Shrestha",
        address: {
            permanent: "Dagestan, Russia",
            temporary: "Mid-Baneshwor, Kathmandu"
        },
        phone: {
            mobile: "9860504398",
            home: "5576844"
        },
        email: "khabib@gmail.com"
    },
    {
        name: "Manny Poudel",
        address: {
            permanent: "General Santos, Philippines",
            temporary: null
        },
        phone: {
            mobile: "9801244554",
            home: null
        },
        email: "manny@yahoo.com"
    },
    {
        name: "Connor Maharjan",
        address: {
            permanent: null,
            temporary: "Khasibazar, Kathmandu"
        },
        phone: {
            mobile: null,
            home: "5564990"
        },
        email: "connor@hotmail.com"
    },
    {
        name: "Buakaw Rajbanshi",
        address: {
            permanent: "Pattaya, Thailand",
            temporary: "Pepsicola, Bhaktapur"
        },
        phone: {
            mobile: "9841546433",
            home: "4428767"
        },
        email: "r.buakaw@gmail.com"
    },
    {
        name: "Paddy Pahadi",
        address: {
            permanent: undefined,
            temporary: "Mid-Thimi, Bhaktapur"
        },
        phone: {
            mobile: null,
            home: "4456477"
        },
        email: "paddy@protonmail.ch"
    }
];


console.log("a. Khabib’s home phone number:", students[0].phone.home);
console.log("b. Manny’s Permanent address:", students[1].address.permanent);
console.log("c. Connor’s temporary address:", students[2].address.temporary);
console.log("d. Buakaw’s Temporary address:", students[3].address.temporary);
console.log("e. Buakaw’s email:", students[3].email);
console.log("f. Paddy’s permanent address:", students[4].address.permanent);
console.log("g. Connor’s Permanent:", students[2].address.permanent);
