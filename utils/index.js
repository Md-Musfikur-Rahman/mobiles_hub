export async function PhonesListFetch(brands) {
  const response = await fetch(
    `https://phone-specs-api.vercel.app/brands/${brands}`
  );
  const result = await response.json();
  return result;
}

export async function PhoneSpecsFetch(phones) {
  const response = await fetch(`https://phone-specs-api.vercel.app/${phones}`);
  const result = await response.json();
  return result;
}

export async function LatestPhone() {
  const response = await fetch(`https://phone-specs-api.vercel.app/latest`);
  const result = await response.json();
  return result;
}

export async function TopByFanPhone() {
  const response = await fetch(
    `https://phone-specs-api.vercel.app/top-by-fans`
  );
  const result = await response.json();
  return result;
}

export async function TopByInternetPhone() {
  const response = await fetch(
    `https://phone-specs-api.vercel.app/top-by-interest`
  );
  const result = await response.json();
  return result;
}
