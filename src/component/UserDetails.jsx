import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const user_id = params.id;
  return <div>List of UserDetails {user_id}</div>;
};
