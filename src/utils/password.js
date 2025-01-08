//TODO - それっぽい処理だけにとどめてます。ちゃんとした実装は後でしてください。
/**
 * Salts and hashes a plaintext password.
 * This is a placeholder function. Replace this with a secure implementation
 * using libraries like bcrypt or argon2 in a production environment.
 *
 * @param {string} password - The plaintext password to be hashed.
 * @returns {string} - A salted and hashed password string.
 */
export function saltAndHashPassword(password) {
  // Simulate salting and hashing (DO NOT USE THIS IN PRODUCTION)
  // const salt = "random_salt"; // Replace with a proper salt generator
  const hash = `${Buffer.from(password).toString("base64")}`;
  return hash;
}

/**
 * Verifies if a provided password matches the stored salted hash.
 * This function is provided as an example for validation logic.
 *
 * @param {string} password - The plaintext password to validate.
 * @param {string} storedHash - The stored salted hash to compare against.
 * @returns {boolean} - Returns true if the password is valid, false otherwise.
 */
export function verifyPassword(password, storedHash) {
  // Split the stored hash into salt and hashed part
  const [salt, hash] = storedHash.split(":");

  // Recreate the hash with the provided password and salt
  const testHash = `${salt}:${Buffer.from(password).toString("base64")}`;

  // Compare the recreated hash with the stored hash
  return testHash === storedHash;
}