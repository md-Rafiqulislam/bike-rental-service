
// all the imports here
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

// main function
async function main() {
    try {
        // connect the server to mongodb
        await mongoose.connect(config.dataBaseUrl as string);

        // call the app to run the server
        app.listen(config.port, () => {
            console.log(`bike rental service app is listening on port ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

// call the main function
main();