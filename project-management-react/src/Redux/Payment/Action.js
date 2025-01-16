import api from "@/config/api"; // Assuming you have a config/api.js to configure axios

export const createPayment = async ({ planName, price, quantity, jwt }) => {
  try {
    // Gửi yêu cầu tới backend
    const { data } = await api.post(
        `/api/payment/create-checkout-session`,
        {
          name: planName,
          amount: price * 100, // Stripe expects amount in cents
          currency: "usd",     // Default currency
          quantity: 1,         // Always send 1
        },
        {
          headers: { Authorization: `Bearer ${jwt}` }, // Đính kèm JWT để xác thực
        }
    );

    console.log("Response data:", JSON.stringify(data, null, 2)); // Hiển thị log chi tiết

    // Kiểm tra và chuyển hướng
    if (data?.sessionUrl) {
      console.log("Redirecting to:", data.sessionUrl);
      window.location.href = data.sessionUrl; // Chuyển hướng tới URL trả về từ Stripe
    } else {
      console.error("Missing sessionUrl in response:", data);
      alert("Unable to process payment. Please try again.");
    }
  } catch (error) {
    console.error("Error creating payment session:", error.response?.data || error.message);
    alert("An error occurred while creating the payment session.");
  }
};
