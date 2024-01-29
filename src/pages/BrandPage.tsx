import NavBar from "@/components/NavBar";
import React from "react";

export default function BrandPage() {
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
            <th>로고</th>
            <th>브랜드명(ko)</th>
            <th>브랜드명(en)</th>
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
              <div className="items-center">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://picsum.photos/56"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>유쏘풀</div>
            </td>
            <td>
              <div>YouSoful</div>
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
              <div className="items-center">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://picsum.photos/56"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>유쏘풀</div>
            </td>
            <td>
              <div>YouSoful</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
