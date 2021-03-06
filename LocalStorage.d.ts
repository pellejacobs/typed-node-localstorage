export class LocalStorage {
  constructor(path: string)

  /**
   * Amount of keys stored
   */
  length: number

  setItem(key: string, value: string | number): void
  getItem(key: string): string
  removeItem(key: string): void
  key(keyIndex: number): string
  clear(): void
}
