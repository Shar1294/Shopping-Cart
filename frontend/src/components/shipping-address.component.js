import React, { useState } from "react";
import "../styles/global.css";

const ShippingAddress = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pinCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="parent-div">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="addressLine1">Address Line 1:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLine1"
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLine2">Address Line 2 (Unit):</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLine2"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pinCode">Pin Code:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="pinCode"
                                name="pinCode"
                                value={formData.pinCode}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShippingAddress;
