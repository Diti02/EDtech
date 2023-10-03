const mongoose = require("mongoose");
require("dotenv").config();

const dbLink = "mongodb+srv://ditibanerjee12:xattJBsKS0JTETxr@cluster0.edgnjhs.mongodb.net/myproject";

exports.connect = () => {
	mongoose
		.connect(dbLink, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
