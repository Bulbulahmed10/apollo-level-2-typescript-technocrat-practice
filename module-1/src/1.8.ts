// destructuring
const userInfo = {
  id: 435,
  name: {
    firstName: "John",
    middleName: "eanmin",
    lastName: "doe",
  },
  contactNo: "01457899526",
  address: "Uganda",
};

const {contactNo, name: {middleName}} = userInfo


// array destructuring 

const myFriends = [
    'chandler', 'joey','ross', 'rachel', 'monica', 'phoebe'
]
const [, , bestFriend, ...restOfFriend] = myFriends