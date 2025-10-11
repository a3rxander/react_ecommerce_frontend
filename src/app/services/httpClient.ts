export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions extends Omit<RequestInit, "body"> {
  data?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api";

const buildQueryString = (params: RequestOptions["params"]) => {
  if (!params) return "";

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    searchParams.append(key, String(value));
  });
  const query = searchParams.toString();
  return query ? `?${query}` : "";
};

const resolveToken = () => {
  if (typeof window === "undefined") return undefined;
  return window.localStorage.getItem("auth:token") ?? undefined;
};

const request = async <TResponse>(
  endpoint: string,
  method: HttpMethod,
  { data, params, headers, ...init }: RequestOptions = {},
): Promise<TResponse> => {
  const token = resolveToken();
  const requestHeaders = new Headers(headers);
  requestHeaders.set("Content-Type", "application/json");

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}${buildQueryString(params)}`, {
    ...init,
    method,
    headers: requestHeaders,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || response.statusText);
  }

  if (response.status === 204) {
    return undefined as TResponse;
  }

  const text = await response.text();
  return text ? (JSON.parse(text) as TResponse) : (undefined as TResponse);
};

export const httpClient = {
  get: <TResponse>(endpoint: string, options?: RequestOptions) =>
    request<TResponse>(endpoint, "GET", options),
  post: <TResponse>(endpoint: string, options?: RequestOptions) =>
    request<TResponse>(endpoint, "POST", options),
  put: <TResponse>(endpoint: string, options?: RequestOptions) =>
    request<TResponse>(endpoint, "PUT", options),
  patch: <TResponse>(endpoint: string, options?: RequestOptions) =>
    request<TResponse>(endpoint, "PATCH", options),
  delete: <TResponse>(endpoint: string, options?: RequestOptions) =>
    request<TResponse>(endpoint, "DELETE", options),
};

export default httpClient;
