# Prepared WhatsApp messages and received enquiries

Scope: event naming in the existing ContactPage and B2BLeadForm submit handlers. The shared B2B form is used on BusinessPage and CorporatePage.

The forms prepare a WhatsApp message and ask the browser to open WhatsApp. They cannot confirm that the visitor sent it, that ING Broker received it, or that it is a qualified enquiry.

Both handlers now emit one `whatsapp_message_prepared` event through the existing analytics helper, instead of `quote_request_submit` or `audit_submit`. Existing source, page path, audience classification and contact method properties remain unchanged. Form field values are not added to the event. The name records message preparation even if the external application fails to open.

Legacy events and key-event definitions remain in GA4 for historical interpretation. No historical data, key-event configuration, vendor IDs, bootstrap, consent settings or collection destinations are changed. The new event is not marked as a key event by this change. Do not sum the old and new names as received enquiries.

For comparisons spanning this release, map the two legacy names and the new name to the same preparation stage, retaining the source dimension. Count a received enquiry only after matching an entry in an authorized receiving system. Qualified enquiries, offers, issued policies and confirmed payments need their own evidence.

The production hostname and QA guards remain unchanged. Controlled tests must block analytics ingestion and prevent external WhatsApp navigation. A browser spy can verify the event payload locally, but it does not prove server-side receipt. Remotely managed GTM rules require separate inspection before claiming that no other tag emits a legacy event.
