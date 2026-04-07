import { apiClient } from "../lib/apiClient";

type CreateCustomerRequest = {
  name: string;
  cpf: string;
  password: string;
  email: string;
};

type CreateCustomerResponse = {
  id: number;
  name: string;
  email: string;
};

export async function createCustomer(data: CreateCustomerRequest) {
  const response = await apiClient.post<CreateCustomerResponse>(
    "/customers",
    data
  );

  return response.data;
}