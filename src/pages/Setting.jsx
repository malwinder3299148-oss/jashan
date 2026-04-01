import React from 'react'
import "./Setting.css";

const Setting = () => {
  return (
    <div className="Setting-wrapper">

    <div className="Setting-container">
            <h1>Settings</h1>
            <p className="subtitle">Configure your workspace preferences</p>

            <div className="card">
                <h3>Company information</h3>

                <div className="row">
                    <span>Company Name</span>
                    <span>Acme Corp</span>
                </div>

                <div className="row">
                    <span>Industry</span>
                    <span>Technology</span>
                </div>

                <div className="row">
                    <span>Employees</span>
                    <span>156</span>
                </div>

                <div className="row">
                    <span>Pay Cycle</span>
                    <span>Monthly</span>
                </div>
                </div>
            </div>
        </div>
  );
}

export default Setting




