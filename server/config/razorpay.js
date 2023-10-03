const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: "rzp_test_pv8jsf16OTSnGX",
	key_secret: process.env.RAZORPAY_SECRET,
});
