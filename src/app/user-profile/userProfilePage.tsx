import { UserProfile } from "@clerk/nextjs";
import React from "react";

const UserProfilePage = () => (
  <UserProfile 
    path="/user-profile" 
    additionalOAuthScopes={{
      google: [
        "openid",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/calendar.readonly",
        "https://www.googleapis.com/auth/calendar.events.readonly",
        "offline_access"
      ]
    }}
  />
);

export default UserProfilePage;