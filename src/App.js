import React, { useState, useEffect } from "react";

function OrderLinesApp() {
  const [orderLines, setOrderLines] = useState([]);
  const [filteredQuantity, setFilteredQuantity] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);
  console.log(typeof id)

  useEffect(() => {
    fetchOrderLines();
  }, [id]);

  const fetchOrderLines = async () => {
    try {
      const response = await fetch(
        `https://minizuba-fn.azurewebsites.net/api/orderlines?type_id=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch order lines");
      }
      const data = await response.json();
      setOrderLines(data.slice(0, 100));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching order lines:", error);
    }
  };

  const filteredItems = orderLines.filter((value) => {
    if (filteredQuantity.trim() !== "") {
      return value.Quantity === +filteredQuantity;
    } else {
      return value;
    }
  });

  const getColorForPackageType = (packageTypeID) => {
    switch (packageTypeID) {
      case 1:
        return "green";
      case 2:
        return "blue";
      case 3:
        return "red";
      case 4:
        return "orange";
      case 5:
        return "purple";
      case 6:
        return "yellow";
      case 7:
        return "cyan";
      case 8:
        return "magenta";
      case 9:
        return "lime";
      case 10:
        return "pink";
      case 11:
        return "teal";
      case 12:
        return "indigo";
      case 13:
        return "brown";
      case 14:
        return "black";
      default:
        return "black"; // Default color
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 fs-2 h1 d-block mx-auto text-light">
            Minizuba Packaging Solutions
          </span>
        </div>
      </nav>
      <div className="px-5">
        <h4 className="fs-2 my-3">Select The Orderline</h4>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio1"
            value={1}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 1}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio2"
            value={2}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 2}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio3"
            value={3}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 3}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            3
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio4"
            value={4}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 4}
          />
          <label className="form-check-label" htmlFor="inlineRadio4">
            4
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio5"
            value={5}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 5}
          />
          <label className="form-check-label" htmlFor="inlineRadio5">
            5
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio6"
            value={6}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 6}
          />
          <label className="form-check-label" htmlFor="inlineRadio6">
            6
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio7"
            value={7}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 7}
          />
          <label className="form-check-label" htmlFor="inlineRadio7">
            7
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio8"
            value={8}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 8}
          />
          <label className="form-check-label" htmlFor="inlineRadio8">
            8
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio9"
            value={9}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 9}
          />
          <label className="form-check-label" htmlFor="inlineRadio9">
            9
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio10"
            value={10}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 10}
          />
          <label className="form-check-label" htmlFor="inlineRadio10">
            10
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio11"
            value={11}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 11}
          />
          <label className="form-check-label" htmlFor="inlineRadio11">
            11
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio12"
            value={12}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 12}
          />
          <label className="form-check-label" htmlFor="inlineRadio12">
            12
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio13"
            value={13}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 13}
          />
          <label className="form-check-label" htmlFor="inlineRadio13">
            13
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            style={{ cursor: "pointer" }}
            id="inlineRadio14"
            value={14}
            onChange={(e) => setId(e.target.value)}
            checked={+id === 14}
          />
          <label className="form-check-label" htmlFor="inlineRadio14">
            14
          </label>
        </div>
        <input
          type="text"
          placeholder="Filter by Quantity"
          className="form-control mb-4 w-50 mt-3"
          value={filteredQuantity}
          onChange={(e) => setFilteredQuantity(e.target.value)}
        />
        {loading ? (
          <p className="fs-3">Loading...</p>
        ) : (
          <table className="table table-bordered">
            <thead className="table-secondary">
              <tr>
                <th scope="col">OrderLineID</th>
                <th scope="col">OrderID</th>
                <th scope="col">StockItemID</th>
                <th scope="col">Description</th>
                <th scope="col">PackageTypeID</th>
                <th scope="col">Quantity</th>
                <th scope="col">UnitPrice</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((orderLine) => (
                <tr
                  key={orderLine.OrderLineID}
                  style={{
                    color: getColorForPackageType(orderLine.PackageTypeID),
                  }}
                >
                  <td>{orderLine.OrderLineID}</td>
                  <td>{orderLine.OrderID}</td>
                  <td>{orderLine.StockItemID}</td>
                  <td>{orderLine.Description}</td>
                  <td>{orderLine.PackageTypeID}</td>
                  <td>{orderLine.Quantity}</td>
                  <td>{orderLine.UnitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default OrderLinesApp;
