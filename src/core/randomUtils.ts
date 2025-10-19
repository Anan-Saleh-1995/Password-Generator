export function getCrypto(): Crypto {
  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    return window.crypto;
  }
  throw new Error('Secure crypto.getRandomValues not available in this context.');
}

export function secureRandomInt(max: number): number {
  if (max <= 0 || !Number.isFinite(max)) {
    throw new Error('secureRandomInt: invalid max');
  }
  const crypto = getCrypto();
  const range = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  let x;
  do {
    crypto.getRandomValues(buf);
    x = buf[0];
  } while (x >= range);
  return x % max;
}

export const pickRandom = (charset: string): string => {
  if (!charset || charset.length === 0) {
    throw new Error('pickRandom: empty charset');
  }
  const idx = secureRandomInt(charset.length);
  return charset[idx];
};

export const shuffle = (array: string[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
};
