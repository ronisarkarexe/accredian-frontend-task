"use client";
import HeaderComponent from "@/components/header";
import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

const ReferredList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://accredian-backend-task-chi.vercel.app/api/v1/refer"
        );
        const data = await response.json();
        if (data) {
          setUsers(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <h2 className="text-2xl text-center text-blue-500 my-3">User Lists.</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="text-sm text-blue-500 ml-3 md:ml-10 mr-3 md:mr-10 mt-3 flex items-center justify-between border border-gray-300 px-3 md:px-6 py-3 rounded-md cursor-pointer flex-wrap"
          >
            <div className="flex gap-2">
              <h4 className="text-xs md:text-base"> {user.name} </h4>
              <h4 className="text-xs md:text-base"> {user.email} </h4>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h2 className="text-xs text-center text-blue-500 my-3">No Users.</h2>
        </div>
      )}
    </div>
  );
};

export default ReferredList;
