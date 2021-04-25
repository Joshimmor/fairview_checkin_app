import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//configuring Database
firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PEOJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
});
//connecting to fireStore
const db = firebase.firestore();

class PostToFireStore{
  constructor( firstName,
    lastName,
    department,
    mask,
    travel ,
    travelUS,
    fever,
    cough,
    shortBreath,
    cold,
    weakness,
    soreThroat,
    smell, 
    work,
    workCOVID,
    date ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.mask = mask;
        this.travel = travel;
        this.travelUS = travelUS;
        this.fever = fever;
        this.cough = cough;
        this.shortBreath = shortBreath;
        this.cold = cold;
       this.weakness = weakness;
        this.soreThroat =soreThroat;
        this.smell = smell;
       this.date = date;
      this.work = work;
      this.workCOVID = workCOVID;
       console.log(this)
    }
        //get Users
        async getUsers() {
            try{
                let constArray = [];   
                 const snapshot = await db.collection('Users').get();
                 snapshot.forEach((doc) => {
                // console.log(doc.id, '=>', doc.data());
                 constArray.push(doc.data());
                 });
                //console.log(constArray);
                return constArray;

                }catch(e){
                    console.error(e)
                }
       };
       //Create a new user
       postNewUser (){

                try{
                    console.log("creating document")
                    const docRef = db.collection('Users').doc(`${this.firstName}${this.lastName}`);

                            docRef.set({
                            FirstName: this.firstName,
                            LastName: this.lastName,
                            Department: this.department,
                            Submissions:[
                                {
                                    mask: this.mask,
                                    travel: this.travel,
                                    travelUS: this.travelUS,
                                    fever: this.fever,
                                    cough: this.cough,
                                    shortBreath: this.shortBreath,
                                    cold: this.cold,
                                    weakness: this.weakness,
                                    soreThroat: this.soreThroat,
                                    smell: this.smell, 
                                    date: this.date,
                                    work: this.work,
                                    workCOVID: this.workCOVID
                                }
                            ]
                        });
                    
                }catch(e){
                    console.error(e)
                }
        
                console.log("New User " + this.firstName + " " + this.lastName + " created")
            }  
        //Find User by Name

       async checkForUser(){

        try{
            let results = await this.getUsers();
            //console.log(results)
            for(let i = 0; i < results.length; i++){
                if(results[i].FirstName === this.firstName && results[i].LastName === this.lastName ){
                    console.log("Userfound")
                    console.log(results[i])
                    return true
                }
            }
            console.log("Preparing to create new User")
            return false
            }catch(e){
                console.error(e)
            }
            
        }

        //Update User
        async addSubmission(){

            try{
                const submission = {
                                    mask: this.mask,
                                    travel: this.travel,
                                    travelUS: this.travelUS,
                                    fever: this.fever,
                                    cough: this.cough,
                                    shortBreath: this.shortBreath,
                                    cold: this.cold,
                                    weakness: this.weakness,
                                    soreThroat: this.soreThroat,
                                    smell: this.smell, 
                                    work: this.work,
                                    workCOVID: this.workCOVID,
                                    date: this.date
                                }
                const userRef =  db.collection('Users').doc(`${this.firstName}${this.lastName}`);                
                console.log(userRef)
                let myDoc = await userRef.get();
                const subs = await userRef.set(
                    {   
                        "Department" : this.department,
                        "FirstName" : this.firstName,
                        "LastName" :   this.lastName,
                        "Submissions" : [...myDoc.data().Submissions, submission]}
                )
                console.log("New Submission Posted")
            } catch(e){
                console.error(e)
            }
           
        }
        async postRequest(){
            try{
                let checkForUser =  await this.checkForUser();
                console.log(checkForUser)
                if(checkForUser  === true ){
                    console.log("adding to exisiting user")
                    //find correct document and update it
                    this.addSubmission();
                }else{
                    console.log("posting New User")
                    this.postNewUser();
                }
            }catch(e){
                console.log(e)
            }
            
        
        }
}

export default PostToFireStore