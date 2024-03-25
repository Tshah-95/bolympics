// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Represents the shape of the user object found in the session.
   * This extends the default session user with additional properties.
   */
  interface User {
    id: string; // Adding an id property
  }

  /**
   * Represents the shape of the session object.
   * This extends the default session with additional properties.
   */
  interface Session {
    user: User; // Now includes our custom User type with an id
  }
}
