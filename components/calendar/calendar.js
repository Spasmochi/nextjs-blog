import React, { useState } from "react";
import Calendar from "react-calendar";

function calendar() {
  return (
    <div className="flex items-center justify-between py-2 px-6">
      <Calendar />
    </div>
  );
}

export default calendar;
