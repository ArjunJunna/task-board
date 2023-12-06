import axios from 'axios';

export const getTasks = async () => {
  try {
    const response = await axios.get("https://stage-mock.apiwiz.io/v1/tasks", {
      headers: {
        "x-tenant": "b8e236df-4b26-49ef-9532-5e43ea0c10a4",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
