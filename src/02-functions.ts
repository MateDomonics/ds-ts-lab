import {Friend, Colleague} from './myTypes'
import {friends, colleagues} from "./01-basics"

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]) : string[] {
    let fOlder: string[] = []
    for (let index = 0; index < friends.length; index++) {
        friends[index].age += 1;
        fOlder.push(`${friends[index].name} is now ${friends[index].age}`)
    }
    return(fOlder)
} 

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    let newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension += 1
        }
    }
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

