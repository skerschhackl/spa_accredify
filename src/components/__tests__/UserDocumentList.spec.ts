import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserDocumentList from '@/components/UserDocumentList.vue'


describe('UserDocumentList', () => {
  const documents = [
    {
      id: 1,
      document_name: 'Document 1',
      received_on: '2022-05-01T10:00:00.000Z'
    },
    {
      id: 2,
      document_name: 'Document 2',
      received_on: '2022-05-02T10:00:00.000Z'
    },
    {
      id: 3,
      document_name: 'Document 3',
      received_on: ''
    }
  ];
  const wrapper = mount(UserDocumentList, { props: { documents: documents } });

  it('renders the page', () => {
    expect(wrapper.find('h4').text()).toContain('Recent Documents')
  }),

  it('renders the document list correctly', () => {
    const documentListRows = wrapper.findAll('.document-list--row');
    expect(documentListRows).toHaveLength(documents.length + 1); // thead + number of documents
    expect(documentListRows[1].text()).toContain(documents[0].document_name);
    expect(documentListRows[1].text()).toContain('01 May 2022');
    expect(documentListRows[2].text()).toContain(documents[1].document_name);
    expect(documentListRows[2].text()).toContain('02 May 2022');
    expect(documentListRows[3].text()).toContain(documents[2].document_name);
    expect(documentListRows[3].text()).toContain('-');
  });
});
