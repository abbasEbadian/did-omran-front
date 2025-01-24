import { getToken } from "@/auth";

export async function _fetch(url: string, options: RequestInit = {}) {
  const token = await getToken();

  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  console.log('Request:', url, options);

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    return "خطا در ارتباط با سرور";
  }

  const data = await response.json();
  console.log('Response:', data);

  return data;
}