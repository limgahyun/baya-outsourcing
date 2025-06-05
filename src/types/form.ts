export interface BaseContactFormData {
  name: string;
  phoneNum: string;
}

export interface InquiryFormData extends BaseContactFormData {
  email: string;
  serviceName: string;
  budget: string;
  timeline: string;
  description: string;
  serviceType: string;
}

export interface QuoteFormData extends BaseContactFormData {
  adminRequired: boolean;
  functionList: number[];
  serviceType: string;
}
