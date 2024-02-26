import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function User(username: string, password: string) {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const res = axios.post("http:3000/user", {
        body: {
          username: username,
          password: password,
        },
      });
      if (!res) {
        return console.log("no res");
      }
      console.log(res);
      navigate("/dashboard");
      return;
    } catch (error) {
      console.log(error);
    }
  });
}
