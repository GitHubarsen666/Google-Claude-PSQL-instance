import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!");

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

    try {
        await AppDataSource.manager.save(user);
        console.log("Saved a new user with id: " + user.id);
    } catch (error) {
        console.error("Error saving user:", error);
    }

    console.log("Loading users from the database...");
    try {
        const users = await AppDataSource.manager.find(User);
        console.log("Loaded users:", users);
    } catch (error) {
        console.error("Error loading users:", error);
    }

    console.log("Here you can setup and run express / fastify / any other framework.");
}).catch((error) => console.error("Error during Data Source initialization:", error));

