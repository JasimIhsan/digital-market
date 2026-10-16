/*
 * Mocked network layer. Replace the bodies of these functions with real
 * requests; callers only depend on the signatures.
 */

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  interest: string;
  budget: string;
  message: string;
}

const MOCK_LATENCY_MS = 900;

function simulateRequest(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
}

export async function submitContactForm(_payload: ContactPayload): Promise<void> {
  await simulateRequest();
}

export async function subscribeToNewsletter(_email: string): Promise<void> {
  await simulateRequest();
}
