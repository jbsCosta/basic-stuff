/**
 * Basic interface to providers that will interact Firebase Authentication.
 */
export interface BasicAuth {
  /**
   * Checks if an user is authenticated to Firebase Authentication.
   */
  isAuthenticated();

  /**
   * Get user's UID
   */
  getUserId();

  /**
   * Gets user's name
   */
  getUserName();

  /**
   * Gets user's email
   */
  getUserEmail();

  /**
   * Authenticates user with email and password
   * @param email user's email
   * @param password user's password
   */
  signInWithEmailAndPassword(email, password);

  /**
   * Creates user with email and password
   * @param email user's email
   * @param password user's password
   */
  signUpWithEmailAndPassword(email, password);

  /**
   * Updates user profile
   * @param profile user's profile
   */
  updateUserProfile(profile: any);

  /**
   * Resets user's password
   * @param email user's email
   */
  resetPassword(email: string);

  /**
   * Signs user out
   */
  signOut();

}