import { handleLead, type LeadEnv } from '../../src/utils/leadHandler';

// POST /api/lead. Ruta mai specifică are prioritate peste functions/[[path]].ts.
export const onRequest = ({ request, env }: { request: Request; env: LeadEnv }): Promise<Response> =>
  handleLead(request, env);
