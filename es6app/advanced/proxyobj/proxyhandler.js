class UserInfo {
    firstName = 'Mahesh';
    lastName = 'Sabnis';
    Email = 'mahesh.sabnis@msit.com';
    _UerSecret = '*********';
    Occupation = 'Self-Employed';
}

// lets implement behavior in the handler to prevent an access of _UserSecret
// also prevent the updates in Email value
const handler = {
    // target is the target object
    // prop is the property from the target object
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('Access is denied');
        } else {
            // read the value of property from the target object  
            let val = target[prop];
            return val;
        }
    },
     // target is the target object
    // prop is the property from the target object
    // val is the value to be written in property
    set(target, prop, val){
        if(prop === 'Email') {
            throw new Error('This property cannot be changes');
        } else {
            target[prop] = val;
            return true;
        }
    },
    ownKeys(target) {
        let keys = Object.keys(target);
        // return all properties except those starts from _
        let props = keys.filter((p,i)=>{
            return p[0]!== '_'
        });
        return props;
    },
    ownValues(target,prop){
        // return value for each property
         let values = target[prop];
         return values;   
    }
};
const obj = new UserInfo();
const proxy = new Proxy(obj,handler);



function consumer(){

    console.log(Object.keys(proxy)); // call ownKeys()
    console.log(Object.values(proxy)); // call ownValues

     console.log(`First Name = ${proxy.firstName}`);
     console.log(`Last Name = ${proxy.lastName}`);
     console.log(`Email = ${proxy.Email}`);
     console.log(`Occupation = ${proxy.Occupation}`);
    // console.log(`Secret = ${proxy._UerSecret}`); // Access Denied
    proxy.firstName = 'Mr. Mahesh';
    console.log(`Updated First Name = ${proxy.firstName}`);
//    proxy.Email = 'mrmahesh.sabnis@msit.com'; // Access Denied
 //   console.log(`Email = ${proxy.Email}`); 

   

    
}

consumer();