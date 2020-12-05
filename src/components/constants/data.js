import {faShip,faAddressBook,faCalculator,faCoffee,faBomb,faSkull,faTrain,faDrum,faBriefcase,faTree} from '@fortawesome/free-solid-svg-icons'


export const miconarr = [faShip,faAddressBook,faShip,faCoffee,faBomb,faSkull,faTrain,faDrum,faCalculator,faAddressBook,faCalculator,faCoffee,faBomb,faSkull,faTrain,faDrum]
const eicon = [faShip,faAddressBook,faCalculator,faSkull,faBomb,faBomb,faCoffee,faAddressBook,faCalculator,faCoffee,faShip,faSkull]
export const hiconarr = [faTree,faAddressBook,faDrum,faCalculator,faCoffee,faAddressBook,faBomb,faSkull,faBriefcase,faTree,faShip,faCalculator,faCoffee,faTrain,faBomb,faSkull,faTrain,faDrum,faBriefcase,faShip]
export const escore=6;
export const mscore=8;
export const hscore=10;
export const ewidth="520px"
export const mwidth="620px"
export const hwidth="820px"
const shuffle=(arr)=>{
    let ctr = arr.length;
    let temp;
    let index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
export const eiconarr = shuffle(eicon)





