import api from "@/config/api"; // Assuming you have a config/api.js to configure axios

export const createPayment = async ({ planName, price, quantity, jwt }) => {
  // console.log("Sending to backend:", {
  //   name: planName,
  //   amount: price, // Convert price to cents
  //   currency: "usd",
  //   quantity: quantity,
  // });

  try {
    const { data } = await api.post(`/api/payment/create-checkout-session`, {
      name: planName,
      amount: price * 100, // Stripe expects amount in cents
      currency: "usd",     // Default currency (update as needed)
      quantity: 1,         // Always send 1
    }, {
      headers: { Authorization: `Bearer ${jwt}` } // Attach JWT for authentication
    });
    console.log("data:"+data);
    if (data) {
      window.location.href = data; // Redirect to Stripe
    }
  } catch (error) {
    console.error("Error creating payment session:", error.response?.data || error.message);
  }
};
