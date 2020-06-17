const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
//const citiesRef = db.collection('cities');
let citiesRef = db.collection('cities');
let setSf = citiesRef.doc('SF').set({
  name: 'San Francisco', state: 'CA', country: 'USA',
  capital: false, population: 860000
});
let setLa = citiesRef.doc('LA').set({
  name: 'Los Angeles', state: 'CA', country: 'USA',
  capital: false, population: 3900000
});
let setDc = citiesRef.doc('DC').set({
  name: 'Washington, D.C.', state: null, country: 'USA',
  capital: true, population: 680000
});
let setTok = citiesRef.doc('TOK').set({
  name: 'Tokyo', state: null, country: 'Japan',
  capital: true, population: 9000000
});
let setBj = citiesRef.doc('BJ').set({
  name: 'Beijing', state: null, country: 'China',
  capital: true, population: 21500000
});

/*let sfRef = db.collection('cities').doc('SF');
sfRef.listCollections().then(collections => {
  collections.forEach(collection => {
    console.log('Found subcollection with id:', collection.id);
  });
});*/
/*let cityRef = db.collection('cities').doc('SF');
let getDoc = cityRef.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });*/

/*getDialogue().then(result =>{
	console.log(result);
	const obj = result;
	const quoteData = {
		Name: obj.Name,
		Phonenumber: obj.Phonenumber
	};
	return db.collection('sampleData').doc('users')
	.set(quoteData).then(() =>
	console.log('new Dialogue written to database'));
});

function getDialogue(){
	return new Promise(function(resolve, reject) {
	resolve({
	"Name":"Druva",
	"Phonenumber":"9999999999"
	});
})
}*/

let firstThree = citiesRef.orderBy('name').limit(3);
firstThree.get().then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
else{
console.log( firstThree.data());
}});
