export async function PhonesListFetch(brands) {
  const response = await fetch(`http://phone-specs-api.vercel.app/${brands}`);

  const result = await response.json();

  return result;
}

export async function PhoneSpecsFetch(phones) {
  const response = await fetch(`http://phone-specs-api.vercel.app/${phones}`);

  const result = await response.json();

  return result;
}
