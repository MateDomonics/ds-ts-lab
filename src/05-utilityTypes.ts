import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass, FriendsAndColleagues } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {phone: '08712345', dob: new Date("1998-10-22")}))

function secureFindFriends(friends: Friend[], criteria: (f: Friend) => boolean): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
}

let result = secureFindFriends(friends, (f: Friend) => f.age < 30)
console.log(result)

function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
console.log(generateEventPass(colleagues.current[0]));

//Create a new colleague to have a common colleague and friend
const colleague4: Colleague = {
    name: "Cormac Farrell",
    department: "Computing",
    contact: {
      email: "cfarrell@company.com",
      extension: 166,
    },
}
colleagues.current.push(colleague4)

function intersection(friends: Friend[],colleagues: Colleague[]): FriendsAndColleagues[] {
    let result: FriendsAndColleagues[] = []
    friends.reduce((res, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // Colleague is also a Friend
        let friendsAndColleagues: FriendsAndColleagues = {
            name: colleague.name,
            age: friend.age,
            contact: {email: colleague.contact.email, extension: colleague.contact.extension}
        }
        result.push(friendsAndColleagues)
      }
      return res;
    }, result);
    return result;
}

console.log(intersection(friends, colleagues.current));