"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Home() {
  const [roomCount, setRoomCount] = useState("");
  const [rooms, setRooms] = useState();
  const [tempRooms, setTempRooms] = useState("");
  const [tempRoomStrength, setTempRoomStrength] = useState("");

  const boxes = Array.from(
    { length: parseInt(roomCount, 10) },
    (_, i) => i + 1
  );

  const RoomInputComponent = (number: any) => {
    return (
      <div>
        <p>Room Number {number}</p>
        <Input
          label="Room ID"
          placeholder="Enter the room ID"
          onValueChange={setTempRooms}
        />
        <Input
          label="Room Strength"
          placeholder="Enter the room strength"
          onValueChange={setTempRoomStrength}
        />
      </div>
    );
  };

  return (
    <section className="flex flex-col  justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row gap-5">
        <Input
          label="Number of Rooms"
          placeholder="Enter the number of rooms"
          onValueChange={setRoomCount}
        />
        <Button className="p-7" color="warning">
          Set Room Count
        </Button>
      </div>
      <div>
        {/* {boxes.map((number) => (
        <RoomInputComponent key={number} number={number} />
      ))} */}
      </div>
    </section>
  );
}
