import ENDPOINT from "./ENDPOINT";

const API_GET_PLANTS = (valueCardSun, valueCardWater, valueCardPets) => {
  const controller = new AbortController();
  // 5 second timeout: time to tackle the retch
  const timeoutFetch = setTimeout(() => controller.abort(), 5000);

  return fetch(
    `${ENDPOINT}?sun=${valueCardSun}&water=${valueCardWater}&pets=${valueCardPets}`,
    { signal: controller.signal }
  ).then((r) => r.json());
};

export default API_GET_PLANTS;
