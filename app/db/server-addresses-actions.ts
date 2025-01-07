"use server";

import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/utils/supabase/auth";

// Function to get user server addresses
const getUserServerAddresses = async () => {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: serverAddresses, error } = await supabase
    .from("server_addresses")
    .select()
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching server addresses:", error);
    return [];
  }

  return serverAddresses;
};

// Function to add a server address
const addServerAddress = async (serverAddress: string) => {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("server_addresses")
    .insert([{ user_id: user.id, server_address: serverAddress }])
    .select(); // Use select() to return the inserted data

  console.log(serverAddress);

  if (error) {
    console.error("Error adding server address:", error);
    throw new Error("Could not add server address");
  }

  // Return the ID of the newly created server address
  return { message: "Server address added successfully", id: data[0].id };
};

// Function to delete a server address
const deleteServerAddress = async (addressId: string) => {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("server_addresses")
    .delete()
    .eq("id", addressId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error deleting server address:", error);
    throw new Error("Could not delete server address");
  }

  return { message: "Server address deleted successfully" };
};

export { getUserServerAddresses, addServerAddress, deleteServerAddress };
