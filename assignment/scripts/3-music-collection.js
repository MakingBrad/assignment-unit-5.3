console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection=[];

function addToCollection(collection, title, artist, yearPublished) {
  let object = {title : title, artist: artist, yearPublished:yearPublished};
  collection.push(object);
  return object;
};

addToCollection(myCollection,"Meatloaf for dinner","Mama","1972");//first
addToCollection(myCollection,"Bat out of hell", "Meatloaf","1979");//second
addToCollection(myCollection,"Sesame Street", "Snuffaloufagus","1981");//third
addToCollection(myCollection,"Van Halen", "1984","1984");//fourth
addToCollection(myCollection,"Van Halen", "1550","1986");//fifth
addToCollection(myCollection,"Van Halen", "Van Halen 2","1979");//sixth

console.log(myCollection);




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
