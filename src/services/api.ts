import axios from "axios";

const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:t0HOXjkW";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface QuoteResponse {
  user: {
    id: number;
    created_at: number;
    name: string;
    phoneNum: string;
  };
  quoteInfo: {
    id: number;
    created_at: number;
    user_id: number;
    serviceType: string;
    adminRequired: boolean;
    functionList: number[];
  };
  result: {
    id: number;
    created_at: number;
    quoteinfo_id: number;
    expenses: number;
    period: number;
    functionNum: number;
    pmTime: number;
    designTime: number;
    feTime: number;
    beTime: number;
    level: number;
    personnelExpenses: number;
  };
  wage: {
    pmWage: string;
    designWage: string;
    feWage: string;
    beWage: string;
  };
}

export interface CreateQuoteInfoRequest {
  user_id: number;
  serviceType: string;
  adminRequired: boolean;
  functionList: number[];
}

export interface CreateQuoteInfoResponse {
  id: number;
  created_at: number;
  user_id: number;
  serviceType: string;
  adminRequired: boolean;
  functionList: number[];
}

export interface CreateUserRequest {
  name: string;
  phoneNum: string;
}

export interface CreateUserResponse {
  id: number;
  created_at: number;
  name: string;
  phoneNum: string;
}

export const quoteApi = {
  // Get quote result by ID
  getQuoteById: async (id: number): Promise<QuoteResponse> => {
    try {
      const response = await api.get(`/quote/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching quote:", error);
      throw error;
    }
  },

  // Create quote information
  createQuoteInfo: async (
    data: CreateQuoteInfoRequest
  ): Promise<CreateQuoteInfoResponse> => {
    try {
      const response = await api.post("/quoteinfo", data);
      return response.data;
    } catch (error) {
      console.error("Error creating quote info:", error);
      throw error;
    }
  },

  // Create user
  createUser: async (data: CreateUserRequest): Promise<CreateUserResponse> => {
    try {
      const response = await api.post("/user", data);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
};

export default api;
