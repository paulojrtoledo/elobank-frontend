import { apiClient } from "../lib/apiClient";
import type { User } from "../types/auth";

type CreateCustomerRequest = {
  name: string;
  cpf: string;
  password: string;
  email: string;
};

export async function createCustomer(data: CreateCustomerRequest): Promise<User> {
  const response = await apiClient.post<User>("/customers", data);
  return response.data;
}

export async function getMe(): Promise<User> {
  const response = await apiClient.get<User>("/customers/me");
  return response.data;
}