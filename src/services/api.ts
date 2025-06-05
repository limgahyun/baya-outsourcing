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
  quoteInfo: {
    id: number;
    created_at: number;
    user_id: number;
    serviceType: string;
    adminRequired: boolean;
    functionList: number[];
  };
  quoteResultId: number;
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

interface FileMetadata {
  access: string;
  path: string;
  name: string;
  type: string;
  size: number;
  mime: string;
  meta: Record<string, unknown>;
}

interface CreateInquiryRequest {
  user_id: number;
  projectName?: string;
  serviceType: string;
  detailsText: string;
  designReferenceText?: string;
  quoteresult_id?: number;
  email?: string;
  detailsFile?: FileMetadata;
  designReferenceFile?: FileMetadata;
}

interface CreateInquiryResponse {
  id: number;
  created_at: number;
  // Add other response fields if needed
}

export const quoteApi = {
  // Get quote result by ID
  getQuoteResultById: async (id: number): Promise<QuoteResponse> => {
    try {
      const response = await api.get(`/quoteresult/${id}`);
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

  // Create inquiry
  createInquiry: async (
    data: CreateInquiryRequest
  ): Promise<CreateInquiryResponse> => {
    try {
      const response = await api.post("/requestinfo", data);
      return response.data;
    } catch (error) {
      console.error("Error creating inquiry:", error);
      throw error;
    }
  },
};

export default api;
