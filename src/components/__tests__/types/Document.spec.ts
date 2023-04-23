import { describe, it, expect } from 'vitest';

import Document from '@/types/Document';

describe('Document', () => {
  describe('populateFromJSON', () => {
    it('should populate data when given valid JSON', () => {
      const validJson = {
        "data": [
          {
            "id": 1,
            "status": "issued",
            "document_name": "SWAB Test Result",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-01-12T17:58:25.000000Z",
            "expire_at": "2023-01-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 2,
            "status": "approved",
            "document_name": "SWAB Test Result",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": null,
            "expire_at": null,
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          }
        ],
        "links": {
          "first": "http://localhost/document-module/identities/1/documents?page=1",
          "last": "http://localhost/document-module/identities/1/documents?page=1",
          "prev": null,
          "next": null
        },
        "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 1,
          "links": [
            {
              "url": null,
              "label": "pagination.previous",
              "active": false
            },
            {
              "url": "http://localhost/document-module/identities/1/documents?page=1",
              "label": "1",
              "active": true
            },
            {
              "url": null,
              "label": "pagination.next",
              "active": false
            }
          ],
          "path": "http://localhost/document-module/identities/1/documents",
          "per_page": 10,
          "to": 10,
          "total": 2
        }
      };
      const document = new Document();
      expect(() => document.populateFromJSON(validJson)).not.toThrow();
      expect(document.data).toEqual(validJson);
    });

    it('should throw a ValidateError when given invalid JSON', () => {
      const invalidJson = {
        "data": [
          {
            "id": false, // should be a number
            "status": "issued",
            "document_name": "SWAB Test Result",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": "2022-01-12T17:58:25.000000Z",
            "expire_at": "2023-01-12T00:00:00.000000Z",
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          },
          {
            "id": 2,
            "status": 10, // should be a string
            "document_name": "SWAB Test Result",
            "issuer_name": "ISSUER NAME",
            "issuer_logo_url": "https://placehold.co/600x400.png",
            "recipient_name": "John Frusciante",
            "received_on": null,
            "expire_at": null,
            "created_at": "2022-01-12T10:45:10.000000Z",
            "updated_at": "2022-01-12T17:58:25.000000Z",
            "archived_at": null,
            "deleted_at": null
          }
        ],
        "links": {
          "first": "http://localhost/document-module/identities/1/documents?page=1",
          "last": "http://localhost/document-module/identities/1/documents?page=1",
          "prev": null,
          "next": null
        },
        "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 1,
          "links": [
            {
              "url": null,
              "label": "pagination.previous",
              "active": false
            },
            {
              "url": "http://localhost/document-module/identities/1/documents?page=1",
              "label": "1",
              "active": true
            },
            {
              "url": null,
              "label": "pagination.next",
              "active": false
            }
          ],
          "path": "http://localhost/document-module/identities/1/documents",
          "per_page": '10', // should be a number
          "to": 10,
          "total": 2
        }
      };
      const document = new Document();
      expect(() => document.populateFromJSON(invalidJson)).toThrow();
    });
  });
});