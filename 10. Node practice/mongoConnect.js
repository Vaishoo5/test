const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName='Product_DB';

async function connectAndQuery(){
    const client = new MongoClient(url);
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const db=client.db(dbName);
        const collection = db.collection('Products');
        const docs=await collection.find({}).toArray();
        console.log('Documents: ',docs);
    }catch(error){
        console.log('Error: ',error);
    }finally{
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}
connectAndQuery();