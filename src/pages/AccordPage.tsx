import NavBar from "@/components/NavBar";
import React from "react";

export default function AccordPage() {
  return (
    <div>
      <NavBar />
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>No.</th>
            <th>유형</th>
            <th>향조</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>1</td>
            <td>
              <div>로즈</div>
            </td>
            <td>
              <div>로즈(장미)</div>
            </td>
          </tr>
          <tr className="">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>1</td>
            <td>
              <div>로즈</div>
            </td>
            <td>
              <div>로즈(장미)</div>
            </td>
          </tr>
          <tr className="">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>1</td>
            <td>
              <div>로즈</div>
            </td>
            <td>
              <div>로즈(장미)</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
