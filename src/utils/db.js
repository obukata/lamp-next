//TODO - 実際には、ここでDBと接続してデータを持ってくる。一旦テストで適当に返します。
export async function getUserFromDb(username, password) {
  // Simulate a database call with hardcoded values
  const hardcodedUsername = "jsmith";
  const hardcodedEmail = "test@sample.com";
  const hardcodedPassword = "MDEwMTAxMDE=";

  // Check if the provided email and password match the hardcoded values
  if (
    username === hardcodedUsername &&
    password === hardcodedPassword
  ) {
    console.log('ok')
    // Return a mock user object
    return {
      id: 1,
      name: "Test User",
      username: hardcodedUsername,
      email: hardcodedEmail,
    };
  }

  console.log(`${username}: ${hardcodedUsername}`)
  console.log(`${password}: ${hardcodedPassword}`)

  // Return null if no match is found
  return null;
}