import type Identifyable from "./Identifyable"

export default interface Document extends Identifyable {
  status: string;
  document_name: string;
  issuer_name: string;
  issuer_logo_url: string;
  recipient_name: string;
  received_on: string | null;
  expire_at: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
  deleted_at: string | null;
};

export default interface DocumentResponse {
  data: Document[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};
